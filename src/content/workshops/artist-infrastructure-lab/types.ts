export const LAB_SLUG = 'artist-infrastructure-lab' as const
export const LAB_BASE = '/workshop/artist-infrastructure-lab' as const
export const LAB_LEARN = `${LAB_BASE}/learn` as const
export const LAB_TITLE = 'Artist Infrastructure Lab'
export const LAB_THESIS =
  'Interpret critically. Build concretely. Test socially. Maintain responsibly.'
export const LAB_STATUS =
  'Working proposal for co-development with Dimitry Chamy / FIU Ratcliffe. Not an approved course. No dates, credit, enrollment, or partnership are confirmed.'
export const LAB_SAMPLE_LABEL =
  'Illustrative sample — not an FIU collection, not participant work.'
export const LAB_INTERACTION_LABEL =
  'Proposed interaction — illustrative sample — not a live FIU system.'

export const LAB_CHAPTER_IDS = [
  'observe',
  'structure',
  'automate',
  'judge',
  'relate',
  'publish',
  'preserve',
  'hand-off',
] as const

export type LabChapterId = (typeof LAB_CHAPTER_IDS)[number]

export type TruthKind =
  | 'conceptual-visualization'
  | 'proposed-interaction'
  | 'documentary-proof'
  | 'storyboard'

export const TRUTH_LABEL: Record<TruthKind, string> = {
  'conceptual-visualization': 'Conceptual visualization',
  'proposed-interaction': 'Proposed interaction',
  'documentary-proof': 'Documentary proof',
  storyboard: 'Storyboard',
}

export type FieldStatus = 'supplied' | 'inferred' | 'unknown' | 'restricted' | 'needs-review'

export type StructureFieldKey = 'title' | 'creator' | 'date' | 'place' | 'rights' | 'sourceNote'

export type HumanDecision = 'approve' | 'revise' | 'hold'

export type ClauseMark = 'supported' | 'unsupported'

export type CaseMark = 'pass' | 'hold'

export type EdgeState = 'confirmed' | 'proposed' | 'restricted' | 'unknown' | 'unconnected'

export type StoryLayerId =
  | 'source'
  | 'metadata'
  | 'context'
  | 'interpretation'
  | 'accessibility'
  | 'credit'

export type HandoffChoice = 'continue' | 'revise' | 'transfer' | 'pause' | 'retire'

export type LabChapter = {
  id: LabChapterId
  number: number
  title: string
  question: string
  summary: string
  activity: string
  artifact: string
  interaction: string
  plateId: string
  storyboardId?: string
}

export type ObserveArtifact = {
  trigger: string
  people: string
  tools: string
  decisions: string
  bottleneck: string
  consequence: string
  keptHuman: string
  committed: boolean
}

export type StructureArtifact = {
  fields: Record<StructureFieldKey, FieldStatus | ''>
  committed: boolean
}

export type AutomateRun = {
  decision: HumanDecision | ''
  reason: string
  refused: boolean
}

export type AutomateArtifact = {
  useAi: boolean
  runs: Record<'A-014' | 'B-015', AutomateRun>
  committed: boolean
}

export type JudgeArtifact = {
  approver: string
  clauses: Record<string, ClauseMark | ''>
  cases: Record<string, CaseMark | ''>
  committed: boolean
}

export type RelateClaim = {
  state: EdgeState | ''
  relationship: string
  evidence: string
  confidence: string
  visibility: string
  reviewer: string
  revision: string
}

export type RelateArtifact = {
  claims: Record<string, RelateClaim>
  nextAction: string
  committed: boolean
}

export type PublishArtifact = {
  order: StoryLayerId[]
  audience: string
  gapVisible: boolean
  committed: boolean
}

export type PreserveArtifact = {
  aiDisabled: boolean
  fallback: string
  recovery: string
  committed: boolean
}

export type HandoffArtifact = {
  guideOpened: boolean
  failureSeen: boolean
  fallback: string
  choice: HandoffChoice | ''
  thirtyDay: string
  committed: boolean
}

export type LabProject = {
  observe: ObserveArtifact | null
  structure: StructureArtifact | null
  automate: AutomateArtifact | null
  judge: JudgeArtifact | null
  relate: RelateArtifact | null
  publish: PublishArtifact | null
  preserve: PreserveArtifact | null
  'hand-off': HandoffArtifact | null
}
