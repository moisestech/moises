'use client'

import { useCallback, useEffect, useState } from 'react'
import type { SessionBundle, SessionPace } from '@/lib/workshop/moonlighter/types'

const TOKEN_KEY = 'moonlighter_participant_token'
const NAME_KEY = 'moonlighter_participant_name'

export function participantStorageKey(code: string) {
  return `${TOKEN_KEY}_${code.toUpperCase()}`
}

export function useMoonlighterSession(code: string, pollMs = 4000) {
  const [bundle, setBundle] = useState<SessionBundle | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [participantId, setParticipantId] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch(`/api/workshop/moonlighter/session?code=${encodeURIComponent(code)}`)
      if (!res.ok) {
        setError('Session not found')
        return
      }
      const data = (await res.json()) as SessionBundle
      setBundle(data)
      setError(null)
      const t = localStorage.getItem(participantStorageKey(code))
      if (t) {
        setToken(t)
        const me = data.participants.find((p) => p.token === t)
        setParticipantId(me?.id ?? null)
      }
    } catch {
      setError('Could not load session')
    }
  }, [code])

  useEffect(() => {
    void refresh()
    const id = window.setInterval(() => void refresh(), pollMs)
    return () => window.clearInterval(id)
  }, [refresh, pollMs])

  const markReady = useCallback(
    async (moduleId: number) => {
      const t = token ?? localStorage.getItem(participantStorageKey(code))
      if (!t) return
      await fetch(`/api/workshop/moonlighter/session/${code}/participants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'checkpoint',
          token: t,
          module_id: moduleId,
          state: 'ready_for_review',
        }),
      })
      await refresh()
    },
    [code, token, refresh],
  )

  const setPace = useCallback(
    async (pace: SessionPace) => {
      const t = token ?? localStorage.getItem(participantStorageKey(code))
      if (!t) return
      await fetch(`/api/workshop/moonlighter/session/${code}/participants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update', token: t, pace }),
      })
      await refresh()
    },
    [code, token, refresh],
  )

  const setHelpFlag = useCallback(
    async (help_flag: string) => {
      const t = token ?? localStorage.getItem(participantStorageKey(code))
      if (!t) return
      await fetch(`/api/workshop/moonlighter/session/${code}/participants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update', token: t, help_flag }),
      })
      await refresh()
    },
    [code, token, refresh],
  )

  const ackPolicy = useCallback(async () => {
    const t = token ?? localStorage.getItem(participantStorageKey(code))
    if (!t) return
    await fetch(`/api/workshop/moonlighter/session/${code}/participants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update', token: t, policy_acked: true }),
    })
    await refresh()
  }, [code, token, refresh])

  return {
    bundle,
    error,
    participantId,
    token,
    refresh,
    markReady,
    setPace,
    setHelpFlag,
    ackPolicy,
  }
}

export { TOKEN_KEY, NAME_KEY }
