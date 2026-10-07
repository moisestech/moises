/**
 * Build Your AI Daily Operator — canonical program.
 * Competency map and public positioning. Lessons and operator prompts attach later.
 * DAILY_OPERATOR_BENCHMARK_NOTES is author context. Do not render it.
 */

export const DAILY_OPERATOR_SLUG = 'build-your-ai-daily-operator' as const
export const DAILY_OPERATOR_HREF = `/workshop/${DAILY_OPERATOR_SLUG}` as const

export const DAILY_OPERATOR_TITLE = 'Build Your AI Daily Operator'
export const DAILY_OPERATOR_METHOD = 'Founder Attention OS'
export const DAILY_OPERATOR_PROMISE =
  'Know what deserves your attention, and build the systems that support it.'
export const DAILY_OPERATOR_STATUS = 'Level I is pilot-ready for hosted workshops. The full Founder Attention OS curriculum remains in development.'
export const DAILY_OPERATOR_SENTENCE =
  'The course teaches someone to make their work progressively legible to an intelligent system.'

export const DAILY_OPERATOR_FOR = {
  hosts: 'Accelerators, chambers, arts institutions, and schools that need a curriculum they can host.',
  participants: 'Founders, artists, small-business owners, and institutional leaders deciding whether Level I is the right session.',
  case: 'On this site the worked example is a creative practice. DCC Miami is the documented operating case.',
  instructor: 'Moises Sanabria teaches it. The method stays his.',
} as const

export const DAILY_OPERATOR_REFUSALS = [
  'Learning a chatbot.',
  'Prompt engineering as the destination.',
  '“Automate your business.”',
  'An AI chief of staff as the intellectual property.',
  'Save time, multiply output, do more.',
] as const

export const DAILY_OPERATOR_OWNS = [
  {
    title: 'Attention before automation',
    detail: 'The first question is what deserves a person, not which tool to connect.',
  },
  {
    title: 'Four lenses',
    detail:
      'Judgment runs through Commitments, Revenue, Risk, and Capacity. Nonprofit and cultural work uses Mission / Funding in place of Revenue.',
  },
  {
    title: 'Friction as evidence',
    detail:
      'A repeated manual act is scored on Impact, Frequency, Ease, and Risk. It is not assumed to be a build.',
  },
  {
    title: 'Tool independence',
    detail: 'ChatGPT, Claude, and no-code tools are mediums inside the method. The method does not belong to one of them.',
  },
  {
    title: 'Artifacts',
    detail: 'Participants leave owning a record of how the work operates, not a packet of prompts.',
  },
] as const

export const DAILY_OPERATOR_PATH = [
  { id: 'attention', label: 'Attention', question: 'What needs me?' },
  { id: 'context', label: 'Context', question: 'What must the system understand?' },
  { id: 'signals', label: 'Signals', question: 'What does the work already know?' },
  { id: 'judgment', label: 'Judgment', question: 'What matters, and why?' },
  { id: 'friction', label: 'Friction', question: 'What keeps happening by hand?' },
  { id: 'systems', label: 'Systems', question: 'What should change, or run without being retold?' },
] as const

export const DAILY_OPERATOR_LENSES = [
  { id: 'commitments', label: 'Commitments', detail: 'What has already been promised.' },
  { id: 'revenue', label: 'Revenue', detail: 'What economically, or missionally, matters. Cultural work may use Mission / Funding here.' },
  { id: 'risk', label: 'Risk', detail: 'What fails, slips, or goes unreviewed if it waits.' },
  { id: 'capacity', label: 'Capacity', detail: 'What a person can actually carry.' },
] as const

export const DAILY_OPERATOR_JUDGMENT = [
  'What matters?',
  'What do we know?',
  'What does it mean?',
  'What should happen?',
] as const

export const DAILY_OPERATOR_PROGRESSION =
  'The sequence is chat, then work, then workflow, then system. Automation comes only after a person can run the brief by hand.'

export type DailyOperatorLevelId = 'I' | 'II' | 'III' | 'IV' | 'V'

export type DailyOperatorLevel = {
  id: DailyOperatorLevelId
  title: string
  time: string
  question: string
  note?: string
  can: readonly string[]
  leavesWith: readonly string[]
}

export const DAILY_OPERATOR_LEVELS: readonly DailyOperatorLevel[] = [
  {
    id: 'I',
    title: 'AI Daily Operator',
    time: '90 minutes',
    question: 'What deserves my attention today?',
    note: 'No integrations. This is the session a host can book now. It has to be useful on ordinary tools.',
    can: [
      'Say what AI can and cannot reliably do with the material in front of them.',
      'Separate an outcome from a task.',
      'Describe the work through Commitments, Revenue or Mission, Risk, and Capacity.',
      'Write a Founder Profile and name what the system may not do without approval.',
      'Produce a first Daily Operating Brief from information they already have.',
      'Name one repeated friction and leave it as evidence.',
    ],
    leavesWith: [
      'Founder Profile',
      'Attention Rules',
      'Daily Operator',
      'Daily Operating Brief',
      'An initial note toward the Friction Map',
    ],
  },
  {
    id: 'II',
    title: 'Connected Operator',
    time: 'About 2 hours',
    question: 'Which source should the system trust for which kind of information?',
    note: 'The lesson is not how to connect a calendar. Missing is unknown. It is not false.',
    can: [
      'Assign each signal a source of truth, a frequency, a trust level, and a permission.',
      'Treat a missing field as unknown, not as false.',
      'Map calendar to commitments and capacity, email to relationships and follow-ups, documents to context and policy, and tasks to intended work.',
    ],
    leavesWith: ['Business Source Map', 'Permission Map'],
  },
  {
    id: 'III',
    title: 'Business Pulse',
    time: '60 minutes in the full curriculum',
    question: 'What economically matters?',
    note: 'Money enters here, not during onboarding. A figure belongs in the brief only when it changes a decision.',
    can: [
      'Read revenue, receivables, pipeline, cash constraint, and delivery obligation as inputs to a decision.',
      'Refuse a metric that does not change what happens today.',
      'Write a brief that names the economically meaningful issue instead of a list of metrics.',
    ],
    leavesWith: ['Business Pulse'],
  },
  {
    id: 'IV',
    title: 'Friction Intelligence',
    time: '60 minutes in the full curriculum',
    question: 'What repeatedly steals attention?',
    note: 'This is the consulting bridge. A host can commission the diagnosis without commissioning an automation.',
    can: [
      'Classify a repeated manual act as retrieval, reconciliation, memory, transfer, decision, approval, or communication friction.',
      'Score it on Impact, Frequency, Ease, and Risk.',
      'Decline to automate when the score does not justify a system.',
    ],
    leavesWith: ['Friction Log', 'Friction Map'],
  },
  {
    id: 'V',
    title: 'From operator to operating system',
    time: 'Cohort or advanced workshop',
    question: 'How should one chosen friction actually run?',
    note: 'Automation is taught only here. The tool can be ChatGPT, Claude, Zapier, Make, n8n, or whatever already holds the work.',
    can: [
      'Choose one friction and specify Trigger, Context, Reasoning, Output, Approval, Action, and Record.',
      'Place that workflow on a ladder: manual, assisted, connected, scheduled, approval-based action, conditional automation.',
      'Keep a person responsible before a consequential action.',
      'Run a Weekly Operating Review and name a 90-day improvement.',
    ],
    leavesWith: ['Workflow Blueprint', 'Weekly Operating Review', '90-Day Improvement Roadmap'],
  },
]

/** Host-facing names. A buyer can take Level I alone, or the sequence. */
export const DAILY_OPERATOR_CREDENTIALS = [
  { id: 'I' as const, name: 'AI Daily Operator', time: '90 minutes', offer: 'Build a personal operating brief.' },
  { id: 'II' as const, name: 'Connected Business', time: '+2 hours', offer: 'Connect business context and trustworthy sources.' },
  { id: 'III' as const, name: 'Business Friction', time: '+2 hours', offer: 'Diagnose the systems that cost attention.' },
  { id: 'IV' as const, name: 'AI Workflow Builder', time: '+3–4 hours', offer: 'Design and implement one workflow.' },
  { id: 'V' as const, name: 'AI Operating System', time: 'Cohort', offer: 'Recurring intelligence, permissions, and operations.' },
] as const

export type DailyOperatorArtifact = {
  n: number
  name: string
  level: DailyOperatorLevelId
  detail: string
}

export const DAILY_OPERATOR_ARTIFACTS: readonly DailyOperatorArtifact[] = [
  { n: 1, name: 'Founder Profile', level: 'I', detail: 'What the system must understand about the person and the work.' },
  { n: 2, name: 'Attention Rules', level: 'I', detail: 'What earns attention, and what does not.' },
  { n: 3, name: 'Daily Operator', level: 'I', detail: 'The working instructions for a brief.' },
  { n: 4, name: 'Daily Operating Brief', level: 'I', detail: 'A first brief, made from information already at hand.' },
  { n: 5, name: 'Business Source Map', level: 'II', detail: 'Signal, source of truth, frequency, trust, and permission.' },
  { n: 6, name: 'Permission Map', level: 'II', detail: 'What the system may read, draft, or never do alone.' },
  { n: 7, name: 'Business Pulse', level: 'III', detail: 'Revenue, commitments, collections, pipeline, risk, and capacity, as decisions.' },
  { n: 8, name: 'Friction Log', level: 'IV', detail: 'Repeated manual acts, written down before they are scored.' },
  { n: 9, name: 'Friction Map', level: 'IV', detail: 'Those acts classified and scored. Level I leaves only a first note.' },
  { n: 10, name: 'Workflow Blueprint', level: 'V', detail: 'Trigger, context, reasoning, output, approval, action, record.' },
  { n: 11, name: 'Weekly Operating Review', level: 'V', detail: 'How the brief is corrected after a week of use.' },
  { n: 12, name: '90-Day Improvement Roadmap', level: 'V', detail: 'One sequence of improvements, not a pile of automations.' },
]

export const DAILY_OPERATOR_OVERLAYS = [
  {
    id: 'creative',
    title: 'Creative / artist',
    caseStudy: 'DCC Miami is the documented case.',
    lines: [
      'Commitments: exhibitions, commissions, grants.',
      'Revenue: sales, workshops, commissions.',
      'Signals: email, calendar, grant deadlines.',
      'Friction: applications, follow-ups, documentation.',
    ],
  },
  {
    id: 'consultant',
    title: 'Consultant / agency',
    lines: [
      'Commitments: deliverables.',
      'Revenue: proposals and retainers.',
      'Signals: CRM, email, invoices.',
      'Friction: scope, follow-up, reporting.',
    ],
  },
  {
    id: 'service',
    title: 'Local service',
    lines: [
      'Commitments: appointments and jobs.',
      'Revenue: quotes and collections.',
      'Signals: calendar, messages, accounting.',
      'Friction: booking, reminders, receivables.',
    ],
  },
  {
    id: 'retail',
    title: 'Retail / hospitality',
    lines: [
      'Commitments: staffing, inventory, promotions.',
      'Revenue: daily sales.',
      'Signals: point of sale, calendar, reviews.',
      'Friction: scheduling, customer communication, stock.',
    ],
  },
  {
    id: 'nonprofit',
    title: 'Nonprofit / cultural',
    lines: [
      'The second lens is Mission / Funding, rather than Revenue alone.',
      'Signals: grant deadlines, program delivery, donor pipeline, board commitments, reporting, attendance.',
    ],
  },
  {
    id: 'professional',
    title: 'Professional services',
    lines: [
      'Commitments: client matters.',
      'Revenue: billable work and pipeline.',
      'Risk: deadlines and compliance.',
      'Capacity: professional time.',
      'Information and privacy guardrails are stricter.',
    ],
  },
] as const

export const DAILY_OPERATOR_LABS = [
  'Sales and follow-up',
  'Finance and cash awareness',
  'Client delivery',
  'Marketing',
  'Operations',
  'Hiring and team management',
  'Creative practice',
] as const

export const DAILY_OPERATOR_SCALEUP = [
  { range: '0–10', title: 'Why productivity is not enough' },
  { range: '10–20', title: 'Commitments, Revenue, Risk, Capacity' },
  { range: '20–35', title: 'Teach the system the business' },
  { range: '35–50', title: 'Build the Daily Operator' },
  { range: '50–60', title: 'Run tomorrow through it' },
  { range: '60–70', title: 'Where did the information come from?' },
  { range: '70–80', title: 'Find one friction' },
  { range: '80–88', title: 'Choose one improvement' },
  { range: '88–90', title: 'Start a seven-day experiment' },
] as const

export type DailyOperatorModule = {
  n: number
  title: string
  question: string
  time: string
  level: DailyOperatorLevelId
}

export const DAILY_OPERATOR_MODULES: readonly DailyOperatorModule[] = [
  { n: 1, title: 'Attention Before Automation', question: 'What actually deserves me?', time: '30 min', level: 'I' },
  { n: 2, title: 'AI Fluency', question: 'What should I delegate?', time: '30 min', level: 'I' },
  { n: 3, title: 'Business Context', question: 'What must the system understand about this work?', time: '45 min', level: 'I' },
  { n: 4, title: 'Daily Operator', question: 'How should the day be prioritized?', time: '60 min', level: 'I' },
  { n: 5, title: 'Calendar as Capacity', question: 'What have I actually committed?', time: '45 min', level: 'II' },
  { n: 6, title: 'Signals and Sources', question: 'Where does the truth of the work live?', time: '45 min', level: 'II' },
  { n: 7, title: 'Money and Pipeline', question: 'What economically matters?', time: '60 min', level: 'III' },
  { n: 8, title: 'Friction Intelligence', question: 'What repeatedly steals attention?', time: '60 min', level: 'IV' },
  { n: 9, title: 'Automation Selection', question: 'What is actually worth automating?', time: '45 min', level: 'V' },
  { n: 10, title: 'Build One Workflow', question: 'How should that one system operate?', time: '90 min', level: 'V' },
  { n: 11, title: 'Trust and Approval', question: 'Where must a person remain responsible?', time: '30 min', level: 'V' },
  { n: 12, title: 'Weekly Operator Review', question: 'How does the system improve?', time: '30 min', level: 'V' },
]

export const DAILY_OPERATOR_CAPSTONE = {
  title: 'Seven-day experiment',
  time: 'Asynchronous',
  level: 'V' as const,
  detail: 'Use the brief for seven days. Note what it got wrong, what was missing, and what still required a person.',
}

/**
 * Market benchmark. Author notes only — do not render on the public page.
 * Territory: attention allocation and business legibility, not literacy, prompting, or a chief of staff.
 */
export const DAILY_OPERATOR_BENCHMARK_NOTES = {
  reviewed: '2026-10-05',
  territory:
    'Mass courses already cover literacy, prompting, productivity, reusable workflows, a chief of staff, connected SMB tools, automation implementation, and executive strategy. The open position is one stack: learn, build, connect, diagnose, automate, operate — aimed at finite attention rather than more output.',
  nearest:
    'A chief-of-staff course and packaged SMB workflows validate the daily brief and the cross-functional pulse. They do not own the question of what deserves attention, or friction as evidence before automation.',
  pedagogy:
    'Borrow short modules, a try-it rhythm, smallest useful version first, and human review before consequential action. Do not copy a vendor method. Judgment sequence: What matters? What do we know? What does it mean? What should happen?',
} as const
