'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { LEVEL_I_ARTIFACTS } from '@/content/workshops/ai-daily-operator/artifacts'
import {
  LEVEL_I_ASSESSMENT,
  LEVEL_I_ASSESSMENT_PASS_COUNT,
} from '@/content/workshops/ai-daily-operator/level-i-assessment'

type Answers = Record<string, string>

type StoredAssessment = {
  answers?: Answers
  submitted?: boolean
}

type EvidenceState = {
  challengedPriority: boolean
  checkedEvidence: boolean
  frictionCaptured: boolean
  frictionNote: string
}

const EVIDENCE_KEY = 'ai-daily-operator:level-i-completion-evidence'
const ASSESSMENT_KEY = 'ai-daily-operator:level-i-assessment'
const PROGRESS_EVENT = 'ai-daily-operator:progress-update'

function artifactStorageKey(slug: string) {
  return `ai-daily-operator:artifact:${slug}`
}

function safeReadJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function LevelICompletionSummary() {
  const [tick, setTick] = useState(0)
  const [evidence, setEvidence] = useState<EvidenceState>({
    challengedPriority: false,
    checkedEvidence: false,
    frictionCaptured: false,
    frictionNote: '',
  })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setEvidence(
      safeReadJson<EvidenceState>(EVIDENCE_KEY, {
        challengedPriority: false,
        checkedEvidence: false,
        frictionCaptured: false,
        frictionNote: '',
      }),
    )
  }, [])

  useEffect(() => {
    const refresh = () => setTick((value) => value + 1)
    window.addEventListener(PROGRESS_EVENT, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(PROGRESS_EVENT, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(EVIDENCE_KEY, JSON.stringify(evidence))
      window.dispatchEvent(new Event(PROGRESS_EVENT))
    } catch {
      // Completion state remains usable without persistence.
    }
  }, [evidence])

  const progress = useMemo(() => {
    if (typeof window === 'undefined') {
      return {
        artifacts: [],
        allArtifactsComplete: false,
        assessmentScore: 0,
        assessmentSubmitted: false,
        assessmentPassed: false,
      }
    }

    const artifacts = LEVEL_I_ARTIFACTS.map((artifact) => {
      const answers = safeReadJson<Answers>(artifactStorageKey(artifact.slug), {})
      const fields = artifact.sections.flatMap((section) => section.fields)
      const answered = fields.filter((field) => answers[field.id]?.trim()).length
      return {
        slug: artifact.slug,
        title: artifact.title,
        answered,
        total: fields.length,
        complete: answered === fields.length,
      }
    })

    const assessment = safeReadJson<StoredAssessment>(ASSESSMENT_KEY, {})
    const assessmentAnswers = assessment.answers ?? {}
    const assessmentScore = LEVEL_I_ASSESSMENT.reduce(
      (total, question) =>
        total +
        (assessmentAnswers[question.id] === question.correctOptionId ? 1 : 0),
      0,
    )

    return {
      artifacts,
      allArtifactsComplete: artifacts.every((artifact) => artifact.complete),
      assessmentScore,
      assessmentSubmitted: Boolean(assessment.submitted),
      assessmentPassed:
        Boolean(assessment.submitted) &&
        assessmentScore >= LEVEL_I_ASSESSMENT_PASS_COUNT,
    }
  }, [tick])

  const evidenceComplete =
    evidence.challengedPriority &&
    evidence.checkedEvidence &&
    evidence.frictionCaptured &&
    evidence.frictionNote.trim().length > 0

  const complete =
    progress.allArtifactsComplete &&
    progress.assessmentPassed &&
    evidenceComplete

  const updateEvidence = useCallback(
    <K extends keyof EvidenceState>(key: K, value: EvidenceState[K]) => {
      setEvidence((current) => ({ ...current, [key]: value }))
    },
    [],
  )

  const summaryText = useMemo(() => {
    const artifactLines = progress.artifacts.map(
      (artifact) =>
        `- ${artifact.title}: ${artifact.answered}/${artifact.total} fields`,
    )
    return [
      'Founder Attention OS — Level I completion summary',
      '',
      `Status: ${complete ? 'COMPLETE' : 'IN PROGRESS'}`,
      `Competency check: ${progress.assessmentScore}/${LEVEL_I_ASSESSMENT.length}${
        progress.assessmentPassed ? ' — passed' : ''
      }`,
      '',
      'Artifacts',
      ...artifactLines,
      '',
      'Evidence',
      `- Challenged at least one priority: ${evidence.challengedPriority ? 'yes' : 'no'}`,
      `- Checked Fact / Interpretation / Recommendation: ${evidence.checkedEvidence ? 'yes' : 'no'}`,
      `- Captured one observed friction: ${evidence.frictionCaptured ? 'yes' : 'no'}`,
      `- Friction note: ${evidence.frictionNote.trim() || '[blank]'}`,
      '',
      'Next step: run the Daily Operating Brief for seven days and use corrections as evidence for the next system improvement.',
    ].join('\n')
  }, [complete, evidence, progress])

  const copySummary = async () => {
    await navigator.clipboard.writeText(summaryText)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section
      id="completion"
      className="scroll-mt-28 pt-24"
      aria-labelledby="completion-heading"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
        Completion state
      </p>
      <div className="mt-3 grid gap-8 border-t border-[#1c1916] pt-6 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div>
          <h2 id="completion-heading" className="text-4xl tracking-tight">
            {complete ? 'Level I evidence complete' : 'Finish the evidence, not just the lesson'}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#3d3832]">
            This browser summary combines your four worksheets, the competency
            check, and three practical confirmations. It is a completion record
            for the workshop prototype, not a professional certification.
          </p>
        </div>
        <div className="border border-[#d9d0c3] bg-[#fbf7f1] p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5c564e]">
            Current state
          </p>
          <p className="mt-2 text-3xl tracking-tight">
            {complete ? 'Complete' : 'In progress'}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#5c564e]">
            Assessment {progress.assessmentScore}/{LEVEL_I_ASSESSMENT.length}
            {progress.assessmentPassed ? ' · passed' : ''}
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {progress.artifacts.map((artifact) => (
          <div key={artifact.slug} className="border-t border-[#d9d0c3] pt-4">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-sm font-medium">{artifact.title}</p>
              <p className="font-mono text-[10px] text-[#5c564e]">
                {artifact.answered}/{artifact.total}
              </p>
            </div>
            <p className="mt-1 text-xs text-[#5c564e]">
              {artifact.complete ? 'Worksheet complete' : 'Worksheet still has blank fields'}
            </p>
          </div>
        ))}
      </div>

      <fieldset className="mt-10 border-t border-[#d9d0c3] pt-6">
        <legend className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0f5f5c]">
          Practical evidence
        </legend>
        <div className="mt-5 grid gap-3">
          {[
            ['challengedPriority', 'I challenged at least one priority and asked why #1 outranked #2.'],
            ['checkedEvidence', 'I checked Fact / Interpretation / Recommendation at least once.'],
            ['frictionCaptured', 'I captured one friction I actually observed during the exercise.'],
          ].map(([key, label]) => (
            <label key={key} className="flex gap-3 text-sm leading-relaxed text-[#3d3832]">
              <input
                type="checkbox"
                checked={Boolean(evidence[key as keyof EvidenceState])}
                onChange={(event) =>
                  updateEvidence(
                    key as 'challengedPriority' | 'checkedEvidence' | 'frictionCaptured',
                    event.target.checked,
                  )
                }
                className="mt-1"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>

        <label className="mt-6 block max-w-2xl">
          <span className="text-sm font-medium">One friction note</span>
          <span className="mt-1 block text-xs leading-relaxed text-[#5c564e]">
            What did you have to retrieve, remember, reconcile, transfer,
            decide, approve, or rewrite manually?
          </span>
          <textarea
            value={evidence.frictionNote}
            onChange={(event) => updateEvidence('frictionNote', event.target.value)}
            className="mt-2 min-h-28 w-full resize-y border border-[#cfc5b7] bg-[#fbf7f1] px-3 py-2 text-sm leading-relaxed outline-none focus:border-[#0f5f5c]"
            placeholder="Observed friction"
          />
        </label>
      </fieldset>

      <div className="mt-8 flex flex-wrap gap-3 print:hidden">
        <button
          type="button"
          onClick={copySummary}
          className="border border-[#1c1916] px-4 py-2.5 text-sm"
        >
          {copied ? 'Copied' : 'Copy completion summary'}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="border border-[#d9d0c3] px-4 py-2.5 text-sm"
        >
          Print / PDF
        </button>
      </div>
    </section>
  )
}
