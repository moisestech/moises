'use client'

import { cn } from '@/lib/utils'
import { useTrustDiagramIds } from './TrustDiagramSvg'
import { TRUST_DIAGRAM_EDGE, TRUST_DIAGRAM_HALO, TRUST_DIAGRAM_SUB } from './tokens'

export type TrustPoint = { x: number; y: number }

function path(from: TrustPoint, to: TrustPoint, kind: 'straight' | 'elbow' | 'curve', bow: number) {
  if (kind === 'straight') return `M ${from.x} ${from.y} L ${to.x} ${to.y}`
  if (kind === 'elbow') {
    const midX = (from.x + to.x) / 2
    return `M ${from.x} ${from.y} H ${midX} V ${to.y} H ${to.x}`
  }
  // Quadratic bowed perpendicular to the run, so parallel edges stay legible.
  const midX = (from.x + to.x) / 2
  const midY = (from.y + to.y) / 2
  const dx = to.x - from.x
  const dy = to.y - from.y
  const length = Math.hypot(dx, dy) || 1
  const controlX = midX + (-dy / length) * bow
  const controlY = midY + (dx / length) * bow
  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`
}

/**
 * A connector between two points, with an optional mid-run label.
 *
 * The label is drawn twice — once as a thick stroke in the surface color, once
 * as fill — so it reads where it overlaps the line. That is cheaper and more
 * reliable than sizing a background rect, which would need glyph measurement.
 */
export function TrustEdge({
  from,
  to,
  kind = 'straight',
  bow = 24,
  label,
  dashed,
  arrow = true,
  className,
}: {
  from: TrustPoint
  to: TrustPoint
  kind?: 'straight' | 'elbow' | 'curve'
  /** Perpendicular offset for `curve`, in viewBox units. */
  bow?: number
  label?: string
  /** Weaker or provisional relationships. */
  dashed?: boolean
  arrow?: boolean
  className?: string
}) {
  const ids = useTrustDiagramIds()
  const midX = (from.x + to.x) / 2
  const midY = (from.y + to.y) / 2

  return (
    <g className={className}>
      <path
        d={path(from, to, kind, bow)}
        fill="none"
        className={TRUST_DIAGRAM_EDGE}
        strokeWidth="2"
        strokeDasharray={dashed ? '5 4' : undefined}
        markerEnd={arrow ? `url(#${ids.arrow})` : undefined}
      />
      {label ? (
        <text
          x={midX}
          y={midY - 6}
          textAnchor="middle"
          className={cn(TRUST_DIAGRAM_SUB, TRUST_DIAGRAM_HALO, 'text-[10px]')}
          strokeWidth="3"
          paintOrder="stroke"
        >
          {label}
        </text>
      ) : null}
    </g>
  )
}
