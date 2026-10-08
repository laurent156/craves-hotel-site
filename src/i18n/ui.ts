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
