
function isGMap(url) {
    const googlePattern = /^https?:\/\/(www\.)?google\.[a-z.]+\/maps\/dir/i;
    const osmPattern = /^https?:\/\/(www\.)?(openstreetmap|map\.project-osrm|osrm-frontend\.wolt)\./i;
    return googlePattern.test(url) || osmPattern.test(url);
}

function extractDistanceFromLink(url) {
    try {
        const decoded = decodeURIComponent(url);
        const coords = decoded.match(/(\d{2}\.\d+),(\d{2}\.\d+)/g);
        if (!coords || coords.length < 2) return 0;

        const [lat1, lon1] = coords[0].split(',').map(Number);
        const [lat2, lon2] = coords[1].split(',').map(Number);

        const R = 6371000;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) ** 2 +
                  Math.cos(lat1 * Math.PI / 180) *
                  Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(R * c);
    } catch {
        return 0;
    }
}

// Parse coordinate pairs from a direction link. Returns an array of strings like ['lat1,lon1', 'lat2,lon2'] or null on failure.
function parseCoordsFromLink(url) {
    try {
        const decoded = decodeURIComponent(url);
        const coords = decoded.match(/(\d{2}\.\d+),(\d{2}\.\d+)/g);
        return coords && coords.length >= 2 ? coords.slice(0, 2) : null;
    } catch {
        return null;
    }
}

// Attempt to fetch a real route distance from OSRM. Returns the distance in meters or 0 on failure.
async function getRouteDistance(coords) {
    if (!coords || coords.length < 2) return 0;
    try {
        const [lat1, lon1] = coords[0].split(',').map(Number);
        const [lat2, lon2] = coords[1].split(',').map(Number);
        // OSRM expects lon,lat order
        const url = `https://router.project-osrm.org/route/v1/driving/${lon1},${lat1};${lon2},${lat2}?overview=false`;
        const resp = await fetch(url);
        if (!resp.ok) return 0;
        const data = await resp.json();
        if (data.routes && data.routes[0] && typeof data.routes[0].distance === 'number') {
            return Math.round(data.routes[0].distance);
        }
    } catch (e) {
        // ignore errors and fall back
    }
    return 0;
}

function feeByDistance(m) {
    if (m <= 100) return 3;
    let fee = 3;
    const tier = len => Math.ceil(len / 100);
    const seg1 = Math.min(Math.max(m - 100, 0), 900);
    fee += tier(seg1) * 0.55;
    const seg2 = Math.min(Math.max(m - 1000, 0), 2000);
    fee += tier(seg2) * 0.35;
    const seg3 = Math.min(Math.max(m - 3000, 0), 2000);
    fee += tier(seg3) * 0.30;
    const seg4 = Math.max(m - 5000, 0);
    fee += tier(seg4) * 0.20;
    return fee;
}

function feeForWalkers(m) {
    const tiers = [
        { max: 100, price: 7 },
        { max: 150, price: 8 },
        { max: 200, price: 9 },
        { max: 250, price: 10 },
        { max: 300, price: 11 },
        { max: 350, price: 12 },
        { max: 400, price: 13 },
        { max: 450, price: 14 },
        { max: 500, price: 15 },
        { max: 550, price: 16 }
    ];
    let result = 16;
    for (const t of tiers) {
        if (m <= t.max) { result = t.price; break; }
    }
    return result;
}

async function calculate() {
    const businessOrder = document.getElementById('businessOrder').value.trim();
    const vehicle = document.querySelector('input[name="vehicle"]:checked')?.value;
    const link = document.getElementById('gmap').value.trim();
    const out = document.getElementById('result');
    const bonusEnabled = document.getElementById('bonusToggle').checked;
    const bonus = bonusEnabled ? Number(document.getElementById('bonus').value) || 0 : 0;

    out.classList.remove('error');

    // Validate link format
    if (!isGMap(link)) {
        out.textContent = 'נא לוודא שהקישור הוא למסלול ב-Google Maps או ב-OSRM.';
        out.classList.add('error');
        document.getElementById('copyBtn').disabled = true;
        return;
    }
    // Validate vehicle selection
    if (!vehicle) {
        out.textContent = 'בחר כלי תחבורה.';
        out.classList.add('error');
        document.getElementById('copyBtn').disabled = true;
        return;
    }
    // Determine distance: manual override or attempt route distance then fall back to straight line
    const manualDist = Number(document.getElementById('manualDistance').value);
    let dist = 0;
    if (manualDist > 0) {
        dist = manualDist;
    } else {
        const coords = parseCoordsFromLink(link);
        // try real route distance
        dist = await getRouteDistance(coords);
        if (!dist) {
            dist = extractDistanceFromLink(link);
        }
    }
    if (!dist || dist < 10) {
        out.textContent = 'לא הצלחנו לזהות מרחק מתוך הקישור.';
        out.classList.add('error');
        document.getElementById('copyBtn').disabled = true;
        return;
    }
    // Calculate fee
    const baseFee = vehicle === 'Walker' ? feeForWalkers(dist) : feeByDistance(dist);
    const rawFee = baseFee * (1 + bonus / 100);
    const finalFee = Math.ceil(rawFee);

    const feeHtml = `<span style="color:#27ae60;font-weight:bold;font-size:1.3em;">₪ ${finalFee}</span>`;
    const htmlSummary =
        `${businessOrder ? "תיאור: " + businessOrder + " | תוספת תשלום<br>" : ""}` +
        `מרחק: ${dist} מטר<br>` +
        `תשלום: ${feeHtml}`;
    const plainSummary =
        `${businessOrder ? "תיאור: " + businessOrder + " | תוספת תשלום\n" : ""}` +
        `מרחק: ${dist} מטר\n` +
        `תשלום: ₪ ${finalFee}`;
    out.innerHTML = htmlSummary;
    out.dataset.text = plainSummary;
    document.getElementById('copyBtn').disabled = false;
}

function copyResult() {
    const el = document.getElementById('result');
    const match = el.innerText.match(/₪\s*(\d+)/);
    if (!match) return;
    const amount = match[1];
    navigator.clipboard.writeText(amount).then(() => {
        const popup = document.getElementById('popup');
        // show a friendly message and hide it after a few seconds
        popup.textContent = 'התשלום הועתק';
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
            popup.textContent = '';
        }, 5000);
    }).catch(() => {
        alert('לא ניתן להעתיק לטלפון זה.');
    });
}

function resetForm() {
    document.getElementById('businessOrder').value = '';
    document.querySelectorAll('input[name="vehicle"]').forEach(r => r.checked = false);
    document.getElementById('bonusToggle').checked = false;
    document.getElementById('bonus').style.display = 'none';
    document.getElementById('bonus').value = '';
    document.getElementById('gmap').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('result').classList.remove('error');
    document.getElementById('copyBtn').disabled = true;
}

function toggleBonus() {
    const input = document.getElementById('bonus');
    input.style.display = document.getElementById('bonusToggle').checked ? 'block' : 'none';
    if (!document.getElementById('bonusToggle').checked) input.value = '';
}

function convertToGoogle() {
    const input = document.getElementById('osrmLink').value.trim();
    const output = document.getElementById('convertedLink');
    try {
        const url = new URL(input);
        const coords = decodeURIComponent(url.href).match(/(\d{2}\.\d+),(\d{2}\.\d+)/g);
        if (!coords || coords.length < 2) {
            output.innerHTML = '<span class="error">לא הצלחנו לפענח את הקישור.</span>';
            return;
        }
        const gmapsUrl = "https://www.google.com/maps/dir/" + coords.join('/');
        output.innerHTML = '<a href="' + gmapsUrl + '" target="_blank">' + gmapsUrl + '</a>';
    } catch (e) {
        output.innerHTML = '<span class="error">קישור לא תקין.</span>';
    }
}


function copyDescription() {
    const el = document.getElementById('result');
    const text = el.innerText || '';
    const match = text.match(/תיאור:\s*(.*?)\n/);
    const description = match ? match[1] : '';
    if (!description) return;

    navigator.clipboard.writeText(description).then(() => {
        const popup = document.getElementById('popup');
        popup.textContent = 'תיאור הועתק';
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
            popup.textContent = 'הועתק';
        }, 5000);
    }).catch(() => {
        alert('לא ניתן להעתיק במכשיר זה.');
    });
}
