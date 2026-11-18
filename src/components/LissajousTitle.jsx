import { useId, useLayoutEffect, useRef, useState } from 'react'
import { REEL_CLIPS } from '../data/reel'

// Single-stroke skeletons in a box of width w and height 100 (y down).
// Ported from the Compile-style reference: open strokes are walked back
// on themselves so each letter is one closed polyline.
const arc = (cx, cy, rx, ry, from, to, n = 40) =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = ((from + (to - from) * (i / n)) * Math.PI) / 180
    return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]
  })

const andBack = (pts) => pts.concat(pts.slice(0, -1).reverse())

const GLYPHS = {
  F: { w: 66, pts: [[8, 100], [8, 0], [64, 0], [8, 0], [8, 47], [54, 47], [8, 47], [8, 100]] },
  R: {
    w: 76,
    pts: [
      [8, 100], [8, 0], [42, 0],
      ...arc(42, 25, 28, 25, -90, 90),
      [8, 50], [38, 50], [72, 100], [38, 50], [8, 50], [8, 100],
    ],
  },
  A: { w: 90, pts: [[3, 100], [45, 0], [87, 100], [71, 62], [19, 62], [3, 100]] },
  C: { w: 84, pts: andBack(arc(52, 50, 46, 50, -48, -312)) },
  S: {
    w: 70,
    pts: andBack([
      ...arc(36, 25, 30, 25, -28, -270),
      ...arc(34, 75, 31, 25, -90, 150),
    ]),
  },
  O: { w: 92, pts: arc(46, 50, 44, 50, -90, 270, 80) },
  I: { w: 22, pts: andBack([[15, 0], [7, 100]]) },
  N: { w: 80, pts: andBack([[8, 100], [8, 0], [72, 100], [72, 0]]) },
  M: { w: 100, pts: andBack([[6, 100], [10, 0], [50, 76], [90, 0], [94, 100]]) },
  E: {
    w: 66,
    pts: [[62, 0], [8, 0], [8, 49], [52, 49], [8, 49], [8, 100], [62, 100], [8, 100], [8, 0], [62, 0]],
  },
  T: { w: 74, pts: [[37, 100], [37, 0], [2, 0], [72, 0], [37, 0], [37, 100]] },
}

// Project tokens: dark gray, mid gray, ink.
const STROKES = ['#111111', '#777777', 'currentColor']
const WORDS = ['FRACASO', 'INMINENTE']

const HARMONICS = 16
const STEPS = 420
const SAMPLES = 2048
const REST_DELTA = 0.05
const CELL = 200
const GAP = 20

const INTRO_AMOUNT = Math.PI
const INTRO_TURN = -24
const INTRO_DURATION = 2
const INTRO_STAGGER = 0.09
const HOVER_AMOUNT = 0.3 * Math.PI
const HOVER_DURATION = 4
const AMBIENT_AMOUNT = 0.045 * Math.PI
const PULSE_AMOUNT = 0.22 * Math.PI
const PULSE_DURATION = 1.15

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)
const easeOutQuart = (t) => 1 - (1 - t) ** 4
const clamp01 = (t) => Math.min(1, Math.max(0, t))

function layoutLines() {
  const scale = CELL / 100
  let order = 0
  return WORDS.map((word) => {
    let x = 0
    const letters = [...word].map((ch) => {
      const width = GLYPHS[ch].w * scale
      const cellX = x
      x += width + GAP
      const letter = {
        ch,
        width,
        cellX,
        index: order,
        turns: order % 3 === 1,
        color: STROKES[order % STROKES.length],
      }
      order += 1
      return letter
    })
    const lineWidth = x - GAP
    for (const letter of letters) {
      letter.originX = ((letter.cellX + letter.width / 2) / lineWidth) * 100
    }
    return { word, lineWidth, letters }
  })
}

const LINES = layoutLines()
const BOARD_PAD = 48
const BOARD_WIDTH = Math.max(...LINES.map((line) => line.lineWidth))
const LINE_GAP = BOARD_WIDTH * 0.04
const BOARD_INNER_HEIGHT = CELL * 2 + LINE_GAP
const BOARD_WIDTH_TOTAL = BOARD_WIDTH + BOARD_PAD * 2
const BOARD_HEIGHT = BOARD_INNER_HEIGHT + BOARD_PAD * 2

function resample(pts) {
  const lengths = [0]
  for (let i = 1; i < pts.length; i++) {
    lengths.push(lengths[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]))
  }
  const total = lengths[lengths.length - 1]
  const out = []
  let seg = 1
  for (let i = 0; i < SAMPLES; i++) {
    const target = (i / SAMPLES) * total
    while (seg < pts.length - 1 && lengths[seg] < target) seg++
    const span = lengths[seg] - lengths[seg - 1] || 1
    const f = (target - lengths[seg - 1]) / span
    out.push([
      pts[seg - 1][0] + (pts[seg][0] - pts[seg - 1][0]) * f,
      pts[seg - 1][1] + (pts[seg][1] - pts[seg - 1][1]) * f,
    ])
  }
  return out
}

function fourier(pts) {
  const s = resample(pts)
  const mean = (axis) => s.reduce((sum, p) => sum + p[axis], 0) / SAMPLES
  const c = { x0: mean(0), y0: mean(1), cx: [], sx: [], cy: [], sy: [] }
  for (let k = 1; k <= HARMONICS; k++) {
    let cx = 0
    let sx = 0
    let cy = 0
    let sy = 0
    for (let j = 0; j < SAMPLES; j++) {
      const th = (2 * Math.PI * k * j) / SAMPLES
      const co = Math.cos(th)
      const si = Math.sin(th)
      cx += s[j][0] * co
      sx += s[j][0] * si
      cy += s[j][1] * co
      sy += s[j][1] * si
    }
    const x = (Math.PI * k) / (HARMONICS + 1)
    const sigma = (2 / SAMPLES) * (Math.sin(x) / x)
    c.cx.push(cx * sigma)
    c.sx.push(sx * sigma)
    c.cy.push(cy * sigma)
    c.sy.push(sy * sigma)
  }
  return c
}

const COS = new Float64Array((STEPS + 1) * HARMONICS)
const SIN = new Float64Array((STEPS + 1) * HARMONICS)
for (let i = 0; i <= STEPS; i++) {
  const t = (i / STEPS) * Math.PI * 2
  for (let k = 0; k < HARMONICS; k++) {
    COS[i * HARMONICS + k] = Math.cos((k + 1) * t)
    SIN[i * HARMONICS + k] = Math.sin((k + 1) * t)
  }
}

function curve(c, delta, scale, ox) {
  const ca = new Float64Array(HARMONICS)
  const sa = new Float64Array(HARMONICS)
  for (let k = 0; k < HARMONICS; k++) {
    const co = Math.cos((k + 1) * delta)
    const si = Math.sin((k + 1) * delta)
    ca[k] = c.cx[k] * co + c.sx[k] * si
    sa[k] = c.sx[k] * co - c.cx[k] * si
  }
  const parts = new Array(STEPS + 1)
  for (let i = 0; i <= STEPS; i++) {
    let x = c.x0
    let y = c.y0
    const row = i * HARMONICS
    for (let k = 0; k < HARMONICS; k++) {
      const co = COS[row + k]
      const si = SIN[row + k]
      x += ca[k] * co + sa[k] * si
      y += c.cy[k] * co + c.sy[k] * si
    }
    parts[i] = `${i ? 'L' : 'M'}${(ox + x * scale).toFixed(2)},${(y * scale).toFixed(2)}`
  }
  return parts.join(' ')
}

export default function LissajousTitle() {
  const rootRef = useRef(null)
  const fillVideoRef = useRef(null)
  const maskId = useId().replace(/:/g, '')
  const [clipSrc, setClipSrc] = useState(REEL_CLIPS[0].src)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cache = {}
    const fourierFor = (ch) => (cache[ch] ??= fourier(GLYPHS[ch].pts))

    /** @type {Map<number, { coeffs: ReturnType<typeof fourier>, paths: SVGPathElement[], groups: SVGGElement[], scale: number, cellX: number, index: number, turns: boolean, hover: number, hoverFrom: number, hoverTo: number, hoverStart: number | null, pulseStart: number | null, drawn: number | null }>} */
    const byIndex = new Map()

    for (const group of root.querySelectorAll('g[data-char]')) {
      const index = Number(group.dataset.index)
      const existing = byIndex.get(index)
      const paths = [...group.querySelectorAll('path')]
      if (existing) {
        existing.paths.push(...paths)
        existing.groups.push(group)
      } else {
        byIndex.set(index, {
          coeffs: fourierFor(group.dataset.char),
          paths,
          groups: [group],
          scale: CELL / 100,
          cellX: Number(group.dataset.x),
          index,
          turns: group.dataset.turns === '1',
          hover: 0,
          hoverFrom: 0,
          hoverTo: 0,
          hoverStart: null,
          pulseStart: null,
          drawn: null,
        })
      }
    }

    const letters = [...byIndex.values()].sort((a, b) => a.index - b.index)

    let introStart = null
    let raf = 0
    let alive = true

    function hoverValue(letter, now) {
      if (letter.hoverStart === null) return letter.hover
      const p = easeOutQuart(clamp01((now - letter.hoverStart) / HOVER_DURATION))
      return letter.hoverFrom + (letter.hoverTo - letter.hoverFrom) * p
    }

    function pulseValue(letter, now) {
      if (letter.pulseStart === null) return 0
      const p = clamp01((now - letter.pulseStart) / PULSE_DURATION)
      if (p >= 1) {
        letter.pulseStart = null
        return 0
      }
      return Math.sin(p * Math.PI)
    }

    function frame(ms) {
      if (!alive) return
      const now = ms / 1000
      if (introStart === null) introStart = now
      const elapsed = now - introStart
      let busy = !reduced

      for (const letter of letters) {
        const start = letter.index * INTRO_STAGGER
        const p = reduced ? 1 : clamp01((elapsed - start) / INTRO_DURATION)
        const intro = 1 - easeInOut(p)
        if (p < 1) busy = true

        const hover = hoverValue(letter, now)
        if (letter.hoverStart !== null) {
          if (now - letter.hoverStart < HOVER_DURATION) busy = true
          else {
            letter.hover = letter.hoverTo
            letter.hoverStart = null
          }
        }

        const pulse = pulseValue(letter, now)
        if (letter.pulseStart !== null) busy = true

        const ambient = reduced
          ? 0
          : Math.sin(now * 1.35 + letter.index * 0.37) * AMBIENT_AMOUNT

        const delta =
          REST_DELTA -
          intro * INTRO_AMOUNT +
          hover * HOVER_AMOUNT +
          pulse * PULSE_AMOUNT +
          ambient

        if (letter.drawn !== delta) {
          const d = curve(letter.coeffs, delta, letter.scale, letter.cellX)
          for (const path of letter.paths) path.setAttribute('d', d)
          letter.drawn = delta
        }

        const wobble = reduced ? 0 : Math.sin(now * 0.9 + letter.index * 0.5) * 1.2
        const transform = letter.turns
          ? `rotate(${intro * INTRO_TURN + wobble * (0.35 + pulse)}deg)`
          : `rotate(${wobble * 0.35 + pulse * 2.5 * (letter.index % 2 === 0 ? 1 : -1)}deg)`
        for (const group of letter.groups) group.style.transform = transform
      }

      const echo = 2.2 + Math.sin(now * 2.1) * 1.4 + (root.classList.contains('is-pulse') ? 2.5 : 0)
      root.style.setProperty('--echo-x', `${echo.toFixed(2)}px`)
      root.style.setProperty('--echo-y', `${(echo * 0.35).toFixed(2)}px`)

      raf = busy ? requestAnimationFrame(frame) : 0
    }

    function wake() {
      if (!raf) raf = requestAnimationFrame(frame)
    }

    function setHover(letter, target) {
      if (reduced) return
      const now = performance.now() / 1000
      letter.hover = hoverValue(letter, now)
      letter.hoverFrom = letter.hover
      letter.hoverTo = target
      letter.hoverStart = now
      wake()
    }

    function onReelChange(event) {
      const src = event.detail?.src
      if (src) setClipSrc(src)

      if (reduced) return
      const now = performance.now() / 1000
      root.classList.remove('is-pulse')
      void root.offsetWidth
      root.classList.add('is-pulse')
      letters.forEach((letter, i) => {
        letter.pulseStart = now + i * 0.018
      })
      wake()
    }

    const cleanups = letters.map((letter) => {
      const hitGroup = letter.groups.find((group) => group.closest('.lissajous-title__ink')) ?? letter.groups[0]
      const enter = () => setHover(letter, 1)
      const leave = () => setHover(letter, 0)
      hitGroup.addEventListener('pointerenter', enter)
      hitGroup.addEventListener('pointerleave', leave)
      return () => {
        hitGroup.removeEventListener('pointerenter', enter)
        hitGroup.removeEventListener('pointerleave', leave)
      }
    })

    window.addEventListener('hero-reel:change', onReelChange)
    wake()

    return () => {
      alive = false
      if (raf) cancelAnimationFrame(raf)
      cleanups.forEach((fn) => fn())
      window.removeEventListener('hero-reel:change', onReelChange)
    }
  }, [])

  useLayoutEffect(() => {
    const video = fillVideoRef.current
    if (!video) return
    video.load()
    const play = video.play()
    if (play && typeof play.catch === 'function') play.catch(() => {})
  }, [clipSrc])

  return (
    <h1 className="lissajous-title lissajous-title--live" aria-label="Fracaso Inminente" ref={rootRef}>
      <span className="lissajous-title__label">Fracaso Inminente</span>

      <svg
        className="lissajous-title__board"
        viewBox={`0 0 ${BOARD_WIDTH_TOTAL} ${BOARD_HEIGHT}`}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={BOARD_WIDTH_TOTAL}
            height={BOARD_HEIGHT}
          >
            <rect x="0" y="0" width={BOARD_WIDTH_TOTAL} height={BOARD_HEIGHT} fill="#000" />
            {LINES.map((line, lineIndex) => {
              const xOffset = BOARD_PAD + (BOARD_WIDTH - line.lineWidth) / 2
              const yOffset = BOARD_PAD + lineIndex * (CELL + LINE_GAP)
              return (
                <g key={`mask-${line.word}`} transform={`translate(${xOffset}, ${yOffset})`}>
                  {line.letters.map((letter) => {
                    const originX =
                      ((xOffset + letter.cellX + letter.width / 2) / BOARD_WIDTH_TOTAL) * 100
                    const originY = ((yOffset + CELL / 2) / BOARD_HEIGHT) * 100
                    return (
                      <g
                        key={`mask-${letter.index}`}
                        data-char={letter.ch}
                        data-index={letter.index}
                        data-turns={letter.turns ? '1' : '0'}
                        data-x={letter.cellX}
                        style={{
                          transformBox: 'view-box',
                          transformOrigin: `${originX}% ${originY}%`,
                        }}
                      >
                        <path className="lissajous-title__fill" strokeWidth={42} />
                      </g>
                    )
                  })}
                </g>
              )
            })}
          </mask>
        </defs>

        <foreignObject
          x="1"
          y="1"
          width={BOARD_WIDTH_TOTAL - 2}
          height={BOARD_HEIGHT - 2}
          mask={`url(#${maskId})`}
        >
          <div xmlns="http://www.w3.org/1999/xhtml" className="lissajous-title__video-shell">
            <video
              ref={fillVideoRef}
              className="lissajous-title__video"
              src={clipSrc}
              muted
              playsInline
              loop
              preload="auto"
            />
          </div>
        </foreignObject>
      </svg>

      <svg
        className="lissajous-title__ink"
        viewBox={`0 0 ${BOARD_WIDTH_TOTAL} ${BOARD_HEIGHT}`}
        aria-hidden="true"
        focusable="false"
      >
        {LINES.map((line, lineIndex) => {
          const xOffset = BOARD_PAD + (BOARD_WIDTH - line.lineWidth) / 2
          const yOffset = BOARD_PAD + lineIndex * (CELL + LINE_GAP)
          return (
            <g key={`ink-${line.word}`} transform={`translate(${xOffset}, ${yOffset})`}>
              {line.letters.map((letter) => {
                const originX =
                  ((xOffset + letter.cellX + letter.width / 2) / BOARD_WIDTH_TOTAL) * 100
                const originY = ((yOffset + CELL / 2) / BOARD_HEIGHT) * 100
                return (
                  <g
                    key={letter.index}
                    data-char={letter.ch}
                    data-index={letter.index}
                    data-turns={letter.turns ? '1' : '0'}
                    data-x={letter.cellX}
                    style={{
                      transformBox: 'view-box',
                      transformOrigin: `${originX}% ${originY}%`,
                    }}
                  >
                    <rect x={letter.cellX} y={0} width={letter.width} height={CELL} />
                    <path className="lissajous-title__echo lissajous-title__echo--a" />
                    <path className="lissajous-title__echo lissajous-title__echo--b" />
                    <path className="lissajous-title__main" stroke={letter.color} />
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>
    </h1>
  )
}
