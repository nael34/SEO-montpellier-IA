/**
 * =============================================================================
 * SEO PROGRAMMATIQUE — Données de base
 * =============================================================================
 *
 * Ce fichier centralise les listes de métiers et de villes utilisées pour
 * générer automatiquement toutes les pages SEO programmatiques.
 *
 * Pour ajouter une nouvelle page, il suffit d'ajouter un métier ou une ville
 * dans la liste correspondante. Le build Next.js se chargera de générer
 * les nouvelles routes statiques automatiquement.
 *
 * Domaine cible : montpellier-ia.dev
 */

// --------------------------------------------------------------------------
// Liste des métiers ciblés
// --------------------------------------------------------------------------
export const metiers = [
  "plombier",
  "avocat",
  "expert-comptable",
  "serrurier",
];

// --------------------------------------------------------------------------
// Liste des villes ciblées
// --------------------------------------------------------------------------
export const villes = [
  "montpellier",
  "gignac",
  "beziers",
  "sete",
];

// --------------------------------------------------------------------------
// URL de base du site (utilisée pour le sitemap et les balises canonical)
// --------------------------------------------------------------------------
export const BASE_URL = "https://montpellier-ia.dev";

// --------------------------------------------------------------------------
// Helper : génère toutes les combinaisons métier + ville
// Retourne un tableau d'objets { metier, ville }
// --------------------------------------------------------------------------
export function getAllCombinations() {
  const combinations = [];
  for (const metier of metiers) {
    for (const ville of villes) {
      combinations.push({ metier, ville });
    }
  }
  return combinations;
}
