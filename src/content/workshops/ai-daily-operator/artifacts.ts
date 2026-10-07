/**
 * Founder Attention OS — participant artifacts.
 *
 * These are authored as structured content so the same source can render to:
 * - workshop/LMS pages
 * - printable worksheets
 * - participant exports
 * - DCC worked examples
 *
 * Cloudinary stores approved previews/exports, not the editable source.
 */

export type ArtifactField = {
  id: string
  label: string
  prompt: string
  help?: string
  kind?: 'short' | 'long' | 'list' | 'choice' | 'table'
  options?: readonly string[]
}

export type ArtifactSection = {
  id: string
  title: string
  purpose: string
  fields: readonly ArtifactField[]
}

export type ParticipantArtifact = {
  n: number
  slug: string
  title: string
  level: 'I' | 'II' | 'III' | 'IV' | 'V'
  purpose: string
  completionRule: string
  sections: readonly ArtifactSection[]
}

export const FOUNDER_PROFILE_ARTIFACT: ParticipantArtifact = {
  n: 1,
  slug: 'founder-profile',
  title: 'Founder Profile',
  level: 'I',
  purpose:
    'Give the operator enough durable business context to judge attention without asking the founder to restate the business every morning.',
  completionRule:
    'Complete enough context to prioritize a real day. Unknown is allowed; invented context is not.',
  sections: [
    {
      id: 'business',
      title: 'Business and role',
      purpose: 'Define the work before attempting to prioritize it.',
      fields: [
        {
          id: 'business-one-sentence',
          label: 'What does the business or practice do?',
          prompt: 'Describe the business or practice in one clear sentence.',
          kind: 'long',
        },
        {
          id: 'role',
          label: 'What is your role?',
          prompt: 'What are you personally responsible for?',
          kind: 'long',
        },
        {
          id: 'revenue-mission',
          label: 'How does the work create value?',
          prompt:
            'How does the organization make money, fulfill its mission, or both?',
          help:
            'Cultural and nonprofit work may describe Mission / Funding rather than Revenue alone.',
          kind: 'long',
        },
      ],
    },
    {
      id: 'goal',
      title: 'Current outcome',
      purpose: 'Give attention a destination.',
      fields: [
        {
          id: 'thirty-day-outcome',
          label: 'Most important 30-day outcome',
          prompt:
            'What meaningful result should be different 30 days from now?',
          kind: 'long',
        },
        {
          id: 'why-now',
          label: 'Why does it matter now?',
          prompt:
            'What changes if this outcome moves, and what gets worse if it does not?',
          kind: 'long',
        },
      ],
    },
    {
      id: 'founder-only',
      title: 'Founder-only work',
      purpose: 'Separate scarce human judgment from work that can move elsewhere.',
      fields: [
        {
          id: 'highest-value',
          label: 'Highest-value work only you can do',
          prompt:
            'Name the decisions, relationships, creative judgments, sales conversations, approvals, or other work that genuinely requires you.',
          kind: 'list',
        },
        {
          id: 'delegate',
          label: 'What should be delegated?',
          prompt:
            'What work should another person, AI assistant, or workflow handle before it reaches you?',
          kind: 'list',
        },
        {
          id: 'procrastination',
          label: 'Repeatedly postponed work',
          prompt:
            'What important work do you repeatedly postpone even when you know it matters?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'constraints',
      title: 'Capacity and constraints',
      purpose: 'Prevent the operator from planning an imaginary day.',
      fields: [
        {
          id: 'working-hours',
          label: 'Normal working hours',
          prompt: 'When are you realistically available for work?',
          kind: 'short',
        },
        {
          id: 'focus-time',
          label: 'Preferred focus time',
          prompt:
            'How much uninterrupted focus time do you need on a good day?',
          kind: 'short',
        },
        {
          id: 'recurring-constraints',
          label: 'Recurring constraints',
          prompt:
            'List recurring personal, travel, caregiving, location, energy, production, or business constraints that affect capacity.',
          kind: 'list',
        },
        {
          id: 'meeting-prep',
          label: 'Meetings that require preparation',
          prompt:
            'Which types of meetings usually need preparation time before they begin?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'systems',
      title: 'Where the work currently lives',
      purpose: 'Expose the business architecture without requiring integrations.',
      fields: [
        {
          id: 'requests-arrive',
          label: 'Where customer or partner requests arrive',
          prompt:
            'Email, WhatsApp, Instagram, phone, forms, CRM, another place?',
          kind: 'list',
        },
        {
          id: 'leads',
          label: 'Where leads are tracked',
          prompt:
            'Where do you look to know which opportunities exist and who needs follow-up?',
          kind: 'short',
        },
        {
          id: 'projects',
          label: 'Where projects are tracked',
          prompt:
            'Where do you look to know what has been promised, what is open, and what is blocked?',
          kind: 'short',
        },
        {
          id: 'payments',
          label: 'How you know whether a customer has paid',
          prompt:
            'What source do you currently trust for invoice and payment status?',
          kind: 'short',
        },
      ],
    },
    {
      id: 'approval',
      title: 'Approval boundaries',
      purpose: 'Keep consequential action under explicit human control.',
      fields: [
        {
          id: 'explicit-approval',
          label: 'Actions that require your explicit approval',
          prompt:
            'List actions the operator may recommend or draft, but must never take without your approval.',
          help:
            'Examples: send external communication, reschedule, purchase, pay, modify accounting, commit to a deadline, accept a contract.',
          kind: 'list',
        },
        {
          id: 'confidential',
          label: 'Sensitive information',
          prompt:
            'What categories of information should not be exposed, copied, summarized, or shared outside their approved context?',
          kind: 'list',
        },
      ],
    },
  ],
}

export const ATTENTION_RULES_ARTIFACT: ParticipantArtifact = {
  n: 2,
  slug: 'attention-rules',
  title: 'Attention Rules',
  level: 'I',
  purpose:
    'Turn vague productivity preferences into explicit rules for deciding what deserves attention and what can wait.',
  completionRule:
    'The rules must force a tradeoff. If everything still qualifies as important, refine them.',
  sections: [
    {
      id: 'goal-test',
      title: 'Goal test',
      purpose: 'Tie daily attention to the current outcome.',
      fields: [
        {
          id: 'goal-movement',
          label: 'What counts as movement?',
          prompt:
            'What evidence would tell you that today materially advanced the 30-day outcome?',
          kind: 'list',
        },
        {
          id: 'distraction',
          label: 'Productive-looking distractions',
          prompt:
            'What work often feels useful but does not materially advance the current outcome?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'four-lenses',
      title: 'Four judgment lenses',
      purpose: 'Define what earns attention.',
      fields: [
        {
          id: 'commitments',
          label: 'Commitments',
          prompt:
            'What promises, deadlines, meetings, or deliverables become non-negotiable?',
          kind: 'list',
        },
        {
          id: 'revenue-mission',
          label: 'Revenue / Mission',
          prompt:
            'Which revenue, funding, mission, sales, or opportunity signals materially change today’s decision?',
          kind: 'list',
        },
        {
          id: 'risk',
          label: 'Risk',
          prompt:
            'What becomes meaningfully worse if ignored today?',
          kind: 'list',
        },
        {
          id: 'capacity',
          label: 'Capacity',
          prompt:
            'What limits must the operator respect before recommending more work?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'routing',
      title: 'Attention routing',
      purpose: 'Decide what happens after something is judged important.',
      fields: [
        {
          id: 'requires-me',
          label: 'Requires me',
          prompt:
            'What kinds of work should come directly to you?',
          kind: 'list',
        },
        {
          id: 'delegate',
          label: 'Delegate',
          prompt:
            'What kinds of work should another person own?',
          kind: 'list',
        },
        {
          id: 'ai-assist',
          label: 'AI-assisted',
          prompt:
            'What can AI summarize, compare, prepare, or draft while you retain responsibility?',
          kind: 'list',
        },
        {
          id: 'wait',
          label: 'Can wait',
          prompt:
            'What categories should normally remain out of today’s brief unless conditions change?',
          kind: 'list',
        },
      ],
    },
  ],
}

export const DAILY_OPERATOR_ARTIFACT: ParticipantArtifact = {
  n: 3,
  slug: 'daily-operator',
  title: 'Daily Operator',
  level: 'I',
  purpose:
    'Save the working instructions that turn the Founder Profile, Attention Rules, and today’s signals into a repeatable operating brief.',
  completionRule:
    'The instructions should be portable between ChatGPT and Claude and useful before any connector is enabled.',
  sections: [
    {
      id: 'core',
      title: 'Core instruction',
      purpose: 'Define the operator’s job.',
      fields: [
        {
          id: 'purpose',
          label: 'Purpose',
          prompt:
            'Help me answer: What needs me today, why does it matter, and what can wait?',
          kind: 'long',
        },
        {
          id: 'optimization',
          label: 'Optimization rule',
          prompt:
            'Optimize my attention against business outcomes and constraints, not my activity or number of completed tasks.',
          kind: 'long',
        },
      ],
    },
    {
      id: 'reasoning',
      title: 'Judgment method',
      purpose: 'Make prioritization inspectable.',
      fields: [
        {
          id: 'lenses',
          label: 'Four lenses',
          prompt:
            'Evaluate meaningful work through Commitments, Revenue / Mission, Risk, and Capacity.',
          kind: 'long',
        },
        {
          id: 'epistemics',
          label: 'Fact / interpretation / recommendation',
          prompt:
            'Distinguish what is known from what is inferred and from what you recommend.',
          kind: 'long',
        },
        {
          id: 'uncertainty',
          label: 'Missing information',
          prompt:
            'Never invent missing business context. Ask for the smallest amount of missing information that could change the decision.',
          kind: 'long',
        },
      ],
    },
    {
      id: 'approval',
      title: 'Approval policy',
      purpose: 'Keep consequential action governed.',
      fields: [
        {
          id: 'policy',
          label: 'Recommend → explain → ask → act',
          prompt:
            'Do not cancel or move meetings, send external communication, purchase, pay, modify accounting, accept contracts, or commit to deadlines without explicit approval.',
          kind: 'long',
        },
      ],
    },
    {
      id: 'friction',
      title: 'Friction detection',
      purpose: 'Use the daily brief to discover the next systems problem.',
      fields: [
        {
          id: 'log',
          label: 'Notice repeated manual work',
          prompt:
            'Quietly notice when I repeatedly retrieve, reconcile, remember, transfer, decide, approve, or rewrite the same information. Do not interrupt the brief unless the friction affects today’s decision.',
          kind: 'long',
        },
      ],
    },
  ],
}

export const DAILY_OPERATING_BRIEF_ARTIFACT: ParticipantArtifact = {
  n: 4,
  slug: 'daily-operating-brief',
  title: 'Daily Operating Brief',
  level: 'I',
  purpose:
    'Produce a two-minute view of what deserves attention now, grounded in actual commitments, outcomes, risk, and capacity.',
  completionRule:
    'No more than three top outcomes. Explicitly name what can wait.',
  sections: [
    {
      id: 'orientation',
      title: 'Orientation',
      purpose: 'Make the day legible immediately.',
      fields: [
        {
          id: 'today-one-sentence',
          label: 'Today in one sentence',
          prompt:
            'State the single most important outcome for the day in one sentence.',
          kind: 'long',
        },
      ],
    },
    {
      id: 'commitments',
      title: 'Non-negotiable commitments',
      purpose: 'Show only commitments that genuinely constrain the day.',
      fields: [
        {
          id: 'commitments',
          label: 'Commitments',
          prompt:
            'List the meetings, deadlines, and promises that genuinely constrain today, and what each requires from me.',
          kind: 'table',
        },
      ],
    },
    {
      id: 'outcomes',
      title: 'Top outcomes',
      purpose: 'Direct attention toward results rather than task volume.',
      fields: [
        {
          id: 'top-three',
          label: 'Top 3 outcomes',
          prompt:
            'Name no more than three meaningful outcomes and briefly explain why each matters.',
          kind: 'table',
        },
      ],
    },
    {
      id: 'signals',
      title: 'Signals that change a decision',
      purpose: 'Surface only meaningful money, sales, relationship, or risk signals.',
      fields: [
        {
          id: 'money-sales',
          label: 'Money / sales / mission',
          prompt:
            'Surface only financial, pipeline, funding, or mission signals that materially affect today’s decision.',
          kind: 'list',
        },
        {
          id: 'blockers',
          label: 'Decisions / blockers',
          prompt:
            'What is waiting specifically on me?',
          kind: 'list',
        },
        {
          id: 'follow-ups',
          label: 'Follow-ups',
          prompt:
            'Which relationships or opportunities are becoming stale, ranked by consequence rather than age alone?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'capacity',
      title: 'Capacity',
      purpose: 'Protect finite attention.',
      fields: [
        {
          id: 'focus-block',
          label: 'Focus block',
          prompt:
            'Recommend the best uninterrupted work block available from the schedule I provided.',
          kind: 'short',
        },
        {
          id: 'can-wait',
          label: 'What can wait',
          prompt:
            'Explicitly name work that does not deserve attention today.',
          kind: 'list',
        },
        {
          id: 'one-change',
          label: 'One change I would make',
          prompt:
            'Recommend one improvement to the structure of the day. Ask before any external action.',
          kind: 'long',
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence and friction',
      purpose: 'Make the brief inspectable and improve it over time.',
      fields: [
        {
          id: 'fact-interpretation-recommendation',
          label: 'Decision evidence',
          prompt:
            'For the highest-priority recommendation, separate the relevant facts, interpretation, and recommendation.',
          kind: 'table',
        },
        {
          id: 'manual-dependency',
          label: 'Manual dependency detected',
          prompt:
            'What information did I have to manually reconstruct or retrieve that the business already stores somewhere?',
          kind: 'list',
        },
      ],
    },
  ],
}

export const LEVEL_I_ARTIFACTS = [
  FOUNDER_PROFILE_ARTIFACT,
  ATTENTION_RULES_ARTIFACT,
  DAILY_OPERATOR_ARTIFACT,
  DAILY_OPERATING_BRIEF_ARTIFACT,
] as const


export const BUSINESS_SOURCE_MAP_ARTIFACT: ParticipantArtifact = {
  n: 5,
  slug: 'business-source-map',
  title: 'Business Source Map',
  level: 'II',
  purpose:
    'Make the business legible by assigning each important decision signal to an authoritative source, trust rule, retrieval frequency, and fallback.',
  completionRule:
    'Every important signal has one named source of truth or is explicitly marked unknown.',
  sections: [
    {
      id: 'decisions',
      title: 'Decisions and signals',
      purpose: 'Start from decisions, not from a list of apps.',
      fields: [
        {
          id: 'decisions-supported',
          label: 'Decisions this system should support',
          prompt:
            'List recurring decisions where better context would materially improve attention or action.',
          kind: 'list',
        },
        {
          id: 'signals-needed',
          label: 'Signals needed',
          prompt:
            'For each decision, what facts or signals are actually needed to make it well?',
          kind: 'table',
        },
      ],
    },
    {
      id: 'sources',
      title: 'Sources of truth',
      purpose: 'Assign authority deliberately.',
      fields: [
        {
          id: 'source-map',
          label: 'Signal → source',
          prompt:
            'For each signal, name the authoritative source, how current it must be, and what to do if the source is unavailable.',
          kind: 'table',
        },
        {
          id: 'conflicts',
          label: 'Conflict rules',
          prompt:
            'If two sources disagree, which source wins and when should a person reconcile them?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'trust',
      title: 'Trust and freshness',
      purpose: 'Prevent stale or ambiguous information from becoming a confident recommendation.',
      fields: [
        {
          id: 'freshness',
          label: 'Freshness requirements',
          prompt:
            'Which signals must be current today, this week, this month, or only when a decision occurs?',
          kind: 'table',
        },
        {
          id: 'unknown-rule',
          label: 'Unknown rule',
          prompt:
            'Write the rule for how the operator should behave when an important field or source is missing.',
          help: 'Recommended default: missing is unknown, not false.',
          kind: 'long',
        },
      ],
    },
  ],
}

export const PERMISSION_MAP_ARTIFACT: ParticipantArtifact = {
  n: 6,
  slug: 'permission-map',
  title: 'Permission Map',
  level: 'II',
  purpose:
    'Define what the system may read, draft, recommend, or act on, and where human approval is mandatory.',
  completionRule:
    'Every consequential action has an explicit owner and approval rule.',
  sections: [
    {
      id: 'permission-levels',
      title: 'Permission levels',
      purpose: 'Make access graduated rather than binary.',
      fields: [
        {
          id: 'read',
          label: 'Read',
          prompt:
            'What sources may the system read or retrieve from?',
          kind: 'list',
        },
        {
          id: 'draft',
          label: 'Draft',
          prompt:
            'What outputs may the system prepare without sending or committing?',
          kind: 'list',
        },
        {
          id: 'recommend',
          label: 'Recommend',
          prompt:
            'What decisions may the system analyze and recommend while a person remains responsible?',
          kind: 'list',
        },
        {
          id: 'approval-required',
          label: 'Approval required',
          prompt:
            'What actions may proceed only after a named person approves?',
          kind: 'list',
        },
        {
          id: 'never-alone',
          label: 'Never act alone',
          prompt:
            'What actions should never be delegated to the system without active human control?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'sensitivity',
      title: 'Data boundaries',
      purpose: 'Limit exposure to what the task actually requires.',
      fields: [
        {
          id: 'sensitive-data',
          label: 'Sensitive data categories',
          prompt:
            'What customer, financial, legal, personnel, health, confidential, or private information requires stricter handling?',
          kind: 'list',
        },
        {
          id: 'minimum-necessary',
          label: 'Minimum necessary rule',
          prompt:
            'What is the least information the system needs for the intended decision?',
          kind: 'long',
        },
      ],
    },
  ],
}

export const BUSINESS_PULSE_ARTIFACT: ParticipantArtifact = {
  n: 7,
  slug: 'business-pulse',
  title: 'Business Pulse',
  level: 'III',
  purpose:
    'Translate money, pipeline, delivery, funding, and capacity signals into decision context instead of a dashboard dump.',
  completionRule:
    'Every surfaced metric or signal can answer: what decision could this change?',
  sections: [
    {
      id: 'period',
      title: 'Reporting context',
      purpose: 'Anchor the pulse to a clear period and source.',
      fields: [
        {
          id: 'reporting-period',
          label: 'Reporting period',
          prompt: 'What date or reporting period does this pulse cover?',
          kind: 'short',
        },
        {
          id: 'sources-used',
          label: 'Sources used',
          prompt:
            'Which accounting, CRM, project, or manually supplied sources are included?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'signals',
      title: 'Decision-useful signals',
      purpose: 'Surface only signals that could change attention.',
      fields: [
        {
          id: 'receivables',
          label: 'Receivables / collections',
          prompt:
            'Which unpaid or overdue items could materially affect a current decision?',
          kind: 'table',
        },
        {
          id: 'pipeline',
          label: 'Pipeline / funding / sales',
          prompt:
            'Which opportunities, proposals, grants, or funding signals deserve attention now?',
          kind: 'table',
        },
        {
          id: 'obligations',
          label: 'Upcoming obligations',
          prompt:
            'Which meaningful upcoming expenses, delivery obligations, payroll, purchases, or commitments constrain capacity or cash?',
          kind: 'table',
        },
        {
          id: 'movement',
          label: 'Meaningful movement',
          prompt:
            'What materially changed from the prior period?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'decision',
      title: 'Decision consequence',
      purpose: 'Connect financial facts back to attention.',
      fields: [
        {
          id: 'changes-today',
          label: 'What changes today?',
          prompt:
            'Which of these signals changes a priority, follow-up, approval, or focus decision today?',
          kind: 'list',
        },
        {
          id: 'noise',
          label: 'What does not belong in the brief?',
          prompt:
            'Which available metrics are informative but do not change a decision right now?',
          kind: 'list',
        },
      ],
    },
  ],
}

export const FRICTION_LOG_ARTIFACT: ParticipantArtifact = {
  n: 8,
  slug: 'friction-log',
  title: 'Friction Log',
  level: 'IV',
  purpose:
    'Capture repeated manual acts before deciding whether they deserve a process change or automation.',
  completionRule:
    'Log real occurrences with consequences; do not record hypothetical automations.',
  sections: [
    {
      id: 'occurrences',
      title: 'Observed friction',
      purpose: 'Capture what actually happened.',
      fields: [
        {
          id: 'occurrence-log',
          label: 'Friction occurrences',
          prompt:
            'For each occurrence record: task, friction type, source systems, what you did manually, approximate effort, and consequence.',
          help:
            'Types: retrieval, reconciliation, memory, transfer, decision, approval, communication.',
          kind: 'table',
        },
        {
          id: 'workaround',
          label: 'Current workaround',
          prompt:
            'How do you currently compensate for the friction?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'pattern',
      title: 'Pattern evidence',
      purpose: 'Separate a recurring system problem from a one-off annoyance.',
      fields: [
        {
          id: 'frequency',
          label: 'Observed frequency',
          prompt:
            'How often did this occur in the period you observed?',
          kind: 'short',
        },
        {
          id: 'consequence',
          label: 'Business consequence',
          prompt:
            'What did this cost in time, delay, money, quality, missed follow-up, cognitive load, or risk?',
          kind: 'long',
        },
      ],
    },
  ],
}

export const FRICTION_MAP_ARTIFACT: ParticipantArtifact = {
  n: 9,
  slug: 'friction-map',
  title: 'Friction Map',
  level: 'IV',
  purpose:
    'Classify and score repeated friction so only justified problems advance toward a system change.',
  completionRule:
    'Every candidate includes an explicit do-nothing/manual option before automation is considered.',
  sections: [
    {
      id: 'classification',
      title: 'Classify the friction',
      purpose: 'Name the actual failure mode.',
      fields: [
        {
          id: 'friction-candidates',
          label: 'Candidate frictions',
          prompt:
            'List the strongest repeated frictions and classify each as retrieval, reconciliation, memory, transfer, decision, approval, or communication.',
          kind: 'table',
        },
      ],
    },
    {
      id: 'score',
      title: 'Score the candidate',
      purpose: 'Prioritize consequence and recurrence, not technical novelty.',
      fields: [
        {
          id: 'impact',
          label: 'Impact',
          prompt:
            'How meaningful is the consequence if this friction persists?',
          kind: 'short',
        },
        {
          id: 'frequency',
          label: 'Frequency',
          prompt:
            'How often does the friction genuinely occur?',
          kind: 'short',
        },
        {
          id: 'ease',
          label: 'Ease',
          prompt:
            'How feasible is a process or system improvement with the current tools and data?',
          kind: 'short',
        },
        {
          id: 'risk',
          label: 'Risk',
          prompt:
            'What new failure, privacy, financial, customer, or governance risk could the proposed change introduce?',
          kind: 'long',
        },
      ],
    },
    {
      id: 'response',
      title: 'Choose a response',
      purpose: 'Automation is only one possible answer.',
      fields: [
        {
          id: 'response-options',
          label: 'Best response',
          prompt:
            'Choose and justify one: leave manual, simplify the process, delegate, AI-assist, connect sources, schedule, approval-based action, conditional automation.',
          kind: 'long',
        },
        {
          id: 'highest-value',
          label: 'Highest-value improvement',
          prompt:
            'Which one improvement should happen first, and why?',
          kind: 'long',
        },
      ],
    },
  ],
}

export const WORKFLOW_BLUEPRINT_ARTIFACT: ParticipantArtifact = {
  n: 10,
  slug: 'workflow-blueprint',
  title: 'Workflow Blueprint',
  level: 'V',
  purpose:
    'Specify one justified workflow so its inputs, reasoning, approvals, actions, and record are inspectable before it is built.',
  completionRule:
    'A different person should be able to understand the workflow, approval boundary, and failure fallback from this artifact alone.',
  sections: [
    {
      id: 'scope',
      title: 'Scope',
      purpose: 'Keep the first workflow narrow.',
      fields: [
        {
          id: 'friction-addressed',
          label: 'Friction addressed',
          prompt:
            'Which Friction Map item is this workflow solving?',
          kind: 'short',
        },
        {
          id: 'success',
          label: 'Useful outcome',
          prompt:
            'What observable result would make this workflow worth keeping?',
          kind: 'long',
        },
        {
          id: 'owner',
          label: 'Human owner',
          prompt:
            'Who remains responsible for the workflow and its consequences?',
          kind: 'short',
        },
      ],
    },
    {
      id: 'seven-stages',
      title: 'Seven-stage workflow',
      purpose: 'Separate context, reasoning, approval, and action.',
      fields: [
        {
          id: 'trigger',
          label: '1 — Trigger',
          prompt:
            'What event, schedule, state change, or explicit request starts the workflow?',
          kind: 'long',
        },
        {
          id: 'context',
          label: '2 — Context',
          prompt:
            'What sources and fields are needed, and which are authoritative?',
          kind: 'long',
        },
        {
          id: 'reasoning',
          label: '3 — Reasoning',
          prompt:
            'What judgment, rule, comparison, or transformation should occur?',
          kind: 'long',
        },
        {
          id: 'output',
          label: '4 — Output',
          prompt:
            'What draft, brief, recommendation, classification, or artifact should be produced?',
          kind: 'long',
        },
        {
          id: 'approval',
          label: '5 — Approval',
          prompt:
            'Who reviews what, and what exactly must be true before action is allowed?',
          kind: 'long',
        },
        {
          id: 'action',
          label: '6 — Action',
          prompt:
            'What real-world action occurs after approval?',
          kind: 'long',
        },
        {
          id: 'record',
          label: '7 — Record',
          prompt:
            'What durable record is written back so the business can see what happened?',
          kind: 'long',
        },
      ],
    },
    {
      id: 'failure',
      title: 'Failure and fallback',
      purpose: 'Design the safe path before the happy path is automated.',
      fields: [
        {
          id: 'missing-data',
          label: 'Missing or conflicting context',
          prompt:
            'What should happen when required data is missing, stale, or contradictory?',
          kind: 'long',
        },
        {
          id: 'failure-route',
          label: 'Failure route',
          prompt:
            'Where does the workflow stop, alert, retry, or hand back to a person?',
          kind: 'long',
        },
      ],
    },
  ],
}

export const WEEKLY_OPERATING_REVIEW_ARTIFACT: ParticipantArtifact = {
  n: 11,
  slug: 'weekly-operating-review',
  title: 'Weekly Operating Review',
  level: 'V',
  purpose:
    'Compare intended attention with actual movement and use repeated friction to improve the operating system.',
  completionRule:
    'The review ends with one outcome, one thing to stop, one process to improve, and one block of time to protect.',
  sections: [
    {
      id: 'movement',
      title: 'What moved',
      purpose: 'Judge outcomes instead of completed-task volume.',
      fields: [
        {
          id: 'progress',
          label: 'Meaningful progress',
          prompt:
            'What materially advanced the current business goal this week?',
          kind: 'list',
        },
        {
          id: 'outcomes',
          label: 'Business outcomes',
          prompt:
            'What happened in sales, revenue/funding, delivery, relationships, or other primary goals?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'attention',
      title: 'Where attention went',
      purpose: 'Compare capacity allocation with intended priorities.',
      fields: [
        {
          id: 'time-pattern',
          label: 'Time pattern',
          prompt:
            'Approximately where did time go: revenue/sales, client delivery, management, operations, administration, strategic work, deep work?',
          kind: 'table',
        },
        {
          id: 'postponed',
          label: 'Repeatedly postponed',
          prompt:
            'What meaningful work repeatedly failed to receive attention?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'bottlenecks',
      title: 'Bottlenecks and friction',
      purpose: 'Find evidence for system improvement.',
      fields: [
        {
          id: 'founder-bottlenecks',
          label: 'Founder bottlenecks',
          prompt:
            'What waited unnecessarily for the founder or another single approver?',
          kind: 'list',
        },
        {
          id: 'repeated-friction',
          label: 'Repeated friction',
          prompt:
            'Which manual frictions appeared repeatedly across the week?',
          kind: 'list',
        },
      ],
    },
    {
      id: 'next-week',
      title: 'Next week',
      purpose: 'Make one deliberate correction.',
      fields: [
        {
          id: 'one-outcome',
          label: 'One outcome to prioritize',
          prompt: 'What deserves the week?',
          kind: 'long',
        },
        {
          id: 'one-stop',
          label: 'One thing to stop doing',
          prompt:
            'What activity should lose attention because it is not moving the goal?',
          kind: 'long',
        },
        {
          id: 'one-process',
          label: 'One process to improve',
          prompt:
            'What repeated friction deserves one process or system improvement?',
          kind: 'long',
        },
        {
          id: 'one-block',
          label: 'One block of time to protect',
          prompt:
            'What focus block should be protected before other commitments consume the week?',
          kind: 'short',
        },
      ],
    },
  ],
}

export const NINETY_DAY_ROADMAP_ARTIFACT: ParticipantArtifact = {
  n: 12,
  slug: '90-day-improvement-roadmap',
  title: '90-Day Improvement Roadmap',
  level: 'V',
  purpose:
    'Sequence a small number of operating improvements so capability compounds without creating an automation backlog.',
  completionRule:
    'No more than one primary operating-system improvement per phase; every phase has evidence and a stop condition.',
  sections: [
    {
      id: 'north-star',
      title: 'North star',
      purpose: 'Keep improvements subordinate to a business outcome.',
      fields: [
        {
          id: 'ninety-day-outcome',
          label: '90-day business outcome',
          prompt:
            'What meaningful business result should the operating system help make more likely?',
          kind: 'long',
        },
        {
          id: 'baseline',
          label: 'Current baseline',
          prompt:
            'What is true today about attention, sources, friction, and workflow reliability?',
          kind: 'long',
        },
      ],
    },
    {
      id: 'phases',
      title: 'Three improvement phases',
      purpose: 'Improve one layer at a time.',
      fields: [
        {
          id: 'days-1-30',
          label: 'Days 1–30',
          prompt:
            'Choose one context, source-of-truth, permission, or attention-rule improvement. What evidence will show it worked?',
          kind: 'long',
        },
        {
          id: 'days-31-60',
          label: 'Days 31–60',
          prompt:
            'Choose one high-value friction to reduce. What evidence will show the change is worth keeping?',
          kind: 'long',
        },
        {
          id: 'days-61-90',
          label: 'Days 61–90',
          prompt:
            'Choose one governed workflow or operating review improvement. What evidence will show it is reliable enough to retain?',
          kind: 'long',
        },
      ],
    },
    {
      id: 'governance',
      title: 'Guardrails',
      purpose: 'Avoid automating faster than the organization can govern.',
      fields: [
        {
          id: 'deferred',
          label: 'Explicitly deferred',
          prompt:
            'What tempting improvements or automations are intentionally not being built during these 90 days?',
          kind: 'list',
        },
        {
          id: 'stop-conditions',
          label: 'Stop / rollback conditions',
          prompt:
            'What failure, risk, quality drop, or adoption signal would cause you to pause or reverse an improvement?',
          kind: 'list',
        },
      ],
    },
  ],
}

export const ALL_PARTICIPANT_ARTIFACTS = [
  ...LEVEL_I_ARTIFACTS,
  BUSINESS_SOURCE_MAP_ARTIFACT,
  PERMISSION_MAP_ARTIFACT,
  BUSINESS_PULSE_ARTIFACT,
  FRICTION_LOG_ARTIFACT,
  FRICTION_MAP_ARTIFACT,
  WORKFLOW_BLUEPRINT_ARTIFACT,
  WEEKLY_OPERATING_REVIEW_ARTIFACT,
  NINETY_DAY_ROADMAP_ARTIFACT,
] as const
