'use client'

import Image from 'next/image'
import type { CurriculumModule } from '@/content/workshops/moonlighter-ai-3d-printing'
import {
  getChapterMasthead,
  getChapterSupport,
  type ResolvedChapterSlot,
} from '@/content/workshops/moonlighter-ai-3d-printing'

function ChapterStill({ slot }: { slot: ResolvedChapterSlot }) {
  if (slot.status === 'missing' || !slot.media?.src) {
    return (
      <div className="border border-dashed border-[var(--ml-controlled)] bg-[var(--ml-controlled)]/10 p-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-controlled)]">
          Still missing
        </p>
        <p className="mt-1 text-sm font-medium">{slot.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-[var(--ml-ink)]/75">{slot.caption}</p>
      </div>
    )
  }

  const aspect =
    slot.media.aspect === '1:1' ? 'aspect-square' : slot.media.aspect === '4:3' ? 'aspect-[4/3]' : 'aspect-video'

  return (
    <figure>
      <div className={`relative w-full overflow-hidden border border-[var(--ml-soft-gray)] ${aspect}`}>
        <Image
          src={slot.media.src}
          alt={slot.media.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 720px, 100vw"
        />
      </div>
      <figcaption className="mt-2 text-sm leading-relaxed text-[var(--ml-ink)]/70">
        <span className="font-medium text-[var(--ml-ink)]">{slot.title}. </span>
        {slot.caption}
      </figcaption>
    </figure>
  )
}

export function PhaseMasthead({ module }: { module: CurriculumModule }) {
  const masthead = getChapterMasthead(module.id)
  const support = getChapterSupport(module.id)

  return (
    <header className="space-y-4">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ml-digital)]">
        Module {module.id} · {module.phase}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{module.header}</h1>
      <p className="text-lg text-[var(--ml-ink)]/70">{module.subhead}</p>
      <p className="max-w-[720px] text-base leading-relaxed text-[var(--ml-ink)]/85">{module.objective}</p>
      {masthead && <ChapterStill slot={masthead} />}
      {support.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {support.map((slot) => (
            <ChapterStill key={slot.id} slot={slot} />
          ))}
        </div>
      )}
    </header>
  )
}

export function TechnicalStrip({ module }: { module: CurriculumModule }) {
  const cells = [
    ['Input', module.input],
    ['Tools', module.tools.join(' · ')],
    ['Timebox', `${module.timeboxMin} min`],
    ['Output', module.output],
    ['Pass check', module.passCheck],
  ] as const
  return (
    <div className="grid gap-2 border border-[var(--ml-soft-gray)] bg-white/50 sm:grid-cols-2 lg:grid-cols-5">
      {cells.map(([label, value]) => (
        <div key={label} className="border-[var(--ml-soft-gray)] p-3 sm:border-r sm:last:border-r-0">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">{label}</p>
          <p className="mt-1 text-xs leading-snug text-[var(--ml-ink)]/85">{value}</p>
        </div>
      ))}
    </div>
  )
}

export function ToolBadgeGroup({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Tool choices">
      {tools.map((tool, i) => (
        <span key={tool} className="flex items-center gap-2">
          {i > 0 && <span className="font-mono text-[10px] text-[var(--ml-ink)]/40">or</span>}
          <span className="rounded-sm border border-[var(--ml-soft-gray)] bg-white px-2 py-1 text-xs">{tool}</span>
        </span>
      ))}
    </div>
  )
}
