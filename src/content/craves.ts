import type { Localized, TitleParts } from './localize';

// "Le Craves" section: story, gallery and press share a sub-navigation.

export interface StoryContent {
  metaTitle: string;
  metaDescription: string;
  title: TitleParts;
  intro: { text: string; em: string; after: string };
  facts: { big: string; text: string }[];
  decor: { eyebrow: string; title: TitleParts; text: string };
  experience: { eyebrow: string; title: TitleParts; text: string; roomsCta: string };
  press: { eyebrow: string; cta: string };
}

export interface GalleryContent {
  metaTitle: string;
  metaDescription: string;
  title: TitleParts;
  lead: string;
  filtersLabel: string;
  categories: Record<GalleryCategory | 'all', string>;
  cta: string;
}

export type GalleryCategory = 'rooms' | 'hotel' | 'conteur' | 'scene' | 'area';

export interface PressArticle {
  media: string;
  summary: string;
  language?: string;
  url?: string;
}

export interface PressContent {
  metaTitle: string;
  metaDescription: string;
  title: TitleParts;
  lead: string;
  readCta: string;
  articles: PressArticle[];
  kit: { title: string; text: string; cta: string };
}

export interface CravesSection {
  subnav: string;
  story: StoryContent;
  gallery: GalleryContent;
  press: PressContent;
}

/** Photos of the gallery page, in display order. */
export const GALLERY_PHOTOS: { name: string; category: GalleryCategory }[] = [
  { name: 'craves-hotel-bruxelles-chambre-velours-bleu', category: 'rooms' },
  { name: 'craves-reception-hall', category: 'hotel' },
  { name: 'le-conteur-diner-festif', category: 'conteur' },
  { name: 'craves-papier-peint-floral', category: 'hotel' },
  { name: 'chambre-double-craves-bruxelles-2', category: 'rooms' },
  { name: 'scene-bar-lustres-soiree', category: 'scene' },
  { name: 'craves-couloir-bleu', category: 'hotel' },
  { name: 'le-conteur-pain-tresse-mezze', category: 'conteur' },
  { name: 'chambre-triple-craves-lit-double-et-simple', category: 'rooms' },
  { name: 'craves-rideau-velours-embrasse-or', category: 'hotel' },
  { name: 'scene-bar-enseigne-leopard', category: 'scene' },
  { name: 'chambre-famille-craves-bruxelles', category: 'rooms' },
  { name: 'grand-place-bruxelles-crepuscule', category: 'area' },
  { name: 'craves-applique-lumiere', category: 'hotel' },
  { name: 'le-conteur-cocktail-barman', category: 'conteur' },
  { name: 'chambre-simple-craves-bruxelles', category: 'rooms' },
  { name: 'scene-bar-cocktail-flambe', category: 'scene' },
  { name: 'craves-couloir-moquette-florale', category: 'hotel' },
];

export const CRAVES: Localized<CravesSection> = {
  fr: {
    subnav: 'Le Craves',
    story: {
      metaTitle: 'Notre histoire : un boutique hôtel à la décoration unique | Craves Hotel',
      metaDescription:
        'Le Craves, boutique hôtel 3★ à deux pas de la Grand-Place : velours, marbre et bleu pétrole, 75 chambres climatisées et une expérience sensorielle au cœur de Bruxelles.',
      title: { text: 'Le Craves, un boutique hôtel', em: 'à la décoration unique' },
      intro: {
        text: 'Le Craves vous emmène dans une expérience',
        em: 'sensorielle',
        after: ' : le goût, le toucher, la vue et l’odorat, dans un voyage aussi intime qu’audacieux.',
      },
      facts: [
        { big: '3★', text: 'boutique hôtel' },
        { big: '75', text: 'chambres climatisées' },
        { big: '4', text: 'étages' },
        { big: '2022', text: 'dernière rénovation' },
        { big: '4 min', text: 'de la Grand-Place' },
      ],
      decor: {
        eyebrow: 'Le décor',
        title: { text: 'Velours, marbre', em: 'et bleu pétrole' },
        text: 'Les chambres mêlent chic français et Art déco. Le papier peint floral représente les cinq sens qui éveillent le désir. Velours, marbre et bleu pétrole créent une atmosphère intime et chaleureuse.',
      },
      experience: {
        eyebrow: 'Plus qu’un hôtel',
        title: { text: 'Une expérience,', em: 'au cœur de Bruxelles' },
        text: 'Situé à côté de la Grand-Place, le Craves vous guide dans un voyage aussi intime qu’audacieux. Avec son décor cosy et ses couleurs magnétiques, il intensifie chaque sensation. Le Conteur au rez-de-chaussée et Scène au niveau Atrium prolongent l’expérience.',
        roomsCta: 'Découvrir les chambres',
      },
      press: { eyebrow: 'Ils en parlent', cta: 'Toute la presse' },
    },
    gallery: {
      metaTitle: 'Galerie photos du Craves Hotel à Bruxelles',
      metaDescription: 'Chambres, Le Conteur, Scène et le quartier de la Grand-Place en images : découvrez le Craves Hotel, boutique hôtel 3★ au cœur de Bruxelles.',
      title: { text: 'Galerie', em: 'du Craves Hotel' },
      lead: 'Chambres, Le Conteur, Scène et le quartier de la Grand-Place, en images.',
      filtersLabel: 'Filtrer les photos',
      categories: { all: 'Toutes', rooms: 'Chambres', hotel: 'L’hôtel', conteur: 'Le Conteur', scene: 'Scène', area: 'Le quartier' },
      cta: 'Envie d’y être ?',
    },
    press: {
      metaTitle: 'Le Craves Hotel dans la presse',
      metaDescription: 'Ce que L’Officiel, Flair, Architectura, Sabato et So Soir ont écrit sur le Craves, boutique hôtel à deux pas de la Grand-Place de Bruxelles.',
      title: { text: 'Le Craves Hotel', em: 'dans la presse' },
      lead: 'Ce que les médias belges ont écrit sur le Craves, boutique hôtel à deux pas de la Grand-Place.',
      readCta: 'Lire l’article',
      articles: [
        {
          media: 'L’Officiel',
          summary: 'Un refuge entièrement repensé par le studio londonien Saar Zafrir, son premier projet hôtelier en Belgique : une esthétique sombre et cosy, au charme d’antan, qui rappelle les intérieurs Art déco.',
        },
        {
          media: 'So Soir',
          summary: '« Un véritable écrin de luxe. » Le Conteur prolongé par un hôtel boutique, tous deux mis en beauté par Saar Zafrir Design.',
          language: 'Article en français',
          url: 'https://sosoir.lesoir.be/ce-nouvel-hotel-bruxellois-est-un-veritable-ecrin-de-luxe-moins-de-150-euros-la-nuit',
        },
        {
          media: 'Flair',
          summary: 'Le nouveau boutique hôtel bruxellois, pensé pour éveiller les sens : mobilier, matières et accessoires au charme Art déco.',
          language: 'Article en français',
          url: 'https://www.flair.be/fr/chillax/food/mode-deco-food-3-nouveaux-spots-bruxelles/',
        },
        {
          media: 'Architectura',
          summary: 'Le premier hôtel en Belgique du designer londonien Saar Zafrir : des chambres sombres mais enchanteresses, conçues pour éveiller les sens.',
          language: 'Article en néerlandais',
          url: 'https://www.architectura.be/nl/nieuws/londense-designstudio-saar-zafrir-ontwerpt-boetiekhotel-in-brussel/',
        },
        {
          media: 'Sabato',
          summary: 'Un nouveau venu à deux pas de la Grand-Place, au style chic avec une touche d’Art déco : velours, couleurs sombres et papiers peints floraux.',
        },
      ],
      kit: { title: 'Espace presse', text: 'Photos HD et informations sur l’hôtel, sur demande.', cta: 'Contact presse' },
    },
  },
  en: {
    subnav: 'About Craves',
    story: {
      metaTitle: 'Our story: a boutique hotel with unique style | Craves Hotel',
      metaDescription:
        'Craves, a 3★ boutique hotel near the Grand-Place: velvet, marble and petrol blue, 75 air-conditioned rooms and a sensory experience in central Brussels.',
      title: { text: 'Craves, a boutique hotel', em: 'with a unique style' },
      intro: {
        text: 'Craves takes you on a',
        em: 'sensory',
        after: ' experience: taste, touch, sight and smell, on a journey as intimate as it is bold.',
      },
      facts: [
        { big: '3★', text: 'boutique hotel' },
        { big: '75', text: 'air-conditioned rooms' },
        { big: '4', text: 'floors' },
        { big: '2022', text: 'latest renovation' },
        { big: '4 min', text: 'from the Grand-Place' },
      ],
      decor: {
        eyebrow: 'The décor',
        title: { text: 'Velvet, marble', em: 'and petrol blue' },
        text: 'The rooms blend French chic and Art Deco. The floral wallpaper depicts the five senses that awaken desire. Velvet, marble and petrol blue create an intimate, warm atmosphere.',
      },
      experience: {
        eyebrow: 'More than a hotel',
        title: { text: 'An experience', em: 'in the heart of Brussels' },
        text: 'Right next to the Grand-Place, Craves takes you on a journey as intimate as it is bold. With its cosy décor and magnetic colours, it heightens every sensation. Le Conteur on the ground floor and Scène on the Atrium level extend the experience.',
        roomsCta: 'Discover the rooms',
      },
      press: { eyebrow: 'In the press', cta: 'All press coverage' },
    },
    gallery: {
      metaTitle: 'Photo gallery of Craves Hotel in Brussels',
      metaDescription: 'Rooms, Le Conteur, Scène and the Grand-Place area in pictures: discover Craves Hotel, a 3★ boutique hotel in the heart of Brussels.',
      title: { text: 'Gallery', em: 'of Craves Hotel' },
      lead: 'Rooms, Le Conteur, Scène and the Grand-Place area, in pictures.',
      filtersLabel: 'Filter photos',
      categories: { all: 'All', rooms: 'Rooms', hotel: 'The hotel', conteur: 'Le Conteur', scene: 'Scène', area: 'The area' },
      cta: 'Wish you were here?',
    },
    press: {
      metaTitle: 'Craves Hotel in the press',
      metaDescription: 'What L’Officiel, Flair, Architectura, Sabato and So Soir wrote about Craves, a boutique hotel steps from the Grand-Place in Brussels.',
      title: { text: 'Craves Hotel', em: 'in the press' },
      lead: 'What the Belgian media have written about Craves, a boutique hotel steps from the Grand-Place.',
      readCta: 'Read the article',
      articles: [
        {
          media: 'L’Officiel',
          summary: 'A hideaway entirely reimagined by London studio Saar Zafrir, its first hotel project in Belgium: a dark, cosy aesthetic with old-world charm, reminiscent of Art Deco interiors.',
        },
        {
          media: 'So Soir',
          summary: 'A true jewel box of luxury: Le Conteur extended by a boutique hotel, both styled by Saar Zafrir Design.',
          language: 'Article in French',
          url: 'https://sosoir.lesoir.be/ce-nouvel-hotel-bruxellois-est-un-veritable-ecrin-de-luxe-moins-de-150-euros-la-nuit',
        },
        {
          media: 'Flair',
          summary: 'Brussels’ new boutique hotel, designed to awaken the senses: furniture, materials and accessories with Art Deco charm.',
          language: 'Article in French',
          url: 'https://www.flair.be/fr/chillax/food/mode-deco-food-3-nouveaux-spots-bruxelles/',
        },
        {
          media: 'Architectura',
          summary: 'The first hotel in Belgium by London designer Saar Zafrir: dark yet enchanting rooms, designed to awaken the senses.',
          language: 'Article in Dutch',
          url: 'https://www.architectura.be/nl/nieuws/londense-designstudio-saar-zafrir-ontwerpt-boetiekhotel-in-brussel/',
        },
        {
          media: 'Sabato',
          summary: 'A newcomer steps from the Grand-Place, chic in style with a touch of Art Deco: velvet, dark colours and floral wallpapers.',
        },
      ],
      kit: { title: 'Press room', text: 'HD photos and hotel information, on request.', cta: 'Press contact' },
    },
  },
  nl: {
    subnav: 'Over Craves',
    story: {
      metaTitle: 'Ons verhaal: boetiekhotel met een unieke stijl | Craves Hotel',
      metaDescription:
        'Craves, 3★-boetiekhotel vlak bij de Grote Markt: fluweel, marmer en petrolblauw, 75 kamers met airco en een zintuiglijke ervaring in hartje Brussel.',
      title: { text: 'Craves, een boetiekhotel', em: 'met een unieke stijl' },
      intro: {
        text: 'Craves neemt u mee in een',
        em: 'zintuiglijke',
        after: ' ervaring: smaak, aanraking, zicht en geur, op een reis die even intiem als gedurfd is.',
      },
      facts: [
        { big: '3★', text: 'boetiekhotel' },
        { big: '75', text: 'kamers met airco' },
        { big: '4', text: 'verdiepingen' },
        { big: '2022', text: 'laatste renovatie' },
        { big: '4 min', text: 'van de Grote Markt' },
      ],
      decor: {
        eyebrow: 'Het decor',
        title: { text: 'Fluweel, marmer', em: 'en petrolblauw' },
        text: 'De kamers combineren Franse chic met art deco. Het bloemenbehang verbeeldt de vijf zintuigen die het verlangen wekken. Fluweel, marmer en petrolblauw zorgen voor een intieme, warme sfeer.',
      },
      experience: {
        eyebrow: 'Meer dan een hotel',
        title: { text: 'Een belevenis', em: 'in hartje Brussel' },
        text: 'Craves ligt naast de Grote Markt en neemt u mee op een reis die even intiem als gedurfd is. Met zijn knusse decor en magnetische kleuren versterkt het elke sensatie. Le Conteur op het gelijkvloers en Scène op het Atrium-niveau maken de ervaring compleet.',
        roomsCta: 'Ontdek de kamers',
      },
      press: { eyebrow: 'In de pers', cta: 'Alle persartikelen' },
    },
    gallery: {
      metaTitle: 'Fotogalerij van Craves Hotel in Brussel',
      metaDescription: 'Kamers, Le Conteur, Scène en de buurt van de Grote Markt in beeld: ontdek Craves Hotel, 3★-boetiekhotel in hartje Brussel.',
      title: { text: 'Galerij', em: 'van Craves Hotel' },
      lead: 'Kamers, Le Conteur, Scène en de buurt van de Grote Markt, in beeld.',
      filtersLabel: 'Foto’s filteren',
      categories: { all: 'Alle', rooms: 'Kamers', hotel: 'Het hotel', conteur: 'Le Conteur', scene: 'Scène', area: 'De buurt' },
      cta: 'Zin om erbij te zijn?',
    },
    press: {
      metaTitle: 'Craves Hotel in de pers',
      metaDescription: 'Wat L’Officiel, Flair, Architectura, Sabato en So Soir schreven over Craves, boetiekhotel op een steenworp van de Grote Markt in Brussel.',
      title: { text: 'Craves Hotel', em: 'in de pers' },
      lead: 'Wat de Belgische media schreven over Craves, boetiekhotel op een steenworp van de Grote Markt.',
      readCta: 'Lees het artikel',
      articles: [
        {
          media: 'L’Officiel',
          summary: 'Een toevluchtsoord, volledig opnieuw bedacht door de Londense studio Saar Zafrir, haar eerste hotelproject in België: een donkere, knusse esthetiek met de charme van weleer, die doet denken aan art-deco-interieurs.',
        },
        {
          media: 'So Soir',
          summary: 'Een waar juweeltje van luxe: Le Conteur, aangevuld met een boetiekhotel, beide vormgegeven door Saar Zafrir Design.',
          language: 'Artikel in het Frans',
          url: 'https://sosoir.lesoir.be/ce-nouvel-hotel-bruxellois-est-un-veritable-ecrin-de-luxe-moins-de-150-euros-la-nuit',
        },
        {
          media: 'Flair',
          summary: 'Het nieuwe Brusselse boetiekhotel, ontworpen om de zintuigen te prikkelen: meubilair, materialen en accessoires met art-decocharme.',
          language: 'Artikel in het Frans',
          url: 'https://www.flair.be/fr/chillax/food/mode-deco-food-3-nouveaux-spots-bruxelles/',
        },
        {
          media: 'Architectura',
          summary: 'Het eerste hotel in België van de Londense ontwerper Saar Zafrir: donkere maar betoverende kamers, ontworpen om de zintuigen te prikkelen.',
          language: 'Artikel in het Nederlands',
          url: 'https://www.architectura.be/nl/nieuws/londense-designstudio-saar-zafrir-ontwerpt-boetiekhotel-in-brussel/',
        },
        {
          media: 'Sabato',
          summary: 'Een nieuwkomer op een steenworp van de Grote Markt, met een chique stijl en een vleugje art deco: fluweel, donkere kleuren en bloemenbehang.',
        },
      ],
      kit: { title: 'Persruimte', text: 'HD-foto’s en informatie over het hotel, op aanvraag.', cta: 'Perscontact' },
    },
  },
};
