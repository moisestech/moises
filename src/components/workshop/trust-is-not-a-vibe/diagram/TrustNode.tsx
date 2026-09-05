import { cn } from '@/lib/utils'
import {
  TRUST_DIAGRAM_LABEL,
  TRUST_DIAGRAM_SUB,
  TRUST_DIAGRAM_TONE,
  type TrustDiagramTone,
} from './tokens'

/** Default leading for each text row, in viewBox units. */
const LABEL_LEADING = 17
const SUB_LEADING = 13
/** Default space between the label block and the sub block. */
const BLOCK_GAP = 4
/** Baseline sits below the line box top by roughly the cap height. */
const BASELINE = 0.76

function toLines(value?: string | string[]): string[] {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

/**
 * A labelled shape.
 *
 * Labels are explicit lines rather than auto-wrapped text: SVG cannot wrap
 * without measuring glyphs, and `foreignObject` — the usual workaround — breaks
 * in Safari and when printing. Passing an array keeps the break points in the
 * caller's hands, where the copy lives.
 */
export function TrustNode({
  x,
  y,
  width,
  height,
  tone = 'stone',
  label,
  sub,
  shape = 'rect',
  radius,
  labelClassName,
  subClassName,
  leading,
  className,
}: {
  x: number
  y: number
  width: number
  height: number
  tone?: TrustDiagramTone
  label: string | string[]
  sub?: string | string[]
  shape?: 'rect' | 'pill'
  /** Corner radius override. Short bars need less than the 12 a card wants. */
  radius?: number
  /** Type overrides for denser diagrams. */
  labelClassName?: string
  subClassName?: string
  /**
   * Row spacing, in viewBox units. Short bars need tighter leading than the
   * defaults, or the last descender lands outside the shape.
   */
  leading?: { label?: number; sub?: number; gap?: number }
  className?: string
}) {
  const labelLines = toLines(label)
  const subLines = toLines(sub)
  const centerX = x + width / 2
  const centerY = y + height / 2

  const labelLeading = leading?.label ?? LABEL_LEADING
  const subLeading = leading?.sub ?? SUB_LEADING
  const gap = leading?.gap ?? BLOCK_GAP

  const labelBlock = labelLines.length * labelLeading
  const subBlock = subLines.length ? gap + subLines.length * subLeading : 0
  const top = centerY - (labelBlock + subBlock) / 2

  const labelStart = top + labelLeading * BASELINE
  const subStart = top + labelBlock + gap + subLeading * BASELINE

  return (
    <g className={className}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={radius ?? (shape === 'pill' ? height / 2 : 12)}
        className={TRUST_DIAGRAM_TONE[tone]}
        strokeWidth="2"
      />
      <text textAnchor="middle" className={cn(TRUST_DIAGRAM_LABEL, 'text-[15px] font-semibold', labelClassName)}>
        {labelLines.map((line, index) => (
          <tspan key={line} x={centerX} y={labelStart + index * LABEL_LEADING}>
            {line}
          </tspan>
        ))}
      </text>
      {subLines.length ? (
        <text textAnchor="middle" className={cn(TRUST_DIAGRAM_SUB, 'text-[11px]', subClassName)}>
          {subLines.map((line, index) => (
            <tspan key={line} x={centerX} y={subStart + index * SUB_LEADING}>
              {line}
            </tspan>
          ))}
        </text>
      ) : null}
    </g>
  )
}
