import type { Locale } from '../i18n/locales';
import { pick, type FaqItem, type Localized } from './localize';

export type RoomKey = 'roomSingle' | 'roomDouble' | 'roomTriple' | 'roomFamily';

interface RoomText {
  name: string;
  /** Italic part of the H1, after the room name. */
  h1Suffix: string;
  /** Short label for cards: "1 pers. · 12 m²". */
  meta: string;
  capacityLabel: string;
  beds: string;
  /** Serif lead on the room page. */
  lead: string;
  description: string;
  /** Text on the rooms list page. */
  listText: string;
  /** Side note (family room building). */
  note?: string;
  amenities: string[];
  faq: FaqItem[];
  metaTitle: string;
  metaDescription: string;
}

export interface Room {
  key: RoomKey;
  size: number;
  capacity: number;
  /** Gallery on the room page: main photo, then the two side photos, then the rest. */
  gallery: string[];
  /** Photo on the rooms list page (4:3). */
  listPhoto: string;
  /** Photo on cards (home, other rooms), 4:5. */
  cardPhoto: string;
  cardPosition: string;
  text: Localized<RoomText>;
}

export const ROOMS: Room[] = [
  {
    key: 'roomSingle',
    size: 12,
    capacity: 1,
    gallery: ['chambre-simple-craves-bruxelles', 'chambre-simple-craves-bruxelles-2', 'chambre-simple-craves-salle-de-bains'],
    listPhoto: 'chambre-simple-craves-bruxelles',
    cardPhoto: 'chambre-simple-craves-bruxelles-2',
    cardPosition: '50% 50%',
    text: {
      fr: {
        name: 'Chambre simple',
        h1Suffix: 'de 12 m² au centre de Bruxelles',
        meta: '1 pers. · 12 m²',
        capacityLabel: '1 personne',
        beds: '1 lit simple',
        lead: 'Pour le voyageur en solo : tout l’univers du Craves en 12 m².',
        description:
          'Papier peint floral inspiré des cinq sens, velours et touches de bleu pétrole. Climatisée, avec Wi-Fi gratuit et salle de bains privative, la chambre simple fait une base confortable pour un déplacement professionnel ou un city-trip, à 4 minutes à pied de la Grand-Place.',
        listText: 'Pensée pour le voyageur en solo : tout l’univers du Craves en 12 m², climatisée, avec Wi-Fi gratuit et salle de bains privative.',
        amenities: ['Climatisation', 'Wi-Fi gratuit', 'Télévision', 'Téléphone', 'Salle de bains privative', 'Baignoire ou douche', 'Sèche-cheveux', 'Toilettes'],
        faq: [
          { q: 'La chambre simple a-t-elle une baignoire ?', a: 'Douche ou baignoire selon la chambre. 33 chambres ont une baignoire : demandez-la à la réservation.' },
          { q: 'Peut-on y dormir à deux ?', a: 'Non, la chambre simple accueille 1 personne. Pour deux, choisissez la chambre double.' },
          { q: 'Y a-t-il un bureau ?', a: 'Non, les chambres ne sont pas équipées d’un bureau.' },
        ],
        metaTitle: 'Chambre simple à Bruxelles, 12 m² près de la Grand-Place | Craves Hotel',
        metaDescription:
          'Chambre simple de 12 m² au Craves Hotel, à 4 minutes à pied de la Grand-Place : climatisation, Wi-Fi gratuit, salle de bains privative. -10 % en réservant en direct.',
      },
    },
  },
  {
    key: 'roomDouble',
    size: 15,
    capacity: 2,
    gallery: ['chambre-double-craves-bruxelles', 'chambre-double-craves-detail', 'chambre-double-craves-salle-de-bains', 'chambre-double-craves-bruxelles-2'],
    listPhoto: 'chambre-double-craves-bruxelles-2',
    cardPhoto: 'chambre-double-craves-bruxelles-2',
    cardPosition: '55% 50%',
    text: {
      fr: {
        name: 'Chambre double',
        h1Suffix: 'de 15 m² au centre de Bruxelles',
        meta: '2 pers. · 15 m²',
        capacityLabel: '2 personnes',
        beds: '1 lit double ou 2 lits jumeaux',
        lead: 'Pour deux, avec un grand lit ou deux lits jumeaux, dans le style unique du Craves.',
        description:
          'Velours, marbre, bleu pétrole et papier peint floral créent une atmosphère intime et cosy. Climatisation, Wi-Fi gratuit, télévision LCD et armoire de rangement complètent l’ensemble. La Grand-Place est à 4 minutes à pied ; Le Conteur et Scène sont dans l’hôtel.',
        listText: 'Velours, marbre et bleu pétrole pour une atmosphère intime. Grand lit ou lits jumeaux, au choix à la réservation.',
        amenities: ['Climatisation', 'Wi-Fi gratuit', 'Télévision LCD', 'Téléphone', 'Armoire de rangement', 'Articles de toilette', 'Salle de bains privative', 'Baignoire ou douche', 'Sèche-cheveux', 'Toilettes'],
        faq: [
          { q: 'Quelle est la différence entre une chambre double et twin ?', a: 'La twin a deux lits simples (jumeaux), la double un grand lit (queen ou king). Vous choisissez à la réservation.' },
          { q: 'Peut-on ajouter un lit d’appoint ?', a: 'Non. Un lit bébé est possible gratuitement, sur demande 24 h avant l’arrivée.' },
          { q: 'La chambre a-t-elle une baignoire ?', a: 'Douche ou baignoire selon la chambre. 33 chambres ont une baignoire : demandez-la à la réservation.' },
        ],
        metaTitle: 'Chambre double à Bruxelles, 15 m² près de la Grand-Place | Craves Hotel',
        metaDescription:
          'Chambre double de 15 m² au Craves Hotel, grand lit ou lits jumeaux, à 4 minutes à pied de la Grand-Place. Climatisation, Wi-Fi gratuit. -10 % en réservant en direct.',
      },
    },
  },
  {
    key: 'roomTriple',
    size: 20,
    capacity: 3,
    gallery: ['chambre-triple-craves-lit-double-et-simple', 'chambre-triple-craves-banquette', 'chambre-triple-craves-service-the'],
    listPhoto: 'chambre-triple-craves-lit-double-et-simple',
    cardPhoto: 'chambre-triple-craves-lit-double-et-simple',
    cardPosition: '62% 50%',
    text: {
      fr: {
        name: 'Chambre triple',
        h1Suffix: 'de 20 m² pour 3 personnes',
        meta: '3 pers. · 20 m²',
        capacityLabel: '3 personnes',
        beds: '1 lit double + 1 lit simple ou canapé-lit',
        lead: 'À trois, en famille avec un enfant ou entre amis, au centre de Bruxelles.',
        description:
          '20 m² avec un lit double et un lit simple ou canapé-lit, dans le décor du Craves : velours, marbre et papier peint floral. Chambre climatisée, Wi-Fi gratuit, armoire de rangement et salle de bains privative. Tout le centre se découvre à pied : la Grand-Place est à 4 minutes.',
        listText: 'Idéale pour une famille avec un enfant ou trois amis en week-end, au centre de Bruxelles.',
        amenities: ['Climatisation', 'Wi-Fi gratuit', 'Télévision LCD', 'Téléphone', 'Armoire de rangement', 'Salle de bains privative', 'Baignoire ou douche', 'Sèche-cheveux', 'Toilettes'],
        faq: [
          { q: 'Comment sont disposés les lits ?', a: 'Un lit double et un lit simple ou un canapé-lit, selon la chambre.' },
          { q: 'Un lit bébé est-il possible ?', a: 'Oui, gratuitement, sur demande au moins 24 h avant l’arrivée.' },
          { q: 'Peut-on ajouter un lit d’appoint ?', a: 'Non, l’hôtel ne propose pas de lit d’appoint.' },
        ],
        metaTitle: 'Chambre triple à Bruxelles, 20 m² pour 3 personnes | Craves Hotel',
        metaDescription:
          'Chambre triple de 20 m² au Craves Hotel : un lit double et un lit simple ou canapé-lit, à 4 minutes à pied de la Grand-Place. -10 % en réservant en direct.',
      },
    },
  },
  {
    key: 'roomFamily',
    size: 50,
    capacity: 4,
    gallery: ['chambre-famille-craves-bruxelles', 'chambre-famille-craves-chambre', 'chambre-famille-craves-coin-repas', 'chambre-famille-craves-portrait'],
    listPhoto: 'chambre-famille-craves-bruxelles',
    cardPhoto: 'chambre-famille-craves-portrait',
    cardPosition: '50% 50%',
    text: {
      fr: {
        name: 'Chambre famille',
        h1Suffix: 'de 50 m² pour 4 personnes',
        meta: '4 pers. · 50 m²',
        capacityLabel: '4 personnes',
        beds: '3 lits jumeaux + canapé-lit',
        lead: '50 m² pour quatre, avec salon, kitchenette et coin repas.',
        description:
          'Trois lits jumeaux, un salon avec canapé-lit et une kitchenette avec plaque de cuisson, bouilloire et machine à café. Les chambres famille sont dans le bâtiment en face, qui fait partie de l’hôtel mais reste à part, pour plus de tranquillité. On y accède par une volée d’escalier, puis un ascenseur.',
        listText: 'Une suite avec salon et canapé-lit, parfaite pour une famille ou un groupe de quatre.',
        note: 'Dans le bâtiment en face, qui fait partie de l’hôtel mais reste plus au calme. Accès par une volée d’escalier, puis un ascenseur.',
        amenities: ['Climatisation', 'Kitchenette : plaque de cuisson, bouilloire, machine à café', 'Coin repas', 'Salon avec canapé-lit', 'Wi-Fi gratuit', 'Télévision', 'Téléphone', 'Articles de toilette', 'Salle de bains privative avec douche', 'Sèche-cheveux', 'Toilettes'],
        faq: [
          { q: 'Où se trouve la chambre famille ?', a: 'Dans le bâtiment en face du bâtiment principal, qui fait partie de l’hôtel. Accès par une volée d’escalier, puis un ascenseur : signalez-le à la réservation si besoin.' },
          { q: 'Combien de chambres famille compte l’hôtel ?', a: '5 chambres famille, pour 4 personnes chacune.' },
          { q: 'Un lit bébé est-il possible ?', a: 'Oui, gratuitement, sur demande au moins 24 h avant l’arrivée.' },
        ],
        metaTitle: 'Chambre famille à Bruxelles, 50 m² pour 4 personnes | Craves Hotel',
        metaDescription:
          'Chambre famille de 50 m² pour 4 personnes au Craves Hotel : salon, kitchenette et coin repas, à 4 minutes à pied de la Grand-Place. -10 % en réservant en direct.',
      },
    },
  },
];

/** Stay information repeated on every room page. */
export const ROOM_POLICIES: Localized<{ k: string; v: string }[]> = {
  fr: [
    { k: 'Check-in', v: 'Dès 14h00 · early check-in sur demande' },
    { k: 'Check-out', v: 'Jusqu’à 11h30 · late check-out selon disponibilité' },
    { k: 'Annulation', v: 'Selon le tarif choisi : flexible ou non remboursable' },
    { k: 'Petit-déjeuner', v: 'Buffet continental · 19 € adulte, 10 € enfant' },
    { k: 'Taxe de séjour', v: '4,24 € par chambre et par nuit' },
    { k: 'Animaux', v: 'Non admis · hôtel non-fumeur' },
  ],
};

export function roomText(room: Room, locale: Locale): RoomText {
  return pick(room.text, locale);
}

export function getRoom(key: RoomKey): Room {
  const room = ROOMS.find((r) => r.key === key);
  if (!room) throw new Error(`Unknown room "${key}"`);
  return room;
}
