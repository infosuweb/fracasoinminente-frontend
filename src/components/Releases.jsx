import { RELEASES, SPOTIFY_ARTIST } from '../data/music'

export default function Releases() {
  return (
    <section className="px-6 sm:px-12 md:px-16 py-10 sm:py-14" id="releases">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="section-label">Discografía</h2>
        <div className="flex-1" style={{ height: '1px', background: 'var(--color-line)' }} />
      </div>

      <div
        className="grid gap-4 pb-3 mb-1"
        style={{
          gridTemplateColumns: '2rem 1fr auto auto',
          borderBottom: '1px solid var(--color-line)',
        }}
      >
        {['#', 'Título', 'Año', 'Tipo'].map((h) => (
          <span
            key={h}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--color-ink-faint)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {RELEASES.map((release, i) => (
        <a
          key={release.title}
          href={release.spotifyUrl ?? SPOTIFY_ARTIST}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid gap-4 items-center py-4 sm:py-5 border-b transition-colors duration-150 hover:bg-slab cursor-pointer"
          style={{
            gridTemplateColumns: '2rem 1fr auto auto',
            borderColor: 'var(--color-line)',
            minHeight: '44px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--color-ink-faint)',
              letterSpacing: '0.1em',
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <span
            className="group-hover:text-blood transition-colors duration-150 truncate pr-4"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: '#e8e8e8',
              fontWeight: release.isNew ? 700 : 400,
            }}
          >
            {release.title}
            {release.isNew && (
              <span
                className="ml-3 align-middle"
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-blood)',
                  textTransform: 'uppercase',
                  border: '1px solid var(--color-blood)',
                  padding: '1px 5px',
                  verticalAlign: 'middle',
                }}
              >
                Nuevo
              </span>
            )}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-ink-dim)',
            }}
          >
            {release.year}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--color-ink-faint)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {release.type}
          </span>
        </a>
      ))}
    </section>
  )
}
