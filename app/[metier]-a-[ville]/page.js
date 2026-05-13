/**
 * =============================================================================
 * PAGE DYNAMIQUE SEO — /[metier]-a-[ville]
 * =============================================================================
 *
 * Route dynamique Next.js (App Router) qui génère une page statique pour
 * chaque combinaison métier + ville lors du build (SSG).
 *
 * Exemples de routes générées :
 *   /plombier-a-montpellier
 *   /avocat-a-gignac
 *   /expert-comptable-a-beziers
 *   /serrurier-a-sete
 *
 * Fonctionnalités :
 *   1. generateStaticParams() → pré-génère toutes les combinaisons
 *   2. generateMetadata()     → balises <title> et <meta description> dynamiques
 *   3. Page()                 → composant React avec contenu SEO optimisé
 */

import { metiers, villes, getAllCombinations } from "@/data/seo-data";

// --------------------------------------------------------------------------
// Helper : met en majuscule la première lettre d'un mot
// --------------------------------------------------------------------------
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// --------------------------------------------------------------------------
// Helper : formate un nom pour l'affichage (gère les tirets)
// "expert-comptable" → "Expert-Comptable", "beziers" → "Beziers"
// --------------------------------------------------------------------------
function formatName(slug) {
  return slug
    .split("-")
    .map((word) => capitalize(word))
    .join("-");
}

// --------------------------------------------------------------------------
// 1. GÉNÉRATION STATIQUE DES PARAMS
// --------------------------------------------------------------------------
// Next.js appelle cette fonction au build pour connaître toutes les
// combinaisons de paramètres à pré-rendre en HTML statique.
//
// Chaque objet retourné correspond à un segment de route dynamique.
// Le paramètre s'appelle "metier-a-ville" car le dossier est [metier]-a-[ville],
// mais Next.js le traite comme un catch-all pour le segment entier.
// --------------------------------------------------------------------------

/**
 * IMPORTANT : Next.js interprète [metier]-a-[ville] comme DEUX paramètres
 * dynamiques distincts : `metier` et `ville`, séparés par le texte littéral "-a-".
 */
export async function generateStaticParams() {
  return getAllCombinations().map(({ metier, ville }) => ({
    metier,
    ville,
  }));
}

// --------------------------------------------------------------------------
// 2. MÉTADONNÉES SEO DYNAMIQUES
// --------------------------------------------------------------------------
// Next.js utilise cette fonction pour injecter les balises <head> :
//   - <title> optimisé pour le référencement
//   - <meta name="description"> avec mots-clés naturels
//   - Balise canonical pour éviter le contenu dupliqué
//   - Open Graph pour le partage sur les réseaux sociaux
// --------------------------------------------------------------------------
export async function generateMetadata({ params }) {
  const { metier, ville } = await params;

  const metierDisplay = formatName(metier);
  const villeDisplay = formatName(ville);

  const title = `${metierDisplay} à ${villeDisplay} — Site Web IA | Montpellier-IA`;
  const description = `Vous êtes ${metierDisplay.toLowerCase()} à ${villeDisplay} ? Montpellier-IA crée votre site web professionnel avec intelligence artificielle. Générez plus de clients grâce à un site optimisé SEO, rapide et moderne. Devis gratuit.`;

  return {
    title,
    description,

    // Balise canonical pour éviter le duplicate content
    alternates: {
      canonical: `https://montpellier-ia.dev/${metier}-a-${ville}`,
    },

    // Open Graph (partage Facebook, LinkedIn, etc.)
    openGraph: {
      title,
      description,
      url: `https://montpellier-ia.dev/${metier}-a-${ville}`,
      siteName: "Montpellier-IA",
      locale: "fr_FR",
      type: "website",
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    // Robots : indexer et suivre les liens
    robots: {
      index: true,
      follow: true,
    },
  };
}

// --------------------------------------------------------------------------
// 3. COMPOSANT DE PAGE
// --------------------------------------------------------------------------
// Contenu SEO optimisé avec des balises sémantiques (h1, h2, p, section).
// Le contenu est volontairement riche en mots-clés pertinents pour le
// référencement naturel tout en restant lisible pour l'utilisateur.
// --------------------------------------------------------------------------
export default async function MetierVillePage({ params }) {
  const { metier, ville } = await params;

  const metierDisplay = formatName(metier);
  const villeDisplay = formatName(ville);

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>

      {/* ── H1 principal : mot-clé exact ciblé ── */}
      <h1>
        {metierDisplay} à {villeDisplay} — Créez votre site web avec l&apos;IA
      </h1>

      {/* ── Introduction optimisée SEO ── */}
      <section>
        <p>
          Vous êtes <strong>{metierDisplay.toLowerCase()}</strong> à{" "}
          <strong>{villeDisplay}</strong> et vous cherchez à développer votre
          présence en ligne ? <strong>Montpellier-IA</strong> conçoit des sites
          web professionnels grâce à l&apos;intelligence artificielle, spécialement
          adaptés aux besoins des {metierDisplay.toLowerCase()}s.
        </p>
      </section>

      {/* ── Avantages clés ── */}
      <section>
        <h2>
          Pourquoi choisir Montpellier-IA pour votre site de{" "}
          {metierDisplay.toLowerCase()} à {villeDisplay} ?
        </h2>
        <ul>
          <li>
            🚀 <strong>Site optimisé SEO</strong> — Apparaissez en tête des
            résultats Google pour &quot;{metierDisplay.toLowerCase()} {villeDisplay.toLowerCase()}&quot;
          </li>
          <li>
            ⚡ <strong>Performance maximale</strong> — Temps de chargement
            ultra-rapide grâce à notre technologie IA
          </li>
          <li>
            📱 <strong>Design responsive</strong> — Parfait sur mobile, tablette
            et ordinateur
          </li>
          <li>
            🤖 <strong>Intelligence artificielle</strong> — Chatbot IA intégré
            pour répondre à vos clients 24h/24
          </li>
          <li>
            💰 <strong>Tarifs compétitifs</strong> — Solutions accessibles pour
            les professionnels de {villeDisplay}
          </li>
        </ul>
      </section>

      {/* ── Call to action ── */}
      <section>
        <h2>Demandez votre devis gratuit</h2>
        <p>
          Contactez-nous dès maintenant pour obtenir un site web professionnel
          adapté à votre activité de {metierDisplay.toLowerCase()} à{" "}
          {villeDisplay}. Devis gratuit et sans engagement.
        </p>
        <a
          href="https://montpellier-ia.dev/#contact"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#6C63FF",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          Obtenir mon devis gratuit →
        </a>
      </section>

      {/* ── Contenu géolocalisé pour le SEO local ── */}
      <section style={{ marginTop: "2rem" }}>
        <h2>
          Votre {metierDisplay.toLowerCase()} à {villeDisplay} mérite un site
          web à la hauteur
        </h2>
        <p>
          À {villeDisplay}, les clients recherchent de plus en plus leurs
          prestataires sur internet. En tant que {metierDisplay.toLowerCase()},
          un site web professionnel est devenu indispensable pour capter cette
          clientèle locale. Montpellier-IA vous accompagne dans la création
          d&apos;un site performant, visible sur Google et conçu pour convertir vos
          visiteurs en clients.
        </p>
      </section>

      {/* ── Données structurées JSON-LD pour le SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Création de site web pour ${metierDisplay.toLowerCase()} à ${villeDisplay}`,
            description: `Service de création de site web professionnel par intelligence artificielle pour les ${metierDisplay.toLowerCase()}s à ${villeDisplay}.`,
            provider: {
              "@type": "Organization",
              name: "Montpellier-IA",
              url: "https://montpellier-ia.dev",
            },
            areaServed: {
              "@type": "City",
              name: villeDisplay,
            },
          }),
        }}
      />
    </main>
  );
}
