import { useState, useEffect, useCallback } from 'react'
import './HeroCarousel.css'

interface Slide {
  id: number
  title: string
  subtitle: string
  cta: string
  ctaHref: string
  tag: string
  gradient: string
  accent: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'IRON GRID',
    subtitle: 'February 2026 · Westin Chicago-Lombard',
    cta: 'Register Now',
    ctaHref: '#register',
    tag: 'MAIN EVENT',
    gradient: 'linear-gradient(135deg, #0d2a3d 0%, #07151f 50%, #001a2e 100%)',
    accent: '#5bb8e8',
  },
  {
    id: 2,
    title: 'ARC WORLD TOUR 2025',
    subtitle: 'Official Tournament Partner',
    cta: 'Learn More',
    ctaHref: '#games',
    tag: 'PARTNERSHIP',
    gradient: 'linear-gradient(135deg, #1a0d2e 0%, #0d0718 50%, #1a1030 100%)',
    accent: '#b070f0',
  },
  {
    id: 3,
    title: '2XKO MIXED MODE',
    subtitle: 'Riot Games · Competitive Play 2026',
    cta: 'View Details',
    ctaHref: '#games',
    tag: 'FEATURED GAME',
    gradient: 'linear-gradient(135deg, #1a2500 0%, #0d1800 50%, #0a2000 100%)',
    accent: '#80d840',
  },
  {
    id: 4,
    title: 'HOTEL PACKAGES',
    subtitle: 'Official Room Block · Book Now',
    cta: 'Hotel Info',
    ctaHref: '#hotels',
    tag: 'ACCOMMODATIONS',
    gradient: 'linear-gradient(135deg, #1a1a00 0%, #201400 50%, #180f00 100%)',
    accent: '#f0c040',
  },
]

interface ParticleStyle {
  '--x': string
  '--y': string
  '--delay': string
  '--size': string
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setActive(idx)
    setTimeout(() => setAnimating(false), 600)
  }, [animating])

  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo])
  const prev = useCallback(() => goTo((active - 1 + slides.length) % slides.length), [active, goTo])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const slide = slides[active]

  return (
    <section
      className="hero"
      style={{ '--slide-gradient': slide.gradient, '--slide-accent': slide.accent } as React.CSSProperties}
    >
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow" />
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="hero__particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--delay': `${Math.random() * 4}s`,
                '--size': `${2 + Math.random() * 4}px`,
              } as React.CSSProperties & ParticleStyle}
            />
          ))}
        </div>
      </div>

      <div className={`hero__content container ${animating ? 'hero__content--out' : 'hero__content--in'}`}>
        <div className="hero__tag">{slide.tag}</div>
        <h1 className="hero__title">{slide.title}</h1>
        <p className="hero__subtitle">{slide.subtitle}</p>
        <a href={slide.ctaHref} className="hero__cta">{slide.cta}</a>
      </div>

      <div className="hero__controls">
        <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === active ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="hero__frost" />
    </section>
  )
}
