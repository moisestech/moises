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

const ROOT = 'dccmiami/workshops/ai-daily-operator/09-tool-guides'

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
    title: 'Progressive Founder Profile interview',
    purpose: 'Show the model asking one useful business-context question at a time.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-daily-brief-05',
    tool: 'chatgpt',
    level: 'I',
    module: 'm04',
    title: 'Generate a Daily Operating Brief',
    purpose: 'Show the first real brief generated from manually supplied signals.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-challenge-priority-06',
    tool: 'chatgpt',
    level: 'I',
    module: 'm04',
    title: 'Challenge the ranking',
    purpose: 'Show the participant asking why priority one outranks priority two.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-fact-interpretation-07',
    tool: 'chatgpt',
    level: 'I',
    module: 'm02',
    title: 'Fact / Interpretation / Recommendation',
    purpose: 'Show the reasoning boundary on the highest-priority recommendation.',
    kind: 'screenshot',
    folder: `${ROOT}/chatgpt/level-i`,
  }),
  capture({
    id: 'ado-howto-chatgpt-l1-demo-video',
    tool: 'chatgpt',
    level: 'I',
    module: 'm01-m04',
    title: 'Level I end-to-end demo',
    purpose: 'A short recording from goal through first friction note.',
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
    title: 'Progressive Founder Profile interview',
    purpose: 'Claude equivalent of the progressive context interview.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-daily-brief-05',
    tool: 'claude',
    level: 'I',
    module: 'm04',
    title: 'Generate a Daily Operating Brief',
    purpose: 'Claude equivalent of the first operating brief.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-challenge-priority-06',
    tool: 'claude',
    level: 'I',
    module: 'm04',
    title: 'Challenge the ranking',
    purpose: 'Show the same inspectable tradeoff in Claude.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-fact-interpretation-07',
    tool: 'claude',
    level: 'I',
    module: 'm02',
    title: 'Fact / Interpretation / Recommendation',
    purpose: 'Show the same epistemic boundary in Claude.',
    kind: 'screenshot',
    folder: `${ROOT}/claude/level-i`,
  }),
  capture({
    id: 'ado-howto-claude-l1-demo-video',
    tool: 'claude',
    level: 'I',
    module: 'm01-m04',
    title: 'Level I end-to-end demo',
    purpose: 'A short Claude recording from goal through first friction note.',
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
