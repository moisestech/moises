'use client'

import { Children, useEffect, useState, type ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineBolt,
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlinePause,
  HiOutlineScale,
} from 'react-icons/hi2'
import {
  TRUST_LOOP,
  type TrustFailure,
  type TrustLoopStage,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustKeepTogether } from './TrustPresentPortions'
import { usePresentationMode } from './TrustPresentation'
import { TRUST_STAGE_CLASS, trustLesson, trustPresent } from './trust-tokens'

const STAGE_ICONS: Record<TrustLoopStage, IconType> = {
  observe: HiOutlineEye,
  decide: HiOutlineScale,
  act: HiOutlineBolt,
  check: HiOutlineCheckCircle,
  stop: HiOutlinePause,
}

/** Short enough to sit in a five-across Present row. */
const STAGE_SHORT: Record<TrustLoopStage, string> = {
  observe: 'Observe',
  decide: 'Decide',
  act: 'Act',
  check: 'Check',
  stop: 'Stop',
}

function LoopStepper({ children }: { children: ReactNode }) {
  const items = Children.toArray(children).filter(Boolean)
  const [index, setIndex] = useState(0)
  const count = items.length

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(count - 1, 0)))
  }, [count])

  const current = Math.min(index, Math.max(count - 1, 0))

  return (
    <div data-trust-loop-stepper className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-space-mono text-sm tabular-nums text-stone-500" aria-live="polite">
          {current + 1} / {count}
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
          Next
          <HiChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  )
}

function LoopSeeStageFrame({ children }: { children: ReactNode }) {
  const { present } = usePresentationMode()
  const items = Children.toArray(children).filter(Boolean)
  const [head, ...rest] = items

  return (
    <div data-trust-loop-see>
      {present ? (
        children
      ) : (
        <>
          {head}
          <LoopStepper>{rest}</LoopStepper>
        </>
      )}
    </div>
  )
}

/** Present pages each child. Self-paced keeps the diagram, then one beat at a time. */
export const LoopSeeStage = Object.assign(LoopSeeStageFrame, { flattenPortions: true })

function LoopTryStageFrame({ children }: { children: ReactNode }) {
  const { present } = usePresentationMode()
  return (
    <div data-trust-loop-try>
      {present ? children : <LoopStepper>{children}</LoopStepper>}
    </div>
  )
}

/** Present pages each hint. Self-paced uses Next / Previous. */
export const LoopTryStage = Object.assign(LoopTryStageFrame, { flattenPortions: true })

export function useLoopSeeSlides({
  failures,
  placements,
  onPlace,
}: {
  failures: readonly TrustFailure[]
  placements: Partial<Record<string, TrustLoopStage>>
  onPlace: (failureId: string, stage: TrustLoopStage) => void
}): ReactNode[] {
  const { present } = usePresentationMode()
  const placed = Object.keys(placements).length
  const remain = Math.max(0, 3 - placed)
  const progress =
    placed >= 3 ? `${placed} placed · Checkpoint met` : `${placed} placed · Place ${remain} more`

  const type = {
    eyebrow: present
      ? 'font-space-mono text-sm uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400'
      : trustLesson.eyebrow,
    title: present ? trustPresent.body : 'text-2xl font-semibold leading-snug text-stone-950 dark:text-stone-50',
    body: present ? trustPresent.note : 'text-lg leading-snug text-stone-700 dark:text-stone-300',
    choice: present ? trustPresent.choice : 'text-base font-semibold',
  }

  const intro = (
    <TrustKeepTogether key="loop-intro" data-trust-loop-intro>
      <p className={type.eyebrow}>The loop</p>
      <p className={cn('mt-2', type.title)}>Place at least three failures.</p>
      <p className={cn('mt-3', type.body)}>
        {present ? 'One failure at a time. Name the stage, then go.' : 'Pick the stage where the break actually happened.'}
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-5">
        {TRUST_LOOP.map((node) => {
          const Icon = STAGE_ICONS[node.id]
          return (
            <li
              key={node.id}
              className={cn(
                'rounded-xl border px-4',
                present ? 'flex min-h-[8.5rem] flex-col items-center justify-center py-6 text-center' : 'py-4',
                TRUST_STAGE_CLASS[node.id]
              )}
            >
              <p className={cn('flex items-center gap-2', type.choice, present && 'flex-col')}>
                <Icon className={present ? 'h-10 w-10 shrink-0' : 'h-5 w-5 shrink-0'} aria-hidden />
                {STAGE_SHORT[node.id]}
              </p>
              {present ? null : (
                <p className="mt-2 text-base text-stone-600 dark:text-stone-300">{node.technical}</p>
              )}
            </li>
          )
        })}
      </ul>
      <p className={cn('mt-5 font-medium', present ? trustPresent.note : type.body)} aria-live="polite">
        {progress}
      </p>
    </TrustKeepTogether>
  )

  const slides = failures.map((failure, index) => {
    const chosen = placements[failure.id]
    const chosenNode = chosen ? TRUST_LOOP.find((node) => node.id === chosen) : undefined

    return (
      <TrustKeepTogether key={failure.id} data-trust-loop-failure={failure.id}>
        <p className={type.eyebrow}>
          Failure {String(index + 1).padStart(2, '0')} of {String(failures.length).padStart(2, '0')}
        </p>
        <p className={cn('mt-2', type.title)}>{failure.label}</p>
        <p className={cn('mt-3', present ? trustPresent.note : type.body)}>{failure.visible}</p>
        {present ? null : <p className={cn('mt-2', type.body)}>{failure.detail}</p>}
        <div
          className={cn('mt-6 grid gap-3', present ? 'sm:grid-cols-5' : 'grid-cols-2 sm:grid-cols-5')}
          role="group"
          aria-label={`Place ${failure.label} on the loop`}
        >
          {TRUST_LOOP.map((node) => {
            const active = chosen === node.id
            const Icon = STAGE_ICONS[node.id]
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => onPlace(failure.id, node.id)}
                aria-pressed={active}
                aria-label={STAGE_SHORT[node.id]}
                className={cn(
                  'flex flex-col items-center justify-center rounded-xl border text-center transition duration-200 motion-safe:hover:-translate-y-0.5',
                  present ? 'min-h-[8.5rem] px-3 py-6' : 'min-h-[5.5rem] px-3 py-4',
                  active
                    ? cn(
                        TRUST_STAGE_CLASS[node.id],
                        'ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950'
                      )
                    : 'border-stone-200 bg-white text-stone-800 hover:border-stone-400 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950'
                )}
              >
                <Icon className={present ? 'h-10 w-10' : 'h-6 w-6'} aria-hidden />
                <span className={cn('mt-2', type.choice)}>{STAGE_SHORT[node.id]}</span>
              </button>
            )
          })}
        </div>
        {chosenNode ? (
          <p className={cn('mt-5 font-medium', present ? trustPresent.note : type.body)} aria-live="polite">
            Placed on {STAGE_SHORT[chosenNode.id]}. {chosenNode.technical}.
          </p>
        ) : (
          <p className={cn('mt-5', present ? trustPresent.note : type.body)}>{progress}</p>
        )}
      </TrustKeepTogether>
    )
  })

  return [intro, ...slides]
}
