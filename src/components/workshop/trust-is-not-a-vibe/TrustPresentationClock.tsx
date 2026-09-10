'use client'

import { HiOutlineClock } from 'react-icons/hi2'
import {
  TRUST_CHAPTER_TIME,
  TRUST_OVERVIEW_TIME,
  type TrustChapterId,
  type TrustTimeSegment,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { trustPresentChrome } from './trust-tokens'
import { useTrustPresentationClock } from './useTrustPresentationClock'

function formatElapsed(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function formatDelta(seconds: number): string {
  const whole = Math.round(Math.abs(seconds))
  const minutes = Math.floor(whole / 60)
  return minutes ? `${minutes}:${String(whole % 60).padStart(2, '0')}` : `${whole}s`
}

function segmentFor(slug?: string): TrustTimeSegment {
  if (!slug) return TRUST_OVERVIEW_TIME
  return TRUST_CHAPTER_TIME[slug as TrustChapterId] ?? TRUST_OVERVIEW_TIME
}

/**
 * Elapsed time against the budgeted window for the section on screen.
 *
 * The 30-minute countdown lives on Rehearse, which is not the surface being
 * projected, so a presenter following the lesson had no way to see pace without
 * leaving it. Showing the target window next to the elapsed time answers the
 * only question that matters mid-run: keep going, or move on.
 */
export function TrustPresentationClock({ slug }: { slug?: string }) {
  const { running, elapsedMs, start, stop } = useTrustPresentationClock()
  const segment = segmentFor(slug)
  const chrome = trustPresentChrome

  const windowLabel = (
    <p className={chrome.meta}>
      {segment.label}
      <span className="mx-1 text-stone-300 dark:text-stone-600" aria-hidden>
        ·
      </span>
      {segment.clock}
    </p>
  )

  if (!running) {
    return (
      <div className="flex items-center gap-2">
        {windowLabel}
        <button
          type="button"
          onClick={start}
          className={chrome.control}
          title={`This section is budgeted ${segment.clock}`}
        >
          <HiOutlineClock className={chrome.icon} aria-hidden />
          Start clock
        </button>
      </div>
    )
  }

  const elapsedMin = elapsedMs / 60000
  const endMin = segment.startMin + segment.minutes
  const behindSec = (elapsedMin - endMin) * 60
  const aheadSec = (segment.startMin - elapsedMin) * 60

  const pace =
    behindSec > 0
      ? { label: `${formatDelta(behindSec)} over`, tone: 'text-red-700 dark:text-red-300' }
      : aheadSec > 0
        ? { label: `${formatDelta(aheadSec)} early`, tone: 'text-stone-600 dark:text-stone-400' }
        : { label: 'on pace', tone: 'text-emerald-700 dark:text-emerald-300' }

  return (
    <div className="flex items-center gap-2">
      {/*
        No aria-live on the digits. They change twice a second, and announcing
        that would bury every other update in the bar. The button label carries
        the same information on demand instead.
      */}
      <p className={cn(chrome.label, 'font-space-mono tabular-nums')}>{formatElapsed(elapsedMs)}</p>
      {windowLabel}
      <p className={cn(chrome.meta, 'font-semibold', pace.tone)}>{pace.label}</p>
      <button
        type="button"
        onClick={stop}
        className={chrome.control}
        aria-label={`Stop the clock. ${formatElapsed(elapsedMs)} elapsed, ${pace.label}, in ${segment.label} budgeted ${segment.clock}.`}
      >
        Stop
      </button>
    </div>
  )
}
