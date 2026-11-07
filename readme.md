# EMERIS XHAW POE Website

![Home Banner](assets/images/home%20page.jpg)

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Image Assets](#image-assets)
- [Setup & Run](#setup--run)
- [Directory Structure](#directory-structure)
- [Customization Guide](#customization-guide)
- [Credits](#credits)
- [License](#license)

---

## Project Overview
The **EMERIS XHAW POE** website is a lightweight, static site that showcases the services offered by the EMERIS XHAW team. It is built entirely with HTML, CSS and vanilla JavaScript – no backend, build system or package manager is required.

The site consists of a home page, an **About‑Us** page, an **Esports Training** page, and a **Gaming Packages** page. All visual assets are stored locally under `assets/images/` and are referenced via relative paths.

---

## Features
- Responsive navigation bar with smooth scrolling.
- Dynamic image handling via `js/render.js` (banner images switch based on page slug).
- Interactive fee calculator for gaming packages.
- Dedicated sections for:
  - **About‑Us** – includes a banner image.
  - **Esports Training** – displays the `esportstraining.jpeg` image.
  - **Gaming Packages** – banner image and an additional view of the esports‑training image.
- Clean, modular CSS and JavaScript that can be extended without a build step.

---

## Image Assets
| File | Location in Project | Purpose |
|------|---------------------|---------|
| `home page.jpg` | `assets/images/home page.jpg` | Hero banner on the home page |
| `arena interior-about us banner.jpg` | `assets/images/arena interior-about us banner.jpg` | Banner on the **About‑Us** page |
| `esportstraining.jpeg` | `assets/images/esportstraining.jpeg` | Main image on **Esports Training** page and also shown on the **Gaming Packages** page |
| `packages-banner.jpg` | `assets/images/packages-banner.jpg` | Banner on the **Gaming Packages** page |

You can preview these images directly in the markdown preview (e.g., the home banner above).

---

## Setup & Run
1. **Clone / download** the repository.
2. Ensure the folder structure remains unchanged – especially the `assets/`, `css/`, and `js/` directories.
3. Open `index.html` in a modern web browser (Chrome, Edge, Firefox, etc.).
   - For a better development experience you may use VS Code’s *Live Server* extension or any static‑file server.
4. No additional installation steps are required; the site works out‑of‑the‑box.

---

## Directory Structure
```
EMERIS-XHAW-POE--master/
├─ assets/
│  └─ images/
│     ├─ home page.jpg
│     ├─ arena interior-about us banner.jpg
│     ├─ esportstraining.jpeg
│     └─ packages-banner.jpg
├─ css/
│  └─ style.css
├─ js/
│  └─ render.js
├─ index.html
├─ about.html
├─ esports-training.html
├─ packages.html
└─ README.md
```

---

## Customization Guide
- **Changing a banner**: Edit the `setImage` call in `js/render.js` for the relevant slug (e.g., `about`, `packages`, `esports`). Replace the path with the new image file you place inside `assets/images/`.
- **Adding a new page**: Copy an existing HTML file, update the navigation links in `index.html` (or the shared header), and add any page‑specific image mappings to `render.js`.
- **Updating images**: Add the new image to `assets/images/` and update the HTML or `render.js` reference.

---

## Credits
- **Author**: Saravan Naidoo
- **Design inspiration**: EMERIS XHAW team

---

## License
This project is provided **as‑is** for educational and demonstration purposes. Feel free to fork, modify, and redistribute under your own terms.
