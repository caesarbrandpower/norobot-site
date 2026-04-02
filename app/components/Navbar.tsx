'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-mark" />
            <span className="logo-text">norobot</span>
          </Link>

          <nav className="nav-links">
            <Link href="/tools" className="nav-link">Tools</Link>
            <Link href="/notes" className="nav-link">Notes</Link>
            <Link href="/#contact" className="nav-link">Contact</Link>
          </nav>

          <button
            className={`hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <Link href="/tools" className="nav-link" onClick={() => setMenuOpen(false)}>
          Tools
        </Link>
        <Link href="/notes" className="nav-link" onClick={() => setMenuOpen(false)}>
          Notes
        </Link>
        <Link href="/#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  )
}
