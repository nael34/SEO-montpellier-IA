/**
 * =============================================================================
 * SITEMAP.XML — Génération automatique
 * =============================================================================
 *
 * Ce fichier génère automatiquement le sitemap.xml du site.
 * Next.js (App Router) détecte ce fichier et crée la route /sitemap.xml.
 *
 * Le sitemap inclut :
 *   - La page d'accueil
 *   - Toutes les pages SEO programmatiques (métier + ville)
 *
 * Google utilise ce fichier pour découvrir et indexer toutes les pages.
 *
 * Domaine : montpellier-ia.dev
 */

import { getAllCombinations, BASE_URL } from "@/data/seo-data";

export default function sitemap() {
  // Date de dernière modification (utilisée par Google pour le crawl)
  const lastModified = new Date();

  // ── Page d'accueil ──
  const homepage = {
    url: BASE_URL,
    lastModified,
    changeFrequency: "monthly",
    priority: 1.0,
  };

  // ── Pages SEO programmatiques (toutes les combinaisons métier + ville) ──
  const seoPages = getAllCombinations().map(({ metier, ville }) => ({
    url: `${BASE_URL}/${metier}-a-${ville}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ── Retourne toutes les URLs ──
  return [homepage, ...seoPages];
}
