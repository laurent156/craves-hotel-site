import type { GuideArticle } from '../guide';
import type { Localized } from '../localize';

// Plaisirs d'Hiver (Winter Wonders), 25th edition: 27 Nov 2026 – 3 Jan 2027, daily 12:00–22:00,
// closing 18:00 on 24 and 31 December; guests of honour Béarn Pyrénées and Pays basque (village on
// Place de la Bourse). Sources: bruxelles.be, plaisirsdhiver.be (checked October 2026).
// The 2026 ice rink location is not confirmed yet: do not place it.

const FR: GuideArticle = {
  route: 'guideWinter',
  category: 'Événements',
  metaTitle: 'Plaisirs d’Hiver 2026 : le marché de Noël de Bruxelles',
  metaDescription:
    'Marché de Noël de Bruxelles du 27 novembre 2026 au 3 janvier 2027 : Grand-Place, Bourse, Sainte-Catherine, grande roue. Dates, horaires et lieux, à pied du Craves.',
  shortTitle: 'Plaisirs d’Hiver, le marché de Noël à deux pas',
  title: { text: 'Plaisirs d’Hiver 2026 :', em: 'le marché de Noël de Bruxelles, à deux pas' },
  teaser:
    'Du 27 novembre 2026 au 3 janvier 2027, plus de 200 chalets de la Grand-Place au Marché aux Poissons. Dates, horaires et notre balade, à pied depuis l’hôtel.',
  heroPhoto: 'grand-place-bruxelles-hotel-de-ville',
  heroAlt: 'L’Hôtel de Ville sur la Grand-Place, cœur des Plaisirs d’Hiver à Bruxelles',
  byline: 'Par l’équipe du Craves Hotel · mis à jour le 8 octobre 2026 · 6 min de lecture',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'En bref',
  brief: [
    'Les **Plaisirs d’Hiver** fêtent leur **25e édition** du **27 novembre 2026 au 3 janvier 2027**, tous les jours de **12h à 22h** (fermeture à 18h les 24 et 31 décembre).',
    'Plus de **200 chalets** s’étendent de la **Grand-Place** à la **Bourse**, la **place Sainte-Catherine** et le **Marché aux Poissons** : tout se fait à pied depuis le Craves.',
    'L’entrée est **gratuite** ; la grande roue, la patinoire et les attractions sont payantes.',
    'Invités d’honneur 2026 : le **Béarn Pyrénées et le Pays basque**, avec un village basco-béarnais **place de la Bourse**, à 150 m de l’hôtel.',
  ],
  intro:
    'Chaque hiver, le centre de Bruxelles se transforme en grand marché de Noël à ciel ouvert. Le Craves est au milieu du parcours : la Bourse est à 2 minutes à pied, la Grand-Place à 4. Voici les lieux à ne pas manquer, les infos pratiques et notre balade de chalet en chalet.',
  overviewTitle: { text: 'Les lieux du marché', em: 'en un coup d’œil' },
  overviewHeaders: ['#', 'Lieu', 'À pied du Craves', 'À voir'],
  sinceHotel: 'depuis l’hôtel',
  tipLabel: 'Notre conseil',
  places: [
    {
      name: 'La Grand-Place',
      distance: '280 m · 4 min',
      entry: 'Sapin et son et lumière',
      photo: 'grand-place-bruxelles-crepuscule',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Le cœur des festivités : le **grand sapin de Noël** se dresse devant l’Hôtel de Ville et, à la tombée de la nuit, un **spectacle son et lumière** fait vibrer les façades de la place, classée au patrimoine mondial de l’UNESCO.',
      ],
      tip: 'Venez juste après la tombée de la nuit, vers 17h : les illuminations sont au plus beau et la foule moins dense qu’en fin de soirée.',
    },
    {
      name: 'La place de la Bourse',
      distance: '150 m · 2 min',
      entry: 'Village basco-béarnais',
      schemaType: 'Place',
      paragraphs: [
        'Pour cette 25e édition, la Ville de Bruxelles accueille le **Béarn Pyrénées et le Pays basque**. Leur village s’installe **place de la Bourse**, à 2 minutes de l’hôtel : de quoi découvrir les spécialités du sud-ouest de la France entre deux chalets.',
      ],
    },
    {
      name: 'La place de la Monnaie',
      distance: '310 m · 4 min',
      entry: 'Chalets',
      schemaType: 'Place',
      paragraphs: [
        'Devant le théâtre de la Monnaie, une autre étape du marché, sur le chemin entre la Grand-Place et les commerces de la rue Neuve.',
      ],
    },
    {
      name: 'La place Sainte-Catherine',
      distance: '410 m · 6 min',
      entry: 'Chalets et vin chaud',
      schemaType: 'Place',
      paragraphs: [
        'L’ambiance la plus conviviale du marché : chalets gourmands, vin chaud et spécialités à partager autour de l’église Sainte-Catherine.',
      ],
    },
    {
      name: 'Le Marché aux Poissons',
      distance: '590 m · 7 min',
      entry: 'Grande roue',
      schemaType: 'Place',
      paragraphs: [
        'Dans le prolongement de Sainte-Catherine, le Marché aux Poissons accueille la **grande roue**, avec une belle vue sur les toits du centre illuminé.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Notre balade', em: 'de chalet en chalet' },
    steps: [
      'Commencez par la **Grand-Place** à la tombée de la nuit, pour le sapin et le son et lumière.',
      'Rejoignez la **place de la Bourse** et le village basco-béarnais, à 2 minutes de l’hôtel.',
      'Continuez vers la **place Sainte-Catherine** pour un vin chaud.',
      'Montez dans la **grande roue** du Marché aux Poissons.',
      'Revenez par la **place de la Monnaie** : le Craves est à 4 minutes.',
    ],
    evening:
      'Pour finir la soirée, **Le Conteur** et **Scène** sont dans l’hôtel. En étant client du Craves : **-15 %** sur votre repas au Conteur et votre premier cocktail **1 acheté = 1 offert** à Scène.',
  },
  when: {
    title: { text: 'Infos pratiques', em: '2026-2027' },
    items: [
      '**Dates** : du **vendredi 27 novembre 2026 au dimanche 3 janvier 2027**.',
      '**Horaires** : tous les jours de **12h à 22h** ; fermeture à **18h les 24 et 31 décembre**.',
      '**Entrée gratuite** ; grande roue, patinoire et attractions payantes. Le programme détaillé est publié en novembre sur **plaisirsdhiver.be**.',
      '**Moins de monde** en semaine et en début d’après-midi ; les vendredis et samedis soir sont les plus animés.',
      '**Réservez tôt** : les week-ends de décembre sont très demandés dans le centre. En direct sur notre site : **-10 %** avec le code THANKYOU.',
    ],
  },
  faqTitle: { text: 'Questions', em: 'fréquentes' },
  faq: [
    {
      q: 'Quand a lieu le marché de Noël de Bruxelles en 2026 ?',
      a: 'Les Plaisirs d’Hiver se tiennent du vendredi 27 novembre 2026 au dimanche 3 janvier 2027, tous les jours de 12h à 22h (fermeture à 18h les 24 et 31 décembre).',
    },
    {
      q: 'Le marché de Noël de Bruxelles est-il gratuit ?',
      a: 'Oui, l’accès au marché est gratuit. La grande roue, la patinoire et les attractions sont payantes.',
    },
    {
      q: 'Où se trouvent les chalets du marché de Noël ?',
      a: 'Sur la Grand-Place, la place de la Bourse, la place de la Monnaie, la place Sainte-Catherine et le Marché aux Poissons, tous à moins de 10 minutes à pied les uns des autres.',
    },
    {
      q: 'Où se trouve la grande roue ?',
      a: 'Au Marché aux Poissons, près de la place Sainte-Catherine, à environ 7 minutes à pied du Craves Hotel.',
    },
    {
      q: 'Quel hôtel choisir pour le marché de Noël de Bruxelles ?',
      a: 'Le Craves Hotel, boutique hôtel 3★ rue du Marché aux Poulets, est au milieu du parcours : à 150 m de la place de la Bourse et à 280 m de la Grand-Place, avec 75 chambres climatisées.',
    },
  ],
  sources: 'Sources : Ville de Bruxelles (bruxelles.be), plaisirsdhiver.be. Informations vérifiées en octobre 2026 ; programme détaillé et tarifs publiés en novembre.',
  tocLabel: 'Dans cet article',
  aside: {
    title: 'Dormir au cœur du marché de Noël',
    text: 'Craves Hotel, boutique hôtel 3★, à 150 m de la Bourse et 280 m de la Grand-Place. -10 % en direct avec le code THANKYOU.',
  },
};

const EN: GuideArticle = {
  route: 'guideWinter',
  category: 'Events',
  metaTitle: 'Brussels Christmas Market 2026: Winter Wonders guide',
  metaDescription:
    'Brussels Christmas market, 27 Nov 2026 – 3 Jan 2027: Grand-Place, Bourse, Sainte-Catherine, Ferris wheel. Dates, hours and spots, on foot from Craves.',
  shortTitle: 'Winter Wonders, the Christmas market on our doorstep',
  title: { text: 'Brussels Christmas Market 2026:', em: 'Winter Wonders, right on our doorstep' },
  teaser:
    'From 27 November 2026 to 3 January 2027, more than 200 chalets stretch from the Grand-Place to the Marché aux Poissons. Dates, opening hours and our favourite walk, all on foot from the hotel.',
  heroPhoto: 'grand-place-bruxelles-hotel-de-ville',
  heroAlt: 'The Town Hall on the Grand-Place, heart of the Winter Wonders Christmas market in Brussels',
  byline: 'By the Craves Hotel team · updated 8 October 2026 · 6 min read',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'In short',
  brief: [
    '**Winter Wonders (Plaisirs d’Hiver)** celebrates its **25th edition** from **27 November 2026 to 3 January 2027**, daily from **12:00 to 22:00** (closing at 18:00 on 24 and 31 December).',
    'More than **200 chalets** spread from the **Grand-Place** to the **Bourse**, **Place Sainte-Catherine** and the **Marché aux Poissons**: everything is within walking distance of Craves.',
    'Entry is **free**; the Ferris wheel, the ice rink and the rides are paid.',
    '2026 guests of honour: **Béarn Pyrénées and the Basque Country**, with a Basque and Béarn village on **Place de la Bourse**, 150 m from the hotel.',
  ],
  intro:
    'Every winter, the centre of Brussels turns into one big open-air Christmas market. Craves sits right in the middle of it: the Bourse is a 2-minute walk away, the Grand-Place 4 minutes. Here are the spots not to miss, the practical details and our walk from chalet to chalet.',
  overviewTitle: { text: 'The market spots', em: 'at a glance' },
  overviewHeaders: ['#', 'Place', 'On foot from Craves', 'Highlights'],
  sinceHotel: 'from the hotel',
  tipLabel: 'Our tip',
  places: [
    {
      name: 'Grand-Place',
      distance: '280 m · 4 min',
      entry: 'Christmas tree and light show',
      photo: 'grand-place-bruxelles-crepuscule',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'The heart of the festivities: the **giant Christmas tree** stands in front of the Town Hall and, as night falls, a **sound and light show** brings the façades of this UNESCO World Heritage square to life.',
      ],
      tip: 'Come just after nightfall, around 17:00: the illuminations are at their best and the crowds are thinner than later in the evening.',
    },
    {
      name: 'Place de la Bourse',
      distance: '150 m · 2 min',
      entry: 'Basque and Béarn village',
      schemaType: 'Place',
      paragraphs: [
        'For this 25th edition, the City of Brussels welcomes **Béarn Pyrénées and the Basque Country**. Their village sets up on **Place de la Bourse**, 2 minutes from the hotel: the perfect chance to taste specialities from south-west France between two chalets.',
      ],
    },
    {
      name: 'Place de la Monnaie',
      distance: '310 m · 4 min',
      entry: 'Chalets',
      schemaType: 'Place',
      paragraphs: [
        'In front of the Monnaie opera house, another stop on the market trail, on the way between the Grand-Place and the shops of Rue Neuve.',
      ],
    },
    {
      name: 'Place Sainte-Catherine',
      distance: '410 m · 6 min',
      entry: 'Chalets and mulled wine',
      schemaType: 'Place',
      paragraphs: [
        'The friendliest atmosphere of the whole market: food chalets, mulled wine and specialities to share around Sainte-Catherine church.',
      ],
    },
    {
      name: 'Marché aux Poissons',
      distance: '590 m · 7 min',
      entry: 'Ferris wheel',
      schemaType: 'Place',
      paragraphs: [
        'Just beyond Sainte-Catherine, the old fish market square is home to the **Ferris wheel**, with lovely views over the illuminated rooftops of the city centre.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Our walk', em: 'from chalet to chalet' },
    steps: [
      'Start at the **Grand-Place** at nightfall for the tree and the light show.',
      'Head to **Place de la Bourse** and the Basque and Béarn village, 2 minutes from the hotel.',
      'Carry on to **Place Sainte-Catherine** for a mulled wine.',
      'Take a ride on the **Ferris wheel** at the Marché aux Poissons.',
      'Come back via **Place de la Monnaie**: Craves is 4 minutes away.',
    ],
    evening:
      'To round off the evening, **Le Conteur** and **Scène** are right inside the hotel. As a Craves guest: **-15%** on your meal at Le Conteur and your first cocktail **buy one, get one free** at Scène.',
  },
  when: {
    title: { text: 'Practical info', em: '2026-2027' },
    items: [
      '**Dates**: from **Friday 27 November 2026 to Sunday 3 January 2027**.',
      '**Opening hours**: daily from **12:00 to 22:00**; closing at **18:00 on 24 and 31 December**.',
      '**Free entry**; Ferris wheel, ice rink and rides are paid. The full programme is published in November on **plaisirsdhiver.be**.',
      '**Fewer crowds** on weekdays and in the early afternoon; Friday and Saturday evenings are the busiest.',
      '**Book early**: December weekends are in high demand in the city centre. Book direct on our website: **-10%** with the code THANKYOU.',
    ],
  },
  faqTitle: { text: 'Frequently asked', em: 'questions' },
  faq: [
    {
      q: 'When is the Brussels Christmas market in 2026?',
      a: 'Winter Wonders (Plaisirs d’Hiver) runs from Friday 27 November 2026 to Sunday 3 January 2027, daily from 12:00 to 22:00 (closing at 18:00 on 24 and 31 December).',
    },
    {
      q: 'Is the Brussels Christmas market free?',
      a: 'Yes, entry to the market is free. The Ferris wheel, the ice rink and the rides are paid.',
    },
    {
      q: 'Where are the Christmas market chalets?',
      a: 'On the Grand-Place, Place de la Bourse, Place de la Monnaie, Place Sainte-Catherine and the Marché aux Poissons, all less than 10 minutes’ walk from one another.',
    },
    {
      q: 'Where is the Ferris wheel?',
      a: 'At the Marché aux Poissons, near Place Sainte-Catherine, about a 7-minute walk from Craves Hotel.',
    },
    {
      q: 'Which hotel should I choose for the Brussels Christmas market?',
      a: 'Craves Hotel, a 3★ boutique hotel on Rue du Marché aux Poulets, sits right in the middle of the market trail: 150 m from Place de la Bourse and 280 m from the Grand-Place, with 75 air-conditioned rooms.',
    },
  ],
  sources: 'Sources: City of Brussels (bruxelles.be), plaisirsdhiver.be. Information checked in October 2026; detailed programme and prices published in November.',
  tocLabel: 'In this article',
  aside: {
    title: 'Stay in the heart of the Christmas market',
    text: 'Craves Hotel, 3★ boutique hotel, 150 m from the Bourse and 280 m from the Grand-Place. -10% when you book direct with the code THANKYOU.',
  },
};

const NL: GuideArticle = {
  route: 'guideWinter',
  category: 'Evenementen',
  metaTitle: 'Kerstmarkt Brussel 2026: uw gids voor Winterpret',
  metaDescription:
    'Kerstmarkt Brussel van 27 november 2026 tot 3 januari 2027: Grote Markt, Beurs, Sint-Katelijne, reuzenrad. Data, uren en locaties, te voet vanaf Craves.',
  shortTitle: 'Winterpret, de kerstmarkt om de hoek',
  title: { text: 'Kerstmarkt Brussel 2026:', em: 'Winterpret, vlak bij het hotel' },
  teaser:
    'Van 27 november 2026 tot 3 januari 2027 staan er meer dan 200 kraampjes van de Grote Markt tot de Vismarkt. Data, openingsuren en onze wandeling, te voet vanaf het hotel.',
  heroPhoto: 'grand-place-bruxelles-hotel-de-ville',
  heroAlt: 'Het stadhuis op de Grote Markt, het hart van de kerstmarkt Winterpret in Brussel',
  byline: 'Door het team van Craves Hotel · bijgewerkt op 8 oktober 2026 · 6 min leestijd',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'In het kort',
  brief: [
    '**Winterpret (Plaisirs d’Hiver)** viert zijn **25e editie** van **27 november 2026 tot 3 januari 2027**, elke dag van **12.00 tot 22.00 uur** (sluiting om 18.00 uur op 24 en 31 december).',
    'Meer dan **200 kraampjes** strekken zich uit van de **Grote Markt** tot het **Beursplein**, het **Sint-Katelijneplein** en de **Vismarkt**: alles is te voet bereikbaar vanaf Craves.',
    'De toegang is **gratis**; het reuzenrad, de schaatsbaan en de attracties zijn betalend.',
    'Eregasten in 2026: **Béarn Pyrénées en Baskenland**, met een Baskisch-Béarnais dorp op het **Beursplein**, op 150 m van het hotel.',
  ],
  intro:
    'Elke winter verandert het centrum van Brussel in één grote kerstmarkt in open lucht. Craves ligt midden op het parcours: het Beursplein ligt op 2 minuten wandelen, de Grote Markt op 4. Hier vindt u de plekken die u niet mag missen, de praktische info en onze wandeling van kraampje tot kraampje.',
  overviewTitle: { text: 'De plekken van de markt', em: 'in één oogopslag' },
  overviewHeaders: ['#', 'Plek', 'Te voet vanaf Craves', 'Te zien'],
  sinceHotel: 'vanaf het hotel',
  tipLabel: 'Onze tip',
  places: [
    {
      name: 'De Grote Markt',
      distance: '280 m · 4 min',
      entry: 'Kerstboom en licht- en geluidsshow',
      photo: 'grand-place-bruxelles-crepuscule',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Het hart van de feestelijkheden: de **grote kerstboom** staat voor het stadhuis en zodra het donker wordt, brengt een **licht- en geluidsshow** de gevels van dit UNESCO-werelderfgoed tot leven.',
      ],
      tip: 'Kom net na het vallen van de avond, rond 17.00 uur: de verlichting is dan op haar mooist en het is minder druk dan later op de avond.',
    },
    {
      name: 'Het Beursplein',
      distance: '150 m · 2 min',
      entry: 'Baskisch-Béarnais dorp',
      schemaType: 'Place',
      paragraphs: [
        'Voor deze 25e editie ontvangt de Stad Brussel **Béarn Pyrénées en Baskenland**. Hun dorp strijkt neer op het **Beursplein**, op 2 minuten van het hotel: ideaal om tussen twee kraampjes door de specialiteiten van Zuidwest-Frankrijk te proeven.',
      ],
    },
    {
      name: 'Het Muntplein',
      distance: '310 m · 4 min',
      entry: 'Kraampjes',
      schemaType: 'Place',
      paragraphs: [
        'Voor de Muntschouwburg ligt nog een etappe van de markt, op de route tussen de Grote Markt en de winkels van de Nieuwstraat.',
      ],
    },
    {
      name: 'Het Sint-Katelijneplein',
      distance: '410 m · 6 min',
      entry: 'Kraampjes en glühwein',
      schemaType: 'Place',
      paragraphs: [
        'De gezelligste sfeer van de markt: lekkere kraampjes, glühwein en specialiteiten om te delen rond de Sint-Katelijnekerk.',
      ],
    },
    {
      name: 'De Vismarkt',
      distance: '590 m · 7 min',
      entry: 'Reuzenrad',
      schemaType: 'Place',
      paragraphs: [
        'In het verlengde van Sint-Katelijne staat op de Vismarkt het **reuzenrad**, met een prachtig uitzicht over de verlichte daken van het centrum.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Onze wandeling', em: 'van kraampje tot kraampje' },
    steps: [
      'Begin bij het vallen van de avond op de **Grote Markt**, voor de kerstboom en de licht- en geluidsshow.',
      'Wandel naar het **Beursplein** en het Baskisch-Béarnais dorp, op 2 minuten van het hotel.',
      'Ga verder naar het **Sint-Katelijneplein** voor een glühwein.',
      'Stap in het **reuzenrad** op de Vismarkt.',
      'Keer terug via het **Muntplein**: Craves ligt op 4 minuten.',
    ],
    evening:
      'Om de avond af te sluiten, vindt u **Le Conteur** en **Scène** in het hotel zelf. Als gast van Craves: **-15%** op uw maaltijd in Le Conteur en uw eerste cocktail **1 gekocht = 1 gratis** in Scène.',
  },
  when: {
    title: { text: 'Praktische info', em: '2026-2027' },
    items: [
      '**Data**: van **vrijdag 27 november 2026 tot zondag 3 januari 2027**.',
      '**Openingsuren**: elke dag van **12.00 tot 22.00 uur**; sluiting om **18.00 uur op 24 en 31 december**.',
      '**Gratis toegang**; reuzenrad, schaatsbaan en attracties zijn betalend. Het volledige programma verschijnt in november op **plaisirsdhiver.be**.',
      '**Minder druk** op weekdagen en in het begin van de namiddag; vrijdag- en zaterdagavond zijn het drukst.',
      '**Boek op tijd**: de weekends in december zijn erg gegeerd in het centrum. Rechtstreeks via onze website: **-10%** met de code THANKYOU.',
    ],
  },
  faqTitle: { text: 'Veelgestelde', em: 'vragen' },
  faq: [
    {
      q: 'Wanneer is de kerstmarkt in Brussel in 2026?',
      a: 'Winterpret (Plaisirs d’Hiver) loopt van vrijdag 27 november 2026 tot zondag 3 januari 2027, elke dag van 12.00 tot 22.00 uur (sluiting om 18.00 uur op 24 en 31 december).',
    },
    {
      q: 'Is de kerstmarkt in Brussel gratis?',
      a: 'Ja, de toegang tot de markt is gratis. Het reuzenrad, de schaatsbaan en de attracties zijn betalend.',
    },
    {
      q: 'Waar staan de kraampjes van de kerstmarkt?',
      a: 'Op de Grote Markt, het Beursplein, het Muntplein, het Sint-Katelijneplein en de Vismarkt, allemaal op minder dan 10 minuten wandelen van elkaar.',
    },
    {
      q: 'Waar staat het reuzenrad?',
      a: 'Op de Vismarkt, vlak bij het Sint-Katelijneplein, op ongeveer 7 minuten wandelen van Craves Hotel.',
    },
    {
      q: 'Welk hotel kiest u best voor de kerstmarkt in Brussel?',
      a: 'Craves Hotel, een 3★ boetiekhotel in de Rue du Marché aux Poulets, ligt midden op het parcours: op 150 m van het Beursplein en op 280 m van de Grote Markt, met 75 kamers met airco.',
    },
  ],
  sources: 'Bronnen: Stad Brussel (brussel.be), plaisirsdhiver.be. Informatie gecontroleerd in oktober 2026; gedetailleerd programma en tarieven verschijnen in november.',
  tocLabel: 'In dit artikel',
  aside: {
    title: 'Overnachten in het hart van de kerstmarkt',
    text: 'Craves Hotel, 3★ boetiekhotel, op 150 m van de Beurs en 280 m van de Grote Markt. -10% bij rechtstreekse boeking met de code THANKYOU.',
  },
};

export const WINTER_ARTICLE: Localized<GuideArticle> = { fr: FR, en: EN, nl: NL };
