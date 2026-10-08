import type { Locale } from './locales';
import type { RouteKey } from './routes';

const NAV_KEYS = [
  'rooms', 'conteur', 'scene', 'location', 'story', 'guide',
  'faq', 'gallery', 'press', 'contact', 'privacy', 'cookies', 'legal',
] as const satisfies readonly RouteKey[];
export type NavKey = (typeof NAV_KEYS)[number];

export interface UiStrings {
  skipToContent: string;
  menu: string;
  openMenu: string;
  closeMenu: string;
  mainNav: string;
  book: string;
  seeAvailability: string;
  arrival: string;
  departure: string;
  directDiscount: string;
  withCode: string;
  codeApplied: string;
  callHotel: string;
  homeLabel: string;
  language: string;
  footerNav: string;
  legalNav: string;
  followUs: string;
  home: string;
  breadcrumb: string;
  seeRooms: string;
  allRooms: string;
  viewRoom: string;
  bookThisRoom: string;
  directDiscountLong: string;
  guestPerkLabel: string;
  allFaq: string;
  allPhotos: string;
  close: string;
  photoOf: string;
  surface: string;
  persons: string;
  beds: string;
  amenities: string;
  goodToKnow: string;
  question: string;
  footerStay: string;
  footerDiscover: string;
  footerInfo: string;
  vat: string;
  opensInNewTab: string;
  roomsShown: string;
  storyLink: string;
  calendar: { title: string; choose: string; night: string; nights: string; prev: string; next: string; done: string };
  nav: Record<NavKey, string>;
}

// Interface strings. Page content lives in content collections, not here.
const UI: Record<Locale, UiStrings> = {
  fr: {
    skipToContent: 'Aller au contenu',
    menu: 'Menu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    mainNav: 'Navigation principale',
    book: 'Réserver',
    seeAvailability: 'Voir les disponibilités',
    arrival: 'Arrivée',
    departure: 'Départ',
    directDiscount: '-10 % en direct',
    withCode: 'avec le code THANKYOU',
    codeApplied: '-10 % avec le code THANKYOU, appliqué automatiquement',
    callHotel: "Appeler l'hôtel",
    homeLabel: 'Craves Hotel, accueil',
    language: 'Langue',
    footerNav: 'Plan du site',
    legalNav: 'Informations légales',
    followUs: 'Suivez-nous',
    home: 'Accueil',
    breadcrumb: "Fil d'Ariane",
    seeRooms: 'Voir les chambres',
    allRooms: 'Toutes les chambres',
    viewRoom: 'Voir la chambre',
    bookThisRoom: 'Réserver cette chambre',
    directDiscountLong: '-10 % en réservant en direct avec le code THANKYOU',
    guestPerkLabel: 'Client du Craves',
    allFaq: 'Toute la FAQ →',
    allPhotos: 'Toutes les photos',
    close: 'Fermer',
    photoOf: 'Photo {n} sur {total}',
    surface: 'Surface',
    persons: 'Personnes',
    beds: 'Lits',
    amenities: 'Équipements',
    goodToKnow: 'Bon à savoir',
    question: 'Une question ?',
    footerStay: 'Séjourner',
    footerDiscover: 'Découvrir',
    footerInfo: 'Infos',
    vat: 'TVA',
    opensInNewTab: '(nouvel onglet)',
    roomsShown: '{n} chambre(s) affichée(s)',
    storyLink: 'Notre histoire',
    calendar: { title: 'Vos dates', choose: 'Choisir', night: '{n} nuit', nights: '{n} nuits', prev: 'Mois précédent', next: 'Mois suivant', done: 'Valider' },
    nav: {
      rooms: 'Chambres',
      conteur: 'Le Conteur',
      scene: 'Scène',
      location: 'Localisation',
      story: 'Le Craves',
      guide: 'Guide de Bruxelles',
      faq: 'FAQ',
      gallery: 'Galerie',
      press: 'Presse',
      contact: 'Contact',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      legal: 'Mentions légales',
    },
  },
  en: {
    skipToContent: 'Skip to content',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    book: 'Book',
    seeAvailability: 'Check availability',
    arrival: 'Check-in',
    departure: 'Check-out',
    directDiscount: '-10% when booking direct',
    withCode: 'with the code THANKYOU',
    codeApplied: '-10% with the code THANKYOU, applied automatically',
    callHotel: 'Call the hotel',
    homeLabel: 'Craves Hotel, home',
    language: 'Language',
    footerNav: 'Site map',
    legalNav: 'Legal information',
    followUs: 'Follow us',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    seeRooms: 'See the rooms',
    allRooms: 'All rooms',
    viewRoom: 'View the room',
    bookThisRoom: 'Book this room',
    directDiscountLong: '-10% when you book direct with the code THANKYOU',
    guestPerkLabel: 'Craves guest',
    allFaq: 'Full FAQ →',
    allPhotos: 'All photos',
    close: 'Close',
    photoOf: 'Photo {n} of {total}',
    surface: 'Size',
    persons: 'Guests',
    beds: 'Beds',
    amenities: 'Amenities',
    goodToKnow: 'Good to know',
    question: 'A question?',
    footerStay: 'Stay',
    footerDiscover: 'Discover',
    footerInfo: 'Info',
    vat: 'VAT',
    opensInNewTab: '(opens in a new tab)',
    roomsShown: '{n} room(s) shown',
    storyLink: 'Our story',
    calendar: { title: 'Your dates', choose: 'Select', night: '{n} night', nights: '{n} nights', prev: 'Previous month', next: 'Next month', done: 'Done' },
    nav: {
      rooms: 'Rooms',
      conteur: 'Le Conteur',
      scene: 'Scène',
      location: 'Location',
      story: 'Le Craves',
      guide: 'Brussels guide',
      faq: 'FAQ',
      gallery: 'Gallery',
      press: 'Press',
      contact: 'Contact',
      privacy: 'Privacy',
      cookies: 'Cookies',
      legal: 'Legal notice',
    },
  },
  nl: {
    skipToContent: 'Naar de inhoud',
    menu: 'Menu',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    mainNav: 'Hoofdnavigatie',
    book: 'Reserveren',
    seeAvailability: 'Beschikbaarheid bekijken',
    arrival: 'Aankomst',
    departure: 'Vertrek',
    directDiscount: '-10% bij rechtstreeks boeken',
    withCode: 'met de code THANKYOU',
    codeApplied: '-10% met de code THANKYOU, automatisch toegepast',
    callHotel: 'Het hotel bellen',
    homeLabel: 'Craves Hotel, home',
    language: 'Taal',
    footerNav: 'Sitemap',
    legalNav: 'Juridische informatie',
    followUs: 'Volg ons',
    home: 'Home',
    breadcrumb: 'Kruimelpad',
    seeRooms: 'Bekijk de kamers',
    allRooms: 'Alle kamers',
    viewRoom: 'Bekijk de kamer',
    bookThisRoom: 'Deze kamer boeken',
    directDiscountLong: '-10% bij rechtstreeks boeken met de code THANKYOU',
    guestPerkLabel: 'Gast van Craves',
    allFaq: 'Alle vragen →',
    allPhotos: "Alle foto's",
    close: 'Sluiten',
    photoOf: 'Foto {n} van {total}',
    surface: 'Oppervlakte',
    persons: 'Personen',
    beds: 'Bedden',
    amenities: 'Voorzieningen',
    goodToKnow: 'Goed om te weten',
    question: 'Een vraag?',
    footerStay: 'Verblijven',
    footerDiscover: 'Ontdekken',
    footerInfo: 'Info',
    vat: 'Btw',
    opensInNewTab: '(opent in een nieuw tabblad)',
    roomsShown: '{n} kamer(s) getoond',
    storyLink: 'Ons verhaal',
    calendar: { title: 'Uw data', choose: 'Kiezen', night: '{n} nacht', nights: '{n} nachten', prev: 'Vorige maand', next: 'Volgende maand', done: 'Bevestigen' },
    nav: {
      rooms: 'Kamers',
      conteur: 'Le Conteur',
      scene: 'Scène',
      location: 'Ligging',
      story: 'Le Craves',
      guide: 'Gids van Brussel',
      faq: 'FAQ',
      gallery: 'Galerij',
      press: 'Pers',
      contact: 'Contact',
      privacy: 'Privacy',
      cookies: 'Cookies',
      legal: 'Juridische informatie',
    },
  },
};

export function t(locale: Locale): UiStrings {
  return UI[locale];
}

/** Primary navigation, in display order. */
export const PRIMARY_NAV: NavKey[] = ['rooms', 'conteur', 'scene', 'location'];
/** Full-screen menu (mobile and desktop "Menu" button). */
export const MENU_NAV: NavKey[] = ['rooms', 'conteur', 'scene', 'location', 'story', 'guide'];
export const MENU_SECONDARY: NavKey[] = ['faq', 'gallery', 'contact'];
export const LEGAL_NAV: NavKey[] = ['privacy', 'cookies', 'legal'];
