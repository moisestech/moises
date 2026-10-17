import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { LEVEL_I_ASSESSMENT, LEVEL_I_ASSESSMENT_PASS_COUNT } from './level-i-assessment'
import { LEVEL_I_ARTIFACTS } from './artifacts'
import {
  artifactStorageKey,
  assessmentPassed,
  assessmentPercent,
  levelIComplete,
  memoryStore,
  parseStoredJson,
  practicalEvidenceComplete,
  readAssessment,
  resetLevelIStorage,
  scoreAssessment,
  worksheetComplete,
  LEVEL_I_ASSESSMENT_STORAGE_KEY,
  LEVEL_I_FEEDBACK_STORAGE_KEY,
  LEVEL_I_PROGRESS_EVENT,
  EMPTY_PRACTICAL_EVIDENCE,
} from './level-i-state'

function perfectAnswers(): Record<string, string> {
  return Object.fromEntries(LEVEL_I_ASSESSMENT.map((question) => [question.id, question.correctOptionId]))
}

function answersWithMisses(misses: number): Record<string, string> {
  const answers = perfectAnswers()
  LEVEL_I_ASSESSMENT.slice(0, misses).forEach((question) => {
    const wrong = question.options.find((option) => option.id !== question.correctOptionId)
    answers[question.id] = wrong?.id ?? 'wrong'
  })
  return answers
}

describe('Level I assessment scoring', () => {
  it('scores 10 of 10 when every answer is correct', () => {
    assert.equal(scoreAssessment(perfectAnswers()), 10)
    assert.equal(assessmentPercent(10), 100)
    assert.equal(assessmentPassed(10, true), true)
  })

  it('passes at 8 of 10 and fails below 8', () => {
    assert.equal(LEVEL_I_ASSESSMENT_PASS_COUNT, 8)
    assert.equal(scoreAssessment(answersWithMisses(2)), 8)
    assert.equal(assessmentPassed(8, true), true)
    assert.equal(scoreAssessment(answersWithMisses(3)), 7)
    assert.equal(assessmentPassed(7, true), false)
    assert.equal(assessmentPassed(10, false), false)
  })

  it('resets to an empty unsubmitted assessment', () => {
    const stored = readAssessment(JSON.stringify({ answers: perfectAnswers(), submitted: true }))
    assert.equal(stored.submitted, true)
    const reset = readAssessment(JSON.stringify({ answers: {}, submitted: false }))
    assert.deepEqual(reset.answers, {})
    assert.equal(reset.submitted, false)
    assert.equal(assessmentPassed(scoreAssessment(reset.answers), reset.submitted), false)
  })
})

describe('Level I persistence', () => {
  it('falls back when localStorage JSON is corrupted', () => {
    assert.deepEqual(parseStoredJson('{not json', { ok: true }), { ok: true })
    assert.deepEqual(readAssessment('{"answers":'), { answers: {}, submitted: false })
    assert.deepEqual(parseStoredJson('null', EMPTY_PRACTICAL_EVIDENCE), EMPTY_PRACTICAL_EVIDENCE)
  })

  it('keeps feedback and emits the progress event name used by the toolkit', () => {
    const store = memoryStore()
    const feedback = { clarityBefore: 2, clarityAfter: 4 }
    store.setItem(LEVEL_I_FEEDBACK_STORAGE_KEY, JSON.stringify(feedback))
    assert.deepEqual(parseStoredJson(store.getItem(LEVEL_I_FEEDBACK_STORAGE_KEY), {}), feedback)
    assert.equal(LEVEL_I_PROGRESS_EVENT, 'ai-daily-operator:progress-update')
  })

  it('reset removes course keys and leaves unrelated browser data', () => {
    const store = memoryStore({
      [LEVEL_I_ASSESSMENT_STORAGE_KEY]: '{"submitted":true}',
      [LEVEL_I_FEEDBACK_STORAGE_KEY]: '{"clarityBefore":3}',
      [artifactStorageKey('founder-profile')]: '{"role":"founder"}',
      'unrelated-preference': 'keep-me',
    })
    resetLevelIStorage(store, ['founder-profile'])
    assert.equal(store.getItem(LEVEL_I_ASSESSMENT_STORAGE_KEY), null)
    assert.equal(store.getItem(LEVEL_I_FEEDBACK_STORAGE_KEY), null)
    assert.equal(store.getItem(artifactStorageKey('founder-profile')), null)
    assert.equal(store.getItem('unrelated-preference'), 'keep-me')
  })
})

describe('Level I completion', () => {
  const fieldIds = ['one', 'two']

  it('treats a blank worksheet as incomplete', () => {
    assert.equal(worksheetComplete(fieldIds, { one: 'yes', two: '   ' }), false)
    assert.equal(worksheetComplete(fieldIds, { one: 'yes', two: 'done' }), true)
  })

  it('stays incomplete when artifacts, assessment, or practical evidence are missing', () => {
    const evidence = {
      ...EMPTY_PRACTICAL_EVIDENCE,
      challengedPriority: true,
      checkedEvidence: true,
      frictionCaptured: true,
      frictionNote: 'Two places for the invoice.',
    }
    assert.equal(practicalEvidenceComplete(evidence), true)
    assert.equal(practicalEvidenceComplete({ ...evidence, frictionNote: ' ' }), false)
    assert.equal(
      levelIComplete({ artifactsComplete: false, assessmentPassed: true, evidenceComplete: true }),
      false,
    )
    assert.equal(
      levelIComplete({ artifactsComplete: true, assessmentPassed: false, evidenceComplete: true }),
      false,
    )
    assert.equal(
      levelIComplete({ artifactsComplete: true, assessmentPassed: true, evidenceComplete: false }),
      false,
    )
    assert.equal(
      levelIComplete({ artifactsComplete: true, assessmentPassed: true, evidenceComplete: true }),
      true,
    )
  })

  it('uses the four Level I artifact slugs as storage keys', () => {
    assert.deepEqual(
      LEVEL_I_ARTIFACTS.map((artifact) => artifact.slug),
      ['founder-profile', 'attention-rules', 'daily-operator', 'daily-operating-brief'],
    )
  })
})
