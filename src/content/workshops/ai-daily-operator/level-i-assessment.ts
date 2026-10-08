/**
 * Founder Attention OS — Level I competency check.
 *
 * Scenario-based by design. This is not a product-UI quiz.
 * The assessment tests whether the participant can transfer the method.
 */

export type LevelIAssessmentOption = {
  id: string
  label: string
}

export type LevelIAssessmentQuestion = {
  id: string
  category:
    | 'outcomes'
    | 'attention'
    | 'evidence'
    | 'capacity'
    | 'permissions'
    | 'friction'
    | 'privacy'
  prompt: string
  options: readonly LevelIAssessmentOption[]
  correctOptionId: string
  rationale: string
}

export const LEVEL_I_ASSESSMENT_PASS_PERCENT = 80
export const LEVEL_I_ASSESSMENT_PASS_COUNT = 8

export const LEVEL_I_ASSESSMENT: readonly LevelIAssessmentQuestion[] = [
  {
    id: 'outcome-before-task-list',
    category: 'outcomes',
    prompt:
      'A founder starts the exercise with 18 tasks and no stated business outcome. What should happen first?',
    options: [
      { id: 'a', label: 'Ask the AI to rank all 18 tasks immediately.' },
      { id: 'b', label: 'Choose one meaningful outcome that should be different in the next 30 days.' },
      { id: 'c', label: 'Connect the calendar so the AI has more data.' },
      { id: 'd', label: 'Automate the easiest five tasks.' },
    ],
    correctOptionId: 'b',
    rationale:
      'The operator needs a destination before it can judge activity. Founder Attention OS starts with an outcome, not a larger task list.',
  },
  {
    id: 'unknown-is-not-false',
    category: 'evidence',
    prompt:
      'An invoice appears overdue in the information you provided, but you do not know whether the client paid outside the accounting system. How should the operator treat the payment status?',
    options: [
      { id: 'a', label: 'Paid, because the client is usually reliable.' },
      { id: 'b', label: 'Unpaid, because the invoice is overdue.' },
      { id: 'c', label: 'Unknown until an authoritative source confirms it.' },
      { id: 'd', label: 'Ignore the invoice because financial data is too risky.' },
    ],
    correctOptionId: 'c',
    rationale:
      'Missing information is unknown, not false. A useful operator identifies the missing source instead of turning uncertainty into a fact.',
  },
  {
    id: 'four-lens-tradeoff',
    category: 'attention',
    prompt:
      'A new proposal could be worth $8,000, but a paid client deliverable is due today. What is the right way to decide which deserves attention first?',
    options: [
      { id: 'a', label: 'Always choose the highest possible revenue.' },
      { id: 'b', label: 'Always choose the nearest deadline.' },
      { id: 'c', label: 'Compare Commitments, Revenue / Mission, Risk, and Capacity, then make the tradeoff explicit.' },
      { id: 'd', label: 'Ask AI to choose without showing its reasoning.' },
    ],
    correctOptionId: 'c',
    rationale:
      'The four lenses exist to make competing obligations inspectable. No single lens automatically wins every situation.',
  },
  {
    id: 'capacity-is-real',
    category: 'capacity',
    prompt:
      'Your calendar has five hours of meetings, travel/setup time, and a client review that needs preparation. The operator proposes four hours of deep work. What should you do?',
    options: [
      { id: 'a', label: 'Keep the plan because deep work is important.' },
      { id: 'b', label: 'Treat the plan as unrealistic and revise it against actual capacity.' },
      { id: 'c', label: 'Move every meeting automatically.' },
      { id: 'd', label: 'Add the deep work to tomorrow as well.' },
    ],
    correctOptionId: 'b',
    rationale:
      'A calendar is a capacity model, not merely a list of meetings. The operator should plan the day you can actually carry.',
  },
  {
    id: 'fact-interpretation-recommendation',
    category: 'evidence',
    prompt:
      'The operator says, “The prospect is likely to close this week, so you should prioritize the proposal.” You only provided that the prospect opened the brief twice. Which part is the interpretation?',
    options: [
      { id: 'a', label: 'The prospect opened the brief twice.' },
      { id: 'b', label: 'The prospect is likely to close this week.' },
      { id: 'c', label: 'Prioritize the proposal.' },
      { id: 'd', label: 'All three are facts.' },
    ],
    correctOptionId: 'b',
    rationale:
      'The observed behavior is the fact. “Likely to close” is an inference. Prioritizing the proposal is the recommendation.',
  },
  {
    id: 'approval-boundary',
    category: 'permissions',
    prompt:
      'The operator drafts an email promising a client that delivery will move to Friday. What should happen next?',
    options: [
      { id: 'a', label: 'Send it automatically because the draft is complete.' },
      { id: 'b', label: 'Recommend the change, explain why, ask for approval, then act only if approved.' },
      { id: 'c', label: 'Delete the email because AI should never draft external communication.' },
      { id: 'd', label: 'Add Friday to the calendar and notify the client later.' },
    ],
    correctOptionId: 'b',
    rationale:
      'A client deadline is consequential. The default policy is Recommend → Explain → Ask → Act.',
  },
  {
    id: 'friction-before-automation',
    category: 'friction',
    prompt:
      'Three times this week you copied lead status from email into a spreadsheet. What should the first response be?',
    options: [
      { id: 'a', label: 'Build an automation immediately.' },
      { id: 'b', label: 'Record it as repeated transfer/reconciliation friction and investigate why it is happening.' },
      { id: 'c', label: 'Stop tracking lead status.' },
      { id: 'd', label: 'Buy a new CRM before reviewing the process.' },
    ],
    correctOptionId: 'b',
    rationale:
      'Friction is evidence, not an automatic invitation to automate. Observe and classify first; improve the process or source of truth before adding machinery.',
  },
  {
    id: 'productive-looking-can-wait',
    category: 'attention',
    prompt:
      'Your top outcome is to finish a paid launch package due tomorrow. Which item is the strongest candidate for “What can wait?”',
    options: [
      { id: 'a', label: 'Preparing the client review needed today.' },
      { id: 'b', label: 'Finishing the deliverable due tomorrow.' },
      { id: 'c', label: 'Researching a new AI image tool with no connection to the launch.' },
      { id: 'd', label: 'Following up on a missing file blocking the deliverable.' },
    ],
    correctOptionId: 'c',
    rationale:
      'The operator should protect attention from productive-looking work that does not materially advance the current outcome.',
  },
  {
    id: 'privacy-minimum-necessary',
    category: 'privacy',
    prompt:
      'A participant wants to paste a customer file containing bank details and unrelated confidential information so the AI can understand one deadline. What is the best Level I practice?',
    options: [
      { id: 'a', label: 'Paste the whole file because more context is always better.' },
      { id: 'b', label: 'Use only the minimum safe context needed, redact/sanitize where appropriate, or use the synthetic case.' },
      { id: 'c', label: 'Upload it only to a second AI tool.' },
      { id: 'd', label: 'Skip the exercise entirely.' },
    ],
    correctOptionId: 'b',
    rationale:
      'Level I does not require sensitive business data. Use the minimum necessary context and a synthetic fallback when real information is inappropriate.',
  },
  {
    id: 'integration-not-required',
    category: 'permissions',
    prompt:
      'A participant cannot connect Calendar, email, or QuickBooks during Level I. What does that mean?',
    options: [
      { id: 'a', label: 'They cannot complete Level I.' },
      { id: 'b', label: 'They should skip directly to workflow automation.' },
      { id: 'c', label: 'They can still complete Level I by supplying the relevant information manually or using the fictional case.' },
      { id: 'd', label: 'The facilitator should spend the workshop troubleshooting connectors.' },
    ],
    correctOptionId: 'c',
    rationale:
      'Manual input is intentional in Level I. It proves the judgment method before connectors are introduced.',
  },
] as const

export const LEVEL_I_COMPLETION_REQUIREMENTS = [
  'Founder Profile completed',
  'Attention Rules reviewed',
  'Daily Operator saved',
  'Daily Operating Brief run on a real or synthetic day',
  'At least one priority challenged',
  'Fact / Interpretation / Recommendation checked once',
  'One observed Friction Log note captured',
  `Competency check: at least ${LEVEL_I_ASSESSMENT_PASS_COUNT}/${LEVEL_I_ASSESSMENT.length} (${LEVEL_I_ASSESSMENT_PASS_PERCENT}%)`,
] as const
