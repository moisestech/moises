'use client'

import { HiCheck } from 'react-icons/hi2'
import { TRUST_CASE_A, TRUST_ROLES, type TrustRoleId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustRolePattern } from './TrustRolePattern'
import { ROLE_ICON } from './TrustSeatSection'
import { TrustSpecimen } from './TrustSpecimen'
import { TRUST_ROLE_TONE, TRUST_SCROLL_MT } from './trust-tokens'

/** Left column seats point right; right column seats point left. Fills the 0.75rem grid gap. */
const SEAT_CELL: Record<TrustRoleId, { cell: string; connector: string }> = {
  pm: { cell: 'sm:col-start-1 sm:row-start-1', connector: 'sm:block -right-3' },
  engineering: { cell: 'sm:col-start-3 sm:row-start-1', connector: 'sm:block -left-3' },
  design: { cell: 'sm:col-start-1 sm:row-start-2', connector: 'sm:block -right-3' },
  strategy: { cell: 'sm:col-start-3 sm:row-start-2', connector: 'sm:block -left-3' },
}

export function TrustFourSeatsDiagram({
  role,
  signals,
  caption,
  onSelect,
}: {
  role: TrustRoleId | null
  signals: Partial<Record<TrustRoleId, string>>
  caption: string
  onSelect: (id: TrustRoleId) => void
}) {
  return (
    <figure className="m-0">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] sm:grid-rows-2">
        <TrustSpecimen
          caseData={TRUST_CASE_A}
          variant="compact"
          className="col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:row-span-2 sm:self-center"
        />

        {TRUST_ROLES.map((entry) => {
          const Icon = ROLE_ICON[entry.id]
          const tone = TRUST_ROLE_TONE[entry.id]
          const placement = SEAT_CELL[entry.id]
          const selected = role === entry.id
          return (
            <button
              key={entry.id}
              type="button"
              onClick={() => onSelect(entry.id)}
              aria-pressed={selected}
              className={cn(
                'relative overflow-hidden rounded-xl border px-3 py-3 text-left transition duration-200 hover:border-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                placement.cell,
                TRUST_SCROLL_MT,
                selected
                  ? cn(tone.border, tone.wash, 'border-2 shadow-md')
                  : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900'
              )}
            >
              {selected ? <span className="sr-only">Selected seat. </span> : null}
              {selected ? (
                <span className={cn('absolute inset-0', tone.icon)} aria-hidden>
                  <TrustRolePattern role={entry.id} />
                </span>
              ) : null}
              <span
                aria-hidden
                className={cn('absolute top-1/2 hidden h-px w-3 bg-stone-300 dark:bg-stone-600', placement.connector)}
              />
              <span className={cn('relative flex items-center gap-2 text-sm font-semibold', tone.text)}>
                <Icon className={cn('h-5 w-5 shrink-0', tone.icon)} aria-hidden />
                {entry.label}
              </span>
              <span className="relative mt-1.5 block text-sm leading-snug text-stone-700 dark:text-stone-300">
                {signals[entry.id] ?? entry.primaryQuestions[0]}
              </span>
              {selected ? (
                <span
                  className={cn(
                    'relative mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold',
                    tone.fill
                  )}
                >
                  <HiCheck className="h-3.5 w-3.5" aria-hidden />
                  Your seat
                </span>
              ) : null}
            </button>
          )
        })}
      </div>
      <figcaption className="mt-2 text-sm text-stone-600 dark:text-stone-400">{caption}</figcaption>
    </figure>
  )
}
