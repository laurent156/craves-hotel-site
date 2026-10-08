import type { GuideArticle } from '../guide';
import type { Localized } from '../localize';

// From Brussels-Midi (Eurostar, TGV) to the Grand-Place and the hotel. Facts aligned with the FAQ
// (tram 3 or 4 to Bourse, ~10 min, then 2 min on foot; Central Station 600 m · 9 min).

const FR: GuideArticle = {
  route: 'guideMidi',
  category: 'Infos pratiques',
  metaTitle: 'De la gare du Midi à la Grand-Place : tram, train ou taxi',
  metaDescription:
    'Arrivée en Eurostar ou TGV à Bruxelles-Midi ? Tram 3 ou 4, train vers la Gare Centrale, taxi ou à pied : comment rejoindre la Grand-Place et le Craves Hotel.',
  shortTitle: 'De la gare du Midi au Craves',
  title: { text: 'De la gare du Midi à la Grand-Place :', em: 'tram, train, taxi ou à pied' },
  teaser:
    'Vous arrivez en Eurostar ou en TGV à Bruxelles-Midi ? Quatre façons de rejoindre la Grand-Place et le Craves Hotel, avec les temps de trajet réels.',
  heroPhoto: 'craves-reception-hall',
  heroAlt: 'La réception du Craves Hotel, à 150 m de l’arrêt de tram Bourse - Grand-Place',
  byline: 'Par l’équipe du Craves Hotel · mis à jour le 8 octobre 2026 · 5 min de lecture',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'En bref',
  brief: [
    'Le plus simple : le **tram 3 ou 4** depuis la gare du Midi jusqu’à l’arrêt **Bourse - Grand-Place** (environ 10 min), puis **2 minutes à pied** jusqu’au Craves.',
    'En train, la **Gare Centrale** est à quelques minutes de la gare du Midi, puis le Craves à **600 m (9 min à pied)**. Un billet Eurostar pour Bruxelles permet souvent ce trajet sans supplément : vérifiez la mention sur votre billet.',
    'À pied, comptez **environ 2 km et 25 minutes**, en grande partie par les boulevards piétons du centre.',
    'Le Craves est rue du Marché aux Poulets 32, à **150 m de la Bourse** et à **280 m de la Grand-Place**. Réception **24h/24**, bagagerie **gratuite**.',
  ],
  intro:
    'Eurostar depuis Londres, TGV depuis Paris : la plupart des trains internationaux s’arrêtent à Bruxelles-Midi, à environ 2 km du centre historique. Bonne nouvelle, la Grand-Place et le Craves Hotel sont à une dizaine de minutes en tram. Voici les quatre options, de la plus simple à la plus économique.',
  overviewTitle: { text: 'Les 4 options', em: 'en un coup d’œil' },
  overviewHeaders: ['#', 'Option', 'Porte à porte', 'Bon à savoir'],
  sinceHotel: 'jusqu’au Craves',
  tipLabel: 'Notre conseil',
  places: [
    {
      name: 'Le tram 3 ou 4 jusqu’à Bourse - Grand-Place',
      distance: 'environ 15 min',
      entry: 'Ticket STIB ou carte sans contact',
      paragraphs: [
        'Les trams 3 et 4 partent du **niveau souterrain de la gare** (prémétro). Suivez les panneaux **Métro / Tram (STIB)** depuis le hall, et prenez un tram en direction du centre.',
        'Descendez à l’arrêt **Bourse - Grand-Place**, après **environ 10 minutes**. En sortant place de la Bourse, le Craves est à **150 m, soit 2 minutes à pied**.',
        'Pour payer, achetez un ticket au distributeur STIB ou présentez directement votre **carte bancaire sans contact** au valideur.',
      ],
      tip: 'C’est l’option la plus simple avec des valises : pas de correspondance, et un arrêt au cœur du centre historique.',
    },
    {
      name: 'Le train jusqu’à la Gare Centrale',
      distance: 'environ 20 min',
      entry: 'Souvent inclus avec un billet Eurostar',
      paragraphs: [
        'La plupart des trains intérieurs relient **Bruxelles-Midi à Bruxelles-Central en quelques minutes**, avec des départs très fréquents. Consultez les écrans de la gare : tout train qui dessert « Bruxelles-Central » convient.',
        'De la Gare Centrale, le Craves est à **600 m, soit 9 minutes à pied**, en passant par la Grand-Place.',
      ],
      tip: 'Votre billet Eurostar mentionne une destination « Bruxelles » ou « toute gare belge » ? Il couvre en général ce court trajet en train : vérifiez avant d’acheter un autre billet.',
    },
    {
      name: 'Le taxi',
      distance: 'environ 10 à 15 min',
      entry: 'Station de taxis à la sortie de la gare',
      paragraphs: [
        'Une station de taxis se trouve à la sortie de la gare. Donnez l’adresse **Rue du Marché aux Poulets 32**. Le centre étant en partie piétonnier, le chauffeur vous déposera au plus près de l’hôtel.',
      ],
    },
    {
      name: 'À pied',
      distance: 'environ 25 min',
      entry: 'Gratuit',
      paragraphs: [
        'Environ **2 km** séparent la gare du Midi du Craves. Le trajet longe les boulevards du centre, en grande partie piétons à l’approche de la Bourse. Une belle première balade si vous voyagez léger.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Pas à pas', em: 'en tram depuis le quai' },
    steps: [
      'En descendant du train, suivez les panneaux **Métro / Tram (STIB)** vers le niveau souterrain.',
      'Achetez un ticket au distributeur STIB ou utilisez votre **carte bancaire sans contact** au valideur.',
      'Prenez le **tram 3 ou 4** en direction du centre.',
      'Descendez à **Bourse - Grand-Place**, après environ 10 minutes.',
      'Sortez place de la Bourse : le Craves est à **150 m**, rue du Marché aux Poulets 32.',
    ],
    evening:
      'Vous arrivez avant 14h00 ? La **bagagerie est gratuite** : déposez vos valises à la réception, ouverte **24h/24**, et partez découvrir la Grand-Place, à 4 minutes à pied.',
  },
  when: {
    title: { text: 'Bon à savoir', em: 'avant de partir' },
    items: [
      '**Eurostar et TGV** arrivent à **Bruxelles-Midi**, la principale gare internationale de la ville.',
      '**Check-in dès 14h00**, check-out jusqu’à 11h30. Arrivée tardive ? La réception est ouverte **24h/24**.',
      '**En voiture** : l’hôtel n’a pas de parking privé. Trois parkings publics sont à moins de 5 minutes à pied : Interparking Ecuyer (280 m), Brucity (300 m) et Monnaie (400 m).',
      '**Réserver en direct** sur notre site vous fait bénéficier de **-10 %** avec le code THANKYOU.',
    ],
  },
  faqTitle: { text: 'Questions', em: 'fréquentes' },
  faq: [
    {
      q: 'Comment aller de la gare du Midi à la Grand-Place ?',
      a: 'En tram 3 ou 4 jusqu’à l’arrêt Bourse - Grand-Place (environ 10 min), puis 4 minutes à pied. Ou en train jusqu’à la Gare Centrale, puis environ 8 minutes à pied.',
    },
    {
      q: 'Combien de temps faut-il à pied de la gare du Midi à la Grand-Place ?',
      a: 'Environ 25 minutes pour un peu plus de 2 km, par les boulevards du centre.',
    },
    {
      q: 'Mon billet Eurostar est-il valable jusqu’à la Gare Centrale ?',
      a: 'Souvent oui : un billet Eurostar pour Bruxelles permet en général de continuer en train vers les autres gares bruxelloises, dont Bruxelles-Central. Vérifiez la mention sur votre billet ou sur eurostar.com.',
    },
    {
      q: 'Quel est l’arrêt le plus proche du Craves Hotel ?',
      a: 'L’arrêt Bourse - Grand-Place (trams 3 et 4), à 150 m, soit 2 minutes à pied. La station de métro De Brouckère est à 350 m.',
    },
    {
      q: 'Puis-je déposer mes bagages avant le check-in ?',
      a: 'Oui, gratuitement, avant le check-in comme après le check-out. La réception est ouverte 24h/24.',
    },
  ],
  sources: 'Sources : STIB, SNCB, Eurostar. Informations vérifiées en octobre 2026 ; lignes, horaires et tarifs à confirmer sur stib.be, belgiantrain.be et eurostar.com.',
  tocLabel: 'Dans cet article',
  aside: {
    title: 'Dormir à 2 minutes de l’arrêt Bourse',
    text: 'Craves Hotel, boutique hôtel 3★, à 280 m de la Grand-Place. Réception 24h/24, bagagerie gratuite. -10 % en direct avec le code THANKYOU.',
  },
};

const EN: GuideArticle = {
  route: 'guideMidi',
  category: 'Practical info',
  metaTitle: 'Brussels-Midi to the Grand-Place: tram, train or taxi',
  metaDescription:
    'Arriving by Eurostar or TGV at Brussels-Midi? Tram 3 or 4, train to Central Station, taxi or on foot: how to reach the Grand-Place and Craves Hotel.',
  shortTitle: 'From Brussels-Midi to Craves',
  title: { text: 'Brussels-Midi to the Grand-Place:', em: 'tram, train, taxi or on foot' },
  teaser:
    'Arriving at Brussels-Midi by Eurostar or TGV? Here are four ways to reach the Grand-Place and Craves Hotel, with real journey times.',
  heroPhoto: 'craves-reception-hall',
  heroAlt: 'The Craves Hotel reception, 150 m from the Bourse - Grand-Place tram stop',
  byline: 'By the Craves Hotel team · updated 8 October 2026 · 5 min read',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'In short',
  brief: [
    'Easiest: **tram 3 or 4** from Brussels-Midi to the **Bourse - Grand-Place** stop (about 10 min), then a **2-minute walk** to Craves.',
    'By train, **Brussels Central Station** is just a few minutes from Brussels-Midi, and Craves is **600 m (a 9-minute walk)** from there. A Eurostar ticket to Brussels often covers this hop at no extra cost: check what your ticket says.',
    'On foot, allow **about 2 km and 25 minutes**, much of it along the pedestrianised boulevards of the centre.',
    'Craves is at Rue du Marché aux Poulets 32, **150 m from the Bourse** and **280 m from the Grand-Place**. **24-hour** reception and **free** luggage storage.',
  ],
  intro:
    'Eurostar from London, TGV from Paris: most international trains pull into Brussels-Midi, about 2 km from the historic centre. The good news is that the Grand-Place and Craves Hotel are only around ten minutes away by tram. Here are your four options, from the simplest to the most budget-friendly.',
  overviewTitle: { text: 'The 4 options', em: 'at a glance' },
  overviewHeaders: ['#', 'Option', 'Door to door', 'Good to know'],
  sinceHotel: 'to Craves',
  tipLabel: 'Our tip',
  places: [
    {
      name: 'Tram 3 or 4 to Bourse - Grand-Place',
      distance: 'about 15 min',
      entry: 'STIB ticket or contactless card',
      paragraphs: [
        'Trams 3 and 4 leave from the **underground level of the station** (pre-metro). From the concourse, follow the **Metro / Tram (STIB)** signs and board a tram heading into the centre.',
        'Get off at **Bourse - Grand-Place**, after **about 10 minutes**. As you come out onto Place de la Bourse, Craves is **150 m away, a 2-minute walk**.',
        'To pay, buy a ticket from a STIB machine or simply tap your **contactless bank card** on the validator.',
      ],
      tip: 'The easiest option with luggage: no changes, and a stop right in the heart of the historic centre.',
    },
    {
      name: 'The train to Brussels Central Station',
      distance: 'about 20 min',
      entry: 'Often included with a Eurostar ticket',
      paragraphs: [
        'Most domestic trains run from **Brussels-Midi to Brussels-Central in just a few minutes**, with very frequent departures. Check the departure boards: any train calling at “Bruxelles-Central / Brussel-Centraal” will do.',
        'From Central Station, Craves is **600 m away, a 9-minute walk**, by way of the Grand-Place.',
      ],
      tip: 'Does your Eurostar ticket show “Brussels” or “any Belgian station” as the destination? It usually covers this short train ride: check before buying another ticket.',
    },
    {
      name: 'Taxi',
      distance: 'about 10 to 15 min',
      entry: 'Taxi rank at the station exit',
      paragraphs: [
        'You will find a taxi rank at the station exit. Give the address **Rue du Marché aux Poulets 32**. As parts of the centre are pedestrianised, the driver will drop you as close to the hotel as possible.',
      ],
    },
    {
      name: 'On foot',
      distance: 'about 25 min',
      entry: 'Free',
      paragraphs: [
        'It is about **2 km** from Brussels-Midi to Craves. The route follows the boulevards of the centre, largely pedestrianised as you near the Bourse. A lovely first stroll if you are travelling light.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Step by step', em: 'by tram from the platform' },
    steps: [
      'Once off the train, follow the **Metro / Tram (STIB)** signs down to the underground level.',
      'Buy a ticket from a STIB machine or tap your **contactless bank card** on the validator.',
      'Take **tram 3 or 4** heading into the centre.',
      'Get off at **Bourse - Grand-Place**, after about 10 minutes.',
      'Come out onto Place de la Bourse: Craves is **150 m away**, at Rue du Marché aux Poulets 32.',
    ],
    evening:
      'Arriving before 14:00? **Luggage storage is free**: leave your bags at reception, open **24 hours a day**, and head off to explore the Grand-Place, a 4-minute walk away.',
  },
  when: {
    title: { text: 'Good to know', em: 'before you travel' },
    items: [
      '**Eurostar and TGV** trains arrive at **Brussels-Midi**, the city’s main international station.',
      '**Check-in from 14:00**, check-out until 11:30. Arriving late? Reception is open **24 hours a day**.',
      '**By car**: the hotel has no private car park. Three public car parks are less than 5 minutes’ walk away: Interparking Ecuyer (280 m), Brucity (300 m) and Monnaie (400 m).',
      '**Book direct** on our website and enjoy **-10%** with the code THANKYOU.',
    ],
  },
  faqTitle: { text: 'Frequently asked', em: 'questions' },
  faq: [
    {
      q: 'How do I get from Brussels-Midi to the Grand-Place?',
      a: 'Take tram 3 or 4 to the Bourse - Grand-Place stop (about 10 min), then walk for 4 minutes. Or take the train to Brussels Central Station, then walk for about 8 minutes.',
    },
    {
      q: 'How long is the walk from Brussels-Midi to the Grand-Place?',
      a: 'About 25 minutes for just over 2 km, along the boulevards of the centre.',
    },
    {
      q: 'Is my Eurostar ticket valid to Brussels Central Station?',
      a: 'Often, yes: a Eurostar ticket to Brussels usually lets you continue by train to the other Brussels stations, including Brussels-Central. Check what your ticket says or look it up on eurostar.com.',
    },
    {
      q: 'What is the nearest stop to Craves Hotel?',
      a: 'The Bourse - Grand-Place stop (trams 3 and 4), 150 m away, a 2-minute walk. De Brouckère metro station is 350 m away.',
    },
    {
      q: 'Can I leave my luggage before check-in?',
      a: 'Yes, free of charge, both before check-in and after check-out. Reception is open 24 hours a day.',
    },
  ],
  sources: 'Sources: STIB, SNCB, Eurostar. Information checked in October 2026; please confirm lines, timetables and fares on stib.be, belgiantrain.be and eurostar.com.',
  tocLabel: 'In this article',
  aside: {
    title: 'Stay 2 minutes from the Bourse stop',
    text: 'Craves Hotel, a 3★ boutique hotel 280 m from the Grand-Place. 24-hour reception, free luggage storage. -10% when you book direct with the code THANKYOU.',
  },
};

const NL: GuideArticle = {
  route: 'guideMidi',
  category: 'Praktische info',
  metaTitle: 'Van Brussel-Zuid naar de Grote Markt: tram, trein of taxi',
  metaDescription:
    'Met de Eurostar of TGV in Brussel-Zuid? Tram 3 of 4, trein naar Brussel-Centraal, taxi of te voet: zo bereikt u de Grote Markt en Craves Hotel.',
  shortTitle: 'Van Brussel-Zuid naar Craves',
  title: { text: 'Van Brussel-Zuid naar de Grote Markt:', em: 'tram, trein, taxi of te voet' },
  teaser:
    'Komt u met de Eurostar of TGV aan in Brussel-Zuid? Vier manieren om de Grote Markt en Craves Hotel te bereiken, met de werkelijke reistijden.',
  heroPhoto: 'craves-reception-hall',
  heroAlt: 'De receptie van Craves Hotel, op 150 m van tramhalte Beurs - Grote Markt',
  byline: 'Door het team van Craves Hotel · bijgewerkt op 8 oktober 2026 · 5 min leestijd',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'In het kort',
  brief: [
    'Het eenvoudigst: **tram 3 of 4** van het Zuidstation tot halte **Beurs - Grote Markt** (ongeveer 10 min), daarna **2 minuten te voet** naar Craves.',
    'Met de trein bent u in enkele minuten van Brussel-Zuid in **Brussel-Centraal**; vandaar ligt Craves op **600 m (9 min te voet)**. Met een Eurostar-ticket naar Brussel kunt u deze rit vaak zonder meerprijs maken: controleer de vermelding op uw ticket.',
    'Te voet rekent u op **ongeveer 2 km en 25 minuten**, grotendeels via de voetgangersboulevards van het centrum.',
    'Craves ligt in de Rue du Marché aux Poulets 32, op **150 m van de Beurs** en **280 m van de Grote Markt**. Receptie **24/7** open, bagageopslag **gratis**.',
  ],
  intro:
    'De Eurostar uit Londen, de TGV uit Parijs: de meeste internationale treinen stoppen in Brussel-Zuid, op zo’n 2 km van het historische centrum. Goed nieuws: de Grote Markt en Craves Hotel liggen op een tiental minuten met de tram. Hier zijn de vier opties, van de eenvoudigste tot de voordeligste.',
  overviewTitle: { text: 'De 4 opties', em: 'in één oogopslag' },
  overviewHeaders: ['#', 'Optie', 'Van deur tot deur', 'Goed om te weten'],
  sinceHotel: 'tot bij Craves',
  tipLabel: 'Onze tip',
  places: [
    {
      name: 'Tram 3 of 4 tot Beurs - Grote Markt',
      distance: 'ongeveer 15 min',
      entry: 'MIVB-ticket of contactloze kaart',
      paragraphs: [
        'Trams 3 en 4 vertrekken op het **ondergrondse niveau van het station** (premetro). Volg vanuit de stationshal de borden **Metro / Tram (MIVB)** en neem een tram richting centrum.',
        'Stap af aan halte **Beurs - Grote Markt**, na **ongeveer 10 minuten**. Wanneer u bovenkomt op het Beursplein, ligt Craves op **150 m, of 2 minuten te voet**.',
        'Betalen doet u met een ticket uit een MIVB-automaat, of u houdt gewoon uw **contactloze bankkaart** tegen de valideerautomaat.',
      ],
      tip: 'Met bagage is dit de eenvoudigste optie: niet overstappen, en een halte midden in het historische centrum.',
    },
    {
      name: 'De trein tot Brussel-Centraal',
      distance: 'ongeveer 20 min',
      entry: 'Vaak inbegrepen bij een Eurostar-ticket',
      paragraphs: [
        'De meeste binnenlandse treinen rijden **in enkele minuten van Brussel-Zuid naar Brussel-Centraal**, met zeer frequente vertrekken. Kijk op de schermen in het station: elke trein die stopt in “Brussel-Centraal” is goed.',
        'Vanaf het Centraal Station ligt Craves op **600 m, of 9 minuten te voet**, via de Grote Markt.',
      ],
      tip: 'Staat op uw Eurostar-ticket “Brussel” of “elk Belgisch station” als bestemming? Dan dekt het meestal deze korte treinrit: controleer dit voor u een ander ticket koopt.',
    },
    {
      name: 'De taxi',
      distance: 'ongeveer 10 tot 15 min',
      entry: 'Taxistandplaats aan de uitgang van het station',
      paragraphs: [
        'Aan de uitgang van het station vindt u een taxistandplaats. Geef het adres **Rue du Marché aux Poulets 32** op. Omdat het centrum deels autovrij is, zet de chauffeur u zo dicht mogelijk bij het hotel af.',
      ],
    },
    {
      name: 'Te voet',
      distance: 'ongeveer 25 min',
      entry: 'Gratis',
      paragraphs: [
        'Het Zuidstation ligt op ongeveer **2 km** van Craves. De route volgt de boulevards van het centrum, die richting Beurs grotendeels autovrij zijn. Een mooie eerste wandeling als u licht reist.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Stap voor stap', em: 'met de tram vanaf het perron' },
    steps: [
      'Volg na het uitstappen de borden **Metro / Tram (MIVB)** naar het ondergrondse niveau.',
      'Koop een ticket aan een MIVB-automaat of houd uw **contactloze bankkaart** tegen de valideerautomaat.',
      'Neem **tram 3 of 4** richting centrum.',
      'Stap af aan **Beurs - Grote Markt**, na ongeveer 10 minuten.',
      'Ga naar buiten op het Beursplein: Craves ligt op **150 m**, in de Rue du Marché aux Poulets 32.',
    ],
    evening:
      'Komt u aan vóór 14.00 uur? De **bagageopslag is gratis**: laat uw koffers achter aan de receptie, die **24/7** open is, en ontdek alvast de Grote Markt, op 4 minuten wandelen.',
  },
  when: {
    title: { text: 'Goed om te weten', em: 'voor u vertrekt' },
    items: [
      '**Eurostar en TGV** komen aan in **Brussel-Zuid**, het belangrijkste internationale station van de stad.',
      '**Inchecken vanaf 14.00 uur**, uitchecken tot 11.30 uur. Komt u laat aan? De receptie is **24/7** open.',
      '**Met de auto**: het hotel heeft geen eigen parking. Drie openbare parkings liggen op minder dan 5 minuten wandelen: Interparking Ecuyer (280 m), Brucity (300 m) en Monnaie (400 m).',
      '**Rechtstreeks boeken** op onze website levert u **-10%** op met de code THANKYOU.',
    ],
  },
  faqTitle: { text: 'Veelgestelde', em: 'vragen' },
  faq: [
    {
      q: 'Hoe kom ik van Brussel-Zuid naar de Grote Markt?',
      a: 'Met tram 3 of 4 tot halte Beurs - Grote Markt (ongeveer 10 min), daarna 4 minuten te voet. Of met de trein tot Brussel-Centraal, daarna ongeveer 8 minuten te voet.',
    },
    {
      q: 'Hoe lang wandel je van het Zuidstation naar de Grote Markt?',
      a: 'Ongeveer 25 minuten voor iets meer dan 2 km, via de boulevards van het centrum.',
    },
    {
      q: 'Is mijn Eurostar-ticket geldig tot Brussel-Centraal?',
      a: 'Vaak wel: met een Eurostar-ticket naar Brussel kunt u meestal verder sporen naar de andere Brusselse stations, waaronder Brussel-Centraal. Controleer de vermelding op uw ticket of op eurostar.com.',
    },
    {
      q: 'Wat is de dichtstbijzijnde halte bij Craves Hotel?',
      a: 'Halte Beurs - Grote Markt (trams 3 en 4), op 150 m, of 2 minuten te voet. Metrostation De Brouckère ligt op 350 m.',
    },
    {
      q: 'Kan ik mijn bagage afgeven vóór het inchecken?',
      a: 'Ja, gratis, zowel vóór het inchecken als na het uitchecken. De receptie is 24/7 open.',
    },
  ],
  sources: 'Bronnen: MIVB, NMBS, Eurostar. Informatie gecontroleerd in oktober 2026; lijnen, dienstregelingen en tarieven te bevestigen op stib.be, belgiantrain.be en eurostar.com.',
  tocLabel: 'In dit artikel',
  aside: {
    title: 'Slapen op 2 minuten van halte Beurs',
    text: 'Craves Hotel, 3★-boetiekhotel op 280 m van de Grote Markt. Receptie 24/7, gratis bagageopslag. -10% bij rechtstreeks boeken met de code THANKYOU.',
  },
};

export const MIDI_ARTICLE: Localized<GuideArticle> = { fr: FR, en: EN, nl: NL };
