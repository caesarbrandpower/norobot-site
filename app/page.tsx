export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow hero-eyebrow fade-up d1">TOOLS THAT MAKE LIFE BETTER</p>
          <h1 className="hero-headline fade-up d2">
            AI built for <em>real people.</em>
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
          <p className="eyebrow section-eyebrow fade-up">TOOLS</p>
          <div className="tools-grid">
            <div className="tool-card fade-up d1">
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
              <div className="tool-badge">
                <span className="tool-badge-dot" />
                Live
              </div>
            </div>

            <div className="tool-card fade-up d2">
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
              <div className="tool-badge">
                <span className="tool-badge-dot" />
                Live
              </div>
            </div>

            <div className="tool-card fade-up d3">
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
              <div className="tool-badge">
                <span className="tool-badge-dot" />
                Live
              </div>
            </div>

            <div className="tool-card fade-up d4">
              <span className="tool-name">WAY BETTER</span>
              <p className="tool-description">
                Vergelijk opties en neem betere beslissingen. Helder,
                gestructureerd, snel.
              </p>
              <span className="tool-url">wayb.etter</span>
              <div className="tool-badge">
                <span className="tool-badge-dot" />
                Binnenkort
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="visie" className="section">
        <div className="container">
          <p className="eyebrow section-eyebrow fade-up">WAAROM NOROBOT</p>
          <h2 className="section-headline fade-up d1">
            <em>Er zijn genoeg tools die indrukwekkend zijn.</em>
          </h2>
          <p className="section-body fade-up d2">
            Te weinig die iets oplossen. NoRobot bouwt tools voor mensen die
            al weten dat AI kan helpen, maar nog zoeken naar iets wat echt bij
            hun leven past. Praktisch, direct, zonder gedoe.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="contact" className="section">
        <div className="container">
          <p className="eyebrow section-eyebrow fade-up">CONTACT</p>
          <h2 className="section-headline fade-up d1">
            <em>Samen iets bouwen?</em>
          </h2>
          <p className="section-body fade-up d2">
            Wil je samenwerken, een tool proberen of gewoon even sparren?
          </p>
          <a
            href="mailto:caesar@newfound.agency"
            className="mail-link fade-up d3"
          >
            caesar@newfound.agency
          </a>
        </div>
      </section>

      <hr className="section-divider" />

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} NoRobot.ai. Alle rechten
            voorbehouden.
          </p>
        </div>
      </footer>
    </main>
  )
}
