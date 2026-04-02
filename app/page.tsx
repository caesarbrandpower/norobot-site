export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="eyebrow hero-eyebrow fade-up d1">
                TOOLS THAT MAKE LIFE BETTER
              </p>
              <h1 className="hero-headline fade-up d2">
                <span className="tech">AI built for </span>
                <span className="human">real people.</span>
              </h1>
              <p className="hero-body fade-up d3">
                NoRobot maakt tools die je dagelijkse leven een stukje
                makkelijker maken. Niet voor developers. Voor iedereen die al
                weet dat AI kan helpen.
              </p>
              <div className="hero-buttons fade-up d4">
                <a href="#tools" className="btn btn-primary">
                  Bekijk onze tools
                </a>
                <a href="#contact" className="btn btn-outline">
                  Neem contact op
                </a>
              </div>
            </div>
            <div className="hero-visual fade-up d5">
              <span className="hero-glyph" aria-hidden="true">NR</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section id="tools" className="tools-section">
        <div className="container">
          <p className="eyebrow tools-eyebrow reveal">TOOLS</p>
          <div className="tools-grid">
            <div className="tool-card reveal d1">
              <span className="tool-name">BRANDPROMPT</span>
              <p className="tool-description">
                Genereer een complete merkpositionering in minuten. Van
                doelgroep tot tone of voice.
              </p>
              <a
                href="https://brandprompt.newfound.agency"
                className="tool-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                brandprompt.newfound.agency
              </a>
              <div className="tool-pill tool-pill--live">
                <span className="tool-pill-label">Live</span>
              </div>
            </div>

            <div className="tool-card reveal d2">
              <span className="tool-name">MARKTSCAN</span>
              <p className="tool-description">
                Analyseer je concurrenten en ontdek kansen in de markt met
                AI-gestuurde inzichten.
              </p>
              <a
                href="https://concurrent-tool.vercel.app"
                className="tool-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                concurrent-tool.vercel.app
              </a>
              <div className="tool-pill tool-pill--live">
                <span className="tool-pill-label">Live</span>
              </div>
            </div>

            <div className="tool-card reveal d3">
              <span className="tool-name">BRANDPOWER</span>
              <p className="tool-description">
                Je persoonlijke AI brand coach. Bouw een sterker merk met
                begeleide sessies.
              </p>
              <a
                href="https://brandpower-portal.vercel.app"
                className="tool-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                brandpower-portal.vercel.app
              </a>
              <div className="tool-pill tool-pill--live">
                <span className="tool-pill-label">Live</span>
              </div>
            </div>

            <div className="tool-card reveal d4">
              <span className="tool-name">WAY BETTER</span>
              <p className="tool-description">
                Vergelijk opties en neem betere beslissingen. Helder,
                gestructureerd, snel.
              </p>
              <span className="tool-url">wayb.etter</span>
              <div className="tool-pill tool-pill--soon">
                <span className="tool-pill-label">Binnenkort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visie (dark + noise) ── */}
      <section id="visie" className="visie-section" data-dark>
        <div className="container">
          <div className="visie-inner">
            <p className="eyebrow reveal" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
              WAAROM NOROBOT
            </p>
            <h2 className="visie-headline reveal d1">
              Er zijn genoeg tools die indrukwekkend zijn.
            </h2>
            <p className="visie-body reveal d2">
              Te weinig die iets oplossen. NoRobot bouwt tools voor mensen die
              al weten dat AI kan helpen, maar nog zoeken naar iets wat echt
              bij hun leven past. Praktisch, direct, zonder gedoe.
            </p>
          </div>
          <span className="visie-deco" aria-hidden="true">*</span>
        </div>
      </section>

      {/* ── Contact + Footer ── */}
      <section id="contact" className="contact-section" data-dark>
        <div className="container">
          <div className="contact-inner">
            <p className="eyebrow reveal" style={{ marginBottom: '2rem', color: 'var(--faint)' }}>
              CONTACT
            </p>
            <h2 className="contact-headline reveal d1">SAMEN IETS BOUWEN?</h2>
            <p className="contact-body reveal d2">
              Wil je samenwerken, een tool proberen of gewoon even sparren?
            </p>
            <a
              href="mailto:caesar@newfound.agency"
              className="mail-link reveal d3"
            >
              caesar@newfound.agency
            </a>
          </div>

          <footer className="site-footer">
            <div className="footer-top">
              <span className="footer-logo">
                <span className="logo-dot" />
                <span className="logo-no">no</span>
                <span className="logo-robot">robot</span>
              </span>
              <nav className="footer-nav">
                <a href="/tools">Tools</a>
                <a href="/notes">Notes</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
            <div className="footer-bottom">
              <span className="footer-copy">
                &copy; {new Date().getFullYear()} NoRobot.ai
              </span>
              <span className="footer-copy">
                NoRobot is een initiatief van Newfound
              </span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
