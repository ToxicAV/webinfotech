# Web Info Tech — Home Services Platform Homepage

A responsive marketing homepage for **WebInfoTech**, a fictional platform that
connects homeowners with vetted, licensed service professionals (electricians,
plumbers, HVAC, cleaning, landscaping, handyman, roofing, painting).

Built with **React 19.2 + Vite 8 + Tailwind CSS 4.3**, as a static frontend
with no backend dependency — all interactive pieces run client-side.

## Requirements coverage

| Requirement | Where |
|---|---|
| Responsive header/navigation | `src/components/Header.jsx` — sticky header, desktop nav, collapses to a mobile drawer under `lg` breakpoint |
| Mega menu | `src/components/Header.jsx` — "Browse services" opens a full-width panel with 3 grouped columns + a featured promo tile; closes on outside click, `Escape`, or link selection |
| Hero section | `src/components/Hero.jsx` — headline, subhead, inline search form, custom SVG illustration, floating stat card |
| Search | Header search input (global) + Hero search form (service + ZIP) |
| Content/cards | `src/components/Categories.jsx` — 8 service category cards in a responsive grid |
| CTA | `src/components/CTA.jsx` (pro recruiting band) + CTA buttons throughout hero/estimator |
| Footer | `src/components/Footer.jsx` — 4-column link grid + legal bar |
| Interactive component | `src/components/Estimator.jsx` — live project cost estimator: pick a service, pick scope, optionally enter a ZIP, and the price range + next available date recalculate instantly (`useMemo`, no page reload) |
| Responsive desktop/tablet/mobile | Tailwind breakpoints (`sm`, `md`, `lg`) used throughout; mobile drawer nav, stacking grids, fluid type scale |
| Clean, reusable structure | One component per section in `src/components/`, shared content in `src/data/services.js`, shared icon set in `src/components/Icons.jsx`, design tokens centralized in `tailwind.config.js` |

## Stack

- **React 19.2** (function components + hooks only)
- **Vite 8** (Rolldown-based bundler) for dev server / bundling, via
  `@vitejs/plugin-react`
- **Tailwind CSS 4.3** for styling, using the current CSS-first config —
  no `tailwind.config.js`. Design tokens (color, font, shadow) are defined
  directly in `src/index.css` under an `@theme` block, and the repeated
  page-width wrapper is a custom `@utility container-content` rule. Applied
  via the official `@tailwindcss/vite` plugin, so there's no separate
  PostCSS/Autoprefixer setup to maintain.
- No UI kit, no icon library — icons are a small hand-drawn SVG set in
  `src/components/Icons.jsx` so the bundle stays dependency-light

## Getting started

```bash
npm install
npm run dev       # starts a local dev server (default: http://localhost:5173)
```

Other scripts:

```bash
npm run build      # production build to /dist
npm run preview    # preview the production build locally
npm run lint        # ESLint
```

## Project structure

```
meridian/
├── index.html
├── package.json
├── vite.config.js            # registers @vitejs/plugin-react + @tailwindcss/vite
├── eslint.config.js          # ESLint 9 flat config
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx               # composes all sections
    ├── index.css             # @import "tailwindcss" + @theme design tokens + base styles
    ├── data/
    │   └── services.js       # category + mega menu data (single source of truth)
    └── components/
        ├── Icons.jsx
        ├── Header.jsx
        ├── Hero.jsx
        ├── TrustBar.jsx
        ├── Categories.jsx
        ├── Estimator.jsx     # the interactive component
        ├── HowItWorks.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

## Deploying / "working demo"

This is a static site after `npm run build` — the `dist/` folder can be
deployed to any static host (Vercel, Netlify, GitHub Pages, S3 + CloudFront,
etc.) with no server-side configuration.

## Git repository

This folder is initialized as a local git repository (`git log` to see the
initial commit). Push it to your own GitHub/GitLab remote to share it:

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

## Notes on the "WordPress/Elementor/custom-theme" requirement

This build uses the **custom-theme (custom code)** path, since the brief
specifically requested a React + Vite + Tailwind stack, which is not
compatible with the WordPress/Elementor page-builder environment. If a
WordPress deliverable is also needed, the same design tokens (colors, type
scale, spacing) in `tailwind.config.js` can be ported into a custom
`theme.json` for a block theme, or the compiled HTML/CSS from this build can
be hand-adapted into an Elementor template.

See `TECHNICAL.md` for a short write-up of the architecture and design
decisions.
