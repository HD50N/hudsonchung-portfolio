import { useEffect, useRef } from 'react'

export default function BackgroundAnimation({ theme }) {
  const canvasRef = useRef(null)
  const themeRef = useRef(theme)

  useEffect(() => { themeRef.current = theme }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let t = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const getMobiusPoint = (u, v, rx, ry) => {
      // Möbius strip parametric surface
      const x = (1 + 0.45 * v * Math.cos(u / 2)) * Math.cos(u)
      const y = (1 + 0.45 * v * Math.cos(u / 2)) * Math.sin(u)
      const z = 0.45 * v * Math.sin(u / 2)

      // Rotate around X axis
      const y1 = y * Math.cos(rx) - z * Math.sin(rx)
      const z1 = y * Math.sin(rx) + z * Math.cos(rx)

      // Rotate around Y axis
      const x2 = x * Math.cos(ry) + z1 * Math.sin(ry)
      const z2 = -x * Math.sin(ry) + z1 * Math.cos(ry)

      // Perspective projection
      const d = 5
      const s = d / (d + z2)
      return { x: x2 * s, y: y1 * s, z: z2 }
    }

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2
      const size = Math.min(width, height) * 0.32

      const isLight = themeRef.current === 'light'
      const [r, g, b] = isLight ? [232, 102, 32] : [232, 197, 71]

      t += 0.0022
      const rx = 0.38 + Math.sin(t * 0.35) * 0.2
      const ry = t

      const N = 380

      // ── v-isolines (lines running along the length of the strip) ──
      for (let vi = -10; vi <= 10; vi++) {
        const v = vi / 10
        const isEdge = Math.abs(vi) === 10

        const pts = Array.from({ length: N + 1 }, (_, i) => {
          const u = (i / N) * 2 * Math.PI
          return getMobiusPoint(u, v, rx, ry)
        })

        if (isEdge) {
          // Glow pass for edges
          ctx.save()
          ctx.shadowColor = `rgba(${r},${g},${b},0.5)`
          ctx.shadowBlur = 12
          ctx.beginPath()
          pts.forEach((p, i) => {
            const px = cx + p.x * size
            const py = cy + p.y * size
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
          })
          ctx.closePath()
          ctx.strokeStyle = `rgba(${r},${g},${b},0.30)`
          ctx.lineWidth = 1.6
          ctx.stroke()
          ctx.restore()
        } else {
          const fade = 1 - Math.abs(v) * 0.5
          ctx.beginPath()
          pts.forEach((p, i) => {
            const px = cx + p.x * size
            const py = cy + p.y * size
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
          })
          ctx.closePath()
          ctx.strokeStyle = `rgba(${r},${g},${b},${0.03 + fade * 0.025})`
          ctx.lineWidth = 0.55
          ctx.stroke()
        }
      }

      // ── u-isolines (cross-section slices across the strip width) ──
      const uCount = 30
      for (let j = 0; j < uCount; j++) {
        const u = (j / uCount) * 2 * Math.PI
        ctx.beginPath()
        let first = true
        for (let i = -20; i <= 20; i++) {
          const v = i / 20
          const p = getMobiusPoint(u, v, rx, ry)
          const px = cx + p.x * size
          const py = cy + p.y * size
          if (first) { ctx.moveTo(px, py); first = false }
          else ctx.lineTo(px, py)
        }
        ctx.strokeStyle = `rgba(${r},${g},${b},0.04)`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
