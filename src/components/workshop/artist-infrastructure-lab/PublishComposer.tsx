'use client'

import { useState } from 'react'
import {
  LAB_INTERACTION_LABEL,
  LAB_SAMPLE_LABEL,
  PUBLISH_AUDIENCES,
  PUBLISH_START_ORDER,
  SAMPLE_CARD,
  STORY_LAYERS,
  publishNotes,
  type PublishArtifact,
  type StoryLayerId,
} from '@/content/workshops/artist-infrastructure-lab'
import { LabButton, LabChoice, LabKicker, LabNotes, LabSaved } from './LabChrome'

const LAYER_COPY = Object.fromEntries(STORY_LAYERS.map((layer) => [layer.id, layer])) as Record<
  StoryLayerId,
  (typeof STORY_LAYERS)[number]
>

export function PublishComposer({
  initial,
  onCommit,
}: {
  initial: PublishArtifact | null
  onCommit: (artifact: PublishArtifact) => void
}) {
  const [order, setOrder] = useState<StoryLayerId[]>(initial?.order ?? [...PUBLISH_START_ORDER])
  const [audience, setAudience] = useState(initial?.audience ?? '')
  const [gapVisible, setGapVisible] = useState(initial?.gapVisible ?? false)
  const [notes, setNotes] = useState<string[]>([])
  const [committed, setCommitted] = useState(Boolean(initial?.committed))

  function move(index: number, direction: -1 | 1) {
    const next = [...order]
    const target = index + direction
    if (target < 0 || target >= next.length) return
    const [item] = next.splice(index, 1)
    next.splice(target, 0, item)
    setOrder(next)
  }

  function save() {
    const next: PublishArtifact = { order, audience, gapVisible, committed: true }
    const problems = publishNotes(next)
    setNotes(problems)
    if (problems.length === 0) {
      setCommitted(true)
      onCommit(next)
    } else {
      setCommitted(false)
    }
  }

  return (
    <section className="space-y-4" aria-labelledby="publish-heading">
      <LabKicker>
        <span id="publish-heading">Story Surface Composer</span>
      </LabKicker>
      <p className="text-sm text-[#5c564e]">{LAB_SAMPLE_LABEL}</p>
      <p className="text-sm">{LAB_INTERACTION_LABEL}</p>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Audience</legend>
        <div className="flex flex-wrap gap-2">
          {PUBLISH_AUDIENCES.map((item) => (
            <LabChoice
              key={item}
              selected={audience === item}
              testId={`publish-audience-${item}`}
              onClick={() => setAudience(item)}
            >
              {item}
            </LabChoice>
          ))}
        </div>
      </fieldset>
      <ol className="space-y-2">
        {order.map((id, index) => {
          const layer = LAYER_COPY[id]
          return (
            <li key={id} className="flex flex-wrap items-center justify-between gap-3 border border-[#d9d0c3] bg-white p-3">
              <div>
                <p className="text-sm font-medium">
                  {index + 1}. {layer.label}
                </p>
                <p className="text-sm text-[#5c564e]">{layer.body}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="border border-[#1c1916] px-2 py-1 text-xs"
                  onClick={() => move(index, -1)}
                  data-testid={`publish-up-${id}`}
                >
                  Up
                </button>
                <button
                  type="button"
                  className="border border-[#1c1916] px-2 py-1 text-xs"
                  onClick={() => move(index, 1)}
                  data-testid={`publish-down-${id}`}
                >
                  Down
                </button>
              </div>
            </li>
          )
        })}
      </ol>
      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          checked={gapVisible}
          onChange={(event) => setGapVisible(event.target.checked)}
          data-testid="publish-gap"
        />
        <span>Leave the date gap uncovered. The public surface still shows {SAMPLE_CARD.date}, not an exact year.</span>
      </label>
      <LabNotes notes={notes} />
      <LabButton testId="publish-save" onClick={save}>
        Save Accessible Storyboard
      </LabButton>
      {committed ? <LabSaved artifact="Accessible Storyboard" /> : null}
    </section>
  )
}
