/**
 * Founder Attention OS — real tool-guide capture manifest.
 *
 * These are real screenshots / recordings, never generated UI.
 * Cloudinary stores the approved captures using stable IDs.
 */

export type ToolGuideCaptureStatus =
  | 'needed'
  | 'captured'
  | 'approved'
  | 'replace-after-ui-change'

export type ToolGuideCapture = {
  id: string
  tool:
    | 'chatgpt'
    | 'claude'
    | 'google-calendar'
    | 'gmail'
    | 'airtable-crm'
    | 'quickbooks'
    | 'n8n'
  level: 'I' | 'II' | 'III' | 'V'
  module: string
  title: string
  purpose: string
  kind: 'screenshot' | 'video'
  status: ToolGuideCaptureStatus
  folder: string
}

const ROOT = 'moisestech/workshops/build-your-ai-daily-operator/09-tool-guides'

function capture(
  config: Omit<ToolGuideCapture, 'status'> & {
    status?: ToolGuideCaptureStatus
  },
): ToolGuideCapture {
  return { status: 'needed', ...config }
}

export const DAILY_OPERATOR_TOOL_GUIDES: readonly ToolGuideCapture[] = [
  capture({
    id: 'ado-howto-chatgpt-l1-goal-01',
    tool: 'chatgpt',
    level: 'I',
    module: 'm01',
    title: 'State one 30-day outcome',
    purpose: 'Show a participant beginning with a business outcome rather than a task list.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-founder-profile-02',
    tool: 'chatgpt',
    level: 'I',
    module: 'm03',
    title: 'Build the Founder Profile progressively',
    purpose: 'Show the model asking only the context questions that could change prioritization.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-operator-setup-03',
    tool: 'chatgpt',
    level: 'I',
    module: 'm03-m04',
    title: 'Create Attention Rules and the Daily Operator',
    purpose: 'Show durable operating context being turned into reusable instructions rather than a one-off prompt.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-daily-brief-04',
    tool: 'chatgpt',
    level: 'I',
    module: 'm04',
    title: 'Generate a Daily Operating Brief',
    purpose: 'Show the first real brief generated from manually supplied commitments, signals, and tasks.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-challenge-evidence-05',
    tool: 'chatgpt',
    level: 'I',
    module: 'm02-m04',
    title: 'Challenge the ranking and inspect the evidence',
    purpose: 'Show priority #1 versus #2 and separate Fact, Interpretation, and Recommendation in one canonical teaching capture.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-friction-06',
    tool: 'chatgpt',
    level: 'I',
    module: 'm08',
    title: 'Identify one observed friction',
    purpose: 'Show the model naming repeated retrieval, reconciliation, memory, transfer, decision, approval, or communication work without proposing automation yet.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-seven-day-07',
    tool: 'chatgpt',
    level: 'I',
    module: 'capstone',
    title: 'Start the seven-day experiment',
    purpose: 'Show the participant turning corrections and manually reconstructed information into the next operating-system improvement.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-demo-video',
    tool: 'chatgpt',
    level: 'I',
    module: 'm01-m04',
    title: 'Level I end-to-end demo',
    purpose: 'A short recording from 30-day outcome through first friction note.',
    kind: 'video',
    folder: `${ROOT}/chatgpt/level-i`,
  }),

  capture({
    id: 'ado-howto-claude-l1-goal-01',
    tool: 'claude',
    level: 'I',
    module: 'm01',
    title: 'State one 30-day outcome',
    purpose: 'Claude equivalent of the outcome-first opening.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-founder-profile-02',
    tool: 'claude',
    level: 'I',
    module: 'm03',
    title: 'Build the Founder Profile progressively',
    purpose: 'Claude equivalent of the progressive context interview.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-operator-setup-03',
    tool: 'claude',
    level: 'I',
    module: 'm03-m04',
    title: 'Create Attention Rules and the Daily Operator',
    purpose: 'Claude equivalent of turning durable operating context into reusable instructions.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-daily-brief-04',
    tool: 'claude',
    level: 'I',
    module: 'm04',
    title: 'Generate a Daily Operating Brief',
    purpose: 'Claude equivalent of the first operating brief.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-challenge-evidence-05',
    tool: 'claude',
    level: 'I',
    module: 'm02-m04',
    title: 'Challenge the ranking and inspect the evidence',
    purpose: 'Show the same priority tradeoff and Fact / Interpretation / Recommendation boundary in Claude.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-friction-06',
    tool: 'claude',
    level: 'I',
    module: 'm08',
    title: 'Identify one observed friction',
    purpose: 'Claude equivalent of identifying friction before proposing automation.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-seven-day-07',
    tool: 'claude',
    level: 'I',
    module: 'capstone',
    title: 'Start the seven-day experiment',
    purpose: 'Claude equivalent of turning corrections into the next operating-system improvement.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-demo-video',
    tool: 'claude',
    level: 'I',
    module: 'm01-m04',
    title: 'Level I end-to-end demo',
    purpose: 'A short Claude recording from 30-day outcome through first friction note.',
    kind: 'video',
    folder: `${ROOT}/claude/level-i`,
  }),

  capture({
    id: 'ado-howto-calendar-l2-read-commitments-01',
    tool: 'google-calendar',
    level: 'II',
    module: 'm05',
    title: 'Read actual commitments',
    purpose: 'Show calendar as a source of scheduled commitments, not a source of business priority.',
    kind: 'screenshot',
    folder: `${ROOT}/google-calendar/level-ii`,
  }),
  capture({
    id: 'ado-howto-calendar-l2-capacity-audit-02',
    tool: 'google-calendar',
    level: 'II',
    module: 'm05',
    title: 'Audit capacity',
    purpose: 'Show fragmentation, back-to-back meetings, preparation gaps, and missing focus time.',
    kind: 'screenshot',
    folder: `${ROOT}/google-calendar/level-ii`,
  }),
  capture({
    id: 'ado-howto-gmail-l2-followup-signal-01',
    tool: 'gmail',
    level: 'II',
    module: 'm06',
    title: 'Retrieve relationship context',
    purpose: 'Show email supplying a follow-up signal without granting permission to send.',
    kind: 'screenshot',
    folder: `${ROOT}/gmail/level-ii`,
  }),
  capture({
    id: 'ado-howto-airtable-l2-source-of-truth-01',
    tool: 'airtable-crm',
    level: 'II',
    module: 'm06',
    title: 'CRM as source of opportunity state',
    purpose: 'Show one lead/opportunity record as an authoritative pipeline signal.',
    kind: 'screenshot',
    folder: `${ROOT}/airtable-crm/level-ii`,
  }),

  capture({
    id: 'ado-howto-quickbooks-l3-receivable-01',
    tool: 'quickbooks',
    level: 'III',
    module: 'm07',
    title: 'Read an economically meaningful receivable',
    purpose: 'Show accounting context entering the brief only when it could change a decision.',
    kind: 'screenshot',
    folder: `${ROOT}/quickbooks/level-iii`,
  }),
  capture({
    id: 'ado-howto-quickbooks-l3-business-pulse-02',
    tool: 'quickbooks',
    level: 'III',
    module: 'm07',
    title: 'Business Pulse from read-only signals',
    purpose: 'Show revenue, collection, or obligation context without turning the module into accounting training.',
    kind: 'screenshot',
    folder: `${ROOT}/quickbooks/level-iii`,
  }),

  capture({
    id: 'ado-howto-n8n-l5-workflow-01',
    tool: 'n8n',
    level: 'V',
    module: 'm10',
    title: 'Trigger → Context → Reasoning',
    purpose: 'Show the first half of the canonical governed workflow.',
    kind: 'screenshot',
    folder: `${ROOT}/n8n/level-v`,
  }),
  capture({
    id: 'ado-howto-n8n-l5-approval-02',
    tool: 'n8n',
    level: 'V',
    module: 'm11',
    title: 'Output → Approval → Action',
    purpose: 'Show human approval visibly separating AI reasoning from consequential action.',
    kind: 'screenshot',
    folder: `${ROOT}/n8n/level-v`,
  }),
  capture({
    id: 'ado-howto-n8n-l5-record-03',
    tool: 'n8n',
    level: 'V',
    module: 'm10',
    title: 'Action → Record',
    purpose: 'Show the workflow writing a durable record after the approved action.',
    kind: 'screenshot',
    folder: `${ROOT}/n8n/level-v`,
  }),
  capture({
    id: 'ado-howto-n8n-l5-demo-video',
    tool: 'n8n',
    level: 'V',
    module: 'm10-m11',
    title: 'Canonical governed workflow demo',
    purpose: 'A short end-to-end recording of Trigger → Context → Reasoning → Output → Approval → Action → Record.',
    kind: 'video',
    folder: `${ROOT}/n8n/level-v`,
  }),
] as const
