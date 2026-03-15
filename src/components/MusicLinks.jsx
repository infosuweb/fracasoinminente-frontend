const LINKS = [
  {
    name: 'Spotify',
    label: 'Escuchá ahora',
    url: 'https://open.spotify.com/intl-es/artist/7ytoVQBwppgzLlauvYSyIu?si=iaihBXycSNue4DRmcmPWkQ',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    label: 'Seguinos',
    url: 'https://www.instagram.com/fracasoinminente.band',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Bandcamp',
    label: 'Comprá la música',
    url: 'https://fracasoinminente.bandcamp.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z" />
      </svg>
    ),
  },
]

export default function MusicLinks() {
  return (
    <section className="px-6 sm:px-12 md:px-16 py-10 sm:py-14" id="music">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-6">
        <h2
          className="uppercase text-blood"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            margin: 0,
            fontWeight: 400,
          }}
        >
          Plataformas
        </h2>
        <div className="flex-1" style={{ height: '1px', background: 'var(--color-line)' }} />
      </div>

      {/* Links as full-width rows */}
      <div className="space-y-px">
        {LINKS.map((link, i) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-6 sm:py-8 border-b transition-all duration-200"
            style={{ borderColor: 'var(--color-line)' }}
          >
            <div className="flex items-center gap-5 sm:gap-8">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-ink-dim)',
                  letterSpacing: '0.15em',
                  minWidth: '2rem',
                }}
              >
                0{i + 1}
              </span>
              <div className="flex items-center gap-4">
                <span className="text-ink-dim group-hover:text-blood transition-colors duration-200">
                  {link.icon}
                </span>
                <span
                  className="text-ink group-hover:text-blood transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                    lineHeight: '1',
                    letterSpacing: '0.02em',
                  }}
                >
                  {link.name}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <span
                className="hidden sm:block text-ink-dim group-hover:text-blood transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-ink-faint group-hover:text-blood group-hover:translate-x-1 transition-all duration-200"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
