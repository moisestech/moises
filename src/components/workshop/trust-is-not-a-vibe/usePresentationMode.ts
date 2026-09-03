'use client'

import { useCallback, useEffect, useState } from 'react'

export const TRUST_PRESENT_PARAM = 'present'
export const TRUST_PRESENT_KEY = 'trust-is-not-a-vibe:present'

/**
 * Presentation mode is one flag, not a second application, and not a fifth
 * seat. `TrustRoleId` stays four ids so every `Record<TrustRoleId, …>` lookup
 * remains exhaustive; the room view is expressed as `allSeats` instead.
 *
 * Entered with `?present=1` and then mirrored into `sessionStorage`, because
 * chapter links carry no query string and the flag has to survive navigation.
 * It never reaches `localStorage`, so presenting cannot silently rewrite a
 * learner's saved progress on a shared machine.
 */
export function usePresentationMode() {
  const [present, setPresent] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get(TRUST_PRESENT_PARAM)
    if (fromUrl === '1') {
      window.sessionStorage.setItem(TRUST_PRESENT_KEY, '1')
      setPresent(true)
    } else if (fromUrl === '0') {
      window.sessionStorage.removeItem(TRUST_PRESENT_KEY)
      setPresent(false)
    } else {
      setPresent(window.sessionStorage.getItem(TRUST_PRESENT_KEY) === '1')
    }
    setHydrated(true)
  }, [])

  const exit = useCallback(() => {
    window.sessionStorage.removeItem(TRUST_PRESENT_KEY)
    setPresent(false)
  }, [])

  return { present, hydrated, exit }
}
