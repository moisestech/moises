'use client'

import { useState } from 'react'
import { HiCheckCircle, HiOutlineArrowPath, HiXCircle } from 'react-icons/hi2'
import {
  TRUST_SCORING_APPROACHES,
  TRUST_SCORING_PROBES,
  type TrustScoringApproachId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_SCROLL_MT } from './trust-tokens'

const APPROACH_LABEL: Record<TrustScoringApproachId, string> = Object.fromEntries(
  TRUST_SCORING_APPROACHES.map((approach) => [approach.id, approach.label])
) as Record<TrustScoringApproachId, string>

/**
 * Four questions about the same card, each needing a different kind of check.
 * The learner picks a check per question, which is the lesson: the approach
 * follows from the question, not from a list of metric names.
 */
export function TrustScoringApproaches({
  onAllAnswered,
  className,
}: {
  onAllAnswered?: () => void
  className?: string
}) {
  const [answers, setAnswers] = useState<Partial<Record<string, TrustScoringApproachId>>>({})

  function choose(probeId: string, approach: TrustScoringApproachId) {
    const next = { ...answers, [probeId]: approach }
    setAnswers(next)
    if (TRUST_SCORING_PROBES.every((probe) => next[probe.id])) onAllAnswered?.()
  }

  const answered = TRUST_SCORING_PROBES.filter((probe) => answers[probe.id]).length

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm text-stone-700 dark:text-stone-300">
          Same card, four questions. Choose the check that could actually settle each one.
        </p>
        <p className="text-xs text-stone-500" aria-live="polite">
          {answered} of {TRUST_SCORING_PROBES.length} matched
        </p>
      </div>

      <ul className="space-y-2">
        {TRUST_SCORING_PROBES.map((probe) => {
          const picked = answers[probe.id]
          const correct = picked === probe.approach
          return (
            <li
              key={probe.id}
              className={cn(
                'rounded-xl border px-3 py-3 transition duration-200',
                picked
                  ? correct
                    ? 'border-stone-400 bg-stone-50 dark:border-stone-500 dark:bg-stone-900/60'
                    : 'border-amber-400 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/30'
                  : 'border-stone-200 dark:border-stone-700',
                TRUST_SCROLL_MT
              )}
            >
              <p className="text-sm font-medium text-stone-950 dark:text-stone-50">{probe.question}</p>

              <div className="mt-2 flex flex-wrap gap-1.5" role="group" aria-label={probe.question}>
                {TRUST_SCORING_APPROACHES.map((approach) => {
                  const active = picked === approach.id
                  return (
                    <button
                      key={approach.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => choose(probe.id, approach.id)}
                      className={cn(
                        'rounded-lg border px-2.5 py-1 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                        active
                          ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-950'
                          : 'border-stone-300 text-stone-700 hover:border-stone-500 dark:border-stone-600 dark:text-stone-300'
                      )}
                    >
                      {approach.label}
                    </button>
                  )
                })}
              </div>

              {picked ? (
                <p
                  className={cn(
                    'mt-2 flex items-start gap-1.5 text-sm leading-snug',
                    correct ? 'text-stone-700 dark:text-stone-300' : 'text-amber-900 dark:text-amber-200'
                  )}
                  aria-live="polite"
                >
                  {correct ? (
                    <HiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden />
                  ) : (
                    <HiXCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  )}
                  <span>
                    {correct ? (
                      probe.why
                    ) : (
                      <>
                        <span className="font-medium">{APPROACH_LABEL[probe.approach]} settles this one. </span>
                        {probe.why}
                      </>
                    )}
                  </span>
                </p>
              ) : null}
            </li>
          )
        })}
      </ul>

      {answered ? (
        <button
          type="button"
          onClick={() => setAnswers({})}
          className="inline-flex items-center gap-1 text-xs text-stone-500 underline-offset-2 hover:underline"
        >
          <HiOutlineArrowPath className="h-3.5 w-3.5" aria-hidden />
          Start over
        </button>
      ) : null}
    </div>
  )
}

/** Metric names and the caveats that go with them. Optional depth only. */
export function TrustScoringMethods() {
  return (
    <dl className="space-y-2">
      {TRUST_SCORING_APPROACHES.filter((approach) => approach.namedMethods).map((approach) => (
        <div key={approach.id} className="rounded-xl border border-stone-200 px-3 py-2.5 dark:border-stone-700">
          <dt className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-sm font-semibold text-stone-950 dark:text-stone-50">{approach.label}</span>
            <span className="font-space-mono text-xs text-stone-500">{approach.namedMethods}</span>
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {approach.methodNote}
            <span className="mt-1 block text-xs text-stone-500">Misses: {approach.misses}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}
