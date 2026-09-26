'use client'

import { useState } from 'react'
import {
  LAB_SAMPLE_LABEL,
  PROPOSED_CLAIM_SAMPLE,
  RELATE_CLAIMS,
  relateNotes,
  type EdgeState,
  type RelateArtifact,
  type RelateClaim,
} from '@/content/workshops/artist-infrastructure-lab'
import { LabButton, LabChoice, LabGhostButton, LabKicker, LabNotes, LabSaved } from './LabChrome'

const STATES: { id: EdgeState; label: string }[] = [
  { id: 'confirmed', label: 'Confirmed' },
  { id: 'proposed', label: 'Proposed' },
  { id: 'restricted', label: 'Restricted' },
  { id: 'unknown', label: 'Unknown' },
  { id: 'unconnected', label: 'Unconnected' },
]

function emptyClaim(): RelateClaim {
  return {
    state: '',
    relationship: '',
    evidence: '',
    confidence: '',
    visibility: '',
    reviewer: '',
    revision: '',
  }
}

function emptyClaims() {
  return Object.fromEntries(RELATE_CLAIMS.map((claim) => [claim.id, emptyClaim()])) as Record<
    string,
    RelateClaim
  >
}

export function RelateMap({
  initial,
  onCommit,
}: {
  initial: RelateArtifact | null
  onCommit: (artifact: RelateArtifact) => void
}) {
  const [claims, setClaims] = useState(initial?.claims ?? emptyClaims())
  const [nextAction, setNextAction] = useState(initial?.nextAction ?? '')
  const [openId, setOpenId] = useState<string | null>(initial?.claims.institution?.state === 'proposed' ? 'institution' : null)
  const [notes, setNotes] = useState<string[]>([])
  const [committed, setCommitted] = useState(Boolean(initial?.committed))

  function setState(id: string, state: EdgeState) {
    setClaims((current) => ({ ...current, [id]: { ...current[id], state } }))
    setOpenId(state === 'proposed' ? id : openId === id ? null : openId)
  }

  function save() {
    const next: RelateArtifact = { claims, nextAction, committed: true }
    const problems = relateNotes(next)
    setNotes(problems)
    if (problems.length === 0) {
      setCommitted(true)
      onCommit(next)
    } else {
      setCommitted(false)
    }
  }

  const drawer = openId ? claims[openId] : null

  return (
    <section className="space-y-4" aria-labelledby="relate-heading">
      <LabKicker>
        <span id="relate-heading">Context Network Map</span>
      </LabKicker>
      <p className="text-sm text-[#5c564e]">{LAB_SAMPLE_LABEL}</p>
      <div className="border border-[#0f5f5c] bg-white px-3 py-4 text-center text-sm">Source record</div>
      <ul className="space-y-3">
        {RELATE_CLAIMS.map((claim) => (
          <li key={claim.id} className="space-y-2 border border-[#d9d0c3] bg-white p-3">
            <p className="text-sm font-medium">{claim.label}</p>
            <div className="flex flex-wrap gap-2">
              {STATES.map((state) => (
                <LabChoice
                  key={state.id}
                  selected={claims[claim.id]?.state === state.id}
                  testId={`relate-${claim.id}-${state.id}`}
                  onClick={() => setState(claim.id, state.id)}
                >
                  {state.label}
                </LabChoice>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {drawer && openId ? (
        <div className="space-y-3 border border-[#c4511a] bg-[#f8efe8] p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-medium">Claim drawer — {openId}</h3>
            <LabGhostButton
              testId="relate-sample-claim"
              onClick={() =>
                setClaims((current) => ({
                  ...current,
                  [openId]: { ...current[openId], ...PROPOSED_CLAIM_SAMPLE },
                }))
              }
            >
              Use sample evidence
            </LabGhostButton>
          </div>
          {(
            [
              ['relationship', 'Relationship'],
              ['evidence', 'Evidence'],
              ['confidence', 'Confidence'],
              ['visibility', 'Visibility'],
              ['reviewer', 'Reviewer'],
              ['revision', 'Revision note'],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="grid gap-1 text-sm">
              <span>{label}</span>
              <input
                value={drawer[key]}
                onChange={(event) =>
                  setClaims((current) => ({
                    ...current,
                    [openId]: { ...current[openId], [key]: event.target.value },
                  }))
                }
                className="border border-[#d9d0c3] bg-white px-3 py-2"
                data-testid={`relate-drawer-${key}`}
              />
            </label>
          ))}
        </div>
      ) : null}
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Reviewed next action</span>
        <textarea
          value={nextAction}
          onChange={(event) => setNextAction(event.target.value)}
          rows={2}
          className="border border-[#d9d0c3] bg-white px-3 py-2"
          data-testid="relate-next"
        />
      </label>
      <LabNotes notes={notes} />
      <LabButton testId="relate-save" onClick={save}>
        Save Context Network
      </LabButton>
      {committed ? <LabSaved artifact="Context Network" /> : null}
    </section>
  )
}
