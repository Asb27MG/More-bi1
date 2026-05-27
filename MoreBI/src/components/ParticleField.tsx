import { useEffect, useRef } from 'react'

type ParticleFieldProps = Readonly<{
  spacing?: number
}>

/**
 * Static engineering grid of dots with subtle drift.
 * Tuned to feel structural / brutalist rather than organic.
 */
export default function ParticleField({ spacing = 36 }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let dpr = 1

    const setup = () => {
      const parent = canvas.parentElement
      if (!parent) return
      w = parent.clientWidth
      h = parent.clientHeight
      dpr = Math.min(globalThis.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    const draw = (t: number) => {
      if (!startRef.current) startRef.current = t
      const elapsed = (t - startRef.current) / 1000
      ctx.clearRect(0, 0, w, h)

      const cx = w / 2
      const cy = h / 2
      const maxR = Math.hypot(cx, cy)

      for (let x = spacing / 2; x < w; x += spacing) {
        for (let y = spacing / 2; y < h; y += spacing) {
          const dx = x - cx
          const dy = y - cy
          const dist = Math.hypot(dx, dy)
          const falloff = 1 - dist / maxR
          if (falloff <= 0) continue

          const phase = prefersReduced ? 0 : Math.sin(elapsed * 0.8 + dist * 0.005)
          const alpha = 0.08 + falloff * 0.32 + phase * 0.05
          const size = 1 + falloff * 1.4

          ctx.fillStyle = `rgba(139, 92, 246, ${Math.max(0.04, alpha)})`
          ctx.fillRect(x - size / 2, y - size / 2, size, size)
        }
      }

      const accentX = Math.trunc(w * (0.2 + 0.6 * ((Math.sin(elapsed * 0.4) + 1) / 2)))
      const accentY = Math.trunc(h * (0.3 + 0.4 * ((Math.cos(elapsed * 0.3) + 1) / 2)))
      ctx.fillStyle = 'rgba(255, 184, 105, 0.7)'
      ctx.fillRect(accentX - 1.5, accentY - 1.5, 3, 3)

      rafRef.current = requestAnimationFrame(draw)
    }

    setup()
    rafRef.current = requestAnimationFrame(draw)

    const onResize = () => {
      setup()
    }
    globalThis.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      globalThis.removeEventListener('resize', onResize)
    }
  }, [spacing])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
