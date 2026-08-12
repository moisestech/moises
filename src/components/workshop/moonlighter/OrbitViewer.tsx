'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight CSS orbit fallback. Full R3F mesh can replace when GLB assets exist.
 * Respects prefers-reduced-motion with a static multi-view grid.
 */
export function OrbitViewer({
  label = 'Untextured mesh inspection',
}: {
  label?: string
}) {
  const [reduced, setReduced] = useState(false)
  const [angle, setAngle] = useState(25)
  const dragging = useRef(false)
  const lastX = useRef(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  if (reduced) {
    return (
      <div className="grid grid-cols-2 gap-2 border border-[var(--ml-soft-gray)] bg-white/40 p-3" role="img" aria-label={label}>
        {['Front', 'Side', 'Back', 'Underside'].map((view) => (
          <div key={view} className="flex aspect-square items-end justify-center bg-[var(--ml-soft-gray)]/40 p-2 text-xs">
            {view}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="relative aspect-video cursor-grab touch-none border border-[var(--ml-soft-gray)] bg-[var(--ml-ink)]/[0.04] active:cursor-grabbing"
      role="img"
      aria-label={`${label}. Drag to orbit.`}
      onPointerDown={(e) => {
        dragging.current = true
        lastX.current = e.clientX
        ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return
        const dx = e.clientX - lastX.current
        lastX.current = e.clientX
        setAngle((a) => a + dx * 0.4)
      }}
      onPointerUp={() => {
        dragging.current = false
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="h-28 w-28 rounded-lg bg-gradient-to-br from-[#9aa0a6] to-[#5c636a] shadow-lg transition-transform duration-150 motion-reduce:transition-none"
          style={{ transform: `perspective(600px) rotateY(${angle}deg) rotateX(12deg)` }}
        />
      </div>
      <p className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
        Drag to orbit · Reset with double-click
      </p>
      <button
        type="button"
        className="absolute bottom-2 right-2 text-xs underline"
        onDoubleClick={() => setAngle(25)}
        onClick={() => setAngle(25)}
      >
        Reset
      </button>
    </div>
  )
}

export function BeforeAfterCompare({
  beforeLabel = 'Before',
  afterLabel = 'After',
}: {
  beforeLabel?: string
  afterLabel?: string
}) {
  const [pos, setPos] = useState(50)
  return (
    <div className="space-y-2">
      <div className="relative aspect-[4/3] overflow-hidden border border-[var(--ml-soft-gray)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--ml-diagnose)]/20 to-[var(--ml-soft-gray)]" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--ml-verified)]/25 to-[var(--ml-soft-gray)]"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        />
        <span className="absolute left-2 top-2 rounded-sm bg-white/80 px-2 py-0.5 text-[10px] font-mono uppercase">
          {beforeLabel}
        </span>
        <span className="absolute right-2 top-2 rounded-sm bg-white/80 px-2 py-0.5 text-[10px] font-mono uppercase">
          {afterLabel}
        </span>
      </div>
      <label className="flex items-center gap-3 text-xs">
        <span className="sr-only">Compare before and after</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full"
        />
      </label>
    </div>
  )
}
