import type { FaqItem, Localized, TitleParts } from './localize';

export type VenueKey = 'conteur' | 'scene';

interface VenueCard {
  photo: string;
  title: string;
  text: string;
  cta: string;
  /** Which partner page the button opens. */
  link: 'menu' | 'events' | 'reservation';
}

export interface VenueContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    photo: string;
    position: string;
    title: string;
    subtitle: string;
    lead: string;
    perk: string;
    bookCta: string;
    menuCta: string;
  };
  intro: { eyebrow: string; lead: string; text: string; facts: { label: string; big?: string; lines: string[] }[] };
  mosaic: { eyebrow: string; title: TitleParts; photos: [string, string, string, string] };
  cards: [VenueCard, VenueCard];
  cross: { eyebrow: string; text: string; em: string };
  faq: { title: TitleParts; items: FaqItem[] };
}

export const VENUES: Record<VenueKey, Localized<VenueContent>> = {
  conteur: {
    fr: {
      metaTitle: 'Le Conteur, restaurant méditerranéen près de la Grand-Place | Craves Hotel',
      metaDescription:
        'Le Conteur, restaurant du Craves Hotel : tapas méditerranéennes à partager, ambiance festive chaque soir, à deux pas de la Grand-Place. Clients de l’hôtel : -15 % sur le repas.',
      hero: {
        photo: 'le-conteur-bar-restaurant-craves',
        position: '50% 60%',
        title: 'Le Conteur',
        subtitle: 'restaurant méditerranéen du Craves Hotel',
        lead: 'Tapas méditerranéennes à partager · rez-de-chaussée de l’hôtel',
        perk: '-15 % sur votre repas au Conteur',
        bookCta: 'Réserver une table',
        menuCta: 'Voir le menu',
      },
      intro: {
        eyebrow: 'Chaque dîner est une célébration',
        lead: 'Une cuisine méditerranéenne généreuse, des tapas et des plats à partager, dans une ambiance festive et chaleureuse, à deux pas de la Grand-Place.',
        text: 'Mangez avec les doigts, trempez le pain dans les sauces, partagez tout, et laissez la musique faire le reste. Ambiance festive chaque soir à partir de 20h.',
        facts: [
          { label: 'Horaires', lines: ['Lun–jeu 18h00–00h00', 'Ven–sam 18h00–01h00', 'Dimanche fermé'] },
          { label: 'Réservation', lines: ['+32 2 347 02 91', 'le-conteur.com'] },
          { label: 'Avis Google', big: '4,4 ★', lines: ['1,5k avis'] },
          { label: 'Au menu', lines: ['Options végétariennes, végétaliennes et sans gluten'] },
        ],
      },
      mosaic: {
        eyebrow: 'À partager',
        title: { text: 'Tapas, mezze', em: 'et grillades' },
        photos: ['le-conteur-pain-tresse-mezze', 'le-conteur-cocktail-barman', 'le-conteur-poisson-grille', 'le-conteur-applique-laiton'],
      },
      cards: [
        {
          photo: 'le-conteur-diner-festif',
          title: 'Le menu',
          text: 'Tapas, mezze et plats à partager, avec des options végétariennes, végétaliennes et sans gluten.',
          cta: 'Voir le menu',
          link: 'menu',
        },
        {
          photo: 'le-conteur-cocktail-ambre',
          title: 'Anniversaires & soirées privées',
          text: 'Menus à partager dès 45 € par personne, jusqu’à 20 invités le week-end.',
          cta: 'Groupes et privatisation',
          link: 'events',
        },
      ],
      cross: {
        eyebrow: 'Dîner et dormir au Craves',
        text: 'Le Conteur est au rez-de-chaussée de l’hôtel.',
        em: 'Votre chambre est à quelques marches.',
      },
      faq: {
        title: { text: 'Questions', em: 'sur Le Conteur' },
        items: [
          { q: 'Y a-t-il des options végétariennes ?', a: 'Oui : options végétariennes, végétaliennes et sans gluten.' },
          { q: 'Faut-il loger à l’hôtel pour dîner au Conteur ?', a: 'Non, le restaurant est ouvert à tous. Réservation conseillée sur le-conteur.com ou au +32 2 347 02 91.' },
          { q: 'Les clients de l’hôtel ont-ils un avantage ?', a: 'Oui, en étant client du Craves : -15 % sur votre repas au Conteur.' },
        ],
      },
    },
  },
  scene: {
    fr: {
      metaTitle: 'Scène, bar à cocktails clandestin au cœur de Bruxelles | Craves Hotel',
      metaDescription:
        'Scène, bar à cocktails clandestin au niveau Atrium du Craves Hotel : cocktails artisanaux, mixologie experte, à 4 minutes de la Grand-Place. Clients de l’hôtel : 1er cocktail 1+1.',
      hero: {
        photo: 'scene-bar-lustres-soiree',
        position: '50% 40%',
        title: 'Scène',
        subtitle: 'bar à cocktails clandestin au cœur de Bruxelles',
        lead: 'Cocktails et mixologie · niveau Atrium du Craves',
        perk: 'Votre premier cocktail à Scène : 1 acheté, 1 offert',
        bookCta: 'Réserver une table',
        menuCta: 'Voir les menus',
      },
      intro: {
        eyebrow: 'Le secret le mieux gardé de la ville',
        lead: 'Un univers plein de mystère, où la lumière tamisée enveloppe les sièges luxueux et où les secrets s’échangent dans un murmure feutré.',
        text: 'Cocktails artisanaux, mixologie experte et atmosphère raffinée : pour une escapade romantique ou une soirée exclusive.',
        facts: [
          { label: 'Horaires', lines: ['Mercredi 19h00–00h00', 'Jeu–sam 19h00–02h30', 'Dim–mar fermé'] },
          { label: 'Où ?', lines: ['Niveau Atrium du Craves', 'Rue du Marché aux Poulets 32'] },
          { label: 'Avis Google', big: '4,4 ★', lines: ['435 avis'] },
          { label: 'Menus', lines: ['Drink & Cocktail · Late Night · menu saisonnier'] },
        ],
      },
      mosaic: {
        eyebrow: 'Drink & dine',
        title: { text: 'Cocktails,', em: 'assiettes à partager et musique' },
        photos: ['scene-bar-enseigne-leopard', 'scene-bar-cocktail-flambe', 'scene-bar-dj-soiree', 'scene-bar-neon'],
      },
      cards: [
        {
          photo: 'scene-bar-craves-bruxelles',
          title: 'Les menus',
          text: 'Drink & Cocktail Menu, Menu Late Night et un menu saisonnier, à découvrir sur place ou en ligne.',
          cta: 'Voir les menus',
          link: 'menu',
        },
        {
          photo: 'scene-bar-lustres-soiree',
          title: 'Privatiser Scène',
          text: 'Pour un événement privé : plats fusion à partager et cocktails experts, dans un lieu central et facile d’accès.',
          cta: 'Privatiser',
          link: 'events',
        },
      ],
      cross: {
        eyebrow: 'Prolonger la soirée',
        text: 'Scène est au niveau Atrium du Craves.',
        em: 'Votre chambre n’est qu’à quelques pas.',
      },
      faq: {
        title: { text: 'Questions', em: 'sur Scène' },
        items: [
          { q: 'Faut-il réserver ?', a: 'Ce n’est pas obligatoire, mais c’est toujours conseillé.' },
          { q: 'Peut-on privatiser Scène ?', a: 'Oui, pour les groupes et événements privés : voir « Privatiser ».' },
          { q: 'Où se trouve Scène ?', a: 'Au niveau Atrium du Craves Hotel, rue du Marché aux Poulets 32, à 4 minutes à pied de la Grand-Place.' },
        ],
      },
    },
  },
};
