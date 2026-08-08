const PRESS = [
  {
    outlet: 'La Caverna',
    title: 'Cuatro tracks, cuatro energías: del punk explosivo al trap hipnótico',
    quote:
      'Intensa, contemplativa y con un sello artístico propio que la vuelve profundamente llamativa.',
    date: 'Mar 15, 2026',
    url: 'https://lacaverna.net/cuatro-tracks-cuatro-energias-del-punk-explosivo-al-trap-hipnotico/',
  },
  {
    outlet: 'Freim TV',
    title: 'Santino Salvadore, Cuddle Death, Fracaso Inminente: guitarras intensas entre pop-rock y punk',
    quote:
      'La propuesta se mueve dentro de un espacio íntimo donde la sencillez instrumental permite que el mensaje y la reflexión personal se conviertan en el eje central de la experiencia musical.',
    date: '2026',
    url: 'https://freim.tv/santino-salvadore-cuddle-death-fracaso-inminente-guitarras-intensas-entre-pop-rock-y-punk/',
  },
]

export default function Press() {
  return (
    <section className="px-6 sm:px-12 md:px-16 py-10 sm:py-14" id="press">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="section-label">Prensa</h2>
        <div className="flex-1" style={{ height: '1px', background: 'var(--color-line)' }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PRESS.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 p-6 transition-colors duration-200 cursor-pointer press-item"
            style={{
              background: 'var(--color-slab)',
              borderTop: '2px solid var(--color-line)',
              textDecoration: 'none',
              minHeight: '44px',
            }}
          >
            <span
              className="uppercase"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '0.85rem',
                letterSpacing: '0.18em',
                color: 'var(--color-blood)',
              }}
            >
              {item.outlet}
            </span>

            {/* Title */}
            <span
              className="group-hover:text-blood transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: '#e8e8e8',
                fontWeight: 700,
                lineHeight: 1.4,
              }}
            >
              {item.title}
            </span>

            {/* Quote */}
            <blockquote
              style={{
                margin: 0,
                paddingLeft: '0.85rem',
                borderLeft: '2px solid var(--color-blood)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontStyle: 'italic',
                color: 'var(--color-ink-dim)',
                lineHeight: 1.6,
              }}
            >
              "{item.quote}"
            </blockquote>

            {/* Footer: date + link label */}
            <div className="flex items-center justify-between mt-auto">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--color-ink-faint)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {item.date}
              </span>
              <span
                className="group-hover:text-blood transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-ink-dim)',
                  letterSpacing: '0.1em',
                }}
              >
                Leer artículo →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
