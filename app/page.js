import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { getAllCombinations } from '@/data/seo-data';

export default function Home() {
  const seoLinks = getAllCombinations().map(c => ({
    slug: `${c.metier}-a-${c.ville}`,
    label: `${c.metier.charAt(0).toUpperCase() + c.metier.slice(1)} à ${c.ville.charAt(0).toUpperCase() + c.ville.slice(1)}`
  }));

  return (
    <>
    <canvas id="particles-canvas"></canvas>

    <nav className="navbar" id="navbar">
        <div className="container navbar__inner">
            <a href="/" className="navbar__logo">
                <Image src="/assets/images/logo-officiel.png" alt="Logo Montpellier-IA" width={600} height={400} className="navbar__logo-img" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
                <span className="text-gradient">Montpellier-IA</span>
            </a>
            <div className="navbar__links">
                <a href="/" className="navbar__link active">Accueil</a>
                <a href="tarifs.html" className="navbar__link">Tarifs</a>
                <a href="exemples.html" className="navbar__link">Réalisations</a>
                <a href="a-propos.html" className="navbar__link">À propos</a>
            </div>
            <a href="a-propos.html#contact" className="btn btn--primary navbar__cta">Réserver un appel</a>
            <button type="button" className="navbar__toggle" aria-label="Ouvrir ou fermer le menu" aria-expanded="false" aria-controls="navbar-mobile">
                <span></span><span></span><span></span>
            </button>
        </div>
        <div className="navbar__mobile" id="navbar-mobile">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', padding: '0.5rem 1rem' }}>
                <Image src="/assets/images/logo-officiel.png" alt="Logo Montpellier-IA" width={600} height={400} style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-white)' }}>
                    <span className="text-gradient">Montpellier-IA</span>
                </span>
            </div>
            <a href="/">Accueil</a>
            <a href="tarifs.html">Tarifs</a>
            <a href="exemples.html">Réalisations</a>
            <a href="a-propos.html">À propos</a>
            <a href="a-propos.html#contact" className="btn btn--primary btn--full" style={{ marginTop: '1rem' }}>Réserver un appel</a>
        </div>
    </nav>

    <section className="hero" id="hero">
        <div className="hero__3d fade-in-spline">
            <spline-viewer url="https://prod.spline.design/UGyMHHC5NJuv-dM2/scene.splinecode" background="transparent"
                style={{ width: '100%', height: '100%', background: 'transparent' }}></spline-viewer>
        </div>
        <div className="container hero__inner">
            <div className="hero__content">
                <div className="hero__badge fade-in">Création de sites web premium</div>

                <h1 className="hero__title fade-in fade-in-delay-1">
                    Un site <span className="text-gradient">ultra-rapide</span>,<br />
                    pensé pour <span className="text-gradient">convertir</span>
                </h1>

                <p className="hero__subtitle fade-in fade-in-delay-2">
                    Design sur-mesure, performance mobile et SEO technique : je conçois votre vitrine professionnelle
                    pour qu&apos;elle soit claire, crédible et efficace. La première étape, c&apos;est une maquette
                    concrète, sans blabla.
                </p>

                <div className="hero__buttons fade-in fade-in-delay-3">
                    <a href="#maquette" className="btn btn--lg btn--gift-premium">
                        <span className="gift-icon-anim">🎁</span> Maquette gratuite (10 min)
                    </a>
                    <a href="tarifs.html" className="btn btn--ghost btn--lg">
                        Voir les formules
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section className="section section--mockup" id="maquette">
        <div className="container">
            <div className="mockup-header fade-in">
                <div className="section-header__badge">🎁 Offre d&apos;entrée</div>
                <h2>Votre maquette <span className="text-gradient">offerte en 10 minutes</span></h2>
                <p>
                    Pas de long discours : je vous montre à quoi pourrait ressembler votre futur site, en direct.
                    Gratuit, sans engagement, pour que vous jugiez le niveau de finition avant de décider.
                </p>
            </div>

            <div className="mockup-marquee fade-in">
                <div className="mockup-marquee__inner">
                    <div className="mockup-card"><Image src="/assets/images/mockups/26c598fc-7b9e-4452-b52e-dbb841d92e33.png" alt="Maquette 1" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/60cceebb-c4ed-4437-82dc-df959d389666.png" alt="Maquette 3" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-02-06-a-21-25-02.png" alt="Maquette 4" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-02-11-a-20-15-58.png" alt="Maquette 5" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-02-14-a-19-33-42.png" alt="Maquette 6" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-03-16-a-22-30-05.png" alt="Maquette 7" width={600} height={400} className="mockup-card__img mockup-card__img--top" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-04-03-a-16-06-11.png" alt="Maquette 8" width={600} height={400} className="mockup-card__img mockup-card__img--top" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-04-22-a-13-52-54.png" alt="Maquette 9" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/dd06ef97-f9bb-4138-979b-653449a3747b.png" alt="Maquette 10" width={600} height={400} className="mockup-card__img" /></div>

                    <div className="mockup-card"><Image src="/assets/images/mockups/26c598fc-7b9e-4452-b52e-dbb841d92e33.png" alt="Maquette 1" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/60cceebb-c4ed-4437-82dc-df959d389666.png" alt="Maquette 3" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-02-06-a-21-25-02.png" alt="Maquette 4" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-02-11-a-20-15-58.png" alt="Maquette 5" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-02-14-a-19-33-42.png" alt="Maquette 6" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-03-16-a-22-30-05.png" alt="Maquette 7" width={600} height={400} className="mockup-card__img mockup-card__img--top" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-04-03-a-16-06-11.png" alt="Maquette 8" width={600} height={400} className="mockup-card__img mockup-card__img--top" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-04-22-a-13-52-54.png" alt="Maquette 9" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/dd06ef97-f9bb-4138-979b-653449a3747b.png" alt="Maquette 10" width={600} height={400} className="mockup-card__img" /></div>
                </div>
            </div>

            <div className="mockup-cta fade-in">
                <a href="a-propos.html#contact" className="btn btn--primary btn--lg btn--pulse">
                    Je veux ma maquette gratuite
                </a>
            </div>
        </div>
    </section>

    <div className="marquee" style={{ padding: '2rem 0', borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="marquee__inner">
            <span className="marquee__item">Sites web premium</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Performance mobile</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">SEO technique</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Design sur-mesure</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Livraison encadrée</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Pages vitrine &amp; multi-pages</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Sites web premium</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Performance mobile</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">SEO technique</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Design sur-mesure</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Livraison encadrée</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Pages vitrine &amp; multi-pages</span>
            <span className="marquee__item">•</span>
        </div>
    </div>

    <section className="section grid-bg" id="services">
        <div className="container">
            <div className="section-header fade-in">
                <div className="section-header__badge">Comment je travaille</div>
                <h2>Un site <span className="text-gradient">clair, rapide, crédible</span></h2>
                <p>
                    Objectif unique : une présence web professionnelle qui raconte votre activité et incite à vous
                    contacter. Chaque bloc ci-dessous sert ce résultat.
                </p>
            </div>

            <div className="bento">
                <div className="bento__item bento__item--wide fade-in">
                    <div>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌐</div>
                        <h3 style={{ marginBottom: '0.75rem' }}>Site vitrine premium sur-mesure</h3>
                        <p className="card__text">Structure pensée pour guider le visiteur, textes hiérarchisés, appels à
                            l&apos;action visibles : le tout dans un design moderne aligné avec votre image.</p>
                    </div>
                </div>

                <div className="bento__item fade-in fade-in-delay-1">
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📱</div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Mobile d&apos;abord</h4>
                    <p className="card__text">Mise en page testée sur téléphone : lisibilité, boutons accessibles, rien
                        qui dépasse. C&apos;est souvent le premier écran que vos clients voient.</p>
                </div>

                <div className="bento__item fade-in fade-in-delay-1">
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Performance réelle</h4>
                    <p className="card__text">Temps de chargement, images optimisées, code propre : un site rapide
                        rassure les visiteurs et aide le référencement.</p>
                </div>

                <div className="bento__item bento__item--wide fade-in fade-in-delay-2">
                    <div>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
                        <h3 style={{ marginBottom: '0.75rem' }}>SEO technique &amp; pages locales</h3>
                        <p className="card__text">Balises, structure, pages ciblées par ville et par métier quand c&apos;est
                            pertinent : vous gagnez en visibilité là où vos clients cherchent.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <div className="stats-grid fade-in">
                <div className="stats-grid__item">
                    <div className="stats-grid__value" data-count="50" data-suffix="+">0</div>
                    <div className="stats-grid__label">Sites livrés</div>
                </div>
                <div className="stats-grid__item">
                    <div className="stats-grid__value" data-count="100" data-suffix="%">0</div>
                    <div className="stats-grid__label">Clients satisfaits</div>
                </div>
                <div className="stats-grid__item">
                    <div className="stats-grid__value" data-count="14" data-suffix=" j">0</div>
                    <div className="stats-grid__label">Délai cible moyen</div>
                </div>
                <div className="stats-grid__item">
                    <div className="stats-grid__value" data-count="10" data-suffix=" min">0</div>
                    <div className="stats-grid__label">Maquette découverte</div>
                </div>
            </div>
        </div>
    </section>

    <section className="section section--alt grid-bg">
        <div className="container">
            <div className="section-header fade-in">
                <div className="section-header__badge">Offre principale</div>
                <h2>Tarif transparent : <span className="text-gradient">site web premium</span></h2>
                <p>Une entrée simple pour démarrer. Le détail des options figure sur la page tarifs.</p>
            </div>

            <div className="fade-in" style={{ maxWidth: '28rem', margin: '0 auto' }}>
                <div className="pricing-card">
                    <div className="pricing-card__icon">🌐</div>
                    <p className="pricing-card__name">Site web premium</p>
                    <div className="pricing-card__price"><span className="text-gradient">500€</span></div>
                    <p className="pricing-card__period">Paiement unique · hébergement offert 1 an</p>
                    <p className="pricing-card__desc">Site professionnel sur-mesure, responsive, optimisé pour le
                        référencement et pensé pour transformer les visites en demandes de contact.</p>
                    <div className="pricing-card__features">
                        <div className="pricing-card__feature"><span className="check">✓</span> Multi-pages sur-mesure</div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Design premium responsive</div>
                        <div className="pricing-card__feature"><span className="check">✓</span> SEO technique de base</div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Formulaire &amp; contact</div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Accompagnement jusqu&apos;à la mise en ligne</div>
                    </div>
                    <a href="a-propos.html#contact" className="btn btn--primary btn--lg btn--full">Demander un devis</a>
                </div>
                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }} className="fade-in">
                    Besoin d&apos;automation ou d&apos;outils avancés une fois le site en ligne ?{' '}
                    <a href="tarifs.html" style={{ color: 'var(--color-cyan)', textDecoration: 'underline' }}>Voir aussi les offres détaillées</a>.
                </p>
            </div>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <div className="cta fade-in">
                <h2>Lançons <span className="text-gradient">votre site</span></h2>
                <p>Réservez un appel gratuit d&apos;environ 15 minutes : on cadrera votre projet sans engagement.</p>
                <a href="a-propos.html#contact" className="btn btn--primary btn--lg">
                    Maquette offerte (10 min)
                </a>
            </div>
        </div>
    </section>

    <section className="section seo-mesh">
        <div className="container">
            <h3 className="seo-mesh__title">Exemples de pages locales (SEO) : métiers &amp; villes</h3>
            <div className="seo-mesh__links">
                {seoLinks.map((link) => (
                    <Link key={link.slug} href={`/${link.slug}`} className="seo-mesh__link">
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    </section>

    <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <div>
                    <div className="footer__logo">
                        <Image src="/assets/images/logo-officiel.png" alt="Logo Montpellier-IA" width={600} height={400} className="footer__logo-img" style={{ height: '48px', width: 'auto', borderRadius: '4px' }} />{' '}
                        <span className="text-gradient">Montpellier-IA</span>
                    </div>
                    <p className="footer__desc">Création de sites web premium pour indépendants et petites structures :
                        design soigné, performance et SEO technique.</p>
                </div>
                <div>
                    <h4 className="footer__heading">Navigation</h4>
                    <div className="footer__links">
                        <a href="/">Accueil</a>
                        <a href="tarifs.html">Tarifs</a>
                        <a href="exemples.html">Réalisations</a>
                        <a href="a-propos.html">À propos</a>
                    </div>
                </div>
                <div>
                    <h4 className="footer__heading">Contact</h4>
                    <div className="footer__links">
                        <a href="a-propos.html#contact">Réserver un appel</a>
                        <a href="mailto:contact@montpellier-ia.dev">contact@montpellier-ia.dev</a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2026 Montpellier-IA — Conçu avec ❤️ par Nael</p>
            </div>
        </div>
    </footer>

      <Script src="/script.js" strategy="afterInteractive" />
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.86/build/spline-viewer.js" strategy="afterInteractive" />
    </>
  );
}
