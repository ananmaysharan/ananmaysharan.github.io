import { useEffect, useRef } from 'react'

const DEG = Math.PI / 180
const NAIL = { x: 500, y: 135, r: 8 }
const WIRE_LENGTH = 535
const LIMIT = 26 * DEG
const ZONE = 2.2 * DEG
// Pick once per page load; both directions start clearly outside the level zone.
const INITIAL = (Math.random() < 0.5 ? -1 : 1) * (9 + Math.random() * 9) * DEG
const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n))
type Point = { x: number; y: number }

/** One continuous, inextensible cord, tangent to the round nail on both sides.
 * Tilting transfers cord from one leg to the other; the frame is not nail-pivoted.
 * Solve its height so straight legs + contact arc always have the same length.
 */
function suspension(angle: number, x: number) {
  const c = Math.cos(angle), s = Math.sin(angle)
  const at = (lx: number, ly: number, y: number): Point => ({ x: x + lx * c - ly * s, y: y + lx * s + ly * c })
  const geometry = (y: number) => {
    const left = at(-175, -180, y), right = at(175, -180, y)
    const tangent = (p: Point, side: number) => {
      const dx = p.x - NAIL.x, dy = p.y - NAIL.y
      const distance = Math.hypot(dx, dy)
      const a = Math.atan2(dy, dx) + side * Math.acos(NAIL.r / distance)
      return { x: NAIL.x + NAIL.r * Math.cos(a), y: NAIL.y + NAIL.r * Math.sin(a), a, length: Math.sqrt(distance * distance - NAIL.r * NAIL.r) }
    }
    const a = tangent(left, 1), b = tangent(right, -1)
    const arc = ((b.a - a.a) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI)
    return { left, right, a, b, length: a.length + b.length + arc * NAIL.r }
  }
  let low = NAIL.y + 180 * c + 175 * Math.abs(s) + 12, high = 780
  for (let i = 0; i < 28; i++) {
    const mid = (low + high) / 2
    if (geometry(mid).length > WIRE_LENGTH) high = mid
    else low = mid
  }
  const y = (low + high) / 2
  const g = geometry(y)
  return { ...g, x, y, path: `M ${g.left.x} ${g.left.y} L ${g.a.x} ${g.a.y} A 8 8 0 0 1 ${g.b.x} ${g.b.y} L ${g.right.x} ${g.right.y}` }
}

const styles = `
html,body,#root{margin:0;width:100%;min-height:100%;background:#fff;color:#000;color-scheme:light}
*{box-sizing:border-box}body{overscroll-behavior:none}
.mount-wall{height:100svh;min-height:260px;width:100%;overflow:hidden;background:#fff}
.mount-scene{display:block;width:100%;height:100%;user-select:none;-webkit-user-select:none}
.mount-frame{cursor:grab;touch-action:none;outline:none}
.mount-scene[data-held=true] .mount-frame{cursor:grabbing}
.mount-frame:focus-visible .mount-outline{stroke-width:2.4}
.mount-scene[data-pointer=true] .mount-outline{stroke-width:1.4}
.mount-message{font:italic 25px Georgia,'Times New Roman',serif;letter-spacing:.025em;opacity:0;transform:translateY(5px);transition:opacity 250ms ease,transform 380ms cubic-bezier(.2,.8,.2,1)}
.mount-scene[data-mounted=true] .mount-message{opacity:1;transform:translateY(0)}
.mount-mat{transition:stroke-width 120ms ease}
.mount-scene[data-ready=true] .mount-mat{stroke-width:1.7}
@media(prefers-reduced-motion:reduce){.mount-message,.mount-mat{transition:none;transform:none}}
`

export default function App() {
  const svgRef = useRef<SVGSVGElement>(null)
  const frameRef = useRef<SVGGElement>(null)
  const cordRef = useRef<SVGPathElement>(null)
  const braidRef = useRef<SVGPathElement>(null)
  const initial = suspension(INITIAL, 500)

  useEffect(() => {
    const svg = svgRef.current!, frame = frameRef.current!, cord = cordRef.current!, braid = braidRef.current!
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    let angle = INITIAL, speed = 0, target = INITIAL
    let x = 500, xSpeed = 0, xTarget = 500
    let pointer: number | null = null, grab = { x: 0, y: 0 }, offset = { x: 0, y: 0 }
    let mounted = false, settling = false, raf = 0, lastTime = 0, lastMove = 0
    let pointerMode = false
    const draw = () => {
      const g = suspension(angle, x)
      frame.setAttribute('transform', `translate(${x} ${g.y}) rotate(${angle / DEG})`)
      cord.setAttribute('d', g.path)
      braid.setAttribute('d', g.path)
      svg.dataset.held = String(pointer !== null)
      svg.dataset.pointer = String(pointerMode)
      svg.dataset.ready = String(pointer !== null && Math.abs(angle) <= ZONE)
      svg.dataset.mounted = String(mounted)
      frame.setAttribute('aria-valuenow', (angle / DEG).toFixed(1))
      frame.setAttribute('aria-valuetext', mounted ? 'Mounted, level' : `${(angle / DEG).toFixed(1)} degrees`)
    }
    const tick = (time: number) => {
      raf = 0
      let remaining = Math.min((time - lastTime) / 1000, .04)
      lastTime = time
      if (reduced.matches) { angle = target; x = xTarget; speed = 0; xSpeed = 0 }
      else while (remaining > 0) {
        const dt = Math.min(remaining, 1 / 240)
        // The hand pulls against weight; release retains a little momentum.
        const k = pointer !== null ? 1000 : settling ? 100 : 48
        const damping = pointer !== null ? 55 : settling ? 18 : 11
        speed += ((target - angle) * k - speed * damping) * dt
        angle += speed * dt
        xSpeed += ((xTarget - x) * (pointer !== null ? 160 : 38) - xSpeed * 11) * dt
        x += xSpeed * dt
        remaining -= dt
      }
      if (Math.abs(angle - target) < .0001 && Math.abs(speed) < .001 && Math.abs(x - xTarget) < .02 && Math.abs(xSpeed) < .04) {
        angle = target; x = xTarget; speed = 0; xSpeed = 0
        if (settling) { mounted = true; settling = false }
        draw(); return
      }
      draw(); raf = requestAnimationFrame(tick)
    }
    const wake = () => { if (!raf) { lastTime = performance.now(); raf = requestAnimationFrame(tick) } }
    const point = (e: PointerEvent) => {
      const matrix = svg.getScreenCTM()
      return matrix ? new DOMPoint(e.clientX, e.clientY).matrixTransform(matrix.inverse()) : null
    }
    const release = (cancelled = false) => {
      xTarget = 500
      // Judge the hand’s final adjustment, not the brief visual spring lag.
      if (!cancelled && Math.abs(target) <= ZONE) {
        target = 0; settling = true; speed *= .2
      } else {
        // Static friction at the nail preserves an imperfect adjustment.
        // No automatic win from a free swing through horizontal.
        const sign = Math.sign(angle) || Math.sign(target) || 1
        target = sign * clamp(sign * (angle + clamp(speed * .05, -2 * DEG, 2 * DEG)), ZONE + .6 * DEG, LIMIT)
        speed = clamp(speed, -.5, .5); settling = false
      }
      draw(); wake()
    }
    const down = (e: PointerEvent) => {
      if (pointer !== null || e.button !== 0 || !e.isPrimary) return
      const p = point(e); if (!p) return
      e.preventDefault(); frame.focus({ preventScroll: true }); frame.setPointerCapture(e.pointerId)
      pointer = e.pointerId; pointerMode = true; mounted = false; settling = false
      const g = suspension(angle, x), dx = p.x - x, dy = p.y - g.y
      grab = { x: dx * Math.cos(angle) + dy * Math.sin(angle), y: -dx * Math.sin(angle) + dy * Math.cos(angle) }
      offset = { x: p.x, y: p.y }
      target = angle; xTarget = x; speed = 0; lastMove = performance.now(); draw()
    }
    const move = (e: PointerEvent) => {
      if (e.pointerId !== pointer) return
      const p = point(e); if (!p) return
      // Fit the actual grabbed material point to the hand, along the
      // constant-cord-length suspension curve. Either edge works naturally.
      xTarget = clamp(xTarget + (p.x - offset.x) * .16, 475, 525)
      offset = { x: p.x, y: p.y }
      const error = (a: number) => {
        const g = suspension(a, xTarget)
        const px = xTarget + grab.x * Math.cos(a) - grab.y * Math.sin(a)
        const py = g.y + grab.x * Math.sin(a) + grab.y * Math.cos(a)
        return (px - p.x) ** 2 + (py - p.y) ** 2
      }
      let lo = -LIMIT, hi = LIMIT
      for (let i = 0; i < 22; i++) {
        const a = lo + (hi - lo) / 3, b = hi - (hi - lo) / 3
        if (error(a) < error(b)) hi = b; else lo = a
      }
      target = (lo + hi) / 2
      lastMove = performance.now(); wake()
    }
    const end = (e: PointerEvent) => {
      if (e.pointerId !== pointer) return
      pointer = null
      if (frame.hasPointerCapture(e.pointerId)) frame.releasePointerCapture(e.pointerId)
      if (performance.now() - lastMove > 100) speed = 0
      release(e.type !== 'pointerup')
    }
    const lost = (e: PointerEvent) => { if (e.pointerId === pointer) { pointer = null; release(true) } }
    const blur = () => {
      if (pointer === null) return
      const id = pointer; pointer = null
      if (frame.hasPointerCapture(id)) frame.releasePointerCapture(id)
      release(true)
    }
    const key = (e: KeyboardEvent) => {
      if (pointer !== null) return
      pointerMode = false
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault(); mounted = false; settling = false
        target = clamp(angle + (e.key === 'ArrowLeft' ? -1 : 1) * DEG * (e.shiftKey ? .25 : 1), -LIMIT, LIMIT)
        angle = target; speed = 0; draw()
      } else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); release() }
      else if (e.key === 'Escape') {
        e.preventDefault(); target = INITIAL; angle = INITIAL; x = 500; xTarget = 500
        speed = 0; xSpeed = 0; mounted = false; settling = false; draw()
      }
    }
    const resize = new ResizeObserver(([entry]) => {
      // Leave room below the success message as well as above the nail.
      svg.setAttribute('viewBox', entry.contentRect.width < 650 ? '100 75 800 800' : '0 75 1000 800')
    })
    resize.observe(svg)
    frame.addEventListener('pointerdown', down); frame.addEventListener('pointermove', move)
    frame.addEventListener('pointerup', end); frame.addEventListener('pointercancel', end)
    frame.addEventListener('lostpointercapture', lost); frame.addEventListener('keydown', key)
    window.addEventListener('blur', blur)
    draw()
    return () => {
      cancelAnimationFrame(raf); resize.disconnect()
      frame.removeEventListener('pointerdown', down); frame.removeEventListener('pointermove', move)
      frame.removeEventListener('pointerup', end); frame.removeEventListener('pointercancel', end)
      frame.removeEventListener('lostpointercapture', lost); frame.removeEventListener('keydown', key)
      window.removeEventListener('blur', blur)
    }
  }, [])

  return <main className="mount-wall">
    <style>{styles}</style>
    <svg ref={svgRef} className="mount-scene" viewBox="0 75 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref={cordRef} d={initial.path} stroke="black" strokeWidth="2" strokeLinecap="round" pointerEvents="none" />
      {/* Twist marks are fixed to the cord, so you can see material pass over the nail. */}
      <path ref={braidRef} d={initial.path} stroke="white" strokeWidth=".75" strokeDasharray="1 7" pointerEvents="none" />
      <circle cx="500" cy="135" r="6.3" fill="white" stroke="black" strokeWidth="1.3" pointerEvents="none" />
      <circle cx="500" cy="135" r="1.5" fill="black" pointerEvents="none" />
      <g ref={frameRef} className="mount-frame" transform={`translate(500 ${initial.y}) rotate(${INITIAL / DEG})`}
        role="slider" tabIndex={0} aria-label="Straighten the picture. Drag either edge. Or use arrow keys and Enter to release. Escape resets."
        aria-valuemin={-26} aria-valuemax={26} aria-valuenow={INITIAL / DEG}>
        <rect className="mount-outline" x="-280" y="-180" width="560" height="360" fill="white" stroke="black" strokeWidth="1.4" />
        <rect x="-276" y="-176" width="552" height="352" stroke="black" strokeWidth=".65" pointerEvents="none" />
        <rect className="mount-mat" x="-256" y="-156" width="512" height="312" fill="white" stroke="black" strokeWidth="1" pointerEvents="none" />
        <text className="mount-message" x="0" y="265" textAnchor="middle" fill="black" pointerEvents="none" aria-hidden="true">Mounted!</text>
      </g>
    </svg>
  </main>
}
