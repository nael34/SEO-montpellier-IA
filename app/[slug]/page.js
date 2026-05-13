/**
 * =============================================================================
 * PAGE DYNAMIQUE SEO — /[slug]
 * =============================================================================
 *
 * Route dynamique Next.js (App Router) standardisée pour Vercel.
 * Génère une page statique pour chaque slug complet métier-a-ville.
 *
 * Exemples de routes générées :
 *   /plombier-a-montpellier
 *   /avocat-a-gignac
 *   /expert-comptable-a-beziers
 *   /serrurier-a-sete
 */

import { getAllCombinations } from "@/data/seo-data";

// Force le mode statique strict pour éviter les erreurs 404 Vercel en production
export const dynamicParams = false;

// --------------------------------------------------------------------------
// Helper : met en majuscule la première lettre d'un mot
// --------------------------------------------------------------------------
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// --------------------------------------------------------------------------
// Helper : formate un nom pour l'affichage (gère les tirets)
// "expert-comptable" → "Expert-Comptable"
// --------------------------------------------------------------------------
function formatName(str) {
  if (!str) return "";
  return str
    .split("-")
    .map((word) => capitalize(word))
    .join("-");
}

// --------------------------------------------------------------------------
// Helper : extrait le métier et la ville depuis le slug complet
// "plombier-a-montpellier" → { metier: "plombier", ville: "montpellier" }
// --------------------------------------------------------------------------
function parseSlug(slug) {
  const parts = slug.split("-a-");
  const metier = parts[0] || "";
  const ville = parts[1] || "";
  return { metier, ville };
}

// --------------------------------------------------------------------------
// 1. GÉNÉRATION STATIQUE DES PARAMS (SSG)
// --------------------------------------------------------------------------
export async function generateStaticParams() {
  return getAllCombinations().map(({ metier, ville }) => ({
    slug: `${metier}-a-${ville}`,
  }));
}

// --------------------------------------------------------------------------
// 2. MÉTADONNÉES SEO DYNAMIQUES
// --------------------------------------------------------------------------
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { metier, ville } = parseSlug(slug);

  const metierDisplay = formatName(metier);
  const villeDisplay = formatName(ville);

  const title = `${metierDisplay} à ${villeDisplay} — Site Web IA | Montpellier-IA`;
  const description = `Vous êtes ${metierDisplay.toLowerCase()} à ${villeDisplay} ? Montpellier-IA crée votre site web professionnel avec intelligence artificielle. Générez plus de clients grâce à un site optimisé SEO, rapide et moderne. Devis gratuit.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://montpellier-ia.dev/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://montpellier-ia.dev/${slug}`,
      siteName: "Montpellier-IA",
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// --------------------------------------------------------------------------
// 3. COMPOSANT DE PAGE
// --------------------------------------------------------------------------
export default async function MetierVillePage({ params }) {
  const { slug } = await params;
  const { metier, ville } = parseSlug(slug);

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
