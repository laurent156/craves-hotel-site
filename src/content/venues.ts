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
    en: {
      metaTitle: 'Le Conteur, Mediterranean tapas near Grand-Place | Craves',
      metaDescription:
        'Le Conteur at Craves Hotel: Mediterranean tapas to share and a festive vibe every evening, steps from the Grand-Place. Hotel guests: -15% on the meal.',
      hero: {
        photo: 'le-conteur-bar-restaurant-craves',
        position: '50% 60%',
        title: 'Le Conteur',
        subtitle: 'the Mediterranean restaurant at Craves Hotel',
        lead: 'Mediterranean tapas to share · hotel ground floor',
        perk: '-15% on your meal at Le Conteur',
        bookCta: 'Book a table',
        menuCta: 'See the menu',
      },
      intro: {
        eyebrow: 'Every dinner is a celebration',
        lead: 'Generous Mediterranean cooking, tapas and sharing plates, in a warm and festive atmosphere, a stone’s throw from the Grand-Place.',
        text: 'Eat with your fingers, dip your bread in the sauces, share everything and let the music do the rest. A festive atmosphere every evening from 20:00.',
        facts: [
          { label: 'Opening hours', lines: ['Mon–Thu 18:00–00:00', 'Fri–Sat 18:00–01:00', 'Closed on Sunday'] },
          { label: 'Reservations', lines: ['+32 2 347 02 91', 'le-conteur.com'] },
          { label: 'Google reviews', big: '4.4 ★', lines: ['1.5k reviews'] },
          { label: 'On the menu', lines: ['Vegetarian, vegan and gluten-free options'] },
        ],
      },
      mosaic: {
        eyebrow: 'To share',
        title: { text: 'Tapas, mezze', em: 'and grills' },
        photos: ['le-conteur-pain-tresse-mezze', 'le-conteur-cocktail-barman', 'le-conteur-poisson-grille', 'le-conteur-applique-laiton'],
      },
      cards: [
        {
          photo: 'le-conteur-diner-festif',
          title: 'The menu',
          text: 'Tapas, mezze and sharing plates, with vegetarian, vegan and gluten-free options.',
          cta: 'See the menu',
          link: 'menu',
        },
        {
          photo: 'le-conteur-cocktail-ambre',
          title: 'Birthdays & private parties',
          text: 'Sharing menus from €45 per person, for up to 20 guests at the weekend.',
          cta: 'Groups and private hire',
          link: 'events',
        },
      ],
      cross: {
        eyebrow: 'Dine and stay at Craves',
        text: 'Le Conteur is on the hotel’s ground floor.',
        em: 'Your room is just a few steps away.',
      },
      faq: {
        title: { text: 'Questions', em: 'about Le Conteur' },
        items: [
          { q: 'Are there vegetarian options?', a: 'Yes: vegetarian, vegan and gluten-free options.' },
          { q: 'Do I need to stay at the hotel to dine at Le Conteur?', a: 'No, the restaurant is open to everyone. Booking is recommended at le-conteur.com or on +32 2 347 02 91.' },
          { q: 'Do hotel guests get a perk?', a: 'Yes, as a Craves guest you get -15% on your meal at Le Conteur.' },
        ],
      },
    },
    nl: {
      metaTitle: 'Le Conteur, mediterrane tapas bij de Grote Markt | Craves',
      metaDescription:
        'Le Conteur in Craves Hotel: mediterrane tapas om te delen, elke avond feestelijke sfeer, vlak bij de Grote Markt. Hotelgasten: -15% op de maaltijd.',
      hero: {
        photo: 'le-conteur-bar-restaurant-craves',
        position: '50% 60%',
        title: 'Le Conteur',
        subtitle: 'het mediterrane restaurant van Craves Hotel',
        lead: 'Mediterrane tapas om te delen · gelijkvloers van het hotel',
        perk: '-15% op uw maaltijd in Le Conteur',
        bookCta: 'Reserveer een tafel',
        menuCta: 'Bekijk de menukaart',
      },
      intro: {
        eyebrow: 'Elk diner is een feest',
        lead: 'Een royale mediterrane keuken, tapas en gerechten om te delen, in een warme en feestelijke sfeer, op een steenworp van de Grote Markt.',
        text: 'Eet met uw vingers, dip uw brood in de sauzen, deel alles en laat de muziek de rest doen. Elke avond vanaf 20.00 uur een feestelijke sfeer.',
        facts: [
          { label: 'Openingsuren', lines: ['Ma–do 18.00–00.00 uur', 'Vr–za 18.00–01.00 uur', 'Zondag gesloten'] },
          { label: 'Reservatie', lines: ['+32 2 347 02 91', 'le-conteur.com'] },
          { label: 'Google-reviews', big: '4,4 ★', lines: ['1,5k reviews'] },
          { label: 'Op de kaart', lines: ['Vegetarische, veganistische en glutenvrije opties'] },
        ],
      },
      mosaic: {
        eyebrow: 'Om te delen',
        title: { text: 'Tapas, mezze', em: 'en grillgerechten' },
        photos: ['le-conteur-pain-tresse-mezze', 'le-conteur-cocktail-barman', 'le-conteur-poisson-grille', 'le-conteur-applique-laiton'],
      },
      cards: [
        {
          photo: 'le-conteur-diner-festif',
          title: 'De menukaart',
          text: 'Tapas, mezze en gerechten om te delen, met vegetarische, veganistische en glutenvrije opties.',
          cta: 'Bekijk de menukaart',
          link: 'menu',
        },
        {
          photo: 'le-conteur-cocktail-ambre',
          title: 'Verjaardagen & privéfeesten',
          text: 'Deelmenu’s vanaf € 45 per persoon, tot 20 gasten in het weekend.',
          cta: 'Groepen en privé-evenementen',
          link: 'events',
        },
      ],
      cross: {
        eyebrow: 'Dineren en slapen bij Craves',
        text: 'Le Conteur bevindt zich op het gelijkvloers van het hotel.',
        em: 'Uw kamer is maar een paar treden verder.',
      },
      faq: {
        title: { text: 'Vragen', em: 'over Le Conteur' },
        items: [
          { q: 'Zijn er vegetarische opties?', a: 'Ja: vegetarische, veganistische en glutenvrije opties.' },
          { q: 'Moet ik in het hotel verblijven om in Le Conteur te dineren?', a: 'Nee, het restaurant is voor iedereen open. Reserveren is aangeraden via le-conteur.com of op +32 2 347 02 91.' },
          { q: 'Hebben hotelgasten een voordeel?', a: 'Ja, als gast van Craves krijgt u -15% op uw maaltijd in Le Conteur.' },
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
    en: {
      metaTitle: 'Scène, speakeasy cocktail bar in central Brussels | Craves',
      metaDescription:
        'Scène, speakeasy cocktail bar on the Atrium level of Craves Hotel: craft cocktails, expert mixology, 4 min from the Grand-Place. Guests: 1st cocktail 1+1.',
      hero: {
        photo: 'scene-bar-lustres-soiree',
        position: '50% 40%',
        title: 'Scène',
        subtitle: 'speakeasy cocktail bar in the heart of Brussels',
        lead: 'Cocktails and mixology · Craves Atrium level',
        perk: 'Your first cocktail at Scène: buy one, get one free',
        bookCta: 'Book a table',
        menuCta: 'See the menus',
      },
      intro: {
        eyebrow: 'The city’s best-kept secret',
        lead: 'A world full of mystery, where soft light wraps around luxurious seating and secrets are traded in hushed whispers.',
        text: 'Craft cocktails, expert mixology and a refined atmosphere: for a romantic escape or an exclusive evening.',
        facts: [
          { label: 'Opening hours', lines: ['Wednesday 19:00–00:00', 'Thu–Sat 19:00–02:30', 'Closed Sun–Tue'] },
          { label: 'Where?', lines: ['Craves Atrium level', 'Rue du Marché aux Poulets 32'] },
          { label: 'Google reviews', big: '4.4 ★', lines: ['435 reviews'] },
          { label: 'Menus', lines: ['Drink & Cocktail · Late Night · seasonal menu'] },
        ],
      },
      mosaic: {
        eyebrow: 'Drink & dine',
        title: { text: 'Cocktails,', em: 'sharing plates and music' },
        photos: ['scene-bar-enseigne-leopard', 'scene-bar-cocktail-flambe', 'scene-bar-dj-soiree', 'scene-bar-neon'],
      },
      cards: [
        {
          photo: 'scene-bar-craves-bruxelles',
          title: 'The menus',
          text: 'Drink & Cocktail Menu, Late Night Menu and a seasonal menu, to discover at the bar or online.',
          cta: 'See the menus',
          link: 'menu',
        },
        {
          photo: 'scene-bar-lustres-soiree',
          title: 'Private hire',
          text: 'For a private event: fusion sharing plates and expert cocktails, in a central, easy-to-reach venue.',
          cta: 'Book a private event',
          link: 'events',
        },
      ],
      cross: {
        eyebrow: 'Make the night last',
        text: 'Scène is on the Craves Atrium level.',
        em: 'Your room is only a few steps away.',
      },
      faq: {
        title: { text: 'Questions', em: 'about Scène' },
        items: [
          { q: 'Do I need to book?', a: 'It is not compulsory, but it is always recommended.' },
          { q: 'Can Scène be booked for a private event?', a: 'Yes, for groups and private events: see “Private hire” above.' },
          { q: 'Where is Scène?', a: 'On the Atrium level of Craves Hotel, Rue du Marché aux Poulets 32, a 4-minute walk from the Grand-Place.' },
        ],
      },
    },
    nl: {
      metaTitle: 'Scène, speakeasy cocktailbar in hartje Brussel | Craves',
      metaDescription:
        'Scène, speakeasy cocktailbar op de Atrium-verdieping van Craves Hotel: ambachtelijke cocktails, 4 min van de Grote Markt. Hotelgasten: 1e cocktail 1+1.',
      hero: {
        photo: 'scene-bar-lustres-soiree',
        position: '50% 40%',
        title: 'Scène',
        subtitle: 'speakeasy cocktailbar in het hart van Brussel',
        lead: 'Cocktails en mixologie · Atrium-verdieping van Craves',
        perk: 'Uw eerste cocktail in Scène: 1 gekocht, 1 gratis',
        bookCta: 'Reserveer een tafel',
        menuCta: 'Bekijk de kaarten',
      },
      intro: {
        eyebrow: 'Het best bewaarde geheim van de stad',
        lead: 'Een wereld vol mysterie, waar gedempt licht de luxueuze zetels omhult en geheimen fluisterend worden gedeeld.',
        text: 'Ambachtelijke cocktails, deskundige mixologie en een verfijnde sfeer: voor een romantisch uitje of een exclusieve avond.',
        facts: [
          { label: 'Openingsuren', lines: ['Woensdag 19.00–00.00 uur', 'Do–za 19.00–02.30 uur', 'Zo–di gesloten'] },
          { label: 'Waar?', lines: ['Atrium-verdieping van Craves', 'Rue du Marché aux Poulets 32'] },
          { label: 'Google-reviews', big: '4,4 ★', lines: ['435 reviews'] },
          { label: 'Kaarten', lines: ['Drink & Cocktail · Late Night · seizoenskaart'] },
        ],
      },
      mosaic: {
        eyebrow: 'Drink & dine',
        title: { text: 'Cocktails,', em: 'gerechten om te delen en muziek' },
        photos: ['scene-bar-enseigne-leopard', 'scene-bar-cocktail-flambe', 'scene-bar-dj-soiree', 'scene-bar-neon'],
      },
      cards: [
        {
          photo: 'scene-bar-craves-bruxelles',
          title: 'De kaarten',
          text: 'Drink & Cocktail Menu, Late Night Menu en een seizoenskaart, te ontdekken ter plaatse of online.',
          cta: 'Bekijk de kaarten',
          link: 'menu',
        },
        {
          photo: 'scene-bar-lustres-soiree',
          title: 'Scène afhuren',
          text: 'Voor een privé-evenement: fusiongerechten om te delen en deskundige cocktails, op een centrale, vlot bereikbare locatie.',
          cta: 'Afhuren',
          link: 'events',
        },
      ],
      cross: {
        eyebrow: 'De avond verlengen',
        text: 'Scène bevindt zich op de Atrium-verdieping van Craves.',
        em: 'Uw kamer is maar een paar stappen verder.',
      },
      faq: {
        title: { text: 'Vragen', em: 'over Scène' },
        items: [
          { q: 'Moet ik reserveren?', a: 'Het is niet verplicht, maar wel altijd aangeraden.' },
          { q: 'Kan Scène worden afgehuurd voor een privé-evenement?', a: 'Ja, voor groepen en privé-evenementen: zie “Scène afhuren” hierboven.' },
          { q: 'Waar bevindt Scène zich?', a: 'Op de Atrium-verdieping van Craves Hotel, Rue du Marché aux Poulets 32, op 4 minuten wandelen van de Grote Markt.' },
        ],
      },
    },
  },
};
