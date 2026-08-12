'use client'

import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { MOONLIGHTER_SLUG, workshopPromise } from '@/content/workshops/moonlighter-ai-3d-printing'
import { MoonlighterShell } from '@/components/workshop/moonlighter/MoonlighterShell'
import {
  NAME_KEY,
  participantStorageKey,
} from '@/lib/workshop/moonlighter/useMoonlighterSession'

const base = `/workshop/${MOONLIGHTER_SLUG}`

export function MoonlighterJoinClient() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [createdCode, setCreatedCode] = useState<string | null>(null)

  async function join(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/workshop/moonlighter/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'join',
          code: code.trim().toUpperCase(),
          displayName: name.trim(),
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Could not join')
        return
      }
      localStorage.setItem(participantStorageKey(data.session.code), data.participant.token)
      localStorage.setItem(NAME_KEY, name.trim())
      router.push(`${base}/session/${data.session.code}/m/0`)
    } catch {
      setError('Network error')
    } finally {
      setBusy(false)
    }
  }

  async function createSession() {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/workshop/moonlighter/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'create' }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Could not create')
        return
      }
      setCreatedCode(data.session.code)
      setCode(data.session.code)
    } catch {
      setError('Network error')
    } finally {
      setBusy(false)
    }
  }

  return (
    <MoonlighterShell>
      <div className="mx-auto max-w-md px-6 py-20">
        <Link href={base} className="text-sm text-[var(--ml-ink)]/60 hover:text-[var(--ml-ink)]">
          ← {workshopPromise.title}
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">Join session</h1>
        <p className="mt-2 text-sm text-[var(--ml-ink)]/70">
          Enter the session code from the room display. Facilitators can create a rehearsal session below.
        </p>
        <form onSubmit={join} className="mt-8 space-y-4">
          <label className="block text-sm">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
              Session code
            </span>
            <input
              className="mt-1 w-full rounded-sm border border-[var(--ml-soft-gray)] bg-white px-3 py-2 font-mono uppercase tracking-widest"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              maxLength={8}
              autoComplete="off"
            />
          </label>
          <label className="block text-sm">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
              Display name
            </span>
            <input
              className="mt-1 w-full rounded-sm border border-[var(--ml-soft-gray)] bg-white px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          {error && <p className="text-sm text-[var(--ml-diagnose)]">{error}</p>}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-sm bg-[var(--ml-digital)] px-4 py-3 text-white disabled:opacity-50"
          >
            Enter lab
          </button>
        </form>
        <div className="mt-10 border-t border-[var(--ml-soft-gray)] pt-8">
          <p className="text-sm text-[var(--ml-ink)]/65">Staff / rehearsal</p>
          <button
            type="button"
            onClick={createSession}
            disabled={busy}
            className="mt-3 rounded-sm border border-[var(--ml-ink)] px-4 py-2 text-sm"
          >
            Create session
          </button>
          {createdCode && (
            <div className="mt-4 space-y-2 text-sm">
              <p>
                Code: <span className="font-mono text-lg tracking-widest">{createdCode}</span>
              </p>
              <Link
                href={`${base}/facilitate/${createdCode}`}
                className="block text-[var(--ml-digital)] underline-offset-4 hover:underline"
              >
                Open facilitator dashboard
              </Link>
              <Link
                href={`${base}/present/${createdCode}`}
                className="block text-[var(--ml-digital)] underline-offset-4 hover:underline"
              >
                Open presenter display
              </Link>
            </div>
          )}
        </div>
      </div>
    </MoonlighterShell>
  )
}
