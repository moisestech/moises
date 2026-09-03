'use client'

import { HiOutlineArrowUturnLeft, HiOutlinePresentationChartBar, HiOutlineXMark } from 'react-icons/hi2'
import { TRUST_ROLES } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { trust } from './trust-tokens'
import { usePresentationMode } from './usePresentationMode'
import { useTrustProgress } from './useTrustProgress'

/**
 * Shown only while presenting. Reveal and Continue already exist per chapter —
 * the checkpoint reveals and the chapter nav — so this bar carries what a room
 * needs and a single learner does not: dropping back to all seats, clearing the
 * room's answers between runs, and leaving presentation mode.
 */
export function TrustPresentationBar({ className }: { className?: string }) {
  const { present, exit } = usePresentationMode()
  const { progress, update, reset } = useTrustProgress()

  if (!present) return null

  const seat = TRUST_ROLES.find((role) => role.id === progress.role)

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

      <p className="text-xs text-stone-600 dark:text-stone-400" aria-live="polite">
        {seat ? `Focused on ${seat.label}` : 'All seats'}
      </p>

      <div className="ml-auto flex flex-wrap items-center gap-2">
        {seat ? (
          <button
            type="button"
            onClick={() => update({ role: null })}
            className={cn(trust.btnSecondary, 'px-2.5 py-1 text-xs')}
          >
            <HiOutlineArrowUturnLeft className="mr-1 inline h-3.5 w-3.5" aria-hidden />
            All seats
          </button>
        ) : null}
        <button type="button" onClick={reset} className={cn(trust.btnSecondary, 'px-2.5 py-1 text-xs')}>
          Reset answers
        </button>
        <button type="button" onClick={exit} className={cn(trust.btnSecondary, 'px-2.5 py-1 text-xs')}>
          <HiOutlineXMark className="mr-1 inline h-3.5 w-3.5" aria-hidden />
          Exit
        </button>
      </div>
    </aside>
  )
}
