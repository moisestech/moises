'use client'

import { Children, useEffect, useState, type ReactNode } from 'react'
import { HiCheck, HiChevronLeft, HiChevronRight, HiXMark } from 'react-icons/hi2'
import {
  TRUST_CASE_A,
  TRUST_CONTROLS,
  TRUST_GOLDEN_BUCKET_HINT,
  TRUST_GOLDEN_BUCKET_LABEL,
  TRUST_GOLDEN_CASES,
  TRUST_GRADERS,
  TRUST_REGRESSION_LINE,
  TRUST_REGRESSION_RUN,
  TRUST_TRACE_STEPS,
  type TrustGoldenBucket,
  type TrustRunResult,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ConceptConstellation } from './ConceptConstellation'
import { TrustGoldenCaseCard } from './TrustGoldenSet'
import { TrustEvalDiagram } from './TrustEvalDiagram'
import { TrustIdeaPortrait } from './TrustIdeaPortrait'
import { TrustKeepTogether } from './TrustPresentPortions'
import { usePresentationMode } from './TrustPresentation'
import { TRUST_CONTROL_CLASS, TRUST_SCROLL_MT, TRUST_STAGE_CLASS, trustLesson, trustPresent } from './trust-tokens'

const FAILURE = new Map(TRUST_CASE_A.failures.map((failure) => [failure.id, failure]))
const CONTROL = new Map(TRUST_CONTROLS.map((control) => [control.id, control]))
const GOLDEN_TITLE = new Map(TRUST_GOLDEN_CASES.map((item) => [item.id, item.title]))
const GRADER_LABEL: Record<(typeof TRUST_GRADERS)[number]['id'], string> = {
  human: 'Human',
  user: 'User',
  code: 'Code',
  judge: 'Model',
}

function seeCopy(present: boolean) {
  return {
    eyebrow: present
      ? 'font-space-mono text-sm uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400'
      : trustLesson.eyebrow,
    title: present ? trustPresent.body : 'text-2xl font-semibold leading-snug text-stone-950 dark:text-stone-50',
    body: present ? trustPresent.note : 'text-lg leading-snug text-stone-700 dark:text-stone-300',
  }
}

function ResultMark({ result, present }: { result: TrustRunResult; present: boolean }) {
  const pass = result === 'pass'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-semibold',
        present ? 'px-3 py-1 text-lg' : 'px-2 py-0.5 text-sm',
        pass
          ? 'bg-stone-200 text-stone-800 dark:bg-stone-700 dark:text-stone-100'
          : 'bg-red-100 text-red-900 dark:bg-red-950/60 dark:text-red-200'
      )}
    >
      {pass ? <HiCheck className="h-4 w-4" aria-hidden /> : <HiXMark className="h-4 w-4" aria-hidden />}
      {pass ? 'Pass' : 'Fail'}
    </span>
  )
}

function TrustExampleStepper({ children }: { children: ReactNode }) {
  const items = Children.toArray(children).filter(Boolean)
  const [index, setIndex] = useState(0)
  const count = items.length

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(count - 1, 0)))
  }, [count])

  const current = Math.min(index, Math.max(count - 1, 0))

  return (
    <div
      data-trust-harness-see
      data-trust-harness-example-count={count}
      data-trust-harness-example-index={current + 1}
      className="space-y-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-space-mono text-sm tabular-nums text-stone-500" aria-live="polite">
          {current + 1} / {count}
        </p>
        <p className="flex items-center gap-1.5" aria-hidden>
          {items.map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-2 w-2 rounded-full',
                i === current ? 'bg-cyan-600 dark:bg-cyan-400' : 'bg-stone-300 dark:bg-stone-600'
              )}
            />
          ))}
        </p>
      </div>
      {items[current]}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={current === 0}
          onClick={() => setIndex(current - 1)}
          className="inline-flex items-center gap-1 rounded-lg border border-stone-300 px-3 py-2 text-base font-medium text-stone-800 disabled:opacity-40 dark:border-stone-600 dark:text-stone-100"
        >
          <HiChevronLeft className="h-4 w-4" aria-hidden />
          Previous
        </button>
        <button
          type="button"
          disabled={current >= count - 1}
          onClick={() => setIndex(current + 1)}
          className="inline-flex items-center gap-1 rounded-lg border border-stone-300 px-3 py-2 text-base font-medium text-stone-800 disabled:opacity-40 dark:border-stone-600 dark:text-stone-100"
        >
          Next example
          <HiChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  )
}

function TrustHarnessSeeStageFrame({
  children,
  placedCount,
}: {
  children: ReactNode
  placedCount: number
}) {
  const { present } = usePresentationMode()
  return (
    <div
      data-trust-harness-see-root
      data-trust-harness-golden-placed={placedCount}
      data-trust-harness-example-count={Children.toArray(children).filter(Boolean).length}
    >
      {present ? children : <TrustExampleStepper>{children}</TrustExampleStepper>}
    </div>
  )
}

/** Present flattens these children into ArrowRight portions. Self-paced keeps the stepper. */
export const TrustHarnessSeeStage = Object.assign(TrustHarnessSeeStageFrame, { flattenPortions: true })

/**
 * Golden-set, trace, grader, and regression examples. Locked slides stay out of
 * the child list until the golden set is complete, so Present cannot page into them.
 */
export function useHarnessSeeExamples({
  goldenReady,
  onGoldenComplete,
}: {
  goldenReady: boolean
  onGoldenComplete: () => void
}) {
  const { present } = usePresentationMode()
  const [placed, setPlaced] = useState<Partial<Record<string, TrustGoldenBucket>>>({})
  const type = seeCopy(present)
  const placedCount = Object.keys(placed).length

  function place(caseId: string, bucket: TrustGoldenBucket) {
    const next = { ...placed, [caseId]: bucket }
    setPlaced(next)
    if (TRUST_GOLDEN_CASES.every((item) => next[item.id])) onGoldenComplete()
  }

  const slides: ReactNode[] = [
    <TrustKeepTogether key="golden-intro" data-trust-harness-example="golden-intro">
      <TrustEvalDiagram id="eval-08" />
      <p className={cn('mt-4', type.eyebrow)}>Golden set</p>
      <p className={cn('mt-2', type.title)}>Eight variants of the same request</p>
      <p className={cn('mt-3', type.body)}>
        Sort each one. A failure you already found becomes a case the system has to keep passing.
      </p>
      <dl className="mt-5 grid gap-3 sm:grid-cols-3">
        {(['common', 'edge', 'known-failure'] as const).map((bucket) => (
          <div key={bucket} className="rounded-xl border border-stone-200 px-4 py-3 dark:border-stone-700">
            <dt className={cn('font-semibold text-stone-950 dark:text-stone-50', present ? 'text-xl' : 'text-lg')}>
              {TRUST_GOLDEN_BUCKET_LABEL[bucket]}
            </dt>
            <dd className={cn('mt-1 text-stone-600 dark:text-stone-400', present ? trustPresent.note : 'text-lg leading-snug')}>
              {TRUST_GOLDEN_BUCKET_HINT[bucket]}
            </dd>
          </div>
        ))}
      </dl>
    </TrustKeepTogether>,
    <TrustKeepTogether key="harness-core" data-trust-harness-example="harness-core">
      <ConceptConstellation clusterId="harness-core" />
    </TrustKeepTogether>,
    ...TRUST_GOLDEN_CASES.map((item) => (
      <TrustKeepTogether key={item.id} data-trust-harness-example={item.id}>
        <TrustGoldenCaseCard
          item={item}
          choice={placed[item.id]}
          onPlace={(bucket) => place(item.id, bucket)}
          large
        />
      </TrustKeepTogether>
    )),
    ...TRUST_TRACE_STEPS.map((step, index) => {
      const failure = step.failureId ? FAILURE.get(step.failureId) : undefined
      const control = CONTROL.get(step.control)
      return (
        <TrustKeepTogether key={step.id} data-trust-harness-example={`trace-${step.id}`}>
          <p className={type.eyebrow}>
            Trace · {String(index + 1).padStart(2, '0')} of {String(TRUST_TRACE_STEPS.length).padStart(2, '0')}
          </p>
          <p className={cn('mt-2', type.title)}>{step.label}</p>
          <p
            className={cn(
              'mt-2 inline-block rounded-full border px-2 py-0.5 font-semibold uppercase tracking-wide',
              TRUST_STAGE_CLASS[step.stage],
              present ? 'text-sm' : 'text-xs'
            )}
          >
            {step.stage}
          </p>
          <p className={cn('mt-4 break-words font-space-mono', type.body)}>{step.detail}</p>
          {failure ? (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900 dark:bg-red-950/30">
              <p className={cn('font-medium text-red-950 dark:text-red-100', present ? trustPresent.choice : 'text-xl')}>
                {failure.label}
              </p>
              <p className={cn('mt-2', type.body)}>{failure.detail}</p>
            </div>
          ) : (
            <p className={cn('mt-5', type.body)}>Nothing failed here. It is on the trace so you can prove that.</p>
          )}
          {control ? (
            <p
              className={cn(
                'mt-4 inline-block rounded-full border px-3 py-1 font-medium',
                TRUST_CONTROL_CLASS[control.id],
                present ? 'text-lg' : 'text-base'
              )}
            >
              Control that belongs here: {control.label}
            </p>
          ) : null}
        </TrustKeepTogether>
      )
    }),
  ]

  if (goldenReady) {
    slides.push(
      <TrustKeepTogether key="grader-intro" data-trust-harness-example="grader-intro">
        <TrustIdeaPortrait id="idea-06-the-harness-four-graders-have-blind-spots" />
        <TrustEvalDiagram id="eval-09" className="mt-4" />
        <p className={cn('mt-4', type.eyebrow)}>Four graders</p>
        <p className={cn('mt-2', type.title)}>No single score is a release decision</p>
        <p className={cn('mt-3', type.body)}>
          Human, user, code, and model each have a blind spot. Page through what each one misses.
        </p>
      </TrustKeepTogether>
    )
    for (const grader of TRUST_GRADERS) {
      slides.push(
        <TrustKeepTogether key={grader.id} data-trust-harness-example={`grader-${grader.id}`}>
          <p className={type.eyebrow}>Grader</p>
          <p className={cn('mt-2', type.title)}>{GRADER_LABEL[grader.id]}</p>
          <p className={cn('mt-4', type.body)}>{grader.limitation}</p>
          <p className={cn('mt-3 text-stone-600 dark:text-stone-400', present ? trustPresent.note : 'text-lg leading-snug')}>
            Best for: {grader.bestFor}
          </p>
        </TrustKeepTogether>
      )
    }
    slides.push(
      <TrustKeepTogether key="harness-judge" data-trust-harness-example="harness-judge">
        <ConceptConstellation clusterId="harness-judge" />
      </TrustKeepTogether>
    )
    slides.push(
      <TrustKeepTogether key="regression-intro" data-trust-harness-example="regression-intro">
        <TrustIdeaPortrait id="idea-08-the-harness-regression-whac-a-mole" />
        <TrustEvalDiagram id="eval-14" className="mt-4" />
        <p className={cn('mt-4', type.eyebrow)}>Regression</p>
        <p className={cn('mt-2', type.title)}>The score went up. Would you ship it?</p>
        <p className={cn('mt-3', type.body)}>
          {TRUST_REGRESSION_RUN.filter((row) => row.baseline === 'pass').length} / {TRUST_REGRESSION_RUN.length} pass
          before. {TRUST_REGRESSION_RUN.filter((row) => row.candidate === 'pass').length} / {TRUST_REGRESSION_RUN.length}{' '}
          pass after one prompt change.
        </p>
        <p className={cn('mt-3', type.body)}>{TRUST_REGRESSION_LINE}</p>
        <button
          type="button"
          className={cn(
            'mt-4 inline-flex items-center rounded-lg border border-stone-300 px-3 py-2 font-medium dark:border-stone-600',
            present ? 'text-lg' : 'text-base'
          )}
        >
          Compare case by case
        </button>
      </TrustKeepTogether>
    )
    for (const row of TRUST_REGRESSION_RUN) {
      const broke = row.baseline === 'pass' && row.candidate === 'fail'
      slides.push(
        <TrustKeepTogether
          key={row.caseId}
          data-trust-harness-example={`regression-${row.caseId}`}
          className={cn(broke && 'rounded-xl bg-red-50 px-4 py-4 dark:bg-red-950/30', TRUST_SCROLL_MT)}
        >
          <p className={type.eyebrow}>{broke ? 'Regression' : 'Same set'}</p>
          <p className={cn('mt-2', type.title)}>{GOLDEN_TITLE.get(row.caseId)}</p>
          <p className={cn('mt-4 flex flex-wrap items-center gap-3', type.body)}>
            <ResultMark result={row.baseline} present={present} />
            <span aria-hidden>→</span>
            <ResultMark result={row.candidate} present={present} />
          </p>
          {broke && row.note ? <p className={cn('mt-4', type.body)}>{row.note}</p> : null}
        </TrustKeepTogether>
      )
    }
  }

  return { slides, placedCount }
}
