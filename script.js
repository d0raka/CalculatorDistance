
function isGMap(url) {
    const googlePattern = /^https?:\/\/(www\.)?google\.[a-z.]+\/maps\/dir/i;
    const osmPattern = /^https?:\/\/(www\.)?(openstreetmap|map\.project-osrm|osrm-frontend\.wolt)\./i;
    return googlePattern.test(url) || osmPattern.test(url);
}

// Translation definitions for Hebrew and English. Each language contains all UI strings.
const translations = {
    he: {
        title: 'מחשבון מרחק',
        navTitle: 'מחשבון מרחק',
        businessLabel: 'שם העסק ומספר הזמנה (אופציונלי)',
        businessPlaceholder: 'למשל: Chicken Station #368',
        manualLabel: 'מרחק מסלול במטרים (אופציונלי, גובר על הקישור)',
        manualPlaceholder: 'למשל: 1700',
        bonusLabel: 'בונוס (אופציונלי)',
        bonusPlaceholder: 'הזן בונוס באחוזים',
        transportLabel: 'בחירת כלי תחבורה (חובה)',
        walker: 'הולך רגל',
        bicycle: 'אופניים',
        motorcycle: 'אופנוע',
        vehicle: 'רכב',
        linkLabel: 'קישור – חובה (Google Maps או OpenStreetMap)',
        linkPlaceholder: 'הדבק כאן את הקישור',
        calculateBtn: 'חשב',
        resetBtn: 'איפוס טופס',
        copyBtn: 'העתק תשלום',
        copyDescBtn: 'העתק תיאור הזמנה',
        converterTitle: 'המרת קישור OSRM ל‑Google Maps (לרוב גוגל מפות מציע כמה מסלולים, יש לבחור במסלול התואם לOSRM).',
        osrmLabel: 'הדבק כאן קישור OSRM:',
        osrmPlaceholder: 'https://map.project-osrm.org/...',
        convertBtn: 'המר',
        instructionsTitle: 'איך להשתמש במחשבון',
        instructionsList: [
            'שדה שם העסק ומספר ההזמנה הוא אופציונלי – ניתן להשאיר ריק.',
            'במידה והוזן מרחק ידני ,החישוב יתבצע על פי המרחק שהוזן בלבד.',
            'במידה והוזן ערך בשורת הבונוס , המחשבון יחשב את התשלום כולל אחוזי הבונוס.',
            'הדבקת קישור ל‑Google Maps או OpenStreetMap תוודא שהמרחק תואם למרחק שהוזן לפני',
            'במידה ולא הוזן מרחק בתיבה ,החישוב תשלום יחושב על פי מרחק אוירי (יעודכן בקרוב למסלול בשטח).',
            'כפתור “העתק תשלום” מעתיק את הסכום בלבד (ללא סימן ₪), ו“העתק תיאור הזמנה” מעתיק את התיאור.',
            'המרת קישור OSRM ל‑Google Maps - מאפשר להמיר כל מסלול בOSRM לקישור בGoogle Maps.'
        ],
        invalidLink: 'נא לוודא שהקישור הוא למסלול ב-Google Maps או ב-OSRM.',
        selectVehicle: 'בחר כלי תחבורה.',
        distanceNotFound: 'לא הצלחנו לזהות מרחק מתוך הקישור.',
        descriptionLabel: 'תיאור',
        additionalPayment: 'תוספת תשלום',
        distanceLabel: 'מרחק',
        meters: 'מטר',
        paymentLabel: 'תשלום',
        paymentCopied: 'התשלום הועתק',
        descriptionCopied: 'תיאור הועתק',
        decodeError: 'לא הצלחנו לפענח את הקישור.',
        invalidOsrmLink: 'קישור לא תקין.'
    },
    en: {
        title: 'Distance Calculator',
        navTitle: 'Distance Calculator',
        businessLabel: 'Business name & order number (optional)',
        businessPlaceholder: 'e.g., Chicken Station #368',
        manualLabel: 'Route distance in meters (optional, overrides link)',
        manualPlaceholder: 'e.g., 1700',
        bonusLabel: 'Bonus (optional)',
        bonusPlaceholder: 'Enter bonus percentage',
        transportLabel: 'Select transport type (required)',
        walker: 'Walking',
        bicycle: 'Bicycle',
        motorcycle: 'Motorcycle',
        vehicle: 'Vehicle',
        linkLabel: 'Link – required (Google Maps or OpenStreetMap)',
        linkPlaceholder: 'Paste the link here',
        calculateBtn: 'Calculate',
        resetBtn: 'Reset form',
        copyBtn: 'Copy payment',
        copyDescBtn: 'Copy order description',
        converterTitle: 'Convert OSRM link to Google Maps (may not be precise, differences in map matching).',
        osrmLabel: 'Paste OSRM link here:',
        osrmPlaceholder: 'https://map.project-osrm.org/...',
        convertBtn: 'Convert',
        instructionsTitle: 'How to use the calculator',
        instructionsList: [
            'The business name & order number field is optional – you can leave it blank.',
            'If a manual distance is entered, the calculation will be based solely on the entered distance.',
            'If a value is entered in the bonus field, the calculator will include the bonus percentage in the total.',
            'Pasting a Google Maps or OpenStreetMap link will ensure the distance matches the one entered previously.',
            'If no distance is entered, payment will be calculated based on aerial distance (soon updated to the on-road route).',
            'The “Copy payment” button copies only the amount (without the ₪ sign), and the “Copy order description” button copies the description.',
            'Converting an OSRM link to Google Maps allows you to turn any OSRM route into a Google Maps link.'
        ],
        invalidLink: 'Please make sure the link is a route in Google Maps or OSRM.',
        selectVehicle: 'Please select a transport type.',
        distanceNotFound: 'Could not detect a distance from the link.',
        descriptionLabel: 'Description',
        additionalPayment: 'Additional payment',
        distanceLabel: 'Distance',
        meters: 'meters',
        paymentLabel: 'Payment',
        paymentCopied: 'Payment copied!',
        descriptionCopied: 'Description copied!',
        decodeError: 'Could not parse the link.',
        invalidOsrmLink: 'Invalid link.'
    }
};

// Current language; default is Hebrew
let currentLang = 'he';

// Apply translations to all UI elements and adjust direction
function applyTranslations() {
    const t = translations[currentLang];
    // Update page language and direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
    // Also override body direction to match translation
    document.body.style.direction = currentLang === 'he' ? 'rtl' : 'ltr';
    // Update titles
    document.title = t.title;
    const navTitleEl = document.getElementById('navTitle');
    if (navTitleEl) navTitleEl.textContent = t.navTitle;
    // Business
    const businessLabelEl = document.getElementById('businessLabel');
    if (businessLabelEl) businessLabelEl.textContent = t.businessLabel;
    const businessInputEl = document.getElementById('businessOrder');
    if (businessInputEl) businessInputEl.placeholder = t.businessPlaceholder;
    // Manual distance
    const manualLabelEl = document.getElementById('manualLabel');
    if (manualLabelEl) manualLabelEl.textContent = t.manualLabel;
    const manualInputEl = document.getElementById('manualDistance');
    if (manualInputEl) manualInputEl.placeholder = t.manualPlaceholder;
    // Bonus
    const bonusLabelEl = document.getElementById('bonusLabel');
    if (bonusLabelEl) bonusLabelEl.textContent = ' ' + t.bonusLabel;
    const bonusInputEl = document.getElementById('bonus');
    if (bonusInputEl) bonusInputEl.placeholder = t.bonusPlaceholder;
    // Transport
    const transportLabelEl = document.getElementById('transportLabel');
    if (transportLabelEl) transportLabelEl.textContent = t.transportLabel;
    const walkerLabelEl = document.getElementById('walkerLabel');
    if (walkerLabelEl) walkerLabelEl.textContent = ' ' + t.walker;
    const bicycleLabelEl = document.getElementById('bicycleLabel');
    if (bicycleLabelEl) bicycleLabelEl.textContent = ' ' + t.bicycle;
    const motorcycleLabelEl = document.getElementById('motorcycleLabel');
    if (motorcycleLabelEl) motorcycleLabelEl.textContent = ' ' + t.motorcycle;
    const vehicleLabelEl = document.getElementById('vehicleLabel');
    if (vehicleLabelEl) vehicleLabelEl.textContent = ' ' + t.vehicle;
    // Link
    const linkLabelEl = document.getElementById('linkLabel');
    if (linkLabelEl) linkLabelEl.textContent = t.linkLabel;
    const gmapInputEl = document.getElementById('gmap');
    if (gmapInputEl) gmapInputEl.placeholder = t.linkPlaceholder;
    // Buttons
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) calcBtn.textContent = t.calculateBtn;
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) resetBtn.textContent = t.resetBtn;
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) copyBtn.textContent = t.copyBtn;
    const copyDescBtn = document.getElementById('copyDescBtn');
    if (copyDescBtn) copyDescBtn.textContent = t.copyDescBtn;
    const convertBtn = document.getElementById('convertBtn');
    if (convertBtn) convertBtn.textContent = t.convertBtn;
    // Converter
    const converterTitleEl = document.getElementById('converterTitle');
    if (converterTitleEl) converterTitleEl.textContent = t.converterTitle;
    const osrmLabelEl = document.getElementById('osrmLabel');
    if (osrmLabelEl) osrmLabelEl.textContent = t.osrmLabel;
    const osrmInputEl = document.getElementById('osrmLink');
    if (osrmInputEl) osrmInputEl.placeholder = t.osrmPlaceholder;
    // Instructions
    const instructionsTitleEl = document.getElementById('instructionsTitle');
    if (instructionsTitleEl) instructionsTitleEl.textContent = t.instructionsTitle;
    const instItems = document.querySelectorAll('.instructions-list li');
    if (instItems) {
        t.instructionsList.forEach((txt, idx) => {
            if (instItems[idx]) instItems[idx].textContent = txt;
        });
    }
    // Language toggle button text displays opposite language
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = currentLang === 'he' ? 'English' : 'עברית';
}

// Toggle between Hebrew and English
function toggleLanguage() {
    currentLang = currentLang === 'he' ? 'en' : 'he';
    applyTranslations();
    // Clear outputs and hide containers
    const out = document.getElementById('result');
    if (out) {
        out.textContent = '';
        out.classList.remove('error');
        out.classList.add('hidden');
    }
    const converted = document.getElementById('convertedLink');
    if (converted) {
        converted.textContent = '';
        converted.classList.remove('error');
        converted.classList.add('hidden');
    }
    const copyButton = document.getElementById('copyBtn');
    if (copyButton) copyButton.disabled = true;
}

// Show a popup message for a few seconds
function showPopup(message) {
    const popup = document.getElementById('popup');
    if (!popup) return;
    popup.textContent = message;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
        popup.textContent = '';
    }, 5000);
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
    const t = translations[currentLang];
    // Validate link format
    if (!isGMap(link)) {
        out.textContent = t.invalidLink;
        out.classList.add('error');
        out.classList.remove('hidden');
        document.getElementById('copyBtn').disabled = true;
        return;
    }
    // Validate vehicle selection
    if (!vehicle) {
        out.textContent = t.selectVehicle;
        out.classList.add('error');
        out.classList.remove('hidden');
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
        out.textContent = t.distanceNotFound;
        out.classList.add('error');
        out.classList.remove('hidden');
        document.getElementById('copyBtn').disabled = true;
        return;
    }
    // Calculate fee
    const baseFee = vehicle === 'Walker' ? feeForWalkers(dist) : feeByDistance(dist);
    const rawFee = baseFee * (1 + bonus / 100);
    const finalFee = Math.ceil(rawFee);

    const feeHtml = `<span style="color:#27ae60;font-weight:bold;font-size:1.3em;">₪ ${finalFee}</span>`;
    let htmlSummary = '';
    let plainSummary = '';
    if (businessOrder) {
        htmlSummary += `${t.descriptionLabel}: ${businessOrder} | ${t.additionalPayment}<br>`;
        plainSummary += `${t.descriptionLabel}: ${businessOrder} | ${t.additionalPayment}\n`;
    }
    htmlSummary += `${t.distanceLabel}: ${dist} ${t.meters}<br>`;
    plainSummary += `${t.distanceLabel}: ${dist} ${t.meters}\n`;
    htmlSummary += `${t.paymentLabel}: ${feeHtml}`;
    plainSummary += `${t.paymentLabel}: ₪ ${finalFee}`;
    out.innerHTML = htmlSummary;
    out.dataset.text = plainSummary;
    out.dataset.description = businessOrder;
    out.classList.remove('hidden');
    document.getElementById('copyBtn').disabled = false;
}

function copyResult() {
    const el = document.getElementById('result');
    const match = el.innerText.match(/₪\s*(\d+)/);
    if (!match) return;
    const amount = match[1];
    navigator.clipboard.writeText(amount).then(() => {
        const t = translations[currentLang];
        showPopup(t.paymentCopied);
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
    const resultEl = document.getElementById('result');
    if (resultEl) {
        resultEl.textContent = '';
        resultEl.classList.remove('error');
        resultEl.classList.add('hidden');
    }
    const convertedEl = document.getElementById('convertedLink');
    if (convertedEl) {
        convertedEl.textContent = '';
        convertedEl.classList.remove('error');
        convertedEl.classList.add('hidden');
    }
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
    const t = translations[currentLang];
    try {
        const url = new URL(input);
        const coords = decodeURIComponent(url.href).match(/(\d{2}\.\d+),(\d{2}\.\d+)/g);
        if (!coords || coords.length < 2) {
            output.innerHTML = '<span class="error">' + t.decodeError + '</span>';
            output.classList.remove('hidden');
            return;
        }
        const gmapsUrl = "https://www.google.com/maps/dir/" + coords.join('/');
        output.innerHTML = '<a href="' + gmapsUrl + '" target="_blank">' + gmapsUrl + '</a>';
        output.classList.remove('hidden');
    } catch (e) {
        output.innerHTML = '<span class="error">' + t.invalidOsrmLink + '</span>';
        output.classList.remove('hidden');
    }
}


function copyDescription() {
    const description = document.getElementById('result').dataset.description || '';
    if (!description) return;
    navigator.clipboard.writeText(description).then(() => {
        const t = translations[currentLang];
        showPopup(t.descriptionCopied);
    }).catch(() => {
        alert('לא ניתן להעתיק במכשיר זה.');
    });
}

// Initialize translations and hide result containers on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    const resultEl = document.getElementById('result');
    if (resultEl) resultEl.classList.add('hidden');
    const convertedEl = document.getElementById('convertedLink');
    if (convertedEl) convertedEl.classList.add('hidden');
});
