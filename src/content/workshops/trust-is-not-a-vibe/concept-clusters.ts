import type { TrustDefinitionIllustrationId } from './definition-illustrations'
import type { TrustTimeSegmentId } from './types'

export type ConceptEmphasis = 'primary' | 'supporting'

export type ConceptClusterId =
  | 'overview-core'
  | 'overview-vocab'
  | 'seeded-inspect'
  | 'harness-core'
  | 'harness-reliability'
  | 'looks-right-vibe'
  | 'seeded-benchmark'
  | 'loop-faithfulness'
  | 'harness-judge'
  | 'harness-baseline'

export type ConceptItem = {
  id: string
  term: string
  definition: string
  whyItMatters: string
  imageId?: TrustDefinitionIllustrationId
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
        imageId: 'definition-eval',
        emphasis: 'primary',
      },
      {
        id: 'task',
        term: 'Task',
        definition: 'The single behavior the team has chosen to measure.',
        whyItMatters: 'A focused task prevents one score from hiding several different failures.',
        imageId: 'definition-task',
        emphasis: 'primary',
      },
      {
        id: 'cases',
        term: 'Cases',
        definition: 'The representative inputs and situations used to test the task.',
        whyItMatters: 'Good cases include ordinary use, edge conditions, and known failures.',
        imageId: 'definition-cases',
        emphasis: 'primary',
      },
      {
        id: 'grader',
        term: 'Grader',
        definition: 'The method that turns an output or trace into evidence against explicit criteria.',
        whyItMatters: 'A grader measures; it does not grant permission for the agent to act.',
        imageId: 'definition-grader',
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
  {
    id: 'overview-vocab',
    chapterId: 'overview',
    ariaLabel: 'Eight field terms',
    defaultActiveId: 'vibe-eval',
    items: [
      {
        id: 'vibe-eval',
        term: 'Vibe eval',
        definition: 'Watching it succeed once and calling that proof.',
        whyItMatters: 'One clean run is a story. It is not a score you can rerun tomorrow.',
        emphasis: 'primary',
        source: { label: 'Taught in Looks Right', href: '/workshop/trust-is-not-a-vibe/learn/looks-right' },
      },
      {
        id: 'eval',
        term: 'Eval',
        definition: 'A repeatable score for this agent, on this task, with this data.',
        whyItMatters: 'If you cannot run it again on the same cases, it is not an eval.',
        emphasis: 'primary',
        source: { label: 'Taught in The Loop', href: '/workshop/trust-is-not-a-vibe/learn/the-loop' },
      },
      {
        id: 'benchmark',
        term: 'Benchmark',
        definition: 'A generic model test. Useful for picking a starting model, not for proving your system.',
        whyItMatters: 'A benchmark grades a model in the abstract. An eval grades this agent, here.',
        emphasis: 'supporting',
        source: { label: 'Taught in Seeded Failures', href: '/workshop/trust-is-not-a-vibe/learn/seeded-failures' },
      },
      {
        id: 'golden-set',
        term: 'Golden set',
        definition: 'Six to twelve of your cases — common, edge, and every failure already seen. Also called an eval set.',
        whyItMatters: 'Start with the failures you already know. That set is the harness, not a vibe.',
        emphasis: 'supporting',
        source: { label: 'Taught in The Harness', href: '/workshop/trust-is-not-a-vibe/learn/the-harness' },
      },
      {
        id: 'faithfulness',
        term: 'Faithfulness',
        definition: 'True and backed by sources. The hallucination check. Also called groundedness.',
        whyItMatters: 'If the card cannot point to a source, the claim is decoration.',
        emphasis: 'supporting',
        source: { label: 'Taught in The Loop', href: '/workshop/trust-is-not-a-vibe/learn/the-loop' },
      },
      {
        id: 'llm-as-judge',
        term: 'LLM-as-judge',
        definition: 'A strong model grades against your rubric. Calibrate it on a human sample first.',
        whyItMatters: 'The judge is only as honest as the human sample you checked it against.',
        emphasis: 'supporting',
        source: { label: 'Taught in The Harness', href: '/workshop/trust-is-not-a-vibe/learn/the-harness' },
      },
      {
        id: 'baseline',
        term: 'Baseline',
        definition: 'The number you get before you start improving. Without it, “better” is a vibe.',
        whyItMatters: 'Write the first number down. Otherwise every later run is theater.',
        emphasis: 'supporting',
        source: { label: 'Taught in The Harness', href: '/workshop/trust-is-not-a-vibe/learn/the-harness' },
      },
      {
        id: 'whac-a-mole',
        term: 'Whac-a-mole',
        definition: 'Fix one failure, another pops. The loop exists because this does not stop.',
        whyItMatters: 'A provider can change the model under you overnight. The loop is the point.',
        emphasis: 'supporting',
        source: { label: 'Taught in The Harness', href: '/workshop/trust-is-not-a-vibe/learn/the-harness' },
      },
    ],
  },
  {
    id: 'looks-right-vibe',
    chapterId: 'looks-right',
    ariaLabel: 'Vibe eval',
    defaultActiveId: 'vibe-eval',
    items: [
      {
        id: 'vibe-eval',
        term: 'Vibe eval',
        definition: 'Watching it succeed once and calling that proof.',
        whyItMatters: 'One clean run is a story. It is not a score you can rerun tomorrow.',
        imageId: 'vibe-eval',
        emphasis: 'primary',
      },
    ],
  },
  {
    id: 'seeded-benchmark',
    chapterId: 'seeded-failures',
    ariaLabel: 'Benchmark',
    defaultActiveId: 'benchmark',
    items: [
      {
        id: 'benchmark',
        term: 'Benchmark',
        definition: 'A generic model test. Useful for picking a starting model, not for proving your system.',
        whyItMatters: 'A benchmark grades a model in the abstract. An eval grades this agent, here.',
        imageId: 'benchmark',
        emphasis: 'primary',
      },
    ],
  },
  {
    id: 'loop-faithfulness',
    chapterId: 'the-loop',
    ariaLabel: 'Faithfulness',
    defaultActiveId: 'faithfulness',
    items: [
      {
        id: 'faithfulness',
        term: 'Faithfulness',
        definition: 'True and backed by sources. The hallucination check. Also called groundedness.',
        whyItMatters: 'If the card cannot point to a source, the claim is decoration.',
        imageId: 'faithfulness',
        emphasis: 'primary',
      },
    ],
  },
  {
    id: 'harness-judge',
    chapterId: 'the-harness',
    ariaLabel: 'LLM-as-judge',
    defaultActiveId: 'llm-as-judge',
    items: [
      {
        id: 'llm-as-judge',
        term: 'LLM-as-judge',
        definition: 'A strong model grades against your rubric. Calibrate it on a human sample first.',
        whyItMatters: 'The judge is only as honest as the human sample you checked it against.',
        imageId: 'llm-as-judge',
        emphasis: 'primary',
      },
    ],
  },
  {
    id: 'harness-baseline',
    chapterId: 'the-harness',
    ariaLabel: 'Baseline',
    defaultActiveId: 'baseline',
    items: [
      {
        id: 'baseline',
        term: 'Baseline',
        definition: 'The number you get before you start improving. Without it, “better” is a vibe.',
        whyItMatters: 'Write the first number down. Otherwise every later run is theater.',
        imageId: 'baseline',
        emphasis: 'primary',
      },
    ],
  },
]

export function getTrustConceptCluster(id: ConceptClusterId): ConceptCluster {
  const cluster = TRUST_CONCEPT_CLUSTERS.find((entry) => entry.id === id)
  if (!cluster) throw new Error(`Unknown concept cluster: ${id}`)
  return cluster
}
