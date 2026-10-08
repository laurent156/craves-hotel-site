import type { Localized, TitleParts } from './localize';

export interface RoomsPageContent {
  metaTitle: string;
  metaDescription: string;
  hero: { title: TitleParts; lead: string };
  filters: { label: string; all: string; byCapacity: Record<number, string> };
  roomNumber: string;
  common: { eyebrow: string; items: string[]; bathNote: string };
  compare: {
    title: TitleParts;
    rows: { label: string; values: [string, string, string, string] }[];
    shortNames: [string, string, string, string];
  };
  faq: { title: TitleParts; ids: string[] };
  roomPage: { otherRooms: TitleParts; faqTitle: TitleParts; bookTitle: string; reasons: string[]; eyebrow: string };
}

export const ROOMS_PAGE: Localized<RoomsPageContent> = {
  fr: {
    metaTitle: 'Chambres et suites au cœur de Bruxelles | Craves Hotel',
    metaDescription:
      '75 chambres climatisées au style unique, de la chambre simple à la chambre famille de 50 m², à 4 minutes à pied de la Grand-Place. -10 % en réservant en direct.',
    hero: {
      title: { text: 'Chambres et suites', em: 'au cœur de Bruxelles' },
      lead: '75 chambres climatisées au style unique, à 4 minutes à pied de la Grand-Place.',
    },
    filters: {
      label: 'Filtrer par nombre de personnes',
      all: 'Toutes',
      byCapacity: { 1: '1 personne', 2: '2 personnes', 3: '3 personnes', 4: 'Famille · 4' },
    },
    roomNumber: 'Chambre',
    common: {
      eyebrow: 'Dans toutes les chambres',
      items: ['Climatisation', 'Wi-Fi gratuit', 'Télévision', 'Téléphone', 'Salle de bains privative', 'Baignoire ou douche', 'Sèche-cheveux', 'Toilettes'],
      bathNote: '33 chambres ont une baignoire : demandez-la à la réservation, selon disponibilité.',
    },
    compare: {
      title: { text: 'Comparer', em: 'les chambres' },
      shortNames: ['Simple', 'Double', 'Triple', 'Famille'],
      rows: [
        { label: 'Surface', values: ['12 m²', '15 m²', '20 m²', '50 m²'] },
        { label: 'Personnes', values: ['1', '2', '3', '4'] },
        { label: 'Lits', values: ['1 lit simple', '1 lit double ou 2 lits jumeaux', '1 lit double + 1 lit simple ou canapé-lit', '3 lits jumeaux + canapé-lit'] },
        { label: 'Bâtiment', values: ['Principal', 'Principal', 'Principal', 'En face, plus au calme'] },
      ],
    },
    faq: {
      title: { text: 'Questions', em: 'sur les chambres' },
      ids: ['twin', 'aircon', 'babyCot', 'extraBed', 'accessible'],
    },
    roomPage: {
      otherRooms: { text: 'Nos autres', em: 'chambres' },
      faqTitle: { text: 'Questions', em: 'sur cette chambre' },
      bookTitle: 'Réservez en direct',
      reasons: ['4 min à pied de la Grand-Place', 'Réception 24h/24', 'Bagagerie gratuite'],
      eyebrow: 'La chambre',
    },
  },
};
