'use client'

import { getTrustRole, type TrustRoleCheck as TrustRoleCheckCopy, type TrustRoleId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { usePresentationMode } from './TrustPresentation'
import { TRUST_ROLE_TONE, trustPresent } from './trust-tokens'

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
  const { present } = usePresentationMode()
  const role = getTrustRole(roleId)
  if (!role || !check || !onPick) {
    return (
      <p
        data-trust-role-check
        className={cn(
          'rounded-lg border border-dashed border-stone-300 text-stone-600 dark:border-stone-600 dark:text-stone-400',
          present ? cn('px-5 py-4', trustPresent.note) : 'px-3 py-2 text-sm'
        )}
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
    <fieldset data-trust-role-check className={cn('space-y-2', present && 'space-y-5')}>
      <legend
        className={cn(
          'flex items-center gap-1.5 font-semibold',
          tone.text,
          present ? 'text-xl sm:text-2xl' : 'text-sm'
        )}
      >
        <Icon className={cn(present ? 'h-7 w-7' : 'h-4 w-4', tone.icon)} aria-hidden />
        {role.label} check
      </legend>
      <p
        className={cn(
          'font-medium text-stone-900 dark:text-stone-100',
          present ? trustPresent.body : 'text-sm'
        )}
      >
        {check.prompt}
      </p>
      <div className={cn('grid', present ? 'gap-4' : 'gap-2')}>
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
                'rounded-lg border text-left transition',
                present ? cn('px-5 py-4', trustPresent.choice) : 'px-3 py-2 text-sm leading-snug',
                selected && present && 'z-[1] origin-center shadow-lg motion-safe:scale-[1.03]',
                selected &&
                  correct &&
                  cn(
                    'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950/40',
                    present ? 'ring-4 ring-emerald-500' : 'ring-2 ring-emerald-500'
                  ),
                selected &&
                  !correct &&
                  cn(
                    'border-rose-500 bg-rose-50 dark:border-rose-400 dark:bg-rose-950/40',
                    present ? 'ring-4 ring-rose-400' : 'ring-2 ring-rose-400'
                  ),
                !selected &&
                  answered &&
                  isRight &&
                  'border-emerald-400 bg-emerald-50/70 dark:border-emerald-700 dark:bg-emerald-950/20',
                !selected &&
                  !answered &&
                  'border-stone-200 bg-white hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-stone-500'
              )}
            >
              <span
                className={cn(
                  'font-space-mono mr-2 uppercase tracking-wide text-stone-500',
                  present ? 'text-lg' : 'text-[11px]'
                )}
              >
                {option.id}
              </span>
              {option.label}
            </button>
          )
        })}
      </div>
      {answered ? (
        <div
          key={choice}
          data-trust-role-check-result={correct ? 'correct' : 'wrong'}
          role="status"
          aria-live="polite"
          className={cn(
            'overflow-hidden rounded-xl border-2 shadow-sm',
            'motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none',
            'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:zoom-in-95 motion-safe:duration-300 motion-safe:ease-out motion-safe:fill-mode-both',
            present ? 'shadow-md' : '',
            correct
              ? 'border-emerald-700 dark:border-emerald-400'
              : 'border-rose-700 dark:border-rose-400'
          )}
        >
          <p
            className={cn(
              'font-bold tracking-tight',
              present ? 'px-6 py-3 text-2xl leading-tight sm:px-7 sm:py-3.5 sm:text-3xl' : 'px-4 py-2 text-lg leading-tight',
              correct
                ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-emerald-950'
                : 'bg-rose-600 text-white dark:bg-rose-500 dark:text-rose-950'
            )}
          >
            {correct ? 'Right.' : 'Not that one.'}
          </p>
          <p
            className={cn(
              'font-medium leading-snug',
              present ? 'px-6 py-4 text-xl sm:px-7 sm:py-5 sm:text-2xl' : 'px-4 py-2.5 text-base',
              correct
                ? 'bg-emerald-100 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-50'
                : 'bg-rose-100 text-rose-950 dark:bg-rose-950 dark:text-rose-50'
            )}
          >
            {check.because}
          </p>
        </div>
      ) : null}
    </fieldset>
  )
}
