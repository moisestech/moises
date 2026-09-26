'use client'

import { useState } from 'react'
import {
  FIELD_STATUSES,
  LAB_SAMPLE_LABEL,
  SAMPLE_CARD,
  STRUCTURE_FIELDS,
  structureNotes,
  type FieldStatus,
  type StructureArtifact,
  type StructureFieldKey,
} from '@/content/workshops/artist-infrastructure-lab'
import { LabButton, LabChoice, LabKicker, LabNotes, LabSaved } from './LabChrome'

const EMPTY_FIELDS = {
  title: '',
  creator: '',
  date: '',
  place: '',
  rights: '',
  sourceNote: '',
} as Record<StructureFieldKey, FieldStatus | ''>

export function StructureSorter({
  initial,
  onCommit,
}: {
  initial: StructureArtifact | null
  onCommit: (artifact: StructureArtifact) => void
}) {
  const [fields, setFields] = useState(initial?.fields ?? EMPTY_FIELDS)
  const [notes, setNotes] = useState<string[]>([])
  const [committed, setCommitted] = useState(Boolean(initial?.committed))

  function save() {
    const next: StructureArtifact = { fields, committed: true }
    const problems = structureNotes(next)
    setNotes(problems)
    if (problems.length === 0) {
      setCommitted(true)
      onCommit(next)
    } else {
      setCommitted(false)
    }
  }

  return (
    <section className="space-y-4" aria-labelledby="structure-heading">
      <LabKicker>
        <span id="structure-heading">Metadata Sorter</span>
      </LabKicker>
      <p className="text-sm text-[#5c564e]">{LAB_SAMPLE_LABEL}</p>
      <div className="border border-[#d9d0c3] bg-white p-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0f5f5c]">Source card</p>
        <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-[#5c564e]">Record</dt>
            <dd>{SAMPLE_CARD.title}</dd>
          </div>
          <div>
            <dt className="text-[#5c564e]">Date supplied</dt>
            <dd>{SAMPLE_CARD.date}</dd>
          </div>
          <div>
            <dt className="text-[#5c564e]">Creator</dt>
            <dd>{SAMPLE_CARD.creator}</dd>
          </div>
          <div>
            <dt className="text-[#5c564e]">Rights</dt>
            <dd>{SAMPLE_CARD.rights}</dd>
          </div>
          <div>
            <dt className="text-[#5c564e]">Place suggestion, not on the card</dt>
            <dd>{SAMPLE_CARD.unsupportedPlace}</dd>
          </div>
          <div>
            <dt className="text-[#5c564e]">Source note</dt>
            <dd>{SAMPLE_CARD.sourceNote}</dd>
          </div>
        </dl>
      </div>
      <div className="space-y-4">
        {STRUCTURE_FIELDS.map((field) => (
          <fieldset key={field.key} className="space-y-2">
            <legend className="text-sm font-medium">
              {field.label}
              <span className="mt-1 block font-normal text-[#5c564e]">{field.source}</span>
            </legend>
            <div className="flex flex-wrap gap-2">
              {FIELD_STATUSES.map((status) => (
                <LabChoice
                  key={status.id}
                  selected={fields[field.key] === status.id}
                  testId={`structure-${field.key}-${status.id}`}
                  onClick={() => setFields((current) => ({ ...current, [field.key]: status.id }))}
                >
                  {status.label}
                </LabChoice>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <LabNotes notes={notes} />
      <LabButton testId="structure-save" onClick={save}>
        Save Data Dictionary
      </LabButton>
      {committed ? <LabSaved artifact="Data Dictionary" /> : null}
    </section>
  )
}
