'use client'

import { useCallback, useEffect, useState } from 'react'

const CLOCK_KEY = 'trust-is-not-a-vibe:present-clock'

/**
 * Wall-clock start time for a live run, in sessionStorage.
 *
 * The countdown on Rehearse keeps its start in React state, so it resets on
 * refresh and cannot follow the presenter from chapter to chapter. A presenter
 * moves across seven routes during a 30-minute run, so the start has to outlive
 * both navigation and an accidental reload. sessionStorage does that and still
 * clears when the tab closes, which is the right lifetime for one session — the
 * same reasoning as the presentation flag itself.
 *
 * Storing the start instant rather than an accumulated elapsed value means the
 * clock stays correct without ticking: a backgrounded tab that throttles timers
 * still reports the true elapsed time on the next render.
 */
export function useTrustPresentationClock() {
  const [startedAt, setStartedAt] = useState<number | null>(null)
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    const stored = window.sessionStorage.getItem(CLOCK_KEY)
    if (!stored) return
    const parsed = Number(stored)
    if (Number.isFinite(parsed)) {
      setStartedAt(parsed)
      setNow(Date.now())
    }
  }, [])

  useEffect(() => {
    if (startedAt === null) return
    const tick = () => setNow(Date.now())
    tick()
    // Twice a second: the display is m:ss, and a 1s interval drifts against the
    // real second boundary badly enough that digits visibly skip.
    const id = window.setInterval(tick, 500)
    return () => window.clearInterval(id)
  }, [startedAt])

  const start = useCallback(() => {
    const at = Date.now()
    window.sessionStorage.setItem(CLOCK_KEY, String(at))
    setStartedAt(at)
    setNow(at)
  }, [])

  const stop = useCallback(() => {
    window.sessionStorage.removeItem(CLOCK_KEY)
    setStartedAt(null)
    setNow(null)
  }, [])

  const running = startedAt !== null
  const elapsedMs = running && now !== null ? Math.max(0, now - startedAt) : 0

  return { running, elapsedMs, start, stop }
}
