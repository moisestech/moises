'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const THIRTY_MIN_MS = 30 * 60 * 1000

function formatRemaining(ms: number) {
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
  const warning = remaining <= 5 * 60 * 1000

  return (
    <p
      className={cn(
        'font-mono text-2xl font-semibold tabular-nums',
        expired ? 'text-red-600 dark:text-red-400' : warning ? 'text-amber-600 dark:text-amber-300' : 'text-stone-900 dark:text-stone-100'
      )}
      aria-live="polite"
      aria-label={expired ? 'Thirty minutes complete' : `Time remaining ${formatRemaining(remaining)}`}
    >
      {expired ? '00:00' : formatRemaining(remaining)}
    </p>
  )
}
