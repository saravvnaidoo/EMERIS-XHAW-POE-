# Next Level Gaming and Esports Arena

A responsive desktop website for Next Level Gaming and Esports Arena in Johannesburg. The website allows visitors to explore gaming packages, individual experiences, prices, venue information, and booking requests.

## Technologies

- HTML5
- CSS
- Vanilla JavaScript
- Session storage for quote and booking data

No framework, build tool, package manager, database, or backend is used.

## How to Run the Website

1. Open the project folder in Visual Studio Code.
2. Open `index.html` with Live Server.
3. Start at the Home page and use the main navigation.

The site can also be opened directly by opening `index.html` in a web browser.

## Website Pages

- `index.html`: Home page and main quick links
- `about.html`: About the venue, founder, vision, mission, and goals
- `packages.html`: Filterable gaming packages
- `experiences.html`: Individual gaming experiences
- `package-details.html`: Reusable package detail page
- `experience-details.html`: Reusable experience detail page
- `fees.html`: Live fee calculator
- `booking.html`: Customer details and quote recap
- `confirmation.html`: Booking confirmation
- `contact.html`: Venue contact information, map, and enquiry form
- `compare.html`: Package comparison table
- `all-packages.html`: Full catalogue price table

## Main Features

- Shared navigation and footer
- Package and experience data stored in `js/data.js`
- Package cards rendered with JavaScript
- Package price sorting
- Package and experience detail pages
- 15 percent VAT calculation
- Quote information saved with session storage
- Booking and contact form validation
- Local image assets with fixed cropping
- Responsive layouts for laptop, tablet, and mobile screens

## Image Assets

Images are stored in the `assets/` and `assets/images/` folders. Page images include the logo, hero banners, founder image, package images, experience images, event image, arena image, and confirmation banner.

## Pricing

All four gaming packages use a fee of R1500.00. All three individual experiences use a fee of R750.00. Prices are stored in `js/data.js` and displayed throughout the website from that shared catalogue.

## Validation

- Required fields must be completed before forms submit.
- Email addresses must contain a basic valid email format.
- Phone numbers are restricted to digits and checked for a valid South African cell number length.
- Inline errors are shown below the relevant fields.

## Project Structure

```text
XHAW TASK 3/
├── assets/
├── css/
├── js/
├── index.html
├── about.html
├── packages.html
├── experiences.html
└── other website pages
```

## Publishing

The site uses relative links and can be hosted with GitHub Pages. Keep the repository structure intact and ensure `index.html` remains at the repository root.
