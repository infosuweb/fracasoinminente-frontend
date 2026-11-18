import { useEffect, useRef, useState } from 'react'
import { REEL_CLIPS } from '../data/reel'

const HOLD_MS = 3600
const FADE_MS = 800

export default function HeroReelStage() {
  const [active, setActive] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const videoRefs = useRef(/** @type {Array<HTMLVideoElement | null>} */ ([]))

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return
      if (index === active) {
        video.currentTime = 0
        const play = video.play()
        if (play && typeof play.catch === 'function') play.catch(() => {})
      } else {
        video.pause()
      }
    })

    window.dispatchEvent(
      new CustomEvent('hero-reel:change', {
        detail: {
          id: REEL_CLIPS[active].id,
          label: REEL_CLIPS[active].label,
          index: active,
          src: REEL_CLIPS[active].src,
        },
      }),
    )
  }, [active])

  useEffect(() => {
    if (reducedMotion) return undefined
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % REEL_CLIPS.length)
    }, HOLD_MS)
    return () => window.clearInterval(timer)
  }, [reducedMotion])

  return (
    <div className="hero-reel" aria-hidden="true">
      <div className="hero-reel__stage">
        {REEL_CLIPS.map((clip, index) => (
          <video
            key={clip.id}
            ref={(node) => {
              videoRefs.current[index] = node
            }}
            className={`hero-reel__clip${index === active ? ' is-active' : ''}`}
            src={clip.src}
            muted
            playsInline
            loop
            preload={index === 0 || index === 1 ? 'auto' : 'metadata'}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          />
        ))}
        <div className="hero-reel__veil" />
        <div className="hero-reel__grain" />
      </div>
      <p className="hero-reel__caption">{REEL_CLIPS[active].label}</p>
    </div>
  )
}
