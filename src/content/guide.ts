import type { FaqItem, Localized, TitleParts } from './localize';
import type { RouteKey } from '../i18n/routes';

export interface GuideIndexContent {
  metaTitle: string;
  metaDescription: string;
  title: TitleParts;
  lead: string;
  featuredLabel: string;
  readCta: string;
  events: { title: TitleParts; items: { when: string; title: string; text: string }[] };
}

/** One sight of a "10 visits" article. Text uses **bold** markers. */
export interface GuidePlace {
  name: string;
  distance: string;
  entry: string;
  paragraphs: string[];
  tip?: string;
  photo?: string;
  schemaType: 'TouristAttraction' | 'Museum' | 'Church';
}

export interface GuideArticle {
  route: RouteKey;
  category: string;
  metaTitle: string;
  metaDescription: string;
  /** Short title for cards and breadcrumb. */
  shortTitle: string;
  title: TitleParts;
  teaser: string;
  heroPhoto: string;
  heroAlt: string;
  byline: string;
  published: string;
  updated: string;
  briefLabel: string;
  brief: string[];
  intro: string;
  overviewTitle: TitleParts;
  overviewHeaders: [string, string, string, string];
  sinceHotel: string;
  tipLabel: string;
  places: GuidePlace[];
  itinerary: { title: TitleParts; steps: string[]; evening: string };
  when: { title: TitleParts; items: string[] };
  faqTitle: TitleParts;
  faq: FaqItem[];
  sources: string;
  tocLabel: string;
  aside: { title: string; text: string };
}

export const GUIDE_INDEX: Localized<GuideIndexContent> = {
  fr: {
    metaTitle: 'Guide de Bruxelles autour de la Grand-Place | Craves Hotel',
    metaDescription: 'Nos adresses et idées de visite à pied depuis le Craves Hotel : Grand-Place, Manneken-Pis, Galeries Saint-Hubert, sorties et grands événements de Bruxelles.',
    title: { text: 'Guide de Bruxelles', em: 'autour de la Grand-Place' },
    lead: 'Nos adresses et idées de visite, à pied depuis le Craves Hotel.',
    featuredLabel: 'À la une',
    readCta: 'Lire l’article →',
    events: {
      title: { text: 'Les grands rendez-vous', em: 'autour de l’hôtel' },
      items: [
        { when: 'Fin novembre – début janvier', title: 'Plaisirs d’Hiver', text: 'Marché de Noël, sapin et illuminations sur la Grand-Place, patinoire place De Brouckère.' },
        { when: 'Début juillet', title: 'Ommegang', text: 'Grand cortège Renaissance et spectacle sur la Grand-Place.' },
        { when: 'Mi-août, les années paires', title: 'Tapis de fleurs', text: 'Un tapis de bégonias recouvre la Grand-Place pendant quatre jours.' },
      ],
    },
  },
};

const GRAND_PLACE_FR: GuideArticle = {
  route: 'guideGrandPlace',
  category: 'Incontournables',
  metaTitle: 'Que faire autour de la Grand-Place ? 10 visites à pied',
  metaDescription: 'Grand-Place, Manneken-Pis, Galeries Saint-Hubert, Belgian Beer World… 10 visites à moins de 11 min à pied, distances réelles et conseils.',
  shortTitle: 'Que faire autour de la Grand-Place',
  title: { text: 'Que faire autour de la Grand-Place :', em: '10 visites à moins de 11 minutes à pied' },
  teaser: 'Grand-Place, Manneken-Pis, Galeries Royales, Belgian Beer World… L’essentiel de Bruxelles tient dans un rayon d’un kilomètre autour de l’hôtel.',
  heroPhoto: 'grand-place-bruxelles-crepuscule',
  heroAlt: 'La Grand-Place de Bruxelles au crépuscule, Hôtel de Ville et maisons des corporations',
  byline: 'Par l’équipe du Craves Hotel · mis à jour le 8 octobre 2026 · 8 min de lecture',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'En bref',
  brief: [
    'Autour de la Grand-Place, **10 incontournables se visitent à pied en moins de 11 minutes**, dont la moitié gratuitement : la place elle-même, l’église Saint-Nicolas, le hall de la Bourse, les Galeries Royales Saint-Hubert, le Manneken-Pis et la cathédrale.',
    'La Grand-Place est **classée au patrimoine mondial de l’UNESCO depuis 1998** et accessible librement, jour et nuit.',
    'Le **vrai Manneken-Pis**, la statue originale de 1619, est exposé à la Maison du Roi, sur la Grand-Place. Celui de la rue est une copie.',
    'Comptez **une demi-journée** pour faire le tour à pied avec quelques visites intérieures. Depuis le Craves Hotel, la Grand-Place est à **280 m (4 minutes)**.',
  ],
  intro:
    'Vous logez dans le centre de Bruxelles et vous voulez tout voir sans prendre le métro ? Bonne nouvelle : l’essentiel se trouve dans un rayon de moins d’un kilomètre autour de la Grand-Place. Voici notre sélection de 10 visites, avec les distances réelles à pied depuis notre hôtel, rue du Marché aux Poulets.',
  overviewTitle: { text: 'Les 10 visites', em: 'en un coup d’œil' },
  overviewHeaders: ['#', 'Lieu', 'À pied du Craves', 'Entrée'],
  sinceHotel: 'depuis l’hôtel',
  tipLabel: 'Notre conseil',
  places: [
    {
      name: 'La Grand-Place et l’Hôtel de Ville',
      distance: '280 m · 4 min',
      entry: 'Place gratuite · Hôtel de Ville payant',
      photo: 'grand-place-bruxelles-hotel-de-ville',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'La Grand-Place est le cœur historique de Bruxelles et l’une des plus belles places du monde. Elle est **classée au patrimoine mondial de l’UNESCO depuis 1998**.',
        'Son histoire est spectaculaire. En **août 1695**, les troupes françaises du maréchal de Villeroy bombardent la ville et détruisent presque toutes les maisons de la place. Seuls la façade et la tour de l’Hôtel de Ville résistent, alors qu’elles servaient de cible à l’artillerie. Les corporations reconstruisent leurs maisons **en à peine cinq ans**, dans un style baroque richement décoré. C’est ce décor que vous voyez aujourd’hui.',
        'L’**Hôtel de Ville**, chef-d’œuvre gothique du XVe siècle (1401–1455), domine la place avec sa tour de **96 mètres** surmontée de saint Michel. On peut le visiter avec un visioguide, et le week-end lors d’une visite guidée qui monte dans la tour.',
      ],
      tip: 'Venez deux fois. Tôt le matin, avant 9 h, pour profiter de la place presque vide. Puis à la nuit tombée, quand les façades s’illuminent.',
    },
    {
      name: 'La Maison du Roi – Musée de la Ville de Bruxelles',
      distance: '275 m · 4 min',
      entry: 'Payant',
      schemaType: 'Museum',
      paragraphs: [
        'Face à l’Hôtel de Ville, ce bâtiment néogothique s’appelle « Maison du Roi » en français et « Broodhuis » (maison du pain) en néerlandais, souvenir de l’ancienne halle au pain. Il abrite le **Musée de la Ville de Bruxelles**, qui raconte l’histoire de la ville et conserve **la statue originale du Manneken-Pis**.',
        'C’est aussi devant ce bâtiment que les comtes d’Egmont et de Hornes, opposés à la politique de Philippe II, ont été décapités en 1568.',
      ],
    },
    {
      name: 'L’église Saint-Nicolas',
      distance: '120 m · 2 min',
      entry: 'Gratuit',
      schemaType: 'Church',
      paragraphs: [
        'La plus proche de l’hôtel. Nichée rue au Beurre, entre la Bourse et la Grand-Place, l’église Saint-Nicolas date d’environ **1125**. C’est l’une des quatre premières églises de Bruxelles et la mieux conservée d’entre elles. Saint Nicolas est le patron des marchands : un clin d’œil au marché au beurre qui se tenait autour de l’église au Moyen Âge, et qui a donné son nom à la rue.',
        'Entrée libre. On y voit la statue originale de saint Nicolas qui ornait la Grand-Place, restaurée en 2018.',
      ],
    },
    {
      name: 'La Bourse et Belgian Beer World',
      distance: '150 m · 2 min',
      entry: 'Hall gratuit · musée payant',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'L’ancienne Bourse de Bruxelles, monument du XIXe siècle sur le boulevard Anspach, a rouvert au public en **septembre 2023**. Ses étages supérieurs accueillent **Belgian Beer World**, un parcours consacré à la culture brassicole belge.',
        'Bon à savoir : le **hall central**, avec ses plafonds à caissons, est **en accès libre**. On peut simplement le traverser.',
      ],
    },
    {
      name: 'Les Galeries Royales Saint-Hubert',
      distance: '380 m · 5 min',
      entry: 'Gratuit',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Inaugurées en **1847** et dessinées par l’architecte **Jean-Pierre Cluysenaar**, ces galeries couvertes de verre et de fonte comptent parmi les plus anciennes d’Europe. Elles réunissent trois passages : la Galerie du Roi, la Galerie de la Reine et la Galerie des Princes.',
        'Chocolatiers, librairies, cafés, un théâtre et un cinéma : c’est la promenade idéale par temps de pluie.',
      ],
    },
    {
      name: 'La rue des Bouchers et Jeanneke-Pis',
      distance: '290–390 m · 4–5 min',
      entry: 'Gratuit',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Au cœur de l’Îlot Sacré, la **rue des Bouchers** aligne ses terrasses de restaurants. Au fond d’une petite impasse voisine, l’impasse de la Fidélité, se cache **Jeanneke-Pis**, la « petite sœur » du Manneken-Pis, installée en 1987.',
      ],
    },
    {
      name: 'Le Manneken-Pis et la GardeRobe MannekenPis',
      distance: '550 m · 7 min',
      entry: 'Statue gratuite · musée payant',
      photo: 'manneken-pis-bruxelles',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Impossible de visiter Bruxelles sans le saluer. La statue de bronze a été réalisée en **1619 par Jérôme Duquesnoy l’Ancien**. Celle que vous voyez à l’angle de la rue de l’Étuve et de la rue du Chêne est une **copie installée en 1965**. L’originale est au Musée de la Ville (voir n° 2).',
        'À 660 m de l’hôtel (9 minutes), la **GardeRobe MannekenPis** expose une partie des plus de 1 000 costumes offerts à la statue au fil des siècles.',
      ],
      tip: 'La statue est petite (environ 55 centimètres). Ne soyez pas surpris, et regardez le calendrier des costumes pour la voir habillée.',
    },
    {
      name: 'La place Sainte-Catherine',
      distance: '410 m · 6 min',
      entry: 'Gratuit',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Côté ouest, l’ancien quartier du port de Bruxelles a gardé son caractère : l’église Sainte-Catherine, signée Joseph Poelaert, des restaurants de poissons et une ambiance de quartier. En fin d’année, la place accueille une partie du marché de Noël « Plaisirs d’Hiver ».',
      ],
    },
    {
      name: 'Le Mont des Arts',
      distance: '740 m · 10 min',
      entry: 'Gratuit · musées payants',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Ce jardin en terrasses relie le bas et le haut de la ville. Il offre l’une des plus belles vues sur la tour de l’Hôtel de Ville. Autour : les **Musées royaux des Beaux-Arts** et le **Musée Magritte**.',
      ],
    },
    {
      name: 'La cathédrale Saints-Michel-et-Gudule',
      distance: '790 m · 11 min',
      entry: 'Gratuit',
      schemaType: 'Church',
      paragraphs: [
        'Construite du XIIIe au XVe siècle, la cathédrale gothique de Bruxelles accueille les grandes cérémonies nationales. Entrée libre. Ne manquez pas ses vitraux du XVIe siècle.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Notre itinéraire à pied', em: 'depuis l’hôtel' },
    steps: [
      '**Église Saint-Nicolas** (2 min de l’hôtel), puis la **Bourse**, juste à côté.',
      'Cap à l’ouest vers la **place Sainte-Catherine**.',
      'Retour par le centre jusqu’aux **Galeries Royales Saint-Hubert**, puis la **rue des Bouchers** et **Jeanneke-Pis**.',
      'Montée vers la **cathédrale**, puis le **Mont des Arts** pour la vue.',
      'Descente vers le **Manneken-Pis**.',
      'Fin en beauté sur la **Grand-Place** et à la **Maison du Roi**, à 4 minutes de l’hôtel.',
    ],
    evening:
      'Le soir, pas besoin d’aller loin : **Le Conteur**, notre restaurant de tapas méditerranéennes, est au rez-de-chaussée de l’hôtel, et **Scène**, notre bar clandestin, au niveau Atrium.',
  },
  when: {
    title: { text: 'Quand visiter', em: 'la Grand-Place ?' },
    items: [
      '**Toute l’année, à toute heure** : la place est ouverte et gratuite. Les plus beaux moments sont tôt le matin et à la tombée de la nuit.',
      '**Fin novembre – début janvier** : **Plaisirs d’Hiver**, le marché de Noël de Bruxelles, avec sapin et illuminations sur la Grand-Place, chalets place Sainte-Catherine et patinoire place De Brouckère. L’édition 2026-2027 se tient du **27 novembre 2026 au 3 janvier 2027**.',
      '**Début juillet** : l’**Ommegang**, grand cortège Renaissance et spectacle sur la Grand-Place.',
      '**Mi-août, les années paires** : le **Tapis de fleurs**, organisé depuis 1971. La prochaine édition est attendue en août 2028.',
    ],
  },
  faqTitle: { text: 'Questions', em: 'fréquentes' },
  faq: [
    { q: 'La Grand-Place est-elle gratuite ?', a: 'Oui. La Grand-Place est une place publique, accessible gratuitement 24h/24. Seules les visites intérieures (Hôtel de Ville, Maison du Roi) sont payantes.' },
    { q: 'Combien de temps faut-il pour visiter autour de la Grand-Place ?', a: 'Comptez 30 minutes pour la place seule, et une demi-journée pour les 10 lieux de cet article à pied, avec une ou deux visites intérieures.' },
    { q: 'Où se trouve le vrai Manneken-Pis ?', a: 'La statue originale de 1619 est conservée au Musée de la Ville de Bruxelles, dans la Maison du Roi, sur la Grand-Place. La statue de la rue de l’Étuve est une copie de 1965.' },
    { q: 'Quelle est la distance entre la Grand-Place et le Manneken-Pis ?', a: 'Environ 300 mètres, soit 4 à 5 minutes à pied par la rue Charles Buls et la rue de l’Étuve.' },
    { q: 'Quel hôtel choisir près de la Grand-Place ?', a: 'Le Craves Hotel est un boutique hôtel 3★ situé rue du Marché aux Poulets, à 280 m (4 minutes à pied) de la Grand-Place. Ses 75 chambres climatisées vont de la chambre simple à la chambre famille de 50 m².' },
    { q: 'Que faire le soir autour de la Grand-Place ?', a: 'Admirer la place illuminée, dîner rue des Bouchers ou dans le quartier Sainte-Catherine, puis prendre un verre. Au Craves, Le Conteur (tapas méditerranéennes) et Scène (bar clandestin) sont dans l’hôtel.' },
  ],
  sources: 'Sources : UNESCO, Ville de Bruxelles (bruxelles.be), Brussels Times, Wikipedia. Informations vérifiées en octobre 2026 ; horaires et tarifs des musées à confirmer sur leurs sites officiels.',
  tocLabel: 'Dans cet article',
  aside: { title: 'Dormir à 4 minutes de la Grand-Place', text: 'Craves Hotel, boutique hôtel 3★, 75 chambres climatisées, réception 24h/24. -10 % en direct avec le code THANKYOU.' },
};

/** Published articles, newest first. */
export const GUIDE_ARTICLES: Localized<GuideArticle>[] = [{ fr: GRAND_PLACE_FR }];
