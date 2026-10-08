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
  en: {
    metaTitle: 'Rooms and suites in the heart of Brussels | Craves Hotel',
    metaDescription:
      '75 uniquely styled, air-conditioned rooms, from single to 50 m² family room, a 4-minute walk from the Grand-Place. -10% when you book direct.',
    hero: {
      title: { text: 'Rooms and suites', em: 'in the heart of Brussels' },
      lead: '75 uniquely styled, air-conditioned rooms, a 4-minute walk from the Grand-Place.',
    },
    filters: {
      label: 'Filter by number of guests',
      all: 'All',
      byCapacity: { 1: '1 guest', 2: '2 guests', 3: '3 guests', 4: 'Family · 4' },
    },
    roomNumber: 'Room',
    common: {
      eyebrow: 'In every room',
      items: ['Air conditioning', 'Free Wi-Fi', 'Television', 'Telephone', 'Private bathroom', 'Bath or shower', 'Hairdryer', 'Toilet'],
      bathNote: '33 rooms have a bath: request one when you book, subject to availability.',
    },
    compare: {
      title: { text: 'Compare', em: 'the rooms' },
      shortNames: ['Single', 'Double', 'Triple', 'Family'],
      rows: [
        { label: 'Size', values: ['12 m²', '15 m²', '20 m²', '50 m²'] },
        { label: 'Guests', values: ['1', '2', '3', '4'] },
        { label: 'Beds', values: ['1 single bed', '1 double bed or 2 twin beds', '1 double bed + 1 single bed or sofa bed', '3 twin beds + sofa bed'] },
        { label: 'Building', values: ['Main', 'Main', 'Main', 'Opposite, quieter'] },
      ],
    },
    faq: {
      title: { text: 'Questions', em: 'about the rooms' },
      ids: ['twin', 'aircon', 'babyCot', 'extraBed', 'accessible'],
    },
    roomPage: {
      otherRooms: { text: 'Our other', em: 'rooms' },
      faqTitle: { text: 'Questions', em: 'about this room' },
      bookTitle: 'Book direct',
      reasons: ['4 min walk from the Grand-Place', '24/7 reception', 'Free luggage storage'],
      eyebrow: 'The room',
    },
  },
  nl: {
    metaTitle: 'Kamers en suites in het hart van Brussel | Craves Hotel',
    metaDescription:
      '75 kamers met airco in een unieke stijl, van eenpersoonskamer tot familiekamer van 50 m², op 4 minuten van de Grote Markt. -10% bij directe boeking.',
    hero: {
      title: { text: 'Kamers en suites', em: 'in het hart van Brussel' },
      lead: '75 kamers met airco in een unieke stijl, op 4 minuten wandelen van de Grote Markt.',
    },
    filters: {
      label: 'Filteren op aantal personen',
      all: 'Alle',
      byCapacity: { 1: '1 persoon', 2: '2 personen', 3: '3 personen', 4: 'Gezin · 4' },
    },
    roomNumber: 'Kamer',
    common: {
      eyebrow: 'In alle kamers',
      items: ['Airco', 'Gratis wifi', 'Televisie', 'Telefoon', 'Eigen badkamer', 'Bad of douche', 'Haardroger', 'Toilet'],
      bathNote: '33 kamers hebben een bad: vraag ernaar bij uw boeking, volgens beschikbaarheid.',
    },
    compare: {
      title: { text: 'Vergelijk', em: 'de kamers' },
      shortNames: ['Eenpersoons', 'Tweepersoons', 'Driepersoons', 'Familie'],
      rows: [
        { label: 'Oppervlakte', values: ['12 m²', '15 m²', '20 m²', '50 m²'] },
        { label: 'Personen', values: ['1', '2', '3', '4'] },
        { label: 'Bedden', values: ['1 eenpersoonsbed', '1 tweepersoonsbed of 2 aparte bedden', '1 tweepersoonsbed + 1 eenpersoonsbed of slaapbank', '3 aparte bedden + slaapbank'] },
        { label: 'Gebouw', values: ['Hoofdgebouw', 'Hoofdgebouw', 'Hoofdgebouw', 'Aan de overkant, rustiger'] },
      ],
    },
    faq: {
      title: { text: 'Vragen', em: 'over de kamers' },
      ids: ['twin', 'aircon', 'babyCot', 'extraBed', 'accessible'],
    },
    roomPage: {
      otherRooms: { text: 'Onze andere', em: 'kamers' },
      faqTitle: { text: 'Vragen', em: 'over deze kamer' },
      bookTitle: 'Boek rechtstreeks',
      reasons: ['4 min wandelen van de Grote Markt', 'Receptie 24/7', 'Gratis bagageopslag'],
      eyebrow: 'De kamer',
    },
  },
};
