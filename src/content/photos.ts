import type { Locale } from '../i18n/locales';
import { pick, type Localized } from './localize';

// Alt text of each photo, written once and reused wherever the photo appears.
const FR: Record<string, string> = {
  'craves-hotel-bruxelles-chambre-velours-bleu': 'Chambre du Craves Hotel à Bruxelles : tête de lit en velours bleu, coussin rond et miroir ovale',
  'chambres-craves-hotel-bruxelles': 'Chambre du Craves Hotel avec papier peint floral, tête de lit en velours bleu et ventilateur au plafond',
  'chambre-simple-craves-bruxelles': 'Chambre simple du Craves Hotel avec lit simple, velours bleu et papier peint floral',
  'chambre-simple-craves-bruxelles-2': 'Chambre simple du Craves Hotel, vue vers la porte et la tête de lit',
  'chambre-simple-craves-salle-de-bains': 'Salle de bains de la chambre simple avec douche',
  'chambre-double-craves-bruxelles': 'Chambre double du Craves Hotel : lit, tête de lit en velours bleu et papier peint floral',
  'chambre-double-craves-bruxelles-2': 'Chambre double du Craves Hotel : grand lit, tête de lit en velours bleu et papier peint floral',
  'chambre-double-craves-detail': 'Coiffeuse, cadres anciens et pouf rouge dans la chambre double',
  'chambre-double-craves-salle-de-bains': 'Salle de bains de la chambre double avec baignoire et double vasque',
  'chambre-triple-craves-lit-double-et-simple': 'Chambre triple du Craves Hotel avec un lit double et un lit simple',
  'chambre-triple-craves-banquette': 'Banquette et pouf rouge dans la chambre triple',
  'chambre-triple-craves-service-the': 'Service à thé en porcelaine sur le marbre de la chambre triple',
  'chambre-famille-craves-bruxelles': 'Chambre famille du Craves Hotel avec salon et canapé-lit',
  'chambre-famille-craves-portrait': 'Chambre famille du Craves Hotel avec coin repas et salon',
  'chambre-famille-craves-chambre': 'Lits de la chambre famille, papier peint floral et tête de lit en velours',
  'chambre-famille-craves-coin-repas': 'Kitchenette et coin repas de la chambre famille',
  'le-conteur-bar-restaurant-craves': 'Le bar du restaurant Le Conteur, tabourets orange et étagères de bouteilles',
  'le-conteur-restaurant-craves-bruxelles': 'Convives qui trinquent autour de mezze au restaurant Le Conteur',
  'le-conteur-pain-tresse-mezze': 'Pain tressé au sésame et mezze à partager au Conteur',
  'le-conteur-cocktail-barman': 'Barman du Conteur qui verse un cocktail aux baies',
  'le-conteur-poisson-grille': 'Poisson grillé servi dans une assiette en faïence bleue',
  'le-conteur-applique-laiton': 'Applique en laiton sur le carrelage blanc du Conteur',
  'le-conteur-diner-festif': 'Convives qui trinquent au vin rouge autour d’une table du Conteur',
  'le-conteur-cocktail-ambre': 'Cocktail ambré au citron séché et à la cannelle',
  'scene-bar-craves-bruxelles': 'Le comptoir lumineux du bar Scène, au niveau Atrium du Craves',
  'scene-bar-enseigne-leopard': 'Enseigne Scène sur fond léopard, lumière rouge',
  'scene-bar-cocktail-flambe': 'Cocktail flambé servi dans une tête de mort colorée au bar Scène',
  'scene-bar-dj-soiree': 'Soirée DJ au bar Scène',
  'scene-bar-neon': 'Néon rouge à l’entrée du bar Scène',
  'scene-bar-lustres-soiree': 'Salle de Scène sous les lustres, soirée privée',
  'grand-place-bruxelles-crepuscule': 'La Grand-Place de Bruxelles au crépuscule, à 4 minutes à pied du Craves Hotel',
  'grand-place-bruxelles-hotel-de-ville': 'L’Hôtel de Ville sur la Grand-Place de Bruxelles, à 4 minutes à pied du Craves',
  'manneken-pis-bruxelles': 'La statue du Manneken-Pis à Bruxelles',
  'palais-de-justice-bruxelles': 'Colonnes du Palais de Justice de Bruxelles',
};

const ALTS: Localized<Record<string, string>> = { fr: FR };

export function altFor(name: string, locale: Locale): string {
  const alt = pick(ALTS, locale)[name] ?? FR[name];
  if (alt === undefined) throw new Error(`Missing alt text for photo "${name}" in src/content/photos.ts`);
  return alt;
}
