# EMERIS XHAW POE Website

![Home Banner](assets/images/home%20page.jpg)

## Table of Contents
- [Project Overview](#project-overview)
- [Demo Video](#demo-video)
- [Features](#features)
- [Pricing](#pricing)
- [Discounts & VAT](#discounts--vat)
- [Validation](#validation)
- [Image Assets](#image-assets)
- [Setup & Run](#setup--run)
- [Directory Structure](#directory-structure)
- [Customization Guide](#customization-guide)
- [Credits](#credits)
- [License](#license)

---

## Project Overview
The **EMERIS XHAW POE** website is a lightweight, static site that showcases the services offered by the EMERIS XHAW team. It is built entirely with HTML, CSS, and vanilla JavaScript – no backend, build system, or package manager is required.

The site consists of a home page, an **About-Us** page, an **Esports Training** page, a **Gaming Packages** page, and dedicated experience sections. All visual assets are stored locally under `assets/images/` and are referenced via relative paths.

---

## Demo Video

Watch the video demonstration of the project on YouTube:  
👉 [https://youtu.be/S64E0IlIEpk](https://youtu.be/S64E0IlIEpk)

---

## Features
- Responsive navigation bar with smooth scrolling.
- Dynamic image handling via `js/render.js` (banner images switch based on page slug).
- Interactive fee calculator for gaming packages.
- Dedicated sections for:
  - **About-Us** – includes a banner image.
  - **Esports Training** – displays the `esportstraining.jpeg` image.
  - **Gaming Packages** – banner image and an additional view of the esports-training image.
- Clean, modular CSS and JavaScript that can be extended without a build step.

---

## Pricing

All four gaming packages are priced at R1,500.00. All three individual experiences are priced at R750.00. Prices are stored in `js/data.js` and used throughout the site from that shared catalogue.

---

## Discounts & VAT

- 1 booking: no discount
- 2 bookings: 5% discount
- 3 bookings: 10% discount
- More than 3 bookings: 15% discount
- VAT is charged at 15% on the discounted subtotal

The calculated total on the Fees page is an estimate for quoting purposes, not a formal invoice.

---

## Validation

- Required fields must be completed before forms submit.
- Email addresses must be in a valid email format.
- Cell numbers must be in a valid South African format (10 digits starting with 0, or 11 digits starting with 27).
- Inline errors are shown directly below the relevant fields.

---

## Image Assets

Images are stored in the `assets/` and `assets/images/` folders, including the logo, hero banners, founder image, package and experience images, and the confirmation banner.

| File | Location in Project | Purpose |
|------|---------------------|---------|
| `home page.jpg` | `assets/images/home page.jpg` | Hero banner on the home page |
| `arena interior-about us banner.jpg` | `assets/images/arena interior-about us banner.jpg` | Banner on the **About-Us** page |
| `esportstraining.jpeg` | `assets/images/esportstraining.jpeg` | Main image on **Esports Training** page and also shown on the **Gaming Packages** page |
| `packages-banner.jpg` | `assets/images/packages-banner.jpg` | Banner on the **Gaming Packages** page |

---

## Setup & Run
1. **Clone / download** the repository.
2. Ensure the folder structure remains unchanged – especially the `assets/`, `css/`, and `js/` directories.
3. Open `index.html` in a modern web browser (Chrome, Edge, Firefox, etc.).
   - For a better development experience you may use VS Code’s *Live Server* extension or any static-file server.
4. No additional installation steps are required; the site works out-of-the-box.

---

## Directory Structure
```text
xhaw5112-wil-g1-2026-wil-g1-website-saravvnaidoo/
├── assets/
│   └── images/
│       ├── home page.jpg
│       ├── arena interior-about us banner.jpg
│       ├── esportstraining.jpeg
│       └── packages-banner.jpg
├── docs/
│   └── Bombers_United_Next_Level_Gaming_Presentation.pptx
├── css/
│   └── style.css
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