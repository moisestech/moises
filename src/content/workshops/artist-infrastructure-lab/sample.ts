import type {
  CaseMark,
  ClauseMark,
  EdgeState,
  FieldStatus,
  StoryLayerId,
  StructureFieldKey,
} from './types'

export const SAMPLE_CARD = {
  id: 'studio-object-card',
  title: 'Untitled studio object',
  date: '1930–1940?',
  unsupportedYear: '1936',
  unsupportedPlace: 'Miami?',
  rights: 'Not supplied',
  sourceNote: 'Internal shelf mark',
  creator: 'No maker name on the card',
} as const

export const OBSERVE_SAMPLE = {
  trigger: 'Someone asks for a finished public card for one studio object.',
  people:
    'The person who photographed the object, the person who wrote the card, and a reviewer who can authorize publication.',
  tools: 'A camera, a table of records, and an optional suggestion that must not publish on its own.',
  decisions:
    'Which date to keep, whether a place may be inferred, and who may see the internal note.',
  bottleneck: 'Rights are missing, so the card cannot leave the studio.',
  consequence:
    'An exact year or a guessed city would erase the uncertainty the source actually supplied.',
} as const

export const KEPT_HUMAN_OPTIONS = [
  { id: 'authorize-export', label: 'Authorizing whether the record may leave the studio' },
  { id: 'authorize-place', label: 'Authorizing or refusing a place that the source does not supply' },
  { id: 'authorize-rights', label: 'Deciding what to do while rights remain unknown' },
] as const

export const FIELD_STATUSES: { id: FieldStatus; label: string }[] = [
  { id: 'supplied', label: 'Supplied' },
  { id: 'inferred', label: 'Inferred' },
  { id: 'unknown', label: 'Unknown' },
  { id: 'restricted', label: 'Restricted' },
  { id: 'needs-review', label: 'Needs review' },
]

export const STRUCTURE_FIELDS: {
  key: StructureFieldKey
  label: string
  source: string
  correct: FieldStatus
  miss: string
}[] = [
  {
    key: 'title',
    label: 'Title',
    source: SAMPLE_CARD.title,
    correct: 'supplied',
    miss: 'The title is written on the card. Mark it supplied.',
  },
  {
    key: 'creator',
    label: 'Creator',
    source: SAMPLE_CARD.creator,
    correct: 'unknown',
    miss: 'No maker name was supplied. Keep the creator unknown.',
  },
  {
    key: 'date',
    label: 'Date',
    source: `Date supplied: ${SAMPLE_CARD.date}`,
    correct: 'supplied',
    miss: 'Keep the range and the question mark. Do not turn the date into an inference or an exact year.',
  },
  {
    key: 'place',
    label: 'Place',
    source: `Not on the card. A suggestion reads “${SAMPLE_CARD.unsupportedPlace}”.`,
    correct: 'needs-review',
    miss: '“Miami?” is not on the source card. Send that inference to human review.',
  },
  {
    key: 'rights',
    label: 'Rights',
    source: SAMPLE_CARD.rights,
    correct: 'unknown',
    miss: 'Missing rights stay unknown. Do not infer a license.',
  },
  {
    key: 'sourceNote',
    label: 'Source note',
    source: `${SAMPLE_CARD.sourceNote}. Marked internal.`,
    correct: 'restricted',
    miss: 'The shelf mark is internal. Mark it restricted.',
  },
]

export const SAMPLE_RECORDS = [
  {
    id: 'A-014' as const,
    rightsSupplied: true,
    summary: 'Rights supplied. The ordinary route may reach export after a human decision.',
  },
  {
    id: 'B-015' as const,
    rightsSupplied: false,
    summary: 'Rights missing. The only permitted decision is hold.',
  },
]

export const SEEDED_AI_SUGGESTION = `Suggested sentence: “Made in Miami in ${SAMPLE_CARD.unsupportedYear}.” That sentence is not evidence. It cannot publish.`

export const JUDGE_CLAUSES: { id: string; text: string; correct: ClauseMark }[] = [
  {
    id: 'date-range',
    text: `Date supplied: ${SAMPLE_CARD.date}`,
    correct: 'supported',
  },
  {
    id: 'exact-year',
    text: `The object was made in ${SAMPLE_CARD.unsupportedYear}.`,
    correct: 'unsupported',
  },
  {
    id: 'rights',
    text: 'Rights status is unknown.',
    correct: 'supported',
  },
  {
    id: 'place',
    text: `The place is ${SAMPLE_CARD.unsupportedPlace.replace('?', '')}.`,
    correct: 'unsupported',
  },
  {
    id: 'shelf',
    text: 'An internal shelf mark exists and is restricted.',
    correct: 'supported',
  },
]

export const JUDGE_CASES: { id: string; text: string; correct: CaseMark }[] = [
  {
    id: 'range-kept',
    text: `A revision keeps “${SAMPLE_CARD.date}”.`,
    correct: 'pass',
  },
  {
    id: 'exact-published',
    text: `A fluent sentence publishes “${SAMPLE_CARD.unsupportedYear}” with no source for that year.`,
    correct: 'hold',
  },
  {
    id: 'rights-export',
    text: 'Rights are blank and the workflow exports anyway.',
    correct: 'hold',
  },
  {
    id: 'uncertainty-kept',
    text: `The public line reads “Date uncertain; source supplies ${SAMPLE_CARD.date}”.`,
    correct: 'pass',
  },
  {
    id: 'ai-publishes',
    text: 'A suggestion is published without a named reviewer.',
    correct: 'hold',
  },
]

export const RELATE_CLAIMS: {
  id: string
  label: string
  correct: EdgeState
  hint: string
}[] = [
  {
    id: 'creator',
    label: 'Creator',
    correct: 'confirmed',
    hint: 'The card is the evidence: no maker name is supplied.',
  },
  {
    id: 'institution',
    label: 'Institution',
    correct: 'proposed',
    hint: 'A possible holding institution is a proposal, not a confirmed fact.',
  },
  {
    id: 'event',
    label: 'Event',
    correct: 'restricted',
    hint: 'Related context exists and is not cleared for this view.',
  },
  {
    id: 'place',
    label: 'Place',
    correct: 'unknown',
    hint: 'No place was supplied. Do not draw the suggested city as a relationship.',
  },
  {
    id: 'rights-contact',
    label: 'Rights contact',
    correct: 'unconnected',
    hint: 'Leave this node unconnected. Inventing a rights holder would hide the gap.',
  },
]

export const PROPOSED_CLAIM_SAMPLE = {
  relationship: 'Possibly held by',
  evidence: 'No custody statement is on the source card. The link is a proposal.',
  confidence: 'Low',
  visibility: 'Studio only',
  reviewer: 'Human reviewer',
  revision: 'Do not treat this institution link as confirmed.',
} as const

export const STORY_LAYERS: { id: StoryLayerId; label: string; body: string }[] = [
  { id: 'source', label: 'Source', body: `Date supplied: ${SAMPLE_CARD.date}` },
  { id: 'metadata', label: 'Metadata', body: 'Title supplied. Creator unknown. Rights unknown.' },
  { id: 'context', label: 'Context', body: 'Studio object card used as a teaching fixture.' },
  {
    id: 'interpretation',
    label: 'Interpretation',
    body: 'A public sentence may describe the uncertainty. It may not replace it.',
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    body: 'The date is text, not only a picture of the card.',
  },
  {
    id: 'credit',
    label: 'Credit and rights',
    body: 'Rights unknown. Internal shelf mark stays off the public surface.',
  },
]

export const PUBLISH_START_ORDER: StoryLayerId[] = [
  'interpretation',
  'metadata',
  'source',
  'context',
  'accessibility',
  'credit',
]

export const PUBLISH_AUDIENCES = ['Studio colleagues', 'Public visitors', 'A future maintainer'] as const

export const DEPENDENCIES = [
  { id: 'csv', name: 'Source CSV', purpose: 'The records themselves' },
  { id: 'ai', name: 'Approved AI service', purpose: 'Optional suggestions' },
  { id: 'images', name: 'Image storage', purpose: 'Object photographs' },
  { id: 'export', name: 'Static export', purpose: 'The packet another person can open' },
  { id: 'credential', name: 'Account credential owner', purpose: 'Who can sign in' },
  { id: 'reviewer', name: 'Human review role', purpose: 'Who can approve, revise, or hold' },
] as const

export const LOCAL_RULESET = 'local-ruleset'
export const PRESERVE_FALLBACKS = [
  {
    id: LOCAL_RULESET,
    label: 'Local ruleset: keep source values and send uncertainty to human review',
  },
  { id: 'invent-date', label: 'Guess an exact year so the card looks finished' },
  { id: 'drop-record', label: 'Drop the record because the suggestion service is down' },
] as const

export const HANDOFF_FALLBACK =
  'The human reviewer finishes the hold queue from the operating guide, without the original author’s login.'

export const HANDOFF_CHOICES = [
  { id: 'continue', label: 'Continue' },
  { id: 'revise', label: 'Revise' },
  { id: 'transfer', label: 'Transfer' },
  { id: 'pause', label: 'Pause' },
  { id: 'retire', label: 'Retire' },
] as const

export const THIRTY_DAY_SAMPLE =
  'Week 1: retest the rights hold. Week 2: open the export without the original author. Weeks 3–4: decide whether to continue or retire.'
