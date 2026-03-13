const RELEASES = [
  { title: 'El respeto es algo muy lindo', year: '2026', type: 'Album' },
  { title: '66',                           year: '2025', type: 'Album' },
  { title: 'DanC',                         year: '2025', type: 'Album' },
  { title: 'HMC',                          year: '2025', type: 'Album' },
  { title: 'Living Being',                 year: '2025', type: 'Single' },
  { title: 'Soñé que estaba',              year: '2025', type: 'Single' },
  { title: 'qORigin',                      year: '2025', type: 'Single' },
  { title: 'debounceTime',                 year: '2025', type: 'Single' },
  { title: 'Madness Minor',                year: '2025', type: 'Single' },
]

const SPOTIFY_BASE =
  'https://open.spotify.com/intl-es/artist/7ytoVQBwppgzLlauvYSyIu'

export default function Releases() {
  return (
    <section className="px-6 sm:px-12 md:px-16 py-10 sm:py-14" id="releases">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-6">
        <span
          className="uppercase text-blood"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
          }}
        >
          Discografía
        </span>
        <div className="flex-1" style={{ height: '1px', background: 'var(--color-line)' }} />
      </div>

      {/* Table header */}
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

      {/* Rows */}
      {RELEASES.map((r, i) => (
        <a
          key={r.title}
          href={SPOTIFY_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid gap-4 items-center py-4 sm:py-5 border-b transition-all duration-150 hover:bg-slab"
          style={{
            gridTemplateColumns: '2rem 1fr auto auto',
            borderColor: 'var(--color-line)',
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
              fontWeight: i === 0 ? 700 : 400,
            }}
          >
            {r.title}
            {i === 0 && (
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
            {r.year}
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
            {r.type}
          </span>
        </a>
      ))}
    </section>
  )
}
