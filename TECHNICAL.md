# Technical explanation

## Architecture

Single-page React app, no router — the homepage is one scroll with anchor
links (`#categories`, `#estimate`, `#how`, `#pros`) for in-page navigation
from the header and mega menu. Each visual section is an isolated component
in `src/components/`, composed in `App.jsx`. Content that's reused in more
than one place (service categories, mega menu groups) lives in
`src/data/services.js` as the single source of truth, so adding a ninth
service category updates the mega menu, the card grid, and the estimator's
service picker from one edit.

## Styling approach

Tailwind CSS 4.3 utility classes throughout, with a custom token layer
defined directly in `src/index.css` via `@theme` (Tailwind v4's CSS-first
configuration — no `tailwind.config.js` file):

- **Color** — a 6-color system (`ink`, `canvas`, `panel`, `brass`, `teal`,
  `line`) rather than Tailwind's default palette, so the whole UI stays on
  one deliberate brand palette instead of ad hoc `gray-500` / `blue-600`
  choices.
- **Type** — Archivo (display/headings, extrabold weights) paired with IBM
  Plex Sans (body), loaded via Google Fonts in `index.html`.
- **Radius/shadow** — a single small radius (`rounded-sm`) and two shadow
  tokens (`shadow-card`, `shadow-lifted`, declared as `--shadow-*` in
  `@theme`) used sparingly, rather than a uniform rounded-card treatment on
  every element.
- **Build** — Tailwind is wired in through the official `@tailwindcss/vite`
  plugin (`vite.config.js`), which replaces the old PostCSS + Autoprefixer
  pipeline entirely.

## Interactivity

- **Header**: mega menu and mobile drawer are local `useState`, closed via
  outside-click (`mousedown` listener + `ref`) and `Escape` key
  (`keydown` listener), cleaned up in `useEffect`'s return function.
- **Estimator** (the required interactive component): three linked
  controls — service (button group), scope (button group), ZIP (text
  input) — feed a `useMemo`-derived price range and a next-available-date
  calculation. Everything recalculates on each keystroke/click with no
  network call, so it demos correctly offline. The pricing logic is a
  simple, clearly-labeled placeholder formula (base price × scope
  multiplier × a small ZIP-derived factor) — swapping in a real pricing
  API means replacing the `zipFactor`/`useMemo` block in `Estimator.jsx`
  without touching the surrounding markup.

## Responsiveness

Tailwind's `sm` / `md` / `lg` breakpoints are used consistently:

- Header collapses from a full desktop nav + mega menu to a hamburger-
  triggered drawer below `lg` (1024px).
- Hero, category grid, estimator, and footer all reflow from multi-column
  to single-column using CSS grid's `grid-cols-*` responsive variants
  rather than separate mobile/desktop markup.
- Touch targets (buttons, nav links) stay at or above 40px tall on mobile.

## Accessibility

- Semantic landmarks (`header`, `main`, `section`, `footer`).
- Form inputs use associated `<label>`s (visually hidden where the icon
  already conveys purpose, via `sr-only`).
- Interactive toggle buttons expose `aria-expanded` / `aria-pressed`.
- Focus is visible everywhere (`:focus-visible` outline defined in
  `index.css`), and `prefers-reduced-motion` disables transitions/animations
  for users who request it.

## What's intentionally out of scope

- No backend/API — form submissions are demo-only (`preventDefault` +
  local state), matching the brief's "homepage" scope.
- No routing library — this is a single homepage, so `react-router` would
  be unused weight.
- No component/icon library — icons are inline SVG to keep the dependency
  surface small and match the custom palette exactly.
