export default function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden flex flex-col">

      {/* ── IMAGE PANEL ──────────────────────────────────────────────────────
          Mobile  : full viewport width  (absolute inset-0)
          Desktop : right 56% of viewport  (absolute right-0, left: 44%)
      ───────────────────────────────────────────────────────────────────── */}
      <div className="absolute top-0 right-0 bottom-0 left-0 md:left-[44%]">
        <img
          src="/img/album1400x1400.png"
          alt="Fracaso Inminente — álbum El respeto es algo muy lindo"
          width={1400}
          height={1400}
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center 5%' }}
          loading="eager"
          fetchPriority="high"
        />

        {/* Mobile: bottom-up black fade so text reads */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(7,7,7,0.05) 0%, rgba(7,7,7,0.35) 45%, rgba(7,7,7,0.85) 72%, #070707 90%)',
          }}
        />

        {/* Desktop: thin left-edge blend into the solid black panel */}
        <div
          className="absolute top-0 left-0 bottom-0 hidden md:block"
          style={{
            width: '28%',
            background: 'linear-gradient(to right, #070707 0%, transparent 100%)',
          }}
        />

        {/* Desktop: bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 hidden md:block"
          style={{
            height: '25%',
            background: 'linear-gradient(to bottom, transparent, #070707)',
          }}
        />
      </div>

      {/* ── SOLID BLACK PANEL (desktop left 44%) ──────────────────────────── */}
      <div className="absolute top-0 left-0 bottom-0 w-[44%] hidden md:block"
        style={{ background: '#070707' }}
      />

      {/* ── TEXT CONTENT ──────────────────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col justify-end flex-1 px-6 sm:px-10 md:px-14 pb-14 sm:pb-16"
        style={{ maxWidth: '680px' }}
      >
        {/* Title */}
        <h1
          className="leading-none uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4.5rem, 16vw, 11rem)',
            color: '#ffffff',
            letterSpacing: '-0.01em',
            lineHeight: '0.88',
          }}
        >
          Fracaso
          <br />
          Inminente
        </h1>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'var(--color-line)',
            maxWidth: '480px',
            margin: '2rem 0 1.75rem',
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.07em',
            lineHeight: '1.8',
            textTransform: 'uppercase',
            color: '#aaaaaa',
            maxWidth: '340px',
          }}
        >
          &ldquo;If we fail in their system,
          <br />
          that means we did it right&rdquo;
        </p>
      </div>

      {/* ── SCROLL CUE ────────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 right-8 sm:right-10 z-10 flex items-center gap-3"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: '#555555',
          textTransform: 'uppercase',
        }}
      >
        <span>scroll</span>
        <div style={{ width: '28px', height: '1px', background: '#555555' }} />
      </div>
    </section>
  )
}
