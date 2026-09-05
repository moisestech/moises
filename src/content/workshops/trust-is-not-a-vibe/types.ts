export const TRUST_SLUG = 'trust-is-not-a-vibe' as const
export const TRUST_BASE = `/workshop/${TRUST_SLUG}` as const
export const TRUST_LEARN_BASE = `${TRUST_BASE}/learn` as const
export const TRUST_REHEARSE_HREF = `${TRUST_BASE}/rehearse` as const
export const TRUST_SURFACES_HREF = `${TRUST_REHEARSE_HREF}/surfaces` as const
export const TRUST_DECISION_CARD_HREF = `${TRUST_REHEARSE_HREF}/decision-card` as const
export const TRUST_SESSION_TITLE = 'Before the Agent Acts' as const
export const TRUST_CENTRAL_QUESTION = 'Should this AI output be allowed to act?' as const
export const TRUST_FIXTURE_LABEL = 'Synthetic teaching fixture' as const

export function isTrustLabPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false
  return pathname === TRUST_BASE || pathname.startsWith(`${TRUST_BASE}/`)
}

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
/**
 * A segment of the 30-minute course clock. Defined here rather than in
 * time-budget.ts so the live facilitation beats can reference it without a
 * circular import back through the budget.
 */
export type TrustTimeSegmentId = 'overview' | TrustChapterId | 'buffer'
export type TrustRubricKey = 'evidence' | 'authority' | 'impact' | 'control'
export type TrustRubricScore = 0 | 1 | 2

export type TrustChapter = {
  id: TrustChapterId
  slug: TrustChapterId
  number: number
  /** Budgeted length of the required path. The running clock is derived in `time-budget`. */
  minutes: number
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
  watchesFor: string
  onThisCase: string
  learnerJob: string
  exampleNeedToSee: string
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

/**
 * The machine layer beneath a case card: the call the agent is about to fire,
 * the permission it holds versus the permission that call needs, and the source
 * records the surface claims rest on. Every value restates something already in
 * `environment` at the level a system would see it, so the confident surface and
 * the payload contradict each other in front of the learner.
 */
export type TrustSpecimenRuntime = {
  surface: {
    /** Invented product the card belongs to. */
    app: string
    screen: string
    /** The button the card is asking someone to press. */
    primaryAction: string
  }
  call: {
    method: string
    endpoint: string
    body: readonly {
      key: string
      value: string
      /** `claims` label this value undermines, if any. */
      contradicts?: string
    }[]
  }
  scopes: {
    granted: readonly string[]
    required: readonly string[]
  }
  sources: readonly { record: string; actual: string }[]
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
  runtime: TrustSpecimenRuntime
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
  | 'orient'
  | 'open-vote'
  | 'context'
  | 'teach-layers'
  | 'assign-lenses'
  | 'role-inspect'
  | 'reveal-verdict'
  | 'loop-anatomy'
  | 'loop-scoring'
  | 'harness-cases'
  | 'harness-graders'
  | 'transfer'
  | 'buffer'

/**
 * A facilitation beat as authored: which course segment it belongs to and how
 * long it runs. Window positions are derived from the time budget rather than
 * written here, so the live clock cannot drift from the chapter minutes.
 */
export type TrustAuthoredLiveBeat = {
  id: TrustLiveBeatId
  /** The budget segment this beat subdivides. */
  segmentId: TrustTimeSegmentId
  minutes: number
  title: string
  /** Designed pause for the in-character question. */
  interrupt?: boolean
  cue: string
}

export type TrustLiveBeat = TrustAuthoredLiveBeat & {
  startMin: number
  endMin: number
  /** Running position, e.g. `6:30–7:30`. */
  clock: string
  /** Set when the beat's segment is a chapter, so the rehearse preview can open it. */
  chapterId?: TrustChapterId
}
