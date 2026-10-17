/**
 * Pure Level I rules shared by the toolkit and the tests.
 * Browser components keep the UI. This file decides score, completion, and storage.
 */

import {
  LEVEL_I_ASSESSMENT,
  LEVEL_I_ASSESSMENT_PASS_COUNT,
} from './level-i-assessment'

export const LEVEL_I_PROGRESS_EVENT = 'ai-daily-operator:progress-update'
export const LEVEL_I_STORAGE_PREFIX = 'ai-daily-operator:'
export const LEVEL_I_ASSESSMENT_STORAGE_KEY = 'ai-daily-operator:level-i-assessment'
export const LEVEL_I_EVIDENCE_STORAGE_KEY = 'ai-daily-operator:level-i-completion-evidence'
export const LEVEL_I_FEEDBACK_STORAGE_KEY = 'ai-daily-operator:level-i-feedback'

export type LevelIAnswers = Record<string, string | undefined>

export type StoredLevelIAssessment = {
  answers: LevelIAnswers
  submitted: boolean
}

export const EMPTY_LEVEL_I_ASSESSMENT_STATE: StoredLevelIAssessment = {
  answers: {},
  submitted: false,
}

export type PracticalEvidence = {
  challengedPriority: boolean
  checkedEvidence: boolean
  frictionCaptured: boolean
  frictionNote: string
}

export const EMPTY_PRACTICAL_EVIDENCE: PracticalEvidence = {
  challengedPriority: false,
  checkedEvidence: false,
  frictionCaptured: false,
  frictionNote: '',
}

export type KeyValueStore = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

export function artifactStorageKey(slug: string): string {
  return `${LEVEL_I_STORAGE_PREFIX}artifact:${slug}`
}

export function parseStoredJson<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback
  try {
    const parsed = JSON.parse(raw) as T
    if (parsed == null || typeof parsed !== 'object') return fallback
    return parsed
  } catch {
    return fallback
  }
}

export function scoreAssessment(answers: LevelIAnswers): number {
  return LEVEL_I_ASSESSMENT.reduce(
    (total, question) => total + (answers[question.id] === question.correctOptionId ? 1 : 0),
    0,
  )
}

export function assessmentPercent(score: number): number {
  if (LEVEL_I_ASSESSMENT.length === 0) return 0
  return Math.round((score / LEVEL_I_ASSESSMENT.length) * 100)
}

/** A score counts only after the participant submits. Eight of ten is the line. */
export function assessmentPassed(score: number, submitted: boolean): boolean {
  return submitted && score >= LEVEL_I_ASSESSMENT_PASS_COUNT
}

export function answeredFieldCount(fieldIds: readonly string[], answers: LevelIAnswers): number {
  return fieldIds.filter((id) => (answers[id] ?? '').trim().length > 0).length
}

export function worksheetComplete(fieldIds: readonly string[], answers: LevelIAnswers): boolean {
  return fieldIds.length > 0 && answeredFieldCount(fieldIds, answers) === fieldIds.length
}

export function practicalEvidenceComplete(evidence: PracticalEvidence): boolean {
  return (
    evidence.challengedPriority &&
    evidence.checkedEvidence &&
    evidence.frictionCaptured &&
    evidence.frictionNote.trim().length > 0
  )
}

export function levelIComplete(input: {
  artifactsComplete: boolean
  assessmentPassed: boolean
  evidenceComplete: boolean
}): boolean {
  return input.artifactsComplete && input.assessmentPassed && input.evidenceComplete
}

export function levelIStorageKeys(artifactSlugs: readonly string[]): string[] {
  return [
    LEVEL_I_ASSESSMENT_STORAGE_KEY,
    LEVEL_I_EVIDENCE_STORAGE_KEY,
    LEVEL_I_FEEDBACK_STORAGE_KEY,
    ...artifactSlugs.map(artifactStorageKey),
  ]
}

/** Removes only Founder Attention OS keys. Other browser data stays. */
export function resetLevelIStorage(store: KeyValueStore, artifactSlugs: readonly string[]): void {
  for (const key of levelIStorageKeys(artifactSlugs)) {
    if (!key.startsWith(LEVEL_I_STORAGE_PREFIX)) continue
    store.removeItem(key)
  }
}

export function readPracticalEvidence(raw: string | null | undefined): PracticalEvidence {
  const parsed = parseStoredJson<Partial<PracticalEvidence>>(raw, EMPTY_PRACTICAL_EVIDENCE)
  return {
    challengedPriority: Boolean(parsed.challengedPriority),
    checkedEvidence: Boolean(parsed.checkedEvidence),
    frictionCaptured: Boolean(parsed.frictionCaptured),
    frictionNote: typeof parsed.frictionNote === 'string' ? parsed.frictionNote : '',
  }
}

export function readAssessment(raw: string | null | undefined): StoredLevelIAssessment {
  const parsed = parseStoredJson<Partial<StoredLevelIAssessment>>(raw, EMPTY_LEVEL_I_ASSESSMENT_STATE)
  return {
    answers: parsed.answers && typeof parsed.answers === 'object' ? parsed.answers : {},
    submitted: Boolean(parsed.submitted),
  }
}

export function memoryStore(seed: Record<string, string> = {}): KeyValueStore & { snapshot(): Record<string, string> } {
  const data = new Map(Object.entries(seed))
  return {
    getItem(key) {
      return data.has(key) ? data.get(key)! : null
    },
    setItem(key, value) {
      data.set(key, value)
    },
    removeItem(key) {
      data.delete(key)
    },
    snapshot() {
      return Object.fromEntries(data)
    },
  }
}
