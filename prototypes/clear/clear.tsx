/**
 * Drop-in Figma Make interaction. React and browser APIs only.
 * The unique lowercase "clear" clears the scene; other tiles add content.
 * Uses system fonts so this file has no external asset dependencies.
 */
import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react"

export type Rect = { x: number; y: number; w: number; h: number }
export type Cell = {
  id: string
  text: string
  color: number
  treatment: number
  clear?: boolean
  origin?: Rect
}
export type Grid = { id: string; cell: Cell } | {
  id: string
  axis: "x" | "y"
  fraction: number
  first: Grid
  second: Grid
}
export type PositionedCell = Cell & Rect
export const words = [
  "CLEAR",
  "Clear!",
  "クリア",
  "EFFACER",
  "BORRAR",
  "清除",
  "LÖSCHEN",
  "CLEAR ALL",
  "× CLEAR",
  "C L E A R",
  "消去",
  "CLEAR ↗",
  "CLEAR.",
  "EFFACER TOUT",
  "क्लियर",
  "مسح",
  "امسح الكل",
  "Очистить",
  "ОЧИСТИТЬ",
  "Изчисти",
  "מחיקה",
  "지우기",
  "ล้าง",
  "ΕΚΚΑΘΑΡΙΣΗ",
  "پاک کریں",
]
export const palette = [
  ["#f9ee20", "#111111"],
  ["#f4373d", "#111111"],
  ["#00a9df", "#1029ac"],
  ["#ededdf", "#111111"],
  ["#ff84c5", "#b92731"],
  ["#162caf", "#f5e834"],
  ["#111111", "#f5f3e9"],
  ["#bdc5bf", "#185bcc"],
  ["#f8a748", "#f02f35"],
  ["#2deb67", "#111111"],
]
const random = (min: number, max: number) => min + Math.random() * (max - min)
const integer = (min: number, max: number) => Math.floor(random(min, max + 1))
const id = () => crypto.randomUUID()
function leaf(): Grid {
  const key = id()
  const color = integer(0, palette.length - 1)
  // Lowercase English clear is reserved for the real control, in every color.
  const labels = words
  return {
    id: key,
    cell: {
      id: key,
      text: labels[integer(0, labels.length - 1)],
      color,
      treatment: integer(0, 5),
    },
  }
}
function split(
  axis: "x" | "y",
  fraction: number,
  first: Grid,
  second: Grid,
): Grid {
  return { id: id(), axis, fraction, first, second }
}
function halves(rect: Rect, axis: "x" | "y", fraction: number): [Rect, Rect] {
  const { x, y, w, h } = rect
  return axis === "x"
    ? [
        { x, y, w: w * fraction, h },
        { x: x + w * fraction, y, w: w * (1 - fraction), h },
      ]
    : [
        { x, y, w, h: h * fraction },
        { x, y: y + h * fraction, w, h: h * (1 - fraction) },
      ]
}
const bounds = { x: 0, y: 0, w: 100, h: 100 }
export function layout(grid: Grid, rect: Rect = bounds): PositionedCell[] {
  if ("cell" in grid) return [{ ...grid.cell, ...rect }]
  const [first, second] = halves(rect, grid.axis, grid.fraction)
  return [...layout(grid.first, first), ...layout(grid.second, second)]
}
function mosaic(rect: Rect, count: number): Grid {
  if (count <= 1) return leaf()
  const axis =
    rect.w / rect.h > 2
      ? "x"
      : rect.h / rect.w > 2
        ? "y"
        : Math.random() < 0.5
          ? "x"
          : "y"
  const fraction = random(0.22, 0.78)
  const [a, b] = halves(rect, axis, fraction)
  const firstCount = Math.max(
    1,
    Math.min(count - 1, Math.round(count * fraction)),
  )
  return split(
    axis,
    fraction,
    mosaic(a, firstCount),
    mosaic(b, count - firstCount),
  )
}
function replace(grid: Grid, target: string, replacement: Grid): Grid {
  if (grid.id === target) return replacement
  if ("cell" in grid) return grid
  const first = replace(grid.first, target, replacement)
  const second = replace(grid.second, target, replacement)
  return first === grid.first && second === grid.second
    ? grid
    : { ...grid, first, second }
}
function hasClear(grid: Grid): boolean {
  return "cell" in grid
    ? Boolean(grid.cell.clear)
    : hasClear(grid.first) || hasClear(grid.second)
}
export function createGrid(): Grid {
  const columnCount = integer(5, 8)
  const weights = Array.from({ length: columnCount }, () => random(0.6, 1.8))
  const clearColumn = integer(0, columnCount - 1)
  weights[clearColumn] = random(0.8, 1.2)
  const columns = weights.map((_, index) => {
    const large = leaf()
    const small = mosaic({ x: 0, y: 0, w: 15, h: 25 }, integer(7, 16))
    let column =
      Math.random() < 0.5
        ? split("y", random(0.55, 0.8), large, small)
        : split("y", random(0.2, 0.45), small, large)
    if (index === clearColumn) {
      const clear = leaf()
      if ("cell" in clear)
        clear.cell = { ...clear.cell, text: "clear", treatment: 0, clear: true }
      const clearShare = random(0.045, 0.09)
      const before = random(0.06, 0.92 - clearShare)
      column = split(
        "y",
        before,
        column,
        split(
          "y",
          clearShare / (1 - before),
          clear,
          mosaic({ x: 0, y: 0, w: 15, h: 20 }, integer(4, 8)),
        ),
      )
    }
    return column
  })
  let center = columns[columnCount - 1]
  let total = weights[columnCount - 1]
  for (let i = columnCount - 2; i >= 0; i--) {
    total += weights[i]
    center = split("x", weights[i] / total, columns[i], center)
  }
  const top = random(0.05, 0.12)
  const bottom = random(0.17, 0.29)
  return split(
    "y",
    top,
    mosaic({ x: 0, y: 0, w: 100, h: top * 100 }, integer(18, 32)),
    split(
      "y",
      1 - bottom,
      center,
      mosaic({ x: 0, y: 0, w: 100, h: bottom * 100 }, integer(25, 45)),
    ),
  )
}
export function growGrid(grid: Grid, target: string): Grid {
  const path: { grid: Grid; rect: Rect }[] = []
  function find(node: Grid, rect: Rect): boolean {
    path.push({ grid: node, rect })
    if (node.id === target) return true
    if (!("cell" in node)) {
      const [a, b] = halves(rect, node.axis, node.fraction)
      if (find(node.first, a) || find(node.second, b)) return true
    }
    path.pop()
    return false
  }
  if (!find(grid, bounds)) return grid
  const clicked = path[path.length - 1]
  const ancestors = [...path]
    .reverse()
    .filter(({ grid: node }) => !hasClear(node))
  const large = Math.random() < 0.25
  const local =
    ancestors.find(({ rect }) => rect.w >= 9 && rect.h >= 9) ?? clicked
  // Large additions borrow a broader ancestor's area, pushing its existing
  // contents into a smaller share while preserving every cell's identity.
  const broader = ancestors.find(
    ({ rect }) =>
      rect.w * rect.h >= Math.max(350, clicked.rect.w * clicked.rect.h * 3),
  )
  const region = large
    ? (broader ?? ancestors[ancestors.length - 1] ?? local)
    : local
  if (hasClear(region.grid)) return grid
  const axis =
    region.rect.w / region.rect.h > 1.5
      ? "x"
      : region.rect.h / region.rect.w > 1.5
        ? "y"
        : Math.random() < 0.5
          ? "x"
          : "y"
  const fraction = large ? random(0.58, 0.74) : random(0.2, 0.4)
  const prepend = Math.random() < 0.5
  const [a, b] = halves(region.rect, axis, prepend ? fraction : 1 - fraction)
  const additionRect = prepend ? a : b
  let addition: Grid
  if (large) {
    // Several substantial panels share the borrowed area, each with smaller
    // companions, rather than handing most of the space to one hero tile.
    const clusterAxis = additionRect.w > additionRect.h ? "x" : "y"
    const share = random(0.4, 0.6)
    const [firstRect, secondRect] = halves(additionRect, clusterAxis, share)
    addition = split(
      clusterAxis,
      share,
      mosaic(firstRect, integer(2, 4)),
      mosaic(secondRect, integer(2, 4)),
    )
  } else {
    addition = mosaic(additionRect, integer(3, 8))
  }
  const edge =
    axis === "x"
      ? region.rect.x + (prepend ? 0 : region.rect.w)
      : region.rect.y + (prepend ? 0 : region.rect.h)
  for (const cell of layout(addition, additionRect)) {
    const origin =
      axis === "x"
        ? { x: edge, y: cell.y, w: 0, h: cell.h }
        : { x: cell.x, y: edge, w: cell.w, h: 0 }
    addition = replace(addition, cell.id, {
      id: cell.id,
      cell: { ...cell, origin },
    })
  }
  const replacement = prepend
    ? split(axis, fraction, addition, region.grid)
    : split(axis, 1 - fraction, region.grid, addition)
  return replace(grid, region.grid.id, replacement)
}

type MotionSnapshot = { board: DOMRect; cells: Map<string, DOMRect> }
const easing = "cubic-bezier(.22, 1, .36, 1)"
const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const ClearTile = memo(function ClearTile({
  item,
  onSelect,
  snapshot,
}: {
  item: PositionedCell
  onSelect: (id: string, clear: boolean) => void
  snapshot: RefObject<MotionSnapshot | null>
}) {
  const element = useRef<HTMLButtonElement>(null)
  const rtl = /[\u0590-\u08ff]/.test(item.text)
  const vertical = useRef(!item.clear && !rtl && item.h > item.w * 1.65).current
  useLayoutEffect(() => {
    const captured = snapshot.current
    const button = element.current
    if (!captured || !button || reducedMotion()) return
    const { board, cells } = captured
    const old = cells.get(item.id)
    const width = (item.w * board.width) / 100
    const height = (item.h * board.height) / 100
    const left = board.left + (item.x * board.width) / 100
    const top = board.top + (item.y * board.height) / 100
    const origin = item.origin
    const from =
      old ??
      (origin
        ? {
            left: board.left + (origin.x * board.width) / 100,
            top: board.top + (origin.y * board.height) / 100,
            width: (origin.w * board.width) / 100,
            height: (origin.h * board.height) / 100,
          }
        : null)
    if (!from || width <= 0 || height <= 0) return
    const animation = button.animate(
      [
        {
          transform: `translate(${from.left - left}px, ${from.top - top}px) scale(${Math.max(0.001, from.width / width)}, ${Math.max(0.001, from.height / height)})`,
        },
        { transform: "none" },
      ],
      { duration: 600, easing },
    )
    return () => animation.cancel()
  }, [item.x, item.y, item.w, item.h, item.id, item.origin, snapshot])
  const [background, color] = palette[item.color]
  const style = {
    left: `${item.x}%`,
    top: `${item.y}%`,
    width: `${item.w}%`,
    height: `${item.h}%`,
    color,
    "--surface": background,
    "--ink": color,
    "--fit": `${(vertical ? 155 : 165) / Array.from(item.text).length}${
      vertical ? "cqh" : "cqw"
    }`,
  } as CSSProperties
  return (
    <button
      ref={element}
      data-cell={item.id}
      className={`tile treatment-${item.treatment}${
        vertical ? " vertical" : ""
      }${item.clear ? " real-clear" : ""}`}
      style={style}
      onClick={() => onSelect(item.id, Boolean(item.clear))}
      aria-label={item.clear ? "Clear page" : undefined}
    >
      <span className="face">
        <span className="word" dir={rtl ? "rtl" : "auto"}>
          {item.text}
        </span>
      </span>
    </button>
  )
})

type Phase = "ready" | "expanding" | "white" | "revealing"
export default function App() {
  const [grid, setGrid] = useState(createGrid)
  const [phase, setPhase] = useState<Phase>("ready")
  const plane = useRef<HTMLDivElement>(null)
  const screen = useRef<HTMLElement>(null)
  const veil = useRef<HTMLDivElement>(null)
  const snapshot = useRef<MotionSnapshot | null>(null)
  const busy = useRef(false)
  const flood = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLDivElement>(null)
  const expansion = useRef<{
    box: DOMRect
    viewport: DOMRect
    fontSize: string
    backgroundColor: string
    textColor: string
    moves: { node: HTMLElement; x: number; y: number }[]
  } | null>(null)
  const cells = useMemo(() => layout(grid), [grid])
  const select = useCallback((id: string, clear: boolean) => {
    if (busy.current || !plane.current || !screen.current) return
    if (clear) {
      const button = plane.current.querySelector<HTMLElement>(".real-clear")!
      const cell = button
        .querySelector<HTMLElement>(".face")!
        .getBoundingClientRect()
      const viewport = screen.current.getBoundingClientRect()
      const moves = Array.from(
        plane.current.querySelectorAll<HTMLElement>("[data-cell]"),
        (node) => {
          const rect = node.getBoundingClientRect()
          return {
            node,
            x:
              rect.right <= cell.left + 6
                ? -cell.left + viewport.left - 12
                : rect.left >= cell.right - 6
                  ? viewport.right - cell.right + 12
                  : 0,
            y:
              rect.bottom <= cell.top + 6
                ? -cell.top + viewport.top - 12
                : rect.top >= cell.bottom - 6
                  ? viewport.bottom - cell.bottom + 12
                  : 0,
          }
        },
      )
      expansion.current = {
        box: cell,
        viewport,
        moves,
        backgroundColor: getComputedStyle(button).backgroundColor,
        textColor: getComputedStyle(button).color,
        fontSize: getComputedStyle(button.querySelector(".word")!).fontSize,
      }
      busy.current = true
      setPhase("expanding")
      return
    }
    // Read all current positions together, including any interrupted animation.
    // Layout changes once; the browser then animates only transforms.
    snapshot.current = {
      board: plane.current.getBoundingClientRect(),
      cells: new Map(
        Array.from(
          plane.current.querySelectorAll<HTMLElement>("[data-cell]"),
          (node) => [node.dataset.cell!, node.getBoundingClientRect()],
        ),
      ),
    }
    setGrid((current) => growGrid(current, id))
  }, [])

  useEffect(() => {
    if (phase === "ready") return
    const reduced = reducedMotion()
    let animation: Animation | undefined
    const companions: Animation[] = []
    let cancelled = false
    if (phase === "expanding") {
      const { box, viewport, moves, fontSize, backgroundColor, textColor } =
        expansion.current!
      const x = box.left - viewport.left,
        y = box.top - viewport.top
      const background = flood.current!,
        text = label.current!
      Object.assign(background.style, {
        left: `${x}px`,
        top: `${y}px`,
        width: `${box.width}px`,
        height: `${box.height}px`,
        backgroundColor,
        opacity: "1",
      })
      Object.assign(text.style, {
        left: `${x + box.width / 2}px`,
        top: `${y + box.height / 2}px`,
        fontSize,
        color: textColor,
        opacity: "1",
      })
      const timing = {
        duration: reduced ? 1 : 1100,
        easing: "cubic-bezier(.65, 0, .2, 1)",
        fill: "forwards" as const,
      }
      animation = background.animate(
        [
          { transform: "none" },
          {
            transform: `translate(${-x}px, ${-y}px) scale(${viewport.width / box.width}, ${viewport.height / box.height})`,
          },
        ],
        timing,
      )
      companions.push(
        text.animate(
          [
            { transform: "translate(-50%, -50%)" },
            {
              transform: `translate(calc(-50% + ${viewport.width / 2 - x - box.width / 2}px), calc(-50% + ${viewport.height / 2 - y - box.height / 2}px))`,
            },
          ],
          timing,
        ),
      )
      for (const { node, x: dx, y: dy } of moves) {
        companions.push(
          node.animate(
            [
              { transform: "none" },
              { transform: `translate(${dx}px, ${dy}px)` },
            ],
            timing,
          ),
        )
      }
    } else if (phase === "white") {
      animation = veil.current!.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: reduced ? 1 : 500,
        easing: "ease-in-out",
        fill: "forwards",
      })
    } else {
      animation = veil.current!.animate(
        [{ opacity: 1 }, { opacity: 1, offset: 0.2 }, { opacity: 0 }],
        {
          duration: reduced ? 1 : 800,
          easing: "ease-in-out",
          fill: "forwards",
        },
      )
    }
    animation.finished
      .then(() => {
        if (cancelled) return
        if (phase === "expanding") {
          for (const motion of [animation!, ...companions])
            motion.commitStyles()
          setPhase("white")
        } else if (phase === "white") {
          veil.current!.style.opacity = "1"
          snapshot.current = null
          setGrid(createGrid())
          flood.current!.style.opacity = "0"
          flood.current!.style.transform = "none"
          label.current!.style.opacity = "0"
          label.current!.style.transform = "translate(-50%, -50%)"
          setPhase("revealing")
        } else {
          veil.current!.style.opacity = "0"
          busy.current = false
          setPhase("ready")
        }
      })
      .catch(() => {
        /* A new phase or unmount cancels the previous animation. */
      })
    return () => {
      cancelled = true
      animation?.cancel()
      companions.forEach((motion) => motion.cancel())
    }
  }, [phase])

  return (
    <main
      ref={screen}
      className={`clear-app ${phase}`}
      aria-label="Clear: an interactive typographic experiment"
    >
      <style>{styles}</style>
      <div ref={plane} className="grid-plane" inert={phase !== "ready"}>
        {cells.map((item) => (
          <ClearTile
            key={item.id}
            item={item}
            onSelect={select}
            snapshot={snapshot}
          />
        ))}
      </div>
      <div ref={flood} className="clear-flood" aria-hidden="true" />
      <div ref={label} className="clear-label" aria-hidden="true">
        clear
      </div>
      <div ref={veil} className="white-veil" aria-hidden="true" />
    </main>
  )
}

const styles = `
 .clear-app, .clear-app * {
  box-sizing: border-box;
 
}

.clear-app button {
  font: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
 
}
.clear-app {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-synthesis: auto;
  color: #111;
  overflow: hidden;
  background: #f5f3e9;
  isolation: isolate;
 
}
.clear-app .grid-plane {
  position: absolute;
  inset: 4px;
 
}
.clear-app .tile {
  position: absolute;
  background: var(--surface);
  border: 1px solid #f5f3e9;
  padding: 0;
  border-radius: 0;
  overflow: hidden;
  container-type: size;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 0 0;
  contain: layout paint style;
 
}
.clear-app .face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
 
}
.clear-app .word {
  display: block;
  font-size: min(var(--fit), 105cqh);
  line-height: .8;
  font-weight: 700;
  letter-spacing: -.075em;
  white-space: nowrap;
  pointer-events: none;
 
}
.clear-app .vertical .word {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: min(var(--fit), 112cqw);
 
}
.clear-app .treatment-1 .word {
  font-variation-settings: 'wght' 700, 'MONO' 0, 'slnt' 0;
  letter-spacing: -.1em;
 
}
.clear-app .treatment-2 .word {
  font-style: italic;
  font-weight: 500;
  font-variation-settings: 'wght' 500, 'slnt' -12;
  letter-spacing: -.08em;
 
}
.clear-app .treatment-3 .word {
  -webkit-text-stroke: 1px var(--ink);
  color: transparent;
  font-variation-settings: 'wght' 700;
 
}
.clear-app .treatment-4 .word {
  font-family: 'Courier New', monospace;
  font-weight: 400;
  font-variation-settings: 'wght' 400, 'MONO' 100;
  letter-spacing: -.06em;
 
}
.clear-app .treatment-5 {
  border: 5px double #111;
 
}
.clear-app .treatment-5 .word {
  font-style: italic;
  font-weight: 400;
  font-variation-settings: 'wght' 400, 'slnt' -12;
 
}
.clear-app .tile:hover {
  filter: invert(1);
  z-index: 2;
 
}
.clear-app button:focus-visible {
  outline: 3px solid #fff;
  outline-offset: -4px;
  box-shadow: inset 0 0 0 6px #111;
  z-index: 5;
 
}
.clear-app .real-clear:hover {
  filter: brightness(1.08);
 
}
.clear-app:not(.ready) .tile {
  pointer-events: none;
 
}
.clear-app:not(.ready) .real-clear {
  visibility: hidden;
 
}
.clear-app:not(.ready) .tile:hover {
  filter: none;
 
}
.clear-app .clear-flood {
  position: absolute;
  background: #2deb67;
  opacity: 0;
  transform-origin: 0 0;
  pointer-events: none;
  z-index: 3;
 
}
.clear-app .clear-label {
  position: absolute;
  color: #111;
  font-weight: 700;
  letter-spacing: -.075em;
  line-height: .8;
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 4;
 
}
.clear-app.expanding .clear-flood {
  will-change: transform;
 
}
.clear-app .white-veil {
  position: absolute;
  inset: 0;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  z-index: 10;
 
}
.clear-app.white .white-veil, .clear-app.revealing .white-veil {
  will-change: opacity;
 
}
@media (max-width: 600px) {
  .clear-app .grid-plane {
  inset: 2px;
 
} .clear-app .tile {
  border-width: .5px;
 
} .clear-app .treatment-5 {
  border-width: 3px;
 
}
}

.clear-app .word[dir="rtl"] {
  letter-spacing: normal;
  line-height: 1.3;
  font-feature-settings: normal;
 
}

`
