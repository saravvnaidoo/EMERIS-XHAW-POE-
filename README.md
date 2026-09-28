# Next Level Gaming & Esports Arena

**Module:** Work Integrated Learning 1 (XHAW5112)  
**Academic Year:** 2026  
**Repository:** [EMKNDW/xhaw5112-wil-g1-2026-wil-g1-website-saravvnaidoo](https://github.com/EMKNDW/xhaw5112-wil-g1-2026-wil-g1-website-saravvnaidoo)

---

## Project Overview

Next Level Gaming & Esports Arena is a production-ready, multi-page web application designed for a premier gaming venue and event space. The platform showcases available gaming suites, venue pricing packages, interactive fee estimation tools, and booking/inquiry workflows.

---

## Page Architecture & Navigation

1. **Home (`index.html`)**: Features an immersive hero banner, highlight categories, feature strips, and direct calls to action.
2. **About (`about.html`)**: Details the story behind the venue, founder quote, brand pillars, and operational statistics.
3. **Package Details (`package-details.html`)**: Displays individual gaming packages, media gallery, pricing tags, inclusions checklist, and related package options.
4. **Fee Calculator (`fees.html`)**: An interactive pricing estimator allowing users to select packages and add-ons with real-time subtotal, discount, and VAT calculations.
5. **Contact (`contact.html`)**: Includes an inquiry form, direct contact details, operating hours, and an embedded interactive Google Map.

---

## Technical Features & CSS Design System

- **Modern CSS Architecture**: Built with CSS custom properties (`:root`), fluid typography (`clamp()`), and structured layout systems (`CSS Grid` and `Flexbox`).
- **Responsive Layouts**: Fully adapted viewports for Desktop (1024px+), Tablet (768px), and Mobile (480px).
- **Accessibility & UX**:
  - Focus rings (`:focus-visible`) for seamless keyboard navigation.
  - Motion accessibility support via `prefers-reduced-motion`.
  - Minimum 48px touch targets for touch-friendly interaction.
- **Dynamic JavaScript Logic (`js/calculator.js`)**: Handles live selection updates, multi-item discount rules, subtotal aggregation, and tax calculation on the fee calculator page.

---

## File & Directory Structure

```text
├── assets/
│   └── logo.jpg             # Site logos and graphical assets
├── css/
│   └── style.css            # Central responsive design system
├── js/
│   └── calculator.js        # Interactive fee estimation logic
├── about.html               # About page
├── contact.html             # Contact & location inquiry page
├── fees.html                # Interactive fee calculator page
├── index.html               # Main landing page
├── package-details.html     # Detailed package showcase page
└── README.md                # Project documentation
