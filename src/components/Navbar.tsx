import { useState, useEffect } from 'react'
import './Navbar.css'

interface NavLink {
  label: string
  href: string
  highlight?: boolean
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Register', href: '#register', highlight: true },
  { label: 'Games', href: '#games' },
  { label: 'Matcherino', href: '#matcherino' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Venue', href: '#venue' },
  { label: 'Policies', href: '#policies' },
  { label: 'News', href: '#news' },
  { label: 'Merch', href: '#merch' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-text">IRON</span>
          <span className="navbar__logo-sub">GRID</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link ${link.highlight ? 'navbar__link--highlight' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
