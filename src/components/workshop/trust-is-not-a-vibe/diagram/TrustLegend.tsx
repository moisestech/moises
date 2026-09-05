import { cn } from '@/lib/utils'
import { TRUST_DIAGRAM_TONE, type TrustDiagramTone } from './tokens'

export type TrustLegendItem = {
  tone: TrustDiagramTone
  label: string
  /** What the tone means here. Keeps the diagram readable without color. */
  meaning?: string
}

/**
 * Key for a diagram's tones.
 *
 * Every legend row carries a text label, so no diagram depends on color alone
 * to convey meaning.
 */
export function TrustLegend({ items, className }: { items: TrustLegendItem[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-x-4 gap-y-2', className)}>
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2 text-xs">
          <svg viewBox="0 0 12 12" aria-hidden className="h-3 w-3 shrink-0">
            <rect x="0.75" y="0.75" width="10.5" height="10.5" rx="3" className={TRUST_DIAGRAM_TONE[item.tone]} strokeWidth="1.5" />
          </svg>
          <span className="font-medium text-stone-800 dark:text-stone-200">{item.label}</span>
          {item.meaning ? <span className="text-stone-500 dark:text-stone-400">{item.meaning}</span> : null}
        </li>
      ))}
    </ul>
  )
}
