import type { Localized, TitleParts } from './localize';

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; tagline: string; photoAlt: string };
  intro: { eyebrow: string; title: TitleParts; facts: { big: string; text: string }[]; perks: string[] };
  rooms: { eyebrow: string; title: TitleParts; text: string };
  venues: {
    eyebrow: string;
    title: TitleParts;
    conteur: { eyebrow: string; text: string; perk: string; cta: string };
    scene: { eyebrow: string; text: string; perk: string; cta: string };
  };
  reviews: { eyebrow: string; quotes: { q: string; who: string }[] };
  location: {
    eyebrow: string;
    title: TitleParts;
    places: { name: string; time: string }[];
    cta: string;
    photoAlt: string;
  };
  faq: { title: TitleParts; ids: string[] };
}

export const HOME: Localized<HomeContent> = {
  fr: {
    metaTitle: 'Craves Hotel Bruxelles | Boutique hôtel 3★ près de la Grand-Place',
    metaDescription:
      'Boutique hôtel 3★ au cœur de Bruxelles, à 4 minutes à pied de la Grand-Place. 75 chambres au style unique, restaurant Le Conteur et bar Scène. -10 % en réservant en direct.',
    hero: {
      eyebrow: 'Boutique hôtel 3★ · Bruxelles',
      tagline: 'Une expérience unique au cœur de Bruxelles',
      photoAlt: 'Chambre du Craves Hotel à Bruxelles : tête de lit en velours bleu, coussin rond et miroir ovale',
    },
    intro: {
      eyebrow: 'Bienvenue au Craves',
      title: { text: 'Un boutique hôtel près de la Grand-Place, à la décoration', em: 'unique', after: '.' },
      facts: [
        { big: '75', text: 'chambres climatisées' },
        { big: '4 min', text: 'à pied de la Grand-Place' },
        { big: '24h/24', text: 'réception, en FR · EN · NL' },
        { big: '-10 %', text: 'en direct avec THANKYOU' },
      ],
      perks: ['-15 % sur le repas au Conteur', 'Premier cocktail 1 acheté = 1 offert à Scène'],
    },
    rooms: {
      eyebrow: 'Crave to sleep',
      title: { text: 'Nos chambres', em: 'et suites' },
      text: '75 chambres climatisées, de la chambre simple à la chambre famille de 50 m², au cœur de Bruxelles.',
    },
    venues: {
      eyebrow: 'Crave to eat · Crave to drink',
      title: { text: 'Le Conteur', em: '&', after: ' Scène' },
      conteur: {
        eyebrow: 'Restaurant · rez-de-chaussée',
        text: 'Tapas méditerranéennes à partager. Ambiance festive, musique et énergie chaque soir dès 20h.',
        perk: 'Client du Craves : -15 % sur votre repas',
        cta: 'Découvrir Le Conteur',
      },
      scene: {
        eyebrow: 'Bar clandestin · niveau Atrium',
        text: 'Lumière tamisée, sièges luxueux, cocktails artisanaux et mixologie experte.',
        perk: 'Client du Craves : premier cocktail 1 acheté = 1 offert',
        cta: 'Découvrir Scène',
      },
    },
    reviews: {
      eyebrow: 'Avis clients',
      quotes: [
        { q: 'Wow! Everything about this place is spectacular.', who: 'Tauri B.' },
        { q: 'This hotel really has a very special atmosphere.', who: 'Dorothée H.' },
        { q: 'We are light years away from these impersonal hotels that all look alike.', who: 'Dimitri B.' },
      ],
    },
    location: {
      eyebrow: 'Crave to visit',
      title: { text: 'À deux pas de', em: 'la Grand-Place' },
      places: [
        { name: 'Église Saint-Nicolas', time: '2 min à pied' },
        { name: 'Grand-Place', time: '4 min à pied' },
        { name: 'Galeries Royales Saint-Hubert', time: '5 min à pied' },
        { name: 'Manneken-Pis', time: '7 min à pied' },
        { name: 'Gare Centrale', time: '9 min à pied' },
      ],
      cta: 'Que faire autour de la Grand-Place',
      photoAlt: 'L’Hôtel de Ville sur la Grand-Place de Bruxelles, à 4 minutes à pied du Craves',
    },
    faq: {
      title: { text: 'Questions', em: 'fréquentes' },
      ids: ['direct', 'aircon', 'parking', 'checkIn', 'midi'],
    },
  },
};
