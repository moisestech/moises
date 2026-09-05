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
  const { ref, current, focused, select } = useRegisterTrustStep(title)

  return (
    <section
      className={cn(
        'rounded-lg border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
        flush ? 'mt-0' : 'mt-3',
        current && 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950',
        className
      )}
    >
      <button
        ref={ref}
        type="button"
        tabIndex={-1}
        data-trust-step
        data-trust-step-current={current || undefined}
        aria-expanded={focused}
        onClick={select}
        className={cn(
          'flex w-full flex-col items-start px-3 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset',
          TRUST_SCROLL_MT
        )}
      >
        <p className="font-space-mono text-[11px] uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
          {meta.label}
        </p>
        <h2 className={cn(trust.h2, 'mt-1 text-lg sm:text-xl')}>{title}</h2>
        <p className="mt-1 max-w-2xl text-sm text-stone-500 dark:text-stone-400">{note ?? meta.note}</p>
      </button>
      {focused ? (
        <div className="border-t border-stone-200 px-3 py-4 dark:border-stone-700">{children}</div>
      ) : null}
    </section>
  )
}
