'use client'

const tools = [
  {
    name: 'BRANDPROMPT',
    description: 'Vertaal je website naar een merkprompt voor je AI.',
    url: 'brandprompt.newfound.agency',
    href: 'https://brandprompt.newfound.agency',
  },
  {
    name: 'MARKTSCAN',
    description: 'Analyseer je concurrenten. Zie in één oogopslag waar je onderscheid zit.',
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
    name: 'OYAA',
    description: 'Deel klantinformatie veilig met AI, zonder dat het buiten jouw muren gaat.',
    url: 'oyaa-nine.vercel.app',
    href: 'https://oyaa-nine.vercel.app',
  },
]

export default function Home() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Navbar */}
      <nav className="container">
        <div className="navbar animate-fade-up">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="logo-mark" />
            <span className="logo-text">norobot</span>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container hero">
        <p className="section-label hero-label animate-fade-up delay-1">
          TOOLS THAT MAKE LIFE BETTER
        </p>

        <h1 className="font-serif hero-headline animate-fade-up delay-2">
          AI built for{' '}
          <em>real people</em>.
        </h1>

        <p className="font-sans hero-subtitle animate-fade-up delay-3">
          NoRobot maakt tools die je dagelijkse leven een stukje
          makkelijker maken. Niet voor developers. Voor iedereen die al
          weet dat AI kan helpen.
        </p>

        <div className="hero-buttons animate-fade-up delay-4">
          <a href="#tools" className="btn-primary font-sans">
            Bekijk de tools
          </a>
          <a href="#visie" className="btn-secondary font-sans">
            Meer over NoRobot
          </a>
        </div>
      </section>

      <div className="container"><hr className="section-divider" /></div>

      {/* Tools Section */}
      <section id="tools" className="container section">
        <p className="section-label animate-fade-up" style={{ marginBottom: '3rem' }}>
          TOOLS
        </p>

        <div className="tools-grid">
          {tools.map((tool, i) => (
            <div key={tool.name} className={`tool-card animate-fade-up delay-${i + 2}`}>
              <h3 className="tool-name">{tool.name}</h3>
              <p className="font-sans text-sub" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                {tool.description}
              </p>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-link"
              >
                {tool.url}
              </a>
              <div className="badge">
                <span style={{ marginRight: '0.375rem' }}>●</span>
                Powered by NoRobot
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container"><hr className="section-divider" /></div>

      {/* Visie Section */}
      <section id="visie" className="container section">
        <p className="section-label animate-fade-up" style={{ marginBottom: '2.5rem' }}>
          WAAROM NOROBOT
        </p>

        <h2 className="font-serif section-headline animate-fade-up delay-1">
          <em>Er zijn genoeg tools die indrukwekkend zijn.</em>
        </h2>

        <p className="font-sans section-body animate-fade-up delay-2">
          Te weinig die iets oplossen. NoRobot bouwt tools voor mensen die al weten
          dat AI kan helpen, maar nog zoeken naar iets wat echt bij hun leven past.
          Praktisch, direct, zonder gedoe.
        </p>
      </section>

      <div className="container"><hr className="section-divider" /></div>

      {/* Contact Section */}
      <section id="contact" className="container section">
        <p className="section-label animate-fade-up" style={{ marginBottom: '2.5rem' }}>
          CONTACT
        </p>

        <h2 className="font-serif section-headline animate-fade-up delay-1">
          Samen iets bouwen?
        </h2>

        <p className="font-sans section-body animate-fade-up delay-2" style={{ marginBottom: '2rem' }}>
          Wil je samenwerken, een tool proberen of gewoon even sparren?
        </p>

        <a
          href="mailto:caesar@newfound.agency"
          className="font-sans link-orange animate-fade-up delay-3"
          style={{ fontSize: '1.1875rem' }}
        >
          caesar@newfound.agency
        </a>
      </section>

      {/* Footer */}
      <div className="container">
        <footer className="footer">
          <p className="footer-note">
            NoRobot is een initiatief van Newfound - strategisch branding bureau.
          </p>
        </footer>
      </div>
    </main>
  )
}
