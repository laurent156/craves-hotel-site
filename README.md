# Craves Hotel — site

Static site for craves-hotel.com, built with [Astro](https://docs.astro.build) and hosted on Cloudflare Pages.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm test` | Unit tests (Vitest) |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run build` | Build the static site into `dist/` |

## How it is organised

- `src/config/site.ts` — hotel facts (address, phone, check-in…) and booking engine settings. Change a fact here once; every page follows.
- `src/i18n/` — languages and URLs.
  - `locales.ts`: English at the root (`/`), French at `/fr/`, Dutch at `/nl/`, as on the previous site.
  - `routes.ts`: the slug of every page in each language. Adding a page = one line here.
  - `ui.ts`: interface strings (menu, buttons).
- `src/pages/[...path].astro` — generates every page in every language from `routes.ts`. New pages are registered in its `views` map.
- `src/views/` — one folder per page (home, rooms…).
- `src/components/` — shared pieces: `layout/` (header, menu, footer), `booking/` (booking form, mobile booking bar).
- `src/lib/booking.ts` — builds the Lighthouse booking link (language, dates, code THANKYOU).
- `src/styles/global.css` — design tokens (colours, spacing) and base styles.
- `src/assets/` — images, optimised at build time (WebP, responsive sizes).

## Booking engine

Links go to Lighthouse (`bookingengine.mylighthouse.com/v2/10550`) with `lang`, `Arrival`, `Departure` and `DiscountCode=THANKYOU`. The booking form also works without JavaScript (plain GET to the engine).

## Fonts

Instrument Serif and Mona Sans are downloaded at build time and served from the site itself (no call to Google Fonts from visitors' browsers).
