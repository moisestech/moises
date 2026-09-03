import type { TrustRole, TrustRoleId } from './types'

export const TRUST_ROLES: readonly TrustRole[] = [
  {
    id: 'pm',
    label: 'Product',
    shortLabel: 'PM',
    primaryQuestions: [
      'What outcome matters?',
      'What is acceptable?',
      'What failure is intolerable?',
    ],
    watchesFor: 'The outcome, what “good” means, and which failure is intolerable.',
    onThisCase:
      'Is October 6 a launch you would actually ship, or a date that looks decisive? Does 87% change a decision, or only decorate the card?',
    learnerJob: 'What outcome must be true before this can be released?',
    exampleNeedToSee: 'A calendar row that says confirmed — not the card saying it.',
    blindSpot: 'Optimizing for a compelling demo.',
    chapterHighlight:
      'Write one acceptance line and one intolerable line before the agent may act. Those two lines are seeds for the golden set — they define what good means before anyone grades.',
    inspectPrompts: [
      'Does “87% completion” change a launch decision, or only decorate the card?',
      'If the forecast is wrong, who absorbs the cost?',
      'What would make you stop the send even if the copy looks polished?',
    ],
    needToSeePrompt: 'Name one thing you would need to see before this recommendation may act.',
    teachBackPrompt: 'In one sentence, explain the engineering permission check as if you were briefing a PM.',
  },
  {
    id: 'engineering',
    label: 'Engineering',
    shortLabel: 'Eng',
    primaryQuestions: [
      'What did it read, call, and change?',
      'Can it retry, trace, and recover without duplicating a write?',
      'Which checks are code, and which still need a person?',
    ],
    watchesFor: 'What the agent read, called, and is allowed to change.',
    onThisCase:
      'The card wants to send 120 messages and rewrite the roster. What file did it read? Can draft-only permission actually stop the send?',
    learnerJob: 'Does it have valid evidence, permission, and a safe write boundary?',
    exampleNeedToSee: 'A trace: which file, which permission, which write would fire.',
    blindSpot: 'Testing only the happy path.',
    chapterHighlight:
      'Trace, permissions, and code-based checks — JSON, tool, latency, cost. After a fix, rerun the same set. That catch is the whole reason the eval loop exists.',
    inspectPrompts: [
      'What sources did it retrieve, and are they current?',
      'Does draft-only permission block a send, or can the model talk past it?',
      'If this run fails at 2 a.m., can someone replay it from a trace?',
    ],
    needToSeePrompt: 'Name one observable trace you would need before this write-path is safe.',
    teachBackPrompt: 'In one sentence, explain the design Ask state as if you were briefing an engineer.',
  },
  {
    id: 'design',
    label: 'Design',
    shortLabel: 'Design',
    primaryQuestions: [
      'Who experiences the result?',
      'Is uncertainty readable?',
      'Can a person intervene before harm lands?',
    ],
    watchesFor: 'Who feels the result, and whether a person can stop it in time.',
    onThisCase:
      'A quiet participant would be removed without a conversation. Can anyone see that coming and hold the send?',
    learnerJob: 'Can a person understand, question, and stop what will happen?',
    exampleNeedToSee: 'A visible Ask state — hold the send without opening a transcript.',
    blindSpot: 'Approval fatigue and misplaced trust.',
    chapterHighlight:
      'The Ask state: make uncertainty visible, and keep a human in the loop. User signals arrive after harm. They cannot be the safety net.',
    inspectPrompts: [
      'Would a participant understand why they were removed?',
      'Does the card hide doubt behind a percentage?',
      'Where does a facilitator pause the send without hunting through a transcript?',
    ],
    needToSeePrompt: 'Name one intervention a person should be able to make before this acts.',
    teachBackPrompt: 'In one sentence, explain the PM acceptance line as if you were briefing strategy.',
  },
  {
    id: 'strategy',
    label: 'Strategy',
    shortLabel: 'Strategy',
    primaryQuestions: [
      'Does this create value, or only speed?',
      'Who owns it when it scales?',
      'What does a silent failure cost the institution?',
    ],
    watchesFor: 'Value versus speed, and who owns a silent miss.',
    onThisCase:
      'A faster send is not a better program. If the auto-removal is wrong, who explains it next week?',
    learnerJob: 'Who owns the decision and its consequences?',
    exampleNeedToSee: 'A named owner after this room ends — not “the agent handled it.”',
    blindSpot: 'Scaling before proving adoption.',
    chapterHighlight:
      'Ownership and the cost of a silent failure — not just a faster send. Lab scores are not deployed work. Who absorbs the gap?',
    inspectPrompts: [
      'If this auto-removes people, who explains it to them next week?',
      'Does automation here buy capacity, or spend trust?',
      'Who is the named owner after the facilitator leaves the room?',
    ],
    needToSeePrompt: 'Name one ownership or cost question that must be answered before this scales.',
    teachBackPrompt: 'In one sentence, explain the design handoff as if you were briefing a PM.',
  },
] as const

/** One persistent statement per seat. Shown in every chapter's "Your seat" callout. */
export const TRUST_ROLE_STANCE: Record<TrustRoleId, string> = {
  pm: 'Define what good means.',
  engineering: 'Make the path observable and recoverable.',
  design: 'Make uncertainty and intervention legible.',
  strategy: 'Name the owner, value, and risk.',
}

export const TRUST_COMBINED_STRATEGY_DESIGN = {
  id: 'strategy-design' as const,
  label: 'Strategy / Design',
  note: 'Use this combined card when the room has three seats. Public LMS still asks for one primary seat.',
}

export function getTrustRole(id: TrustRoleId | null | undefined): TrustRole | undefined {
  if (!id) return undefined
  return TRUST_ROLES.find((role) => role.id === id)
}
