/**
 * =============================================================================
 * PAGE DYNAMIQUE SEO PREMIUM — /[slug]
 * =============================================================================
 *
 * Landing page dynamique à fort taux de conversion, conçue en parfaite
 * harmonie avec la charte graphique "Dark AI Premium Theme" d'origine.
 *
 * Intègre du Glassmorphism, des dégradés lumineux, des micro-animations
 * et des arguments sur-mesure pour chaque métier et ville ciblés.
 */

import { getAllCombinations } from "@/data/seo-data";

// Verrouillage du routing statique sur Vercel
export const dynamicParams = false;

// --------------------------------------------------------------------------
// Helpers de formatage
// --------------------------------------------------------------------------
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatName(str) {
  if (!str) return "";
  return str
    .split("-")
    .map((word) => capitalize(word))
    .join("-");
}

function parseSlug(slug) {
  const parts = slug.split("-a-");
  const metier = parts[0] || "";
  const ville = parts[1] || "";
  return { metier, ville };
}

// --------------------------------------------------------------------------
// 1. GÉNÉRATION STATIQUE (SSG)
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

  const title = `${metierDisplay} à ${villeDisplay} — Création de Site Web IA | Montpellier-IA`;
  const description = `Vous êtes ${metierDisplay.toLowerCase()} à ${villeDisplay} ? Attirez plus de clients avec un site web sur-mesure propulsé par l'intelligence artificielle. Design premium, ultra-rapide et optimisé SEO. Devis gratuit en 24h.`;

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
// 3. COMPOSANT DE PAGE PREMIUM
// --------------------------------------------------------------------------
export default async function MetierVillePage({ params }) {
  const { slug } = await params;
  const { metier, ville } = parseSlug(slug);

  const metierDisplay = formatName(metier);
  const villeDisplay = formatName(ville);

  return (
    <>
      {/* ─── BARRE DE NAVIGATION (Reprise à l'identique du site) ─── */}
      <nav className="navbar scrolled">
        <div className="container navbar__inner">
          <a href="https://montpellier-ia.dev" className="navbar__logo">
            <img
              src="/assets/images/logo-officiel.png"
              alt="Montpellier-IA Logo"
              className="navbar__logo-img"
            />
            <span>Montpellier<span className="text-gradient">-IA</span></span>
          </a>
          <div className="navbar__links">
            <a href="https://montpellier-ia.dev/#services" className="navbar__link">Services</a>
            <a href="https://montpellier-ia.dev/exemples.html" className="navbar__link">Réalisations</a>
            <a href="https://montpellier-ia.dev/tarifs.html" className="navbar__link">Tarifs</a>
            <a href="https://montpellier-ia.dev/#contact" className="btn btn--primary" style={{ padding: "0.5rem 1.2rem" }}>
              Devis IA
            </a>
          </div>
        </div>
      </nav>

      {/* ─── SECTION HERO IMMERSIVE ─── */}
      <header className="hero" style={{ minHeight: "90vh", paddingTop: "12rem" }}>
        <div className="container hero__inner">
          <div className="hero__content" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            
            {/* Badge animé premium */}
            <div className="hero__badge">
              <span>🚀 Solution web exclusive pour les professionnels</span>
            </div>

            {/* Titre principal optimisé SEO avec dégradé éclatant */}
            <h1 className="hero__title">
              Site web de <span className="text-gradient">{metierDisplay}</span> à{" "}
              <span className="text-gradient">{villeDisplay}</span> propulsé par l&apos;IA
            </h1>

            {/* Sous-titre persuasif */}
            <p className="hero__subtitle" style={{ margin: "0 auto 3rem", fontSize: "1.3rem" }}>
              Démarquez-vous de vos concurrents à <strong>{villeDisplay}</strong>. Nous concevons pour votre activité de <strong>{metierDisplay.toLowerCase()}</strong> un site internet premium, visible sur Google et conçu pour transformer vos visiteurs en clients payants.
            </p>

            {/* Boutons d'action avec effet de pulsation (WOW effect) */}
            <div className="hero__buttons" style={{ justifyContent: "center", gap: "1.5rem" }}>
              <a href="https://montpellier-ia.dev/#contact" className="btn btn--primary btn--lg btn--pulse">
                Obtenir ma proposition gratuite →
              </a>
              <a href="https://montpellier-ia.dev/exemples.html" className="btn btn--ghost btn--lg">
                Voir nos designs
              </a>
            </div>

            {/* Mini réassurance en bas du CTA */}
            <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "2rem", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
              <span>✓ Sans engagement</span>
              <span>✓ Maquette en 48h</span>
              <span>✓ Optimisé Référencement Local</span>
            </div>

          </div>
        </div>
      </header>

      {/* ─── SECTION BÉNÉFICES (GLASSMORPHISM BENTO GRID) ─── */}
      <section className="section section--alt">
        <div className="container">
          
          <div className="section-header">
            <div className="section-header__badge">L&apos;avantage technologique</div>
            <h2>Pourquoi un site IA pour votre activité de {metierDisplay.toLowerCase()} ?</h2>
            <p>Une combinaison unique de design haut de gamme et d&apos;algorithmes de conversion.</p>
          </div>

          <div className="bento">
            
            {/* Carte 1 : SEO Local */}
            <div className="bento__item">
              <div className="card__icon">🎯</div>
              <h3 className="card__title">Domination Locale Google</h3>
              <p className="card__text">
                Apparaissez en tête des recherches lorsqu&apos;un client tape &quot;<strong>{metierDisplay.toLowerCase()} {villeDisplay}</strong>&quot;. Notre structure sémantique est codée sur-mesure pour plaire à l&apos;algorithme de Google.
              </p>
            </div>

            {/* Carte 2 : Vitesse Éclair */}
            <div className="bento__item">
              <div className="card__icon">⚡</div>
              <h3 className="card__title">Vitesse de chargement IA</h3>
              <p className="card__text">
                Un site lent fait fuir 50% des clients. Nos pages s&apos;affichent en moins de 0.4 seconde sur mobile, garantissant une navigation fluide et un boost de votre référencement.
              </p>
            </div>

            {/* Carte 3 : Réceptionniste IA 24/7 */}
            <div className="bento__item">
              <div className="card__icon">🤖</div>
              <h3 className="card__title">Chatbot IA intégré</h3>
              <p className="card__text">
                Ne manquez plus aucun prospect pendant que vous êtes en intervention. Votre assistant IA répond aux questions fréquentes et qualifie vos demandes de devis 24h/24 et 7j/7.
              </p>
            </div>

            {/* Carte 4 (Large) : Design Premium */}
            <div className="bento__item bento__item--wide" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <div className="card__icon">✨</div>
                <h3 className="card__title">Un design d&apos;exception qui inspire confiance</h3>
                <p className="card__text">
                  En tant que {metierDisplay.toLowerCase()} à {villeDisplay}, votre image de marque est capitale. Fini les sites vitrines génériques. Nous appliquons les codes du design moderne (Glassmorphism, mode sombre élégant, animations fluides) pour positionner votre entreprise comme le leader de sa région.
                </p>
              </div>
            </div>

            {/* Carte 5 : Accompagnement */}
            <div className="bento__item">
              <div className="card__icon">🤝</div>
              <h3 className="card__title">Clé en main &amp; Sans stress</h3>
              <p className="card__text">
                Hébergement sécurisé, maintenance technique, mises à jour et modifications incluses. Concentrez-vous sur vos clients, nous gérons toute la technique.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─── SECTION CALL TO ACTION FINAL ─── */}
      <section className="section" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div className="card" style={{ textAlign: "center", padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto", borderColor: "var(--color-primary)" }}>
            <h2 style={{ marginBottom: "1rem" }}>Prêt à propulser votre activité à {villeDisplay} ?</h2>
            <p style={{ color: "var(--color-text-light)", maxWidth: "600px", margin: "0 auto 2rem" }}>
              Obtenez une analyse gratuite de votre visibilité locale et découvrez comment notre technologie peut multiplier vos demandes de devis.
            </p>
            <a href="https://montpellier-ia.dev/#contact" className="btn btn--primary btn--lg btn--pulse">
              Lancer mon projet web IA maintenant →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER SIMPLE PREMIUM ─── */}
      <footer style={{ borderTop: "1px solid var(--color-border-light)", padding: "3rem 0", textAlign: "center", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Montpellier-IA. Tous droits réservés.</p>
          <p style={{ marginTop: "0.5rem" }}>Solution d&apos;acquisition sur-mesure pour {metierDisplay.toLowerCase()}s opérant sur le secteur de {villeDisplay}.</p>
        </div>
      </footer>

      {/* ─── DONNÉES STRUCTURÉES SEO ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `Création de site web pour ${metierDisplay} à ${villeDisplay}`,
            description: `Service premium de conception de site internet par IA pour les ${metierDisplay.toLowerCase()}s basés à ${villeDisplay}.`,
            publisher: {
              "@type": "Organization",
              name: "Montpellier-IA",
              url: "https://montpellier-ia.dev",
            },
          }),
        }}
      />
    </>
  );
}
