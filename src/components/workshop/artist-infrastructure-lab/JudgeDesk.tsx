'use client'

import { useState } from 'react'
import {
  JUDGE_CASES,
  JUDGE_CLAUSES,
  LAB_SAMPLE_LABEL,
  SAMPLE_CARD,
  judgeNotes,
  type CaseMark,
  type ClauseMark,
  type JudgeArtifact,
} from '@/content/workshops/artist-infrastructure-lab'
import { LabButton, LabChoice, LabKicker, LabNotes, LabSaved } from './LabChrome'

function emptyClauses() {
  return Object.fromEntries(JUDGE_CLAUSES.map((clause) => [clause.id, ''])) as Record<string, ClauseMark | ''>
}

function emptyCases() {
  return Object.fromEntries(JUDGE_CASES.map((item) => [item.id, ''])) as Record<string, CaseMark | ''>
}

export function JudgeDesk({
  initial,
  onCommit,
}: {
  initial: JudgeArtifact | null
  onCommit: (artifact: JudgeArtifact) => void
}) {
  const [approver, setApprover] = useState(initial?.approver ?? '')
  const [clauses, setClauses] = useState(initial?.clauses ?? emptyClauses())
  const [cases, setCases] = useState(initial?.cases ?? emptyCases())
  const [notes, setNotes] = useState<string[]>([])
  const [committed, setCommitted] = useState(Boolean(initial?.committed))

  function save() {
    const next: JudgeArtifact = { approver, clauses, cases, committed: true }
    const problems = judgeNotes(next)
    setNotes(problems)
    if (problems.length === 0) {
      setCommitted(true)
      onCommit(next)
    } else {
      setCommitted(false)
    }
  }

  return (
    <section className="space-y-5" aria-labelledby="judge-heading">
      <LabKicker>
        <span id="judge-heading">Evidence Review Desk</span>
      </LabKicker>
      <p className="text-sm text-[#5c564e]">{LAB_SAMPLE_LABEL}</p>
      <div className="grid gap-3 md:grid-cols-3">
        <article className="border border-[#0f5f5c] bg-white p-4">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0f5f5c]">Supplied source</h3>
          <p className="mt-2 text-lg">{SAMPLE_CARD.date}</p>
          <p className="mt-2 text-sm">The card supports this range, including the question mark.</p>
        </article>
        <article className="border border-[#c4511a] bg-[#f8efe8] p-4">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#c4511a]">Unsupported claim</h3>
          <p className="mt-2 text-lg">{SAMPLE_CARD.unsupportedYear}</p>
          <p className="mt-2 text-sm">Specific, fluent, and not on the card. Hold.</p>
        </article>
        <article className="border border-[#1c1916] bg-white p-4">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em]">Responsible revision</h3>
          <p className="mt-2 text-lg">Date uncertain; source supplies {SAMPLE_CARD.date}</p>
          <p className="mt-2 text-sm">The next action may describe the uncertainty. It may not replace it.</p>
        </article>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Who can authorize the next action?</span>
        <input
          value={approver}
          onChange={(event) => setApprover(event.target.value)}
          className="border border-[#d9d0c3] bg-white px-3 py-2"
          data-testid="judge-approver"
        />
      </label>
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Clauses</h3>
        {JUDGE_CLAUSES.map((clause) => (
          <div key={clause.id} className="space-y-2 border border-[#d9d0c3] bg-white p-3">
            <p className="text-sm">{clause.text}</p>
            <div className="flex flex-wrap gap-2">
              {(['supported', 'unsupported'] as const).map((mark) => (
                <LabChoice
                  key={mark}
                  selected={clauses[clause.id] === mark}
                  testId={`judge-clause-${clause.id}-${mark}`}
                  onClick={() => setClauses((current) => ({ ...current, [clause.id]: mark }))}
                >
                  {mark === 'supported' ? 'Supported' : 'Unsupported'}
                </LabChoice>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Five cases</h3>
        {JUDGE_CASES.map((item) => (
          <div key={item.id} className="space-y-2 border border-[#d9d0c3] bg-white p-3">
            <p className="text-sm">{item.text}</p>
            <div className="flex flex-wrap gap-2">
              {(['pass', 'hold'] as const).map((mark) => (
                <LabChoice
                  key={mark}
                  selected={cases[item.id] === mark}
                  testId={`judge-case-${item.id}-${mark}`}
                  onClick={() => setCases((current) => ({ ...current, [item.id]: mark }))}
                >
                  {mark === 'pass' ? 'Pass' : 'Hold'}
                </LabChoice>
              ))}
            </div>
          </div>
        ))}
      </div>
      <LabNotes notes={notes} />
      <LabButton testId="judge-save" onClick={save}>
        Save AI Review Contract
      </LabButton>
      {committed ? <LabSaved artifact="AI Review Contract" /> : null}
    </section>
  )
}
