/**
 * Structured copy for Learn AI Without Losing Yourself — lab / blueprint page.
 * Main workshop sales copy lives in learn-ai-content.ts.
 */

export const LEARN_AI_LAB_INTRO =
  'This page documents the evolving structure of Learn AI Without Losing Yourself: a workshop-performance on practical AI, burnout culture, labor, scale, and staying human in the loop. It functions as a living blueprint for the session’s skills, critiques, humor, visuals, and future adaptations.'

export const LEARN_AI_LAB_STATUS = 'Live workshop blueprint' as const

export const LEARN_AI_LAB_THESIS_SUMMARY =
  'This workshop teaches practical AI use through real pressures, humor, and critique. It focuses on how to use AI for writing, research, brainstorming, and synthetic assistance without flattening voice, outsourcing judgment, or mistaking scale for freedom.'

export const LEARN_AI_LAB_THESIS_SUPPORTS = [
  'Use AI for assistance, not surrender.',
  'A summary is not understanding.',
  'Scaling yourself is not the same as saving yourself.',
  'The tools can help you work faster. That does not mean they should decide who you become.',
] as const

export const LEARN_AI_LAB_PULL_QUOTES = [
  'Use AI for assistance, not surrender.',
  'A summary is not understanding.',
  'Scaling yourself is not the same as saving yourself.',
] as const

export type LearnAiLabSessionKind = 'opening' | 'segment' | 'closing'

export type LearnAiLabSessionBlock = {
  kind: LearnAiLabSessionKind
  title: string
  purpose: string
  tension: string
  skill: string
  critique: string
}

export const LEARN_AI_LAB_SESSION_MAP: readonly LearnAiLabSessionBlock[] = [
  {
    kind: 'opening',
    title: 'Opening',
    purpose:
      'Room check: who uses ChatGPT, Claude, local models. Frame convenience vs sovereignty and the AI ecosystem / project-organization joke. Set up pressure, usefulness, and optimization.',
    tension: 'Recognition: everyone is in the same ambiguous relationship to the tools.',
    skill: 'Orientation — naming the stack without shame or hype.',
    critique: 'Optimization pressure and always-on productivity.',
  },
  {
    kind: 'segment',
    title: 'Writing without sounding possessed',
    purpose: 'Draft and reshape text with AI while keeping voice and stakes intact.',
    tension: 'The polite corporate ghost — fluent but hollow.',
    skill: 'Drafting without losing voice; editing for sincerity.',
    critique: 'Efficiency replacing sincerity; polished emptiness.',
  },
  {
    kind: 'segment',
    title: 'Research without fake mastery',
    purpose: 'Summarize and compare sources without confusing fluency with truth.',
    tension: 'The emotional experience of “knowing” something you only skimmed.',
    skill: 'Summarizing without faking understanding; verification habits.',
    critique: 'Fluency is not truth; false mastery.',
  },
  {
    kind: 'segment',
    title: 'Brainstorming without flattening creativity',
    purpose: 'Generate options with AI while preserving discernment and taste.',
    tension: 'Twenty ideas, seventeen spiritually dead.',
    skill: 'Generating with AI while preserving taste and authorship.',
    critique: 'Abundance is not discernment; generic variation.',
  },
  {
    kind: 'segment',
    title: 'I lost my job and gained 10 AI assistants',
    purpose: 'Synthetic stacks, solo scale, and the comedy of managing “helpers.”',
    tension: 'Manager of synthetic labor — powerful and precarious at once.',
    skill: 'Using AI stacks without confusing scale for support.',
    critique: 'Empowerment inside precarity; invisible supervision labor.',
  },
  {
    kind: 'closing',
    title: 'Closing',
    purpose: 'Land what stays human and what the workshop asks people to practice.',
    tension: 'Assistance vs surrender — no purity, only clearer choices.',
    skill: 'Commitment to judgment, taste, and bounded use of tools.',
    critique: 'Scale is not salvation; convenience as surrender.',
  },
] as const

export type LearnAiLabSkill = {
  title: string
  human: string
  aiAssist: string
  risk: string
}

export const LEARN_AI_LAB_SKILLS: readonly LearnAiLabSkill[] = [
  {
    title: 'Writing',
    human: 'Tone, stakes, sincerity, what you are willing to say.',
    aiAssist: 'Structure, shortening, rephrasing, first drafts.',
    risk: 'Polished emptiness; voice collapse.',
  },
  {
    title: 'Research',
    human: 'Judgment, context, what counts as “enough,” ethical use of sources.',
    aiAssist: 'Summaries, comparisons, extraction, search assistance.',
    risk: 'Fake mastery; confident wrong summaries.',
  },
  {
    title: 'Brainstorming',
    human: 'Taste, originality, knowing when an idea is yours.',
    aiAssist: 'Variation, prompts, lists, reframes.',
    risk: 'Drowning in generic ideas; outsourcing discernment.',
  },
  {
    title: 'AI assistants / agent stacks',
    human: 'Goals, boundaries, oversight, when to stop delegating.',
    aiAssist: 'Planning, drafting, organizing, multi-step workflows.',
    risk: 'Managing synthetic labor becomes its own burnout.',
  },
  {
    title: 'Judgment',
    human: 'What to trust, publish, or reject; responsibility.',
    aiAssist: 'Options, drafts, checks — never the final call.',
    risk: 'Diffusion of accountability; “the model said it.”',
  },
  {
    title: 'Editing',
    human: 'Line-level care, rhythm, honesty cuts.',
    aiAssist: 'Grammar, clarity, compression suggestions.',
    risk: 'Over-smoothing; killing strangeness on purpose.',
  },
  {
    title: 'Taste',
    human: 'What feels alive vs dead; cultural and personal specificity.',
    aiAssist: 'Examples, analogies, style references.',
    risk: 'Median style; everything trending toward the same “good.”',
  },
  {
    title: 'Critical AI literacy',
    human: 'Labor, incentives, limits, and your own habits.',
    aiAssist: 'Demonstrations, comparisons, workflow experiments.',
    risk: 'Treating literacy as content instead of practice.',
  },
] as const

export const LEARN_AI_LAB_CRITIQUES = [
  'burnout society',
  'optimization pressure',
  'convenience as surrender',
  'false mastery',
  'synthetic scale',
  'invisible labor',
  'agent management',
  'role transformation',
  'platform dependence',
  'synthetic authority',
] as const

export const LEARN_AI_LAB_HUMOR_MECHANICS = [
  'recognition humor',
  'self-implication',
  'contradiction',
  'uncanny outputs',
  'deadpan escalation',
  'management overhead',
  'platform dependence',
] as const

export const LEARN_AI_LAB_EDUCATIONAL_MECHANICS = [
  'worked examples',
  'before / after comparisons',
  'real-world scenarios',
  'repeatable workflows',
  'clear frameworks',
] as const

export type LearnAiLabVisualBlock = {
  title: string
  body: string
  placeholder?: boolean
}

export const LEARN_AI_LAB_VISUAL_STRATEGY: readonly LearnAiLabVisualBlock[] = [
  {
    title: 'Hero image direction',
    body: 'Dark editorial, premium, image-aware — not startup pitch, not sci-fi cliché. Text-free or minimal-type hero artwork aligned with the main workshop page mood.',
    placeholder: true,
  },
  {
    title: 'Supporting visuals',
    body: 'Screens, diagrams, and staged objects that show workflow and tension — authored, not stock.',
    placeholder: true,
  },
  {
    title: 'Symbol / flourish system',
    body: 'Micro-language: brackets, nodes, dots, workflow arrows, stacked tiles, text bars — consistent with site glyphs where possible.',
    placeholder: true,
  },
  {
    title: 'Slide motifs',
    body: 'Chapter cards, pull-quote slides, before/after pairs, single-line tensions. Keep density low; one idea per beat.',
    placeholder: true,
  },
  {
    title: 'Gradient / palette logic',
    body: 'Zinc/slate bases with lime accent for emphasis — match learn-ai workshop tokens.',
    placeholder: false,
  },
  {
    title: 'Photo needs',
    body: 'Live room shots, presenter in context, audience (with consent), detail of hands / screen if useful.',
    placeholder: true,
  },
  {
    title: 'Proof needs',
    body: 'Still frames from deck, short clip stills, host lockups for “presented with.”',
    placeholder: true,
  },
] as const

export type LearnAiLabProofItem = {
  label: string
  note: string
}

export const LEARN_AI_LAB_PROOF_ITEMS: readonly LearnAiLabProofItem[] = [
  { label: 'Presentation photo', note: 'Wide or medium — room + screen context.' },
  { label: 'Audience photo', note: 'With permissions; optional anonymous backs-of-heads.' },
  { label: 'Organizer quote', note: 'One or two sentences for institutional trust.' },
  { label: 'Attendee quote', note: 'Specific, not generic praise.' },
  { label: 'Short clip', note: '30–90s energy sample; captioned.' },
  { label: 'Host logo / presented with', note: 'Vector or high-res PNG lockup.' },
  { label: 'Recording / livestream', note: 'Link or note if session was captured.' },
] as const

export type LearnAiLabVersion = {
  title: string
  desc: string
}

export const LEARN_AI_LAB_VERSIONS: readonly LearnAiLabVersion[] = [
  { title: '30-minute public version', desc: 'Tight talk; hit opening, two segments, closing formula.' },
  { title: '45-minute workshop-performance', desc: 'Default arc; full segment ladder + room for Q&A.' },
  { title: '60-minute workshop', desc: 'Deeper demos, more discussion, optional exercises.' },
  { title: 'Student version', desc: 'Emphasis on literacy, citation, and career pressure.' },
  { title: 'Art-space version', desc: 'Curatorial language; practice-forward; less corporate framing.' },
  { title: 'Institutional version', desc: 'Libraries, museums, public programs; accessibility-forward.' },
  { title: 'Coworking version', desc: 'Solo workers, freelancers, small teams; scale vs support.' },
] as const

export const LEARN_AI_LAB_TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'thesis', label: 'Core thesis' },
  { id: 'session-map', label: 'Session map' },
  { id: 'skills', label: 'Skills taught' },
  { id: 'critiques', label: 'Critiques' },
  { id: 'humor', label: 'Humor / edutainment' },
  { id: 'visual', label: 'Visual strategy' },
  { id: 'proof', label: 'Future proof' },
  { id: 'versions', label: 'Versions' },
] as const
