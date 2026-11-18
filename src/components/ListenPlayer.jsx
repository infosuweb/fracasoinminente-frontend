import { useState } from 'react'
import {
  BANDCAMP_BASE,
  BANDCAMP_TRACKS,
  SPOTIFY_PLAYLIST,
  SPOTIFY_TRACKS,
  bandcampEmbedSrc,
  spotifyEmbedSrc,
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

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L19 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * @param {{
 *   tracks: Array<{ label: string, id: string | number }>,
 *   activeId: string | number,
 *   onSelect: (id: string | number) => void,
 *   listLabel: string,
 * }} props
 */
function TrackList({ tracks, activeId, onSelect, listLabel }) {
  return (
    <ul className="listen-panel__tracks" aria-label={listLabel}>
      {tracks.map((track, index) => {
        const selected = track.id === activeId
        return (
          <li key={track.id}>
            <button
              type="button"
              className="listen-panel__track"
              aria-current={selected ? 'true' : undefined}
              onClick={() => onSelect(track.id)}
            >
              <span className="listen-panel__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="listen-panel__title">{track.label}</span>
              <span className="listen-panel__play" aria-hidden="true">
                {selected ? '▶' : ''}
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default function ListenPlayer() {
  const [tab, setTab] = useState(/** @type {ListenTab} */ ('spotify'))
  const [spotifyTrackId, setSpotifyTrackId] = useState(SPOTIFY_TRACKS[0].id)
  const [bandcampTrackId, setBandcampTrackId] = useState(BANDCAMP_TRACKS[0].id)

  const activeSpotify =
    SPOTIFY_TRACKS.find((track) => track.id === spotifyTrackId) ?? SPOTIFY_TRACKS[0]
  const activeBandcamp =
    BANDCAMP_TRACKS.find((track) => track.id === bandcampTrackId) ?? BANDCAMP_TRACKS[0]

  return (
    <section className="px-6 sm:px-12 md:px-16 pt-4 sm:pt-6 pb-10 sm:pb-14" id="listen">
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
        className="listen-panel"
      >
        {tab === 'spotify' && (
          <>
            <iframe
              key={activeSpotify.id}
              title={`Spotify: ${activeSpotify.label}`}
              src={spotifyEmbedSrc(activeSpotify.id)}
              className="listen-panel__player listen-panel__player--spotify"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            <TrackList
              tracks={SPOTIFY_TRACKS}
              activeId={activeSpotify.id}
              onSelect={setSpotifyTrackId}
              listLabel="Temas en Spotify"
            />
          </>
        )}
      </div>

      <div
        role="tabpanel"
        id="listen-panel-bandcamp"
        aria-labelledby="listen-tab-bandcamp"
        hidden={tab !== 'bandcamp'}
        className="listen-panel"
      >
        {tab === 'bandcamp' && (
          <>
            <iframe
              key={activeBandcamp.id}
              title={`Bandcamp: ${activeBandcamp.label}`}
              src={bandcampEmbedSrc(activeBandcamp.id, 'large')}
              className="listen-panel__player listen-panel__player--bandcamp"
              seamless
              loading="lazy"
            />
            <TrackList
              tracks={BANDCAMP_TRACKS}
              activeId={activeBandcamp.id}
              onSelect={setBandcampTrackId}
              listLabel="Temas en Bandcamp"
            />
          </>
        )}
      </div>

      <div className="listen-open-row">
        {tab === 'spotify' ? (
          <a
            href={SPOTIFY_PLAYLIST}
            target="_blank"
            rel="noopener noreferrer"
            className="listen-open-link"
            aria-label="Abrir lista completa en Spotify"
            title="Abrir lista completa en Spotify"
          >
            <ExternalIcon />
          </a>
        ) : (
          <a
            href={BANDCAMP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="listen-open-link"
            aria-label="Abrir catálogo completo en Bandcamp"
            title="Abrir catálogo completo en Bandcamp"
          >
            <ExternalIcon />
          </a>
        )}
      </div>
    </section>
  )
}
