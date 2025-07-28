/**
     * Validate map directions URL.
     *
     * Accepts both Google Maps directions URLs (e.g. https://www.google.com/maps/dir/…)
     * and OpenStreetMap directions URLs (e.g. https://www.openstreetmap.org/directions/…).
     *
     * @param {string} url The URL provided by the user.
     * @returns {boolean} True if the URL appears to be a supported directions link.
     */
    function isGMap(url) {
        // Google Maps directions pattern
        const googlePattern = /^https?:\/\/(www\.)?google\.[a-z.]+\/maps\/dir/i--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        // OpenStreetMap directions pattern
        const osmPattern = /^https?:\/\/(www\.)?openstreetmap\.org\/directions/i--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        return googlePattern.test(url) || osmPattern.test(url)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    }

    // Fee calculation for vehicle deliveries.
    function feeByDistance(m) {
        if (m <= 100) return 3--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        let fee = 3--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const tier = len => Math.ceil(len / 100)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const seg1 = Math.min(Math.max(m - 100, 0), 900)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        fee += tier(seg1) * 0.55--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const seg2 = Math.min(Math.max(m - 1000, 0), 2000)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        fee += tier(seg2) * 0.35--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const seg3 = Math.min(Math.max(m - 3000, 0), 2000)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        fee += tier(seg3) * 0.30--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const seg4 = Math.max(m - 5000, 0)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        fee += tier(seg4) * 0.20--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        return fee--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    }

    // Fee calculation for walkers.
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
        ]--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        let result = 16--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        for (const t of tiers) {
            if (m <= t.max) { result = t.price--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif; break--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif; }
        }
        return result--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    }

    // Calculate the additional compensation based on user input.
    function calculate() {
        const businessOrder = document.getElementById('businessOrder').value.trim()--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const orderNumber = Number(document.getElementById('orderNumber').value)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const dist = Number(document.getElementById('distance').value)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const bonus = Number(document.getElementById('bonus').value) || 0--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const vehicle = document.querySelector('input[name="vehicle"]:checked')?.value--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const link = document.getElementById('gmap').value.trim()--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const out = document.getElementById('result')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;

        // Reset previous messages
        out.classList.remove('error')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;

        // Validate input
        if (!isGMap(link)) {
            out.textContent = 'נא לוודא שהקישור הוא להוראות ב‑Google Maps או ב‑OpenStreetMap.'--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            out.classList.add('error')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            document.getElementById('copyBtn').disabled = true--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            return--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        }
        if (!vehicle) {
            out.textContent = 'בחר כלי תחבורה.'--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            out.classList.add('error')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            document.getElementById('copyBtn').disabled = true--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            return--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        }
        if (!vehicle || !dist) {
            out.textContent = 'יש למלא שם בית עסק, מספר הזמנה ומרחק.'--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            out.classList.add('error')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            document.getElementById('copyBtn').disabled = true--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            return--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        }

        // Compute base fee
        const baseFee = vehicle === 'Walker' ? feeForWalkers(dist) : feeByDistance(dist)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const rawFee = baseFee * (1 + bonus / 100)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const finalFee = Math.ceil(rawFee)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;

        // Compose result message
        // Build a multi‑line summary in both HTML (for display) and plain text (for copying)
        // Insert a left‑to‑right mark before currency and digits to ensure correct display
        const feeHtml = `<span style="color:#27ae60--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;font-weight:bold--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;font-size:1.3em--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;">&#x200E--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;₪ ${finalFee}</span>`--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        // Combine business name and order number into a single line
        const htmlSummary =
            `${businessOrder ? "הזמנה: " + businessOrder + "<br>" : ""}` +
            `מרחק: ${dist} מטר<br>` +
            `תשלום: ${feeHtml}`--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const plainSummary =
            `${businessOrder ? "הזמנה: " + businessOrder + "\n" : ""}` +
            `מרחק: ${dist} מטר\n` +
            `תשלום: ₪ ${finalFee}`--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        out.innerHTML = htmlSummary--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        out.dataset.text = plainSummary--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;

        // Enable copy button
        document.getElementById('copyBtn').disabled = false--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;

        // Log to Google Apps Script if available
        try {
            if (google && google.script && google.script.run) {
                const logEntry = {
                    timestamp: new Date().toISOString(),
                    user: null,
                    business: businessName,
                    order: orderNumber,
                    distance: dist,
                    bonus: bonus,
                    vehicle: vehicle,
                    fee: finalFee,
                    gmap: link
                }--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
                google.script.run.logCalculation(logEntry)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            }
        } catch (err) {
            // Ignore logging errors--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif; this site may not run within a Google Apps Script context.
        }
    }

    // Copy the result text to the clipboard.
    
function copyResult() {
    const el = document.getElementById('result')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    const match = el.innerText.match(/₪\s*(\d+)/)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    if (!match) return--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    const amount = match[1]--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    navigator.clipboard.writeText(amount).then(() => {
        const popup = document.getElementById('popup')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        popup.style.display = 'block'--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        setTimeout(() => popup.style.display = 'none', 5000)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    }).catch(() => {
        alert('לא ניתן להעתיק לטלפון זה.')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    })--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
}
).catch(() => {
            alert('לא ניתן להעתיק לטלפון זה.')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        })--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    }

    // Reset the form and clear results.
    function resetForm() {
        document.getElementById('orderNumber').value = ''--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        document.getElementById('businessName').value = ''--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        document.querySelectorAll('input[name="vehicle"]').forEach(r => r.checked = false)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        document.getElementById('distance').value = ''--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        document.getElementById('bonus').value = ''--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        document.getElementById('gmap').value = ''--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        document.getElementById('result').textContent = ''--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        document.getElementById('result').classList.remove('error')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        document.getElementById('copyBtn').disabled = true--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    }
    
function convertToGoogle() {
    const input = document.getElementById('osrmLink').value.trim()--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    const output = document.getElementById('convertedLink')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    try {
        const url = new URL(input)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const params = new URLSearchParams(url.search)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const coordinates = url.hash.match(/map=.*?\/(.+)/)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        if (!coordinates || !coordinates[1]) {
            output.innerHTML = '<span class="error">לא הצלחנו לפענח את הקישור.</span>'--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
            return--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        }
        const coordList = coordinates[1].split('/')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        const pairs = []--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        for (let i = 0--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif; i < coordList.length - 1--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif; i += 2) {
            pairs.push(`${coordList[i]},${coordList[i + 1]}`)--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        }
        const gmapsUrl = "https://www.google.com/maps/dir/" + pairs.join('/')--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
        output.innerHTML = '<a href="' + gmapsUrl + '" target="_blank">' + gmapsUrl + '</a>'--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    } catch (e) {
        output.innerHTML = '<span class="error">קישור לא תקין.</span>'--bg-color: #f9fbfc;
        --primary-color: #0057ff;
        --secondary-color: #ffffff;
        --accent-color: #00c896;
        --text-color: #222;
        --font-family: "Rubik", sans-serif;
    }
}


function toggleBonus() {
    const input = document.getElementById('bonus');
    if (!input) return;
    input.style.display = document.getElementById('bonusToggle').checked ? 'block' : 'none';
    if (!document.getElementById('bonusToggle').checked) input.value = '';
}