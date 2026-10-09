'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  EMPTY_LEVEL_I_FEEDBACK,
  LEVEL_I_FEEDBACK_PERMISSION_OPTIONS,
  LEVEL_I_FEEDBACK_REUSE_OPTIONS,
  LEVEL_I_FEEDBACK_USEFUL_OPTIONS,
  type LevelIFeedbackScale,
  type LevelIFeedbackState,
} from '@/content/workshops/ai-daily-operator/level-i-feedback'

const STORAGE_KEY = 'ai-daily-operator:level-i-feedback'

function scaleButton(
  value: LevelIFeedbackScale,
  current: number,
  onChange: (value: LevelIFeedbackScale) => void,
) {
  const selected = current === value
  return (
    <button
      key={value}
      type="button"
      onClick={() => onChange(value)}
      className={[
        'h-10 w-10 border text-sm',
        selected
          ? 'border-[#1c1916] bg-[#1c1916] text-[#f3eee6]'
          : 'border-[#d9d0c3] bg-[#fbf7f1]',
      ].join(' ')}
      aria-pressed={selected}
    >
      {value}
    </button>
  )
}

function feedbackAsText(feedback: LevelIFeedbackState) {
  return [
    'Founder Attention OS — Level I feedback',
    '',
    `Clarity before workshop: ${feedback.clarityBefore || '[blank]'}/5`,
    `Clarity after workshop: ${feedback.clarityAfter || '[blank]'}/5`,
    `Confidence prioritizing: ${feedback.confidencePrioritizing || '[blank]'}/5`,
    `Most useful: ${feedback.mostUseful || '[blank]'}`,
    `Would use Daily Operator again: ${feedback.reuseIntent || '[blank]'}`,
    '',
    'Friction identified:',
    feedback.frictionFound.trim() || '[blank]',
    '',
    'Where I got stuck:',
    feedback.confusion.trim() || '[blank]',
    '',
    'What I would change:',
    feedback.changeRequest.trim() || '[blank]',
    '',
    'Optional quote:',
    feedback.quote.trim() || '[blank]',
    `Quote permission: ${feedback.quotePermission || '[blank]'}`,
  ].join('\n')
}

export function LevelIFeedback() {
  const [feedback, setFeedback] = useState<LevelIFeedbackState>(
    EMPTY_LEVEL_I_FEEDBACK,
  )
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setFeedback(JSON.parse(raw) as LevelIFeedbackState)
    } catch {
      // Feedback remains usable without persistence.
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback))
    } catch {
      // Feedback remains usable without persistence.
    }
  }, [feedback])

  const update = <K extends keyof LevelIFeedbackState>(
    key: K,
    value: LevelIFeedbackState[K],
  ) => {
    setFeedback((current) => ({ ...current, [key]: value }))
  }

  const summary = useMemo(() => feedbackAsText(feedback), [feedback])

  const copyFeedback = async () => {
    await navigator.clipboard.writeText(summary)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const mailto = useMemo(
    () =>
      `mailto:m@moises.tech?subject=${encodeURIComponent(
        'AI Daily Operator — Level I feedback',
      )}&body=${encodeURIComponent(summary)}`,
    [summary],
  )

  return (
    <section
      id="feedback"
      className="scroll-mt-28 pt-24"
      aria-labelledby="feedback-heading"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
        Post-workshop feedback
      </p>
      <h2 id="feedback-heading" className="mt-3 text-4xl tracking-tight">
        Help improve the next cohort
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#3d3832]">
        The goal is to learn where the method helped, where it confused you,
        and whether the Daily Operator is useful after the room clears. Your
        answers stay in this browser until you choose to copy or email them.
      </p>

      <div className="mt-10 space-y-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              key: 'clarityBefore',
              title: 'Before',
              prompt: 'How clear were you on what deserved your attention?',
            },
            {
              key: 'clarityAfter',
              title: 'After',
              prompt: 'How clear are you now on what deserves your attention?',
            },
            {
              key: 'confidencePrioritizing',
              title: 'Transfer',
              prompt: 'How confident are you applying the method tomorrow?',
            },
          ].map((item) => (
            <div key={item.key} className="border-t border-[#d9d0c3] pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0f5f5c]">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#3d3832]">
                {item.prompt}
              </p>
              <div className="mt-4 flex gap-2">
                {([1, 2, 3, 4, 5] as const).map((value) =>
                  scaleButton(
                    value,
                    Number(feedback[item.key as keyof LevelIFeedbackState]),
                    (next) =>
                      update(
                        item.key as
                          | 'clarityBefore'
                          | 'clarityAfter'
                          | 'confidencePrioritizing',
                        next,
                      ),
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <label className="block max-w-2xl">
          <span className="text-sm font-medium">What was most useful?</span>
          <select
            value={feedback.mostUseful}
            onChange={(event) => update('mostUseful', event.target.value)}
            className="mt-2 w-full border border-[#cfc5b7] bg-[#fbf7f1] px-3 py-2 text-sm outline-none focus:border-[#0f5f5c]"
          >
            <option value="">Select…</option>
            {LEVEL_I_FEEDBACK_USEFUL_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block max-w-2xl">
          <span className="text-sm font-medium">
            Do you expect to use the Daily Operator again?
          </span>
          <select
            value={feedback.reuseIntent}
            onChange={(event) => update('reuseIntent', event.target.value)}
            className="mt-2 w-full border border-[#cfc5b7] bg-[#fbf7f1] px-3 py-2 text-sm outline-none focus:border-[#0f5f5c]"
          >
            <option value="">Select…</option>
            {LEVEL_I_FEEDBACK_REUSE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        {[
          {
            key: 'frictionFound',
            label: 'What friction did you notice?',
            help: 'Keep it general enough that you are not exposing confidential business information.',
          },
          {
            key: 'confusion',
            label: 'Where did you get stuck or feel unsure?',
            help: 'A confusing prompt, concept, artifact, transition, or technical step.',
          },
          {
            key: 'changeRequest',
            label: 'What is the one thing you would change?',
            help: 'The smallest change that would make the workshop more useful.',
          },
          {
            key: 'quote',
            label: 'Optional: one sentence you would say about the workshop',
            help: 'Only write something you would be comfortable sharing under the permission you choose below.',
          },
        ].map((field) => (
          <label key={field.key} className="block max-w-2xl">
            <span className="text-sm font-medium">{field.label}</span>
            <span className="mt-1 block text-xs leading-relaxed text-[#5c564e]">
              {field.help}
            </span>
            <textarea
              value={String(feedback[field.key as keyof LevelIFeedbackState])}
              onChange={(event) =>
                update(
                  field.key as
                    | 'frictionFound'
                    | 'confusion'
                    | 'changeRequest'
                    | 'quote',
                  event.target.value,
                )
              }
              className="mt-2 min-h-28 w-full resize-y border border-[#cfc5b7] bg-[#fbf7f1] px-3 py-2 text-sm leading-relaxed outline-none focus:border-[#0f5f5c]"
            />
          </label>
        ))}

        <label className="block max-w-2xl">
          <span className="text-sm font-medium">Quote permission</span>
          <select
            value={feedback.quotePermission}
            onChange={(event) => update('quotePermission', event.target.value)}
            className="mt-2 w-full border border-[#cfc5b7] bg-[#fbf7f1] px-3 py-2 text-sm outline-none focus:border-[#0f5f5c]"
          >
            <option value="">Select…</option>
            {LEVEL_I_FEEDBACK_PERMISSION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 print:hidden">
        <button
          type="button"
          onClick={copyFeedback}
          className="border border-[#1c1916] px-4 py-2.5 text-sm"
        >
          {copied ? 'Copied' : 'Copy feedback'}
        </button>
        <a
          href={mailto}
          className="border border-[#1c1916] bg-[#1c1916] px-4 py-2.5 text-sm text-[#f3eee6]"
        >
          Email feedback
        </a>
      </div>
    </section>
  )
}
