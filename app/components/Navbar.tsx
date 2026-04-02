'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <span className="logo-dot" />
            <span className="logo-no">no</span>
            <span className="logo-robot">robot</span>
          </Link>

          <nav className="nav-links">
            <Link href="/tools" className="nav-link">Tools</Link>
            <Link href="/notes" className="nav-link">Notes</Link>
            <Link href="/#contact" className="nav-link">Contact</Link>
          </nav>

          <button
            className={`hamburger${open ? ' is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' is-open' : ''}`}>
        <Link href="/tools" onClick={() => setOpen(false)}>Tools</Link>
        <Link href="/notes" onClick={() => setOpen(false)}>Notes</Link>
        <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </header>
  )
}
