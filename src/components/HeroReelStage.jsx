import { useEffect, useRef, useState } from 'react'
import { REEL_CLIPS } from '../data/reel'
import { isSocialInAppBrowser } from '../lib/browser'

const HOLD_MS = 3600
const FADE_MS = 800

export default function HeroReelStage() {
  const [active, setActive] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [inApp] = useState(() => isSocialInAppBrowser())
  const videoRefs = useRef(/** @type {Array<HTMLVideoElement | null>} */ ([]))
  const clips = inApp ? REEL_CLIPS.slice(0, 1) : REEL_CLIPS

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (active >= clips.length) setActive(0)
  }, [active, clips.length])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return
      if (index === active) {
        try {
          video.currentTime = 0
        } catch {
          /* Instagram WebView can throw on seek before ready */
        }
        const play = video.play()
        if (play && typeof play.catch === 'function') play.catch(() => {})
      } else {
        video.pause()
      }
    })

    const clip = clips[active] ?? clips[0]
    if (!clip) return

    window.dispatchEvent(
      new CustomEvent('hero-reel:change', {
        detail: {
          id: clip.id,
          label: clip.label,
          index: active,
          src: clip.src,
        },
      }),
    )
  }, [active, clips])

  useEffect(() => {
    if (reducedMotion || inApp || clips.length < 2) return undefined
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % clips.length)
    }, HOLD_MS)
    return () => window.clearInterval(timer)
  }, [reducedMotion, inApp, clips.length])

  return (
    <div className={`hero-reel${inApp ? ' hero-reel--inapp' : ''}`} aria-hidden="true">
      <div className="hero-reel__stage">
        {clips.map((clip, index) => (
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
            autoPlay={index === 0}
            preload={index === 0 ? 'metadata' : 'none'}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          />
        ))}
        <div className="hero-reel__veil" />
        <div className="hero-reel__grain" />
      </div>
      <p className="hero-reel__caption">{clips[active]?.label}</p>
    </div>
  )
}
