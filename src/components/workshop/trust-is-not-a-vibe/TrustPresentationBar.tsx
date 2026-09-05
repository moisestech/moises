'use client'

import { useEffect, useRef } from 'react'
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
import { TrustPresentationClock } from './TrustPresentationClock'
import { TRUST_COURSE_BAR_HEIGHT_VAR, trust } from './trust-tokens'
import { useTrustProgress } from './useTrustProgress'

/**
 * Always-visible course strip: the budgeted window for this page, a Present
 * button, and — once presenting — the room controls that used to live only
 * behind `?present=1`.
 *
 * Sticky under the site header and chapter subnav. In immersive mode those
 * two hide and this bar is the only top chrome.
 */
export function TrustPresentationBar({ className }: { className?: string }) {
  const { present, slug, enter, exit, steps, stepIndex, portionIndex, portionCount, armed, next, prev, depthOpen, setDepthOpen } =
    useTrustPresentation()
  const { progress, update, reset } = useTrustProgress()
  const barRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = barRef.current
    if (!node) return

    const publish = () => {
      const height = Math.round(node.getBoundingClientRect().height)
      if (height > 0) {
        document.documentElement.style.setProperty(TRUST_COURSE_BAR_HEIGHT_VAR, `${height}px`)
      }
    }

    publish()
    const observer = new ResizeObserver(publish)
    observer.observe(node)
    window.addEventListener('resize', publish)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', publish)
    }
  }, [present])

  const seat = TRUST_ROLES.find((role) => role.id === progress.role)
  const control = cn(trust.btnSecondary, 'px-2.5 py-1 text-xs')

  return (
    <aside
      ref={barRef}
      aria-label={present ? 'Presentation controls' : 'Course clock'}
      className={cn(
        'sticky z-40 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-stone-200 bg-stone-50/95 px-3 py-2 backdrop-blur dark:border-stone-700 dark:bg-stone-900/95',
        'top-[calc(var(--site-header-height,5rem)+var(--trust-subnav-height,3.5rem))]',
        className
      )}
    >
      {present ? (
        <p className="flex items-center gap-1.5 font-space-mono text-[11px] uppercase tracking-[0.16em] text-stone-600 dark:text-stone-300">
          <HiOutlinePresentationChartBar className="h-4 w-4 shrink-0" aria-hidden />
          Presenting
        </p>
      ) : null}

      {present ? (
        <p className="text-xs text-stone-600 dark:text-stone-400">
          {seat ? `Focused on ${seat.label}` : 'All seats'}
        </p>
      ) : null}

      <TrustPresentationClock slug={slug} />

      {present ? (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className={cn(control, 'flex h-11 w-11 items-center justify-center px-0')}
            aria-label="Previous section"
          >
            <HiOutlineChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <div
            className={cn(
              'min-w-[7.5rem] text-center',
              armed ? 'text-amber-700 dark:text-amber-300' : 'text-stone-800 dark:text-stone-100'
            )}
          >
            <p className="text-sm font-semibold leading-tight">
              {steps.length === 0 ? '—' : armed ? 'End of chapter' : (steps[Math.max(stepIndex, 0)]?.label ?? '—')}
            </p>
            <p className="font-space-mono text-[11px] text-stone-500 dark:text-stone-400">
              {steps.length === 0
                ? ''
                : armed
                  ? 'press again'
                  : portionCount > 1
                    ? `${portionIndex + 1} / ${portionCount}`
                    : `${Math.max(stepIndex + 1, 1)} / ${steps.length}`}
            </p>
            <span className="sr-only">
              {` ${Math.max(stepIndex + 1, 1)} / ${steps.length} sections. Use the arrow keys to move between them.`}
            </span>
          </div>
          <button
            type="button"
            onClick={next}
            className={cn(
              control,
              'flex h-11 w-11 items-center justify-center px-0',
              armed && 'border-amber-500 text-amber-800 dark:text-amber-200'
            )}
            aria-label={armed ? 'Continue to the next chapter' : 'Next section'}
          >
            <HiOutlineChevronRight className="h-6 w-6" aria-hidden />
          </button>
        </div>
      ) : null}

      <div className="ml-auto flex flex-wrap items-center gap-2">
        {present ? (
          <>
            <button
              type="button"
              onClick={() => setDepthOpen(!depthOpen)}
              aria-pressed={depthOpen}
              className={cn(
                control,
                depthOpen && 'border-cyan-500 bg-cyan-50 text-cyan-900 dark:bg-cyan-950/50 dark:text-cyan-100'
              )}
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
          </>
        ) : (
          <button type="button" onClick={enter} className={control}>
            <HiOutlinePresentationChartBar className="mr-1 inline h-3.5 w-3.5" aria-hidden />
            Present
          </button>
        )}
      </div>
    </aside>
  )
}
