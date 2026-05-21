import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Démo IA vocale — Montpellier-IA',
  description: 'Écoutez une simulation d\'appel : l\'IA répond pour le cabinet d\'une avocate, qualifie le besoin et propose un rendez-vous.',
};

function AiVoiceDemo() {
  return (
    <section className="section section--alt grid-bg" id="demo-ia">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-header__badge">Démo en direct</div>
          <h2>Écoutez <span className="text-gradient">l&apos;IA en action</span></h2>
          <p>Scénario avocate : appel entrant, qualification, prise de rendez-vous.</p>
        </div>
        <div className="ai-demo-player fade-in" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="ai-demo-context">
            <div className="ai-demo-context__icon">⚖️</div>
            <div>
              <div className="ai-demo-context__label">Mise en situation</div>
              <div className="ai-demo-context__text">Simulation d&apos;un appel entrant pour le cabinet d&apos;une avocate. L&apos;IA répond, qualifie le besoin et propose un rendez-vous, sans intervention humaine.</div>
            </div>
          </div>
          <div className="ai-demo-card">
            <div className="ai-demo-waveform" id="waveformBars"><canvas id="waveformCanvas" width="700" height="72"></canvas></div>
            <div className="ai-demo-progress" id="demoProgressBar"><div className="ai-demo-progress__fill" id="demoProgressFill"></div><div className="ai-demo-progress__handle" id="demoProgressHandle"></div></div>
            <div className="ai-demo-time"><span id="demoCurrentTime">0:00</span><span id="demoDuration">—</span></div>
            <div className="ai-demo-controls">
              <button type="button" className="ai-demo-btn ai-demo-btn--skip" id="demoSkipBack" title="Reculer 10s">-10s</button>
              <button type="button" className="ai-demo-btn ai-demo-btn--play" id="demoPlayBtn">
                <svg id="demoPlayIcon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                <svg id="demoPauseIcon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'none' }}><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
              </button>
              <button type="button" className="ai-demo-btn ai-demo-btn--skip" id="demoSkipFwd" title="Avancer 10s">+10s</button>
            </div>
          </div>
          <div className="ai-demo-chapters">
            <div className="ai-demo-chapters__title">Accès rapide</div>
            <div className="ai-demo-chapters__list">
              <button type="button" className="ai-demo-chapter" data-time="0"><span className="ai-demo-chapter__time">0:00</span><span className="ai-demo-chapter__label">L&apos;IA décroche</span></button>
              <button type="button" className="ai-demo-chapter" data-time="8"><span className="ai-demo-chapter__time">0:08</span><span className="ai-demo-chapter__label">Qualification</span></button>
              <button type="button" className="ai-demo-chapter" data-time="18"><span className="ai-demo-chapter__time">0:18</span><span className="ai-demo-chapter__label">Rendez-vous</span></button>
            </div>
          </div>
          <div className="ai-demo-live-status"><span className="ai-demo-live-dot"></span><span className="ai-demo-live-text">IA connectée · flux audio en temps réel</span></div>
          <audio id="demoAudio" preload="metadata"><source src="/demo-ia-vocale.mp3" type="audio/mpeg" /><source src="https://files.catbox.moe/oey3xy.mp3" type="audio/mpeg" /></audio>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}><a href="a-propos.html#contact" className="btn btn--primary btn--lg btn--pulse">Je veux cette IA pour mon entreprise</a></div>
        </div>
      </div>
    </section>
  );
}

export default function DemoIaPage() {
  return (
    <>
      <canvas id="particles-canvas"></canvas>
      <nav className="navbar" id="navbar">
        <div className="container navbar__inner">
          <a href="/" className="navbar__logo">
            <Image src="/assets/images/logo-officiel.png" alt="Logo" width={600} height={400} className="navbar__logo-img" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <span className="text-gradient">Montpellier-IA</span>
          </a>
          <div className="navbar__links">
            <a href="/" className="navbar__link">Accueil</a>
            <a href="tarifs.html" className="navbar__link">Tarifs</a>
            <a href="exemples.html" className="navbar__link">Réalisations</a>
            <Link href="/demo-ia" className="navbar__link active">Démo IA</Link>
            <a href="a-propos.html" className="navbar__link">À propos</a>
          </div>
          <a href="a-propos.html#contact" className="btn btn--primary navbar__cta">Réserver un appel</a>
          <button type="button" className="navbar__toggle" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
        <div className="navbar__mobile" id="navbar-mobile">
          <a href="/">Accueil</a>
          <a href="tarifs.html">Tarifs</a>
          <a href="exemples.html">Réalisations</a>
          <Link href="/demo-ia">Démo IA</Link>
          <a href="a-propos.html">À propos</a>
          <a href="a-propos.html#contact" className="btn btn--primary btn--full" style={{ marginTop: '1rem' }}>Réserver un appel</a>
        </div>
      </nav>
      <section className="hero" style={{ minHeight: 'auto', padding: '8rem 0 2rem' }}>
        <div className="container">
          <div className="section-header fade-in" style={{ marginBottom: 0 }}>
            <h1>IA téléphonique <span className="text-gradient">en situation réelle</span></h1>
            <p style={{ marginTop: '1rem' }}>Démonstration complète : conversation avec scénario cabinet d&apos;avocate.</p>
            <p style={{ marginTop: '1rem' }}><a href="/" className="btn btn--ghost">← Retour à l&apos;accueil</a></p>
          </div>
        </div>
      </section>
      <AiVoiceDemo />
      <footer className="footer">
        <div className="container">
          <div className="footer__bottom"><p>© 2026 Montpellier-IA</p></div>
        </div>
      </footer>
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
