import type { Localized, TitleParts } from './localize';
import type { RouteKey } from '../i18n/routes';

/**
 * Position on the static map (src/assets/brand/carte-craves-hotel-bruxelles.webp, 840×900, OpenStreetMap
 * zoom 16), in % of its width and height. Same order as `nearby.places`. Computed from GPS coordinates.
 */
export const MAP_HOTEL: [number, number] = [42.4, 46.4];
export const MAP_POINTS: [number, number][] = [
  [45.5, 53.9], // Église Saint-Nicolas
  [31.9, 54.8], // Bourse · Belgian Beer World
  [50.1, 63.8], // Grand-Place
  [53.7, 24.8], // Métro De Brouckère
  [65.2, 51.8], // Galeries Royales Saint-Hubert
  [24.0, 31.0], // Place Sainte-Catherine
  [36.7, 78.1], // Manneken-Pis
  [75.5, 74.2], // Gare Centrale
  [74.3, 87.3], // Mont des Arts
  [92.6, 54.7], // Cathédrale Saints-Michel-et-Gudule
];

export interface LocationContent {
  metaTitle: string;
  metaDescription: string;
  hero: { title: string; em: string; directions: string; copy: string; copied: string };
  nearby: { eyebrow: string; title: string; places: { name: string; distance: string }[]; note: string; mapLabel: string; mapAlt: string };
  access: { title: TitleParts; ways: { title: string; lines: string[] }[] };
  guide: {
    eyebrow: string;
    title: TitleParts;
    cta: string;
    articles: { photo: string; title: string; route: RouteKey }[];
  };
  faq: { title: TitleParts; ids: string[] };
}

export const LOCATION: Localized<LocationContent> = {
  fr: {
    metaTitle: 'Localisation : hôtel à 4 minutes de la Grand-Place de Bruxelles | Craves Hotel',
    metaDescription:
      'Le Craves Hotel est rue du Marché aux Poulets 32, à 280 m de la Grand-Place. Accès depuis la gare du Midi, Brussels Airport et Charleroi, parkings à proximité.',
    hero: {
      title: 'Au cœur de Bruxelles,',
      em: 'à 4 minutes de la Grand-Place',
      directions: 'Ouvrir l’itinéraire',
      copy: 'Copier l’adresse',
      copied: 'Adresse copiée',
    },
    nearby: {
      eyebrow: 'À pied depuis l’hôtel',
      title: 'À proximité',
      places: [
        { name: 'Église Saint-Nicolas', distance: '120 m · 2 min' },
        { name: 'Bourse · Belgian Beer World', distance: '150 m · 2 min' },
        { name: 'Grand-Place', distance: '280 m · 4 min' },
        { name: 'Métro De Brouckère', distance: '350 m · 5 min' },
        { name: 'Galeries Royales Saint-Hubert', distance: '380 m · 5 min' },
        { name: 'Place Sainte-Catherine', distance: '410 m · 6 min' },
        { name: 'Manneken-Pis', distance: '550 m · 7 min' },
        { name: 'Gare Centrale', distance: '600 m · 9 min' },
        { name: 'Mont des Arts', distance: '740 m · 10 min' },
        { name: 'Cathédrale Saints-Michel-et-Gudule', distance: '790 m · 11 min' },
      ],
      note: 'Distances calculées à pied depuis le 32 rue du Marché aux Poulets.',
      mapLabel: 'Voir sur Google Maps',
      mapAlt: 'Plan du centre de Bruxelles avec l’emplacement du Craves Hotel, près de la Bourse et de la Grand-Place',
    },
    access: {
      title: { text: 'Comment', em: 'venir' },
      ways: [
        { title: 'Gare du Midi · Eurostar', lines: ['Tram 3 ou 4 jusqu’à Bourse (environ 10 min), puis 2 min à pied', 'Ou train jusqu’à la Gare Centrale, puis 9 min à pied'] },
        { title: 'Brussels Airport', lines: ['Train jusqu’à la Gare Centrale, puis 9 min à pied', 'Taxi : 15 km, 25 à 40 min'] },
        { title: 'Charleroi Airport', lines: ['Navette Flibco : environ 55 min, environ 20 € par personne'] },
        { title: 'En voiture', lines: ['Pas de parking privé', 'Interparking Ecuyer (280 m), Brucity (300 m), Monnaie (400 m)', 'Borne électrique rue Grétry, à 150 m'] },
      ],
    },
    guide: {
      eyebrow: 'Guide de Bruxelles',
      title: { text: 'Que faire', em: 'autour de l’hôtel' },
      cta: 'Tous les articles',
      articles: [{ photo: 'grand-place-bruxelles-hotel-de-ville', title: 'Que faire autour de la Grand-Place', route: 'guideGrandPlace' }],
    },
    faq: {
      title: { text: 'Questions', em: 'pratiques' },
      ids: ['grandPlace', 'parking', 'metro', 'luggage'],
    },
  },
  en: {
    metaTitle: 'Location: hotel 4 minutes from Grand-Place Brussels | Craves',
    metaDescription:
      'Craves Hotel is at Rue du Marché aux Poulets 32, 280 m from the Grand-Place. Access from Brussels-Midi, Brussels Airport and Charleroi; car parks nearby.',
    hero: {
      title: 'In the heart of Brussels,',
      em: '4 minutes from the Grand-Place',
      directions: 'Get directions',
      copy: 'Copy the address',
      copied: 'Address copied',
    },
    nearby: {
      eyebrow: 'On foot from the hotel',
      title: 'Nearby',
      places: [
        { name: 'St Nicholas’ Church', distance: '120 m · 2 min' },
        { name: 'Bourse · Belgian Beer World', distance: '150 m · 2 min' },
        { name: 'Grand-Place', distance: '280 m · 4 min' },
        { name: 'De Brouckère metro', distance: '350 m · 5 min' },
        { name: 'Royal Galleries of Saint-Hubert', distance: '380 m · 5 min' },
        { name: 'Place Sainte-Catherine', distance: '410 m · 6 min' },
        { name: 'Manneken Pis', distance: '550 m · 7 min' },
        { name: 'Brussels Central Station', distance: '600 m · 9 min' },
        { name: 'Mont des Arts', distance: '740 m · 10 min' },
        { name: 'Cathedral of St Michael and St Gudula', distance: '790 m · 11 min' },
      ],
      note: 'Walking distances from Rue du Marché aux Poulets 32.',
      mapLabel: 'View on Google Maps',
      mapAlt: 'Map of central Brussels showing Craves Hotel, near the Bourse and the Grand-Place',
    },
    access: {
      title: { text: 'Getting', em: 'here' },
      ways: [
        { title: 'Brussels-Midi station · Eurostar', lines: ['Tram 3 or 4 to Bourse (about 10 min), then a 2-minute walk', 'Or train to Brussels Central Station, then a 9-minute walk'] },
        { title: 'Brussels Airport', lines: ['Train to Brussels Central Station, then a 9-minute walk', 'Taxi: 15 km, 25 to 40 min'] },
        { title: 'Charleroi Airport', lines: ['Flibco shuttle: about 55 min, about €20 per person'] },
        { title: 'By car', lines: ['No private car park', 'Interparking Ecuyer (280 m), Brucity (300 m), Monnaie (400 m)', 'EV charging point on Rue Grétry, 150 m away'] },
      ],
    },
    guide: {
      eyebrow: 'Brussels guide',
      title: { text: 'Things to do', em: 'around the hotel' },
      cta: 'All articles',
      articles: [{ photo: 'grand-place-bruxelles-hotel-de-ville', title: 'Things to do around the Grand-Place', route: 'guideGrandPlace' }],
    },
    faq: {
      title: { text: 'Practical', em: 'questions' },
      ids: ['grandPlace', 'parking', 'metro', 'luggage'],
    },
  },
  nl: {
    metaTitle: 'Ligging: hotel op 4 min van de Grote Markt | Craves Hotel',
    metaDescription:
      'Craves Hotel: Rue du Marché aux Poulets 32, op 280 m van de Grote Markt. Bereikbaar vanuit Brussel-Zuid, Brussels Airport en Charleroi; parkings vlakbij.',
    hero: {
      title: 'In het hart van Brussel,',
      em: 'op 4 minuten van de Grote Markt',
      directions: 'Route openen',
      copy: 'Adres kopiëren',
      copied: 'Adres gekopieerd',
    },
    nearby: {
      eyebrow: 'Te voet vanaf het hotel',
      title: 'In de buurt',
      places: [
        { name: 'Sint-Niklaaskerk', distance: '120 m · 2 min' },
        { name: 'Beurs · Belgian Beer World', distance: '150 m · 2 min' },
        { name: 'Grote Markt', distance: '280 m · 4 min' },
        { name: 'Metro De Brouckère', distance: '350 m · 5 min' },
        { name: 'Koninklijke Sint-Hubertusgalerijen', distance: '380 m · 5 min' },
        { name: 'Sint-Katelijneplein', distance: '410 m · 6 min' },
        { name: 'Manneken Pis', distance: '550 m · 7 min' },
        { name: 'Centraal Station', distance: '600 m · 9 min' },
        { name: 'Kunstberg', distance: '740 m · 10 min' },
        { name: 'Sint-Goedelekathedraal', distance: '790 m · 11 min' },
      ],
      note: 'Wandelafstanden berekend vanaf Rue du Marché aux Poulets 32.',
      mapLabel: 'Bekijk op Google Maps',
      mapAlt: 'Kaart van het centrum van Brussel met de ligging van Craves Hotel, bij de Beurs en de Grote Markt',
    },
    access: {
      title: { text: 'Hoe', em: 'komt u er' },
      ways: [
        { title: 'Zuidstation · Eurostar', lines: ['Tram 3 of 4 tot Beurs (ongeveer 10 min), daarna 2 min te voet', 'Of de trein tot Brussel-Centraal, daarna 9 min te voet'] },
        { title: 'Brussels Airport', lines: ['Trein tot Brussel-Centraal, daarna 9 min te voet', 'Taxi: 15 km, 25 tot 40 min'] },
        { title: 'Charleroi Airport', lines: ['Flibco-shuttle: ongeveer 55 min, ongeveer € 20 per persoon'] },
        { title: 'Met de wagen', lines: ['Geen eigen parking', 'Interparking Ecuyer (280 m), Brucity (300 m), Monnaie (400 m)', 'Laadpaal in de Grétrystraat, op 150 m'] },
      ],
    },
    guide: {
      eyebrow: 'Gids van Brussel',
      title: { text: 'Wat te doen', em: 'rond het hotel' },
      cta: 'Alle artikels',
      articles: [{ photo: 'grand-place-bruxelles-hotel-de-ville', title: 'Wat te doen rond de Grote Markt', route: 'guideGrandPlace' }],
    },
    faq: {
      title: { text: 'Praktische', em: 'vragen' },
      ids: ['grandPlace', 'parking', 'metro', 'luggage'],
    },
  },
};
