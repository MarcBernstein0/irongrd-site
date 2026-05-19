import './Partners.css'

interface Partner {
  name: string
  href: string
}

const partners: Partner[] = [
  { name: 'Gaming Gen', href: '#' },
  { name: '2XKO', href: '#' },
  { name: 'Arc System Works', href: '#' },
  { name: 'DuPage', href: '#' },
  { name: 'Midwest Battleground', href: '#' },
  { name: 'Victrix', href: '#' },
  { name: 'Okizeme Coffee', href: '#' },
  { name: 'Manamoon', href: '#' },
  { name: 'Attasa', href: '#' },
  { name: 'SNK', href: '#' },
  { name: 'Skullgirls', href: '#' },
  { name: 'Gatekeep', href: '#' },
  { name: 'Rectangle Corner', href: '#' },
  { name: 'Popcorn', href: '#' },
  { name: 'G4G', href: '#' },
  { name: 'Portraits Couture', href: '#' },
  { name: 'Paragon FGC', href: '#' },
]

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="partners__header">
          <h2 className="partners__heading">IRONGRID Partners</h2>
          <div className="partners__line" />
        </div>
        <div className="partners__grid">
          {partners.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              className="partner-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="partner-card__logo-placeholder">
                <span className="partner-card__name">{p.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
