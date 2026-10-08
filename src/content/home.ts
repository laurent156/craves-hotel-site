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
        { big: '24h/24', text: 'réception' },
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
  en: {
    metaTitle: 'Craves Hotel Brussels | 3★ boutique hotel near Grand-Place',
    metaDescription:
      '3★ boutique hotel in the heart of Brussels, 4 minutes’ walk from the Grand-Place. 75 unique rooms, Le Conteur restaurant, Scène bar. -10% booking direct.',
    hero: {
      eyebrow: '3★ boutique hotel · Brussels',
      tagline: 'A unique experience in the heart of Brussels',
      photoAlt: 'Room at Craves Hotel in Brussels: blue velvet headboard, round cushion and oval mirror',
    },
    intro: {
      eyebrow: 'Welcome to Craves',
      title: { text: 'A boutique hotel near the Grand-Place, with a', em: 'unique', after: ' style.' },
      facts: [
        { big: '75', text: 'air-conditioned rooms' },
        { big: '4 min', text: 'walk to the Grand-Place' },
        { big: '24/7', text: 'reception' },
        { big: '-10%', text: 'booking direct with THANKYOU' },
      ],
      perks: ['-15% on your meal at Le Conteur', 'First cocktail buy one, get one free at Scène'],
    },
    rooms: {
      eyebrow: 'Crave to sleep',
      title: { text: 'Our rooms', em: 'and suites' },
      text: '75 air-conditioned rooms, from the single room to the 50 m² family room, in the heart of Brussels.',
    },
    venues: {
      eyebrow: 'Crave to eat · Crave to drink',
      title: { text: 'Le Conteur', em: '&', after: ' Scène' },
      conteur: {
        eyebrow: 'Restaurant · ground floor',
        text: 'Mediterranean tapas to share. A festive atmosphere, music and energy every evening from 20:00.',
        perk: 'Craves guest: -15% on your meal',
        cta: 'Discover Le Conteur',
      },
      scene: {
        eyebrow: 'Speakeasy bar · Atrium level',
        text: 'Soft lighting, luxurious seating, craft cocktails and expert mixology.',
        perk: 'Craves guest: first cocktail buy one, get one free',
        cta: 'Discover Scène',
      },
    },
    reviews: {
      eyebrow: 'Guest reviews',
      quotes: [
        { q: 'Wow! Everything about this place is spectacular.', who: 'Tauri B.' },
        { q: 'This hotel really has a very special atmosphere.', who: 'Dorothée H.' },
        { q: 'We are light years away from these impersonal hotels that all look alike.', who: 'Dimitri B.' },
      ],
    },
    location: {
      eyebrow: 'Crave to visit',
      title: { text: 'A stone’s throw from', em: 'the Grand-Place' },
      places: [
        { name: 'St Nicholas’ Church', time: '2 min walk' },
        { name: 'Grand-Place', time: '4 min walk' },
        { name: 'Royal Galleries of Saint-Hubert', time: '5 min walk' },
        { name: 'Manneken Pis', time: '7 min walk' },
        { name: 'Brussels Central Station', time: '9 min walk' },
      ],
      cta: 'Things to do around the Grand-Place',
      photoAlt: 'The Town Hall on the Grand-Place in Brussels, a 4-minute walk from Craves',
    },
    faq: {
      title: { text: 'Frequently asked', em: 'questions' },
      ids: ['direct', 'aircon', 'parking', 'checkIn', 'midi'],
    },
  },
  nl: {
    metaTitle: 'Craves Hotel Brussel | 3★ boetiekhotel bij de Grote Markt',
    metaDescription:
      '3★ boetiekhotel in hartje Brussel, 4 min wandelen van de Grote Markt. 75 unieke kamers, restaurant Le Conteur en bar Scène. -10% bij directe boeking.',
    hero: {
      eyebrow: '3★ boetiekhotel · Brussel',
      tagline: 'Een unieke ervaring in het hart van Brussel',
      photoAlt: 'Kamer in Craves Hotel in Brussel: hoofdbord in blauw fluweel, rond kussen en ovale spiegel',
    },
    intro: {
      eyebrow: 'Welkom bij Craves',
      title: { text: 'Een boetiekhotel bij de Grote Markt, met een', em: 'unieke', after: ' inrichting.' },
      facts: [
        { big: '75', text: 'kamers met airco' },
        { big: '4 min', text: 'wandelen naar de Grote Markt' },
        { big: '24/7', text: 'receptie' },
        { big: '-10%', text: 'bij directe boeking met THANKYOU' },
      ],
      perks: ['-15% op uw maaltijd in Le Conteur', 'Eerste cocktail: 1 gekocht = 1 gratis in Scène'],
    },
    rooms: {
      eyebrow: 'Crave to sleep',
      title: { text: 'Onze kamers', em: 'en suites' },
      text: '75 kamers met airco, van de eenpersoonskamer tot de familiekamer van 50 m², in het hart van Brussel.',
    },
    venues: {
      eyebrow: 'Crave to eat · Crave to drink',
      title: { text: 'Le Conteur', em: '&', after: ' Scène' },
      conteur: {
        eyebrow: 'Restaurant · gelijkvloers',
        text: 'Mediterrane tapas om te delen. Elke avond vanaf 20.00 uur een feestelijke sfeer, muziek en energie.',
        perk: 'Als gast van Craves: -15% op uw maaltijd',
        cta: 'Ontdek Le Conteur',
      },
      scene: {
        eyebrow: 'Speakeasy bar · Atrium-verdieping',
        text: 'Gedempt licht, luxueuze zetels, ambachtelijke cocktails en deskundige mixologie.',
        perk: 'Als gast van Craves: eerste cocktail 1 gekocht = 1 gratis',
        cta: 'Ontdek Scène',
      },
    },
    reviews: {
      eyebrow: 'Gastenreviews',
      quotes: [
        { q: 'Wow! Everything about this place is spectacular.', who: 'Tauri B.' },
        { q: 'This hotel really has a very special atmosphere.', who: 'Dorothée H.' },
        { q: 'We are light years away from these impersonal hotels that all look alike.', who: 'Dimitri B.' },
      ],
    },
    location: {
      eyebrow: 'Crave to visit',
      title: { text: 'Op een steenworp van', em: 'de Grote Markt' },
      places: [
        { name: 'Sint-Niklaaskerk', time: '2 min wandelen' },
        { name: 'Grote Markt', time: '4 min wandelen' },
        { name: 'Koninklijke Sint-Hubertusgalerijen', time: '5 min wandelen' },
        { name: 'Manneken Pis', time: '7 min wandelen' },
        { name: 'Centraal Station', time: '9 min wandelen' },
      ],
      cta: 'Wat te doen rond de Grote Markt',
      photoAlt: 'Het stadhuis op de Grote Markt van Brussel, op 4 minuten wandelen van Craves',
    },
    faq: {
      title: { text: 'Veelgestelde', em: 'vragen' },
      ids: ['direct', 'aircon', 'parking', 'checkIn', 'midi'],
    },
  },
};
