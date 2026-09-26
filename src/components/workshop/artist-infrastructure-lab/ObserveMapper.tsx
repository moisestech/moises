'use client'

import { useState } from 'react'
import {
  KEPT_HUMAN_OPTIONS,
  LAB_SAMPLE_LABEL,
  OBSERVE_SAMPLE,
  observeReady,
  type ObserveArtifact,
} from '@/content/workshops/artist-infrastructure-lab'
import { LabButton, LabChoice, LabGhostButton, LabKicker, LabNotes, LabSaved } from './LabChrome'

const EMPTY: ObserveArtifact = {
  trigger: '',
  people: '',
  tools: '',
  decisions: '',
  bottleneck: '',
  consequence: '',
  keptHuman: '',
  committed: false,
}

const FIELDS: { key: keyof typeof OBSERVE_SAMPLE; label: string }[] = [
  { key: 'trigger', label: 'Trigger' },
  { key: 'people', label: 'People' },
  { key: 'tools', label: 'Tools' },
  { key: 'decisions', label: 'Decisions' },
  { key: 'bottleneck', label: 'Bottleneck' },
  { key: 'consequence', label: 'Consequence' },
]

export function ObserveMapper({
  initial,
  onCommit,
}: {
  initial: ObserveArtifact | null
  onCommit: (artifact: ObserveArtifact) => void
}) {
  const [draft, setDraft] = useState<ObserveArtifact>(initial ?? EMPTY)
  const [notes, setNotes] = useState<string[]>([])

  function save() {
    const next = { ...draft, committed: true }
    const problems = observeReady(next)
    setNotes(problems)
    if (problems.length === 0) {
      setDraft(next)
      onCommit(next)
    }
  }

  return (
    <section className="space-y-4" aria-labelledby="observe-heading">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <LabKicker>
          <span id="observe-heading">Data Biography Mapper</span>
        </LabKicker>
        <LabGhostButton
          testId="observe-sample"
          onClick={() => setDraft((current) => ({ ...current, ...OBSERVE_SAMPLE }))}
        >
          Use the sample notes
        </LabGhostButton>
      </div>
      <p className="text-sm text-[#5c564e]">{LAB_SAMPLE_LABEL}</p>
      <div className="grid gap-3">
        {FIELDS.map((field) => (
          <label key={field.key} className="grid gap-1 text-sm">
            <span className="font-medium">{field.label}</span>
            <textarea
              value={draft[field.key]}
              onChange={(event) =>
                setDraft((current) => ({ ...current, [field.key]: event.target.value }))
              }
              rows={2}
              className="border border-[#d9d0c3] bg-white px-3 py-2"
              data-testid={`observe-${field.key}`}
            />
          </label>
        ))}
      </div>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">One step kept human</legend>
        <div className="grid gap-2">
          {KEPT_HUMAN_OPTIONS.map((option) => (
            <LabChoice
              key={option.id}
              selected={draft.keptHuman === option.label}
              testId={`observe-human-${option.id}`}
              onClick={() => setDraft((current) => ({ ...current, keptHuman: option.label }))}
            >
              {option.label}
            </LabChoice>
          ))}
        </div>
      </fieldset>
      <LabNotes notes={notes} />
      <LabButton testId="observe-save" onClick={save}>
        Save Workflow Brief
      </LabButton>
      {draft.committed ? <LabSaved artifact="Workflow Brief" /> : null}
    </section>
  )
}
