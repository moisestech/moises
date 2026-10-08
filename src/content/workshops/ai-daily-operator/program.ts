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
export const DAILY_OPERATOR_STATUS =
  'Level I available for hosted pilot cohorts. Full program in development.'
export const DAILY_OPERATOR_SENTENCE =
  'You are not learning how to make AI more productive. You are learning how to make your business legible enough that an intelligent system can help you decide what deserves attention.'

export const DAILY_OPERATOR_FOR = {
  hosts: 'Accelerators, chambers, arts institutions, and schools that need a curriculum they can host.',
  participants: 'Founders, artists, small-business owners, and institutional leaders deciding whether Level I is the right session.',
  case: 'On this site the worked example is a creative practice. DCC Miami is used as a sanitized operating example while documentary evidence is still being assembled.',
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
    note: 'No integrations. In the room they build a Founder Profile, tomorrow’s brief, and one Friction Card. Attention Rules and the Daily Operator instructions are generated from the profile.',
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
    question: 'What information should the system trust?',
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
    question: 'What economically or missionally matters?',
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
    title: 'AI Workflow Builder',
    time: 'Cohort or advanced workshop',
    question: 'What should actually run differently?',
    note: 'Automation is taught only here. One governed workflow is the step into an operating system. The tool can be n8n, Zapier, Make, or whatever already holds the work.',
    can: [
      'Choose one friction and specify Trigger, Context, Reasoning, Output, Approval, Action, and Record.',
      'Place that workflow on a ladder: manual, assisted, connected, scheduled, approval-based action, conditional automation.',
      'Keep a person responsible before a consequential action.',
      'Run a Weekly Operating Review and name a 90-day improvement.',
    ],
    leavesWith: ['Workflow Blueprint', 'Weekly Operating Review', '90-Day Improvement Roadmap'],
  },
]

export type DailyOperatorArtifact = {
  n: number
  name: string
  level: DailyOperatorLevelId
  detail: string
  /** Level I only: built in the room, or generated from the Founder Profile. */
  room?: 'build' | 'generated'
}

export const DAILY_OPERATOR_ARTIFACTS: readonly DailyOperatorArtifact[] = [
  { n: 1, name: 'Founder Profile', level: 'I', room: 'build', detail: 'Built in the room. Compressed: what the system must understand about the person and the work.' },
  { n: 2, name: 'Attention Rules', level: 'I', room: 'generated', detail: 'Generated from the Founder Profile. What earns attention, and what does not.' },
  { n: 3, name: 'Daily Operator', level: 'I', room: 'generated', detail: 'Generated from the Founder Profile. The working instructions for a brief.' },
  { n: 4, name: 'Daily Operating Brief', level: 'I', room: 'build', detail: 'Built in the room. Tomorrow, prioritized.' },
  { n: 5, name: 'Business Source Map', level: 'II', detail: 'Signal, source of truth, frequency, trust, and permission.' },
  { n: 6, name: 'Permission Map', level: 'II', detail: 'What the system may read, draft, or never do alone.' },
  { n: 7, name: 'Business Pulse', level: 'III', detail: 'Revenue, commitments, collections, pipeline, risk, and capacity, as decisions.' },
  { n: 8, name: 'Friction Log', level: 'IV', detail: 'Repeated manual acts, written down before they are scored.' },
  { n: 9, name: 'Friction Map', level: 'IV', detail: 'Those acts classified and scored. Level I builds one Friction Card toward this map.' },
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
  { range: '0–5', title: 'Before and after', why: 'Show the brief before explaining the theory.' },
  { range: '5–12', title: 'Attention is not productivity', why: 'Establish the point of view.' },
  { range: '12–20', title: 'Commitments, Revenue or Mission, Risk, Capacity', why: 'Teach the decision model.' },
  { range: '20–32', title: 'Build a Founder Profile', why: 'Make the work legible.' },
  { range: '32–47', title: 'Generate the first Daily Operator', why: 'Leave with the instructions, produced from the profile.' },
  { range: '47–57', title: 'Run tomorrow through it', why: 'Test it on a real day.' },
  { range: '57–65', title: 'Critique the answer', why: 'Separate fact, interpretation, and recommendation.' },
  { range: '65–74', title: 'Find one friction', why: 'One card: something retrieved, remembered, reconciled, copied, or decided by hand.' },
  { range: '74–82', title: 'DCC, connected', why: 'Show what a connection changes. Participants do not need to understand DCC to understand their own work.' },
  { range: '82–87', title: 'Choose one improvement', why: 'No automation sprawl.' },
  { range: '87–90', title: 'Start the seven-day experiment', why: 'The session ends on use.' },
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
  { n: 7, title: 'Money and Pipeline', question: 'What economically or missionally matters?', time: '60 min', level: 'III' },
  { n: 8, title: 'Friction Intelligence', question: 'What repeatedly steals attention?', time: '60 min', level: 'IV' },
  { n: 9, title: 'Automation Selection', question: 'What is actually worth automating?', time: '45 min', level: 'V' },
  { n: 10, title: 'Build One Workflow', question: 'How should that one system operate?', time: '90 min', level: 'V' },
  { n: 11, title: 'Trust and Approval', question: 'Where must a person remain responsible?', time: '30 min', level: 'V' },
  { n: 12, title: 'Weekly Operator Review', question: 'How does the system improve?', time: '30 min', level: 'V' },
]

export const DAILY_OPERATOR_CAPSTONE = {
  title: 'The Seven-Day Attention Experiment',
  time: 'Starts at the end of Level I',
  detail: 'Use the Daily Operator for seven days. The educational product becomes an operational diagnostic.',
  track: [
    'What it got right.',
    'What it got wrong.',
    'What information was missing.',
    'What repeatedly required manual work.',
    'Where it should not have acted.',
    'What one system change would improve next week.',
  ],
}

export const DAILY_OPERATOR_PROJECTS = [
  {
    id: 'I' as const,
    product: 'AI Daily Operator',
    project: 'Tomorrow Brief',
    able: 'Turn commitments and objectives into a prioritized day.',
    artifact: 'Daily Operating Brief',
    builds: ['Founder Profile', 'Tomorrow’s Operating Brief', 'Friction Card'],
    generated: ['Attention Rules', 'Daily Operator'],
  },
  {
    id: 'II' as const,
    product: 'Connected Operator',
    project: 'Source of Truth Map',
    able: 'Tell the system where different kinds of business truth live.',
    artifact: 'Business Source Map and Permission Map',
  },
  {
    id: 'III' as const,
    product: 'Business Pulse',
    project: 'Money-to-Attention Case',
    able: 'Decide when money or pipeline information should change today’s priorities.',
    artifact: 'Business Pulse',
  },
  {
    id: 'IV' as const,
    product: 'Friction Intelligence',
    project: 'Friction Autopsy',
    able: 'Identify repeated manual work and choose what deserves intervention.',
    artifact: 'Friction Map',
  },
  {
    id: 'V' as const,
    product: 'AI Workflow Builder',
    project: 'Build One Flow',
    able: 'Turn one justified friction into a governed workflow.',
    artifact: 'Workflow Blueprint and 90-Day Roadmap',
  },
] as const

export const DAILY_OPERATOR_SOFTWARE = {
  rule: 'Level I never fails because somebody does not have an integration.',
  layers: [
    { layer: 'AI', defaultTool: 'ChatGPT or Claude', alternatives: 'Gemini later, if needed', requirement: 'Required' },
    { layer: 'Calendar', defaultTool: 'Google Calendar', alternatives: 'Microsoft Outlook', requirement: 'Level II optional' },
    { layer: 'Email', defaultTool: 'Gmail', alternatives: 'Outlook', requirement: 'Level II optional' },
    { layer: 'Documents', defaultTool: 'Google Drive or files', alternatives: 'Microsoft 365, Dropbox', requirement: 'Optional' },
    { layer: 'Finance', defaultTool: 'QuickBooks', alternatives: 'A manual worksheet or sample data', requirement: 'Level III optional' },
    { layer: 'CRM', defaultTool: 'Airtable', alternatives: 'HubSpot, Sheets, Notion', requirement: 'Level II–IV optional' },
    { layer: 'Automation', defaultTool: 'n8n', alternatives: 'Zapier, Make', requirement: 'Level V' },
    { layer: 'Course site', defaultTool: 'moises.tech', alternatives: '—', requirement: 'Canonical home' },
    { layer: 'Curriculum source', defaultTool: 'GitHub', alternatives: '—', requirement: 'Internal source of truth' },
    { layer: 'Intake and results', defaultTool: 'Airtable', alternatives: 'Forms or Sheets', requirement: 'Instructor operations' },
    { layer: 'DCC example', defaultTool: 'Airtable and the studio’s systems', alternatives: '—', requirement: 'Case study, not a prerequisite' },
  ],
} as const

export const DAILY_OPERATOR_FORMATS = {
  demo: {
    calendar: [
      { time: '10:00', item: 'Meeting' },
      { time: '11:00', item: 'Email' },
      { time: '2:00', item: 'Client call' },
      { time: '4:00', item: 'ScaleUp' },
    ],
    brief: [
      { label: 'Today’s outcome', text: 'Send the proposal that can generate this month’s next engagement, and protect the production block required for Friday.' },
      { label: 'Needs you', text: '10:00 client call — a scope decision.' },
      { label: 'Money', text: 'One meaningful invoice is overdue.' },
      { label: 'Focus', text: '11:15–12:45, the proposal.' },
      { label: 'Can wait', text: 'Website cleanup.' },
      { label: 'Friction', text: 'Two places had to be checked by hand to learn the invoice status.' },
    ],
  },
  boundary: {
    ends: 'Here is the business friction I would improve.',
    doesNotEnd: 'Now we are going to integrate everything.',
    choices: ['Do it themselves.', 'Continue to Level V.', 'Ask for it to be implemented.'],
    note: 'Implementation is a separate scope. The workshop is not the integration.',
  },
  afterward: [
    'I built an AI Daily Operator that can help me decide what deserves my attention.',
    'I discovered where my business information is fragmented.',
    'I know the one process I would improve next.',
  ],
} as const

export const DAILY_OPERATOR_PRINCIPLES = [
  { principle: 'Attention before automation', line: 'Do not automate something until you know why it deserves to exist.' },
  { principle: 'Outcome before task', line: '“Send the proposal” is a task. “Secure scope approval” is an outcome.' },
  { principle: 'Calendar is capacity', line: 'A meeting calendar is also a model of what a person can realistically carry.' },
  { principle: 'Missing is not false', line: 'If a source has no follow-up date, the system does not know that no follow-up is needed.' },
  { principle: 'Money is context', line: 'Financial information belongs in the brief when it changes a decision.' },
  { principle: 'Facts are not interpretation', line: 'Separate what happened from what the system recommends.' },
  { principle: 'Friction is evidence', line: 'Repeated manual work is something to investigate, not an automatic build.' },
  { principle: 'One improvement', line: 'Choose the highest-consequence friction.' },
  { principle: 'Human authority stays visible', line: 'Recommend, explain, ask, then act.' },
  { principle: 'Tools are replaceable', line: 'The method should survive a change of chatbot, ledger, or connector.' },
] as const

export const DAILY_OPERATOR_PRICING = {
  label: 'Ranges to test. Not a checkout, and not the artist-pilot seat rate.',
  offers: [
    { offer: 'Level I — 90 minutes, plus the later materials', individual: '$125–$175', institutional: '$1,500 hosted, up to about 15' },
    { offer: 'Levels I–II', individual: '$250–$350', institutional: '$3,000 hosted' },
    { offer: 'Levels I–IV', individual: '$450–$650', institutional: '$5,000–$6,500 hosted' },
    { offer: 'Full five-level cohort', individual: '$750–$950', institutional: '$7,500+ hosted' },
    { offer: 'Self-paced core', individual: '$199', institutional: 'Licensing later' },
    { offer: 'Friction Review', individual: '+$250–$400', institutional: 'Can be bundled' },
    { offer: 'Implementation sprint', individual: '—', institutional: '$2,500–$7,500+, separate scope' },
  ],
  scaleUp: {
    name: 'ScaleUp Pilot Cohort',
    terms: 'Sponsored pilot pricing, not a public price of zero.',
    exchange: [
      'Anonymized learning notes',
      'Participant feedback',
      'Completed friction maps',
      'Testimonials where someone agrees',
      'Before and after briefs',
    ],
  },
} as const

export const DAILY_OPERATOR_SUCCESS_METRICS = [
  { when: 'By minute 60', measure: 'Most of the room has produced a useful operating brief.' },
  { when: 'By minute 75', measure: 'Nearly everyone can name at least one concrete friction.' },
  {
    when: 'At the end',
    measure: 'Each person can name what deserves attention, what can wait, one source the work depends on, and one friction worth investigating.',
  },
  {
    when: 'Seven days later',
    measure: 'Who ran the brief again, who used it three or more times, what was repeatedly missing, which recommendations were wrong, which friction appeared most, whether they would keep using it, and whether they want Level II.',
  },
] as const

export const DAILY_OPERATOR_PILOT_TACTICS = [
  'Demo first, theory second. Earn curiosity within five minutes.',
  'Use tomorrow, not everything in the business.',
  'The system interviews the participant one question at a time.',
  'Offer a fictional-data escape hatch. Nobody has to expose financial or customer information in the room.',
  'Two-minute connector rule. If an integration becomes troubleshooting, switch to manual inputs and continue.',
  'Use DCC only where it clarifies something.',
  'Have them challenge the ranking. What evidence put the first item above the second?',
  'Label outputs: fact, interpretation, recommendation.',
  'Do not automate during the first breakthrough. The friction is the discovery.',
  'End on use, not applause. Run it tomorrow morning for seven days.',
] as const

export const DAILY_OPERATOR_SCENARIO_KIT = [
  'A calendar',
  'Five emails',
  'Three leads',
  'Four invoices',
  'One overdue deliverable',
  'One employee request',
  'One low-priority distraction',
] as const

export const DAILY_OPERATOR_SCENARIO_PACKS = [
  { id: 'creative', title: 'Creative studio', nouns: 'Commission, grant, exhibition, late invoice.' },
  { id: 'consulting', title: 'Consulting agency', nouns: 'Proposal, client delivery, retainer, lead.' },
  { id: 'service', title: 'Home or local service', nouns: 'Quotes, appointments, collections.' },
  { id: 'retail', title: 'Retail or hospitality', nouns: 'Staffing, sales, inventory.' },
  { id: 'nonprofit', title: 'Nonprofit', nouns: 'Grant, donor, board, program deadline.' },
  { id: 'professional', title: 'Professional services', nouns: 'Client matter, billable capacity, compliance deadline.' },
] as const

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
