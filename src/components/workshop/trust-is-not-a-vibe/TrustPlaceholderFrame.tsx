import type { ReactNode } from 'react'
import {
  TRUST_PLACEHOLDERS,
  type TrustPlaceholder,
  type TrustPlaceholderKey,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'

const STATUS_LABEL = {
  pending: 'Still pending',
  css: 'Interface exists · still pending',
  svg: 'SVG in place',
  ready: 'Ready',
} as const

export function TrustPlaceholderFrame({
  asset,
  className,
  children,
  compact,
}: {
  asset: TrustPlaceholderKey
  className?: string
  children?: ReactNode
  compact?: boolean
}) {
  const item: TrustPlaceholder = TRUST_PLACEHOLDERS[asset]
  return (
    <figure className={cn('overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700', className)}>
      {children ?? (
        <div
          className={cn(
            'flex flex-col items-center justify-center bg-stone-100/80 px-4 text-center dark:bg-stone-900/40',
            compact ? 'aspect-[16/9] py-6' : 'aspect-[16/10] py-8'
          )}
          role="img"
          aria-label={item.alt}
        >
          <TrustMark id={item.mark} className="h-9 w-9" />
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
            {item.surfaceFilename ?? 'Designed slot'}
          </p>
          <p className="mt-2 max-w-sm text-sm font-medium text-stone-700 dark:text-stone-200">{item.label}</p>
          <p className="mt-1 max-w-sm text-xs leading-relaxed text-stone-500">{item.depiction}</p>
          <p className="mt-3 text-[10px] uppercase tracking-wide text-amber-700 dark:text-amber-300">
            {STATUS_LABEL[item.status]}
          </p>
        </div>
      )}
      <figcaption className="border-t border-stone-200 bg-white/90 px-4 py-2 text-xs text-stone-500 dark:border-stone-700 dark:bg-stone-900/90">
        {item.alt}
      </figcaption>
    </figure>
  )
}

export function TrustInstructorClip({
  title,
  durationHint,
  sourceNote,
}: {
  title: string
  durationHint: string
  sourceNote: string
}) {
  return (
    <aside className="rounded-xl border border-dashed border-stone-300 bg-stone-50 p-4 dark:border-stone-600 dark:bg-stone-900/40">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
        Instructor clip · {durationHint} · still pending
      </p>
      <h3 className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-100">{title}</h3>
      <div
        className="mt-3 flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-stone-200 bg-stone-100 text-xs text-stone-500 dark:border-stone-700 dark:bg-stone-800"
        role="img"
        aria-label="Recording pending. Captions and transcript required when recorded."
      >
        <TrustMark id="ask" className="h-8 w-8" />
        <span>Poster / recording pending</span>
      </div>
      <p className="mt-2 text-xs text-stone-500">{sourceNote}</p>
    </aside>
  )
}
