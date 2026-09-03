import { TRUST_CENTRAL_QUESTION } from './types'

export type TrustOverviewSectionId =
  | 'what-this-is'
  | 'the-question'
  | 'why-it-matters'
  | 'the-path'
  | 'your-seat'
  | 'vocabulary'

/**
 * The Overview is a contents page, not a chapter. Each band states what it is
 * in a declarative title, so the page never borrows the lesson grammar
 * (Read / Vote / Pick / Inspect) that the six chapters use.
 */
export type TrustOverviewSection = {
  id: TrustOverviewSectionId
  /** Printed in the eyebrow and the rail. */
  number: string
  /** Two words at most, for the section rail. */
  navLabel: string
  title: string
  /** One sentence, set below the title. */
  deck: string
}

export const TRUST_OVERVIEW_SECTIONS: readonly TrustOverviewSection[] = [
  {
    id: 'what-this-is',
    number: '01',
    navLabel: 'What this is',
    title: 'A 30-minute lab for deciding when AI may act',
    deck: 'What it is, who it is for, and what you leave with.',
  },
  {
    id: 'the-question',
    number: '02',
    navLabel: 'The question',
    title: TRUST_CENTRAL_QUESTION,
    deck: 'One question runs through all six chapters. There are three answers.',
  },
  {
    id: 'why-it-matters',
    number: '03',
    navLabel: 'Why it matters',
    title: 'One person cannot be five roles',
    deck: 'Speed collapses interpretation, building, judging, and permission into one seat. That is not evaluation.',
  },
  {
    id: 'the-path',
    number: '04',
    navLabel: 'The path',
    title: 'Six chapters, thirty minutes',
    deck: 'Each chapter ends in a checkpoint you can point to. Start anywhere, but they build.',
  },
  {
    id: 'your-seat',
    number: '05',
    navLabel: 'Your seat',
    title: 'Pick the seat you keep for the whole lab',
    deck: 'Four people inspect one case. Your seat changes what you are accountable for, not the case.',
  },
  {
    id: 'vocabulary',
    number: '06',
    navLabel: 'Vocabulary',
    title: 'Eight terms you will hear',
    deck: 'Optional. Each term links to the chapter that teaches it.',
  },
]

/** The orientation answers a curator, client, or learner wants before starting. */
export const TRUST_OVERVIEW_SPEC = [
  { label: 'For', value: 'Mixed teams — Product, Engineering, Design, Strategy.' },
  { label: 'You do', value: 'Judge one confident agent card, then name the controls it is missing.' },
  { label: 'Time', value: '30 minutes, six chapters, self-paced.' },
  { label: 'You leave with', value: 'A recorded verdict, a seat, and one control you can defend.' },
] as const
