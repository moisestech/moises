import { JUDGE_CASES, JUDGE_CLAUSES, RELATE_CLAIMS, STRUCTURE_FIELDS } from './sample'
import type {
  AutomateArtifact,
  HandoffArtifact,
  JudgeArtifact,
  LabProject,
  ObserveArtifact,
  PreserveArtifact,
  PublishArtifact,
  RelateArtifact,
  StructureArtifact,
} from './types'
import { LAB_SAMPLE_LABEL, LAB_TITLE } from './types'

export function observeReady(artifact: ObserveArtifact): string[] {
  const notes: string[] = []
  const fields: [keyof ObserveArtifact, string][] = [
    ['trigger', 'Name the trigger.'],
    ['people', 'Name the people.'],
    ['tools', 'Name the tools.'],
    ['decisions', 'Name the decisions.'],
    ['bottleneck', 'Name the bottleneck.'],
    ['consequence', 'Name the consequence.'],
    ['keptHuman', 'Choose the step that stays human.'],
  ]
  for (const [key, message] of fields) {
    if (!String(artifact[key]).trim()) notes.push(message)
  }
  return notes
}

export function structureNotes(artifact: StructureArtifact): string[] {
  return STRUCTURE_FIELDS.filter((field) => artifact.fields[field.key] !== field.correct).map(
    (field) => field.miss,
  )
}

export function automateNotes(artifact: AutomateArtifact): string[] {
  const notes: string[] = []
  const a = artifact.runs['A-014']
  const b = artifact.runs['B-015']
  if (!a.reason.trim() || (a.decision !== 'approve' && a.decision !== 'revise')) {
    notes.push('A-014 needs a logged approve or revise, with a reason.')
  }
  if (a.refused) notes.push('A-014 should be allowed to export after review. Rights are supplied.')
  if (b.decision !== 'hold' || !b.reason.trim()) {
    notes.push('B-015 is missing rights. The logged decision must be hold, with a reason.')
  }
  return notes
}

export function judgeNotes(artifact: JudgeArtifact): string[] {
  const notes: string[] = []
  if (!artifact.approver.trim()) notes.push('Name the person who can authorize the next action.')
  for (const clause of JUDGE_CLAUSES) {
    if (artifact.clauses[clause.id] !== clause.correct) {
      notes.push(
        clause.correct === 'supported'
          ? `Supported by the card: ${clause.text}`
          : `Not supported by the card: ${clause.text}`,
      )
    }
  }
  for (const item of JUDGE_CASES) {
    if (artifact.cases[item.id] !== item.correct) {
      notes.push(item.correct === 'hold' ? `Hold this case: ${item.text}` : `This case can pass: ${item.text}`)
    }
  }
  return notes
}

export function relateNotes(artifact: RelateArtifact): string[] {
  const notes: string[] = []
  for (const claim of RELATE_CLAIMS) {
    const current = artifact.claims[claim.id]
    if (!current || current.state !== claim.correct) {
      notes.push(`${claim.label}: ${claim.hint}`)
    }
  }
  const proposed = artifact.claims.institution
  if (proposed?.state === 'proposed') {
    if (!proposed.evidence.trim() || !proposed.reviewer.trim() || !proposed.revision.trim()) {
      notes.push('Open the institution claim and record evidence, a reviewer, and a revision note.')
    }
  }
  if (!artifact.nextAction.trim()) notes.push('Choose a reviewed next action.')
  return notes
}

export function publishNotes(artifact: PublishArtifact): string[] {
  const notes: string[] = []
  if (artifact.order[0] !== 'source') notes.push('Put the source layer first.')
  if (artifact.order[artifact.order.length - 1] !== 'credit') {
    notes.push('Keep credit and rights as the last layer.')
  }
  if (!artifact.gapVisible) notes.push('Leave the date uncertainty visible. Do not cover the gap.')
  if (!artifact.audience.trim()) notes.push('Choose an audience.')
  return notes
}

export function preserveNotes(artifact: PreserveArtifact): string[] {
  const notes: string[] = []
  if (!artifact.aiDisabled) notes.push('Disable the approved AI service and read the failure.')
  if (artifact.fallback !== 'local-ruleset') {
    notes.push('Choose the local ruleset. Do not invent a date or drop the record.')
  }
  if (!artifact.recovery.trim()) notes.push('Record how the record recovers.')
  return notes
}

export function handoffNotes(artifact: HandoffArtifact): string[] {
  const notes: string[] = []
  if (!artifact.guideOpened) notes.push('Open the operating guide.')
  if (!artifact.failureSeen) notes.push('Run the second pass and meet the missing credential.')
  if (!artifact.fallback.trim()) notes.push('Choose the fallback that does not need the author’s login.')
  if (!artifact.choice) notes.push('Choose Continue, Revise, Transfer, Pause, or Retire.')
  if (!artifact.thirtyDay.trim()) notes.push('Write the 30-day plan.')
  return notes
}

function line(label: string, value: string) {
  return `- **${label}:** ${value.trim() || '—'}`
}

export function projectToMarkdown(project: LabProject): string {
  const observe = project.observe
  const structure = project.structure
  const automate = project.automate
  const judge = project.judge
  const relate = project.relate
  const publish = project.publish
  const preserve = project.preserve
  const handoff = project['hand-off']

  return [
    `# ${LAB_TITLE} — project package`,
    '',
    LAB_SAMPLE_LABEL,
    '',
    'This package was saved in the browser from the working proposal. It is not a student record and it was not sent anywhere.',
    '',
    '## Workflow Brief',
    observe?.committed
      ? [
          line('Trigger', observe.trigger),
          line('People', observe.people),
          line('Tools', observe.tools),
          line('Decisions', observe.decisions),
          line('Bottleneck', observe.bottleneck),
          line('Consequence', observe.consequence),
          line('Kept human', observe.keptHuman),
        ].join('\n')
      : '_Not saved._',
    '',
    '## Data Dictionary',
    structure?.committed
      ? STRUCTURE_FIELDS.map((field) => line(field.label, structure.fields[field.key] || '—')).join('\n')
      : '_Not saved._',
    '',
    '## Execution Log',
    automate?.committed
      ? [
          line('AI route', automate.useAi ? 'Seeded suggestion reviewed' : 'No-AI route'),
          line('A-014', `${automate.runs['A-014'].decision} — ${automate.runs['A-014'].reason}`),
          line('B-015', `${automate.runs['B-015'].decision} — ${automate.runs['B-015'].reason}`),
        ].join('\n')
      : '_Not saved._',
    '',
    '## AI Review Contract',
    judge?.committed ? line('Approver', judge.approver) : '_Not saved._',
    '',
    '## Context Network',
    relate?.committed ? line('Next action', relate.nextAction) : '_Not saved._',
    '',
    '## Accessible Storyboard',
    publish?.committed
      ? [
          line('Audience', publish.audience),
          line('Order', publish.order.join(' → ')),
          line('Uncertainty gap', publish.gapVisible ? 'Left visible' : 'Covered'),
        ].join('\n')
      : '_Not saved._',
    '',
    '## Preservation Packet',
    preserve?.committed
      ? [line('Fallback', preserve.fallback), line('Recovery', preserve.recovery)].join('\n')
      : '_Not saved._',
    '',
    '## Operating Guide and 30-Day Plan',
    handoff?.committed
      ? [
          line('Fallback', handoff.fallback),
          line('Decision', handoff.choice),
          line('30-day plan', handoff.thirtyDay),
        ].join('\n')
      : '_Not saved._',
    '',
  ].join('\n')
}

export function projectToJson(project: LabProject): string {
  return JSON.stringify(
    {
      title: LAB_TITLE,
      label: LAB_SAMPLE_LABEL,
      project,
    },
    null,
    2,
  )
}
