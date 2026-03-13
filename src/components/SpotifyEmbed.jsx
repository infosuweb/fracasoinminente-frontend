export default function SpotifyEmbed() {
  return (
    <section className="px-6 sm:px-12 md:px-16 py-10 sm:py-14" id="listen">
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
          Reproducir
        </span>
        <div className="flex-1" style={{ height: '1px', background: 'var(--color-line)' }} />
      </div>

      <div
        style={{
          border: '1px solid var(--color-line)',
          background: 'var(--color-slab)',
        }}
      >
        <iframe
          title="Spotify: Fracaso Inminente"
          src="https://open.spotify.com/embed/artist/7ytoVQBwppgzLlauvYSyIu?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  )
}
