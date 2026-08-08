import { BANDCAMP_BASE, LEADER, SPOTIFY_ARTIST } from '../data/music'

const INSTAGRAM = 'https://www.instagram.com/fracasoinminente.band'

const LINKS = [
  {
    id: 'spotify-rain',
    name: `Spotify — ${LEADER.title}`,
    hint: 'Single líder',
    url: LEADER.spotifyUrl,
    primary: true,
  },
  {
    id: 'spotify-artist',
    name: 'Spotify — perfil',
    hint: 'Seguí al artista',
    url: SPOTIFY_ARTIST,
    primary: false,
  },
  {
    id: 'bandcamp-rain',
    name: `Bandcamp — ${LEADER.title}`,
    hint: 'Comprá / alta calidad',
    url: LEADER.bandcampUrl,
    primary: false,
  },
  {
    id: 'bandcamp',
    name: 'Bandcamp — todo',
    hint: 'Catálogo',
    url: BANDCAMP_BASE,
    primary: false,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    hint: '@fracasoinminente.band',
    url: INSTAGRAM,
    primary: false,
  },
  {
    id: 'web',
    name: 'Web oficial',
    hint: 'fracasoinminente.com',
    url: '/',
    primary: false,
  },
]

export default function SmartLinks() {
  return (
    <div className="min-h-svh zone-dark flex flex-col">
      <main
        className="flex-1 px-6 sm:px-10 py-16 sm:py-20"
        style={{ maxWidth: '480px', margin: '0 auto', width: '100%' }}
      >
        <p className="section-label" style={{ marginBottom: '0.75rem' }}>
          Fracaso Inminente
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 12vw, 4rem)',
            lineHeight: 0.9,
            textTransform: 'uppercase',
            margin: '0 0 0.5rem',
            color: 'var(--color-ink)',
          }}
        >
          {LEADER.title}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-ink-dim)',
            margin: '0 0 2rem',
          }}
        >
          Smart link · campaña single líder
        </p>

        <nav className="flex flex-col gap-3" aria-label="Enlaces">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith('/') ? undefined : '_blank'}
              rel={link.url.startsWith('/') ? undefined : 'noopener noreferrer'}
              className="cursor-pointer transition-colors duration-200 flex items-center justify-between gap-4"
              style={{
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                minHeight: '52px',
                padding: '0.9rem 1.1rem',
                border: `1px solid ${link.primary ? 'var(--color-blood)' : 'var(--color-line)'}`,
                background: link.primary ? 'var(--color-blood)' : 'var(--color-slab)',
                color: 'var(--color-ink)',
              }}
            >
              <span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {link.name}
                </span>
                <span
                  style={{
                    display: 'block',
                    marginTop: '0.25rem',
                    fontSize: '0.6rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: link.primary ? 'rgba(255,255,255,0.75)' : 'var(--color-ink-faint)',
                  }}
                >
                  {link.hint}
                </span>
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </nav>
      </main>
    </div>
  )
}
