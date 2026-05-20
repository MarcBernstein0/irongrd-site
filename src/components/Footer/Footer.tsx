import { Link } from 'react-router'
import './Footer.css'

interface FooterLink {
  label: string
  to: string
  disabled?: boolean
}

interface FooterCol {
  heading: string
  links: FooterLink[]
}

const footerCols: FooterCol[] = [
  {
    heading: 'Iron Grid',
    links: [
      { label: 'Contact Us', to: '#' },
      { label: 'Terms of Service', to: '/terms-of-service' },
      { label: 'Privacy Policy', to: '#' },
      { label: 'Cookies', to: '#' },
    ],
  },
  {
    heading: 'Our Streams',
    links: [
      { label: 'IronGrid', to: '#' },
      { label: 'Fever', to: '#' },
      { label: 'Panda', to: '#' },
      { label: 'Bifu', to: '#' },
    ],
  },
  {
    heading: 'Get Social',
    links: [
      { label: '@IronGrid (X)', to: '#' },
    ],
  },
  {
    heading: 'Application Forms',
    links: [
      { label: 'Join Our Team', to: '#' },
      { label: 'Get on the Mic', to: '#' },
      { label: 'Run a Side Tournament', to: '#' },
      { label: 'Sell Your Art', to: '#', disabled: true },
      { label: 'Custom Request', to: '#' },
    ],
  },
]

const bottomNavLinks = ['Home','Register','Games','Schedule','Venue','Policies','Merch'] as const

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="footer__logo-main">IRON</span>
                <span className="footer__logo-sub">GRID</span>
              </div>
              <p className="footer__tagline">
                New Jersey's Premeire<br />Fighting Game Monthly
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="footer__social-link" aria-label="X / Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="footer__social-link" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--navy)"/></svg>
                </a>
              </div>
            </div>

            {footerCols.map(col => (
              <div key={col.heading} className="footer__col">
                <h4 className="footer__col-heading">{col.heading}</h4>
                <ul className="footer__col-links">
                  {col.links.map(link => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className={`footer__col-link ${link.disabled ? 'footer__col-link--disabled' : ''}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">
            © {new Date().getFullYear()} IRONGRID. All rights reserved.
          </p>
          <nav className="footer__bottom-nav">
            {bottomNavLinks.map(label => (
              <a key={label} href="#" className="footer__bottom-link">{label}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
