'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  LEVEL_I_ASSESSMENT,
  LEVEL_I_ASSESSMENT_PASS_COUNT,
  LEVEL_I_ASSESSMENT_PASS_PERCENT,
  LEVEL_I_COMPLETION_REQUIREMENTS,
} from '@/content/workshops/ai-daily-operator/level-i-assessment'

type Answers = Record<string, string>

const STORAGE_KEY = 'ai-daily-operator:level-i-assessment'

type StoredAssessment = {
  answers: Answers
  submitted: boolean
}

export function LevelIAssessment() {
  const [answers, setAnswers] = useState<Answers>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const stored = JSON.parse(raw) as StoredAssessment
      setAnswers(stored.answers ?? {})
      setSubmitted(Boolean(stored.submitted))
    } catch {
      // Assessment remains usable without local persistence.
    }
  }, [])

  useEffect(() => {
    try {
      const stored: StoredAssessment = { answers, submitted }
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
    } catch {
      // Assessment remains usable without local persistence.
    }
  }, [answers, submitted])

  const answeredCount = Object.keys(answers).filter((id) => answers[id]).length

  const score = useMemo(
    () =>
      LEVEL_I_ASSESSMENT.reduce(
        (total, question) =>
          total + (answers[question.id] === question.correctOptionId ? 1 : 0),
        0,
      ),
    [answers],
  )

  const percent = Math.round((score / LEVEL_I_ASSESSMENT.length) * 100)
  const passed = score >= LEVEL_I_ASSESSMENT_PASS_COUNT
  const readyToSubmit = answeredCount === LEVEL_I_ASSESSMENT.length

  const choose = (questionId: string, optionId: string) => {
    if (submitted) return
    setAnswers((current) => ({ ...current, [questionId]: optionId }))
  }

  const submit = () => {
    if (!readyToSubmit) return
    setSubmitted(true)
  }

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <section
      id="assessment"
      className="scroll-mt-28 pt-24"
      aria-labelledby="assessment-heading"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
        Competency check
      </p>
      <h2 id="assessment-heading" className="mt-3 text-4xl tracking-tight">
        Can you transfer the method?
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3d3832]">
        This is not a product-interface quiz. The scenarios check whether you
        can use Founder Attention OS when the answer is ambiguous. Passing is{' '}
        {LEVEL_I_ASSESSMENT_PASS_PERCENT}% ({LEVEL_I_ASSESSMENT_PASS_COUNT}/
        {LEVEL_I_ASSESSMENT.length}).
      </p>
      <p className="mt-3 max-w-2xl text-xs leading-relaxed text-[#5c564e]">
        Your answers are stored only in this browser. A passing score is one
        part of Level I completion; the participant artifacts remain the main
        evidence of learning.
      </p>

      <ol className="mt-10 space-y-10">
        {LEVEL_I_ASSESSMENT.map((question, questionIndex) => {
          const selected = answers[question.id]
          const isCorrect = selected === question.correctOptionId

          return (
            <li
              key={question.id}
              className="border-t border-[#d9d0c3] pt-6"
            >
              <div className="max-w-3xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0f5f5c]">
                  {String(questionIndex + 1).padStart(2, '0')} ·{' '}
                  {question.category}
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  {question.prompt}
                </p>
              </div>

              <fieldset className="mt-5 grid gap-3">
                <legend className="sr-only">
                  Choose an answer for question {questionIndex + 1}
                </legend>
                {question.options.map((option) => {
                  const optionSelected = selected === option.id
                  const optionCorrect =
                    submitted && option.id === question.correctOptionId
                  const optionWrong =
                    submitted &&
                    optionSelected &&
                    option.id !== question.correctOptionId

                  return (
                    <label
                      key={option.id}
                      className={[
                        'flex cursor-pointer gap-3 border p-3 text-sm leading-relaxed transition',
                        optionSelected
                          ? 'border-[#1c1916] bg-[#fbf7f1]'
                          : 'border-[#d9d0c3]',
                        optionCorrect ? 'outline outline-2 outline-[#0f5f5c]' : '',
                        optionWrong ? 'outline outline-2 outline-[#7a3412]' : '',
                        submitted ? 'cursor-default' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option.id}
                        checked={optionSelected}
                        onChange={() => choose(question.id, option.id)}
                        disabled={submitted}
                        className="mt-1"
                      />
                      <span>{option.label}</span>
                    </label>
                  )
                })}
              </fieldset>

              {submitted ? (
                <div
                  className={[
                    'mt-4 border-l-2 pl-4 text-sm leading-relaxed',
                    isCorrect
                      ? 'border-[#0f5f5c] text-[#3d3832]'
                      : 'border-[#7a3412] text-[#3d3832]',
                  ].join(' ')}
                >
                  <p className="font-medium">
                    {isCorrect ? 'Correct.' : 'Not yet.'}
                  </p>
                  <p className="mt-1">{question.rationale}</p>
                </div>
              ) : null}
            </li>
          )
        })}
      </ol>

      <div className="mt-10 border-t border-[#1c1916] pt-6">
        {!submitted ? (
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={submit}
              disabled={!readyToSubmit}
              className="border border-[#1c1916] bg-[#1c1916] px-4 py-2.5 text-sm text-[#f3eee6] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Score competency check
            </button>
            <p className="font-mono text-[11px] text-[#5c564e]">
              {answeredCount}/{LEVEL_I_ASSESSMENT.length} answered
            </p>
          </div>
        ) : (
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
              Result
            </p>
            <p className="mt-2 text-4xl tracking-tight">
              {score}/{LEVEL_I_ASSESSMENT.length} · {percent}%
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#3d3832]">
              {passed
                ? 'Competency check passed. Keep the score as evidence, then make sure your four Level I artifacts and one Friction Log note are complete.'
                : 'Not passed yet. Review the explanations above, correct the underlying judgment rule, and try again.'}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 border border-[#1c1916] px-4 py-2.5 text-sm"
            >
              Retake
            </button>
          </div>
        )}
      </div>

      <div className="mt-14 border-t border-[#d9d0c3] pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0f5f5c]">
          Level I completion evidence
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {LEVEL_I_COMPLETION_REQUIREMENTS.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-[#3d3832]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
