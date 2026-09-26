'use client'

import Link from 'next/link'
import {
  LAB_BASE,
  LAB_INTERACTION_LABEL,
  LAB_LEARN,
  LAB_SAMPLE_LABEL,
  LAB_THESIS,
  getLabChapter,
  nextLabChapter,
  prevLabChapter,
  type LabChapterId,
  type LabProject,
} from '@/content/workshops/artist-infrastructure-lab'
import { AutomateBuilder } from './AutomateBuilder'
import { HandoffRehearsal } from './HandoffRehearsal'
import { JudgeDesk } from './JudgeDesk'
import { LabHeader, LabKicker, labPage, labWrap } from './LabChrome'
import { LabMedia } from './LabMedia'
import { ObserveMapper } from './ObserveMapper'
import { PreserveLab } from './PreserveLab'
import { PublishComposer } from './PublishComposer'
import { RelateMap } from './RelateMap'
import { StructureSorter } from './StructureSorter'
import { useLabProject } from './useLabProject'

export function LearnClient({ chapterId }: { chapterId: LabChapterId }) {
  const chapter = getLabChapter(chapterId)
  const { project, hydrated, commit } = useLabProject()
  if (!chapter) return null
  const next = nextLabChapter(chapter.id)
  const prev = prevLabChapter(chapter.id)

  return (
    <main className={labPage}>
      <div className={`${labWrap} space-y-8`}>
        <LabHeader current={chapter.id} />
        <header className="space-y-3">
          <LabKicker>
            Chapter {chapter.number} of 8 · {chapter.interaction}
          </LabKicker>
          <h1 className="text-4xl tracking-tight">{chapter.title}</h1>
          <p className="max-w-2xl text-xl leading-snug">{chapter.question}</p>
          <p className="max-w-2xl text-base leading-relaxed text-[#3d3832]">{chapter.summary}</p>
        </header>
        <LabMedia id={chapter.plateId} />
        <p className="max-w-2xl text-base leading-relaxed">{chapter.activity}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0f5f5c]">
          {LAB_INTERACTION_LABEL}
        </p>
        <p className="text-sm text-[#5c564e]">{LAB_SAMPLE_LABEL}</p>
        {hydrated ? (
          <ChapterBody chapterId={chapter.id} project={project} commit={commit} />
        ) : (
          <p className="text-sm">Opening the sample record…</p>
        )}
        {chapter.storyboardId ? <LabMedia id={chapter.storyboardId} /> : null}
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[#d9d0c3] pt-4 text-sm">
          {prev ? (
            <Link href={`${LAB_LEARN}/${prev.id}`}>Previous: {prev.title}</Link>
          ) : (
            <Link href={LAB_BASE}>Proposal</Link>
          )}
          {next ? (
            <Link href={`${LAB_LEARN}/${next.id}`}>Next: {next.title}</Link>
          ) : (
            <Link href={LAB_BASE}>Back to the proposal</Link>
          )}
        </footer>
      </div>
    </main>
  )
}

function ChapterBody({
  chapterId,
  project,
  commit,
}: {
  chapterId: LabChapterId
  project: LabProject
  commit: <K extends LabChapterId>(key: K, value: NonNullable<LabProject[K]>) => void
}) {
  switch (chapterId) {
    case 'observe':
      return <ObserveMapper initial={project.observe} onCommit={(artifact) => commit('observe', artifact)} />
    case 'structure':
      return (
        <StructureSorter initial={project.structure} onCommit={(artifact) => commit('structure', artifact)} />
      )
    case 'automate':
      return <AutomateBuilder initial={project.automate} onCommit={(artifact) => commit('automate', artifact)} />
    case 'judge':
      return <JudgeDesk initial={project.judge} onCommit={(artifact) => commit('judge', artifact)} />
    case 'relate':
      return <RelateMap initial={project.relate} onCommit={(artifact) => commit('relate', artifact)} />
    case 'publish':
      return <PublishComposer initial={project.publish} onCommit={(artifact) => commit('publish', artifact)} />
    case 'preserve':
      return <PreserveLab initial={project.preserve} onCommit={(artifact) => commit('preserve', artifact)} />
    case 'hand-off':
      return (
        <HandoffRehearsal
          initial={project['hand-off']}
          project={project}
          onCommit={(artifact) => commit('hand-off', artifact)}
        />
      )
    default:
      return null
  }
}
