'use client'

import { getTrustRole, type TrustRoleCheck as TrustRoleCheckCopy, type TrustRoleId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_ROLE_TONE } from './trust-tokens'

/**
 * One clickable question for the seat held on this chapter.
 * Immediate right/wrong, then a short because. Not a writing field.
 */
export function TrustRoleCheck({
  roleId,
  check,
  choice,
  onPick,
}: {
  roleId: TrustRoleId | null
  check?: TrustRoleCheckCopy
  choice: string | null
  onPick?: (choice: string) => void
}) {
  const role = getTrustRole(roleId)
  if (!role || !check || !onPick) {
    return (
      <p
        data-trust-role-check
        className="rounded-lg border border-dashed border-stone-300 px-3 py-2 text-sm text-stone-600 dark:border-stone-600 dark:text-stone-400"
      >
        Pick a seat first. The check will match that job.
      </p>
    )
  }

  const Icon = ROLE_ICON[role.id]
  const tone = TRUST_ROLE_TONE[role.id]
  const answered = Boolean(choice)
  const correct = choice === check.correct

  return (
    <fieldset data-trust-role-check className="space-y-2">
      <legend className={cn('flex items-center gap-1.5 text-sm font-semibold', tone.text)}>
        <Icon className={cn('h-4 w-4', tone.icon)} aria-hidden />
        {role.label} check
      </legend>
      <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{check.prompt}</p>
      <div className="grid gap-2">
        {check.choices.map((option) => {
          const selected = choice === option.id
          const isRight = option.id === check.correct
          return (
            <button
              key={option.id}
              type="button"
              data-trust-role-choice={option.id}
              aria-pressed={selected}
              onClick={() => onPick(option.id)}
              className={cn(
                'rounded-lg border px-3 py-2 text-left text-sm leading-snug transition',
                selected && correct && 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500 dark:border-emerald-400 dark:bg-emerald-950/40',
                selected && !correct && 'border-rose-500 bg-rose-50 ring-2 ring-rose-400 dark:border-rose-400 dark:bg-rose-950/40',
                !selected && answered && isRight && 'border-emerald-400 bg-emerald-50/70 dark:border-emerald-700 dark:bg-emerald-950/20',
                !selected && !answered && 'border-stone-200 bg-white hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-stone-500'
              )}
            >
              <span className="font-space-mono mr-2 text-[11px] uppercase tracking-wide text-stone-500">
                {option.id}
              </span>
              {option.label}
            </button>
          )
        })}
      </div>
      {answered ? (
        <p
          data-trust-role-check-result={correct ? 'correct' : 'wrong'}
          className={cn(
            'rounded-lg px-3 py-2 text-sm leading-snug',
            correct
              ? 'bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-100'
              : 'bg-rose-50 text-rose-950 dark:bg-rose-950/40 dark:text-rose-100'
          )}
        >
          <span className="font-semibold">{correct ? 'Right.' : 'Not that one.'}</span> {check.because}
        </p>
      ) : null}
    </fieldset>
  )
}
