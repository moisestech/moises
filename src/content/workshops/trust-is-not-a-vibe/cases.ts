import type { TrustCase, TrustControl, TrustLoopNode } from './types'

/** Learner-facing name for Case A. Internal id stays `case-a`. */
export const TRUST_CASE_A_LEARNER_NAME = 'Enrollment decision'

export const TRUST_CASE_A_INTRO =
  'This is the enrollment screen from Cohort Studio. An agent wants to confirm October 6, email 120 people, and automatically remove participants it calls quiet. Nothing has been sent or changed. You decide whether it may act.'

export const TRUST_CASE_A_CARD_NOTE = 'Made-up case. Nothing has been sent or changed.'

export const TRUST_LOOKS_RIGHT_FRAME = {
  where: '1 of 6 · Looks Right',
  goal: 'Goal: make your first decision before inspecting how the system worked.',
  doNow: 'Read that screen. Vote Allow, Ask, or Deny.',
  doneBefore: 'Done when your first vote is saved.',
  doneAfter:
    'Your vote is saved. Now open the system and compare your first impression with what the card left out.',
} as const

export const TRUST_CASE_A: TrustCase = {
  id: 'case-a',
  title: 'The send',
  domain: 'A made-up enrollment card — an AI wants to announce a start date and email participants',
  fixtureNote:
    'Invented for this 30-minute lesson. Not a live program, not a client dashboard, and not a quality claim.',
  output: {
    headline: 'The cohort is confirmed for October 6. Messages are queued. Quiet participants will be removed.',
    confidence: 'High confidence · looks finished',
    claims: [
      { label: 'Launch date', value: 'October 6 · confirmed' },
      { label: 'Messages ready', value: '120 participant messages' },
      { label: 'Expected completion', value: '87%' },
      { label: 'Low engagement', value: 'Will be removed automatically' },
    ],
    proposedActions: [
      'Mark the launch date as final on the public page.',
      'Send the 120 messages now.',
      'Auto-remove participants below the engagement threshold.',
    ],
  },
  runtime: {
    surface: {
      app: 'Cohort Studio',
      screen: 'Enrollment decision',
      agent: 'Enrollment agent',
      status: 'Ready for review',
      primaryAction: 'Send 120 messages',
    },
    call: {
      method: 'POST',
      endpoint: '/v1/cohorts/oct-6/messages:send',
      body: [
        { key: 'cohort_id', value: '"oct-6"' },
        { key: 'launch_date', value: '"2026-10-06"' },
        { key: 'date_source', value: '"calendar#tentative"', contradicts: 'Launch date' },
        { key: 'recipients', value: '120', contradicts: 'Messages ready' },
        { key: 'completion_forecast', value: '0.87', contradicts: 'Expected completion' },
        { key: 'remove_below_engagement', value: 'true', contradicts: 'Low engagement' },
      ],
    },
    scopes: {
      granted: ['cohort:read', 'roster:read', 'messages:draft'],
      required: ['messages:send', 'roster:write', 'calendar:confirm'],
    },
    sources: [
      { record: 'calendar/oct-6.event → status', actual: 'tentative · never confirmed' },
      { record: 'roster/participants.csv → rows', actual: '80 rows, not 120' },
      { record: 'history/completion_rate', actual: 'no prior cohorts recorded' },
    ],
  },
  environment: {
    evidence: [
      'The launch date is still marked tentative on the source calendar. October 6 is not confirmed.',
      'The roster file contains 80 people, not 120.',
      'No historical completion data supports an 87% forecast.',
    ],
    authority: [
      'Communication permission is draft-only. The agent cannot send.',
      'Removal requires facilitator approval. There is no write grant for roster changes.',
    ],
    impact: [
      'Auto-removal would drop people from a program without a conversation.',
      'A public “confirmed” date would lock staff and participants to a date that is still in review.',
    ],
  },
  failures: [
    {
      id: 'unsupported-date',
      label: 'Unsupported launch date',
      visible: 'Wrong evidence',
      technical: 'Grounding / stale context / unsupported claim',
      loopStage: 'observe',
      suggestedControl: 'ground',
      detail: 'The card says the date is confirmed. The calendar still says tentative.',
    },
    {
      id: 'roster-mismatch',
      label: 'Roster does not match the send',
      visible: 'Wrong evidence',
      technical: 'Data inconsistency',
      loopStage: 'observe',
      suggestedControl: 'validate',
      detail: '120 messages sit on an 80-person roster. Someone will be invented or duplicated.',
    },
    {
      id: 'fabricated-forecast',
      label: 'Fabricated completion forecast',
      visible: 'Wrong evidence',
      technical: 'Unsupported forecast / faithfulness',
      loopStage: 'decide',
      suggestedControl: 'ground',
      detail: '87% has no historical series behind it. The number is decorative certainty.',
    },
    {
      id: 'draft-only-send',
      label: 'Send exceeds draft-only permission',
      visible: 'Wrong power',
      technical: 'Authorization / permissions / side effects',
      loopStage: 'act',
      suggestedControl: 'restrict',
      detail: 'The harness can only draft. Acting now is an authority violation.',
    },
    {
      id: 'auto-remove-harm',
      label: 'Auto-removal without a person',
      visible: 'Wrong impact',
      technical: 'User harm / operational outcome',
      loopStage: 'act',
      suggestedControl: 'approve',
      detail: 'Removing a participant is a consequential action. The card skips the conversation.',
    },
    {
      id: 'no-escalation',
      label: 'No escalation before the write',
      visible: 'Wrong path',
      technical: 'Missing stop / missing human fallback',
      loopStage: 'stop',
      suggestedControl: 'approve',
      detail: 'The agent does not pause, ask, or escalate before a public send and a roster change.',
    },
  ],
}

export const TRUST_CASE_B: TrustCase = {
  id: 'case-b',
  title: 'Museum intake agent',
  domain: 'Public workshop enrollment',
  fixtureNote:
    'Unseen transfer fixture. Same structure as Case A, different domain. Not a museum system screenshot and not a partner program.',
  output: {
    headline: 'Waitlist cleared. Releases signed. Studio is at capacity. Send acceptances now.',
    confidence: 'High confidence · ready to notify',
    claims: [
      { label: 'Waitlist', value: '40 people auto-enrolled' },
      { label: 'Media release', value: 'All signed' },
      { label: 'Studio capacity', value: 'Confirmed at 24' },
      { label: 'Next action', value: 'Send acceptance emails now' },
    ],
    proposedActions: [
      'Move all 40 waitlist records to enrolled.',
      'Send acceptance email with a media-release reminder as a courtesy.',
      'Publish the session as full at 24 seats.',
    ],
  },
  runtime: {
    surface: {
      app: 'Studio Intake',
      screen: 'Waitlist decision',
      agent: 'Intake agent',
      status: 'Ready to notify',
      primaryAction: 'Send 40 acceptances',
    },
    call: {
      method: 'POST',
      endpoint: '/v1/sessions/spring-studio/enrollments:bulk',
      body: [
        { key: 'session_id', value: '"spring-studio"' },
        { key: 'enroll_rows', value: '40', contradicts: 'Waitlist' },
        { key: 'release_status', value: '"draft"', contradicts: 'Media release' },
        { key: 'seats', value: '24', contradicts: 'Studio capacity' },
        { key: 'notify', value: '"acceptance_email"', contradicts: 'Next action' },
      ],
    },
    scopes: {
      granted: ['waitlist:read', 'email:draft'],
      required: ['email:send', 'enrollment:write', 'guardian_consent:verify'],
    },
    sources: [
      { record: 'waitlist/spring.csv → rows', actual: '40 rows · 11 duplicate or already enrolled' },
      { record: 'forms/media_release.pdf → signed', actual: 'false · draft, nothing signed' },
      { record: 'rooms/studio.posted_capacity', actual: '18 by fire code, not 24' },
      { record: 'waitlist/spring.csv → age', actual: '2 minors · guardian consent missing' },
    ],
  },
  environment: {
    evidence: [
      'The waitlist has 40 rows; 11 are duplicates or already enrolled.',
      'The media-release file is a draft. Nothing is signed.',
      'The room’s posted fire-code capacity is 18, not 24.',
    ],
    authority: [
      'Email permission is draft-only.',
      'Two waitlist names are minors. Guardian consent is required and missing.',
    ],
    impact: [
      'Auto-enrolling past capacity creates a door problem, not a software problem.',
      'A “signed release” claim would be false if the draft is treated as a signature.',
    ],
  },
  failures: [
    {
      id: 'duplicate-waitlist',
      label: 'Duplicates treated as new seats',
      visible: 'Wrong evidence',
      technical: 'Data inconsistency',
      loopStage: 'observe',
      suggestedControl: 'validate',
      detail: 'Forty rows are not forty people.',
    },
    {
      id: 'unsigned-release',
      label: 'Draft release treated as signed',
      visible: 'Wrong evidence',
      technical: 'Unsupported claim / faithfulness',
      loopStage: 'observe',
      suggestedControl: 'ground',
      detail: 'A draft document is not a signature.',
    },
    {
      id: 'capacity-mismatch',
      label: 'Capacity ignores the posted limit',
      visible: 'Wrong evidence',
      technical: 'Stale or untrusted context',
      loopStage: 'decide',
      suggestedControl: 'ground',
      detail: '24 seats against an 18-person room is a safety claim, not a scheduling preference.',
    },
    {
      id: 'minor-consent',
      label: 'Minors enrolled without guardian consent',
      visible: 'Wrong impact',
      technical: 'User harm / operational outcome',
      loopStage: 'act',
      suggestedControl: 'approve',
      detail: 'Enrollment here is a legal and care decision, not a list update.',
    },
    {
      id: 'draft-email',
      label: 'Acceptance send exceeds draft-only',
      visible: 'Wrong power',
      technical: 'Authorization / permissions',
      loopStage: 'act',
      suggestedControl: 'restrict',
      detail: 'The agent can draft. It cannot notify.',
    },
    {
      id: 'no-pause',
      label: 'No pause before notifying a waitlist',
      visible: 'Wrong path',
      technical: 'Missing escalation',
      loopStage: 'stop',
      suggestedControl: 'approve',
      detail: 'A public acceptance email is a promise. The run does not ask first.',
    },
  ],
}

export const TRUST_CONTROLS: readonly TrustControl[] = [
  {
    id: 'ground',
    label: 'Ground',
    verb: 'Tie claims to sources',
    body: 'Require current, named sources before a fact may appear on the card.',
  },
  {
    id: 'validate',
    label: 'Validate',
    verb: 'Check the countable things',
    body: 'Roster counts, JSON shape, tool arguments, and other checks code can fail closed.',
  },
  {
    id: 'restrict',
    label: 'Restrict',
    verb: 'Limit what the model may touch',
    body: 'Draft-only sends, schema-bound tools, no silent writes.',
  },
  {
    id: 'approve',
    label: 'Approve',
    verb: 'Give a person the last word',
    body: 'An authorization gate on consequential actions — not a decorative review.',
  },
  {
    id: 'trace',
    label: 'Trace',
    verb: 'Make the run inspectable',
    body: 'Inputs, retrieval, tool calls, results, retries, and stop conditions — not hidden chain-of-thought.',
  },
  {
    id: 'recover',
    label: 'Recover',
    verb: 'Handle failure without making it worse',
    body: 'Idempotent writes, fallbacks, and a path a person can resume.',
  },
] as const

export const TRUST_LOOP: readonly TrustLoopNode[] = [
  { id: 'observe', label: 'Observe', technical: 'Context, retrieval, sources', color: 'cyan' },
  { id: 'decide', label: 'Decide', technical: 'Plan, goal, certainty', color: 'violet' },
  { id: 'act', label: 'Act', technical: 'Tools, writes, side effects', color: 'blue' },
  { id: 'check', label: 'Check', technical: 'Tool results, validation', color: 'slate' },
  { id: 'stop', label: 'Stop · Ask · Continue', technical: 'Budgets, escalation, fallback', color: 'amber' },
] as const

export const TRUST_HARNESS_LINE =
  'An eval measures behavior. A guardrail constrains it. An approval grants authority. A trace makes it inspectable. A fallback handles failure. A harness coordinates all of that around the model.'

export const TRUST_VOCAB_SLIDE: readonly { visible: string; technical: string }[] = [
  { visible: 'Wrong evidence', technical: 'Grounding, stale context, unsupported claim' },
  { visible: 'Wrong path', technical: 'Trajectory, retrieval, tool selection' },
  { visible: 'Wrong power', technical: 'Authorization, permissions, side effects' },
  { visible: 'Wrong impact', technical: 'User harm, adoption, operational outcome' },
  { visible: 'Wrong judge', technical: 'Rubric validity, grader reliability, eval coverage' },
]
