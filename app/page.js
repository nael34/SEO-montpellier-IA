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

    {/*  ═══ NAVBAR ═══  */}


    <nav className="navbar" id="navbar">
        <div className="container navbar__inner">
            <a href="index.html" className="navbar__logo">
                <Image src="/assets/images/logo-officiel.png" alt="Logo Montpellier-IA" width={600} height={400} className="navbar__logo-img" style={{"height": "50px", "width": "auto", "objectFit": "contain"}} />
                <span className="text-gradient">Montpellier-IA</span>
            </a>
            <div className="navbar__links">
                <a href="index.html" className="navbar__link active">Accueil</a>
                <a href="tarifs.html" className="navbar__link">Tarifs</a>
                <a href="exemples.html" className="navbar__link">Réalisations</a>
                <a href="a-propos.html" className="navbar__link">À propos</a>
            </div>
            <a href="a-propos.html#contact" className="btn btn--primary navbar__cta">Réserver un appel</a>
            <div className="navbar__toggle" aria-label="Menu"><span></span><span></span><span></span></div>
        </div>
        <div className="navbar__mobile">
            <div style={{"display": "flex", "alignItems": "center", "gap": "0.75rem", "marginBottom": "2rem", "padding": "0.5rem 1rem"}}>
                <Image src="/assets/images/logo-officiel.png" alt="Logo Montpellier-IA" width={600} height={400} style={{"height": "48px", "width": "auto", "objectFit": "contain"}} />
                <span
                    style={{"fontFamily": "var(--font_heading)", "fontSize": "1.5rem", "fontWeight": "700", "color": "var(--color_white)"}}>
                    <span className="text-gradient">Montpellier-IA</span>
                </span>
            </div>
            <a href="index.html">Accueil</a>
            <a href="tarifs.html">Tarifs</a>
            <a href="exemples.html">Réalisations</a>
            <a href="a-propos.html">À propos</a>
            <a href="a-propos.html#contact" className="btn btn--primary btn--full" style={{"marginTop": "1rem"}}>Réserver un
                appel</a>
        </div>
    </nav>



    {/*  ═══ HERO ═══  */}
    <section className="hero" id="hero">
        <div className="hero__3d fade-in-spline">
            <spline-viewer url="https://prod.spline.design/UGyMHHC5NJuv-dM2/scene.splinecode" background="transparent"
                style={{"width": "100%", "height": "100%", "background": "transparent"}}></spline-viewer>
        </div>
        <div className="container hero__inner">
            <div className="hero__content">
                <div className="hero__badge fade-in">Propulsé par l'Intelligence Artificielle</div>

                <h1 className="hero__title fade-in fade-in-delay-1">
                    Votre <span className="text-gradient">business</span>,<br />
                    amplifié par l'<span className="text-gradient">IA</span>
                </h1>

                <p className="hero__subtitle fade-in fade-in-delay-2">
                    Un site web premium qui convertit. Une IA qui prospecte, répond aux appels et génère des leads pour
                    vous.
                    Passez au digital intelligent — je m'occupe de tout.
                </p>

                <div className="hero__buttons fade-in fade-in-delay-3">
                    {/*  Bouton Cadeau Premium  */}
                    <a href="#maquette" className="btn btn--lg btn--gift-premium">
                        <span className="gift-icon-anim">🎁</span> Maquette gratuite (10 min)
                    </a>
                    {/*  Bouton Écoute IA  */}
                    <a href="#demo-ia" className="btn btn--ghost btn--lg btn--sound-wave">
                        🎙️ Écoutez l'IA en action
                        <span className="soundwave-indicator">
                            <span className="soundwave-bar"></span>
                            <span className="soundwave-bar"></span>
                            <span className="soundwave-bar"></span>
                            <span className="soundwave-bar"></span>
                            <span className="soundwave-bar"></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/*  ═══ MARQUEE ═══  */}
    <div className="marquee"
        style={{"padding": "2rem 0", "borderTop": "1px solid var(--color_border_light)", "borderBottom": "1px solid var(--color_border_light)"}}>
        <div className="marquee__inner">
            <span className="marquee__item">Sites Web Premium</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Intelligence Artificielle</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Génération de Leads</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">IA Téléphonique</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Web Scraping</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">SEO Automatisé</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Design Sur-Mesure</span>
            <span className="marquee__item">•</span>
            {/*  Duplicate for seamless loop  */}
            <span className="marquee__item">Sites Web Premium</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Intelligence Artificielle</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Génération de Leads</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">IA Téléphonique</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Web Scraping</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">SEO Automatisé</span>
            <span className="marquee__item">•</span>
            <span className="marquee__item">Design Sur-Mesure</span>
            <span className="marquee__item">•</span>
        </div>
    </div>

    {/*  ═══ POURQUOI NOUS ═══  */}
    <section className="section grid-bg" id="services">
        <div className="container">
            <div className="section-header fade-in">
                <div className="section-header__badge">⚡ Comment ça marche</div>
                <h2>Un site qui <span className="text-gradient">travaille pour vous</span></h2>
                <p>Je combine web design de pointe et intelligence artificielle pour transformer votre présence en ligne
                    en machine à clients.</p>
            </div>

            <div className="bento">
                {/*  Big card  */}
                <div className="bento__item bento__item--wide fade-in">
                    <div>
                        <div style={{"fontSize": "2.5rem", "marginBottom": "1rem"}}>🌐</div>
                        <h3 style={{"marginBottom": "0.75rem"}}>Site web premium sur-mesure</h3>
                        <p className="card__text">Un site moderne, rapide, optimisé SEO et conçu pour convertir vos
                            visiteurs en clients. Design unique qui inspire confiance et professionnalisme.</p>
                    </div>
                </div>

                {/*  Personnalisation  */}
                <div className="bento__item fade-in fade-in-delay-1">
                    <div style={{"fontSize": "2rem", "marginBottom": "1rem"}}>🎨</div>
                    <h4 style={{"marginBottom": "0.5rem"}}>Personnalisation illimitée</h4>
                    <p className="card__text">Je modifie votre site autant de fois que nécessaire avant la mise en ligne
                        pour qu'il soit exactement comme vous l'avez imaginé.</p>
                </div>

                {/*  IA Téléphonique  */}
                <div className="bento__item fade-in fade-in-delay-1">
                    <div style={{"fontSize": "2rem", "marginBottom": "1rem"}}>🤖</div>
                    <h4 style={{"marginBottom": "0.5rem"}}>IA Téléphonique</h4>
                    <p className="card__text">Une IA qui répond à vos appels 24/7, qualifie les prospects et prend les
                        rendez-vous à votre place.</p>
                </div>

                {/*  Leads  */}
                <div className="bento__item bento__item--wide fade-in fade-in-delay-2">
                    <div>
                        <div style={{"fontSize": "2.5rem", "marginBottom": "1rem"}}>🎯</div>
                        <h3 style={{"marginBottom": "0.75rem"}}>Génération de leads automatisée</h3>
                        <p className="card__text">L'IA identifie, contacte et qualifie vos prospects pendant que vous vous
                            concentrez sur votre cœur de métier. Des leads chauds livrés directement dans votre boîte
                            mail.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  ═══ SECTION MAQUETTE OFFERTE ═══  */}
    <section className="section section--mockup" id="maquette">
        <div className="container">
            <div className="mockup-header fade-in">
                <div className="section-header__badge">🎁 Offre Spéciale</div>
                <h2>Votre maquette <span className="text-gradient">offerte en 10 minutes</span></h2>
                <p>Pas de longs discours, je vous prouve mon savoir-faire en direct. Demandez une débauche visuelle de
                    votre futur site, gratuitement et sans engagement.</p>
            </div>

            <div className="mockup-marquee fade-in">
                <div className="mockup-marquee__inner">
                    {/*  Original items (9 unique)  */}
                    <div className="mockup-card"><Image src="/assets/images/mockups/26c598fc-7b9e-4452-b52e-dbb841d92e33.png" alt="Maquette 1" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/60cceebb-c4ed-4437-82dc-df959d389666.png" alt="Maquette 3" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-02-06-a-21-25-02.png" alt="Maquette 4" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-02-11-a-20-15-58.png" alt="Maquette 5" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-02-14-a-19-33-42.png" alt="Maquette 6" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-03-16-a-22-30-05.png" alt="Maquette 7" width={600} height={400} className="mockup-card__img mockup-card__img--top" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-04-03-a-16-06-11.png" alt="Maquette 8" width={600} height={400} className="mockup-card__img mockup-card__img--top" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/Capture-d-ecran-2026-04-22-a-13-52-54.png" alt="Maquette 9" width={600} height={400} className="mockup-card__img" /></div>
                    <div className="mockup-card"><Image src="/assets/images/mockups/dd06ef97-f9bb-4138-979b-653449a3747b.png" alt="Maquette 10" width={600} height={400} className="mockup-card__img" /></div>

                    {/*  Duplicates for seamless loop (9)  */}
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
                    🚀 Je veux ma maquette gratuite
                </a>
            </div>
        </div>
    </section>

    {/*  ═══ CHIFFRES ═══  */}
    <section className="section">
        <div className="container">
            <div className="stats-grid fade-in">
                <div className="stats-grid__item">
                    <div className="text-gradient" style={{"fontFamily": "var(--font_heading)", "fontSize": "3rem", "fontWeight": "800"}}
                        data-count="50" data-suffix="+">0</div>
                    <div style={{"color": "var(--color_text_muted)", "fontSize": "0.85rem"}}>Sites créés</div>
                </div>
                <div className="stats-grid__item">
                    <div className="text-gradient" style={{"fontFamily": "var(--font_heading)", "fontSize": "3rem", "fontWeight": "800"}}
                        data-count="100" data-suffix="%">0</div>
                    <div style={{"color": "var(--color_text_muted)", "fontSize": "0.85rem"}}>Clients satisfaits</div>
                </div>
                <div className="stats-grid__item">
                    <div className="text-gradient" style={{"fontFamily": "var(--font_heading)", "fontSize": "3rem", "fontWeight": "800"}}
                        data-count="10000" data-suffix="+">0</div>
                    <div style={{"color": "var(--color_text_muted)", "fontSize": "0.85rem"}}>Leads générés</div>
                </div>
                <div className="stats-grid__item">
                    <div className="text-gradient" style={{"fontFamily": "var(--font_heading)", "fontSize": "3rem", "fontWeight": "800"}}
                        data-count="24" data-suffix="/7">0</div>
                    <div style={{"color": "var(--color_text_muted)", "fontSize": "0.85rem"}}>IA disponible</div>
                </div>
            </div>
        </div>
    </section>

    {/*  ═══ DÉMO IA VOCALE ═══  */}
    <section className="section section--alt grid-bg" id="demo-ia">
        <div className="container">
            <div className="section-header fade-in">
                <div className="section-header__badge">🎙️ Démo En Direct</div>
                <h2>Écoutez <span className="text-gradient">l'IA en action</span></h2>
                <p>Une vraie conversation de 1 minute entre moi et mon assistant IA. Jugez par vous-même.</p>
            </div>

            <div className="ai-demo-player fade-in" style={{"maxWidth": "780px", "margin": "0 auto"}}>

                {/*  Context card  */}
                <div className="ai-demo-context">
                    <div className="ai-demo-context__icon">⚖️</div>
                    <div>
                        <div className="ai-demo-context__label">Mise en situation</div>
                        <div className="ai-demo-context__text">Simulation d'un appel entrant pour le cabinet d'une avocate.
                            L'IA répond, qualifie le besoin et propose un rendez-vous — sans intervention humaine.</div>
                    </div>
                </div>

                {/*  Waveform + player  */}
                <div className="ai-demo-card">
                    {/*  Live waveform visualizer  */}
                    <div className="ai-demo-waveform" id="waveformBars">
                        <canvas id="waveformCanvas" width="700" height="72"></canvas>
                    </div>

                    {/*  Progress bar  */}
                    <div className="ai-demo-progress" id="demoProgressBar">
                        <div className="ai-demo-progress__fill" id="demoProgressFill"></div>
                        <div className="ai-demo-progress__handle" id="demoProgressHandle"></div>
                    </div>

                    {/*  Time  */}
                    <div className="ai-demo-time">
                        <span id="demoCurrentTime">0:00</span>
                        <span id="demoDuration">—</span>
                    </div>

                    {/*  Controls  */}
                    <div className="ai-demo-controls">
                        <button className="ai-demo-btn ai-demo-btn--skip" id="demoSkipBack" title="Reculer 10s">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <polyline points="1 4 1 10 7 10" />
                                <path d="M3.51 15a9 9 0 1 0 .49-4.67" /><text x="8" y="20" font-size="7"
                                    fill="currentColor" stroke="none">10</text>
                            </svg>
                        </button>
                        <button className="ai-demo-btn ai-demo-btn--play" id="demoPlayBtn">
                            <svg id="demoPlayIcon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            <svg id="demoPauseIcon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"
                                style={{"display": "none"}}>
                                <rect x="6" y="4" width="4" height="16" />
                                <rect x="14" y="4" width="4" height="16" />
                            </svg>
                        </button>
                        <button className="ai-demo-btn ai-demo-btn--skip" id="demoSkipFwd" title="Avancer 10s">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2">
                                <polyline points="23 4 23 10 17 10" />
                                <path d="M20.49 15a9 9 0 1 1-.48-4.67" /><text x="8" y="20" font-size="7"
                                    fill="currentColor" stroke="none">10</text>
                            </svg>
                        </button>
                    </div>
                </div>

                {/*  Chapter markers  */}
                <div className="ai-demo-chapters">
                    <div className="ai-demo-chapters__title">⏩ Accès rapide</div>
                    <div className="ai-demo-chapters__list">
                        <button className="ai-demo-chapter" data-time="0">
                            <span className="ai-demo-chapter__time">0:00</span>
                            <span className="ai-demo-chapter__label">🤖 L'IA décroche et se présente</span>
                        </button>
                        <button className="ai-demo-chapter" data-time="8">
                            <span className="ai-demo-chapter__time">0:08</span>
                            <span className="ai-demo-chapter__label">🗣️ Qualification du besoin</span>
                        </button>
                        <button className="ai-demo-chapter" data-time="18">
                            <span className="ai-demo-chapter__time">0:18</span>
                            <span className="ai-demo-chapter__label">📅 Proposition de rendez-vous</span>
                        </button>
                    </div>
                </div>

                {/*  Status HUD IA Live  */}
                <div className="ai-demo-live-status">
                    <span className="ai-demo-live-dot"></span>
                    <span className="ai-demo-live-text">IA V2.4 Connectée // Flux audio qualifié en temps réel</span>
                </div>

                {/*  Hidden audio element  */}
                <audio id="demoAudio" preload="metadata">
                    <source src="demo-ia-vocale.mp3" type="audio/mpeg" />
                </audio>

                {/*  CTA  */}
                <div style={{"textAlign": "center", "marginTop": "2rem"}}>
                    <a href="a-propos.html#contact" className="btn btn--primary btn--lg btn--pulse">
                        🚀 Je veux cette IA pour mon entreprise
                    </a>
                </div>
            </div>
        </div>
    </section>


    <section className="section section--alt grid-bg">
        <div className="container">
            <div className="section-header fade-in">
                <div className="section-header__badge">💎 Offres</div>
                <h2>Deux niveaux pour <span className="text-gradient">dominer votre marché</span></h2>
                <p>Choisissez l'arme qui correspond à vos ambitions.</p>
            </div>

            <div className="pricing-grid fade-in">
                {/*  Site Web  */}
                <div className="pricing-card">
                    <div className="pricing-card__icon">🌐</div>
                    <p className="pricing-card__name">Site Web Premium</p>
                    <div className="pricing-card__price"><span className="text-gradient">500€</span></div>
                    <p className="pricing-card__period">Paiement unique · Hébergement offert 1 an</p>
                    <p className="pricing-card__desc">Un site professionnel qui vous ressemble, optimisé pour convertir vos
                        visiteurs en clients.</p>
                    <div className="pricing-card__features">
                        <div className="pricing-card__feature"><span className="check">✓</span> Site multi-pages sur-mesure
                        </div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Design premium responsive</div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Optimisation SEO complète</div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Formulaire & système de contact
                        </div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Livré en 2 semaines</div>
                    </div>
                    <a href="a-propos.html#contact" className="btn btn--outline btn--lg btn--full">Choisir cette offre</a>
                </div>

                {/*  IA  */}
                <div className="pricing-card pricing-card--featured">
                    <div className="pricing-card__popular">🔥 Game changer</div>
                    <div className="pricing-card__icon">🤖</div>
                    <p className="pricing-card__name">IA Business</p>
                    <div className="pricing-card__price"><span className="text-gradient">1 000€</span></div>
                    <p className="pricing-card__period">Setup unique · à partir de 50€/mois</p>
                    <p className="pricing-card__desc">L'IA qui travaille pour vous : elle répond aux appels, scrute le web
                        et vous ramène des leads qualifiés.</p>
                    <div className="pricing-card__features">
                        <div className="pricing-card__feature"><span className="check">✓</span> IA téléphonique 24/7</div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Web scraping de leads ciblés
                        </div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Qualification automatique</div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Dashboard de suivi en temps réel
                        </div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Intégration CRM</div>
                        <div className="pricing-card__feature"><span className="check">✓</span> Support prioritaire</div>
                    </div>
                    <a href="a-propos.html#contact" className="btn btn--primary btn--lg btn--full">Choisir cette offre</a>
                </div>
            </div>

            <p style={{"textAlign": "center", "marginTop": "2rem", "color": "var(--color_text_muted)", "fontSize": "0.85rem"}}
                className="fade-in">
                💡 Combinez les deux offres pour un pack complet à <strong style={{"color": "var(--color_cyan)"}}>1
                    300€</strong> au lieu de 1 500€.
            </p>
        </div>
    </section>

    {/*  ═══ CTA ═══  */}
    <section className="section">
        <div className="container">
            <div className="cta fade-in">
                <h2>Prêt à <span className="text-gradient">automatiser</span> votre business ?</h2>
                <p>Réservez un appel gratuit de 15 min. On parle de votre projet, sans engagement.</p>
                <a href="a-propos.html#contact" className="btn btn--primary btn--lg">
                    🎁 Maquette offerte (10 min)
                </a>
            </div>
        </div>
    </section>

    {/*  ═══ FOOTER ═══  */}

    {/* ═══ MAILLAGE SEO INTERNE (ORPHAN PAGES FIX) ═══ */}
    <section className="section" style={{ backgroundColor: "var(--color-bg-dark)", borderTop: "1px solid var(--color-border-light)", padding: "4rem 0" }}>
        <div className="container">
            <h3 style={{ color: "var(--color-text-light)", marginBottom: "1.5rem", fontSize: "1.2rem", textAlign: "center" }}>Nos zones d'intervention web par IA</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                {seoLinks.map((link) => (
                    <Link key={link.slug} href={`/${link.slug}`} style={{ color: "var(--color-cyan)", textDecoration: "none", fontSize: "0.9rem", padding: "0.5rem 1rem", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "var(--radius-md)", backgroundColor: "rgba(6,182,212,0.05)" }}>
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
                        <Image src="/assets/images/logo-officiel.png" alt="Logo Montpellier-IA" width={600} height={400} className="footer__logo-img" style={{"height": "48px", "width": "auto", "borderRadius": "4px"}} /> <span
                            className="text-gradient">Montpellier-IA</span>
                    </div>
                    <p className="footer__desc">Sites web premium & solutions IA pour propulser votre business dans l'ère du
                        digital intelligent.</p>
                </div>
                <div>
                    <h4 className="footer__heading">Navigation</h4>
                    <div className="footer__links">
                        <a href="index.html">Accueil</a>
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
                <p>© 2026 Montpellier-IA — Conçu avec ❤️ & IA par Nael</p>
            </div>
        </div>
    </footer>



    

    

    


      <Script src="/script.js" strategy="afterInteractive" />
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.86/build/spline-viewer.js" strategy="afterInteractive" />
    </>
  );
}
