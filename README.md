# Professional Freelancer Portfolio

A clean, modern, and high-performance portfolio website built for a freelance web developer. Designed with semantic HTML5, a refined light-only design system, and modular vanilla JavaScript.

## 🚀 Key Highlights

- **Lightweight & High-Performance**: 100% pure vanilla stack with zero framework bloat.
- **Boutique Studio Design System**: Clean, restrained light palette featuring off-white surfaces, deep slate typography, and subtle natural elevations.
- **Accessible & SEO-First**: Semantic HTML5 landmark structure with keyboard focus styling and skip links.
- **Serverless Form Ready**: Designed for direct email inquiry delivery without requiring a backend server.

---

## 📁 Project Folder Structure

```
├── index.html                 # Main single-page document (semantic HTML5)
├── README.md                  # Project documentation and setup guide
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design tokens (light palette, typography, spacing, natural shadows)
│   │   ├── base.css           # CSS resets, typography, container utilities, accessibility
│   │   ├── components.css     # Buttons, badges, cards, modals, toast styles
│   │   ├── sections.css       # Section-specific layout styles
│   │   └── responsive.css     # (Step 7) Media queries and mobile adjustments
│   ├── js/
│   │   ├── main.js            # Main application entry point
│   │   ├── navigation.js      # Mobile menu and scroll-spy handlers
│   │   ├── projects.js        # (Step 4) Project dataset and category filtering
│   │   └── form.js            # (Step 6) Contact form validation and submission
│   └── images/
│       ├── projects/          # Project mockups and preview images
│       ├── profile/           # Profile photo and headshot assets
│       └── icons/             # Custom SVG icons and favicon
```

---

## 🎨 Design System Variables

All tokens are defined in `assets/css/variables.css` using native CSS Custom Properties:

- **Typography**: Fluid clamp scales for font sizes (`--font-size-xs` to `--font-size-4xl`), font families (`--font-sans`, `--font-heading`), and weights.
- **Spacing**: 8pt spacing scale (`--space-1` through `--space-24`).
- **Colors**: Light-only palette with subtle off-white background (`#f8fafc`), crisp card surfaces (`#ffffff`), deep slate text (`#0f172a`), and restrained deep slate / blue accents.
- **Elevation & Radii**: Multi-tier natural shadow definitions (`--shadow-sm` through `--shadow-xl`) and border radius scale.

---

## 🛠️ Local Development

Open `index.html` directly in any modern web browser or serve it using any local static file server (e.g., Live Server, VS Code Live Preview, or `npx serve`).
