'use client'

import { useParams } from 'next/navigation'
import { useCallback, useMemo, useState, type FormEvent } from 'react'
import Link from 'next/link'
import {
  MOONLIGHTER_SLUG,
  getModule,
  moonlighterModules,
  sixHourRunOfShow,
} from '@/content/workshops/moonlighter-ai-3d-printing'
import { MoonlighterShell } from '@/components/workshop/moonlighter/MoonlighterShell'
import { PrinterBoard } from '@/components/workshop/moonlighter/PrinterBoard'
import { HandoffCard } from '@/components/workshop/moonlighter/HandoffCard'
import { useMoonlighterSession } from '@/lib/workshop/moonlighter/useMoonlighterSession'
import type { MoonlighterHandoff, SessionMode } from '@/lib/workshop/moonlighter/types'

const base = `/workshop/${MOONLIGHTER_SLUG}`

export default function FacilitatePage() {
  const params = useParams()
  const code = String(params.code ?? '').toUpperCase()
  const { bundle, error, refresh } = useMoonlighterSession(code, 3000)
  const [pin, setPin] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const [notes, setNotes] = useState('')
  const [selectedParticipant, setSelectedParticipant] = useState<string | null>(null)
  const [handoffDraft, setHandoffDraft] = useState<Partial<MoonlighterHandoff>>({})

  const moduleId = bundle?.session.current_module ?? 0
  const curriculumModule = getModule(moduleId)

  const selected = useMemo(
    () => bundle?.participants.find((p) => p.id === selectedParticipant),
    [bundle, selectedParticipant],
  )

  const login = async (e: FormEvent) => {
    e.preventDefault()
    setAuthError(null)
    const res = await fetch('/api/workshop/moonlighter/facilitate/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin, code }),
    })
    if (!res.ok) {
      setAuthError('Invalid PIN')
      return
    }
    setAuthed(true)
  }

  const control = useCallback(
    async (patch: Record<string, unknown>) => {
      await fetch(`/api/workshop/moonlighter/session/${code}/control`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patch),
      })
      await refresh()
    },
    [code, refresh],
  )

  const updatePrinter = async (printerId: string, patch: Record<string, unknown>) => {
    await fetch(`/api/workshop/moonlighter/session/${code}/printers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'printer', printer_id: printerId, ...patch }),
    })
    await refresh()
  }

  const saveHandoff = async () => {
    if (!selected || !bundle) return
    await fetch(`/api/workshop/moonlighter/session/${code}/printers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'handoff',
        participant_id: selected.id,
        ...handoffDraft,
      }),
    })
    await refresh()
  }

  const logRecovery = async () => {
    if (!selected) return
    await fetch(`/api/workshop/moonlighter/session/${code}/printers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'recovery',
        participant_id: selected.id,
        failure_type: 'production',
        photo_note: 'Documented in class',
        reprint_queued: true,
      }),
    })
    await refresh()
  }

  if (!authed) {
    return (
      <MoonlighterShell>
        <div className="mx-auto max-w-sm px-6 py-24">
          <h1 className="text-2xl font-semibold">Facilitator access</h1>
          <p className="mt-2 text-sm text-[var(--ml-ink)]/65">Session {code}</p>
          <form onSubmit={login} className="mt-6 space-y-3">
            <input
              type="password"
              className="w-full rounded-sm border border-[var(--ml-soft-gray)] bg-white px-3 py-2"
              placeholder="PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
            {authError && <p className="text-sm text-[var(--ml-diagnose)]">{authError}</p>}
            <button type="submit" className="w-full rounded-sm bg-[var(--ml-ink)] py-2 text-[var(--ml-paper)]">
              Unlock
            </button>
          </form>
          <p className="mt-4 text-xs text-[var(--ml-ink)]/45">
            Default PIN from env MOONLIGHTER_FACILITATOR_PIN (dev default 2468).
          </p>
        </div>
      </MoonlighterShell>
    )
  }

  return (
    <MoonlighterShell>
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Facilitator · {code}</h1>
            <p className="text-sm text-[var(--ml-ink)]/65">
              {curriculumModule ? `Module ${curriculumModule.id}: ${curriculumModule.phase}` : 'Loading…'}
              {bundle?.offline ? ' · offline store' : ''}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href={`${base}/present/${code}`} className="underline-offset-4 hover:underline">
              Presenter
            </Link>
            <Link href={`${base}/join`} className="underline-offset-4 hover:underline">
              Join
            </Link>
          </div>
        </div>
        {error && <p className="mt-2 text-sm text-[var(--ml-diagnose)]">{error}</p>}

        <section className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-sm border border-[var(--ml-soft-gray)] bg-white px-3 py-2 text-sm"
            onClick={() => void control({ current_module: Math.max(0, moduleId - 1) })}
          >
            Return
          </button>
          <button
            type="button"
            className="rounded-sm border border-[var(--ml-soft-gray)] bg-white px-3 py-2 text-sm"
            onClick={() => void control({ current_module: Math.min(9, moduleId + 1) })}
          >
            Advance
          </button>
          <button
            type="button"
            className="rounded-sm bg-[var(--ml-controlled)] px-3 py-2 text-sm text-white"
            onClick={() =>
              void control({
                mode: (bundle?.session.mode === 'hold' ? 'running' : 'hold') as SessionMode,
              })
            }
          >
            {bundle?.session.mode === 'hold' ? 'Resume' : 'Hold class'}
          </button>
          <button
            type="button"
            className="rounded-sm border border-[var(--ml-soft-gray)] bg-white px-3 py-2 text-sm"
            onClick={() => void control({ mode: 'open_studio' as SessionMode })}
          >
            Open studio
          </button>
          {[2, 5, 10].map((m) => (
            <button
              key={m}
              type="button"
              className="rounded-sm border border-[var(--ml-diagnose)]/40 px-3 py-2 text-sm"
              onClick={() => void control({ warning_minutes: m })}
            >
              {m}m warn
            </button>
          ))}
          <button
            type="button"
            className="rounded-sm border border-[var(--ml-soft-gray)] px-3 py-2 text-sm"
            onClick={() => void control({ warning_minutes: null })}
          >
            Clear warn
          </button>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="font-medium">Module list</h2>
            <ul className="mt-3 max-h-80 space-y-1 overflow-auto text-sm">
              {moonlighterModules.map((m) => {
                const row = sixHourRunOfShow.find((r) => r.moduleId === m.id)
                return (
                  <li key={m.id}>
                    <button
                      type="button"
                      className={`w-full rounded-sm border px-3 py-2 text-left ${
                        m.id === moduleId
                          ? 'border-[var(--ml-digital)] bg-[var(--ml-digital)]/10'
                          : 'border-[var(--ml-soft-gray)] bg-white/40'
                      }`}
                      onClick={() => void control({ current_module: m.id })}
                    >
                      <span className="font-mono text-[10px]">{row?.time}</span>
                      <span className="mt-0.5 block">
                        {m.id}. {m.phase} · {m.timeboxMin}m
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
            {curriculumModule && (
              <div className="mt-4 border border-[var(--ml-soft-gray)] bg-white/50 p-3 text-sm">
                <p className="font-medium">Demo cue</p>
                <ul className="mt-2 list-disc pl-4 text-[var(--ml-ink)]/75">
                  {curriculumModule.demos.map((d) => (
                    <li key={d.id}>{d.title}</li>
                  ))}
                </ul>
                <p className="mt-3 font-medium">Pass check</p>
                <p className="mt-1 text-[var(--ml-ink)]/75">{curriculumModule.passCheck}</p>
              </div>
            )}
          </div>

          <div>
            <h2 className="font-medium">Participant checkpoints</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-[var(--ml-soft-gray)] font-mono uppercase tracking-wider text-[var(--ml-ink)]/50">
                    <th className="py-2 pr-2">Name</th>
                    <th className="py-2 pr-2">Status</th>
                    <th className="py-2 pr-2">Pace</th>
                    <th className="py-2">Help</th>
                  </tr>
                </thead>
                <tbody>
                  {(bundle?.participants ?? []).map((p) => (
                    <tr
                      key={p.id}
                      className={`border-b border-[var(--ml-soft-gray)]/70 cursor-pointer ${
                        selectedParticipant === p.id ? 'bg-[var(--ml-digital)]/10' : ''
                      }`}
                      onClick={() => {
                        setSelectedParticipant(p.id)
                        const existing = bundle?.handoffs.find((h) => h.participant_id === p.id)
                        setHandoffDraft(existing ?? { approval_status: 'ready_for_review' })
                      }}
                    >
                      <td className="py-2 pr-2 font-medium">{p.display_name}</td>
                      <td className="py-2 pr-2">{p.status}</td>
                      <td className="py-2 pr-2">{p.pace}</td>
                      <td className="py-2 text-[var(--ml-controlled)]">{p.help_flag ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-medium">Printer board</h2>
          <div className="mt-3">
            <PrinterBoard
              printers={bundle?.printers ?? []}
              editable
              onUpdate={(id, patch) => void updatePrinter(id, patch)}
            />
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="font-medium">Handoff</h2>
            <div className="mt-3">
              <HandoffCard
                handoff={handoffDraft}
                participantName={selected?.display_name}
                editable
                onChange={(patch) => setHandoffDraft((d) => ({ ...d, ...patch }))}
              />
              <button
                type="button"
                className="mt-3 rounded-sm bg-[var(--ml-verified)] px-4 py-2 text-sm text-white disabled:opacity-40"
                disabled={!selected}
                onClick={() => void saveHandoff()}
              >
                Save handoff
              </button>
              <button
                type="button"
                className="ml-2 mt-3 rounded-sm border border-[var(--ml-diagnose)] px-4 py-2 text-sm text-[var(--ml-diagnose)] disabled:opacity-40"
                disabled={!selected}
                onClick={() => void logRecovery()}
              >
                Log recovery / reprint
              </button>
            </div>
          </div>
          <div>
            <h2 className="font-medium">Staff notes</h2>
            <textarea
              className="mt-3 min-h-[120px] w-full rounded-sm border border-[var(--ml-soft-gray)] bg-white p-3 text-sm"
              value={notes || bundle?.session.facilitator_notes || ''}
              onChange={(e) => setNotes(e.target.value)}
            />
            <button
              type="button"
              className="mt-2 rounded-sm border border-[var(--ml-ink)] px-3 py-2 text-sm"
              onClick={() => void control({ facilitator_notes: notes })}
            >
              Save notes
            </button>
            <h3 className="mt-6 font-medium">Recovery log</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {(bundle?.recovery ?? []).map((r) => (
                <li key={r.id} className="border border-[var(--ml-soft-gray)] bg-white/40 px-3 py-2">
                  {r.failure_type} · reprint {r.reprint_queued ? 'queued' : 'no'} · {r.photo_note}
                </li>
              ))}
              {(bundle?.recovery ?? []).length === 0 && (
                <li className="text-[var(--ml-ink)]/50">No recovery entries yet.</li>
              )}
            </ul>
          </div>
        </section>
      </div>
    </MoonlighterShell>
  )
}
