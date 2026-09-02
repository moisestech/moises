import type { ReactNode } from 'react'
import { TRUST_PLACEHOLDERS, type TrustPlaceholderKey } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { trustPlaceholderBox } from './trust-tokens'

export function TrustPlaceholderFrame({
  asset,
  className,
  children,
}: {
  asset: TrustPlaceholderKey
  className?: string
  children?: ReactNode
}) {
  const item = TRUST_PLACEHOLDERS[asset]
  return (
    <figure className={cn('overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700', className)}>
      {children ?? (
        <div className={trustPlaceholderBox('aspect-[16/10] rounded-none border-0')} role="img" aria-label={item.alt}>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Placeholder</p>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{item.label}</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-stone-400">{item.status}</p>
          </div>
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
      <p className="text-[10px] uppercase tracking-[0.18em] text-stone-500">Instructor clip · {durationHint} · pending</p>
      <h3 className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-100">{title}</h3>
      <div
        className="mt-3 flex aspect-video items-center justify-center rounded-lg border border-stone-200 bg-stone-100 text-xs text-stone-500 dark:border-stone-700 dark:bg-stone-800"
        role="img"
        aria-label="Recording pending. Captions and transcript required when recorded."
      >
        Poster / recording pending
      </div>
      <p className="mt-2 text-xs text-stone-500">{sourceNote}</p>
    </aside>
  )
}
