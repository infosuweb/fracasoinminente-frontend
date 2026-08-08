import { useState } from 'react'
import {
  BANDCAMP_BASE,
  BANDCAMP_TRACKS,
  bandcampEmbedSrc,
} from '../data/music'

/** @typedef {'spotify' | 'bandcamp'} ListenTab */

/**
 * @param {ListenTab} current
 * @returns {ListenTab}
 */
function nextTab(current) {
  switch (current) {
    case 'spotify':
      return 'bandcamp'
    case 'bandcamp':
      return 'spotify'
    default: {
      const _exhaustive = current
      return _exhaustive
    }
  }
}

/**
 * @param {ListenTab} id
 */
function tabLabel(id) {
  switch (id) {
    case 'spotify':
      return 'Spotify'
    case 'bandcamp':
      return 'Bandcamp'
    default: {
      const _exhaustive = id
      return _exhaustive
    }
  }
}

const TABS = /** @type {const} */ (['spotify', 'bandcamp'])

export default function ListenPlayer() {
  const [tab, setTab] = useState(/** @type {ListenTab} */ ('spotify'))

  return (
    <section className="px-6 sm:px-12 md:px-16 py-10 sm:py-14" id="listen">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="section-label">Reproducir</h2>
        <div className="flex-1" style={{ height: '1px', background: 'var(--color-line)' }} />
      </div>

      <div
        role="tablist"
        aria-label="Plataforma de reproducción"
        className="flex gap-2 mb-4"
      >
        {TABS.map((id) => {
          const selected = tab === id
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`listen-tab-${id}`}
              aria-selected={selected}
              aria-controls={`listen-panel-${id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(id)}
              onKeyDown={(e) => {
                if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
                e.preventDefault()
                const next = nextTab(id)
                setTab(next)
                requestAnimationFrame(() => {
                  document.getElementById(`listen-tab-${next}`)?.focus()
                })
              }}
              className="cursor-pointer transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                minHeight: '44px',
                minWidth: '44px',
                padding: '0 1.1rem',
                border: `1px solid ${selected ? 'var(--color-blood)' : 'var(--color-line)'}`,
                background: selected ? 'var(--color-slab)' : 'transparent',
                color: selected ? 'var(--color-ink)' : 'var(--color-ink-dim)',
              }}
            >
              {tabLabel(id)}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id="listen-panel-spotify"
        aria-labelledby="listen-tab-spotify"
        hidden={tab !== 'spotify'}
        style={{
          border: '1px solid var(--color-line)',
          background: 'var(--color-slab)',
        }}
      >
        {tab === 'spotify' && (
          <iframe
            title="Spotify: Fracaso Inminente"
            src="https://open.spotify.com/embed/artist/7ytoVQBwppgzLlauvYSyIu?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        )}
      </div>

      <div
        role="tabpanel"
        id="listen-panel-bandcamp"
        aria-labelledby="listen-tab-bandcamp"
        hidden={tab !== 'bandcamp'}
        style={{
          border: '1px solid var(--color-line)',
          background: 'var(--color-slab)',
          overflow: 'hidden',
        }}
      >
        {tab === 'bandcamp' && (
          <>
            {BANDCAMP_TRACKS.map((track) => (
              <iframe
                key={track.id}
                title={`Bandcamp: ${track.label}`}
                src={bandcampEmbedSrc(track.id)}
                style={{ border: 0, width: '100%', height: '42px', display: 'block' }}
                seamless
                loading="lazy"
              />
            ))}
          </>
        )}
      </div>

      {tab === 'bandcamp' && (
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
            className="cursor-pointer inline-flex items-center"
            style={{
              color: 'var(--color-blood)',
              textDecoration: 'underline',
              minHeight: '44px',
            }}
          >
            Ver todo en Bandcamp
          </a>
          {' — comprar y escuchar en alta calidad.'}
        </p>
      )}
    </section>
  )
}
