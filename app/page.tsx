'use client'

import Link from 'next/link'

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
        <div className="navbar">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: '#D4580A' }}
            />
            <span className="font-serif text-xl lowercase" style={{ color: '#1A1A1A' }}>
              norobot
            </span>
          </div>

          {/* Hamburger (visual only) */}
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container hero">
        <p className="section-label hero-label">TOOLS THAT MAKE LIFE BETTER</p>

        <h1 className="font-serif hero-headline">
          AI built for{' '}
          <em>real people</em>.
        </h1>

        <p className="font-sans hero-subtitle">
          NoRobot maakt tools die je dagelijkse leven een stukje makkelijker maken. 
          Niet voor developers. Voor iedereen die al weet dat AI kan helpen.
        </p>

        <div className="hero-buttons">
          <a href="#tools" className="btn-primary font-sans">
            Bekijk de tools
          </a>
          <a href="#visie" className="btn-secondary font-sans">
            Meer over NoRobot
          </a>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="container section">
        <p className="section-label" style={{ marginBottom: '2rem' }}>TOOLS</p>

        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.name} className="tool-card">
              <h3 className="tool-name">{tool.name}</h3>
              <p className="font-sans text-sub" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {tool.description}
              </p>
              <a 
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sub"
                style={{ 
                  fontSize: '0.875rem', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D4580A'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B6560'}
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

      {/* Visie Section */}
      <section id="visie" className="container section">
        <p className="section-label" style={{ marginBottom: '2rem' }}>WAAROM NOROBOT</p>

        <h2 className="font-serif section-headline">
          <em>Er zijn genoeg tools die indrukwekkend zijn.</em>
        </h2>

        <p className="font-sans section-body">
          Te weinig die iets oplossen. NoRobot bouwt tools voor mensen die al weten 
          dat AI kan helpen, maar nog zoeken naar iets wat echt bij hun leven past. 
          Praktisch, direct, zonder gedoe.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container section" style={{ paddingBottom: '5rem' }}>
        <p className="section-label" style={{ marginBottom: '2rem' }}>CONTACT</p>

        <h2 className="font-serif section-headline">
          Samen iets bouwen?
        </h2>

        <p className="font-sans section-body" style={{ marginBottom: '1.5rem' }}>
          Wil je samenwerken, een tool proberen of gewoon even sparren?
        </p>

        <a 
          href="mailto:caesar@newfound.agency" 
          className="font-sans link-orange"
          style={{ fontSize: '1.125rem' }}
        >
          caesar@newfound.agency
        </a>

        <p className="font-sans footer-note">
          NoRobot is een initiatief van Newfound — strategisch branding bureau.
        </p>
      </section>
    </main>
  )
}
