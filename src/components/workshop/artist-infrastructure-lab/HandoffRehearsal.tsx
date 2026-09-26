'use client'

import { useState } from 'react'
import {
  HANDOFF_CHOICES,
  HANDOFF_FALLBACK,
  LAB_SAMPLE_LABEL,
  THIRTY_DAY_SAMPLE,
  handoffNotes,
  projectToJson,
  projectToMarkdown,
  type HandoffArtifact,
  type HandoffChoice,
  type LabProject,
} from '@/content/workshops/artist-infrastructure-lab'
import { LabButton, LabChoice, LabGhostButton, LabKicker, LabNotes, LabSaved } from './LabChrome'

export function HandoffRehearsal({
  initial,
  project,
  onCommit,
}: {
  initial: HandoffArtifact | null
  project: LabProject
  onCommit: (artifact: HandoffArtifact) => void
}) {
  const [guideOpened, setGuideOpened] = useState(initial?.guideOpened ?? false)
  const [failureSeen, setFailureSeen] = useState(initial?.failureSeen ?? false)
  const [fallback, setFallback] = useState(initial?.fallback ?? '')
  const [choice, setChoice] = useState<HandoffChoice | ''>(initial?.choice ?? '')
  const [thirtyDay, setThirtyDay] = useState(initial?.thirtyDay ?? '')
  const [notes, setNotes] = useState<string[]>([])
  const [committed, setCommitted] = useState(Boolean(initial?.committed))

  function current(): HandoffArtifact {
    return { guideOpened, failureSeen, fallback, choice, thirtyDay, committed: true }
  }

  function save() {
    const next = current()
    const problems = handoffNotes(next)
    setNotes(problems)
    if (problems.length === 0) {
      setCommitted(true)
      onCommit(next)
    } else {
      setCommitted(false)
    }
  }

  function download(kind: 'md' | 'json') {
    const saved = { ...project, 'hand-off': current() }
    const text = kind === 'md' ? projectToMarkdown(saved) : projectToJson(saved)
    const blob = new Blob([text], { type: kind === 'md' ? 'text/markdown' : 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = kind === 'md' ? 'artist-infrastructure-lab-package.md' : 'artist-infrastructure-lab-package.json'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="space-y-4" aria-labelledby="handoff-heading">
      <LabKicker>
        <span id="handoff-heading">Handoff Rehearsal</span>
      </LabKicker>
      <p className="text-sm text-[#5c564e]">{LAB_SAMPLE_LABEL} A second person operates this pass.</p>
      <ol className="space-y-3">
        <li className="space-y-2 border border-[#d9d0c3] bg-white p-3">
          <p className="text-sm font-medium">1. Open the operating guide</p>
          <p className="text-sm text-[#5c564e]">
            The guide names the source date, the rights hold, the restricted shelf mark, and the reviewer. It does not include a password.
          </p>
          <LabButton testId="handoff-guide" onClick={() => setGuideOpened(true)} disabled={guideOpened}>
            {guideOpened ? 'Guide open' : 'Open the operating guide'}
          </LabButton>
        </li>
        <li className="space-y-2 border border-[#d9d0c3] bg-white p-3">
          <p className="text-sm font-medium">2. Run the ordinary path</p>
          <LabButton
            testId="handoff-run"
            onClick={() => setFailureSeen(true)}
            disabled={!guideOpened || failureSeen}
          >
            {failureSeen ? 'Failure recorded' : 'Try to export'}
          </LabButton>
          {failureSeen ? (
            <p className="text-sm text-[#7a3412]" data-testid="handoff-failure">
              The account credential owner is missing. The export stops. The source CSV is still in the packet.
            </p>
          ) : null}
        </li>
        <li className="space-y-2 border border-[#d9d0c3] bg-white p-3">
          <p className="text-sm font-medium">3. Choose a fallback</p>
          <LabChoice
            selected={fallback === HANDOFF_FALLBACK}
            testId="handoff-fallback"
            onClick={() => setFallback(HANDOFF_FALLBACK)}
          >
            {HANDOFF_FALLBACK}
          </LabChoice>
        </li>
      </ol>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">What should happen next?</legend>
        <div className="flex flex-wrap gap-2">
          {HANDOFF_CHOICES.map((item) => (
            <LabChoice
              key={item.id}
              selected={choice === item.id}
              testId={`handoff-choice-${item.id}`}
              onClick={() => setChoice(item.id)}
            >
              {item.label}
            </LabChoice>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">30-day plan</span>
        <textarea
          value={thirtyDay}
          onChange={(event) => setThirtyDay(event.target.value)}
          rows={3}
          className="border border-[#d9d0c3] bg-white px-3 py-2"
          data-testid="handoff-plan"
        />
      </label>
      <LabGhostButton testId="handoff-sample-plan" onClick={() => setThirtyDay(THIRTY_DAY_SAMPLE)}>
        Use the sample 30-day plan
      </LabGhostButton>
      <LabNotes notes={notes} />
      <div className="flex flex-wrap gap-2">
        <LabButton testId="handoff-save" onClick={save}>
          Save Operating Guide and 30-Day Plan
        </LabButton>
        <LabGhostButton testId="handoff-download-md" onClick={() => download('md')}>
          Download Markdown
        </LabGhostButton>
        <LabGhostButton testId="handoff-download-json" onClick={() => download('json')}>
          Download JSON
        </LabGhostButton>
      </div>
      {committed ? <LabSaved artifact="Operating Guide and 30-Day Plan" /> : null}
    </section>
  )
}
