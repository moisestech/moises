import type { ReactNode } from 'react'
import {
  TRUST_PLACEHOLDERS,
  type TrustPlaceholder,
  type TrustPlaceholderKey,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'
import {
  TRUST_MISSING_HATCH,
  TRUST_STATUS_LABEL,
  TrustMissingStillBadge,
  trustStillIsMissing,
} from './TrustMissingStill'

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
  const missing = trustStillIsMissing(item.status)
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-xl border',
        missing
          ? 'border-dashed border-amber-400/80 dark:border-amber-500/70'
          : 'border-stone-200 dark:border-stone-700',
        className
      )}
    >
      {children ?? (
        <div
          className={cn(
            'relative flex flex-col items-center justify-center px-4 text-center',
            missing ? TRUST_MISSING_HATCH : 'bg-stone-100/80 dark:bg-stone-900/40',
            compact ? 'aspect-[16/9] py-6' : 'aspect-[16/10] py-8'
          )}
          role="img"
          aria-label={item.alt}
        >
          <TrustMissingStillBadge
            status={item.status}
            filename={item.surfaceFilename}
            className="absolute left-3 top-3"
          />
          <TrustMark id={item.mark} className="h-9 w-9" />
          <p className="mt-3 max-w-sm text-sm font-semibold text-stone-800 dark:text-stone-100">{item.label}</p>
          <p className="mt-1 max-w-sm text-xs leading-relaxed text-stone-600 dark:text-stone-400">{item.depiction}</p>
          <p className="mt-3 text-[10px] uppercase tracking-wide text-amber-800 dark:text-amber-200">
            {TRUST_STATUS_LABEL[item.status]}
          </p>
        </div>
      )}
      <figcaption
        className={cn(
          'border-t px-4 py-2 text-xs',
          missing
            ? 'border-amber-200 bg-amber-50/80 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100'
            : 'border-stone-200 bg-white/90 text-stone-500 dark:border-stone-700 dark:bg-stone-900/90'
        )}
      >
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
  const item = TRUST_PLACEHOLDERS.instructorClips
  return (
    <aside className="rounded-xl border border-dashed border-amber-400/80 bg-amber-50/40 p-4 dark:border-amber-500/60 dark:bg-amber-950/20">
      <TrustMissingStillBadge status={item.status} filename={item.surfaceFilename} />
      <h3 className="mt-2 text-sm font-semibold text-stone-900 dark:text-stone-100">{title}</h3>
      <p className="mt-1 text-xs text-stone-500">
        Instructor clip · {durationHint} · {TRUST_STATUS_LABEL[item.status]}
      </p>
      <div
        className={cn(
          'mt-3 flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-amber-400/70 text-xs text-amber-900 dark:border-amber-500/50 dark:text-amber-100',
          TRUST_MISSING_HATCH
        )}
        role="img"
        aria-label={item.alt}
      >
        <TrustMark id="ask" className="h-8 w-8" />
        <span>Poster / recording missing</span>
      </div>
      <p className="mt-2 text-xs text-stone-500">{sourceNote}</p>
    </aside>
  )
}
