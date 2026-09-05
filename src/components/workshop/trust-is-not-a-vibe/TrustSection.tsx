'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useRegisterTrustStep } from './TrustPresentation'
import { trust, TRUST_SCROLL_MT } from './trust-tokens'

const KIND = {
  read: { label: 'Read', note: 'Context before you act.' },
  vote: { label: 'Vote', note: 'A recorded choice. Not a graded quiz.' },
  pick: { label: 'Pick', note: 'Choose a seat. It stays with you through the lab.' },
  inspect: { label: 'Inspect', note: 'Open what the card is hiding.' },
  practice: { label: 'Practice', note: 'Do the move this chapter teaches.' },
  clock: { label: 'Clock', note: 'The path, in order.' },
} as const

export type TrustSectionKind = keyof typeof KIND

export function TrustSection({
  kind,
  title,
  note,
  flush,
  children,
  className,
}: {
  kind: TrustSectionKind
  title: string
  note?: string
  flush?: boolean
  children: ReactNode
  className?: string
}) {
  const meta = KIND[kind]
  const { ref, current } = useRegisterTrustStep(title)

  return (
    <section
      ref={ref}
      // Focusable only programmatically: presenting moves focus here so the
      // announcement lands and Tab continues from the section on screen.
      tabIndex={-1}
      data-trust-step
      data-trust-step-current={current || undefined}
      className={cn(
        flush
          ? 'mt-10'
          : 'mt-20 border-t border-stone-200 pt-16 dark:border-stone-800',
        TRUST_SCROLL_MT,
        // A left accent rather than a focus ring. A ring around a full-width
        // block reads as an error state on a projector.
        'outline-none motion-safe:transition-[box-shadow,padding] pl-0',
        current && 'rounded-r-lg shadow-[inset_3px_0_0_0_theme(colors.cyan.500)] pl-4',
        className
      )}
    >
      <p className="font-space-mono text-[11px] uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
        {meta.label}
      </p>
      <p className="mt-2 max-w-2xl text-base text-stone-500 dark:text-stone-400">{note ?? meta.note}</p>
      <h2 className={cn(trust.h2, 'mt-5')}>{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  )
}
