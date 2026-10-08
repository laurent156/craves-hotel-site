import type { APIRoute } from 'astro';
import { BOOKING, SITE } from '../config/site';
import { ROOMS } from '../content/rooms';
import { LOCALES } from '../i18n/locales';
import { localizedPath, type RouteKey } from '../i18n/routes';
import { buildBookingUrl } from '../lib/booking';

// llms.txt (llmstxt.org): a plain-language summary of the hotel for AI assistants, built from the
// same config as the site so the facts never diverge. Written in English, with links to every language.

const KEY_PAGES: { route: RouteKey; label: string }[] = [
  { route: 'home', label: 'Home' },
  { route: 'rooms', label: 'Rooms (overview and comparison)' },
  { route: 'roomSingle', label: 'Single room, 12 m², 1 guest' },
  { route: 'roomDouble', label: 'Double room, 15 m², 2 guests, double or twin beds' },
  { route: 'roomTriple', label: 'Triple room, 20 m², 3 guests' },
  { route: 'roomFamily', label: 'Family room, 50 m², 4 guests, kitchenette' },
  { route: 'conteur', label: 'Le Conteur, Mediterranean restaurant in the hotel' },
  { route: 'scene', label: 'Scène, cocktail bar in the hotel' },
  { route: 'location', label: 'Location, access and parking' },
  { route: 'faq', label: 'FAQ (60 answers: booking, rooms, access, services)' },
  { route: 'guideGrandPlace', label: 'Guide: 10 sights within walking distance of the Grand-Place' },
  { route: 'contact', label: 'Contact' },
];

export const GET: APIRoute = ({ site }) => {
  const url = (route: RouteKey, locale: (typeof LOCALES)[number]) => new URL(localizedPath(route, locale), site).href;
  const NAMES = { roomSingle: 'single', roomDouble: 'double or twin', roomTriple: 'triple', roomFamily: 'family' } as const;
  const rooms = ROOMS.map((r) => `${NAMES[r.key]} ${r.size} m² (up to ${r.capacity})`).join(', ');

  const text = `# ${SITE.name} Brussels

> 3-star boutique hotel in the centre of Brussels, Belgium, 280 m (a 4-minute walk) from the Grand-Place. ${SITE.rooms} air-conditioned rooms with a unique French chic and Art Deco style, the Mediterranean restaurant Le Conteur and the cocktail bar Scène on site. Booking direct on the hotel website gives 10% off with the code ${BOOKING.discountCode}.

## Key facts

- Address: ${SITE.address.street}, ${SITE.address.postalCode} Brussels (Bruxelles), Belgium. GPS ${SITE.geo.lat}, ${SITE.geo.lng}.
- Phone: ${SITE.phone}. Email: ${SITE.email}. VAT: ${SITE.vat}.
- ${SITE.rooms} rooms on 4 floors, all air-conditioned: ${rooms}. The 5 family rooms are in the building opposite, which is part of the hotel (one flight of stairs, then a lift).
- Check-in from ${SITE.checkIn}, check-out until ${SITE.checkOut}. 24-hour front desk speaking English, French and Dutch. Free luggage storage.
- Free Wi-Fi. Non-smoking hotel. Pets not allowed. Free baby cot on request; no extra beds; no rooms adapted for reduced mobility.
- Breakfast: continental buffet, 7:00–10:00 on weekdays, until 10:30 at weekends.
- Hotel guests get 15% off their meal at Le Conteur and their first cocktail 1+1 free at Scène.
- No private parking. Public car parks within 5 minutes: Interparking Ecuyer (280 m), Brucity (300 m), Monnaie (400 m).
- From Brussels-Midi (Eurostar, TGV): tram 3 or 4 to Bourse (about 10 min), then a 2-minute walk. Nearest metro: De Brouckère (lines 1 and 5), 350 m. Brussels Central station: 9-minute walk.
- Nearby on foot: Saint-Nicolas church (2 min), the Bourse and Belgian Beer World (2 min), Grand-Place (4 min), Galeries Royales Saint-Hubert (5 min), Manneken-Pis (7 min).
- Renovated in 2022, interior design by Saar Zafrir Design.

## Book direct

- [Booking engine, 10% off with ${BOOKING.discountCode} applied](${buildBookingUrl({ locale: 'en' })})

## Pages

${KEY_PAGES.map((p) => `- [${p.label}](${url(p.route, 'en')}): also in [French](${url(p.route, 'fr')}) and [Dutch](${url(p.route, 'nl')})`).join('\n')}
`;

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
