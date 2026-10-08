import type { Locale } from '../i18n/locales';

// Facts shared by every page. Keep them identical everywhere (SEO/GEO consistency).
export const SITE = {
  name: 'Craves Hotel',
  url: 'https://craves-hotel.com',
  phone: '+32 2 219 04 40',
  phoneHref: 'tel:+3222190440',
  email: 'info@craves-hotel.com',
  vat: 'BE 0450 505 612',
  address: {
    street: 'Rue du Marché aux Poulets 32',
    postalCode: '1000',
    city: 'Bruxelles',
    country: 'BE',
  },
  geo: { lat: 50.848847, lng: 4.3510221 },
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Craves+Hotel,+Rue+du+March%C3%A9+aux+Poulets+32,+1000+Bruxelles',
  social: {
    instagram: 'https://www.instagram.com/craveshotel_brussels',
    facebook: 'https://www.facebook.com/CravesHotelBrussels',
  },
  rooms: 75,
  checkIn: '14:00',
  checkOut: '11:30',
} as const;

export const BOOKING = {
  /** Date step: used without dates. It keeps the discount code (Rooms/Select redirects here and drops it). */
  engineUrl: 'https://bookingengine.mylighthouse.com/v2/10550',
  /** Room list for given dates. */
  roomsUrl: 'https://bookingengine.mylighthouse.com/v2/10550/Rooms/Select',
  discountCode: 'THANKYOU',
  discountLabel: '-10 %',
} as const;

// Le Conteur and Scène run their own sites; links follow the visitor's language.
const CONTEUR_SITE = 'https://le-conteur.com';
const SCENE_SITE = 'https://scene-brussels.com';

export interface PartnerLinks {
  site: string;
  reservation: string;
  menu: string;
  events: string;
}

export const PARTNERS: Record<'conteur' | 'scene', Record<Locale, PartnerLinks>> = {
  conteur: {
    fr: { site: `${CONTEUR_SITE}/fr`, reservation: `${CONTEUR_SITE}/fr/reservations`, menu: `${CONTEUR_SITE}/fr/menu/les-plats`, events: `${CONTEUR_SITE}/fr/espace-evenementiel` },
    en: { site: `${CONTEUR_SITE}/en`, reservation: `${CONTEUR_SITE}/en/reservation`, menu: `${CONTEUR_SITE}/en/menu/food`, events: `${CONTEUR_SITE}/en/event-venue` },
    nl: { site: `${CONTEUR_SITE}/nl`, reservation: `${CONTEUR_SITE}/nl/reservaties`, menu: `${CONTEUR_SITE}/nl/menu/menukaart`, events: `${CONTEUR_SITE}/nl/event-venue` },
  },
  scene: {
    fr: { site: `${SCENE_SITE}/fr`, reservation: `${SCENE_SITE}/fr/reservations`, menu: `${SCENE_SITE}/fr/menu/drink-cocktail-menu`, events: `${SCENE_SITE}/fr/espace-evenementiel` },
    en: { site: `${SCENE_SITE}/en`, reservation: `${SCENE_SITE}/en/reservation`, menu: `${SCENE_SITE}/en/menu/drink-and-dine-menu`, events: `${SCENE_SITE}/en/event-venue` },
    nl: { site: `${SCENE_SITE}/nl`, reservation: `${SCENE_SITE}/nl/reservaties`, menu: `${SCENE_SITE}/nl/menu/drink-cocktail-menu`, events: `${SCENE_SITE}/nl/event-venue` },
  },
};

// Review scores shown on the home page (October 2026). Update by hand when the scores change.
export const RATINGS = [
  { platform: 'Google', logo: 'google', score: '4,3', scale: 5, count: { fr: '730 avis', en: '730 reviews', nl: '730 reviews' } },
  { platform: 'Booking.com', logo: 'booking', score: '8,4', scale: 10, count: { fr: 'Plus de 7 000 avis', en: 'Over 7,000 reviews', nl: 'Meer dan 7.000 reviews' } },
  { platform: 'Tripadvisor', logo: 'tripadvisor', score: '3,7', scale: 5, count: { fr: '137 avis', en: '137 reviews', nl: '137 reviews' } },
] as const;

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface VenueFacts {
  schemaType: 'Restaurant' | 'BarOrPub';
  name: string;
  telephone?: string;
  cuisine?: Record<Locale, string>;
  hours: { days: DayOfWeek[]; opens: string; closes: string }[];
}

// Same opening hours as on the venue pages and the FAQ.
export const VENUE_FACTS: Record<'conteur' | 'scene', VenueFacts> = {
  conteur: {
    schemaType: 'Restaurant',
    name: 'Le Conteur',
    telephone: '+32 2 347 02 91',
    cuisine: { fr: 'Méditerranéenne', en: 'Mediterranean', nl: 'Mediterraans' },
    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '18:00', closes: '00:00' },
      { days: ['Friday', 'Saturday'], opens: '18:00', closes: '01:00' },
    ],
  },
  scene: {
    schemaType: 'BarOrPub',
    name: 'Scène',
    hours: [
      { days: ['Wednesday'], opens: '19:00', closes: '00:00' },
      { days: ['Thursday', 'Friday', 'Saturday'], opens: '19:00', closes: '02:30' },
    ],
  },
};

/** Profiles of the hotel on other sites, for entity linking by search and AI engines. */
export const SAME_AS = [
  'https://www.instagram.com/craveshotel_brussels',
  'https://www.facebook.com/CravesHotelBrussels',
  'https://www.booking.com/hotel/be/craves.html',
  'https://www.tripadvisor.com/Hotel_Review-g188644-d24098857-Reviews-Craves_Hotel_Brussels-Brussels.html',
];
