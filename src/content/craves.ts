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
};
