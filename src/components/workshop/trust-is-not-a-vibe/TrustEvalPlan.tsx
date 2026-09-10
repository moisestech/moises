'use client'

import { HiCheckCircle } from 'react-icons/hi2'
import { TRUST_EVAL_ANATOMY, type TrustEvalStageId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_SCROLL_MT, trustPresent } from './trust-tokens'
import { usePresentationMode } from './TrustPresentation'
import { evalPlanComplete, type TrustEvalPlan as TrustEvalPlanData } from './useTrustProgress'

/**
 * The artifact a learner leaves with: the same five parts taught in The Loop,
 * applied to a case they have not judged before. Transfer is two and a half
 * minutes, so each field offers a starter drawn from Case B — adopting and
 * editing a sentence is the exercise, not composing five from nothing.
 */
const FIELD: Record<TrustEvalStageId, { prompt: string; starter: string; placeholder: string }> = {
  cases: {
    prompt: 'Which cases would you test it on?',
    starter:
      'A standard intake request, a duplicate registration, a waitlist edge, and every failure this agent has already produced.',
    placeholder: 'Common, edge, and known failures for this system.',
  },
  criteria: {
    prompt: 'What does good mean here?',
    starter:
      'Every stated fact traces to an intake record, and no confirmation is sent before a person approves it.',
    placeholder: 'The properties it must have, and what must never happen.',
  },
  graders: {
    prompt: 'Who or what checks it?',
    starter:
      'Code checks record counts, schemas, and granted scopes. A staff reviewer judges tone and fairness on a sample.',
    placeholder: 'A mix: code for the countable, a person for the judgment.',
  },
  evidence: {
    prompt: 'What evidence would you capture?',
    starter:
      'A trace per run with the retrieved records, the tool arguments, the requested scopes, and the pass or fail per case.',
    placeholder: 'What you would need to prove where it went wrong.',
  },
  decision: {
    prompt: 'What is the release rule, and who owns it?',
    starter:
      'No release with an open blocking failure or any regression. The program lead signs off and is named in the record.',
    placeholder: 'The condition to hold, and the person accountable.',
  },
}

export function TrustEvalPlan({
  plan,
  onChange,
  className,
}: {
  plan: TrustEvalPlanData
  onChange: (patch: Partial<TrustEvalPlanData>) => void
  className?: string
}) {
  const { present } = usePresentationMode()
  const done = evalPlanComplete(plan)
  const filled = Object.values(plan).filter((field) => field.trim()).length

  return (
    <div className={cn(present ? 'space-y-6' : 'space-y-3', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p
          className={
            present
              ? cn(trustPresent.note, 'max-w-none text-xl text-stone-800 sm:text-2xl')
              : 'text-sm text-stone-700 dark:text-stone-300'
          }
        >
          Five fields, same five parts as The Loop. Write your own, or start from the suggestion.
        </p>
        <p className={present ? 'text-lg text-stone-500 sm:text-xl' : 'text-xs text-stone-500'} aria-live="polite">
          {filled} of 5 filled
        </p>
      </div>

      <ol className={present ? 'space-y-5' : 'space-y-2'}>
        {TRUST_EVAL_ANATOMY.map((stage, index) => {
          const field = FIELD[stage.id]
          const value = plan[stage.id]
          return (
            <li
              key={stage.id}
              className={cn(
                'rounded-xl border',
                present ? 'px-5 py-5' : 'px-3 py-3',
                value.trim()
                  ? 'border-stone-400 bg-stone-50 dark:border-stone-500 dark:bg-stone-900/60'
                  : 'border-stone-200 dark:border-stone-700',
                TRUST_SCROLL_MT
              )}
            >
              <label className="block">
                <span className={cn('flex flex-wrap items-baseline', present ? 'gap-x-3 gap-y-1' : 'gap-x-2')}>
                  <span
                    className={cn(
                      'font-space-mono text-stone-500',
                      present ? 'text-lg sm:text-xl' : 'text-[10px]'
                    )}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={cn(
                      'font-semibold text-stone-950 dark:text-stone-50',
                      present ? 'text-2xl sm:text-3xl' : 'text-sm'
                    )}
                  >
                    {stage.term}
                  </span>
                  <span
                    className={
                      present
                        ? cn(trustPresent.note, 'max-w-none text-xl sm:text-2xl')
                        : 'text-xs text-stone-600 dark:text-stone-400'
                    }
                  >
                    {field.prompt}
                  </span>
                </span>
                <textarea
                  value={value}
                  onChange={(event) => onChange({ [stage.id]: event.target.value })}
                  rows={present ? 3 : 2}
                  placeholder={field.placeholder}
                  className={cn(
                    'mt-2 w-full rounded-lg border border-stone-300 bg-white dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100',
                    present ? 'px-4 py-3 text-xl leading-snug sm:text-2xl' : 'px-3 py-2 text-sm'
                  )}
                />
              </label>
              {value.trim() ? null : (
                <button
                  type="button"
                  onClick={() => onChange({ [stage.id]: field.starter })}
                  className={
                    present
                      ? 'mt-2 text-lg text-stone-600 underline-offset-4 hover:underline sm:text-xl'
                      : 'mt-1 text-xs text-stone-500 underline-offset-2 hover:underline'
                  }
                >
                  Use the suggestion
                </button>
              )}
            </li>
          )
        })}
      </ol>

      {done ? (
        <p
          className={cn(
            'flex items-start gap-1.5 font-medium text-stone-900 dark:text-stone-100',
            present ? 'text-xl sm:text-2xl' : 'text-sm'
          )}
          aria-live="polite"
        >
          <HiCheckCircle
            className={cn('mt-0.5 shrink-0 text-stone-500', present ? 'h-7 w-7' : 'h-4 w-4')}
            aria-hidden
          />
          That is an evaluation plan. It is the same five parts you would bring to any system that acts on
          your behalf.
        </p>
      ) : null}
    </div>
  )
}
