'use client'

import { useState } from 'react'
import type { TrustFailure } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { usePresentationMode } from './TrustPresentation'
import { failureMarkFromVisible, TrustMark } from './TrustMarks'
import { trustPresent } from './trust-tokens'

export function FailureTokens({
  failures,
  selected,
  onToggle,
  revealed,
  onReveal,
  minNamed = 3,
}: {
  failures: readonly TrustFailure[]
  selected: string[]
  onToggle: (id: string) => void
  revealed: boolean
  onReveal: () => void
  minNamed?: number
}) {
  const { present } = usePresentationMode()
  const [focusedId, setFocusedId] = useState<string | null>(null)
  const named = selected.length
  const remaining = Math.max(minNamed - named, 0)
  const focused =
    failures.find((failure) => failure.id === focusedId) ??
    (revealed ? failures.find((failure) => selected.includes(failure.id)) : undefined)

  const promptClass = present
    ? cn('font-semibold text-stone-900 dark:text-stone-100', trustPresent.body)
    : 'text-lg font-semibold leading-snug text-stone-900 sm:text-xl dark:text-stone-100'
  const noteClass = present
    ? cn('text-stone-700 dark:text-stone-300', trustPresent.note)
    : 'text-base leading-snug text-stone-600 dark:text-stone-400'
  const choiceClass = present
    ? cn('text-stone-800 dark:text-stone-200', trustPresent.choice)
    : 'text-base font-medium text-stone-800 dark:text-stone-200'

  const pick = (id: string) => {
    setFocusedId(id)
    onToggle(id)
  }

  return (
    <div
      data-trust-failure-search
      className={cn(present ? 'space-y-6' : 'space-y-4 border-t border-stone-200 pt-6 dark:border-stone-700')}
    >
      {present ? null : (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Pick 3 planted failures</p>
      )}
      {!revealed ? (
        <>
          <p className={promptClass}>
            Reveal the six planted breaks. Then name at least three that are not “it hallucinated.”
          </p>
          <button
            type="button"
            onClick={onReveal}
            className={cn(
              'inline-flex items-center rounded-lg bg-stone-900 font-semibold text-white dark:bg-cyan-500 dark:text-stone-950',
              present ? cn('px-6 py-4', trustPresent.choice) : 'px-4 py-2.5 text-sm'
            )}
          >
            Reveal the six planted breaks
          </button>
        </>
      ) : (
        <>
          <p className={promptClass}>Pick 3 planted failures that are not “it hallucinated.”</p>
          <p data-trust-failure-count className={choiceClass}>
            {named} found · {failures.length - named} unfound
            {remaining > 0 ? ` · name ${remaining} more` : ' · checkpoint met'}
          </p>
          <div className={cn('grid', present ? 'gap-4 sm:grid-cols-2' : 'gap-3 sm:grid-cols-2')}>
            {failures.map((failure) => {
              const found = selected.includes(failure.id)
              const open = focused?.id === failure.id
              return (
                <button
                  key={failure.id}
                  type="button"
                  data-trust-failure-token={failure.id}
                  data-trust-failure-state={found ? 'found' : 'unfound'}
                  onClick={() => pick(failure.id)}
                  aria-pressed={found}
                  className={cn(
                    'rounded-xl border text-left',
                    present ? 'px-5 py-4' : 'px-4 py-3',
                    found
                      ? 'border-red-400 bg-red-50 dark:bg-red-950/30'
                      : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
                    open && 'ring-2 ring-red-400 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950'
                  )}
                >
                  <p
                    className={cn(
                      'flex flex-wrap items-center gap-x-3 gap-y-1',
                      present ? trustPresent.note : 'text-sm text-stone-600 dark:text-stone-400'
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <TrustMark
                        id={failureMarkFromVisible(failure.visible)}
                        className={present ? 'h-7 w-7' : 'h-5 w-5'}
                      />
                      {failure.visible}
                    </span>
                    <span
                      className={cn(
                        'font-semibold uppercase tracking-wide',
                        found ? 'text-red-800 dark:text-red-200' : 'text-stone-500 dark:text-stone-400',
                        present ? 'text-lg sm:text-xl' : 'text-xs'
                      )}
                    >
                      {found ? 'Found' : 'Unfound'}
                    </span>
                  </p>
                  <p
                    className={cn(
                      'mt-2 font-semibold text-stone-950 dark:text-stone-50',
                      present ? trustPresent.choice : 'text-base'
                    )}
                  >
                    {failure.label}
                  </p>
                </button>
              )
            })}
          </div>
          {focused ? (
            <div
              data-trust-failure-detail={focused.id}
              className={cn(
                'rounded-xl border border-red-300 bg-red-50/80 dark:border-red-800 dark:bg-red-950/40',
                present ? 'px-6 py-6' : 'px-4 py-4'
              )}
            >
              <p
                className={cn(
                  'font-semibold uppercase tracking-wide text-red-800 dark:text-red-200',
                  present ? trustPresent.note : 'text-xs'
                )}
              >
                Found definition
              </p>
              <p
                className={cn(
                  'mt-2 font-semibold text-stone-950 dark:text-stone-50',
                  present ? trustPresent.choice : 'text-lg'
                )}
              >
                {focused.label}
              </p>
              <p
                data-trust-failure-definition
                className={cn(
                  'mt-3 text-stone-900 dark:text-stone-100',
                  present ? trustPresent.body : 'text-lg leading-snug sm:text-xl'
                )}
              >
                {focused.detail}
              </p>
              <p className={cn('mt-3 text-stone-700 dark:text-stone-300', present ? trustPresent.note : 'text-base')}>
                {focused.technical}
              </p>
            </div>
          ) : (
            <p className={noteClass}>Tap a planted break to name it. Its definition opens here.</p>
          )}
        </>
      )}
    </div>
  )
}
