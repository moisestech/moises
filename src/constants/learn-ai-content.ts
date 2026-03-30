/**
 * Copy and structured data for Learn AI Without Losing Yourself.
 * Edit here; components import from this file.
 */

export const LEARN_AI_EMAIL = 'm@moises.tech'

/** Optional portrait / program photo — leave null to use typographic block only */
export const LEARN_AI_ABOUT_IMAGE: string | null =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_LEARN_AI_ABOUT_IMAGE) || null

/** Optional supporting line under About bio */
export const LEARN_AI_ABOUT_SUPPORTING =
  'His approach combines live demonstration, cultural critique, and accessible teaching grounded in real creative and institutional practice.'

/** Pull quotes — at most 2–3 used on the page */
export const LEARN_AI_QUOTE_ASSISTANCE = 'Use AI for assistance, not surrender.'
export const LEARN_AI_QUOTE_SUMMARY = 'A summary is not understanding.'
export const LEARN_AI_QUOTE_SCALING = 'Scaling yourself is not the same as saving yourself.'

export const LEARN_AI_QUICK_FACTS = [
  { label: 'Formats', value: '30 / 45 / 60 min' },
  { label: 'Best for', value: 'Art spaces, libraries, universities, teams' },
  { label: 'Delivery', value: 'Live workshop-performance' },
  { label: 'Focus', value: 'Practical AI + critical literacy' },
] as const

export const LEARN_AI_PROBLEM_LEAD =
  'People are being asked to write faster, research faster, create faster, and increasingly scale themselves with AI — often without enough time to think, edit, or stay human.'

export const LEARN_AI_PROBLEM_SECOND =
  'AI is often sold as empowerment: more speed, more leverage, more output, more scale. But those gains arrive inside real pressure — burnout, precarity, always-on expectations, and the growing belief that one person should now be able to do the work of many.'

export const LEARN_AI_PROCESS_TAGLINE =
  'Each segment combines a real pressure, a real laugh, a real skill, and a real discomfort.'

export const LEARN_AI_PROCESS_STEPS = [
  {
    title: 'Pressure',
    body: 'A familiar real-world situation shaped by deadlines, overwhelm, or productivity pressure.',
  },
  {
    title: 'Prompt',
    body: 'The moment AI becomes tempting as a shortcut, helper, or assistant.',
  },
  {
    title: 'Problem',
    body: 'The output is fast but uncanny, flattened, overconfident, or misleading.',
  },
  {
    title: 'Practice',
    body: 'A better workflow with practical use, human oversight, and clearer judgment.',
  },
] as const

export const LEARN_AI_OUTCOMES_HEADING =
  'By the end of this workshop, participants will be able to…'

export const LEARN_AI_LEARNING_OUTCOMES = [
  {
    variant: 'writing' as const,
    title: 'Write without sounding artificial',
    body: 'Use AI for drafting, editing, and tone-shifting without losing sincerity, specificity, or your own voice.',
  },
  {
    variant: 'research' as const,
    title: 'Research without fake mastery',
    body: 'Summarize, compare, and extract information with AI while preserving judgment, verification, and context.',
  },
  {
    variant: 'brainstorm' as const,
    title: 'Brainstorm without flattening creativity',
    body: 'Generate options with AI while protecting taste, originality, and the ability to tell when something is technically polished but emotionally dead.',
  },
  {
    variant: 'assistants' as const,
    title: 'Use AI assistants without confusing scale for support',
    body: 'Work with AI as a stack of helpers for planning, drafting, organizing, or synthesizing while staying alert to the hidden labor of supervising and managing synthetic workflows.',
  },
] as const

export const LEARN_AI_HUMAN_ITEMS = [
  'intention',
  'judgment',
  'taste',
  'ethics',
  'context',
  'emotional truth',
  'final choice',
] as const

export const LEARN_AI_AUTOMATED_ITEMS = [
  'first drafts',
  'summarization',
  'reformatting',
  'comparison',
  'variation',
  'speed',
  'pattern assistance',
] as const

export const LEARN_AI_SCENARIOS = [
  {
    title: 'Writing emails without sounding possessed',
    body: 'How to use AI for structure and clarity without becoming a polite corporate ghost.',
  },
  {
    title: 'Using summaries without mistaking compression for understanding',
    body: 'How to move faster without confusing fluency with real knowledge.',
  },
  {
    title: 'Brainstorming with AI without drowning in generic ideas',
    body: 'How to use AI for variation without outsourcing taste or authorship.',
  },
  {
    title: 'I lost my job and gained 10 AI assistants',
    body: 'A humorous but pointed look at solo scale, synthetic labor, and what it means to become the manager of your own automation stack.',
  },
  {
    title: 'The convenience trap',
    body: 'Why most people do not lose themselves all at once, but one helpful shortcut at a time.',
  },
] as const

export const LEARN_AI_DIFFERENTIATION_BULLETS = [
  'AI can help',
  'AI can flatten',
  'AI can speed things up',
  'AI can make you sound less like yourself',
  'AI can make one person feel more powerful',
  'AI can also normalize doing more work with less real support',
] as const

export const LEARN_AI_FORMATS = [
  {
    duration: '30-minute',
    kind: 'talk',
    desc: 'A compact version ideal for public programs, libraries, panels, and conference-style events.',
  },
  {
    duration: '45-minute',
    kind: 'session',
    desc: 'A fuller workshop-performance with practical examples, humor, and audience reflection.',
  },
  {
    duration: '60-minute',
    kind: 'workshop',
    desc: 'An expanded version with deeper scenarios, live demos, and more interactive discussion.',
  },
  {
    duration: 'Custom',
    kind: 'versions',
    desc: 'Adaptable for artists, students, educators, creative professionals, cultural institutions, libraries, coworking communities, and mixed public audiences.',
  },
] as const

export const LEARN_AI_IDEAL_INTRO =
  'This workshop works especially well for mixed audiences who are curious about AI, skeptical of hype, and looking for useful, human-centered ways to engage the tools.'

export const LEARN_AI_IDEAL_VENUES = [
  'art spaces',
  'libraries',
  'universities',
  'museums',
  'cultural institutions',
  'coworking spaces',
  'maker spaces',
  'public programs',
  'creative technology events',
] as const

export const LEARN_AI_ABOUT_BODY =
  'Moises Sanabria is an interdisciplinary artist, technologist, and educator based in Miami. His work explores the tensions between digital systems, culture, labor, identity, and public life across installation, live performance, media, and teaching. Through workshops, talks, and creative research, he helps audiences engage emerging technologies with both practical skill and critical self-awareness.'

/** Proof block — fill strings when available; empty string shows polished placeholder */
export const LEARN_AI_PROOF: {
  presentedWith: string
  organizerNotes: string
  audienceResponse: string
  stillOrClip: string
} = {
  presentedWith: '',
  organizerNotes: '',
  audienceResponse: '',
  stillOrClip: '',
}

export const LEARN_AI_PROOF_PLACEHOLDERS = {
  presentedWith: 'Presented with / hosted by — e.g. DeepStation, NSU. Add when confirmed.',
  organizerNotes: 'Organizer notes or quote — to be added after the first booking.',
  audienceResponse: 'Audience response or quote — to be added.',
  stillOrClip: 'Still, clip thumbnail, or recorded / livestreamed note — add when available.',
} as const
