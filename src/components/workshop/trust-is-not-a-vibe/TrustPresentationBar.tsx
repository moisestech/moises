'use client'

import {
  HiOutlineArrowUturnLeft,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePresentationChartBar,
  HiOutlineXMark,
} from 'react-icons/hi2'
import { TRUST_ROLES } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { useTrustPresentation } from './TrustPresentation'
import { trust } from './trust-tokens'
import { useTrustProgress } from './useTrustProgress'

/**
 * Shown only while presenting. Reveal and Continue already exist per chapter —
 * the checkpoint reveals and the chapter nav — so this bar carries what a room
 * needs and a single learner does not: position in the chapter, dropping back
 * to all seats, opening the optional depth for a technical question, clearing
 * the room's answers between runs, and leaving presentation mode.
 */
export function TrustPresentationBar({ className }: { className?: string }) {
  const { present, exit, steps, stepIndex, armed, next, prev, depthOpen, setDepthOpen } = useTrustPresentation()
  const { progress, update, reset } = useTrustProgress()

  if (!present) return null

  const seat = TRUST_ROLES.find((role) => role.id === progress.role)
  const control = cn(trust.btnSecondary, 'px-2.5 py-1 text-xs')

  return (
    <aside
      aria-label="Presentation controls"
      className={cn(
        'flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-stone-300 bg-stone-100 px-3 py-2 dark:border-stone-600 dark:bg-stone-800',
        className
      )}
    >
      <p className="flex items-center gap-1.5 font-space-mono text-[11px] uppercase tracking-[0.16em] text-stone-600 dark:text-stone-300">
        <HiOutlinePresentationChartBar className="h-4 w-4 shrink-0" aria-hidden />
        Presenting
      </p>

      <p className="text-xs text-stone-600 dark:text-stone-400">{seat ? `Focused on ${seat.label}` : 'All seats'}</p>

      <div className="flex items-center gap-1">
        <button type="button" onClick={prev} className={cn(control, 'px-2')} aria-label="Previous section">
          <HiOutlineChevronLeft className="h-3.5 w-3.5" aria-hidden />
        </button>
        {/*
          The counter makes the arrow keys discoverable rather than hidden, and
          shows when the next press will leave the chapter rather than move
          within it.
        */}
        <p
          className={cn(
            'min-w-[5.5rem] text-center font-space-mono text-[11px]',
            armed ? 'text-amber-700 dark:text-amber-300' : 'text-stone-600 dark:text-stone-300'
          )}
        >
          {steps.length === 0
            ? '—'
            : armed
              ? 'end · again'
              : `${Math.max(stepIndex + 1, 1)} / ${steps.length}`}
          <span className="sr-only"> sections. Use the arrow keys to move between them.</span>
        </p>
        <button
          type="button"
          onClick={next}
          className={cn(control, 'px-2', armed && 'border-amber-500 text-amber-800 dark:text-amber-200')}
          aria-label={armed ? 'Continue to the next chapter' : 'Next section'}
        >
          <HiOutlineChevronRight className="h-3.5 w-3.5" aria-hidden />
        </button>
      </div>

      <div className="ml-auto flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setDepthOpen(!depthOpen)}
          aria-pressed={depthOpen}
          className={cn(control, depthOpen && 'border-cyan-500 bg-cyan-50 text-cyan-900 dark:bg-cyan-950/50 dark:text-cyan-100')}
        >
          {depthOpen ? 'Close depth' : 'Open depth'}
        </button>
        {seat ? (
          <button type="button" onClick={() => update({ role: null })} className={control}>
            <HiOutlineArrowUturnLeft className="mr-1 inline h-3.5 w-3.5" aria-hidden />
            All seats
          </button>
        ) : null}
        <button type="button" onClick={reset} className={control}>
          Reset answers
        </button>
        <button type="button" onClick={exit} className={control}>
          <HiOutlineXMark className="mr-1 inline h-3.5 w-3.5" aria-hidden />
          Exit
        </button>
      </div>
    </aside>
  )
}
