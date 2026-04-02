export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow hero-eyebrow fade-up d1">TOOLS THAT MAKE LIFE BETTER</p>
          <h1 className="hero-headline fade-up d2">
            <span className="tech">AI built for </span>
            <span className="human">real people.</span>
          </h1>
          <p className="hero-body fade-up d3">
            NoRobot maakt tools die je dagelijkse leven een stukje makkelijker
            maken. Niet voor developers. Voor iedereen die al weet dat AI kan
            helpen.
          </p>
          <div className="hero-buttons fade-up d4">
            <a href="#tools" className="btn btn-primary">Bekijk onze tools</a>
            <a href="#contact" className="btn btn-outline">Neem contact op</a>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="tools" className="section">
        <div className="container">
          <p className="eyebrow section-eyebrow reveal">TOOLS</p>
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
                <span className="tool-pill-dot" />
                Live
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
                <span className="tool-pill-dot" />
                Live
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
                <span className="tool-pill-dot" />
                Live
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
                <span className="tool-pill-dot" />
                Binnenkort
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section" data-dark>
        <div className="container">
          <div className="dark-visie" id="visie">
            <p className="eyebrow section-eyebrow reveal">WAAROM NOROBOT</p>
            <h2 className="section-headline reveal d1">
              <em>Er zijn genoeg tools die indrukwekkend zijn.</em>
            </h2>
            <p className="section-body reveal d2">
              Te weinig die iets oplossen. NoRobot bouwt tools voor mensen die
              al weten dat AI kan helpen, maar nog zoeken naar iets wat echt bij
              hun leven past. Praktisch, direct, zonder gedoe.
            </p>
          </div>

          <div id="contact">
            <p className="eyebrow section-eyebrow reveal">CONTACT</p>
            <h2 className="contact-headline reveal d1">SAMEN IETS BOUWEN?</h2>
            <p className="section-body reveal d2">
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
            <div className="footer-inner">
              <span className="footer-logo">
                <span className="logo-dot" />
                <span className="logo-text">norobot</span>
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
                NoRobot is een initiatief van Newfound &mdash; strategisch branding bureau.
              </span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
