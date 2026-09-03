'use client'

import { useState } from 'react'
import { HiLockClosed } from 'react-icons/hi2'
import {
  TRUST_CASE_A_CARD_NOTE,
  TRUST_CASE_A_LEARNER_NAME,
  type TrustCase,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { AgentOutputCard } from './AgentOutputCard'
import { TrustSpecimenUnderneath } from './TrustSpecimenUnderneath'
import { TRUST_SCROLL_MT } from './trust-tokens'

type SpecimenLayer = 'surface' | 'underneath'

const LAYER_LABEL: Record<SpecimenLayer, string> = {
  surface: 'What you see',
  underneath: 'What it would send',
}

/** Product chrome. Signals that the artifact is software, not course material. */
function WindowChrome({ app, screen }: { app: string; screen: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-100 px-3 py-1.5 dark:border-stone-700 dark:bg-stone-800">
      <span className="flex shrink-0 gap-1" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-stone-300 dark:bg-stone-600" />
        <span className="h-2 w-2 rounded-full bg-stone-300 dark:bg-stone-600" />
        <span className="h-2 w-2 rounded-full bg-stone-300 dark:bg-stone-600" />
      </span>
      <p className="truncate font-space-mono text-[11px] text-stone-500 dark:text-stone-400">
        {app} <span aria-hidden>/</span> {screen}
      </p>
    </div>
  )
}

/**
 * The case card as a specimen under examination: a mat that separates it from
 * the lesson page, holding a product window with the confident surface and,
 * once unlocked, the machine layer that contradicts it.
 *
 * `bare` skips the mat for contexts that already supply one, such as the studio
 * photograph. `compact` shows the surface only, for recurring references to the
 * same object.
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
  variant?: 'full' | 'compact' | 'bare'
  underneathUnlocked?: boolean
  /** What the learner must do first. Shown in place of the locked layer. */
  lockedNote?: string
  onOpenUnderneath?: () => void
  className?: string
}) {
  const [layer, setLayer] = useState<SpecimenLayer>('surface')
  const { surface } = caseData.runtime
  const caseA = caseData.id === 'case-a'
  const name = caseA ? TRUST_CASE_A_LEARNER_NAME : caseData.title
  const note = caseA ? TRUST_CASE_A_CARD_NOTE : caseData.domain
  const showUnderneath = layer === 'underneath' && underneathUnlocked

  const windowPane = (
    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
      <WindowChrome app={surface.app} screen={surface.screen} />

      {variant === 'full' ? (
        <div
          className="flex gap-1 border-b border-stone-200 bg-stone-50 px-2 py-1.5 dark:border-stone-700 dark:bg-stone-800/60"
          role="group"
          aria-label="Specimen layer"
        >
          {(['surface', 'underneath'] as const).map((id) => {
            const active = id === 'underneath' ? showUnderneath : layer === 'surface'
            const locked = id === 'underneath' && !underneathUnlocked
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
          <AgentOutputCard caseData={caseData} compact={variant === 'compact'} frameless />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700 dark:bg-stone-800/60">
            <span
              aria-disabled
              className="pointer-events-none inline-flex items-center rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white opacity-90 dark:bg-cyan-500 dark:text-stone-950"
            >
              {surface.primaryAction}
            </span>
            {variant === 'compact' ? null : (
              <span className="text-xs text-stone-500">Not a real button. Nothing sends.</span>
            )}
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
        'm-0 rounded-2xl bg-stone-900 p-2.5 ring-1 ring-stone-950/10 sm:p-3 dark:bg-stone-800 dark:ring-white/10',
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
