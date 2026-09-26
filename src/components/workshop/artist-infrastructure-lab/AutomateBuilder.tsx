'use client'

import { useState } from 'react'
import {
  LAB_SAMPLE_LABEL,
  SAMPLE_RECORDS,
  SEEDED_AI_SUGGESTION,
  automateNotes,
  type AutomateArtifact,
  type AutomateRun,
  type HumanDecision,
} from '@/content/workshops/artist-infrastructure-lab'
import { LabButton, LabChoice, LabKicker, LabNotes, LabSaved } from './LabChrome'

const EMPTY_RUN: AutomateRun = { decision: '', reason: '', refused: false }

function emptyArtifact(useAi = false): AutomateArtifact {
  return {
    useAi,
    runs: { 'A-014': { ...EMPTY_RUN }, 'B-015': { ...EMPTY_RUN } },
    committed: false,
  }
}

const DECISIONS: { id: HumanDecision; label: string }[] = [
  { id: 'approve', label: 'Approve' },
  { id: 'revise', label: 'Revise' },
  { id: 'hold', label: 'Hold' },
]

export function AutomateBuilder({
  initial,
  onCommit,
}: {
  initial: AutomateArtifact | null
  onCommit: (artifact: AutomateArtifact) => void
}) {
  const [draft, setDraft] = useState<AutomateArtifact>(initial ?? emptyArtifact())
  const [notes, setNotes] = useState<string[]>([])
  const [committed, setCommitted] = useState(Boolean(initial?.committed))

  function setRun(id: 'A-014' | 'B-015', patch: Partial<AutomateRun>) {
    setDraft((current) => ({
      ...current,
      runs: { ...current.runs, [id]: { ...current.runs[id], ...patch } },
    }))
  }

  function save() {
    const next = { ...draft, committed: true }
    const problems = automateNotes(next)
    setNotes(problems)
    if (problems.length === 0) {
      setCommitted(true)
      onCommit(next)
    } else {
      setCommitted(false)
    }
  }

  return (
    <section className="space-y-5" aria-labelledby="automate-heading">
      <LabKicker>
        <span id="automate-heading">Workflow Builder</span>
      </LabKicker>
      <p className="text-sm text-[#5c564e]">{LAB_SAMPLE_LABEL}</p>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Suggestion route</legend>
        <div className="flex flex-wrap gap-2">
          <LabChoice
            selected={!draft.useAi}
            testId="automate-no-ai"
            onClick={() => setDraft((current) => ({ ...current, useAi: false }))}
          >
            No-AI route
          </LabChoice>
          <LabChoice
            selected={draft.useAi}
            testId="automate-use-ai"
            onClick={() => setDraft((current) => ({ ...current, useAi: true }))}
          >
            Review a seeded suggestion
          </LabChoice>
        </div>
      </fieldset>
      <ol className="grid gap-2 text-sm sm:grid-cols-2">
        {['Source intake', 'Parse supplied fields', draft.useAi ? 'Optional suggestion' : 'No suggestion', 'Evidence review', 'Human approve, revise, or hold', 'Activity log', 'Export or stop'].map(
          (step) => (
            <li key={step} className="border border-[#d9d0c3] bg-white px-3 py-2">
              {step}
            </li>
          ),
        )}
      </ol>
      {draft.useAi ? (
        <p className="border border-[#e2b8a2] bg-[#f8efe8] px-3 py-2 text-sm">{SEEDED_AI_SUGGESTION}</p>
      ) : (
        <p className="border border-[#d9d0c3] bg-white px-3 py-2 text-sm">
          No-AI route. Nothing is suggested. The source values still have to be reviewed.
        </p>
      )}
      {SAMPLE_RECORDS.map((record) => {
        const run = draft.runs[record.id]
        const refused = !record.rightsSupplied && run.decision !== '' && run.decision !== 'hold'
        const trace = buildTrace(record.id, record.rightsSupplied, draft.useAi, run)
        return (
          <article key={record.id} className="space-y-3 border border-[#d9d0c3] bg-white p-4">
            <header>
              <h3 className="text-base font-medium">{record.id}</h3>
              <p className="text-sm text-[#5c564e]">{record.summary}</p>
            </header>
            <div className="flex flex-wrap gap-2">
              {DECISIONS.map((decision) => (
                <LabChoice
                  key={decision.id}
                  selected={run.decision === decision.id}
                  testId={`automate-${record.id}-${decision.id}`}
                  onClick={() =>
                    setRun(record.id, {
                      decision: decision.id,
                      refused: !record.rightsSupplied && decision.id !== 'hold',
                    })
                  }
                >
                  {decision.label}
                </LabChoice>
              ))}
            </div>
            <label className="grid gap-1 text-sm">
              <span>Reason for the log</span>
              <input
                value={run.reason}
                onChange={(event) => setRun(record.id, { reason: event.target.value })}
                className="border border-[#d9d0c3] px-3 py-2"
                data-testid={`automate-${record.id}-reason`}
              />
            </label>
            {refused ? (
              <p className="text-sm text-[#7a3412]">
                Refused. Missing rights cannot be approved or revised into an export.
              </p>
            ) : null}
            <ol className="space-y-1 font-mono text-[12px] leading-relaxed text-[#3d3832]">
              {trace.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </article>
        )
      })}
      <LabNotes notes={notes} />
      <LabButton testId="automate-save" onClick={save}>
        Save Core Workflow and Execution Log
      </LabButton>
      {committed ? <LabSaved artifact="Core Workflow and Execution Log" /> : null}
    </section>
  )
}

function buildTrace(
  id: string,
  rightsSupplied: boolean,
  useAi: boolean,
  run: AutomateRun,
): string[] {
  const lines = [
    `Intake — read ${id}. Actor: learner. Prior state: pending.`,
    rightsSupplied ? 'Parse — rights field supplied.' : 'Parse — rights field missing.',
  ]
  if (useAi) lines.push('Suggestion — recorded. It cannot publish or choose the route.')
  else lines.push('Suggestion — skipped on the no-AI route.')
  lines.push('Evidence review — compare the record with the source card.')
  if (!run.decision) {
    lines.push('Human decision — waiting.')
    return lines
  }
  lines.push(`Human decision — ${run.decision}. Reason: ${run.reason || 'not yet written'}.`)
  if (!rightsSupplied && run.decision !== 'hold') {
    lines.push('Stop — missing rights. Export refused. The attempt is logged.')
    return lines
  }
  if (run.decision === 'hold') {
    lines.push('Stop — held. No export, no message, no publication.')
    return lines
  }
  lines.push('Export — packet prepared in this browser. Nothing was sent.')
  return lines
}
