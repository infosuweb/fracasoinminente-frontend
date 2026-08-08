export default function ArtStrip() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: 'var(--color-paper)' }}
      aria-label="Portada Fracaso Inminente"
    >
      <div
        className="relative w-full"
        style={{
          aspectRatio: '21 / 9',
          maxHeight: 'min(70vh, 720px)',
          minHeight: '220px',
        }}
      >
        <img
          src="/img/cosmic.jpg"
          alt="Fracaso Inminente — figura con guitarra roja sobre fondo cósmico"
          width={1600}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 28%' }}
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: '28%',
            background:
              'linear-gradient(to bottom, var(--color-snow) 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '36%',
            background:
              'linear-gradient(to bottom, transparent 0%, var(--color-paper) 100%)',
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
