import { useLayoutEffect } from 'react'
import LissajousTitle from './LissajousTitle'
import HeroReelStage from './HeroReelStage'

function syncHeroViewportHeight() {
  const visual = window.visualViewport?.height
  const inner = window.innerHeight
  // Prefer the smaller value so content never sits under browser chrome.
  const height = visual ? Math.min(visual, inner) : inner
  document.documentElement.style.setProperty('--hero-vh', `${Math.round(height)}px`)
}

export default function Hero() {
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    syncHeroViewportHeight()

    const onResize = () => syncHeroViewportHeight()
    window.addEventListener('resize', onResize)
    window.visualViewport?.addEventListener('resize', onResize)
    window.visualViewport?.addEventListener('scroll', onResize)

    // iOS often settles chrome after first paint
    const t1 = window.setTimeout(syncHeroViewportHeight, 120)
    const t2 = window.setTimeout(() => {
      syncHeroViewportHeight()
      window.scrollTo(0, 0)
    }, 400)

    return () => {
      window.removeEventListener('resize', onResize)
      window.visualViewport?.removeEventListener('resize', onResize)
      window.visualViewport?.removeEventListener('scroll', onResize)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [])

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
