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
      en: {
        name: 'Single room',
        h1Suffix: 'of 12 m² in central Brussels',
        meta: '1 guest · 12 m²',
        capacityLabel: '1 guest',
        beds: '1 single bed',
        lead: 'For the solo traveller: the whole Craves world in 12 m².',
        description:
          'Floral wallpaper inspired by the five senses, velvet and touches of petrol blue. Air-conditioned, with free Wi-Fi and a private bathroom, the single room is a comfortable base for a business trip or a city break, a 4-minute walk from the Grand-Place.',
        listText: 'Designed for the solo traveller: the whole Craves world in 12 m², air-conditioned, with free Wi-Fi and a private bathroom.',
        amenities: ['Air conditioning', 'Free Wi-Fi', 'Television', 'Telephone', 'Private bathroom', 'Bath or shower', 'Hairdryer', 'Toilet'],
        faq: [
          { q: 'Does the single room have a bath?', a: 'Shower or bath depending on the room. 33 rooms have a bath: request one when you book.' },
          { q: 'Can two people stay in it?', a: 'No, the single room sleeps 1 person. For two, choose the double room.' },
          { q: 'Is there a desk?', a: 'No, the rooms are not equipped with a desk.' },
        ],
        metaTitle: 'Single room Brussels, 12 m² near Grand-Place | Craves Hotel',
        metaDescription:
          '12 m² single room at Craves Hotel, a 4-minute walk from the Grand-Place: air conditioning, free Wi-Fi, private bathroom. -10% when you book direct.',
      },
      nl: {
        name: 'Eenpersoonskamer',
        h1Suffix: 'van 12 m² in het centrum van Brussel',
        meta: '1 pers. · 12 m²',
        capacityLabel: '1 persoon',
        beds: '1 eenpersoonsbed',
        lead: 'Voor wie alleen reist: de hele wereld van Craves in 12 m².',
        description:
          'Bloemenbehang geïnspireerd op de vijf zintuigen, fluweel en accenten in petrolblauw. Met airco, gratis wifi en een eigen badkamer is de eenpersoonskamer een comfortabele uitvalsbasis voor een zakenreis of citytrip, op 4 minuten wandelen van de Grote Markt.',
        listText: 'Bedacht voor wie alleen reist: de hele wereld van Craves in 12 m², met airco, gratis wifi en een eigen badkamer.',
        amenities: ['Airco', 'Gratis wifi', 'Televisie', 'Telefoon', 'Eigen badkamer', 'Bad of douche', 'Haardroger', 'Toilet'],
        faq: [
          { q: 'Heeft de eenpersoonskamer een bad?', a: 'Douche of bad, afhankelijk van de kamer. 33 kamers hebben een bad: vraag ernaar bij uw boeking.' },
          { q: 'Kunnen er twee personen slapen?', a: 'Nee, de eenpersoonskamer is voor 1 persoon. Met twee kiest u de tweepersoonskamer.' },
          { q: 'Is er een bureau?', a: 'Nee, de kamers zijn niet uitgerust met een bureau.' },
        ],
        metaTitle: 'Eenpersoonskamer Brussel, 12 m² bij de Grote Markt | Craves',
        metaDescription:
          'Eenpersoonskamer van 12 m² in Craves Hotel, op 4 minuten wandelen van de Grote Markt: airco, gratis wifi, eigen badkamer. -10% bij directe boeking.',
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
      en: {
        name: 'Double room',
        h1Suffix: 'of 15 m² in central Brussels',
        meta: '2 guests · 15 m²',
        capacityLabel: '2 guests',
        beds: '1 double bed or 2 twin beds',
        lead: 'For two, with a large bed or twin beds, in the unique Craves style.',
        description:
          'Velvet, marble, petrol blue and floral wallpaper create an intimate, cosy atmosphere. Air conditioning, free Wi-Fi, an LCD television and a wardrobe complete the picture. The Grand-Place is a 4-minute walk away; Le Conteur and Scène are right inside the hotel.',
        listText: 'Velvet, marble and petrol blue for an intimate atmosphere. Large bed or twin beds, your choice when you book.',
        amenities: ['Air conditioning', 'Free Wi-Fi', 'LCD television', 'Telephone', 'Wardrobe', 'Toiletries', 'Private bathroom', 'Bath or shower', 'Hairdryer', 'Toilet'],
        faq: [
          { q: 'What is the difference between a double and a twin room?', a: 'The twin has two single (twin) beds, the double one large bed (queen or king). You choose when you book.' },
          { q: 'Can an extra bed be added?', a: 'No. A baby cot is available free of charge, on request 24 hours before arrival.' },
          { q: 'Does the room have a bath?', a: 'Shower or bath depending on the room. 33 rooms have a bath: request one when you book.' },
        ],
        metaTitle: 'Double room Brussels, 15 m² near Grand-Place | Craves Hotel',
        metaDescription:
          '15 m² double room at Craves Hotel, large bed or twin beds, a 4-minute walk from the Grand-Place. Air conditioning, free Wi-Fi. -10% when you book direct.',
      },
      nl: {
        name: 'Tweepersoonskamer',
        h1Suffix: 'van 15 m² in het centrum van Brussel',
        meta: '2 pers. · 15 m²',
        capacityLabel: '2 personen',
        beds: '1 tweepersoonsbed of 2 aparte bedden',
        lead: 'Voor twee, met een groot bed of twee aparte bedden, in de unieke stijl van Craves.',
        description:
          'Fluweel, marmer, petrolblauw en bloemenbehang zorgen voor een intieme, gezellige sfeer. Airco, gratis wifi, een lcd-televisie en een kleerkast maken het geheel compleet. De Grote Markt ligt op 4 minuten wandelen; Le Conteur en Scène vindt u in het hotel zelf.',
        listText: 'Fluweel, marmer en petrolblauw voor een intieme sfeer. Groot bed of twee aparte bedden, naar keuze bij uw boeking.',
        amenities: ['Airco', 'Gratis wifi', 'Lcd-televisie', 'Telefoon', 'Kleerkast', 'Toiletartikelen', 'Eigen badkamer', 'Bad of douche', 'Haardroger', 'Toilet'],
        faq: [
          { q: 'Wat is het verschil tussen een double- en een twinkamer?', a: 'De twinkamer heeft twee aparte eenpersoonsbedden, de doublekamer één groot bed (queen of king). U kiest bij uw boeking.' },
          { q: 'Kan er een extra bed bij?', a: 'Nee. Een babybedje is gratis mogelijk, op aanvraag 24 uur voor aankomst.' },
          { q: 'Heeft de kamer een bad?', a: 'Douche of bad, afhankelijk van de kamer. 33 kamers hebben een bad: vraag ernaar bij uw boeking.' },
        ],
        metaTitle: 'Tweepersoonskamer Brussel, 15 m² bij de Grote Markt | Craves',
        metaDescription:
          'Tweepersoonskamer van 15 m² in Craves, groot bed of twee aparte bedden, op 4 minuten van de Grote Markt. Airco, gratis wifi. -10% bij directe boeking.',
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
      en: {
        name: 'Triple room',
        h1Suffix: 'of 20 m² for 3 guests',
        meta: '3 guests · 20 m²',
        capacityLabel: '3 guests',
        beds: '1 double bed + 1 single bed or sofa bed',
        lead: 'For three, as a family with one child or with friends, in central Brussels.',
        description:
          '20 m² with a double bed and a single bed or sofa bed, in the Craves décor: velvet, marble and floral wallpaper. Air-conditioned room, free Wi-Fi, wardrobe and private bathroom. The whole centre can be explored on foot: the Grand-Place is 4 minutes away.',
        listText: 'Ideal for a family with one child or three friends on a weekend away, in central Brussels.',
        amenities: ['Air conditioning', 'Free Wi-Fi', 'LCD television', 'Telephone', 'Wardrobe', 'Private bathroom', 'Bath or shower', 'Hairdryer', 'Toilet'],
        faq: [
          { q: 'How are the beds arranged?', a: 'One double bed and a single bed or a sofa bed, depending on the room.' },
          { q: 'Is a baby cot available?', a: 'Yes, free of charge, on request at least 24 hours before arrival.' },
          { q: 'Can an extra bed be added?', a: 'No, the hotel does not offer extra beds.' },
        ],
        metaTitle: 'Triple room in Brussels, 20 m² for 3 guests | Craves Hotel',
        metaDescription:
          '20 m² triple room at Craves Hotel: a double bed and a single bed or sofa bed, a 4-minute walk from the Grand-Place. -10% when you book direct.',
      },
      nl: {
        name: 'Driepersoonskamer',
        h1Suffix: 'van 20 m² voor 3 personen',
        meta: '3 pers. · 20 m²',
        capacityLabel: '3 personen',
        beds: '1 tweepersoonsbed + 1 eenpersoonsbed of slaapbank',
        lead: 'Met drie, als gezin met één kind of met vrienden, in het centrum van Brussel.',
        description:
          '20 m² met een tweepersoonsbed en een eenpersoonsbed of slaapbank, in het decor van Craves: fluweel, marmer en bloemenbehang. Kamer met airco, gratis wifi, kleerkast en eigen badkamer. Het hele centrum verkent u te voet: de Grote Markt ligt op 4 minuten.',
        listText: 'Ideaal voor een gezin met één kind of drie vrienden op weekend, in het centrum van Brussel.',
        amenities: ['Airco', 'Gratis wifi', 'Lcd-televisie', 'Telefoon', 'Kleerkast', 'Eigen badkamer', 'Bad of douche', 'Haardroger', 'Toilet'],
        faq: [
          { q: 'Hoe zijn de bedden opgesteld?', a: 'Eén tweepersoonsbed en een eenpersoonsbed of een slaapbank, afhankelijk van de kamer.' },
          { q: 'Is een babybedje mogelijk?', a: 'Ja, gratis, op aanvraag minstens 24 uur voor aankomst.' },
          { q: 'Kan er een extra bed bij?', a: 'Nee, het hotel biedt geen extra bedden aan.' },
        ],
        metaTitle: 'Driepersoonskamer Brussel, 20 m² voor 3 personen | Craves',
        metaDescription:
          'Driepersoonskamer van 20 m² in Craves: een tweepersoonsbed en een eenpersoonsbed of slaapbank, op 4 minuten van de Grote Markt. -10% bij directe boeking.',
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
      en: {
        name: 'Family room',
        h1Suffix: 'of 50 m² for 4 guests',
        meta: '4 guests · 50 m²',
        capacityLabel: '4 guests',
        beds: '3 twin beds + sofa bed',
        lead: '50 m² for four, with a lounge, kitchenette and dining area.',
        description:
          'Three twin beds, a lounge with sofa bed and a kitchenette with hob, kettle and coffee machine. The family rooms are in the building opposite, which is part of the hotel but set apart, for extra peace and quiet. Access is via a flight of stairs, then a lift.',
        listText: 'A suite with a lounge and sofa bed, perfect for a family or a group of four.',
        note: 'In the building opposite, which is part of the hotel but quieter. Access via a flight of stairs, then a lift.',
        amenities: ['Air conditioning', 'Kitchenette: hob, kettle, coffee machine', 'Dining area', 'Lounge with sofa bed', 'Free Wi-Fi', 'Television', 'Telephone', 'Toiletries', 'Private bathroom with shower', 'Hairdryer', 'Toilet'],
        faq: [
          { q: 'Where is the family room?', a: 'In the building opposite the main building, which is part of the hotel. Access via a flight of stairs, then a lift: let us know when you book if needed.' },
          { q: 'How many family rooms does the hotel have?', a: '5 family rooms, each for 4 people.' },
          { q: 'Is a baby cot available?', a: 'Yes, free of charge, on request at least 24 hours before arrival.' },
        ],
        metaTitle: 'Family room in Brussels, 50 m² for 4 guests | Craves Hotel',
        metaDescription:
          '50 m² family room for 4 at Craves Hotel: lounge, kitchenette and dining area, a 4-minute walk from the Grand-Place. -10% when you book direct.',
      },
      nl: {
        name: 'Familiekamer',
        h1Suffix: 'van 50 m² voor 4 personen',
        meta: '4 pers. · 50 m²',
        capacityLabel: '4 personen',
        beds: '3 aparte bedden + slaapbank',
        lead: '50 m² voor vier, met zithoek, kitchenette en eethoek.',
        description:
          'Drie aparte eenpersoonsbedden, een zithoek met slaapbank en een kitchenette met kookplaat, waterkoker en koffiezetapparaat. De familiekamers liggen in het gebouw aan de overkant, dat deel uitmaakt van het hotel maar apart staat, voor meer rust. U bereikt ze via een trap en daarna een lift.',
        listText: 'Een suite met zithoek en slaapbank, perfect voor een gezin of een groep van vier.',
        note: 'In het gebouw aan de overkant, dat deel uitmaakt van het hotel maar rustiger ligt. Toegang via een trap en daarna een lift.',
        amenities: ['Airco', 'Kitchenette: kookplaat, waterkoker, koffiezetapparaat', 'Eethoek', 'Zithoek met slaapbank', 'Gratis wifi', 'Televisie', 'Telefoon', 'Toiletartikelen', 'Eigen badkamer met douche', 'Haardroger', 'Toilet'],
        faq: [
          { q: 'Waar bevindt de familiekamer zich?', a: 'In het gebouw tegenover het hoofdgebouw, dat deel uitmaakt van het hotel. Toegang via een trap en daarna een lift: meld het bij uw boeking indien nodig.' },
          { q: 'Hoeveel familiekamers telt het hotel?', a: '5 familiekamers, elk voor 4 personen.' },
          { q: 'Is een babybedje mogelijk?', a: 'Ja, gratis, op aanvraag minstens 24 uur voor aankomst.' },
        ],
        metaTitle: 'Familiekamer Brussel, 50 m² voor 4 personen | Craves Hotel',
        metaDescription:
          'Familiekamer van 50 m² voor 4 personen in Craves Hotel: zithoek, kitchenette en eethoek, op 4 minuten van de Grote Markt. -10% bij directe boeking.',
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
  en: [
    { k: 'Check-in', v: 'From 14:00 · early check-in on request' },
    { k: 'Check-out', v: 'Until 11:30 · late check-out subject to availability' },
    { k: 'Cancellation', v: 'Depending on the rate chosen: flexible or non-refundable' },
    { k: 'Breakfast', v: 'Continental buffet · €19 adult, €10 child' },
    { k: 'City tax', v: '€4.24 per room per night' },
    { k: 'Pets', v: 'Not allowed · non-smoking hotel' },
  ],
  nl: [
    { k: 'Check-in', v: 'Vanaf 14.00 uur · early check-in op aanvraag' },
    { k: 'Check-out', v: 'Tot 11.30 uur · late check-out volgens beschikbaarheid' },
    { k: 'Annulering', v: 'Afhankelijk van het gekozen tarief: flexibel of niet-terugbetaalbaar' },
    { k: 'Ontbijt', v: 'Continentaal buffet · € 19 volwassene, € 10 kind' },
    { k: 'Stadstaks', v: '€ 4,24 per kamer per nacht' },
    { k: 'Huisdieren', v: 'Niet toegelaten · rookvrij hotel' },
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
