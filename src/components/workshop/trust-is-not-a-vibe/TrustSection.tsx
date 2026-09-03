import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { trust } from './trust-tokens'

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
  return (
    <section
      className={cn(
        flush
          ? 'mt-10'
          : 'mt-20 border-t border-stone-200 pt-16 dark:border-stone-800',
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
