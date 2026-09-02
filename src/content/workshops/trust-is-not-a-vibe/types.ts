export const TRUST_SLUG = 'trust-is-not-a-vibe' as const
export const TRUST_BASE = `/workshop/${TRUST_SLUG}` as const
export const TRUST_LEARN_BASE = `${TRUST_BASE}/learn` as const
export const TRUST_REHEARSE_HREF = `${TRUST_BASE}/rehearse` as const

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
