import './QuickLinks.css'

interface QuickLink {
  label: string
  href: string
  icon: string
  primary?: boolean
}

const links: QuickLink[] = [
  { label: 'Hotel Information', href: '#hotels', icon: '🏨' },
  { label: 'Register Now', href: '#register', icon: '✍️', primary: true },
  { label: 'Games & Bonuses', href: '#games', icon: '🎮' },
  { label: 'Event Venue', href: '#venue', icon: '📍' },
  { label: 'Schedule', href: '#schedule', icon: '📅' },
  { label: 'Contact Us', href: '#contact', icon: '✉️' },
]

export default function QuickLinks() {
  return (
    <section className="quicklinks">
      <div className="container">
        <div className="quicklinks__grid">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`quicklinks__item ${link.primary ? 'quicklinks__item--primary' : ''}`}
            >
              <span className="quicklinks__icon">{link.icon}</span>
              <span className="quicklinks__label">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
