export default function Hero() {
  return (
    <section
      className="relative min-h-svh flex flex-col"
      style={{ background: 'var(--color-snow)', color: 'var(--color-snow-ink)' }}
      aria-label="Fracaso Inminente"
    >
      <div className="relative z-10 flex flex-col justify-end flex-1 px-6 sm:px-10 md:px-14 pb-16 sm:pb-20 pt-24">
        <h1 className="glitch-wordmark">
          <span className="glitch-wordmark__layer glitch-wordmark__layer--ghost glitch-wordmark__layer--red" aria-hidden="true">
            Fracaso
            <br />
            Inminente
          </span>
          <span className="glitch-wordmark__layer glitch-wordmark__layer--ghost glitch-wordmark__layer--cyan" aria-hidden="true">
            Fracaso
            <br />
            Inminente
          </span>
          <span className="glitch-wordmark__layer glitch-wordmark__layer--main">
            Fracaso
            <br />
            Inminente
          </span>
        </h1>

        <div
          style={{
            height: '1px',
            background: 'var(--color-snow-line)',
            maxWidth: '420px',
            margin: '2rem 0 1.75rem',
          }}
        />

        <a
          href="#listen"
          className="inline-flex items-center gap-3 cursor-pointer transition-colors duration-200"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'var(--color-snow-ink)',
            borderBottom: '2px solid var(--color-blood)',
            paddingBottom: '0.35rem',
            width: 'fit-content',
            minHeight: '44px',
          }}
        >
          Escuchar
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
