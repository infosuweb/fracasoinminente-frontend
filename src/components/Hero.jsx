import { LEADER, YOUTUBE_CHANNEL } from '../data/music'
import LissajousTitle from './LissajousTitle'

const INSTAGRAM = 'https://www.instagram.com/fracasoinminente.band/'

export default function Hero() {
  return (
    <section className="hero-release" aria-label="Fracaso Inminente — Phalaropus">
      <div className="hero-release__copy">
        <p className="hero-release__eyebrow">Nuevo single</p>
        <LissajousTitle />

        <div className="hero-release__release">
          <span>Nuevo video</span>
          <strong>En tu mente</strong>
        </div>

        <div className="hero-release__actions">
          <a className="hero-release__primary" href="#video-principal">
            Ver video ↓
          </a>
          <a
            href={LEADER.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-release__secondary"
          >
            Escuchar {LEADER.title}
          </a>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-release__youtube"
          >
            Suscribite en YouTube ↗
          </a>
        </div>
      </div>

      <div className="hero-release__media" id="video-principal">
        <div className="hero-release__video-shell">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/media/en-tu-mente-poster.jpg"
            aria-label="En tu mente — Fracaso Inminente"
          >
            <source src="/media/en-tu-mente.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
        </div>
        <a className="hero-release__instagram" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          Ver también en Instagram ↗
        </a>
      </div>
    </section>
  )
}
