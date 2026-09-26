'use client'

import { useState } from 'react'
import {
  DEPENDENCIES,
  LAB_SAMPLE_LABEL,
  PRESERVE_FALLBACKS,
  preserveNotes,
  type PreserveArtifact,
} from '@/content/workshops/artist-infrastructure-lab'
import { LabButton, LabChoice, LabKicker, LabNotes, LabSaved } from './LabChrome'

export function PreserveLab({
  initial,
  onCommit,
}: {
  initial: PreserveArtifact | null
  onCommit: (artifact: PreserveArtifact) => void
}) {
  const [aiDisabled, setAiDisabled] = useState(initial?.aiDisabled ?? false)
  const [fallback, setFallback] = useState(initial?.fallback ?? '')
  const [recovery, setRecovery] = useState(initial?.recovery ?? '')
  const [notes, setNotes] = useState<string[]>([])
  const [committed, setCommitted] = useState(Boolean(initial?.committed))

  function save() {
    const next: PreserveArtifact = { aiDisabled, fallback, recovery, committed: true }
    const problems = preserveNotes(next)
    setNotes(problems)
    if (problems.length === 0) {
      setCommitted(true)
      onCommit(next)
    } else {
      setCommitted(false)
    }
  }

  return (
    <section className="space-y-4" aria-labelledby="preserve-heading">
      <LabKicker>
        <span id="preserve-heading">Failure Lab</span>
      </LabKicker>
      <p className="text-sm text-[#5c564e]">{LAB_SAMPLE_LABEL}</p>
      <div className="overflow-x-auto border border-[#d9d0c3] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="font-mono text-[11px] uppercase tracking-wide text-[#5c564e]">
            <tr>
              <th className="px-3 py-2 font-normal">Dependency</th>
              <th className="px-3 py-2 font-normal">Purpose</th>
              <th className="px-3 py-2 font-normal">State</th>
            </tr>
          </thead>
          <tbody>
            {DEPENDENCIES.map((item) => {
              const down = item.id === 'ai' && aiDisabled
              return (
                <tr key={item.id} className="border-t border-[#d9d0c3]">
                  <td className="px-3 py-2">{item.name}</td>
                  <td className="px-3 py-2 text-[#5c564e]">{item.purpose}</td>
                  <td className="px-3 py-2">{down ? 'Failed' : 'Available'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <LabButton testId="preserve-disable" onClick={() => setAiDisabled(true)} disabled={aiDisabled}>
        Disable the approved AI service
      </LabButton>
      {aiDisabled ? (
        <p className="border border-[#e2b8a2] bg-[#f8efe8] px-3 py-2 text-sm" data-testid="preserve-failure">
          Failure: suggestions stop. The source CSV, the date range, and the human review role are still available. The outage is not a reason to invent a year.
        </p>
      ) : null}
      <fieldset className="space-y-2" disabled={!aiDisabled}>
        <legend className="text-sm font-medium">Fallback</legend>
        <div className="grid gap-2">
          {PRESERVE_FALLBACKS.map((item) => (
            <LabChoice
              key={item.id}
              selected={fallback === item.id}
              testId={`preserve-fallback-${item.id}`}
              onClick={() => setFallback(item.id)}
            >
              {item.label}
            </LabChoice>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Recovery note</span>
        <textarea
          value={recovery}
          onChange={(event) => setRecovery(event.target.value)}
          rows={3}
          className="border border-[#d9d0c3] bg-white px-3 py-2"
          data-testid="preserve-recovery"
        />
      </label>
      <LabNotes notes={notes} />
      <LabButton testId="preserve-save" onClick={save}>
        Save Preservation Packet
      </LabButton>
      {committed ? <LabSaved artifact="Preservation Packet" /> : null}
    </section>
  )
}
