import type { GuideArticle } from '../guide';
import type { Localized } from '../localize';

// A weekend in Brussels from the hotel. Walking distances computed from Rue du Marché aux Poulets 32
// (OpenStreetMap foot routing); values already on the site are reused as they are.
// Sablon antiques market: Sat 9:00–17:00, Sun 9:00–15:00 (markets.brussels.be). Atomium: 10:00–18:00,
// last entry 17:30 (atomium.be). Magritte Museum closed on Mondays. Checked October 2026.
// No photo of the Atomium: its image rights are claimed for commercial use.

const FR: GuideArticle = {
  route: 'guideWeekend',
  category: 'Incontournables',
  metaTitle: 'Bruxelles en 48 heures : notre week-end idéal',
  metaDescription:
    'Que faire à Bruxelles en un week-end ? Grand-Place, Sablon, musée Magritte, Marolles, Atomium : notre programme de 48 heures, presque tout à pied depuis le Craves.',
  shortTitle: 'Bruxelles en 48 heures',
  title: { text: 'Bruxelles en 48 heures :', em: 'notre week-end idéal, presque tout à pied' },
  teaser:
    'Deux jours, huit étapes et une seule station de métro : notre programme pour profiter de Bruxelles en un week-end, au départ du Craves.',
  heroPhoto: 'eglise-notre-dame-du-sablon-bruxelles',
  heroAlt: 'L’église Notre-Dame du Sablon et la place du Grand Sablon, étape du samedi après-midi',
  byline: 'Par l’équipe du Craves Hotel · mis à jour le 8 octobre 2026 · 7 min de lecture',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'En bref',
  brief: [
    '**Samedi** : Grand-Place, Galeries Royales, Mont des Arts et musée Magritte, puis le **Sablon** et son marché des antiquaires. Le soir, **Le Conteur** et **Scène**, dans l’hôtel.',
    '**Dimanche** : marché aux puces du **Jeu de Balle** dans les Marolles, vue sur la ville depuis la **place Poelaert**, puis l’**Atomium** l’après-midi.',
    'Tout se fait **à pied depuis le Craves**, sauf l’Atomium : **métro** depuis De Brouckère, à 350 m de l’hôtel.',
    'Le dimanche, **check-out jusqu’à 11h30** et **bagagerie gratuite** : vous profitez de la journée sans vos valises.',
  ],
  intro:
    'Bruxelles se prête parfaitement au week-end : le centre historique est compact, et presque tout se visite à pied depuis la rue du Marché aux Poulets. Voici notre programme de 48 heures, avec les distances réelles depuis l’hôtel et nos conseils pour éviter la foule.',
  overviewTitle: { text: 'Le programme', em: 'en un coup d’œil' },
  overviewHeaders: ['#', 'Étape', 'Depuis le Craves', 'Quand'],
  sinceHotel: 'depuis l’hôtel',
  tipLabel: 'Notre conseil',
  places: [
    {
      name: 'La Grand-Place et le Manneken-Pis',
      distance: '280 m · 4 min',
      entry: 'Samedi matin',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Commencez par la **Grand-Place**, classée au patrimoine mondial de l’UNESCO, avant 9h : elle est presque vide et la lumière est superbe. Le **Manneken-Pis** n’est qu’à 300 m de là, par la rue Charles Buls et la rue de l’Étuve.',
      ],
      tip: 'Notre article « Que faire autour de la Grand-Place » détaille 10 visites à moins de 11 minutes à pied de l’hôtel.',
    },
    {
      name: 'Les Galeries Royales Saint-Hubert',
      distance: '380 m · 5 min',
      entry: 'Samedi matin',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Inaugurées en **1847**, ces galeries couvertes de verre comptent parmi les plus anciennes d’Europe. C’est l’endroit idéal pour une pause café et les premiers **chocolats belges** du week-end.',
      ],
    },
    {
      name: 'Le Mont des Arts et le musée Magritte',
      distance: '740 m à 990 m · 10 à 12 min',
      entry: 'Samedi après-midi',
      schemaType: 'Museum',
      paragraphs: [
        'Montez au **Mont des Arts** pour l’une des plus belles vues sur la tour de l’Hôtel de Ville, puis rejoignez la **place Royale**, où le **musée Magritte** réunit la plus grande collection au monde d’œuvres du peintre surréaliste.',
      ],
      tip: 'Le musée Magritte est **fermé le lundi** : gardez-le pour le samedi ou le dimanche.',
    },
    {
      name: 'Le Sablon',
      distance: '1,1 km · 13 min',
      entry: 'Samedi après-midi',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Le quartier chic des **antiquaires et des chocolatiers**, autour de l’église gothique **Notre-Dame du Sablon**. Le week-end, le **marché des antiquaires** s’installe sur la place du Grand Sablon : le **samedi de 9h à 17h** et le **dimanche de 9h à 15h**.',
        'Juste en face, le petit **square du Petit Sablon** et ses 48 statues des métiers anciens offrent une pause au calme.',
      ],
    },
    {
      name: 'Une soirée au Conteur et à Scène',
      distance: 'dans l’hôtel',
      entry: 'Samedi soir',
      schemaType: 'Place',
      paragraphs: [
        'Pas besoin de chercher loin : **Le Conteur**, au rez-de-chaussée, sert des tapas méditerranéennes à partager dans une ambiance festive. Prolongez la soirée à **Scène**, notre bar à cocktails clandestin au niveau Atrium.',
        'En étant client du Craves : **-15 %** sur votre repas au Conteur et votre premier cocktail **1 acheté = 1 offert** à Scène. La réservation est conseillée le samedi.',
      ],
    },
    {
      name: 'Les Marolles et le marché aux puces du Jeu de Balle',
      distance: '1,6 km · 20 min',
      entry: 'Dimanche matin',
      photo: 'marche-aux-puces-jeu-de-balle-bruxelles',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Le quartier populaire des **Marolles** garde son caractère bruxellois. Sur la **place du Jeu de Balle**, le **marché aux puces** se tient **tous les matins** : vaisselle, vinyles, objets anciens et bonnes affaires, puis un café dans l’une des terrasses autour de la place.',
      ],
      tip: 'Arrivez tôt : les plus belles pièces partent dès l’ouverture.',
    },
    {
      name: 'La place Poelaert et la vue sur la ville',
      distance: '1,5 km · 19 min',
      entry: 'Dimanche matin',
      photo: 'palais-de-justice-bruxelles',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Au-dessus des Marolles, la **place Poelaert** s’étend devant l’immense **Palais de Justice** et offre une vue panoramique sur la ville. Un **ascenseur public** relie directement les Marolles à la place : pratique pour remonter sans effort.',
      ],
    },
    {
      name: 'L’Atomium',
      distance: 'métro · environ 30 min',
      entry: 'Dimanche après-midi',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Symbole de l’Exposition universelle de 1958, l’**Atomium** est la seule étape du week-end hors du centre. Depuis la station **De Brouckère** (350 m de l’hôtel), prenez la **ligne 1**, changez à **Beekkant** pour la **ligne 6** et descendez à **Heysel** : l’Atomium est à quelques minutes à pied.',
        'Il est ouvert **tous les jours de 10h à 18h**, dernière entrée à **17h30**.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Le week-end', em: 'en résumé' },
    steps: [
      '**Samedi matin** : Grand-Place avant 9h, Manneken-Pis, Galeries Royales Saint-Hubert.',
      '**Samedi après-midi** : Mont des Arts, musée Magritte, puis le Sablon et ses chocolatiers.',
      '**Samedi soir** : dîner au **Conteur** et cocktails à **Scène**, dans l’hôtel.',
      '**Dimanche matin** : marché aux puces du Jeu de Balle, puis la place Poelaert.',
      '**Dimanche après-midi** : l’Atomium, en métro depuis De Brouckère.',
    ],
    evening:
      'Le dimanche, le **check-out est jusqu’à 11h30** et la **bagagerie est gratuite** : laissez vos valises à la réception et profitez de la journée jusqu’à votre train.',
  },
  when: {
    title: { text: 'Bon à savoir', em: 'avant de partir' },
    items: [
      '**Musée Magritte** : fermé le lundi.',
      '**Marché des antiquaires du Sablon** : samedi de 9h à 17h, dimanche de 9h à 15h.',
      '**Marché aux puces du Jeu de Balle** : tous les matins ; c’est le week-end qu’il est le plus animé.',
      '**Atomium** : tous les jours de 10h à 18h, dernière entrée à 17h30. Vérifiez les fermetures exceptionnelles sur atomium.be.',
      '**Jour de pluie** : le **Centre belge de la Bande dessinée** est à 940 m de l’hôtel (12 min à pied), les Galeries Royales sont couvertes.',
    ],
  },
  faqTitle: { text: 'Questions', em: 'fréquentes' },
  faq: [
    {
      q: 'Que faire à Bruxelles en un week-end ?',
      a: 'Le samedi : la Grand-Place, le Manneken-Pis, les Galeries Royales Saint-Hubert, le Mont des Arts, le musée Magritte et le Sablon. Le dimanche : le marché aux puces du Jeu de Balle, la place Poelaert et l’Atomium.',
    },
    {
      q: 'Peut-on tout visiter à pied ?',
      a: 'Presque tout : depuis le Craves Hotel, la Grand-Place est à 4 minutes, le Sablon à 13 minutes et les Marolles à 20 minutes à pied. Seul l’Atomium demande de prendre le métro.',
    },
    {
      q: 'Comment aller à l’Atomium depuis le centre ?',
      a: 'En métro : ligne 1 depuis De Brouckère jusqu’à Beekkant, puis ligne 6 jusqu’à Heysel. Comptez environ 30 minutes depuis le Craves Hotel.',
    },
    {
      q: 'Quand a lieu le marché des antiquaires du Sablon ?',
      a: 'Chaque week-end, place du Grand Sablon : le samedi de 9h à 17h et le dimanche de 9h à 15h.',
    },
    {
      q: 'Où dormir pour un week-end à Bruxelles ?',
      a: 'Au centre, pour tout faire à pied. Le Craves Hotel, boutique hôtel 3★ rue du Marché aux Poulets, est à 280 m de la Grand-Place et à 350 m du métro De Brouckère, avec Le Conteur et Scène sur place.',
    },
  ],
  sources: 'Sources : markets.brussels.be, atomium.be, Musées royaux des Beaux-Arts de Belgique. Informations vérifiées en octobre 2026 ; horaires à confirmer sur les sites officiels.',
  tocLabel: 'Dans cet article',
  aside: {
    title: 'Votre week-end au cœur de Bruxelles',
    text: 'Craves Hotel, boutique hôtel 3★ à 4 minutes de la Grand-Place. Réservez deux nuits en direct : -10 % avec le code THANKYOU.',
  },
};

const EN: GuideArticle = {
  route: 'guideWeekend',
  category: 'Must-sees',
  metaTitle: '48 Hours in Brussels: our perfect weekend itinerary',
  metaDescription:
    'Our Brussels weekend itinerary: Grand-Place, Sablon, Magritte Museum, the Marolles and the Atomium. 48 hours, almost all on foot from Craves Hotel.',
  shortTitle: '48 hours in Brussels',
  title: { text: '48 hours in Brussels:', em: 'our perfect weekend, almost all on foot' },
  teaser:
    'Two days, eight stops and just one metro ride: our plan for making the most of a weekend in Brussels, starting from Craves.',
  heroPhoto: 'eglise-notre-dame-du-sablon-bruxelles',
  heroAlt: 'Notre-Dame du Sablon church and the Place du Grand Sablon, our Saturday afternoon stop',
  byline: 'By the Craves Hotel team · updated 8 October 2026 · 7 min read',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'In short',
  brief: [
    '**Saturday**: Grand-Place, the Royal Galleries, Mont des Arts and the Magritte Museum, then the **Sablon** and its antiques market. In the evening, **Le Conteur** and **Scène**, right in the hotel.',
    '**Sunday**: the **Place du Jeu de Balle** flea market in the Marolles, city views from **Place Poelaert**, then the **Atomium** in the afternoon.',
    'Everything is **on foot from Craves**, except the Atomium: take the **metro** from De Brouckère, 350 m from the hotel.',
    'On Sunday, **check-out is until 11:30** and **luggage storage is free**: enjoy the day without your suitcases.',
  ],
  intro:
    'Brussels is made for a weekend away: the historic centre is compact, and almost everything can be reached on foot from Rue du Marché aux Poulets. Here is our 48-hour itinerary, with real walking distances from the hotel and our tips for avoiding the crowds.',
  overviewTitle: { text: 'The plan', em: 'at a glance' },
  overviewHeaders: ['#', 'Stop', 'From Craves', 'When'],
  sinceHotel: 'from the hotel',
  tipLabel: 'Our tip',
  places: [
    {
      name: 'The Grand-Place and Manneken Pis',
      distance: '280 m · 4 min',
      entry: 'Saturday morning',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Start with the **Grand-Place**, a UNESCO World Heritage Site, before 9:00: it is almost empty and the light is beautiful. **Manneken Pis** is just 300 m away, via Rue Charles Buls and Rue de l’Étuve.',
      ],
      tip: 'Our article “Things to do near the Grand-Place” covers 10 visits less than 11 minutes’ walk from the hotel.',
    },
    {
      name: 'The Royal Galleries of Saint-Hubert',
      distance: '380 m · 5 min',
      entry: 'Saturday morning',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Opened in **1847**, these glass-roofed arcades are among the oldest in Europe. The perfect spot for a coffee break and the first **Belgian chocolates** of the weekend.',
      ],
    },
    {
      name: 'Mont des Arts and the Magritte Museum',
      distance: '740 m to 990 m · 10 to 12 min',
      entry: 'Saturday afternoon',
      schemaType: 'Museum',
      paragraphs: [
        'Climb up to the **Mont des Arts** for one of the finest views of the Town Hall tower, then head on to **Place Royale**, where the **Magritte Museum** holds the world’s largest collection of works by the surrealist painter.',
      ],
      tip: 'The Magritte Museum is **closed on Mondays**: save it for Saturday or Sunday.',
    },
    {
      name: 'The Sablon',
      distance: '1.1 km · 13 min',
      entry: 'Saturday afternoon',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'The elegant district of **antiques dealers and chocolatiers**, set around the Gothic church of **Notre-Dame du Sablon**. At weekends, the **antiques market** sets up on the Grand Sablon: **Saturday from 9:00 to 17:00** and **Sunday from 9:00 to 15:00**.',
        'Just opposite, the little **Petit Sablon** garden, with its 48 statues of the old guilds, offers a quiet break.',
      ],
    },
    {
      name: 'An evening at Le Conteur and Scène',
      distance: 'in the hotel',
      entry: 'Saturday evening',
      schemaType: 'Place',
      paragraphs: [
        'No need to go far: **Le Conteur**, on the ground floor, serves Mediterranean sharing tapas in a festive atmosphere. Carry on the evening at **Scène**, our speakeasy cocktail bar on the Atrium level.',
        'As a Craves guest: **-15%** on your meal at Le Conteur and your first cocktail **buy one, get one free** at Scène. Booking is recommended on Saturdays.',
      ],
    },
    {
      name: 'The Marolles and the Place du Jeu de Balle flea market',
      distance: '1.6 km · 20 min',
      entry: 'Sunday morning',
      photo: 'marche-aux-puces-jeu-de-balle-bruxelles',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'The working-class **Marolles** district has kept its true Brussels character. On the **Place du Jeu de Balle**, the **flea market** is held **every morning**: crockery, vinyl records, vintage finds and bargains, followed by a coffee on one of the terraces around the square.',
      ],
      tip: 'Get there early: the best pieces go as soon as the market opens.',
    },
    {
      name: 'Place Poelaert and the view over the city',
      distance: '1.5 km · 19 min',
      entry: 'Sunday morning',
      photo: 'palais-de-justice-bruxelles',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Above the Marolles, **Place Poelaert** stretches out in front of the vast **Palace of Justice** and offers a panoramic view over the city. A **public lift** links the Marolles directly to the square: a handy way to get back up without effort.',
      ],
    },
    {
      name: 'The Atomium',
      distance: 'metro · about 30 min',
      entry: 'Sunday afternoon',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'The symbol of the 1958 World’s Fair, the **Atomium** is the only stop of the weekend outside the centre. From **De Brouckère** station (350 m from the hotel), take **line 1**, change at **Beekkant** for **line 6** and get off at **Heysel**: the Atomium is a few minutes’ walk away.',
        'It is open **every day from 10:00 to 18:00**, last entry at **17:30**.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'The weekend', em: 'in brief' },
    steps: [
      '**Saturday morning**: Grand-Place before 9:00, Manneken Pis, the Royal Galleries of Saint-Hubert.',
      '**Saturday afternoon**: Mont des Arts, the Magritte Museum, then the Sablon and its chocolatiers.',
      '**Saturday evening**: dinner at **Le Conteur** and cocktails at **Scène**, in the hotel.',
      '**Sunday morning**: the Jeu de Balle flea market, then Place Poelaert.',
      '**Sunday afternoon**: the Atomium, by metro from De Brouckère.',
    ],
    evening:
      'On Sunday, **check-out is until 11:30** and **luggage storage is free**: leave your bags at reception and enjoy the day until your train.',
  },
  when: {
    title: { text: 'Good to know', em: 'before you go' },
    items: [
      '**Magritte Museum**: closed on Mondays.',
      '**Sablon antiques market**: Saturday from 9:00 to 17:00, Sunday from 9:00 to 15:00.',
      '**Jeu de Balle flea market**: every morning; it is at its liveliest at the weekend.',
      '**Atomium**: every day from 10:00 to 18:00, last entry at 17:30. Check atomium.be for any exceptional closures.',
      '**Rainy day**: the **Belgian Comic Strip Center** is 940 m from the hotel (12 min on foot), and the Royal Galleries are covered.',
    ],
  },
  faqTitle: { text: 'Frequently asked', em: 'questions' },
  faq: [
    {
      q: 'What to do in Brussels in a weekend?',
      a: 'On Saturday: the Grand-Place, Manneken Pis, the Royal Galleries of Saint-Hubert, Mont des Arts, the Magritte Museum and the Sablon. On Sunday: the Jeu de Balle flea market, Place Poelaert and the Atomium.',
    },
    {
      q: 'Can you see everything on foot?',
      a: 'Almost everything: from Craves Hotel, the Grand-Place is 4 minutes away, the Sablon 13 minutes and the Marolles 20 minutes on foot. Only the Atomium requires taking the metro.',
    },
    {
      q: 'How do you get to the Atomium from the city centre?',
      a: 'By metro: line 1 from De Brouckère to Beekkant, then line 6 to Heysel. Allow about 30 minutes from Craves Hotel.',
    },
    {
      q: 'When is the Sablon antiques market held?',
      a: 'Every weekend on the Grand Sablon: Saturday from 9:00 to 17:00 and Sunday from 9:00 to 15:00.',
    },
    {
      q: 'Where to stay for a weekend in Brussels?',
      a: 'In the centre, so you can do everything on foot. Craves Hotel, a 3★ boutique hotel on Rue du Marché aux Poulets, is 280 m from the Grand-Place and 350 m from De Brouckère metro, with Le Conteur and Scène on site.',
    },
  ],
  sources: 'Sources: markets.brussels.be, atomium.be, Royal Museums of Fine Arts of Belgium. Information checked in October 2026; please confirm opening hours on the official websites.',
  tocLabel: 'In this article',
  aside: {
    title: 'Your weekend in the heart of Brussels',
    text: 'Craves Hotel, a 3★ boutique hotel 4 minutes from the Grand-Place. Book two nights direct: -10% with the code THANKYOU.',
  },
};

const NL: GuideArticle = {
  route: 'guideWeekend',
  category: 'Bezienswaardigheden',
  metaTitle: '48 uur in Brussel: ons ideale weekend',
  metaDescription:
    'Wat doen tijdens een weekend in Brussel? Grote Markt, Zavel, Magrittemuseum, Marollen, Atomium: onze route voor 48 uur, bijna alles te voet vanaf Craves.',
  shortTitle: '48 uur in Brussel',
  title: { text: '48 uur in Brussel:', em: 'ons ideale weekend, bijna alles te voet' },
  teaser:
    'Twee dagen, acht haltes en één enkele metrorit: ons programma om ten volle te genieten van een weekend in Brussel, vertrekkend vanuit Craves.',
  heroPhoto: 'eglise-notre-dame-du-sablon-bruxelles',
  heroAlt: 'De Onze-Lieve-Vrouw-ter-Zavelkerk en de Grote Zavel, halte op zaterdagnamiddag',
  byline: 'Door het team van Craves Hotel · bijgewerkt op 8 oktober 2026 · 7 min leestijd',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'In het kort',
  brief: [
    '**Zaterdag**: Grote Markt, Koninklijke Sint-Hubertusgalerijen, Kunstberg en Magrittemuseum, daarna de **Zavel** en zijn antiekmarkt. ’s Avonds **Le Conteur** en **Scène**, in het hotel zelf.',
    '**Zondag**: de **rommelmarkt op het Vossenplein** in de Marollen, uitzicht over de stad vanaf het **Poelaertplein**, en ’s namiddags het **Atomium**.',
    'Alles doet u **te voet vanaf Craves**, behalve het Atomium: neem de **metro** in De Brouckère, op 350 m van het hotel.',
    'Op zondag kunt u **uitchecken tot 11.30 uur** en is de **bagageopslag gratis**: zo geniet u van de dag zonder uw koffers.',
  ],
  intro:
    'Brussel is ideaal voor een weekendje weg: het historische centrum is compact en bijna alles is te voet bereikbaar vanuit de Rue du Marché aux Poulets. Dit is ons programma voor 48 uur, met de echte afstanden vanaf het hotel en onze tips om de drukte te vermijden.',
  overviewTitle: { text: 'Het programma', em: 'in één oogopslag' },
  overviewHeaders: ['#', 'Halte', 'Vanaf Craves', 'Wanneer'],
  sinceHotel: 'vanaf het hotel',
  tipLabel: 'Onze tip',
  places: [
    {
      name: 'De Grote Markt en Manneken Pis',
      distance: '280 m · 4 min',
      entry: 'Zaterdagochtend',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Begin bij de **Grote Markt**, UNESCO-werelderfgoed, vóór 9 uur: het plein is dan bijna leeg en het licht is prachtig. **Manneken Pis** ligt maar 300 m verderop, via de Karel Bulsstraat en de Stoofstraat.',
      ],
      tip: 'Ons artikel “Wat te doen rond de Grote Markt” beschrijft 10 bezoeken op minder dan 11 minuten wandelen van het hotel.',
    },
    {
      name: 'De Koninklijke Sint-Hubertusgalerijen',
      distance: '380 m · 5 min',
      entry: 'Zaterdagochtend',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Deze overdekte glazen galerijen, ingehuldigd in **1847**, behoren tot de oudste van Europa. De ideale plek voor een koffiepauze en de eerste **Belgische pralines** van het weekend.',
      ],
    },
    {
      name: 'De Kunstberg en het Magrittemuseum',
      distance: '740 m tot 990 m · 10 tot 12 min',
      entry: 'Zaterdagnamiddag',
      schemaType: 'Museum',
      paragraphs: [
        'Klim naar de **Kunstberg** voor een van de mooiste uitzichten op de toren van het stadhuis, en wandel dan door naar het **Koningsplein**, waar het **Magrittemuseum** de grootste collectie ter wereld van werken van de surrealistische schilder bijeenbrengt.',
      ],
      tip: 'Het Magrittemuseum is **op maandag gesloten**: bewaar het voor zaterdag of zondag.',
    },
    {
      name: 'De Zavel',
      distance: '1,1 km · 13 min',
      entry: 'Zaterdagnamiddag',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'De chique wijk van de **antiquairs en chocolatiers**, rond de gotische **Onze-Lieve-Vrouw-ter-Zavelkerk**. In het weekend strijkt de **antiekmarkt** neer op de Grote Zavel: **zaterdag van 9 tot 17 uur** en **zondag van 9 tot 15 uur**.',
        'Recht tegenover biedt het kleine park van de **Kleine Zavel**, met zijn 48 beelden van de oude ambachten, een rustige pauze.',
      ],
    },
    {
      name: 'Een avond in Le Conteur en Scène',
      distance: 'in het hotel',
      entry: 'Zaterdagavond',
      schemaType: 'Place',
      paragraphs: [
        'U hoeft niet ver te zoeken: **Le Conteur**, op het gelijkvloers, serveert mediterrane tapas om te delen in een feestelijke sfeer. Sluit de avond af in **Scène**, onze verborgen cocktailbar op het Atrium-niveau.',
        'Als gast van Craves: **-15%** op uw maaltijd in Le Conteur en uw eerste cocktail **1 + 1 gratis** in Scène. Reserveren is aangeraden op zaterdag.',
      ],
    },
    {
      name: 'De Marollen en de rommelmarkt op het Vossenplein',
      distance: '1,6 km · 20 min',
      entry: 'Zondagochtend',
      photo: 'marche-aux-puces-jeu-de-balle-bruxelles',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'De volkse **Marollen** hebben hun echte Brusselse karakter bewaard. Op het **Vossenplein** vindt **elke ochtend** de **rommelmarkt** plaats: servies, vinylplaten, oude voorwerpen en koopjes, gevolgd door een koffie op een van de terrassen rond het plein.',
      ],
      tip: 'Kom vroeg: de mooiste stukken zijn meteen bij de opening weg.',
    },
    {
      name: 'Het Poelaertplein en het uitzicht over de stad',
      distance: '1,5 km · 19 min',
      entry: 'Zondagochtend',
      photo: 'palais-de-justice-bruxelles',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Boven de Marollen strekt het **Poelaertplein** zich uit voor het immense **Justitiepaleis**, met een panoramisch uitzicht over de stad. Een **openbare lift** verbindt de Marollen rechtstreeks met het plein: handig om moeiteloos weer naar boven te gaan.',
      ],
    },
    {
      name: 'Het Atomium',
      distance: 'metro · ongeveer 30 min',
      entry: 'Zondagnamiddag',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Het **Atomium**, symbool van de Wereldtentoonstelling van 1958, is de enige halte van het weekend buiten het centrum. Neem vanaf station **De Brouckère** (350 m van het hotel) **lijn 1**, stap in **Beekkant** over op **lijn 6** en stap uit in **Heizel**: het Atomium ligt op enkele minuten wandelen.',
        'Het is **elke dag open van 10 tot 18 uur**, laatste toegang om **17.30 uur**.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Het weekend', em: 'samengevat' },
    steps: [
      '**Zaterdagochtend**: Grote Markt vóór 9 uur, Manneken Pis, Koninklijke Sint-Hubertusgalerijen.',
      '**Zaterdagnamiddag**: Kunstberg, Magrittemuseum, daarna de Zavel en zijn chocolatiers.',
      '**Zaterdagavond**: diner in **Le Conteur** en cocktails in **Scène**, in het hotel.',
      '**Zondagochtend**: rommelmarkt op het Vossenplein, daarna het Poelaertplein.',
      '**Zondagnamiddag**: het Atomium, met de metro vanaf De Brouckère.',
    ],
    evening:
      'Op zondag kunt u **uitchecken tot 11.30 uur** en is de **bagageopslag gratis**: laat uw koffers achter aan de receptie en geniet van de dag tot uw trein vertrekt.',
  },
  when: {
    title: { text: 'Goed om te weten', em: 'voor u vertrekt' },
    items: [
      '**Magrittemuseum**: gesloten op maandag.',
      '**Antiekmarkt op de Zavel**: zaterdag van 9 tot 17 uur, zondag van 9 tot 15 uur.',
      '**Rommelmarkt op het Vossenplein**: elke ochtend; in het weekend is het er het drukst.',
      '**Atomium**: elke dag van 10 tot 18 uur, laatste toegang om 17.30 uur. Controleer uitzonderlijke sluitingen op atomium.be.',
      '**Regendag**: het **Belgisch Stripcentrum** ligt op 940 m van het hotel (12 min te voet), en de Koninklijke Sint-Hubertusgalerijen zijn overdekt.',
    ],
  },
  faqTitle: { text: 'Veelgestelde', em: 'vragen' },
  faq: [
    {
      q: 'Wat te doen in Brussel tijdens een weekend?',
      a: 'Op zaterdag: de Grote Markt, Manneken Pis, de Koninklijke Sint-Hubertusgalerijen, de Kunstberg, het Magrittemuseum en de Zavel. Op zondag: de rommelmarkt op het Vossenplein, het Poelaertplein en het Atomium.',
    },
    {
      q: 'Kan ik alles te voet bezoeken?',
      a: 'Bijna alles: vanaf Craves Hotel ligt de Grote Markt op 4 minuten, de Zavel op 13 minuten en de Marollen op 20 minuten wandelen. Enkel voor het Atomium neemt u de metro.',
    },
    {
      q: 'Hoe geraak ik vanuit het centrum naar het Atomium?',
      a: 'Met de metro: lijn 1 van De Brouckère tot Beekkant, daarna lijn 6 tot Heizel. Reken op ongeveer 30 minuten vanaf Craves Hotel.',
    },
    {
      q: 'Wanneer is de antiekmarkt op de Zavel?',
      a: 'Elk weekend op de Grote Zavel: op zaterdag van 9 tot 17 uur en op zondag van 9 tot 15 uur.',
    },
    {
      q: 'Waar overnachten voor een weekend in Brussel?',
      a: 'In het centrum, zodat u alles te voet kunt doen. Craves Hotel, een 3★ boetiekhotel in de Rue du Marché aux Poulets, ligt op 280 m van de Grote Markt en op 350 m van metrostation De Brouckère, met Le Conteur en Scène ter plaatse.',
    },
  ],
  sources: 'Bronnen: markets.brussels.be, atomium.be, Koninklijke Musea voor Schone Kunsten van België. Informatie gecontroleerd in oktober 2026; controleer de openingsuren op de officiële websites.',
  tocLabel: 'In dit artikel',
  aside: {
    title: 'Uw weekend in hartje Brussel',
    text: 'Craves Hotel, 3★ boetiekhotel op 4 minuten van de Grote Markt. Boek twee nachten rechtstreeks: -10% met de code THANKYOU.',
  },
};

export const WEEKEND_ARTICLE: Localized<GuideArticle> = { fr: FR, en: EN, nl: NL };
