'use client'

import { HiCheckCircle } from 'react-icons/hi2'
import { TRUST_EVAL_ANATOMY, type TrustEvalStageId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_SCROLL_MT } from './trust-tokens'
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
  const done = evalPlanComplete(plan)
  const filled = Object.values(plan).filter((field) => field.trim()).length

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm text-stone-700 dark:text-stone-300">
          Five fields, same five parts as The Loop. Write your own, or start from the suggestion.
        </p>
        <p className="text-xs text-stone-500" aria-live="polite">
          {filled} of 5 filled
        </p>
      </div>

      <ol className="space-y-2">
        {TRUST_EVAL_ANATOMY.map((stage, index) => {
          const field = FIELD[stage.id]
          const value = plan[stage.id]
          return (
            <li
              key={stage.id}
              className={cn(
                'rounded-xl border px-3 py-3',
                value.trim()
                  ? 'border-stone-400 bg-stone-50 dark:border-stone-500 dark:bg-stone-900/60'
                  : 'border-stone-200 dark:border-stone-700',
                TRUST_SCROLL_MT
              )}
            >
              <label className="block">
                <span className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-space-mono text-[10px] text-stone-500">{index + 1}</span>
                  <span className="text-sm font-semibold text-stone-950 dark:text-stone-50">{stage.term}</span>
                  <span className="text-xs text-stone-600 dark:text-stone-400">{field.prompt}</span>
                </span>
                <textarea
                  value={value}
                  onChange={(event) => onChange({ [stage.id]: event.target.value })}
                  rows={2}
                  placeholder={field.placeholder}
                  className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
                />
              </label>
              {value.trim() ? null : (
                <button
                  type="button"
                  onClick={() => onChange({ [stage.id]: field.starter })}
                  className="mt-1 text-xs text-stone-500 underline-offset-2 hover:underline"
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
          className="flex items-start gap-1.5 text-sm font-medium text-stone-900 dark:text-stone-100"
          aria-live="polite"
        >
          <HiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden />
          That is an evaluation plan. It is the same five parts you would bring to any system that acts on
          your behalf.
        </p>
      ) : null}
    </div>
  )
}
