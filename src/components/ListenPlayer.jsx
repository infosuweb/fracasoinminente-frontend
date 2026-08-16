import { useState } from 'react'
import {
  BANDCAMP_BASE,
  BANDCAMP_TRACKS,
  LEADER,
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
        className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 sm:p-6"
        style={{
          border: '1px solid var(--color-blood)',
          background: 'var(--color-slab)',
        }}
      >
        <div>
          <p className="section-label" style={{ marginBottom: '0.5rem' }}>
            Single líder
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
              lineHeight: 1,
              textTransform: 'uppercase',
              margin: 0,
              color: 'var(--color-ink)',
            }}
          >
            {LEADER.title}
            <span
              className="ml-3 align-middle"
              style={{
                fontFamily: 'var(--font-mono)',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: 'var(--color-blood)',
                border: '1px solid var(--color-blood)',
                padding: '2px 6px',
                verticalAlign: 'middle',
              }}
            >
              Nuevo
            </span>
          </p>
        </div>
        <a
          href={LEADER.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer inline-flex items-center justify-center transition-colors duration-200"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#050505',
            background: 'var(--color-blood)',
            minHeight: '44px',
            padding: '0 1.25rem',
            width: 'fit-content',
          }}
        >
          Abrir en Spotify
        </a>
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
            title={`Spotify: ${LEADER.title}`}
            src={LEADER.spotifyEmbedSrc}
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
            <iframe
              title={`Bandcamp: ${LEADER.title}`}
              src={bandcampEmbedSrc(LEADER.bandcampTrackId)}
              style={{ border: 0, width: '100%', height: '42px', display: 'block' }}
              seamless
              loading="lazy"
            />
            {BANDCAMP_TRACKS.filter((track) => track.id !== LEADER.bandcampTrackId).map(
              (track) => (
                <iframe
                  key={track.id}
                  title={`Bandcamp: ${track.label}`}
                  src={bandcampEmbedSrc(track.id)}
                  style={{ border: 0, width: '100%', height: '42px', display: 'block' }}
                  seamless
                  loading="lazy"
                />
              ),
            )}
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
            href={LEADER.bandcampUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center"
            style={{
              color: 'var(--color-blood)',
              textDecoration: 'underline',
              minHeight: '44px',
            }}
          >
            {LEADER.title} en Bandcamp
          </a>
          {' · '}
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
            Ver todo
          </a>
        </p>
      )}
    </section>
  )
}
