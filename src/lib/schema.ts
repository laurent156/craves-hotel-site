// schema.org nodes (JSON-LD) describing the hotel, its rooms and its venues.
// Every fact comes from the same config and content files as the visible pages, so search and AI
// engines read exactly what visitors read. No prices are published (business rule).
import { BOOKING, SAME_AS, SITE, VENUE_FACTS } from '../config/site';
import { HOME } from '../content/home';
import { pick } from '../content/localize';
import { roomText, type Room } from '../content/rooms';
import { HREFLANG, type Locale } from '../i18n/locales';

type Node = Record<string, unknown>;

export const HOTEL_ID = (site: string) => `${site.replace(/\/$/, '')}/#hotel`;
const WEBSITE_ID = (site: string) => `${site.replace(/\/$/, '')}/#website`;

const AMENITIES: Record<Locale, string[]> = {
  fr: ['Wi-Fi gratuit', 'Climatisation', 'Réception 24h/24', 'Bagagerie gratuite', 'Ascenseur', 'Restaurant', 'Bar', 'Petit-déjeuner buffet', 'Hôtel non-fumeur'],
  en: ['Free Wi-Fi', 'Air conditioning', '24-hour front desk', 'Free luggage storage', 'Lift', 'Restaurant', 'Bar', 'Breakfast buffet', 'Non-smoking hotel'],
  nl: ['Gratis wifi', 'Airconditioning', '24-uursreceptie', 'Gratis bagageopslag', 'Lift', 'Restaurant', 'Bar', 'Ontbijtbuffet', 'Rookvrij hotel'],
};

function address(): Node {
  return {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.country,
  };
}

export function hotelNode({ site, locale, images, logo }: { site: string; locale: Locale; images: string[]; logo: string }): Node {
  const home = pick(HOME, locale);
  return {
    '@type': 'Hotel',
    '@id': HOTEL_ID(site),
    name: SITE.name,
    description: home.metaDescription,
    url: `${site.replace(/\/$/, '')}/`,
    logo,
    image: images,
    telephone: SITE.phone,
    email: SITE.email,
    address: address(),
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.directionsUrl,
    starRating: { '@type': 'Rating', ratingValue: 3 },
    numberOfRooms: SITE.rooms,
    checkinTime: SITE.checkIn,
    checkoutTime: SITE.checkOut,
    petsAllowed: false,
    smokingAllowed: false,
    availableLanguage: ['en', 'fr', 'nl'],
    amenityFeature: AMENITIES[locale].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    vatID: SITE.vat,
    sameAs: SAME_AS,
    potentialAction: {
      '@type': 'ReserveAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BOOKING.engineUrl}?lang=${locale}&DiscountCode=${BOOKING.discountCode}`, inLanguage: HREFLANG[locale] },
    },
  };
}

export function websiteNode(site: string, locale: Locale): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID(site),
    url: `${site.replace(/\/$/, '')}/`,
    name: SITE.name,
    inLanguage: HREFLANG[locale],
    publisher: { '@id': HOTEL_ID(site) },
  };
}

export function roomNode({ site, room, locale, url, image }: { site: string; room: Room; locale: Locale; url: string; image: string }): Node {
  const text = roomText(room, locale);
  return {
    '@type': 'HotelRoom',
    '@id': `${url}#room`,
    name: text.name,
    description: text.description,
    url,
    image,
    bed: text.beds,
    floorSize: { '@type': 'QuantitativeValue', value: room.size, unitCode: 'MTK' },
    occupancy: { '@type': 'QuantitativeValue', maxValue: room.capacity },
    amenityFeature: text.amenities.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    containedInPlace: { '@id': HOTEL_ID(site) },
  };
}

export function venueNode({ site, venue, locale, url, image }: { site: string; venue: 'conteur' | 'scene'; locale: Locale; url: string; image: string }): Node {
  const facts = VENUE_FACTS[venue];
  return {
    '@type': facts.schemaType,
    '@id': `${url}#venue`,
    name: facts.name,
    url,
    image,
    address: address(),
    ...(facts.telephone ? { telephone: facts.telephone } : {}),
    ...(facts.cuisine ? { servesCuisine: facts.cuisine[locale] } : {}),
    acceptsReservations: true,
    openingHoursSpecification: facts.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    containedInPlace: { '@id': HOTEL_ID(site) },
  };
}
