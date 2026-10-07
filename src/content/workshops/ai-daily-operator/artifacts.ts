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
