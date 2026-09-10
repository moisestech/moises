'use client'

import { useState } from 'react'
import { HiCheckCircle, HiOutlineArrowPath, HiOutlineExclamationTriangle } from 'react-icons/hi2'
import {
  TRUST_GOLDEN_BUCKET_HINT,
  TRUST_GOLDEN_BUCKET_LABEL,
  TRUST_GOLDEN_CASES,
  type TrustGoldenBucket,
  type TrustGoldenCase,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { usePresentationMode } from './TrustPresentation'
import { TRUST_SCROLL_MT, trustPresent } from './trust-tokens'

const BUCKETS: readonly TrustGoldenBucket[] = ['common', 'edge', 'known-failure']

const SEVERITY_LABEL: Record<TrustGoldenCase['severity'], string> = {
  blocking: 'Blocking',
  high: 'High',
  medium: 'Medium',
}

function CaseProperties({ item, large }: { item: TrustGoldenCase; large?: boolean }) {
  return (
    <dl className={cn(large ? 'mt-3 space-y-3' : 'mt-2 space-y-1.5 text-xs')}>
      <div>
        <dt
          className={cn(
            'font-semibold uppercase tracking-wide text-stone-500',
            large ? 'text-sm' : undefined
          )}
        >
          Must be true
        </dt>
        <dd className={cn('mt-0.5 text-stone-700 dark:text-stone-300', large ? 'text-lg leading-snug' : undefined)}>
          {item.expectedProperties.join('. ')}.
        </dd>
      </div>
      <div>
        <dt
          className={cn(
            'font-semibold uppercase tracking-wide text-stone-500',
            large ? 'text-sm' : undefined
          )}
        >
          Must never happen
        </dt>
        <dd className={cn('mt-0.5 text-stone-700 dark:text-stone-300', large ? 'text-lg leading-snug' : undefined)}>
          {item.forbidden}
        </dd>
      </div>
      <div>
        <dt
          className={cn(
            'font-semibold uppercase tracking-wide text-stone-500',
            large ? 'text-sm' : undefined
          )}
        >
          Evidence required
        </dt>
        <dd className={cn('mt-0.5 text-stone-700 dark:text-stone-300', large ? 'text-lg leading-snug' : undefined)}>
          {item.requiredEvidence}
        </dd>
      </div>
      <div>
        <dt
          className={cn(
            'font-semibold uppercase tracking-wide text-stone-500',
            large ? 'text-sm' : undefined
          )}
        >
          Expected behavior
        </dt>
        <dd className={cn('mt-0.5 text-stone-700 dark:text-stone-300', large ? 'text-lg leading-snug' : undefined)}>
          {item.expectedBehavior}
        </dd>
      </div>
    </dl>
  )
}

export function TrustGoldenCaseCard({
  item,
  choice,
  onPlace,
  large = false,
}: {
  item: TrustGoldenCase
  choice?: TrustGoldenBucket
  onPlace: (bucket: TrustGoldenBucket) => void
  large?: boolean
}) {
  const { present } = usePresentationMode()
  const right = choice === item.bucket
  const [open, setOpen] = useState(Boolean(choice) && large)
  const stage = large || present

  return (
    <article
      data-trust-golden-case={item.id}
      className={cn(
        'rounded-xl border px-4 py-5 transition duration-200',
        stage ? 'min-h-[18rem] px-5 py-6 sm:px-8 sm:py-8' : 'px-3 py-3',
        choice
          ? right
            ? 'border-stone-400 bg-stone-50 dark:border-stone-500 dark:bg-stone-900/60'
            : 'border-amber-400 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/30'
          : 'border-stone-200 dark:border-stone-700',
        TRUST_SCROLL_MT
      )}
    >
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <p
          className={cn(
            'font-medium text-stone-950 dark:text-stone-50',
            present ? trustPresent.body : stage ? 'text-2xl font-semibold leading-snug' : 'text-sm'
          )}
        >
          {item.title}
        </p>
        {item.failureId ? (
          <span
            className={cn(
              'rounded-full bg-stone-200 px-1.5 py-0.5 font-semibold uppercase tracking-wide text-stone-700 dark:bg-stone-700 dark:text-stone-200',
              stage ? 'text-xs' : 'text-[10px]'
            )}
          >
            Failure you found
          </span>
        ) : null}
        <span className={cn('uppercase tracking-wide text-stone-500', stage ? 'text-xs' : 'text-[10px]')}>
          {SEVERITY_LABEL[item.severity]}
        </span>
      </div>
      <p
        className={cn(
          'mt-2 text-stone-600 dark:text-stone-400',
          present ? trustPresent.note : stage ? 'text-lg leading-snug' : 'text-xs leading-snug'
        )}
      >
        {item.input}
      </p>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={`Sort ${item.title}`}>
        {BUCKETS.map((bucket) => {
          const active = choice === bucket
          return (
            <button
              key={bucket}
              type="button"
              aria-pressed={active}
              onClick={() => onPlace(bucket)}
              className={cn(
                'rounded-lg border font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                stage ? 'px-4 py-2 text-lg' : 'px-2.5 py-1 text-xs',
                active
                  ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-950'
                  : 'border-stone-300 text-stone-700 hover:border-stone-500 dark:border-stone-600 dark:text-stone-300'
              )}
            >
              {TRUST_GOLDEN_BUCKET_LABEL[bucket]}
            </button>
          )
        })}
      </div>

      {choice ? (
        <div className="mt-4" aria-live="polite">
          <p
            className={cn(
              'flex items-start gap-1.5 leading-snug',
              present ? trustPresent.note : stage ? 'text-lg' : 'text-sm',
              right ? 'text-stone-700 dark:text-stone-300' : 'text-amber-900 dark:text-amber-200'
            )}
          >
            {right ? (
              <HiCheckCircle className={cn('mt-0.5 shrink-0 text-stone-500', stage ? 'h-6 w-6' : 'h-4 w-4')} aria-hidden />
            ) : (
              <HiOutlineExclamationTriangle
                className={cn('mt-0.5 shrink-0', stage ? 'h-6 w-6' : 'h-4 w-4')}
                aria-hidden
              />
            )}
            <span>
              {right ? null : <span className="font-medium">{TRUST_GOLDEN_BUCKET_LABEL[item.bucket]}. </span>}
              {item.why}
            </span>
          </p>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className={cn(
              'mt-2 text-stone-500 underline-offset-2 hover:underline',
              stage ? 'text-base' : 'text-xs'
            )}
          >
            {open ? 'Hide what this case locks in' : 'What this case locks in'}
          </button>
          {open ? <CaseProperties item={item} large={stage} /> : null}
        </div>
      ) : null}
    </article>
  )
}

/**
 * Sorting the same enrollment request into common, edge, and known failure.
 * The point of the exercise is that six of these eight cases are the failures
 * the class already found: a failure you understood becomes a case the system
 * has to keep passing.
 */
export function TrustGoldenSet({
  onComplete,
  className,
}: {
  onComplete?: () => void
  className?: string
}) {
  const [placed, setPlaced] = useState<Partial<Record<string, TrustGoldenBucket>>>({})

  function place(caseId: string, bucket: TrustGoldenBucket) {
    const next = { ...placed, [caseId]: bucket }
    setPlaced(next)
    if (TRUST_GOLDEN_CASES.every((item) => next[item.id])) onComplete?.()
  }

  const done = TRUST_GOLDEN_CASES.filter((item) => placed[item.id]).length

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm text-stone-700 dark:text-stone-300">
          Eight variants of the same request. Sort each one, then open it to see the properties it locks in.
        </p>
        <p className="text-xs text-stone-500" aria-live="polite">
          {done} of {TRUST_GOLDEN_CASES.length} sorted
        </p>
      </div>

      <dl className="grid gap-2 sm:grid-cols-3">
        {BUCKETS.map((bucket) => (
          <div key={bucket} className="rounded-xl border border-stone-200 px-3 py-2 dark:border-stone-700">
            <dt className="text-xs font-semibold text-stone-950 dark:text-stone-50">
              {TRUST_GOLDEN_BUCKET_LABEL[bucket]}
            </dt>
            <dd className="mt-0.5 text-xs leading-snug text-stone-600 dark:text-stone-400">
              {TRUST_GOLDEN_BUCKET_HINT[bucket]}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="space-y-2">
        {TRUST_GOLDEN_CASES.map((item) => (
          <li key={item.id}>
            <TrustGoldenCaseCard
              item={item}
              choice={placed[item.id]}
              onPlace={(bucket) => place(item.id, bucket)}
            />
          </li>
        ))}
      </ul>

      {done ? (
        <button
          type="button"
          onClick={() => {
            setPlaced({})
          }}
          className="inline-flex items-center gap-1 text-xs text-stone-500 underline-offset-2 hover:underline"
        >
          <HiOutlineArrowPath className="h-3.5 w-3.5" aria-hidden />
          Start over
        </button>
      ) : null}
    </div>
  )
}
