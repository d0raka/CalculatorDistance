# Distance & Delivery Fee Calculator Web App

This project is a modern, responsive web application for calculating delivery fees based on travel distance. It
uses a clean, mobile‑friendly design inspired by Google and Apple product aesthetics and supports both
Hebrew (RTL) and English (LTR) user interfaces.

The calculator is intended for couriers and dispatchers who need to quickly estimate payment for delivery
jobs. Simply paste a Google Maps or OSRM route link, choose a transport type, and the app will compute
the delivery fee—including optional bonus percentages—using a tiered pricing model. A manual distance
override is also available for special cases.

## Features

```
Route distance parsing: Paste a Google Maps or OSRM directions link and the app attempts to
fetch the real route distance via the OSRM API. If that fails it falls back to a straight‑line (aerial)
calculation.
Manual distance override: You can enter a custom distance in metres to override the value
extracted from the link.
Bonus calculation: Enable a bonus checkbox and specify a percentage to be added to the base fee.
Vehicle‑specific pricing: Select from “Walker”, “Bicycle”, “Motorcycle” or “Vehicle” to apply the
appropriate tiered pricing scheme.
Clipboard helpers: Copy just the numeric payment (₪ symbol stripped) or the order description
(business and order number) to the clipboard with a click. A small popup confirms when the value
has been copied.
Bilingual interface: The entire UI can switch between Hebrew and English on the fly. All labels,
placeholders and messages update automatically, and the page direction toggles between RTL and
LTR.
Responsive design: Cards are stacked or aligned side‑by‑side depending on screen width, ensuring
readability on both desktop and mobile devices. A sticky header keeps navigation visible.
No scrolling: The layout and spacing are tuned so that all content fits within a single viewport
without a page scroll bar.
```
## Getting Started

This project is a static HTML/JS/CSS application and requires no build tools or server. Clone or download the
repository and open index.html directly in a web browser.

```
gitclone <repository_url>
cd <repository_folder>
# Open index.html in your browser of choice
```
#### • • • • • • • •


### Usage

```
Business & order (optional): Enter a combined business name and order number (e.g. Chicken
Station #368). This field is optional and used for description copying only.
Manual distance (optional): Specify a distance in metres if you want to override the route distance
extracted from the link. Leave empty to use the distance from the link.
Bonus: Check the bonus box if you wish to add a percentage bonus; an input will appear for the
percentage value.
Transport type: Choose one of the transport types (walker, bicycle, motorcycle, vehicle). This
determines the tiered pricing.
Link (required): Paste a Google Maps or OSRM directions link. The app will attempt to derive the
route distance automatically.
Calculate: Click Calculate to see the distance in metres and the computed payment. Buttons for
copying the payment and the description become enabled once a valid result is produced.
Language toggle: Use the language toggle button in the header to switch between Hebrew and
English.
```
## Customising

```
Translation strings: All UI strings are defined in the translations object in script.js. Add
new keys or languages as needed.
Pricing logic: Fee tiers for walkers and other vehicles are defined in feeForWalkers() and
feeByDistance() in script.js. Adjust the thresholds or rates here to fit your business rules.
Styling: Edit style.css to modify colours, typography or layout. Cards use CSS variables and
flexbox for responsiveness.
```
## License

This project is licensed under the terms of the LICENSE file in this repository.

## Credits

Built by **Dor Aka**. If you use this project or find it helpful, feel free to reach out!
