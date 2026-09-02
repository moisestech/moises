export const TRUST_SLUG = 'trust-is-not-a-vibe' as const
export const TRUST_BASE = `/workshop/${TRUST_SLUG}` as const
export const TRUST_LEARN_BASE = `${TRUST_BASE}/learn` as const
export const TRUST_REHEARSE_HREF = `${TRUST_BASE}/rehearse` as const
export const TRUST_SURFACES_HREF = `${TRUST_REHEARSE_HREF}/surfaces` as const
export const TRUST_DECISION_CARD_HREF = `${TRUST_REHEARSE_HREF}/decision-card` as const
export const TRUST_SESSION_TITLE = 'Before the Agent Acts' as const
export const TRUST_CENTRAL_QUESTION = 'Should this AI output be allowed to act?' as const

export type TrustLayerId = 'evidence' | 'authority' | 'impact'
export type TrustFailureMarkId =
  | 'wrong-evidence'
  | 'wrong-path'
  | 'wrong-power'
  | 'wrong-impact'
  | 'wrong-judge'
export type TrustMarkId = TrustLayerId | TrustVerdict | TrustRoleId | TrustFailureMarkId

export type TrustRoleId = 'pm' | 'engineering' | 'design' | 'strategy'
export type TrustVerdict = 'allow' | 'ask' | 'deny'
export type TrustLoopStage = 'observe' | 'decide' | 'act' | 'check' | 'stop'
export type TrustControlId = 'ground' | 'validate' | 'restrict' | 'approve' | 'trace' | 'recover'
export type TrustChapterId =
  | 'looks-right'
  | 'four-lenses'
  | 'seeded-failures'
  | 'the-loop'
  | 'the-harness'
  | 'transfer'
export type TrustRubricKey = 'evidence' | 'authority' | 'impact' | 'control'
export type TrustRubricScore = 0 | 1 | 2

export type TrustChapter = {
  id: TrustChapterId
  slug: TrustChapterId
  number: number
  clock: string
  durationHint: string
  title: string
  summary: string
  objectives: readonly string[]
  keyIdeas: readonly string[]
  checkpoint: string
  videoClip: {
    title: string
    status: 'pending'
    durationHint: string
    sourceNote: string
  }
}

export type TrustRole = {
  id: TrustRoleId
  label: string
  shortLabel: string
  primaryQuestions: readonly string[]
  blindSpot: string
  chapterHighlight: string
  inspectPrompts: readonly string[]
  needToSeePrompt: string
  teachBackPrompt: string
}

export type TrustFailure = {
  id: string
  label: string
  visible: string
  technical: string
  loopStage: TrustLoopStage
  suggestedControl: TrustControlId
  detail: string
}

export type TrustCase = {
  id: 'case-a' | 'case-b'
  title: string
  domain: string
  fixtureNote: string
  output: {
    headline: string
    confidence: string
    claims: readonly { label: string; value: string }[]
    proposedActions: readonly string[]
  }
  environment: {
    evidence: readonly string[]
    authority: readonly string[]
    impact: readonly string[]
  }
  failures: readonly TrustFailure[]
}

export type TrustControl = {
  id: TrustControlId
  label: string
  verb: string
  body: string
}

export type TrustLoopNode = {
  id: TrustLoopStage
  label: string
  technical: string
  color: 'cyan' | 'violet' | 'blue' | 'amber' | 'slate'
}

export type TrustSpeakerNote = {
  chapterId: TrustChapterId
  interrupt?: string
  beats: readonly string[]
}

export type TrustLiveBeatId =
  | 'open-vote'
  | 'context'
  | 'teach-layers'
  | 'assign-lenses'
  | 'role-inspect'
  | 'reveal-verdict'
  | 'harness'
  | 'transfer'
  | 'teach-back'
  | 'exit'

export type TrustLiveBeat = {
  id: TrustLiveBeatId
  startMin: number
  endMin: number
  title: string
  chapterId: TrustChapterId
  interrupt?: boolean
  skipOnLiveClock?: boolean
  cue: string
}
