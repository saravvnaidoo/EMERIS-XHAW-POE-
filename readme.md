# Next Level Gaming & Esports Arena - Website

A responsive website for Next Level Gaming & Esports Arena in Johannesburg. The site lets visitors explore gaming packages and individual experiences, calculate an estimated total fee, submit a booking request, and find contact and location details.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Session storage for quote and booking data

No framework, build tool, package manager, database, or backend is used.

## How to Run the Website

You can access and open the live website directly at:  
👉 [https://nextlevelgaming.vercel.app/index.html](https://nextlevelgaming.vercel.app/index.html)
Youtube Link: https://youtu.be/S64E0IlIEpk

Alternatively, to run it locally:

1. Open the project folder in Visual Studio Code.
2. Open `index.html` with Live Server.
3. Start at the Home page and use the main navigation.

The site can also be opened locally by opening `index.html` directly in a web browser.

## Website Pages

- `index.html` - Home page with quick links to Packages, Experiences, Fees, and Contact
- `about.html` - History, Vision, Mission, and Goals, plus founder content
- `packages.html` - Gaming Packages summary, sortable by price
- `ultimate-gamer-pass.html` - Ultimate Gamer Pass details
- `vip-gaming-experience.html` - VIP Gaming Experience details
- `esports-training.html` - Esports Training Package details
- `birthday-party.html` - Birthday Party Package details
- `experiences.html` - Individual Experiences summary
- `virtual-reality.html` - Virtual Reality Experience details
- `racing-simulator.html` - Racing Simulator Challenge details
- `escape-room.html` - Escape Room Challenge details
- `fees.html` - Fee calculator and contact details form combined, submits to the confirmation page
- `confirmation.html` - Booking confirmation with amount due
- `contact.html` - Phone, email, address, social link, embedded map, and a quick enquiry form
- `compare.html` - Side-by-side package comparison table
- `all-packages.html` - Full price list table of all packages and experiences

## Main Features

- Shared navigation and footer, injected via `js/nav.js`
- Package and experience data stored centrally in `js/data.js`
- Package and experience cards rendered from that shared data via `js/render.js`
- Price sorting on the Packages page
- Standalone detail page for every package and experience
- Fee calculator with tiered discounts (5% for 2 bookings, 10% for 3, 15% for more than 3) plus 15% VAT, calculated only when the Calculate button is pressed
- Combined fee calculator and contact details form, with the selected quote carried through to the confirmation page via session storage
- Form validation with inline error messages for required fields, email format, and South African cell numbers
- Embedded Google Map and a clickable social media link on the Contact page
- Responsive layout for desktop, tablet, and mobile screens

## Image Assets

Images are stored in the `assets/` and `assets/images/` folders, including the logo, hero banners, founder image, package and experience images, and the confirmation banner.

## Pricing

All four gaming packages are priced at R1,500.00. All three individual experiences are priced at R750.00. Prices are stored in `js/data.js` and used throughout the site from that shared catalogue.

## Discounts & VAT

- 1 booking: no discount
- 2 bookings: 5% discount
- 3 bookings: 10% discount
- More than 3 bookings: 15% discount
- VAT is charged at 15% on the discounted subtotal

The calculated total on the Fees page is an estimate for quoting purposes, not a formal invoice.

## Validation

- Required fields must be completed before forms submit.
- Email addresses must be in a valid email format.
- Cell numbers must be in a valid South African format (10 digits starting with 0, or 11 digits starting with 27).
- Inline errors are shown directly below the relevant fields.

## Project Structure

```text
xhaw5112-wil-g1-2026-wil-g1-website-saravvnaidoo/
├── assets/
│   └── images/
├── css/
├── js/
│   ├── data.js
│   ├── nav.js
│   └── render.js
├── index.html
├── about.html
├── packages.html
├── experiences.html
├── fees.html
├── contact.html
├── confirmation.html
├── compare.html
├── all-packages.html
├── ultimate-gamer-pass.html
├── vip-gaming-experience.html
├── esports-training.html
├── birthday-party.html
├── virtual-reality.html
├── racing-simulator.html
└── escape-room.html
