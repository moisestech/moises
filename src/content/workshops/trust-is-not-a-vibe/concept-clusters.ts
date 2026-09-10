import type { TrustTimeSegmentId } from './types'

export type ConceptEmphasis = 'primary' | 'supporting'

export type ConceptClusterId =
  | 'overview-core'
  | 'seeded-inspect'
  | 'harness-core'
  | 'harness-reliability'

export type ConceptItem = {
  id: string
  term: string
  definition: string
  whyItMatters: string
  emphasis?: ConceptEmphasis
  source?: {
    label: string
    href: string
  }
}

export type ConceptCluster = {
  id: ConceptClusterId
  chapterId: TrustTimeSegmentId
  ariaLabel: string
  items: readonly ConceptItem[]
  defaultActiveId?: string
}

export const TRUST_CONCEPT_CLUSTERS: readonly ConceptCluster[] = [
  {
    id: 'overview-core',
    chapterId: 'overview',
    ariaLabel: 'Core evaluation terms',
    defaultActiveId: 'eval',
    items: [
      {
        id: 'eval',
        term: 'Eval',
        definition: 'A repeatable test of one behavior on representative cases, using an explicit grader.',
        whyItMatters: '‘Is it good?’ becomes a question the team can test again.',
        emphasis: 'primary',
      },
      {
        id: 'task',
        term: 'Task',
        definition: 'The single behavior the team has chosen to measure.',
        whyItMatters: 'A focused task prevents one score from hiding several different failures.',
        emphasis: 'primary',
      },
      {
        id: 'cases',
        term: 'Cases',
        definition: 'The representative inputs and situations used to test the task.',
        whyItMatters: 'Good cases include ordinary use, edge conditions, and known failures.',
        emphasis: 'primary',
      },
      {
        id: 'grader',
        term: 'Grader',
        definition: 'The method that turns an output or trace into evidence against explicit criteria.',
        whyItMatters: 'A grader measures; it does not grant permission for the agent to act.',
        emphasis: 'primary',
      },
    ],
  },
  {
    id: 'seeded-inspect',
    chapterId: 'seeded-failures',
    ariaLabel: 'Inspect beyond the prose',
    defaultActiveId: 'output',
    items: [
      {
        id: 'output',
        term: 'Output',
        definition: 'What the system produced for a person to read or use.',
        whyItMatters: 'Polished wording is not the whole system. The card is an output, not a proof.',
        emphasis: 'primary',
      },
      {
        id: 'trajectory',
        term: 'Trajectory',
        definition:
          'The sequence of observations, decisions, tool calls, and intermediate states that produced an outcome.',
        whyItMatters: 'The break often lives in the path, not in the sentence a person reads.',
        emphasis: 'primary',
      },
      {
        id: 'permission',
        term: 'Permission',
        definition: 'Explicit authority for a consequential action; correctness alone does not create it.',
        whyItMatters: 'A correct-looking send can still lack the grant to write, send, or remove.',
        emphasis: 'primary',
      },
      {
        id: 'outcome',
        term: 'Outcome',
        definition: 'What actually happened after the system acted, including downstream effects.',
        whyItMatters: 'Harm lands after the write — on a person, a roster, a public date — not in the card’s tone.',
        emphasis: 'primary',
      },
    ],
  },
  {
    id: 'harness-core',
    chapterId: 'the-harness',
    ariaLabel: 'How evaluation produces a release decision',
    defaultActiveId: 'criterion',
    items: [
      {
        id: 'criterion',
        term: 'Criterion',
        definition: 'The explicit condition used to judge a case.',
        whyItMatters: 'Without it, a grader has nothing stable to measure against.',
        emphasis: 'primary',
      },
      {
        id: 'evidence',
        term: 'Evidence',
        definition: 'The observable result produced by a check or grader.',
        whyItMatters: 'A grader produces evidence. Evidence does not, by itself, authorize a write.',
        emphasis: 'primary',
      },
      {
        id: 'gate',
        term: 'Gate',
        definition: 'A policy decision that allows, pauses, or blocks an action.',
        whyItMatters: 'A gate authorizes or stops the write. One overall score cannot override a missing permission or pause.',
        emphasis: 'primary',
      },
      {
        id: 'golden-set',
        term: 'Golden set',
        definition:
          'A small curated collection of common cases, edge cases, and known failures that is rerun after changes.',
        whyItMatters: 'The same cases come back so a fix does not hide a new break.',
        emphasis: 'primary',
      },
    ],
  },
  {
    id: 'harness-reliability',
    chapterId: 'the-harness',
    ariaLabel: 'Whether the measurement system remains trustworthy',
    defaultActiveId: 'calibration',
    items: [
      {
        id: 'calibration',
        term: 'Calibration',
        definition:
          'Comparing an automated grader against human-labeled anchor cases and adjusting it when they disagree.',
        whyItMatters: 'Human-labeled cases are high-value anchors. They are not infallible judges.',
        emphasis: 'supporting',
      },
      {
        id: 'slice',
        term: 'Slice',
        definition:
          'A meaningful subgroup of cases examined separately so an average cannot hide a concentrated failure.',
        whyItMatters: 'A passing average can still fail the people, permissions, or dates that matter most.',
        emphasis: 'supporting',
      },
      {
        id: 'regression',
        term: 'Regression',
        definition: 'A previously passing behavior that fails after a change.',
        whyItMatters: 'Rerunning the golden set is how you catch what the last fix broke.',
        emphasis: 'supporting',
      },
    ],
  },
]

export function getTrustConceptCluster(id: ConceptClusterId): ConceptCluster {
  const cluster = TRUST_CONCEPT_CLUSTERS.find((entry) => entry.id === id)
  if (!cluster) throw new Error(`Unknown concept cluster: ${id}`)
  return cluster
}
