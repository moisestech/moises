'use client'

import { useEffect, useState } from 'react'
import {
  formatTrustClock,
  getLiveBeatAtElapsed,
  TRUST_INTERRUPT_BEAT,
  TRUST_LIVE_BEATS,
  TRUST_LIVE_CUE_MINUTES,
  TRUST_TOTAL_MINUTES,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

const THIRTY_MIN_MS = TRUST_TOTAL_MINUTES * 60 * 1000

function formatClock(ms: number) {
  const clamped = Math.max(0, ms)
  const totalSeconds = Math.floor(clamped / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function TrustCountdown({
  running,
  onExpire,
}: {
  running: boolean
  onExpire?: () => void
}) {
  const [endsAt, setEndsAt] = useState<number | null>(null)
  const [remaining, setRemaining] = useState(THIRTY_MIN_MS)

  useEffect(() => {
    if (!running) {
      setEndsAt(null)
      setRemaining(THIRTY_MIN_MS)
      return
    }
    const nextEnds = Date.now() + THIRTY_MIN_MS
    setEndsAt(nextEnds)
    setRemaining(THIRTY_MIN_MS)
  }, [running])

  useEffect(() => {
    if (!running || endsAt === null) return
    const tick = () => {
      const next = endsAt - Date.now()
      setRemaining(next)
      if (next <= 0) onExpire?.()
    }
    tick()
    const id = window.setInterval(tick, 250)
    return () => window.clearInterval(id)
  }, [endsAt, onExpire, running])

  const expired = remaining <= 0
  const elapsedMs = THIRTY_MIN_MS - Math.max(0, remaining)
  const elapsedMin = elapsedMs / 60000
  const beat = getLiveBeatAtElapsed(elapsedMin)
  const warning = remaining <= 5 * 60 * 1000
  // Derived from the beat data rather than a hardcoded minute, so moving the
  // interruption in the content moves the highlight with it.
  const atInterrupt = Boolean(beat.interrupt)

  return (
    <div className="min-w-0 flex-1">
      <p
        className={cn(
          'font-mono text-2xl font-semibold tabular-nums',
          expired
            ? 'text-red-600 dark:text-red-400'
            : atInterrupt
              ? 'text-amber-600 dark:text-amber-300'
              : warning
                ? 'text-amber-600 dark:text-amber-300'
                : 'text-stone-900 dark:text-stone-100'
        )}
        aria-live="polite"
        aria-label={expired ? 'Thirty minutes complete' : `Time remaining ${formatClock(remaining)}`}
      >
        {expired ? '00:00' : formatClock(remaining)}
      </p>
      <p className="mt-1 text-xs text-stone-500">
        {beat.clock} · {beat.title}
        {beat.interrupt ? ' · interrupt window' : ''}
      </p>
      <ol className="mt-2 flex flex-wrap gap-1" aria-label="Live session cues">
        {TRUST_LIVE_CUE_MINUTES.map((minute) => {
          const passed = elapsedMin >= minute
          const current = TRUST_LIVE_BEATS.some((item) => item.startMin === minute && item.id === beat.id)
          const interrupt = minute === TRUST_INTERRUPT_BEAT?.startMin
          return (
            <li
              key={minute}
              className={cn(
                'rounded-full px-2 py-0.5 font-mono text-[10px]',
                interrupt && current
                  ? 'bg-amber-200 text-amber-950 dark:bg-amber-400 dark:text-stone-950'
                  : current
                    ? 'bg-cyan-200 text-cyan-950 dark:bg-cyan-400 dark:text-stone-950'
                    : passed
                      ? 'bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-300'
                      : 'bg-stone-100 text-stone-400 dark:bg-stone-800'
              )}
            >
              {formatTrustClock(minute)}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
