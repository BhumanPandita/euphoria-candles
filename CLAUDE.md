# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build (output → dist/)
npm run preview   # preview production build at http://localhost:4173
npm run lint      # ESLint check
```

There are no tests in this project (Phase 1 — UI only).

## Project Context

This is the **Euphoria Candles** Phase 1 website — a purely presentational React site for a handcrafted candle business (@euphoriacandles040 on Instagram, India-based). Phase 1 has no cart, login, or payments. Phase 2 will add those.

**Pinned dependency versions** (do not upgrade without care):
- React 18 (not 19 — npm defaults to 19, which breaks things here)
- Tailwind CSS v3 (not v4 — v4 dropped `tailwind.config.js` support)
- React Router v6 (not v7)

**Before launch:** Replace `91XXXXXXXXXX` in `src/data/constants.js` with the real WhatsApp number.

## Architecture

### Data layer (`src/data/`)
All site content lives here — no backend, no API calls.

- **`constants.js`** — `WHATSAPP_NUMBER`, `INSTAGRAM_URL`, `WHATSAPP_URL`.
- **`products.js`** — exports `products` (array) and `categoryFilterList` (string array for Shop filter tabs). Products have a `category` field (display label, e.g. `"Return Gifts"`) and a `categoryId` field (slug, e.g. `"return-gifts"`). Keep both in sync.
- **`categories.js`** — exports `categories` (rich objects used in CategoryCard on Home). Separate from `products.js` — do not import `categories` from `products.js`.
- **`images.js`** — single source of truth for all image paths. All images are stored locally in `public/images/` (downloaded from Unsplash). To swap in real product photos, replace the files in `public/images/` keeping the same filenames — no code changes needed.
- **`testimonials.js`** — static testimonial data.

### Routing (`src/App.jsx`)
Five routes: `/`, `/shop`, `/about`, `/contact`, `/gallery` plus a `*` NotFound catch-all. Layout shell wraps all routes with `<Navbar>` and `<Footer>`.

### Styling
Tailwind v3 with a custom brand palette defined in `tailwind.config.js`:

| Token | Color | Use |
|---|---|---|
| `cream` | `#FAF8F5` | Page backgrounds |
| `linen` | `#F0EBE3` | Section alternates |
| `blush` | `#E8D5C4` | Subtle accents, hero subtext |
| `gold` | `#C4A882` | Secondary accent, outline CTAs |
| `crimson` | `#8B1A1A` | **Primary brand color** — buttons, active states, overlays |
| `crimson-deep` | `#6B1212` | Button hover state |
| `brown-deep` | `#5C4A36` | Headings and body text |
| `brown-mid` | `#8B7355` | Secondary body text |
| `brown-light` | `#A89070` | Captions, placeholders |

Only use these tokens — never raw Tailwind color names like `rose-400` or `blue-500`.

`crimson` is the primary brand color (matches the client logo). `gold` is the secondary accent. `brown-deep` is for text only — not for buttons or brand UI elements.

Typography: `font-serif` = Playfair Display, `font-sans` = Inter (loaded via Google Fonts in `index.css`). CTA labels use `font-sans text-xs tracking-widest uppercase`.

### UI components (`src/components/ui/`)
- **`Logo.jsx`** — SVG logo component. Props: `size` (px, default 48) and `variant` (`"color"` for crimson-on-white, `"white"` for white-on-transparent). Used in Navbar and Footer.
- **`Button.jsx`** — exports a default `Button` component and a `buttonClasses(variant, className)` utility. Use `buttonClasses` when you need button styling on a non-`<button>` element (e.g. a `<Link>`). Variants: `solid` (crimson), `outline` (gold border), `gold`.
- **`ProductCard.jsx`** — uses `buttonClasses` for its "Enquire Now" Link. All enquiries route to `/contact`. Image zooms on hover via `group-hover:scale-108`.
- **`CategoryCard.jsx`** — full-bleed image card with dark gradient overlay. Image zooms on hover. Links to `/shop?category={id}` using the slug from `categories.js`. Images come from `categoryImages` in `images.js`.
- **`TestimonialCard.jsx`** — layout-agnostic; pass layout classes (min-width, flex-shrink) via the `className` prop.
- **`SectionTitle.jsx`** — eyebrow + heading + gold rule. Pass `center` prop for centered alignment.

### Animations
Framer Motion throughout. Pattern:
- Page hero sections: `initial`/`animate` (fires immediately on mount).
- Below-fold sections: `whileInView` + `viewport={{ once: true }}` with a `fadeUp` variant.
- Staggered lists: pass `custom={i}` and use a factory variant `(i) => ({ ... delay: i * 0.1 })`.

### Known quirks
- `lucide-react`'s `Instagram` icon is not exported by the installed version — use an inline SVG instead (see Footer.jsx and Home.jsx for the pattern).
- The `<BrowserRouter>` in `main.jsx` has `future` flags to silence React Router v6 deprecation warnings.
- The Navbar uses CSS Grid (`grid-cols-[1fr_auto_1fr]`) for logo centering — do not revert to absolute positioning. The `motion.div` wrappers around CategoryCards need `className="h-full"` to propagate grid stretch height to the card.
