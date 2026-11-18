import LissajousTitle from './LissajousTitle'
import HeroReelStage from './HeroReelStage'

export default function Hero() {
  return (
    <section className="hero-release" aria-label="Fracaso Inminente">
      <HeroReelStage />

      <div className="hero-release__copy">
        <LissajousTitle />
      </div>

      <a
        href="#music"
        className="hero-scroll-cue"
        aria-label="Ir a plataformas"
      >
        <svg
          className="hero-scroll-cue__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
