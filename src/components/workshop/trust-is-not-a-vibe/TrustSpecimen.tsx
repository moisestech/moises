'use client'

import { useState } from 'react'
import { HiLockClosed, HiOutlineCpuChip } from 'react-icons/hi2'
import {
  TRUST_CASE_A_CARD_NOTE,
  TRUST_CASE_A_LEARNER_NAME,
  type TrustCase,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { AgentOutputCard } from './AgentOutputCard'
import { TrustSpecimenUnderneath } from './TrustSpecimenUnderneath'
import { TRUST_SCROLL_MT } from './trust-tokens'
import { usePresentationMode } from './TrustPresentation'

type SpecimenLayer = 'surface' | 'underneath'

const LAYER_LABEL: Record<SpecimenLayer, string> = {
  surface: 'What you see',
  underneath: 'What it would send',
}

/** Product chrome. Signals that the artifact is software, not course material. */
function WindowChrome({ app, screen, agent }: { app: string; screen: string; agent: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-100 px-3 py-1.5 dark:border-stone-700 dark:bg-stone-800">
      <span className="flex shrink-0 gap-1" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-stone-300 dark:bg-stone-600" />
        <span className="h-2 w-2 rounded-full bg-stone-300 dark:bg-stone-600" />
        <span className="h-2 w-2 rounded-full bg-stone-300 dark:bg-stone-600" />
      </span>
      <p className="min-w-0 flex-1 truncate font-space-mono text-[11px] text-stone-500 dark:text-stone-400">
        {app} <span aria-hidden>/</span> {screen}
      </p>
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-stone-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-stone-700 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-200">
        <HiOutlineCpuChip className="h-3 w-3 text-cyan-700 dark:text-cyan-400" aria-hidden />
        {agent}
      </span>
    </div>
  )
}

/**
 * The case card as a specimen under examination: a mat that separates it from
 * the lesson page, holding a product window with the confident surface and,
 * once unlocked, the machine layer that contradicts it.
 *
 * `bare` skips the mat for contexts that already supply one, such as the studio
 * photograph. Lesson surfaces always use the full frame so the card stays the
 * same object from Looks Right through Transfer.
 */
export function TrustSpecimen({
  caseData,
  variant = 'full',
  underneathUnlocked = false,
  lockedNote,
  onOpenUnderneath,
  className,
}: {
  caseData: TrustCase
  variant?: 'full' | 'bare'
  underneathUnlocked?: boolean
  /** What the learner must do first. Shown in place of the locked layer. */
  lockedNote?: string
  onOpenUnderneath?: () => void
  className?: string
}) {
  const [layer, setLayer] = useState<SpecimenLayer>('surface')
  const { present } = usePresentationMode()
  const { surface } = caseData.runtime
  const caseA = caseData.id === 'case-a'
  const name = caseA ? TRUST_CASE_A_LEARNER_NAME : caseData.title
  const note = caseA ? TRUST_CASE_A_CARD_NOTE : caseData.domain
  // Presenting, the facilitator opens the machine layer on the room's behalf,
  // so the vote-first gate would only get in the way.
  const unlocked = underneathUnlocked || present
  const showUnderneath = layer === 'underneath' && unlocked

  const windowPane = (
    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
      <WindowChrome app={surface.app} screen={surface.screen} agent={surface.agent} />

      <div className="flex items-center gap-2 border-b border-stone-200 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white dark:bg-cyan-500 dark:text-stone-950"
          aria-hidden
        >
          <HiOutlineCpuChip className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-stone-950 dark:text-stone-50">{surface.agent}</p>
          <p className="font-space-mono text-[10px] text-stone-500">Just now · generated</p>
        </div>
        <span className="shrink-0 rounded-full bg-cyan-50 px-2 py-0.5 text-[10px] font-semibold text-cyan-900 dark:bg-cyan-950/50 dark:text-cyan-100">
          {surface.status}
        </span>
      </div>

      {variant === 'full' ? (
        <div
          className="flex gap-1 border-b border-stone-200 bg-stone-50 px-2 py-1.5 dark:border-stone-700 dark:bg-stone-800/60"
          role="group"
          aria-label="Specimen layer"
        >
          {(['surface', 'underneath'] as const).map((id) => {
            const active = id === 'underneath' ? showUnderneath : layer === 'surface'
            const locked = id === 'underneath' && !unlocked
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setLayer(id)
                  if (id === 'underneath') onOpenUnderneath?.()
                }}
                className={cn(
                  'inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                  TRUST_SCROLL_MT,
                  active
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
                )}
              >
                {locked ? <HiLockClosed className="h-3 w-3 shrink-0" aria-hidden /> : null}
                {LAYER_LABEL[id]}
                {locked ? <span className="sr-only"> (locked)</span> : null}
              </button>
            )
          })}
        </div>
      ) : null}

      {showUnderneath ? (
        <TrustSpecimenUnderneath caseData={caseData} />
      ) : (
        <>
          {/* The specimen stays on screen while the machine layer is locked. */}
          {layer === 'underneath' ? (
            <p
              className="flex items-start gap-1.5 border-b border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900 sm:px-4 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
              aria-live="polite"
            >
              <HiLockClosed className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              {lockedNote ?? 'This opens after you make your first call.'}
            </p>
          ) : null}
          <AgentOutputCard caseData={caseData} frameless />
          <div className="flex flex-wrap items-center gap-2 border-t border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700 dark:bg-stone-800/60">
            <span
              aria-disabled
              className="pointer-events-none inline-flex items-center rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white opacity-90 dark:bg-cyan-500 dark:text-stone-950"
            >
              {surface.primaryAction}
            </span>
            <span
              aria-disabled
              className="pointer-events-none inline-flex items-center rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-stone-500 dark:border-stone-600 dark:bg-stone-900"
            >
              Save draft
            </span>
            <span
              aria-disabled
              className="pointer-events-none inline-flex items-center rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-stone-500 dark:border-stone-600 dark:bg-stone-900"
            >
              Assign
            </span>
            <span className="w-full text-[10px] text-stone-400 sm:ml-auto sm:w-auto">
              Not a live product. Nothing sends.
            </span>
          </div>
        </>
      )}
    </div>
  )

  if (variant === 'bare') {
    return <div className={className}>{windowPane}</div>
  }

  return (
    <figure
      className={cn(
        'mx-auto w-full max-w-xl rounded-2xl bg-stone-900 p-2.5 ring-1 ring-stone-950/10 sm:p-3 dark:bg-stone-800 dark:ring-white/10',
        className
      )}
    >
      <figcaption className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 px-1 pb-2">
        <span className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
          Specimen · {name}
        </span>
        <span className="text-[11px] text-stone-400">{note}</span>
      </figcaption>
      {windowPane}
    </figure>
  )
}
