import './TextPage.css'

export interface TextPageSection {
  id: string
  heading: string
  content: React.ReactNode
}

export interface SidebarLink {
  label: string
  href: string
}

export interface TextPageProps {
  title: string
  subtitle?: string
  effectiveDate?: string
  lastUpdated?: string
  sections: TextPageSection[]
  sidebarLinks?: SidebarLink[]
  relatedPages?: SidebarLink[]
  contactBlock?: React.ReactNode
}

export default function TextPage({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  sections,
  sidebarLinks,
  relatedPages,
  contactBlock,
}: TextPageProps) {
  const toc = sidebarLinks ?? sections.map(s => ({ label: s.heading, href: `#${s.id}` }))

  return (
    <div className="text-page">
      {/* Banner */}
      <div className="text-page__banner">
        <div className="container">
          <nav className="text-page__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="text-page__breadcrumb-sep">›</span>
            <span>{title}</span>
          </nav>
          <h1 className="text-page__title">{title}</h1>
          {(subtitle || effectiveDate || lastUpdated) && (
            <p className="text-page__meta">
              {subtitle && <span>{subtitle}</span>}
              {effectiveDate && (
                <span>Effective {effectiveDate}</span>
              )}
              {lastUpdated && (
                <span>Last updated {lastUpdated}</span>
              )}
            </p>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="container">
        <div className="text-page__layout">
          {/* Main content */}
          <main className="text-page__main">
            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="text-page__section"
              >
                <h2 className="text-page__section-heading">{section.heading}</h2>
                <div className="text-page__section-body">
                  {section.content}
                </div>
                {i < sections.length - 1 && <hr className="text-page__divider" />}
              </section>
            ))}

            {effectiveDate && (
              <div className="text-page__effective-date">
                <strong>Effective Date</strong>
                {effectiveDate}
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="text-page__sidebar">
            {toc.length > 0 && (
              <div className="text-page__sidebar-widget">
                <div className="text-page__sidebar-heading">On this page</div>
                {toc.map(link => (
                  <a key={link.label} href={link.href} className="text-page__toc-link">
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {relatedPages && relatedPages.length > 0 && (
              <div className="text-page__sidebar-widget">
                <div className="text-page__sidebar-heading">Legal pages</div>
                {relatedPages.map(link => (
                  <a key={link.label} href={link.href} className="text-page__sidebar-link">
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {contactBlock && (
              <div className="text-page__sidebar-widget">
                <div className="text-page__sidebar-heading">Contact</div>
                <div className="text-page__contact-card">
                  {contactBlock}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
