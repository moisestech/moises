/**
 * Marketing / overview copy for The Art of AI Agents (public landing before /course).
 */

import { LEARN_AI_EMAIL } from '@/constants/learn-ai-content'

export { LEARN_AI_EMAIL as ART_OF_AI_AGENTS_CONTACT_EMAIL }

export const ART_OF_AI_AGENTS_OVERVIEW_HERO_EYEBROW = 'Workshop · hands-on'

export const ART_OF_AI_AGENTS_OVERVIEW_HERO_TITLE = 'The Art of AI Agents'

export const ART_OF_AI_AGENTS_OVERVIEW_HERO_LEAD =
  'Artist-facing automation with n8n, AI agents, and integrations — taught as a workshop, not a product demo.'

export const ART_OF_AI_AGENTS_OVERVIEW_HERO_SECOND =
  'Build capture → summarize → publish pipelines, connect tools you already use, and leave with workflows you can run, audit, and adapt — without outsourcing judgment to a black box.'

export const ART_OF_AI_AGENTS_QUICK_FACTS = [
  { label: 'Formats', value: 'Half-day · full day · custom' },
  { label: 'Best for', value: 'Artists, studios, small orgs' },
  { label: 'Stack', value: 'n8n, OpenAI, APIs' },
  { label: 'Tone', value: 'Critical + practical' },
] as const

export const ART_OF_AI_AGENTS_PROBLEM_LEAD =
  'Creative practice already runs on email, files, social platforms, and ad hoc tools. AI is being sold as a shortcut — often as another dashboard, another subscription, another opaque assistant.'

export const ART_OF_AI_AGENTS_PROBLEM_SECOND =
  'The harder problem is not “using AI.” It is designing small, inspectable systems: what gets automated, what stays manual, where risk lives, and how workflows stay legible when you return to them six months later.'

export const ART_OF_AI_AGENTS_QUOTE_ASSISTANCE =
  'Automation should extend your practice — not replace the parts of it that are actually yours.'

export const ART_OF_AI_AGENTS_OUTCOMES_HEADING = 'By the end of this workshop, participants will be able to…'

export const ART_OF_AI_AGENTS_LEARNING_OUTCOMES = [
  {
    variant: 'writing' as const,
    title: 'Sketch end-to-end workflows',
    body: 'Map triggers, steps, and handoffs — from ingestion to output — before touching the canvas.',
  },
  {
    variant: 'research' as const,
    title: 'Wire APIs and agents with oversight',
    body: 'Connect models and services inside n8n while keeping prompts, credentials, and failure modes visible.',
  },
  {
    variant: 'brainstorm' as const,
    title: 'Prototype automations you can audit',
    body: 'Build flows that are readable enough to debug, version, and explain to a collaborator or future you.',
  },
  {
    variant: 'assistants' as const,
    title: 'Deploy without losing the thread',
    body: 'Ship a first workflow with a clear scope — what it does, what it must never do, and how to shut it off.',
  },
] as const

export const ART_OF_AI_AGENTS_QUOTE_SUMMARY = 'A working workflow is not the same as a sustainable practice.'

export const ART_OF_AI_AGENTS_PROCESS_TAGLINE =
  'Each module pairs a concrete build with a question about labor, attention, and control.'

export const ART_OF_AI_AGENTS_PROCESS_STEPS = [
  {
    title: 'Orient',
    body: 'How the workshop runs, what n8n is for, and how to keep agency while using agents.',
  },
  {
    title: 'Build',
    body: 'Nodes, data, credentials, and a first pipeline from real artist-adjacent tasks.',
  },
  {
    title: 'Stress',
    body: 'Edge cases, errors, cost, and when “fully automated” is the wrong goal.',
  },
  {
    title: 'Ship',
    body: 'Naming, documenting, and a small deployment habit you can repeat after class.',
  },
] as const

export const ART_OF_AI_AGENTS_AUTOMATED_ITEMS = [
  'routing and tagging',
  'summaries and drafts',
  'scheduled pulls',
  'notifications',
  'repetitive file moves',
  'first-pass research pulls',
] as const

export const ART_OF_AI_AGENTS_HUMAN_ITEMS = [
  'taste and selection',
  'consent and privacy',
  'final approvals',
  'relationships and context',
  'ethical boundaries',
  'when to refuse automation',
] as const

export const ART_OF_AI_AGENTS_HUMAN_SPLIT_FOOTER =
  'The workshop assumes you will keep automating. The point is to automate with memory — of risk, of audience, of what the work is for.'

export const ART_OF_AI_AGENTS_SCENARIOS = [
  {
    title: 'Inbox and opportunities without drowning',
    body: 'Triage messages, extract deadlines, and draft replies — with a human veto on everything that leaves the studio.',
  },
  {
    title: 'From scattered notes to publishable summaries',
    body: 'Turn voice memos, PDFs, or sheets into structured outputs without pretending the model “understood” the work.',
  },
  {
    title: 'Small org memory that is not a surveillance stack',
    body: 'Lightweight logging and retrieval that support collaboration without normalizing total capture.',
  },
  {
    title: 'When the agent is confident and wrong',
    body: 'Design checks, fallbacks, and kill switches so enthusiasm does not become liability.',
  },
  {
    title: 'Maintaining workflows six months later',
    body: 'Readable graphs, minimal secrets sprawl, and habits for revisiting what you built.',
  },
] as const

export const ART_OF_AI_AGENTS_DIFFERENTIATION_BULLETS = [
  'Taught from an art practice, not a SaaS funnel',
  'n8n as inspectable glue — not magic',
  'Agents as bounded helpers, not fake employees',
  'Space for skepticism alongside building',
  'Documentation as part of the aesthetic',
] as const

export const ART_OF_AI_AGENTS_QUOTE_SCALING =
  'Scaling throughput is easy. Scaling judgment without burning out is the design problem.'

export const ART_OF_AI_AGENTS_FORMATS = [
  {
    duration: 'Half-day',
    kind: 'intensive',
    desc: 'Orientation plus one substantial build — ideal for studios and residency-style blocks.',
  },
  {
    duration: 'Full day',
    kind: 'workshop',
    desc: 'Deeper modules, more failure-mode work, and time to adapt templates to your own stack.',
  },
  {
    duration: 'Multi-session',
    kind: 'cohort',
    desc: 'Spread builds across weeks with homework, office hours, and iteration.',
  },
  {
    duration: 'Custom',
    kind: 'institutions',
    desc: 'Museums, schools, and orgs — tailored modules, governance, and documentation norms.',
  },
] as const

export const ART_OF_AI_AGENTS_IDEAL_INTRO =
  'Strong fit for artists, independent studios, educators, and cultural workers who want operational leverage without dissolving craft into generic “AI productivity.”'

export const ART_OF_AI_AGENTS_IDEAL_VENUES = [
  'artist-run spaces',
  'residencies',
  'universities',
  'museums',
  'libraries',
  'community tech programs',
  'coworking labs',
  'cultural nonprofits',
] as const

export const ART_OF_AI_AGENTS_PROOF: {
  presentedWith: string
  organizerNotes: string
  audienceResponse: string
  stillOrClip: string
} = {
  presentedWith: 'Locust Projects · The Dill — 2026',
  organizerNotes: 'Artist Task Automation track — n8n, agents, and human-supervised studio workflows.',
  audienceResponse: '',
  stillOrClip: 'Workshop slides + n8n Email Inbox Organizer diagram attached below.',
}

export const ART_OF_AI_AGENTS_PROOF_PLACEHOLDERS = {
  presentedWith: 'Presented with / hosted by — add venue or partner line.',
  organizerNotes: 'Organizer notes or quote — add when useful.',
  audienceResponse: 'Participant feedback — add when available.',
  stillOrClip: 'Still or clip — add when available.',
} as const
