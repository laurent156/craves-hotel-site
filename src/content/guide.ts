import type { FaqItem, Localized, TitleParts } from './localize';
import { MIDI_ARTICLE } from './guide/midi';
import { WINTER_ARTICLE } from './guide/winter';
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
  /** schema.org type when the item is a place (listed as ItemList); omit for non-places (transport options…). */
  schemaType?: 'TouristAttraction' | 'Museum' | 'Church' | 'Place';
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
        { when: 'Fin novembre – début janvier', title: 'Plaisirs d’Hiver', text: 'Marché de Noël, sapin et son et lumière sur la Grand-Place, grande roue au Marché aux Poissons.' },
        { when: 'Début juillet', title: 'Ommegang', text: 'Grand cortège Renaissance et spectacle sur la Grand-Place.' },
        { when: 'Mi-août, les années paires', title: 'Tapis de fleurs', text: 'Un tapis de bégonias recouvre la Grand-Place pendant quatre jours.' },
      ],
    },
  },
  en: {
    metaTitle: 'Brussels Guide around the Grand-Place | Craves Hotel',
    metaDescription: 'Our favourite addresses and walking ideas from Craves Hotel: Grand-Place, Manneken Pis, Saint-Hubert Galleries, nights out and big Brussels events.',
    title: { text: 'Brussels guide', em: 'around the Grand-Place' },
    lead: 'Our favourite addresses and sightseeing ideas, all on foot from Craves Hotel.',
    featuredLabel: 'Featured',
    readCta: 'Read the article →',
    events: {
      title: { text: 'Highlights of the year', em: 'around the hotel' },
      items: [
        { when: 'Late November – early January', title: 'Winter Wonders (Plaisirs d’Hiver)', text: 'Christmas market, tree and sound-and-light show on the Grand-Place, Ferris wheel at the Marché aux Poissons.' },
        { when: 'Early July', title: 'Ommegang', text: 'A grand Renaissance procession and show on the Grand-Place.' },
        { when: 'Mid-August, even-numbered years', title: 'Flower Carpet', text: 'A carpet of begonias covers the Grand-Place for four days.' },
      ],
    },
  },
  nl: {
    metaTitle: 'Gids voor Brussel rond de Grote Markt | Craves Hotel',
    metaDescription: 'Onze adressen en wandeltips vanuit Craves Hotel: Grote Markt, Manneken Pis, Sint-Hubertusgalerijen, uitgaan en de grote evenementen van Brussel.',
    title: { text: 'Gids voor Brussel', em: 'rond de Grote Markt' },
    lead: 'Onze adressen en ideeën om te bezoeken, te voet vanuit Craves Hotel.',
    featuredLabel: 'Uitgelicht',
    readCta: 'Lees het artikel →',
    events: {
      title: { text: 'De grote afspraken', em: 'rond het hotel' },
      items: [
        { when: 'Eind november – begin januari', title: 'Winterpret (Plaisirs d’Hiver)', text: 'Kerstmarkt, kerstboom en klank-en-lichtspel op de Grote Markt, reuzenrad op de Vismarkt.' },
        { when: 'Begin juli', title: 'Ommegang', text: 'Grote renaissancestoet en spektakel op de Grote Markt.' },
        { when: 'Half augustus, in even jaren', title: 'Bloementapijt', text: 'Vier dagen lang bedekt een tapijt van begonia’s de Grote Markt.' },
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
      '**Fin novembre – début janvier** : **Plaisirs d’Hiver**, le marché de Noël de Bruxelles, avec sapin et illuminations sur la Grand-Place, chalets place Sainte-Catherine et grande roue au Marché aux Poissons. L’édition 2026-2027 se tient du **27 novembre 2026 au 3 janvier 2027**.',
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

const GRAND_PLACE_EN: GuideArticle = {
  route: 'guideGrandPlace',
  category: 'Must-sees',
  metaTitle: 'Things to Do Near the Grand-Place: 10 Sights on Foot',
  metaDescription: 'Grand-Place, Manneken Pis, Saint-Hubert Galleries, Belgian Beer World… 10 things to do within 11 minutes’ walk, with real distances and tips.',
  shortTitle: 'Things to do near the Grand-Place',
  title: { text: 'Things to do near the Grand-Place:', em: '10 sights within 11 minutes’ walk' },
  teaser: 'Grand-Place, Manneken Pis, the Royal Galleries, Belgian Beer World… The best of Brussels lies within a kilometre of the hotel.',
  heroPhoto: 'grand-place-bruxelles-crepuscule',
  heroAlt: 'The Grand-Place in Brussels at dusk, with the Town Hall and the guild houses',
  byline: 'By the Craves Hotel team · updated 8 October 2026 · 8 min read',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'In short',
  brief: [
    'Around the Grand-Place, **10 must-sees are within an 11-minute walk**, and half of them are free: the square itself, St Nicholas’ Church, the Bourse hall, the Royal Saint-Hubert Galleries, Manneken Pis and the cathedral.',
    'The Grand-Place has been a **UNESCO World Heritage Site since 1998** and is open to all, day and night.',
    'The **real Manneken Pis**, the original 1619 statue, is on display in the King’s House (Maison du Roi), on the Grand-Place. The one on the street corner is a copy.',
    'Allow **half a day** to see it all on foot, with a few visits inside. From Craves Hotel, the Grand-Place is just **280 m away (4 minutes)**.',
  ],
  intro:
    'Staying in the centre of Brussels and keen to see everything without taking the metro? Good news: the essentials all lie within a kilometre of the Grand-Place. Here is our pick of 10 sights, with real walking distances from our hotel on Rue du Marché aux Poulets.',
  overviewTitle: { text: 'The 10 sights', em: 'at a glance' },
  overviewHeaders: ['#', 'Sight', 'On foot from Craves', 'Entry'],
  sinceHotel: 'from the hotel',
  tipLabel: 'Our tip',
  places: [
    {
      name: 'The Grand-Place and the Town Hall',
      distance: '280 m · 4 min',
      entry: 'Square free · Town Hall ticketed',
      photo: 'grand-place-bruxelles-hotel-de-ville',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'The Grand-Place is the historic heart of Brussels and one of the most beautiful squares in the world. It has been a **UNESCO World Heritage Site since 1998**.',
        'Its story is a dramatic one. In **August 1695**, French troops under Marshal de Villeroy bombarded the city and destroyed almost every house on the square. Only the façade and tower of the Town Hall survived, even though the artillery had used them as a target. The guilds rebuilt their houses **in barely five years**, in a lavishly ornate Baroque style. That is the scene you see today.',
        'The **Town Hall**, a 15th-century Gothic masterpiece (1401–1455), towers over the square with its **96-metre** spire crowned by Saint Michael. You can visit it with a video guide, and at weekends on a guided tour that climbs the tower.',
      ],
      tip: 'Come twice. Early in the morning, before 9:00, to enjoy a near-empty square. Then after dark, when the façades are lit up.',
    },
    {
      name: 'The King’s House – Brussels City Museum',
      distance: '275 m · 4 min',
      entry: 'Ticketed',
      schemaType: 'Museum',
      paragraphs: [
        'Opposite the Town Hall, this neo-Gothic building is called the “Maison du Roi” (King’s House) in French and the “Broodhuis” (Bread House) in Dutch, a nod to the bread hall that once stood here. It houses the **Brussels City Museum**, which tells the story of the city and keeps **the original Manneken Pis statue**.',
        'It was also in front of this building that the Counts of Egmont and Hornes, who opposed the policies of Philip II, were beheaded in 1568.',
      ],
    },
    {
      name: 'St Nicholas’ Church',
      distance: '120 m · 2 min',
      entry: 'Free',
      schemaType: 'Church',
      paragraphs: [
        'The closest sight to the hotel. Tucked away on Rue au Beurre (Butter Street), between the Bourse and the Grand-Place, St Nicholas’ Church dates from around **1125**. It is one of the four oldest churches in Brussels and the best preserved of them. Saint Nicholas is the patron saint of merchants: a fitting nod to the butter market held around the church in the Middle Ages, which also gave the street its name.',
        'Free entry. Inside you can see the original statue of Saint Nicholas that once adorned the Grand-Place, restored in 2018.',
      ],
    },
    {
      name: 'The Bourse and Belgian Beer World',
      distance: '150 m · 2 min',
      entry: 'Hall free · museum ticketed',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'The former Brussels Stock Exchange, a 19th-century landmark on Boulevard Anspach, reopened to the public in **September 2023**. Its upper floors are home to **Belgian Beer World**, an experience devoted to Belgian brewing culture.',
        'Good to know: the **central hall**, with its coffered ceilings, is **free to enter**. You can simply walk through it.',
      ],
    },
    {
      name: 'The Royal Saint-Hubert Galleries',
      distance: '380 m · 5 min',
      entry: 'Free',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Opened in **1847** and designed by the architect **Jean-Pierre Cluysenaar**, these glass-and-cast-iron arcades are among the oldest in Europe. They bring together three passages: the Galerie du Roi, the Galerie de la Reine and the Galerie des Princes.',
        'Chocolatiers, bookshops, cafés, a theatre and a cinema: the perfect stroll on a rainy day.',
      ],
    },
    {
      name: 'Rue des Bouchers and Jeanneke Pis',
      distance: '290–390 m · 4–5 min',
      entry: 'Free',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'In the heart of the Îlot Sacré, **Rue des Bouchers** is lined with restaurant terraces. At the end of a small cul-de-sac nearby, the Impasse de la Fidélité, hides **Jeanneke Pis**, Manneken Pis’s “little sister”, installed in 1987.',
      ],
    },
    {
      name: 'Manneken Pis and the GardeRobe MannekenPis',
      distance: '550 m · 7 min',
      entry: 'Statue free · museum ticketed',
      photo: 'manneken-pis-bruxelles',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'No visit to Brussels is complete without saying hello. The bronze statue was made in **1619 by Jérôme Duquesnoy the Elder**. The one you see on the corner of Rue de l’Étuve and Rue du Chêne is a **copy installed in 1965**. The original is in the City Museum (see no. 2).',
        'Some 660 m from the hotel (9 minutes), the **GardeRobe MannekenPis** displays a selection of the more than 1,000 costumes given to the statue over the centuries.',
      ],
      tip: 'The statue is small (about 55 centimetres), so don’t be surprised. Check the costume calendar to catch him dressed up.',
    },
    {
      name: 'Place Sainte-Catherine',
      distance: '410 m · 6 min',
      entry: 'Free',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'To the west, the old port district of Brussels has kept its character: St Catherine’s Church, designed by Joseph Poelaert, seafood restaurants and a real neighbourhood feel. At the end of the year, the square hosts part of the Winter Wonders (Plaisirs d’Hiver) Christmas market.',
      ],
    },
    {
      name: 'Mont des Arts',
      distance: '740 m · 10 min',
      entry: 'Free · museums ticketed',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'This terraced garden links the lower and upper town. It offers one of the finest views of the Town Hall tower. All around: the **Royal Museums of Fine Arts** and the **Magritte Museum**.',
      ],
    },
    {
      name: 'St Michael and St Gudula Cathedral',
      distance: '790 m · 11 min',
      entry: 'Free',
      schemaType: 'Church',
      paragraphs: [
        'Built between the 13th and 15th centuries, the Gothic cathedral of Brussels hosts the country’s great national ceremonies. Free entry. Don’t miss its 16th-century stained-glass windows.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Our walking route', em: 'from the hotel' },
    steps: [
      '**St Nicholas’ Church** (2 min from the hotel), then the **Bourse**, right next door.',
      'Head west to **Place Sainte-Catherine**.',
      'Back through the centre to the **Royal Saint-Hubert Galleries**, then **Rue des Bouchers** and **Jeanneke Pis**.',
      'Walk up to the **cathedral**, then on to the **Mont des Arts** for the view.',
      'Stroll down to **Manneken Pis**.',
      'Finish in style on the **Grand-Place** and at the **King’s House**, 4 minutes from the hotel.',
    ],
    evening:
      'In the evening, there’s no need to go far: **Le Conteur**, our Mediterranean tapas restaurant, is on the hotel’s ground floor, and **Scène**, our speakeasy bar, is on the Atrium level.',
  },
  when: {
    title: { text: 'When to visit', em: 'the Grand-Place' },
    items: [
      '**All year round, at any hour**: the square is always open and free. The loveliest moments are early in the morning and at nightfall.',
      '**Late November – early January**: **Winter Wonders (Plaisirs d’Hiver)**, the Brussels Christmas market, with a tree and illuminations on the Grand-Place, chalets on Place Sainte-Catherine and a Ferris wheel at the Marché aux Poissons. The 2026-2027 edition runs from **27 November 2026 to 3 January 2027**.',
      '**Early July**: the **Ommegang**, a grand Renaissance procession and show on the Grand-Place.',
      '**Mid-August, in even-numbered years**: the **Flower Carpet**, held since 1971. The next edition is expected in August 2028.',
    ],
  },
  faqTitle: { text: 'Frequently asked', em: 'questions' },
  faq: [
    { q: 'Is the Grand-Place free to visit?', a: 'Yes. The Grand-Place is a public square, open free of charge 24/7. Only visits inside the buildings (Town Hall, King’s House) are ticketed.' },
    { q: 'How long does it take to explore around the Grand-Place?', a: 'Allow 30 minutes for the square alone, and half a day to see the 10 sights in this article on foot, with one or two visits inside.' },
    { q: 'Where is the real Manneken Pis?', a: 'The original 1619 statue is kept in the Brussels City Museum, inside the King’s House on the Grand-Place. The statue on Rue de l’Étuve is a 1965 copy.' },
    { q: 'How far is Manneken Pis from the Grand-Place?', a: 'About 300 metres, or a 4 to 5-minute walk via Rue Charles Buls and Rue de l’Étuve.' },
    { q: 'Which hotel should I choose near the Grand-Place?', a: 'Craves Hotel is a 3★ boutique hotel on Rue du Marché aux Poulets, 280 m (a 4-minute walk) from the Grand-Place. Its 75 air-conditioned rooms range from single rooms to a 50 m² family room.' },
    { q: 'What is there to do in the evening around the Grand-Place?', a: 'Admire the illuminated square, have dinner on Rue des Bouchers or in the Sainte-Catherine district, then enjoy a drink. At Craves, Le Conteur (Mediterranean tapas) and Scène (speakeasy bar) are right inside the hotel.' },
  ],
  sources: 'Sources: UNESCO, City of Brussels (bruxelles.be), Brussels Times, Wikipedia. Information checked in October 2026; museum opening hours and prices to be confirmed on their official websites.',
  tocLabel: 'In this article',
  aside: { title: 'Stay 4 minutes from the Grand-Place', text: 'Craves Hotel, 3★ boutique hotel, 75 air-conditioned rooms, 24-hour reception. -10% when you book direct with the code THANKYOU.' },
};

const GRAND_PLACE_NL: GuideArticle = {
  route: 'guideGrandPlace',
  category: 'Niet te missen',
  metaTitle: 'Wat te doen rond de Grote Markt in Brussel? 10 tips te voet',
  metaDescription: 'Grote Markt, Manneken Pis, Sint-Hubertusgalerijen, Belgian Beer World… 10 bezienswaardigheden op max. 11 min wandelen, met echte afstanden en tips.',
  shortTitle: 'Wat te doen rond de Grote Markt',
  title: { text: 'Wat te doen rond de Grote Markt:', em: '10 bezienswaardigheden op minder dan 11 minuten wandelen' },
  teaser: 'Grote Markt, Manneken Pis, Koninklijke Galerijen, Belgian Beer World… Het mooiste van Brussel ligt binnen een kilometer rond het hotel.',
  heroPhoto: 'grand-place-bruxelles-crepuscule',
  heroAlt: 'De Grote Markt van Brussel bij valavond, met het Stadhuis en de gildehuizen',
  byline: 'Door het team van Craves Hotel · bijgewerkt op 8 oktober 2026 · 8 min leestijd',
  published: '2026-10-08',
  updated: '2026-10-08',
  briefLabel: 'In het kort',
  brief: [
    'Rond de Grote Markt liggen **10 toppers op minder dan 11 minuten wandelen**, waarvan de helft gratis: het plein zelf, de Sint-Niklaaskerk, de hal van de Beurs, de Koninklijke Sint-Hubertusgalerijen, Manneken Pis en de kathedraal.',
    'De Grote Markt staat **sinds 1998 op de Werelderfgoedlijst van UNESCO** en is dag en nacht vrij toegankelijk.',
    'De **echte Manneken Pis**, het originele beeldje uit 1619, staat in het Broodhuis, op de Grote Markt. Het beeldje op straat is een kopie.',
    'Reken op **een halve dag** om alles te voet te zien, met enkele bezoeken binnen. Vanuit Craves Hotel ligt de Grote Markt op **280 m (4 minuten)**.',
  ],
  intro:
    'U logeert in het centrum van Brussel en wilt alles zien zonder de metro te nemen? Goed nieuws: het belangrijkste ligt binnen een straal van minder dan een kilometer rond de Grote Markt. Hier is onze selectie van 10 bezienswaardigheden, met de echte wandelafstanden vanaf ons hotel in de Rue du Marché aux Poulets.',
  overviewTitle: { text: 'De 10 bezienswaardigheden', em: 'in één oogopslag' },
  overviewHeaders: ['#', 'Plek', 'Te voet vanaf Craves', 'Toegang'],
  sinceHotel: 'vanaf het hotel',
  tipLabel: 'Onze tip',
  places: [
    {
      name: 'De Grote Markt en het Stadhuis',
      distance: '280 m · 4 min',
      entry: 'Plein gratis · Stadhuis betalend',
      photo: 'grand-place-bruxelles-hotel-de-ville',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'De Grote Markt is het historische hart van Brussel en een van de mooiste pleinen ter wereld. Ze staat **sinds 1998 op de Werelderfgoedlijst van UNESCO**.',
        'Haar geschiedenis is spectaculair. In **augustus 1695** bombarderen de Franse troepen van maarschalk de Villeroy de stad en verwoesten ze bijna alle huizen op het plein. Alleen de gevel en de toren van het Stadhuis blijven overeind, hoewel ze de artillerie als mikpunt dienden. De gilden bouwen hun huizen **in amper vijf jaar** weer op, in een rijk versierde barokstijl. Dat is het decor dat u vandaag ziet.',
        'Het **Stadhuis**, een gotisch meesterwerk uit de 15de eeuw (1401–1455), torent boven het plein uit met zijn toren van **96 meter**, bekroond door Sint-Michiel. U kunt het bezoeken met een videogids, en in het weekend tijdens een rondleiding die de toren in gaat.',
      ],
      tip: 'Kom twee keer. Vroeg in de ochtend, vóór 9 uur, om van een bijna leeg plein te genieten. En opnieuw bij het vallen van de avond, wanneer de gevels verlicht worden.',
    },
    {
      name: 'Het Broodhuis – Museum van de Stad Brussel',
      distance: '275 m · 4 min',
      entry: 'Betalend',
      schemaType: 'Museum',
      paragraphs: [
        'Tegenover het Stadhuis staat dit neogotische gebouw, in het Nederlands “Broodhuis” genoemd naar de vroegere broodhal, en in het Frans “Maison du Roi” (Koningshuis). Het herbergt het **Museum van de Stad Brussel**, dat de geschiedenis van de stad vertelt en **het originele beeldje van Manneken Pis** bewaart.',
        'Het was ook voor dit gebouw dat de graven van Egmont en Horne, tegenstanders van de politiek van Filips II, in 1568 werden onthoofd.',
      ],
    },
    {
      name: 'De Sint-Niklaaskerk',
      distance: '120 m · 2 min',
      entry: 'Gratis',
      schemaType: 'Church',
      paragraphs: [
        'De dichtstbijzijnde bezienswaardigheid. In de Boterstraat, tussen de Beurs en de Grote Markt, ligt de Sint-Niklaaskerk, die dateert van rond **1125**. Het is een van de vier eerste kerken van Brussel en de best bewaarde van allemaal. Sint-Niklaas is de patroonheilige van de kooplieden: een knipoog naar de botermarkt die in de middeleeuwen rond de kerk werd gehouden en die de straat haar naam gaf.',
        'Vrije toegang. U ziet er het originele beeld van Sint-Niklaas dat vroeger de Grote Markt sierde, gerestaureerd in 2018.',
      ],
    },
    {
      name: 'De Beurs en Belgian Beer World',
      distance: '150 m · 2 min',
      entry: 'Hal gratis · museum betalend',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'De voormalige Beurs van Brussel, een monument uit de 19de eeuw aan de Anspachlaan, is sinds **september 2023** weer open voor het publiek. Op de bovenverdiepingen vindt u **Belgian Beer World**, een parcours over de Belgische biercultuur.',
        'Goed om weten: de **centrale hal**, met haar cassetteplafonds, is **vrij toegankelijk**. U kunt er gewoon doorheen wandelen.',
      ],
    },
    {
      name: 'De Koninklijke Sint-Hubertusgalerijen',
      distance: '380 m · 5 min',
      entry: 'Gratis',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Deze overdekte galerijen van glas en gietijzer, ingehuldigd in **1847** en ontworpen door architect **Jean-Pierre Cluysenaar**, behoren tot de oudste van Europa. Ze bestaan uit drie doorgangen: de Koningsgalerij, de Koninginnegalerij en de Prinsengalerij.',
        'Chocolatiers, boekhandels, cafés, een theater en een bioscoop: de ideale wandeling bij regenweer.',
      ],
    },
    {
      name: 'De Beenhouwersstraat en Jeanneke Pis',
      distance: '290–390 m · 4–5 min',
      entry: 'Gratis',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'In het hart van het Ilot Sacré rijgen de restaurantterrassen van de **Beenhouwersstraat** zich aaneen. Achteraan in een klein steegje vlakbij, de Getrouwheidsgang, verstopt zich **Jeanneke Pis**, het “zusje” van Manneken Pis, geplaatst in 1987.',
      ],
    },
    {
      name: 'Manneken Pis en GardeRobe MannekenPis',
      distance: '550 m · 7 min',
      entry: 'Beeldje gratis · museum betalend',
      photo: 'manneken-pis-bruxelles',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Een bezoek aan Brussel is niet compleet zonder hem te begroeten. Het bronzen beeldje werd in **1619 gemaakt door Hiëronymus Duquesnoy de Oude**. Het exemplaar op de hoek van de Stoofstraat en de Eikstraat is een **kopie uit 1965**. Het origineel staat in het Museum van de Stad Brussel (zie nr. 2).',
        'Op 660 m van het hotel (9 minuten) toont **GardeRobe MannekenPis** een deel van de meer dan 1.000 kostuums die het beeldje door de eeuwen heen kreeg.',
      ],
      tip: 'Het beeldje is klein (ongeveer 55 centimeter), dus wees niet verrast. Bekijk de kostuumkalender om hem aangekleed te zien.',
    },
    {
      name: 'Het Sint-Katelijneplein',
      distance: '410 m · 6 min',
      entry: 'Gratis',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Aan de westkant heeft de oude havenwijk van Brussel haar karakter behouden: de Sint-Katelijnekerk van Joseph Poelaert, visrestaurants en een echte buurtsfeer. Op het einde van het jaar ontvangt het plein een deel van de kerstmarkt Winterpret (Plaisirs d’Hiver).',
      ],
    },
    {
      name: 'De Kunstberg',
      distance: '740 m · 10 min',
      entry: 'Gratis · musea betalend',
      schemaType: 'TouristAttraction',
      paragraphs: [
        'Deze terrastuin verbindt de beneden- en de bovenstad. Hij biedt een van de mooiste uitzichten op de toren van het Stadhuis. In de buurt: de **Koninklijke Musea voor Schone Kunsten** en het **Magritte Museum**.',
      ],
    },
    {
      name: 'De Sint-Michiels-en-Sint-Goedelekathedraal',
      distance: '790 m · 11 min',
      entry: 'Gratis',
      schemaType: 'Church',
      paragraphs: [
        'De gotische kathedraal van Brussel, gebouwd van de 13de tot de 15de eeuw, is het decor van de grote nationale plechtigheden. Vrije toegang. Mis zeker de glasramen uit de 16de eeuw niet.',
      ],
    },
  ],
  itinerary: {
    title: { text: 'Onze wandelroute', em: 'vanuit het hotel' },
    steps: [
      '**Sint-Niklaaskerk** (2 min van het hotel), dan de **Beurs**, vlak ernaast.',
      'Richting westen naar het **Sint-Katelijneplein**.',
      'Terug door het centrum naar de **Koninklijke Sint-Hubertusgalerijen**, dan de **Beenhouwersstraat** en **Jeanneke Pis**.',
      'Naar boven naar de **Sint-Goedelekathedraal**, dan de **Kunstberg** voor het uitzicht.',
      'Naar beneden naar **Manneken Pis**.',
      'Mooie afsluiter op de **Grote Markt** en in het **Broodhuis**, op 4 minuten van het hotel.',
    ],
    evening:
      '’s Avonds hoeft u niet ver te gaan: **Le Conteur**, ons restaurant met mediterrane tapas, ligt op de benedenverdieping van het hotel, en **Scène**, onze speakeasybar, op het Atrium-niveau.',
  },
  when: {
    title: { text: 'Wanneer bezoekt u', em: 'de Grote Markt?' },
    items: [
      '**Het hele jaar door, op elk uur**: het plein is altijd open en gratis. De mooiste momenten zijn vroeg in de ochtend en bij het vallen van de avond.',
      '**Eind november – begin januari**: **Winterpret (Plaisirs d’Hiver)**, de Brusselse kerstmarkt, met kerstboom en verlichting op de Grote Markt, chalets op het Sint-Katelijneplein en een reuzenrad op de Vismarkt. De editie 2026-2027 loopt van **27 november 2026 tot 3 januari 2027**.',
      '**Begin juli**: de **Ommegang**, een grote renaissancestoet en spektakel op de Grote Markt.',
      '**Half augustus, in even jaren**: het **Bloementapijt**, dat sinds 1971 wordt aangelegd. De volgende editie wordt verwacht in augustus 2028.',
    ],
  },
  faqTitle: { text: 'Veelgestelde', em: 'vragen' },
  faq: [
    { q: 'Is de Grote Markt gratis?', a: 'Ja. De Grote Markt is een openbaar plein, gratis toegankelijk, 24 uur op 24. Enkel de bezoeken binnen (Stadhuis, Broodhuis) zijn betalend.' },
    { q: 'Hoeveel tijd heeft u nodig om de omgeving van de Grote Markt te bezoeken?', a: 'Reken op 30 minuten voor het plein alleen, en een halve dag voor de 10 plekken uit dit artikel te voet, met een of twee bezoeken binnen.' },
    { q: 'Waar staat de echte Manneken Pis?', a: 'Het originele beeldje uit 1619 wordt bewaard in het Museum van de Stad Brussel, in het Broodhuis op de Grote Markt. Het beeldje in de Stoofstraat is een kopie uit 1965.' },
    { q: 'Hoe ver is Manneken Pis van de Grote Markt?', a: 'Ongeveer 300 meter, of 4 à 5 minuten wandelen via de Karel Bulsstraat en de Stoofstraat.' },
    { q: 'Welk hotel kiest u bij de Grote Markt?', a: 'Craves Hotel is een 3★-boetiekhotel in de Rue du Marché aux Poulets, op 280 m (4 minuten te voet) van de Grote Markt. De 75 kamers met airco gaan van de eenpersoonskamer tot de familiekamer van 50 m².' },
    { q: 'Wat te doen ’s avonds rond de Grote Markt?', a: 'Het verlichte plein bewonderen, dineren in de Beenhouwersstraat of in de wijk rond het Sint-Katelijneplein, en daarna iets drinken. Bij Craves vindt u Le Conteur (mediterrane tapas) en Scène (speakeasybar) in het hotel zelf.' },
  ],
  sources: 'Bronnen: UNESCO, Stad Brussel (bruxelles.be), Brussels Times, Wikipedia. Informatie gecontroleerd in oktober 2026; openingsuren en tarieven van de musea te bevestigen op hun officiële websites.',
  tocLabel: 'In dit artikel',
  aside: { title: 'Slapen op 4 minuten van de Grote Markt', text: 'Craves Hotel, 3★-boetiekhotel, 75 kamers met airco, receptie 24 uur per dag. -10% bij rechtstreeks boeken met de code THANKYOU.' },
};

/** Published articles, newest first. */
// The first one is featured on the guide page.
export const GUIDE_ARTICLES: Localized<GuideArticle>[] = [
  { fr: GRAND_PLACE_FR, en: GRAND_PLACE_EN, nl: GRAND_PLACE_NL },
  WINTER_ARTICLE,
  MIDI_ARTICLE,
];
