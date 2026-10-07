'use client'

import { useEffect, useMemo, useState } from 'react'
import type {
  ArtifactField,
  ParticipantArtifact,
} from '@/content/workshops/ai-daily-operator/artifacts'

type Answers = Record<string, string>

function storageKey(artifact: ParticipantArtifact) {
  return `ai-daily-operator:artifact:${artifact.slug}`
}

function inputClass() {
  return 'mt-2 w-full border border-[#cfc5b7] bg-[#fbf7f1] px-3 py-2 text-sm leading-relaxed text-[#1c1916] outline-none transition focus:border-[#0f5f5c]'
}

function renderFieldInput(
  field: ArtifactField,
  value: string,
  onChange: (value: string) => void,
) {
  if (field.kind === 'choice' && field.options) {
    return (
      <select value={value} onChange={(event) => onChange(event.target.value)} className={inputClass()}>
        <option value="">Select…</option>
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }

  if (field.kind === 'short') {
    return (
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass()}
        placeholder="Your answer"
      />
    )
  }

  return (
    <textarea
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`${inputClass()} min-h-28 resize-y`}
      placeholder={field.kind === 'table' ? 'Use one line per item. Add the evidence or why it matters.' : 'Your answer'}
    />
  )
}

function artifactAsText(artifact: ParticipantArtifact, answers: Answers) {
  const lines = [
    artifact.title,
    artifact.purpose,
    '',
  ]

  for (const section of artifact.sections) {
    lines.push(section.title)
    lines.push(section.purpose)

    for (const field of section.fields) {
      lines.push(`${field.label}:`)
      lines.push(answers[field.id]?.trim() || '[blank]')
      lines.push('')
    }
  }

  return lines.join('\n')
}

export function ArtifactWorksheet({
  artifact,
}: {
  artifact: ParticipantArtifact
}) {
  const [answers, setAnswers] = useState<Answers>({})
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey(artifact))
      if (stored) setAnswers(JSON.parse(stored) as Answers)
    } catch {
      // The worksheet remains usable without local persistence.
    }
  }, [artifact])

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey(artifact), JSON.stringify(answers))
    } catch {
      // The worksheet remains usable without local persistence.
    }
  }, [answers, artifact])

  const completed = useMemo(() => {
    const fields = artifact.sections.flatMap((section) => section.fields)
    const answered = fields.filter((field) => answers[field.id]?.trim()).length
    return { answered, total: fields.length }
  }, [answers, artifact])

  const setField = (fieldId: string, value: string) => {
    setAnswers((current) => ({ ...current, [fieldId]: value }))
  }

  const copyArtifact = async () => {
    await navigator.clipboard.writeText(artifactAsText(artifact, answers))
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const clearArtifact = () => {
    if (!window.confirm(`Clear all answers in ${artifact.title}?`)) return
    setAnswers({})
  }

  return (
    <article className="border-t border-[#1c1916] pt-7 print:break-before-page">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
            Artifact {String(artifact.n).padStart(2, '0')} · Level {artifact.level}
          </p>
          <h2 className="mt-2 text-3xl tracking-tight">{artifact.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3d3832]">{artifact.purpose}</p>
          <p className="mt-3 text-xs leading-relaxed text-[#5c564e]">
            Done when: {artifact.completionRule}
          </p>
        </div>
        <div className="print:hidden">
          <p className="font-mono text-[11px] text-[#0f5f5c]">
            {completed.answered}/{completed.total} fields
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={copyArtifact} className="border border-[#1c1916] px-3 py-2 text-xs">
              {copied ? 'Copied' : 'Copy as text'}
            </button>
            <button type="button" onClick={() => window.print()} className="border border-[#1c1916] px-3 py-2 text-xs">
              Print / PDF
            </button>
            <button type="button" onClick={clearArtifact} className="border border-[#d9d0c3] px-3 py-2 text-xs text-[#7a3412]">
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-10">
        {artifact.sections.map((section) => (
          <section key={section.id}>
            <h3 className="text-xl tracking-tight">{section.title}</h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#5c564e]">{section.purpose}</p>
            <div className="mt-5 grid gap-5">
              {section.fields.map((field) => (
                <label key={field.id} className="block">
                  <span className="text-sm font-medium">{field.label}</span>
                  <span className="mt-1 block max-w-2xl text-xs leading-relaxed text-[#5c564e]">{field.prompt}</span>
                  {field.help ? (
                    <span className="mt-1 block max-w-2xl text-xs leading-relaxed text-[#7a3412]">{field.help}</span>
                  ) : null}
                  {renderFieldInput(field, answers[field.id] ?? '', (value) => setField(field.id, value))}
                </label>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
