import type { LabChapter, LabChapterId } from './types'
import { LAB_CHAPTER_IDS } from './types'

export const LAB_CHAPTERS: readonly LabChapter[] = [
  {
    id: 'observe',
    number: 1,
    title: 'Observe',
    question: 'Whose labor and knowledge make the process possible?',
    summary:
      'A finished card depends on people, tools, a bottleneck, and at least one decision that stays human.',
    activity:
      'Map the trigger, people, tools, decisions, bottleneck, consequence, and one step kept human.',
    artifact: 'Workflow Brief',
    interaction: 'Data Biography Mapper',
    plateId: 'observe',
    storyboardId: 'story-observe',
  },
  {
    id: 'structure',
    number: 2,
    title: 'Structure',
    question: 'How do metadata and description shape what can be known?',
    summary:
      'Required fields stay tied to the source. Uncertainty and missing rights stay visible.',
    activity:
      'Classify each field, separate source from interpretation, and keep the unknown unknown.',
    artifact: 'Data Dictionary',
    interaction: 'Metadata Sorter',
    plateId: 'structure',
  },
  {
    id: 'automate',
    number: 3,
    title: 'Automate',
    question: 'Which choices become hidden when a workflow runs?',
    summary:
      'An ordinary record may export. A record with missing rights must hold. A suggestion cannot publish.',
    activity:
      'Run two sample records, inspect the trace, and log the human decision on each path.',
    artifact: 'Core Workflow and Execution Log',
    interaction: 'Workflow Builder',
    plateId: 'automate',
  },
  {
    id: 'judge',
    number: 4,
    title: 'Judge',
    question: 'What counts as evidence rather than fluent speculation?',
    summary:
      'A precise year is not evidence. The reviewer names who may authorize the next action.',
    activity:
      'Mark supported and unsupported clauses, name an approver, and test five cases.',
    artifact: 'AI Review Contract',
    interaction: 'Evidence Review Desk',
    plateId: 'judge',
    storyboardId: 'story-judge',
  },
  {
    id: 'relate',
    number: 5,
    title: 'Relate',
    question: 'What claim does a relationship make?',
    summary:
      'Confirmed, proposed, restricted, and unknown connections stay distinct. One node stays unconnected.',
    activity:
      'Set each edge, open the proposed claim, and choose a reviewed next action.',
    artifact: 'Context Network',
    interaction: 'Context Network Map',
    plateId: 'relate',
  },
  {
    id: 'publish',
    number: 6,
    title: 'Publish',
    question: 'What argument does an interface make?',
    summary:
      'Source, interpretation, uncertainty, and rights stay in separate layers. One gap stays uncovered.',
    activity: 'Choose an audience and arrange the public layers without flattening the date.',
    artifact: 'Accessible Storyboard',
    interaction: 'Story Surface Composer',
    plateId: 'publish',
    storyboardId: 'story-publish',
  },
  {
    id: 'preserve',
    number: 7,
    title: 'Preserve',
    question: 'What remains useful when tools, links, or people fail?',
    summary:
      'Disable one dependency, watch the failure, and record a fallback that does not invent facts.',
    activity:
      'Register the dependencies, rehearse an AI-service outage, and export a preservation packet.',
    artifact: 'Preservation Packet',
    interaction: 'Failure Lab',
    plateId: 'preserve',
  },
  {
    id: 'hand-off',
    number: 8,
    title: 'Hand Off',
    question: 'Can another person operate and question the system?',
    summary:
      'A second pass follows the guide, meets a missing dependency, and chooses what happens next.',
    activity:
      'Rehearse the failure path and leave an operating guide with a 30-day plan.',
    artifact: 'Operating Guide and 30-Day Plan',
    interaction: 'Handoff Rehearsal',
    plateId: 'handoff',
    storyboardId: 'story-handoff',
  },
]

export function getLabChapter(id: string): LabChapter | undefined {
  return LAB_CHAPTERS.find((chapter) => chapter.id === id)
}

export function nextLabChapter(id: LabChapterId): LabChapter | undefined {
  const index = LAB_CHAPTER_IDS.indexOf(id)
  const nextId = LAB_CHAPTER_IDS[index + 1]
  return nextId ? getLabChapter(nextId) : undefined
}

export function prevLabChapter(id: LabChapterId): LabChapter | undefined {
  const index = LAB_CHAPTER_IDS.indexOf(id)
  const prevId = LAB_CHAPTER_IDS[index - 1]
  return prevId ? getLabChapter(prevId) : undefined
}
