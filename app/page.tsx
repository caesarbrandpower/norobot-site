const tools = [
  {
    name: 'BRANDPROMPT',
    description: 'Vertaal je website naar een merkprompt voor je AI.',
    url: 'brandprompt.newfound.agency',
    href: 'https://brandprompt.newfound.agency',
  },
  {
    name: 'MARKTSCAN',
    description:
      'Analyseer je concurrenten. Zie in een oogopslag waar je onderscheid zit.',
    url: 'concurrent-tool.vercel.app',
    href: 'https://concurrent-tool.vercel.app',
  },
  {
    name: 'BRANDPOWER',
    description: 'Bouw je merk in 10 stappen. Spar met je eigen AI-merkcoach.',
    url: 'brandpower-portal.vercel.app',
    href: 'https://brandpower-portal.vercel.app',
  },
  {
    name: 'WAY BETTER',
    description:
      'Deel klantinformatie veilig met AI, zonder dat het buiten jouw muren gaat.',
    url: 'wayb.etter',
    href: 'https://wayb.etter',
  },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="container hero">
        <p className="eyebrow hero-eyebrow fade-up">
          TOOLS THAT MAKE LIFE BETTER
        </p>

        <h1 className="hero-headline fade-up delay-1">
          AI built for <em>real people.</em>
        </h1>

        <p className="hero-body fade-up delay-2">
          NoRobot maakt tools die je dagelijkse leven een stukje makkelijker
          maken. Niet voor developers. Voor iedereen die al weet dat AI kan
          helpen.
        </p>

        <div className="hero-buttons fade-up delay-3">
          <a href="#tools" className="btn btn-primary">
            Bekijk de tools
          </a>
          <a href="#visie" className="btn btn-outline">
            Meer over NoRobot
          </a>
        </div>
      </section>

      <div className="container">
        <hr className="section-divider" />
      </div>

      {/* ── Tools ── */}
      <section id="tools" className="container section">
        <p className="eyebrow section-eyebrow fade-up">TOOLS</p>

        <div className="tools-grid">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`tool-card fade-up delay-${i + 2}`}
            >
              <span className="tool-name">{tool.name}</span>
              <p className="tool-description">{tool.description}</p>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-url"
              >
                {tool.url}
              </a>
              <div className="tool-badge">
                <span className="tool-badge-dot" />
                Powered by NoRobot
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        <hr className="section-divider" />
      </div>

      {/* ── Visie ── */}
      <section id="visie" className="container section">
        <p className="eyebrow section-eyebrow fade-up">WAAROM NOROBOT</p>

        <h2 className="section-headline fade-up delay-1">
          <em>Er zijn genoeg tools die indrukwekkend zijn.</em>
        </h2>

        <p className="section-body fade-up delay-2">
          Te weinig die iets oplossen. NoRobot bouwt tools voor mensen die al
          weten dat AI kan helpen, maar nog zoeken naar iets wat echt bij hun
          leven past. Praktisch, direct, zonder gedoe.
        </p>
      </section>

      <div className="container">
        <hr className="section-divider" />
      </div>

      {/* ── Contact ── */}
      <section id="contact" className="container section">
        <p className="eyebrow section-eyebrow fade-up">CONTACT</p>

        <h2 className="section-headline fade-up delay-1">
          Samen iets bouwen?
        </h2>

        <p className="section-body fade-up delay-2" style={{ marginBottom: '2rem' }}>
          Wil je samenwerken, een tool proberen of gewoon even sparren?
        </p>

        <a
          href="mailto:caesar@newfound.agency"
          className="mail-link fade-up delay-3"
        >
          caesar@newfound.agency
        </a>
      </section>

      {/* ── Footer ── */}
      <div className="container">
        <hr className="section-divider" />
      </div>
      <footer className="container footer">
        <p className="footer-text">
          NoRobot is een initiatief van Newfound - strategisch branding bureau.
        </p>
      </footer>
    </main>
  )
}
