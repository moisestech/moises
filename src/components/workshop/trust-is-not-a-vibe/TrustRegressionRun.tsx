'use client'

import { useState } from 'react'
import { HiCheck, HiOutlineEyeSlash, HiXMark } from 'react-icons/hi2'
import {
  TRUST_GOLDEN_CASES,
  TRUST_REGRESSION_LINE,
  TRUST_REGRESSION_RUN,
  type TrustRunResult,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_SCROLL_MT } from './trust-tokens'

const TITLE = new Map(TRUST_GOLDEN_CASES.map((item) => [item.id, item.title]))

function ResultMark({ result }: { result: TrustRunResult }) {
  const pass = result === 'pass'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[11px] font-semibold',
        pass
          ? 'bg-stone-200 text-stone-800 dark:bg-stone-700 dark:text-stone-100'
          : 'bg-red-100 text-red-900 dark:bg-red-950/60 dark:text-red-200'
      )}
    >
      {pass ? <HiCheck className="h-3 w-3" aria-hidden /> : <HiXMark className="h-3 w-3" aria-hidden />}
      {pass ? 'Pass' : 'Fail'}
    </span>
  )
}

/**
 * The same golden set, before and after one change. A summary score says the
 * candidate improved; the per-case view shows it broke something that used to
 * work. That is why the set has to be rerun rather than resampled, and why a
 * single number is not a release decision.
 */
export function TrustRegressionRun({ className }: { className?: string }) {
  const [revealed, setRevealed] = useState(false)

  const basePass = TRUST_REGRESSION_RUN.filter((row) => row.baseline === 'pass').length
  const candPass = TRUST_REGRESSION_RUN.filter((row) => row.candidate === 'pass').length
  const regressions = TRUST_REGRESSION_RUN.filter(
    (row) => row.baseline === 'pass' && row.candidate === 'fail'
  )

  return (
    <div className={cn('space-y-3', className)}>
      <dl className="flex flex-wrap gap-2">
        <div className="flex-1 rounded-xl border border-stone-200 px-3 py-2 dark:border-stone-700">
          <dt className="text-xs font-semibold uppercase tracking-wide text-stone-500">Before</dt>
          <dd className="mt-0.5 text-lg font-bold text-stone-950 dark:text-stone-50">
            {basePass} / {TRUST_REGRESSION_RUN.length} pass
          </dd>
        </div>
        <div className="flex-1 rounded-xl border border-stone-200 px-3 py-2 dark:border-stone-700">
          <dt className="text-xs font-semibold uppercase tracking-wide text-stone-500">
            After one prompt change
          </dt>
          <dd className="mt-0.5 text-lg font-bold text-stone-950 dark:text-stone-50">
            {candPass} / {TRUST_REGRESSION_RUN.length} pass
          </dd>
        </div>
      </dl>

      <p className="text-sm text-stone-700 dark:text-stone-300">
        The score went up. Would you ship it?
      </p>

      {revealed ? null : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium transition hover:border-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-stone-600 dark:focus-visible:ring-offset-stone-950',
            TRUST_SCROLL_MT
          )}
        >
          <HiOutlineEyeSlash className="h-4 w-4" aria-hidden />
          Compare case by case
        </button>
      )}

      {revealed ? (
        <div aria-live="polite">
          <ul className="divide-y divide-stone-200 overflow-hidden rounded-xl border border-stone-200 dark:divide-stone-700 dark:border-stone-700">
            {TRUST_REGRESSION_RUN.map((row) => {
              const broke = row.baseline === 'pass' && row.candidate === 'fail'
              return (
                <li
                  key={row.caseId}
                  className={cn(
                    'flex flex-wrap items-center gap-x-3 gap-y-1 px-3 py-2',
                    broke ? 'bg-red-50 dark:bg-red-950/30' : 'bg-white dark:bg-stone-900'
                  )}
                >
                  <span className="min-w-0 flex-1 text-sm text-stone-800 dark:text-stone-200">
                    {TITLE.get(row.caseId)}
                  </span>
                  <ResultMark result={row.baseline} />
                  <span className="text-stone-400" aria-hidden>
                    →
                  </span>
                  <ResultMark result={row.candidate} />
                  {broke ? (
                    <span className="w-full text-xs text-red-900 dark:text-red-200">
                      <span className="sr-only">Regression. </span>
                      {row.note}
                    </span>
                  ) : null}
                </li>
              )
            })}
          </ul>
          <p className="mt-2 text-sm font-medium text-stone-900 dark:text-stone-100">
            {regressions.length} regression{regressions.length === 1 ? '' : 's'}. {TRUST_REGRESSION_LINE}
          </p>
        </div>
      ) : null}
    </div>
  )
}
