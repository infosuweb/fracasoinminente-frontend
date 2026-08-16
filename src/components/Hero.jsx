import { LEADER } from '../data/music'

const REEL_URL = 'https://www.instagram.com/fracasoinminente.band/reel/DcG3ZXgsJ5g/'

export default function Hero() {
  return (
    <section className="hero-batman" aria-label="Fracaso Inminente — El curro de Batman">
      <div className="hero-batman__beam" aria-hidden="true" />

      <div className="hero-batman__copy">
        <p className="hero-batman__eyebrow">Fracaso Inminente presenta</p>
        <h1 className="hero-batman__wordmark">
          Fracaso
          <br />
          Inminente
        </h1>

        <div className="hero-batman__release">
          <span>Nuevo video</span>
          <strong>El curro de Batman</strong>
        </div>

        <div className="hero-batman__actions">
          <a className="hero-batman__primary" href="#video-principal">
            Ver video ↓
          </a>
          <a
            href={LEADER.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-batman__secondary"
          >
            Escuchar {LEADER.title}
          </a>
        </div>
      </div>

      <div className="hero-batman__media" id="video-principal">
        <div className="hero-batman__video-shell">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/media/el-curro-de-batman-cover.jpg"
            aria-label="El curro de Batman — Fracaso Inminente"
          >
            <source src="/media/el-curro-de-batman.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
        </div>
        <a className="hero-batman__instagram" href={REEL_URL} target="_blank" rel="noopener noreferrer">
          Ver también en Instagram ↗
        </a>
      </div>
    </section>
  )
}
