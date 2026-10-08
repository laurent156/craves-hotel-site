import type { Localized, TitleParts } from './localize';

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
    articles: { photo: string; title: string }[];
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
        { name: 'Gare Centrale', distance: '650 m · 9 min' },
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
      articles: [{ photo: 'grand-place-bruxelles-hotel-de-ville', title: 'Que faire autour de la Grand-Place' }],
    },
    faq: {
      title: { text: 'Questions', em: 'pratiques' },
      ids: ['grandPlace', 'parking', 'metro', 'luggage'],
    },
  },
};
