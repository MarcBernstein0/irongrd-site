import './NewsSection.css'

interface NewsItem {
  id: number
  category: string
  date: string
  title: string
  excerpt: string
  href: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: 'Events',
    date: 'Jan 15, 2026',
    title: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate convallis lectus, a fermentum libero eleifend sit amet. Quisque molestie vulputate iaculis. Etiam id aliquam ante.',
    excerpt: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate convallis lectus, a fermentum libero eleifend sit amet. Quisque molestie vulputate iaculis. Etiam id aliquam ante. Maecenas lectus est, finibus nec fringilla at, imperdiet et felis. Nulla facilisi. Pellentesque nec erat quis eros ultrices accumsan.',
    href: '#',
  },
]

export default function NewsSection() {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news__header">
          <h2 className="news__heading">Latest News</h2>
          <div className="news__heading-line" />
          <a href="#" className="news__all">View All →</a>
        </div>

        <div className="news__grid">
          {newsItems.map((item, i) => (
            <article
              key={item.id}
              className="news-card"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="news-card__top">
                <span className="news-card__category">{item.category}</span>
                <span className="news-card__date">{item.date}</span>
              </div>
              <h3 className="news-card__title">{item.title}</h3>
              <p className="news-card__excerpt">{item.excerpt}</p>
              <a href={item.href} className="news-card__link">
                Read More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <div className="news-card__glow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
