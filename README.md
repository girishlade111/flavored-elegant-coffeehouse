# Flavored — Elegant Coffeehouse Landing Page

A pixel-faithful, production-quality landing page for **Flavored**, an elegant coffeehouse brand featuring artisan roasts, handcrafted beverages, and mobile ordering — built with **Astro 5** and modern CSS design tokens.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How to Customize](#how-to-customize)
- [Environment Variables](#environment-variables)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [License](#license)

## Features

- **Static-first architecture** — ships zero client-side JavaScript by default; fast loads and excellent Core Web Vitals.
- **Fully responsive** — fluid typography with `clamp()`, adaptive layouts for mobile, tablet, and desktop.
- **Design-token driven styling** — centralized CSS custom properties in `src/styles/tokens.css` for colors, spacing, radii, and shadows.
- **Resolution-independent artwork** — SVG vector latte art (`double-heart`, `heart`, `rosetta`, `bear`) with no raster assets required.
- **Deterministic decorative beans** — coffee-bean scatter layouts defined as data (`src/data/beans.ts`) for reproducible compositions.
- **Mobile app showcase** — dual-phone mockups with menu and product-detail screens (`AppSection`, `PhoneMenu`, `PhoneDetail`).
- **Self-hosted fonts** — Roboto via `@fontsource/roboto` (no external font CDN / no layout shift).
- **Accessible by default** — semantic landmarks, WCAG-compliant contrast, keyboard navigation, and screen-reader live announcements.
- **Centralized content** — all copy, navigation, products, and pricing live in a single data module.

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Astro 5 (Static Site Generation) |
| Styling | Scoped CSS + CSS design tokens + modern CSS (`clamp`, `backdrop-filter`, radial gradients) |
| Language | TypeScript 5 |
| Typography | Self-hosted Roboto (`@fontsource/roboto`) |
| Tooling | `astro check` for type/diagnostics linting |

## Project Structure

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Astro UI components
│   │   ├── AppSection.astro # Mobile app showcase with phone mockups
│   │   ├── BeanScatter.astro# Decorative coffee-bean scatter layers
│   │   ├── CupArt.astro     # SVG latte art variants
│   │   ├── FeatureSpotlight.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Icon.astro
│   │   ├── Logo.astro
│   │   ├── Navbar.astro
│   │   ├── PhoneDetail.astro
│   │   ├── PhoneMenu.astro
│   │   ├── ProductCard.astro
│   │   ├── ProductShowcase.astro
│   │   └── ReserveCTA.astro
│   ├── data/
│   │   ├── site.ts          # Brand copy, nav, products, pricing, footer
│   │   └── beans.ts         # Deterministic bean scatter positions
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, meta tags, font setup
│   ├── pages/
│   │   └── index.astro      # Single-page entry
│   └── styles/
│       ├── global.css       # Base resets, typography, utilities
│       └── tokens.css       # Design tokens (colors, spacing, radii)
├── .env.example
├── .gitignore
├── astro.config.mjs
├── metadata.json
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17.1 or newer (20+ recommended)
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/girishlade111/flavored-elegant-coffeehouse.git
cd flavored-elegant-coffeehouse
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The dev server binds to `0.0.0.0`, so it is also reachable from other devices on your network.

### Production Build

```bash
npm run build     # outputs static site to dist/
npm run preview   # serve the production build on port 3000
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Astro dev server on port 3000 (host `0.0.0.0`) |
| `npm run build` | Build the static production site into `dist/` |
| `npm run preview` | Preview the production build on port 3000 |
| `npm run lint` / `npm run check` | Run `astro check` (TypeScript + diagnostics) |
| `npm run astro` | Pass any command directly to the Astro CLI |

## How to Customize

### 1. Swapping Cup Images

The site ships high-fidelity, resolution-independent SVG latte art (`src/components/CupArt.astro`) supporting all design variants (`double-heart`, `heart`, `rosetta`, `bear`).

To use external photographic PNG/AVIF/WebP assets instead:

1. Place images in `src/assets/cups/` (e.g. `hero-heart.png`, `americano.png`, `cappuccino-bear.png`).
2. Import them via `astro:assets` in `ProductCard.astro` or `Hero.astro`:

```astro
---
import { Image } from 'astro:assets';
import heroHeart from '../assets/cups/hero-heart.png';
---
<Image src={heroHeart} alt="Latte with heart art" />
```

### 2. Updating Copy and Currency

All text, links, and pricing are centralized in `src/data/site.ts`:

- **Navigation & brand:** edit `siteData.brand` and `siteData.nav`.
- **Products & prices:** edit the `siteData.products` array.
- **Currency:** change the `currency` option inside `formatPrice()` (e.g. `'USD'` → `'EUR'`, `'GBP'`).
- **App / reserve / footer sections:** edit `siteData.app`, `siteData.reserve`, and `siteData.footer`.

### 3. Adjusting the Bean Layouts

Decorative bean positions are deterministic and defined in `src/data/beans.ts`:

- `spotlightBeans` — cluster around the feature-spotlight cup (~26 beans).
- `phoneSeamBeans` — scatter along the phone mockup seam (~10 beans).
- `footerBeans` — spill outside the footer shell edge (~30 beans).

Each entry is `{ x, y, size, rotate, opacity? }`.

### 4. Theming

Global design tokens (colors, spacing, radii, shadows) live in `src/styles/tokens.css`. Override the CSS custom properties there to retheme the entire site from one file.

## Environment Variables

Copy `.env.example` to `.env` if your hosting environment requires these:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `GEMINI_API_KEY` | Required for Gemini AI API calls (injected at runtime in AI Studio). |
| `APP_URL` | Public URL where the app is hosted (used for self-referential links). |

> `.env*` files are gitignored (except `.env.example`) — never commit secrets.

## Accessibility

- Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `footer`).
- WCAG-compliant color contrast on text and interactive elements.
- Full keyboard navigation with visible focus states.
- Screen-reader live announcements for dynamic UI state.
- Descriptive `alt` text on meaningful images; decorative SVGs are hidden from assistive tech.

## Deployment

The build output is a fully static site in `dist/`, deployable anywhere:

```bash
npm run build
```

- **Netlify / Vercel / Cloudflare Pages:** build command `npm run build`, output directory `dist`.
- **GitHub Pages / S3 / any static host:** upload the contents of `dist/`.

## License

MIT
