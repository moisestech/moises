'use client'

import { useState } from 'react'
import { HiLockClosed } from 'react-icons/hi2'
import { type TrustCase } from '@/content/workshops/trust-is-not-a-vibe'
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
function WindowChrome({
  app,
  status,
  present,
}: {
  app: string
  status: string
  present?: boolean
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 border-b border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800',
        present ? 'px-5 py-3' : 'px-3 py-1.5'
      )}
    >
      <span className="flex shrink-0 gap-1" aria-hidden>
        <span className={cn('rounded-full bg-stone-300 dark:bg-stone-600', present ? 'h-3 w-3' : 'h-2 w-2')} />
        <span className={cn('rounded-full bg-stone-300 dark:bg-stone-600', present ? 'h-3 w-3' : 'h-2 w-2')} />
        <span className={cn('rounded-full bg-stone-300 dark:bg-stone-600', present ? 'h-3 w-3' : 'h-2 w-2')} />
      </span>
      <p
        className={cn(
          'min-w-0 flex-1 truncate font-space-mono text-stone-500 dark:text-stone-400',
          present ? 'text-lg sm:text-xl' : 'text-[11px]'
        )}
      >
        {app}
      </p>
      <span
        className={cn(
          'shrink-0 rounded-full bg-cyan-50 font-semibold text-cyan-900 dark:bg-cyan-950/50 dark:text-cyan-100',
          present ? 'px-3 py-1 text-lg sm:text-xl' : 'px-2 py-0.5 text-[10px]'
        )}
      >
        {status}
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
  inert = false,
  className,
}: {
  caseData: TrustCase
  variant?: 'full' | 'bare'
  underneathUnlocked?: boolean
  /** What the learner must do first. Shown in place of the locked layer. */
  lockedNote?: string
  onOpenUnderneath?: () => void
  /** Display-only surface: no layer tabs. Used for the Four Lenses sneak peek. */
  inert?: boolean
  className?: string
}) {
  const [layer, setLayer] = useState<SpecimenLayer>('surface')
  const { present } = usePresentationMode()
  const { surface } = caseData.runtime
  // Presenting, the facilitator opens the machine layer on the room's behalf,
  // so the vote-first gate would only get in the way.
  const unlocked = underneathUnlocked || present
  const showUnderneath = layer === 'underneath' && unlocked

  const windowPane = (
    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
      <WindowChrome app={surface.app} status={surface.status} present={present} />

      {variant === 'full' && !inert ? (
        <div
          className={cn(
            'flex gap-1 border-b border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-800/60',
            present ? 'px-3 py-2' : 'px-2 py-1.5'
          )}
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
                  'inline-flex items-center gap-1 rounded font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                  present ? 'px-3 py-2 text-lg sm:text-xl' : 'px-2 py-1 text-xs',
                  TRUST_SCROLL_MT,
                  active
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
                )}
              >
                {locked ? (
                  <HiLockClosed className={cn('shrink-0', present ? 'h-5 w-5' : 'h-3 w-3')} aria-hidden />
                ) : null}
                {LAYER_LABEL[id]}
                {locked ? <span className="sr-only"> (locked)</span> : null}
              </button>
            )
          })}
        </div>
      ) : null}

      {(() => {
        const surfacePane = (
          <>
            {/* The specimen stays on screen while the machine layer is locked. */}
            {layer === 'underneath' && !unlocked ? (
              <p
                className={cn(
                  'flex items-start gap-1.5 border-b border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200',
                  present ? 'px-5 py-4 text-xl sm:text-2xl' : 'px-3 py-2 text-xs sm:px-4'
                )}
                aria-live="polite"
              >
                <HiLockClosed className={cn('mt-0.5 shrink-0', present ? 'h-6 w-6' : 'h-3.5 w-3.5')} aria-hidden />
                {lockedNote ?? 'This opens after you make your first call.'}
              </p>
            ) : null}
            <AgentOutputCard caseData={caseData} frameless />
            {inert ? null : (
              <div
                className={cn(
                  'flex flex-wrap items-center border-t border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-800/60',
                  present ? 'gap-3 px-4 py-3' : 'gap-2 px-3 py-2'
                )}
              >
                <span
                  aria-disabled
                  className={cn(
                    'pointer-events-none inline-flex items-center rounded-md bg-cyan-600 font-semibold text-white opacity-90 dark:bg-cyan-500 dark:text-stone-950',
                    present ? 'px-4 py-2 text-base sm:text-lg' : 'px-3 py-1.5 text-xs'
                  )}
                >
                  {surface.primaryAction}
                </span>
                <span
                  aria-disabled
                  className={cn(
                    'pointer-events-none inline-flex items-center rounded-md border border-stone-200 bg-white font-semibold text-stone-500 dark:border-stone-600 dark:bg-stone-900',
                    present ? 'px-4 py-2 text-base sm:text-lg' : 'px-2.5 py-1.5 text-xs'
                  )}
                >
                  Save draft
                </span>
                <span
                  aria-disabled
                  className={cn(
                    'pointer-events-none inline-flex items-center rounded-md border border-stone-200 bg-white font-semibold text-stone-500 dark:border-stone-600 dark:bg-stone-900',
                    present ? 'px-4 py-2 text-base sm:text-lg' : 'px-2.5 py-1.5 text-xs'
                  )}
                >
                  Assign
                </span>
                <span
                  className={cn(
                    'w-full text-stone-400 sm:ml-auto sm:w-auto',
                    present ? 'text-base sm:text-lg' : 'text-[10px]'
                  )}
                >
                  Not a live product. Nothing sends.
                </span>
              </div>
            )}
          </>
        )

        if (!present) {
          return showUnderneath ? <TrustSpecimenUnderneath caseData={caseData} /> : surfacePane
        }

        return (
          <div data-trust-specimen-pane className="relative">
            <div className={cn(showUnderneath && 'invisible')} aria-hidden={showUnderneath || undefined}>
              {surfacePane}
            </div>
            {showUnderneath ? (
              <div className="absolute inset-0 overflow-hidden">
                <TrustSpecimenUnderneath caseData={caseData} present />
              </div>
            ) : null}
          </div>
        )
      })()}
    </div>
  )

  if (variant === 'bare') {
    return <div className={className}>{windowPane}</div>
  }

  return (
    <figure
      className={cn(
        'mx-auto w-full max-w-xl rounded-2xl bg-stone-900 p-2.5 ring-1 ring-stone-950/10 sm:p-3 dark:bg-stone-800 dark:ring-white/10',
        present && 'mx-0 max-w-none p-3 sm:p-4',
        className
      )}
    >
      <figcaption className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 px-1 pb-2">
        <span
          className={cn(
            'font-space-mono uppercase tracking-[0.18em] text-cyan-300',
            present ? 'text-base sm:text-lg' : 'text-[10px]'
          )}
        >
          Specimen
        </span>
      </figcaption>
      {windowPane}
    </figure>
  )
}
