'use client'

import Link from 'next/link'
import {
  getTrustRole,
  TRUST_GRADERS,
  TRUST_LEARN_BASE,
  TRUST_ROLE_CRITERION,
  type TrustGraderId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { trust, TRUST_ROLE_TONE, TRUST_SCROLL_MT } from './trust-tokens'

/**
 * The sentence the learner wrote in Four Lenses, brought forward and given a
 * grader. This is where a role opinion becomes part of the harness: a criterion
 * nobody can check is still just a preference.
 */
export function TrustCriterionCarry({
  criterion,
  criterionRole,
  grader,
  onPickGrader,
  className,
}: {
  criterion: string
  criterionRole: ReturnType<typeof getTrustRole>
  grader: TrustGraderId | null
  onPickGrader: (id: TrustGraderId) => void
  className?: string
}) {
  const written = criterion.trim()
  const fallbackRole = criterionRole ?? undefined
  const shown = written || (fallbackRole ? TRUST_ROLE_CRITERION[fallbackRole.id] : '')
  const tone = fallbackRole ? TRUST_ROLE_TONE[fallbackRole.id] : null
  const RoleIcon = fallbackRole ? ROLE_ICON[fallbackRole.id] : null
  const picked = TRUST_GRADERS.find((entry) => entry.id === grader)

  if (!shown) {
    return (
      <p className={cn('text-sm text-stone-600 dark:text-stone-400', className)}>
        Write a criterion in{' '}
        <Link href={`${TRUST_LEARN_BASE}/four-lenses`} className={trust.link}>
          Four Lenses
        </Link>{' '}
        and it will appear here with a grader to check it.
      </p>
    )
  }

  return (
    <div className={cn('space-y-2', className)}>
      <blockquote className={cn('border-l-2 pl-3', tone ? tone.border : 'border-stone-300')}>
        {fallbackRole && RoleIcon ? (
          <p className={cn('flex items-center gap-1.5 text-xs font-semibold', tone?.icon)}>
            <RoleIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {fallbackRole.label}
            {written ? ' · your criterion' : ' · a criterion for this seat'}
          </p>
        ) : null}
        <p className="mt-1 text-base leading-snug text-stone-900 dark:text-stone-100">{shown}</p>
      </blockquote>

      <p className="text-sm text-stone-700 dark:text-stone-300">
        Who or what could actually check that on every run?
      </p>

      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Choose a grader for your criterion">
        {TRUST_GRADERS.map((entry) => {
          const active = grader === entry.id
          return (
            <button
              key={entry.id}
              type="button"
              aria-pressed={active}
              onClick={() => onPickGrader(entry.id)}
              className={cn(
                'rounded-lg border px-2.5 py-1 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                TRUST_SCROLL_MT,
                active
                  ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-950'
                  : 'border-stone-300 text-stone-700 hover:border-stone-500 dark:border-stone-600 dark:text-stone-300'
              )}
            >
              {entry.label}
            </button>
          )
        })}
      </div>

      {picked ? (
        <p className="text-sm leading-snug text-stone-600 dark:text-stone-400" aria-live="polite">
          <span className="font-medium text-stone-800 dark:text-stone-200">{picked.label}. </span>
          {picked.bestFor} <span className="text-stone-500">Blind spot: {picked.limitation}</span>
        </p>
      ) : null}
    </div>
  )
}
