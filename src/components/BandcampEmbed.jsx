const BANDCAMP_BASE = 'https://fracasoinminente.bandcamp.com'

// IDs numéricos obtenidos de las páginas de Bandcamp (parámetro track= es más confiable que url=)
const TRACKS = [
  { label: 'Madness minor',       id: 1884971493 },
  { label: 'debounceTime',        id: 2045998602 },
  { label: 'danC',                id: 3817215727 },
  { label: 'qORigin',             id: 886539658  },
  { label: 'Living Being (inst.)', id: 3455489065 },
  { label: 'HMC',                 id: 3911471683 },
  { label: 'rkk',                 id: 2391899662 },
]

function embedSrc(trackId) {
  return `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=small/bgcol=070707/linkcol=cc0000/transparent=true/`
}

export default function BandcampEmbed() {
  return (
    <section className="px-6 sm:px-12 md:px-16 py-10 sm:py-14" id="bandcamp">
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
          Bandcamp
        </h2>
        <div className="flex-1" style={{ height: '1px', background: 'var(--color-line)' }} />
      </div>

      <div
        style={{
          border: '1px solid var(--color-line)',
          background: 'var(--color-slab)',
          overflow: 'hidden',
        }}
      >
        {TRACKS.map((t) => (
          <iframe
            key={t.id}
            title={`Bandcamp: ${t.label}`}
            src={embedSrc(t.id)}
            style={{ border: 0, width: '100%', height: '42px', display: 'block' }}
            seamless
            loading="lazy"
          />
        ))}
      </div>

      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--color-ink-faint)',
          letterSpacing: '0.1em',
          marginTop: '0.75rem',
        }}
      >
        <a
          href={BANDCAMP_BASE}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--color-blood)', textDecoration: 'underline' }}
        >
          Ver todo en Bandcamp
        </a>
        {' — comprar y escuchar en alta calidad.'}
      </p>
    </section>
  )
}
