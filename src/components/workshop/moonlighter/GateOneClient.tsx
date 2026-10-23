'use client'

import { useEffect, useState, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { MoonlighterShell } from './MoonlighterShell'
import { printAttemptPolicySummary } from '@/content/workshops/moonlighter-ai-3d-printing/policy'
import { participantStorageKey } from '@/lib/workshop/moonlighter/useMoonlighterSession'

const stages = [
  { name: 'Reference', time: '01', description: 'Choose one clear subject and record your right to use it.', output: 'Reference image + permission confirmation', tasks: ['One recognizable subject', 'Complete silhouette and clean background', 'Rights and privacy checked', 'Save the original and working image'] },
  { name: 'Generate', time: '02', description: 'Use a reference and a transformation prompt to create a solid, object-centered concept.', output: 'Selected image + prompt log', tasks: ['One complete object with coherent volume', 'No floating pieces or thin wires', 'Save original prompt and generated options', 'Select a print-friendly image'] },
  { name: 'Convert to mesh', time: '03', description: 'Generate the first 3D form using Meshy or Tripo; orbit before you trust it.', output: 'Original untouched STL/GLB', tasks: ['Inspect front, back and underside', 'Main volumes connected', 'Preserve original export', 'Record tool and generation version'] },
  { name: 'Inspect / repair', time: '04', description: 'Rate printability. Repair bounded geometry only; regenerate if the concept is structurally missing.', output: 'Green / amber / red decision', tasks: ['Silhouette reads from all sides', 'Continuous printable solid', 'Stable base or viable supports', 'Features survive scale and holes are resolved'] },
  { name: 'Scale / orient', time: '05', description: 'Make a real object with dimensions, a stable orientation and an achievable support plan.', output: 'Scaled model + support decision', tasks: ['Choose MINI or SCULPTURE tier', 'Record width, height and depth in mm', 'Check footprint and plate contact', 'Review supports and removal risks'] },
  { name: 'Slice / request approval', time: '06', description: 'Verify the layer preview and estimated duration in Bambu Studio. Only the instructor submits a printer job.', output: 'Versioned .3mf + approval request', tasks: ['Correct printer/PLA profile', 'Layer preview checked for gaps', 'Time/material estimates recorded', 'Instructor approval before print or queue'] },
] as const

const rubric = [
  ['Silhouette', 'Recognizable from multiple sides'],
  ['Continuity', 'Connected solid; no stray components'],
  ['Base & orientation', 'Stable or safely supported'],
  ['Feature thickness', 'Survives the chosen scale and nozzle'],
  ['Surface & slice', 'No consequential holes or broken layers'],
] as const

export function GateOneClient() {
  const [step, setStep] = useState(0)
  const [completed, setCompleted] = useState<string[]>([])
  const [ratings, setRatings] = useState<Record<string, string>>({})
  const [project, setProject] = useState('')
  const [tier, setTier] = useState('mini')
  const [consent, setConsent] = useState(false)
  const [sessionCode, setSessionCode] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [joinedName, setJoinedName] = useState<string | null>(null)
  const [joinedToken, setJoinedToken] = useState<string | null>(null)
  const [offline, setOffline] = useState<boolean | null>(null)
  const [sending, setSending] = useState(false)
  const [requestState, setRequestState] = useState<'idle' | 'sent'>('idle')
  const [requestError, setRequestError] = useState<string | null>(null)
  const current = stages[step]
  const allTasks = current.tasks.every(task => completed.includes(current.name + ':' + task))
  const everyStageComplete = stages.every(stage => stage.tasks.every(task => completed.includes(stage.name + ':' + task)))
  const rated = rubric.every(([name]) => !!ratings[name])
  const blocked = Object.values(ratings).includes('red')
  const approvalReady = everyStageComplete && rated && !blocked && consent && project.trim().length > 0

  useEffect(() => {
    const code = sessionCode.trim().toUpperCase()
    if (code.length !== 6) return
    const token = localStorage.getItem(participantStorageKey(code))
    if (!token) return
    let cancelled = false
    void fetch(`/api/workshop/moonlighter/session?code=${encodeURIComponent(code)}`).then(async (res) => {
      if (!res.ok || cancelled) return
      const data = await res.json()
      const me = (data.participants ?? []).find((person: { token: string; display_name: string }) => person.token === token)
      if (!me || cancelled) return
      setJoinedToken(token)
      setJoinedName(me.display_name)
      setOffline(Boolean(data.offline))
    })
    return () => {
      cancelled = true
    }
  }, [sessionCode])

  function toggleTask(task: string) {
    const id = current.name + ':' + task
    setCompleted(old => old.includes(id) ? old.filter(x => x !== id) : [...old, id])
    setRequestState('idle')
  }

  function moveStage(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      setStep(value => Math.min(value + 1, stages.length - 1))
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      setStep(value => Math.max(value - 1, 0))
    }
  }

  async function joinSession() {
    setRequestError(null)
    const code = sessionCode.trim().toUpperCase()
    const name = displayName.trim()
    if (!code || !name) {
      setRequestError('Enter the session code and the name you use in class.')
      return
    }
    const res = await fetch('/api/workshop/moonlighter/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'join', code, displayName: name }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      setRequestError(typeof data.error === 'string' ? data.error : 'Could not join this session.')
      return
    }
    localStorage.setItem(participantStorageKey(data.session.code), data.participant.token)
    setSessionCode(data.session.code)
    setJoinedToken(data.participant.token)
    setJoinedName(data.participant.display_name)
    setOffline(Boolean(data.offline))
  }

  async function requestReview() {
    if (!joinedToken || !approvalReady || sending) return
    setSending(true)
    setRequestError(null)
    const code = sessionCode.trim().toUpperCase()
    const res = await fetch(`/api/workshop/moonlighter/session/${code}/participants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'gate_review',
        token: joinedToken,
        project_title: project.trim(),
        tier,
        ratings,
        stages_complete: true,
        reference_rights: true,
      }),
    })
    const data = await res.json().catch(() => ({}))
    setSending(false)
    if (!res.ok) {
      setRequestError(typeof data.error === 'string' ? data.error : 'The review request was not saved.')
      return
    }
    setRequestState('sent')
    setOffline(Boolean(data.offline))
  }

  return (
    <MoonlighterShell>
      <main className="mx-auto w-full max-w-7xl overflow-x-hidden px-4 pb-24 pt-10 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--ml-soft-gray)] pb-5 text-xs font-semibold uppercase tracking-[0.17em]">
          <Link href="/workshop/moonlighter-ai-3d-printing" className="underline underline-offset-4">← From Image to Object</Link>
          <span className="text-[var(--ml-ink)]/60">Student studio guide · Gate 1</span>
        </div>
        <header className="grid gap-7 py-10 sm:py-14 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ml-accent)]">Make the digital physical / 01—06</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">FROM IMAGE<br />TO OBJECT.</h1>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[var(--ml-ink)]/70 sm:text-lg">One reference. One mesh. One printable decision. Follow the six checkpoints, save your source files, then request instructor approval for one print attempt.</p>
        </header>
        <div className="mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-[var(--ml-soft-gray)] sm:grid-cols-3 lg:grid-cols-6" role="tablist" aria-label="Workshop phases" onKeyDown={moveStage}>
          {stages.map((s, index) => (
            <button key={s.time} type="button" role="tab" aria-selected={step === index} onClick={() => setStep(index)} className={`min-h-24 p-3 text-left transition-colors sm:p-4 ${step === index ? 'bg-[var(--ml-charcoal)] text-white' : 'bg-[var(--ml-paper)] hover:bg-white'}`}>
              <span className="block text-xs opacity-60">{s.time} / 06</span>
              <span className="mt-2 block text-sm font-semibold">{s.name}</span>
            </button>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(290px,0.46fr)] lg:items-start">
          <section className="min-w-0 rounded-2xl border border-[var(--ml-soft-gray)] bg-white p-5 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ml-accent)]">Checkpoint {current.time}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{current.name}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ml-ink)]/70">{current.description}</p>
            <div className="mt-8 border-y border-[var(--ml-soft-gray)] py-5">
              <p className="text-xs uppercase tracking-[0.16em] opacity-60">Save this output</p>
              <p className="mt-2 text-lg font-semibold">{current.output}</p>
            </div>
            <h3 className="mt-8 text-lg font-semibold">Pass checklist</h3>
            <div className="mt-4 space-y-3">
              {current.tasks.map(task => {
                const checked = completed.includes(current.name + ':' + task)
                return <label key={task} className="flex cursor-pointer items-start gap-3 rounded-lg border border-[var(--ml-soft-gray)] p-4 text-sm leading-relaxed hover:bg-[var(--ml-paper)]"><input className="mt-1 h-4 w-4 accent-[var(--ml-accent)]" type="checkbox" checked={checked} onChange={() => toggleTask(task)} /><span className={checked ? 'opacity-60' : ''}>{task}</span></label>
              })}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <span role="status" className="text-sm text-[var(--ml-ink)]/70">{allTasks ? 'Checkpoint complete (local only)' : 'Complete each check before moving on'}</span>
              <div className="flex gap-2">
                <button type="button" disabled={step === 0} onClick={() => setStep(v => Math.max(v - 1, 0))} className="rounded-full border border-[var(--ml-soft-gray)] px-5 py-3 text-sm disabled:opacity-30">Back</button>
                <button type="button" disabled={step === stages.length - 1} onClick={() => setStep(v => Math.min(v + 1, stages.length - 1))} className="rounded-full bg-[var(--ml-charcoal)] px-5 py-3 text-sm text-white disabled:opacity-30">Next →</button>
              </div>
            </div>
          </section>
          <aside className="space-y-5 lg:sticky lg:top-8">
            <section className="rounded-2xl bg-[var(--ml-charcoal)] p-5 text-white sm:p-6">
              <h3 className="text-xl font-semibold">Production decision</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">Self-check before the instructor reviews the file. A review request does not start a print.</p>
              <label className="mt-6 block text-xs uppercase tracking-wider text-white/70">Session code
                <input value={sessionCode} onChange={e => setSessionCode(e.target.value.toUpperCase())} maxLength={6} autoCapitalize="characters" spellCheck={false} placeholder="ABC123" className="mt-2 w-full rounded-md border border-white/20 bg-white p-3 text-sm normal-case tracking-normal text-black" />
              </label>
              {joinedToken ? (
                <p className="mt-3 text-sm text-white/80">Joined as {joinedName}.</p>
              ) : (
                <>
                  <label className="mt-4 block text-xs uppercase tracking-wider text-white/70">Name in class
                    <input value={displayName} onChange={e => setDisplayName(e.target.value)} maxLength={40} className="mt-2 w-full rounded-md border border-white/20 bg-white p-3 text-sm normal-case tracking-normal text-black" />
                  </label>
                  <button type="button" onClick={() => void joinSession()} className="mt-3 w-full rounded-full border border-white/40 px-4 py-2 text-sm">Join session</button>
                </>
              )}
              {offline === true && <p className="mt-3 text-xs leading-relaxed text-white/70">Rehearsal only. This session lives in server memory and will not survive a restart.</p>}
              <label className="mt-6 block text-xs uppercase tracking-wider text-white/70">Project name
                <input value={project} onChange={e => { setProject(e.target.value); setRequestState('idle') }} maxLength={80} placeholder="e.g. tidal-form" className="mt-2 w-full rounded-md border border-white/20 bg-white p-3 text-sm normal-case tracking-normal text-black" />
              </label>
              <label className="mt-4 block text-xs uppercase tracking-wider text-white/70">Production tier
                <select value={tier} onChange={e => { setTier(e.target.value); setRequestState('idle') }} className="mt-2 w-full rounded-md bg-white p-3 text-sm normal-case tracking-normal text-black"><option value="mini">MINI / 35–70 mm</option><option value="sculpture">SCULPTURE / 80–120 mm</option></select>
              </label>
              <div className="mt-6 space-y-3">
                {rubric.map(([name, description]) => <fieldset key={name} className="border-t border-white/20 pt-3"><legend className="text-sm font-semibold">{name}</legend><p className="mt-1 text-xs text-white/60">{description}</p><div className="mt-2 flex flex-wrap gap-2">{(['green','amber','red'] as const).map(value => <label key={value} className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs capitalize ${ratings[name] === value ? 'border-white bg-white text-black' : 'border-white/30'}`}><input className="sr-only" type="radio" name={name} checked={ratings[name] === value} onChange={() => { setRatings(old => ({...old,[name]:value})); setRequestState('idle') }} />{value}</label>)}</div></fieldset>)}
              </div>
              <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-white/80"><input type="checkbox" className="mt-1" checked={consent} onChange={e => { setConsent(e.target.checked); setRequestState('idle') }} />I have rights to use my reference and understand that permission to publicly document my work is a separate, optional decision.</label>
              <div role="status" className="mt-5 rounded-lg bg-white/10 p-4 text-sm leading-relaxed">{blocked ? 'RED / Revise or regenerate before approval.' : approvalReady ? 'READY / The six checkpoints, rubric, project name, and rights check are complete.' : rated && Object.values(ratings).includes('amber') ? 'AMBER / Review repairs and support risks with the instructor. Amber can still be sent for review.' : 'NOT YET READY / Finish all six checkpoints, the project name, the rubric, and the rights check.'}</div>
              <button type="button" disabled={!joinedToken || !approvalReady || sending} onClick={() => void requestReview()} className="mt-4 w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-black disabled:opacity-40">{sending ? 'Sending…' : requestState === 'sent' ? 'Review requested' : 'Request instructor review'}</button>
              {requestError && <p role="alert" className="mt-3 text-xs leading-relaxed text-white">{requestError}</p>}
              <p className="mt-3 text-xs leading-relaxed text-white/55">{joinedToken ? (requestState === 'sent' ? 'The instructor can see this draft. Printer lanes stay idle until they assign one.' : 'The request writes a review draft. It does not assign a printer.') : 'This checklist stays on this computer until you join a session.'}</p>
            </section>
            <section className="rounded-2xl border border-[var(--ml-soft-gray)] p-5 text-sm leading-relaxed sm:p-6">
              <h3 className="text-lg font-semibold">One approved print</h3>
              <p className="mt-3 text-[var(--ml-ink)]/75">{printAttemptPolicySummary}</p>
              <p className="mt-4 font-medium">Four printer lanes · Instructor-controlled launch · Larger jobs may be queued for pickup.</p>
              <Link href="/workshop/moonlighter-ai-3d-printing/resources" className="mt-5 inline-block underline underline-offset-4">Resources & next steps ↗</Link>
            </section>
          </aside>
        </div>
        <footer className="mt-12 grid gap-5 border-t border-[var(--ml-soft-gray)] pt-8 text-sm leading-relaxed sm:grid-cols-2">
          <div><h3 className="font-semibold">File trail</h3><p className="mt-2 opacity-70">Keep reference → selected image → original mesh → repaired mesh (if needed) → sliced .3mf. Never overwrite an approved version.</p></div>
          <div><h3 className="font-semibold">Continue the practice</h3><p className="mt-2 opacity-70">Document your decisions, answer the workshop feedback form provided by the facilitator, and explore further fabrication workshops through DCC Miami.</p><a className="mt-2 inline-block underline underline-offset-4" href="https://dcc.miami/workshops">Explore DCC workshops ↗</a></div>
        </footer>
      </main>
    </MoonlighterShell>
  )
}
