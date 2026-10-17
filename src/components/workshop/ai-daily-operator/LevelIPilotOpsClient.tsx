'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  clarityDelta,
  type CohortAfterAction,
  type QuotePermissionStatus,
} from '@/content/workshops/ai-daily-operator/cohort-after-action'
import {
  FACILITATOR_PREFLIGHT,
  HOST_PREFLIGHT,
  PARTICIPANT_PRESESSION,
  preflightComplete,
  type PreflightItem,
} from '@/content/workshops/ai-daily-operator/preflight'
import {
  FACILITATOR_SCORECARD_CRITERIA,
  founderHoursFromMinutes,
  moisesContributionPerHour,
} from '@/content/workshops/ai-daily-operator/facilitator-scorecard'

const STORAGE_KEY = 'ai-daily-operator:pilot-ops'

type PilotOpsState = {
  hostPreflight: string[]
  participantPreflight: string[]
  facilitatorPreflight: string[]
  report: CohortAfterAction
  grossContribution: number | null
  scorecard: Record<string, number>
}

const EMPTY_REPORT: CohortAfterAction = {
  host: '',
  date: '',
  format: 'Core',
  facilitator: '',
  participantCount: 0,
  completionCount: 0,
  passCount: 0,
  clarityBeforeAverage: null,
  clarityAfterAverage: null,
  reuseIntent: '',
  topStallPoint: '',
  mostCommonFriction: '',
  topFacilitatorIntervention: '',
  founderMinutes: 0,
  facilitatorMinutes: 0,
  quotePermissionStatus: 'none',
  oneRecommendedChange: '',
  oneThingNotToChange: '',
}

const EMPTY_STATE: PilotOpsState = {
  hostPreflight: [],
  participantPreflight: [],
  facilitatorPreflight: [],
  report: EMPTY_REPORT,
  grossContribution: null,
  scorecard: {},
}

function readNumber(value: string): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function readNullableNumber(value: string): number | null {
  if (value.trim() === '') return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function toggleId(ids: string[], id: string) {
  return ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]
}

function CheckList({
  title,
  items,
  completed,
  onToggle,
}: {
  title: string
  items: readonly PreflightItem[]
  completed: string[]
  onToggle: (id: string) => void
}) {
  const ready = preflightComplete(items, completed)

  return (
    <section className="rounded-2xl border border-[#d8d0c4] bg-[#fffdf8] p-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl tracking-tight">{title}</h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5c5750]">
          {ready ? 'Ready' : 'Open'}
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <label key={item.id} className="flex cursor-pointer gap-3 text-sm leading-relaxed text-[#3d3832]">
            <input
              type="checkbox"
              checked={completed.includes(item.id)}
              onChange={() => onToggle(item.id)}
              className="mt-1 h-4 w-4"
            />
            <span>
              {item.label}
              {!item.required ? <span className="ml-2 text-xs text-[#777068]">(optional)</span> : null}
            </span>
          </label>
        ))}
      </div>
    </section>
  )
}

function TextField({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string
  value: string | number
  onChange: (value: string) => void
  type?: 'text' | 'date' | 'number'
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5c5750]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-[#cfc6b8] bg-white px-3 py-2 text-sm outline-none focus:border-[#1c1916]"
      />
    </label>
  )
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5c5750]">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
        className="mt-2 w-full rounded-lg border border-[#cfc6b8] bg-white px-3 py-2 text-sm outline-none focus:border-[#1c1916]"
      />
    </label>
  )
}

export function LevelIPilotOpsClient() {
  const [state, setState] = useState<PilotOpsState>(EMPTY_STATE)
  const [loaded, setLoaded] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<PilotOpsState>
        setState({
          ...EMPTY_STATE,
          ...parsed,
          report: { ...EMPTY_REPORT, ...(parsed.report ?? {}) },
          scorecard: parsed.scorecard ?? {},
          hostPreflight: parsed.hostPreflight ?? [],
          participantPreflight: parsed.participantPreflight ?? [],
          facilitatorPreflight: parsed.facilitatorPreflight ?? [],
        })
      }
    } catch {
      setState(EMPTY_STATE)
    } finally {
      setLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!loaded) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state, loaded])

  const preflightReady =
    preflightComplete(HOST_PREFLIGHT, state.hostPreflight) &&
    preflightComplete(PARTICIPANT_PRESESSION, state.participantPreflight) &&
    preflightComplete(FACILITATOR_PREFLIGHT, state.facilitatorPreflight)

  const delta = clarityDelta(state.report)
  const contributionPerHour = useMemo(() => {
    if (state.grossContribution == null) return null
    return moisesContributionPerHour(
      state.grossContribution,
      founderHoursFromMinutes(state.report.founderMinutes),
    )
  }, [state.grossContribution, state.report.founderMinutes])

  const exportPayload = useMemo(
    () => ({
      generatedAt: new Date().toISOString(),
      preflightReady,
      hostPreflight: state.hostPreflight,
      participantPreflight: state.participantPreflight,
      facilitatorPreflight: state.facilitatorPreflight,
      report: state.report,
      clarityDelta: delta,
      grossContribution: state.grossContribution,
      moisesGrossContributionPerHour: contributionPerHour,
      facilitatorScorecard: state.scorecard,
    }),
    [contributionPerHour, delta, preflightReady, state],
  )

  function updateReport<K extends keyof CohortAfterAction>(key: K, value: CohortAfterAction[K]) {
    setState((current) => ({
      ...current,
      report: { ...current.report, [key]: value },
    }))
  }

  async function copyExport() {
    const text = JSON.stringify(exportPayload, null, 2)
    await navigator.clipboard.writeText(text)
    setCopyStatus('Copied')
    window.setTimeout(() => setCopyStatus(''), 1600)
  }

  function downloadExport() {
    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `founder-attention-os-${state.report.date || 'pilot'}-after-action.json`
    anchor.click()
    URL.revokeObjectURL(url)
  }

  function reset() {
    if (!window.confirm('Reset only the local Founder Attention OS pilot-ops record in this browser?')) return
    window.localStorage.removeItem(STORAGE_KEY)
    setState(EMPTY_STATE)
  }

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1c1916]">
      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-28 sm:px-8 sm:pt-36">
        <header className="border-b border-[#1c1916] pb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
            Founder Attention OS · Facilitator Ops
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[0.95] tracking-tight sm:text-6xl">
            Level I pilot operations
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#3d3832]">
            Internal, browser-local session preparation and after-action capture. Nothing here is sent to a server.
            Export the record after each cohort so the evidence can move into the operating system deliberately.
          </p>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#d8d0c4] bg-[#fffdf8] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5c5750]">Preflight</p>
            <p className="mt-2 text-2xl">{preflightReady ? 'Ready' : 'Open'}</p>
          </div>
          <div className="rounded-2xl border border-[#d8d0c4] bg-[#fffdf8] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5c5750]">Clarity delta</p>
            <p className="mt-2 text-2xl">{delta == null ? '—' : delta.toFixed(2)}</p>
          </div>
          <div className="rounded-2xl border border-[#d8d0c4] bg-[#fffdf8] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5c5750]">
              Moises contribution / hour
            </p>
            <p className="mt-2 text-2xl">
              {contributionPerHour == null ? '—' : `$${contributionPerHour.toFixed(0)}`}
            </p>
          </div>
        </section>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <CheckList
            title="Host preflight"
            items={HOST_PREFLIGHT}
            completed={state.hostPreflight}
            onToggle={(id) =>
              setState((current) => ({
                ...current,
                hostPreflight: toggleId(current.hostPreflight, id),
              }))
            }
          />
          <CheckList
            title="Participant pre-session"
            items={PARTICIPANT_PRESESSION}
            completed={state.participantPreflight}
            onToggle={(id) =>
              setState((current) => ({
                ...current,
                participantPreflight: toggleId(current.participantPreflight, id),
              }))
            }
          />
          <CheckList
            title="Facilitator preflight"
            items={FACILITATOR_PREFLIGHT}
            completed={state.facilitatorPreflight}
            onToggle={(id) =>
              setState((current) => ({
                ...current,
                facilitatorPreflight: toggleId(current.facilitatorPreflight, id),
              }))
            }
          />
        </div>

        <section className="mt-12 rounded-2xl border border-[#d8d0c4] bg-[#fffdf8] p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5c5750]">After action</p>
              <h2 className="mt-2 text-3xl tracking-tight">One record per cohort</h2>
            </div>
            <p className="max-w-md text-sm text-[#5c5750]">
              Change one or two things per cohort, not the whole course.
            </p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <TextField label="Host" value={state.report.host} onChange={(value) => updateReport('host', value)} />
            <TextField label="Date" type="date" value={state.report.date} onChange={(value) => updateReport('date', value)} />
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5c5750]">Format</span>
              <select
                value={state.report.format}
                onChange={(event) => updateReport('format', event.target.value as CohortAfterAction['format'])}
                className="mt-2 w-full rounded-lg border border-[#cfc6b8] bg-white px-3 py-2 text-sm"
              >
                <option value="Core">Core</option>
                <option value="Studio">Studio</option>
              </select>
            </label>
            <TextField
              label="Facilitator"
              value={state.report.facilitator}
              onChange={(value) => updateReport('facilitator', value)}
            />
            <TextField
              label="Participants"
              type="number"
              value={state.report.participantCount}
              onChange={(value) => updateReport('participantCount', readNumber(value))}
            />
            <TextField
              label="Completed"
              type="number"
              value={state.report.completionCount}
              onChange={(value) => updateReport('completionCount', readNumber(value))}
            />
            <TextField
              label="Passed assessment"
              type="number"
              value={state.report.passCount}
              onChange={(value) => updateReport('passCount', readNumber(value))}
            />
            <TextField
              label="Founder minutes"
              type="number"
              value={state.report.founderMinutes}
              onChange={(value) => updateReport('founderMinutes', readNumber(value))}
            />
            <TextField
              label="Facilitator minutes"
              type="number"
              value={state.report.facilitatorMinutes}
              onChange={(value) => updateReport('facilitatorMinutes', readNumber(value))}
            />
            <TextField
              label="Gross contribution (optional)"
              type="number"
              value={state.grossContribution ?? ''}
              onChange={(value) =>
                setState((current) => ({ ...current, grossContribution: readNullableNumber(value) }))
              }
            />
            <TextField
              label="Clarity before avg"
              type="number"
              value={state.report.clarityBeforeAverage ?? ''}
              onChange={(value) => updateReport('clarityBeforeAverage', readNullableNumber(value))}
            />
            <TextField
              label="Clarity after avg"
              type="number"
              value={state.report.clarityAfterAverage ?? ''}
              onChange={(value) => updateReport('clarityAfterAverage', readNullableNumber(value))}
            />
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5c5750]">
                Quote permission
              </span>
              <select
                value={state.report.quotePermissionStatus}
                onChange={(event) =>
                  updateReport('quotePermissionStatus', event.target.value as QuotePermissionStatus)
                }
                className="mt-2 w-full rounded-lg border border-[#cfc6b8] bg-white px-3 py-2 text-sm"
              >
                <option value="none">None</option>
                <option value="asked">Asked</option>
                <option value="granted">Granted</option>
                <option value="declined">Declined</option>
              </select>
            </label>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <TextArea label="Reuse intent / 7-day signal" value={state.report.reuseIntent} onChange={(value) => updateReport('reuseIntent', value)} />
            <TextArea label="Top stall point" value={state.report.topStallPoint} onChange={(value) => updateReport('topStallPoint', value)} />
            <TextArea label="Most common friction" value={state.report.mostCommonFriction} onChange={(value) => updateReport('mostCommonFriction', value)} />
            <TextArea label="Top facilitator intervention" value={state.report.topFacilitatorIntervention} onChange={(value) => updateReport('topFacilitatorIntervention', value)} />
            <TextArea label="One recommended change" value={state.report.oneRecommendedChange} onChange={(value) => updateReport('oneRecommendedChange', value)} />
            <TextArea label="One thing not to change" value={state.report.oneThingNotToChange} onChange={(value) => updateReport('oneThingNotToChange', value)} />
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-[#d8d0c4] bg-[#fffdf8] p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5c5750]">Facilitator scorecard</p>
          <h2 className="mt-2 text-3xl tracking-tight">Did the method survive the room?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5c5750]">
            Rate 1–5 after writing evidence elsewhere. This is a signal, not an automatic promotion decision.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FACILITATOR_SCORECARD_CRITERIA.map((criterion) => (
              <label key={criterion.id} className="rounded-xl border border-[#ded6ca] p-4">
                <span className="block text-sm font-medium">{criterion.label}</span>
                <span className="mt-1 block text-xs leading-relaxed text-[#6d665e]">{criterion.prompt}</span>
                <select
                  value={state.scorecard[criterion.id] ?? ''}
                  onChange={(event) =>
                    setState((current) => ({
                      ...current,
                      scorecard: {
                        ...current.scorecard,
                        [criterion.id]: readNumber(event.target.value),
                      },
                    }))
                  }
                  className="mt-3 rounded-md border border-[#cfc6b8] bg-white px-2 py-1 text-sm"
                >
                  <option value="">—</option>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        </section>

        <section className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copyExport}
            className="rounded-full bg-[#1c1916] px-5 py-2 text-sm text-white"
          >
            {copyStatus || 'Copy JSON'}
          </button>
          <button
            type="button"
            onClick={downloadExport}
            className="rounded-full border border-[#1c1916] px-5 py-2 text-sm"
          >
            Download JSON
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-[#b9afa1] px-5 py-2 text-sm text-[#6f675e]"
          >
            Reset local pilot record
          </button>
        </section>
      </div>
    </main>
  )
}
