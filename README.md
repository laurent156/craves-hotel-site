# Craves Hotel — site

Static site for craves-hotel.com, built with [Astro](https://docs.astro.build) and hosted on Cloudflare Pages.

Preview (not indexed, rebuilt on every push to `main`): https://laurent156.github.io/craves-hotel-site/

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm test` | Unit tests (Vitest) |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run build` | Build the static site into `dist/` |
| `npm run check:links` | After a build: fails if a page links to an internal URL that does not exist |

## How it is organised

- `src/config/site.ts` — hotel facts (address, phone, check-in…) and booking engine settings. Change a fact here once; every page follows.
- `src/i18n/` — languages and URLs.
  - `locales.ts`: English at the root (`/`), French at `/fr/`, Dutch at `/nl/`, as on the previous site.
  - `routes.ts`: the slug of every page in each language. Adding a page = one line here.
  - `ui.ts`: interface strings (menu, buttons).
- `src/pages/[...path].astro` — generates every page in every language from `routes.ts`. New pages are registered in its `views` map.
- `src/content/` — page text, one file per page (`home.ts`, `rooms.ts`, `venues.ts`, `location.ts`…). French is the source; English and Dutch fall back to French until translated.
  - `faq.ts` is the single source of truth for every answer on the site; pages pick questions by id.
  - `photos.ts` holds the alt text of each photo, reused wherever the photo appears.
- `src/views/` — one folder per page (home, rooms, venue template for Le Conteur and Scène, location).
- `src/components/ui/` — shared blocks: photo hero, breadcrumb, FAQ (with FAQPage data), facts grid, arch cards, mosaic, room card.
- `src/components/` — shared pieces: `layout/` (header, menu, footer), `booking/` (booking form, mobile booking bar).
- `src/lib/booking.ts` — builds the Lighthouse booking link (language, dates, code THANKYOU).
- `src/styles/global.css` — design tokens (colours, spacing) and base styles.
- `src/assets/` — images, optimised at build time (WebP, responsive sizes).

## Booking engine

Links go to Lighthouse (`bookingengine.mylighthouse.com/v2/10550`) with `lang`, `Arrival`, `Departure` and `DiscountCode=THANKYOU`. The booking form also works without JavaScript (plain GET to the engine).

## Cookies and tags

- Cookie banner: `src/components/consent/` (vanilla-cookieconsent, texts in `src/content/consent.ts`).
- Google Consent Mode v2: everything denied by default; Google Tag Manager is loaded only after the visitor accepts analytics or marketing.
- Set `PUBLIC_GTM_ID` (and `PUBLIC_GTM_URL` for the Stape loader domain) in the Cloudflare Pages environment, see `.env.example`. Without them no tag is loaded.
- In GTM, non-Google tags (Meta, Sojern…) should still use consent checks as a safety net.

## Motion

`src/components/motion/Motion.astro` + `src/styles/motion.css`: entrance animations, scroll reveals and the smart header. Disabled for visitors who ask for reduced motion; nothing is hidden without JavaScript.

## Fonts

Instrument Serif and Mona Sans are downloaded at build time and served from the site itself (no call to Google Fonts from visitors' browsers).

## Forms

Two forms post to the same Cloudflare Pages Function, `functions/api/contact.ts` (`/api/contact`):

- the contact form on `/contact/` (kind `contact`) goes to `CONTACT_TO`;
- the hidden page `/contact-manager/` (kind `manager`, in EN, FR and NL, same address as on the previous site) goes to `MANAGER_TO`. It is `noindex`, left out of the sitemap and `llms.txt` (`HIDDEN_ROUTES` in `src/views/registry.ts`) and has no booking bar. Guests reach it by QR codes placed in the rooms: **its addresses must never change** (`/contact-manager/`, `/fr/contact-manager/`, `/nl/contact-manager/`; guarded by a test in `src/i18n/routes.test.ts`). Same behaviour as the old site for the variants a QR code may hold: `http` → `https` (Cloudflare "Always Use HTTPS"), `www` → no `www` (redirect rule), no trailing slash → with slash (Cloudflare Pages does it by itself), query strings kept.

Each message goes through a hidden trap field, Cloudflare Turnstile (anti-spam, no puzzle) and validation (`src/lib/contactForm.ts`), then is e-mailed with [Resend](https://resend.com) (plain text, guest in reply-to). The function refuses to send when a setting is missing, never skipping the anti-spam check. Settings are listed in `.env.example`.

On the GitHub Pages preview there is no function: the form shows the error message with the hotel's phone and e-mail. That is expected.

## Redirects

`src/lib/redirects.ts` lists the old WordPress addresses (taken from the old site's sitemaps and links) and builds `dist/_redirects` (301). Old French and Dutch pages go to their translated URLs. `/contact-manager/` keeps its address and needs no redirect. `www.craves-hotel.com` must be redirected to `craves-hotel.com` with a Cloudflare redirect rule.

## Going live (Cloudflare Pages)

1. Pages → Create project → connect the GitHub repo. Build command `npm run build`, output `dist`, no `SITE_URL`, `BASE_PATH` or `PUBLIC_PREVIEW` variable (production defaults apply).
2. Variables: `PUBLIC_TURNSTILE_SITE_KEY`, `PUBLIC_GTM_ID`, `PUBLIC_GTM_URL`; secrets: `TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`, `MAIL_FROM`, `CONTACT_TO`, `MANAGER_TO`.
3. Resend: verify the `craves-hotel.com` domain (SPF and DKIM records in the DNS) before sending.
4. Test on the `*.pages.dev` address first: both forms (a real message arrives, reply-to is the guest), the old URLs, `robots.txt`, `sitemap.xml`.
5. Attach the domain `craves-hotel.com` (and `www`) to the project, then switch the DNS. Keep the old site reachable until the new one answers.
6. Submit `https://craves-hotel.com/sitemap.xml` in Google Search Console.
