'use client'

import type { CurriculumModule } from '@/content/workshops/moonlighter-ai-3d-printing'

export function PhaseMasthead({ module }: { module: CurriculumModule }) {
  return (
    <header className="space-y-4">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ml-digital)]">
        Module {module.id} · {module.phase}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{module.header}</h1>
      <p className="text-lg text-[var(--ml-ink)]/70">{module.subhead}</p>
      <p className="max-w-[720px] text-base leading-relaxed text-[var(--ml-ink)]/85">{module.objective}</p>
      <div
        className="aspect-[16/9] w-full border border-[var(--ml-soft-gray)] bg-gradient-to-br from-[var(--ml-digital)]/15 via-transparent to-[var(--ml-controlled)]/10"
        role="img"
        aria-label={`Editorial process image placeholder for ${module.phase}`}
      />
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
