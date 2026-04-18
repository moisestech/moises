/**
 * Presenter “Guide” tab — tone, rhythm, and stagecraft for
 * Learn AI Without Losing Yourself. Consumed only by /rehearse.
 */

import type { LearnAiCueSegment } from '@/constants/learn-ai-cue-sheet'

export const LEARN_AI_REHEARSE_CORE_TONE = {
  insideContradiction:
    'You are inside the contradiction with the audience — not selling AI salvation, not condemning AI from a distance, not stand-up about tools, not a dry software tutorial.',
  youAreNot: [
    'selling AI salvation',
    'condemning AI from a distance',
    'doing stand-up about tools',
    'giving a dry software tutorial',
  ],
  youAre: [
    'Funny through recognition',
    'Honest about dependency',
    'Critical of optimization pressure',
    'Useful and practical',
    'Self-aware about labor, time, and the weirdness of becoming more machine-legible',
  ],
} as const

export const LEARN_AI_REHEARSE_EMOTIONAL_MIX = [
  'Humor',
  'Honesty',
  'Trust',
  'Narrative tension',
  'Practical skill',
  'Quiet discomfort',
] as const

export const LEARN_AI_REHEARSE_TEACHING_RHYTHM =
  'For every section: Human problem → AI temptation → funny misuse → self-aware critique → practical takeaway.'

export type LearnAiRehearseRunningRow = {
  timeRange: string
  title: string
  /** First beat in this block lives under this cue segment. */
  segment: LearnAiCueSegment
}

/** Matches Draft v1 running order; `segment` links to the cue map. */
export const LEARN_AI_REHEARSE_RUNNING_ORDER: readonly LearnAiRehearseRunningRow[] = [
  { timeRange: '0:00–5:00', title: 'Opening', segment: 'opening' },
  { timeRange: '5:00–10:00', title: 'Segment 1 — Writing Without Sounding Possessed', segment: 'writing' },
  { timeRange: '10:00–18:00', title: 'Segment 2 — Research Without Fake Mastery', segment: 'research' },
  { timeRange: '18:00–22:00', title: 'Segment 3 — Brainstorming Without Flattening Creativity', segment: 'brainstorming' },
  { timeRange: '22:00–27:00', title: 'Segment 4 — I Lost My Job and Gained 10 AI Assistants', segment: 'synthetic_staff' },
  {
    timeRange: '27:00–34:45',
    title: 'Advanced Systems — When Help Becomes Infrastructure (Interpassivity ~31:36 — use Map)',
    segment: 'advanced_systems',
  },
  {
    timeRange: '31:36–32:18',
    title: 'Interpassivity — when the system performs the response for you (deck v2 slide 46)',
    segment: 'interpassivity',
  },
  { timeRange: '34:42–37:42', title: 'What Stays Human', segment: 'what_stays_human' },
  { timeRange: '37:42–40:42', title: 'Closing', segment: 'closing' },
] as const

export const LEARN_AI_REHEARSE_EDUTAINMENT = {
  skillWords:
    'Say the skill out loud when you land it — e.g. “The skill here is **verification**,” “**selection**,” “**task boundaries**,” “**context design**.”',
  bridgeLines: [
    'Now that we can sound professional, let’s ask whether we know anything.',
    'Now that we feel informed, let’s ask whether we still have taste.',
    'Now that we can generate ideas, let’s ask what happens when the tool starts feeling like a team.',
    'Now that the team exists, let’s ask what happens when help becomes infrastructure.',
    'After automation and interpassivity — when the system can even perform the “handled” feeling for you — what should still belong to a person?',
  ],
  quoteSlidePattern:
    'After a big on-screen line, add one clarifying sentence (then continue). Pattern: show slide → pause → read line → gloss → continue.',
  examples: [
    { quote: 'A summary is not understanding.', gloss: 'A summary is useful, but usefulness is not the same thing as ownership.' },
    { quote: '10 assistants ≠ support', gloss: 'Delegation can scale output and still leave you alone with the consequences.' },
    { quote: 'Automation solves repetition and creates maintenance.', gloss: 'The work does not disappear. It changes shape.' },
  ],
} as const

/** Numbered “Helpful improvements” from the printable rehearsal doc — edutainment on stage. */
export const LEARN_AI_REHEARSE_EDUTAINMENT_IMPROVEMENTS: readonly {
  title: string
  body: string
}[] = [
  {
    title: '1. Emphasize the skill word each time',
    body: 'Say it out loud — e.g. “The skill here is **prompting**,” “**verification**,” “**selection**,” “**task boundaries**,” “**context design**.” That helps the audience feel they are learning, not just listening.',
  },
  {
    title: '2. Use one bridge line between every segment',
    body: 'Examples: move from sounding professional → whether we know anything; from feeling informed → whether we still have taste; from generating ideas → the tool feeling like a team; from the team → help becoming infrastructure.',
  },
  {
    title: '3. Add one sentence of explanation after each big quote slide',
    body: 'After “A summary is not understanding,” gloss with usefulness vs ownership. After “10 assistants ≠ support,” gloss with delegation vs consequences. After “Automation solves repetition…,” gloss with work changing shape — not disappearing.',
  },
  {
    title: '4. Let the slide breathe, then interpret it',
    body: 'Pattern: show slide → pause → read line → add one clarifying sentence → continue. Smooths the jaggedness.',
  },
]

export const LEARN_AI_REHEARSE_NEXT_STEP =
  'Open the **Script** tab (or edit `content/workshop/learn-ai-without-losing-yourself-printable-rehearsal.md`) for the printable manuscript. Deck v2: image prompts live in `src/constants/learn-ai-slide-prompts-v2.ts` (slides 1–49 after the Interpassivity insert); presenter bridges and culture sprinkles in `learn-ai-deck-v2-presenter.ts`. Strongest next production step: lock slide order, then match Cloudinary (or other) assets to `deckSlideNumber` on each beat.'
