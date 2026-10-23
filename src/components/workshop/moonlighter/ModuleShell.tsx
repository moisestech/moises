'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { CurriculumModule, QualityLevel } from '@/content/workshops/moonlighter-ai-3d-printing'
import { PhaseMasthead, TechnicalStrip, ToolBadgeGroup } from './PhaseMasthead'
import { DemoVideoCard } from './DemoVideoCard'
import { ExternalRefCard } from './ExternalRefCard'
import { QualityGate } from './QualityGate'
import { PromptBuilder } from './PromptBuilder'
import { ReferenceIntake } from './ReferenceIntake'
import { OrbitViewer, BeforeAfterCompare } from './OrbitViewer'
import {
  FilamentSwatch,
  SliceEstimate,
  SupportMeter,
  TierSelector,
} from './ProductionControls'
import { CheckpointAction } from './CheckpointAction'
import { WorkflowRail } from './WorkflowRail'
import { PolicyDrawer } from './PolicyDrawer'
import { ArchiveChecklist } from './ArchiveChecklist'
import { ImageTo3dPaths } from './ImageTo3dPaths'
import { PrinterAssumption } from './PrinterAssumption'
import { archiveFolderSpec, getLesson } from '@/content/workshops/moonlighter-ai-3d-printing'

export function ModuleShell({
  module,
  sessionCode,
  hrefForModule,
  onMarkReady,
  onPolicyAck,
  checkpointStatus,
  responseNote,
}: {
  module: CurriculumModule
  sessionCode: string
  hrefForModule: (id: number) => string
  onMarkReady?: () => void
  onPolicyAck?: () => void
  checkpointStatus?: string
  responseNote?: string
}) {
  const [quality, setQuality] = useState<QualityLevel | null>(null)
  const [tier, setTier] = useState<'miniature' | 'sculpture'>('miniature')
  const [pla, setPla] = useState<'black' | 'white' | 'accent'>('black')
  const [support, setSupport] = useState<'low' | 'moderate' | 'high'>('low')
  const [tipsOpen, setTipsOpen] = useState(false)

  const lesson = getLesson(module.id)
  const prev = module.id > 0 ? module.id - 1 : null
  const next = module.id < 9 ? module.id + 1 : null

  const moduleExtras = useMemo(() => {
    if (module.id === 0) {
      return (
        <div className="space-y-4">
          <FilamentSwatch value={pla} onChange={setPla} />
          <TierSelector value={tier} onChange={setTier} />
        </div>
      )
    }
    if (module.id === 1) {
      return (
        <div className="space-y-4">
          <ReferenceIntake />
          {module.qualityLabels && (
            <QualityGate value={quality} labels={module.qualityLabels} onChange={setQuality} />
          )}
        </div>
      )
    }
    if (module.id === 2) {
      return <PromptBuilder />
    }
    if (module.id === 3 || module.id === 4) {
      return (
        <div className="space-y-4">
          {module.id === 3 && <ImageTo3dPaths />}
          <OrbitViewer />
          {module.qualityLabels && (
            <QualityGate value={quality} labels={module.qualityLabels} onChange={setQuality} />
          )}
        </div>
      )
    }
    if (module.id === 5) {
      return <BeforeAfterCompare beforeLabel="Broken" afterLabel="Repaired" />
    }
    if (module.id === 6) {
      return (
        <div className="space-y-4">
          <PrinterAssumption />
          <TierSelector value={tier} onChange={setTier} />
          <SupportMeter value={support} onChange={setSupport} />
        </div>
      )
    }
    if (module.id === 7) {
      return (
        <div className="space-y-4">
          <PrinterAssumption />
          <SliceEstimate estimate={{ timeMin: tier === 'miniature' ? 55 : 140, grams: 28, supports: support }} />
        </div>
      )
    }
    if (module.id === 8) {
      return (
        <div className="space-y-4">
          <PrinterAssumption />
          <PolicyDrawer onAcknowledge={onPolicyAck} />
        </div>
      )
    }
    if (module.id === 9) {
      return <ArchiveChecklist items={[...archiveFolderSpec]} />
    }
    return null
  }, [module, pla, tier, support, quality, onPolicyAck])

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <WorkflowRail current={module.id} hrefForModule={hrefForModule} />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-8">
          <PhaseMasthead module={module} />
          <TechnicalStrip module={module} />
          <ToolBadgeGroup tools={module.tools} />
          <div className="space-y-4">
            {module.demos.map((demo) => (
              <DemoVideoCard key={demo.id} demo={demo} />
            ))}
          </div>
          {lesson && (
            <section className="border-l-2 border-[var(--ml-digital)] pl-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-digital)]">
                Example in the room
              </p>
              <h2 className="mt-1 text-lg font-medium">{lesson.example.title}</h2>
              <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-[var(--ml-ink)]/85">
                {lesson.example.shows}
              </p>
              <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-[var(--ml-ink)]/65">
                {lesson.example.contrast}
              </p>
              {lesson.workedPrompts && (
                <div className="mt-4 space-y-3">
                  {lesson.workedPrompts.map((prompt) => (
                    <div key={prompt.label} className="border border-[var(--ml-soft-gray)] bg-white/60 p-3">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
                        {prompt.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--ml-ink)]/80">{prompt.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
          <section>
            <h2 className="text-lg font-medium">Guided task</h2>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/45">
              Save to {lesson?.fileTarget ?? module.output}
            </p>
            <ol className="mt-4 space-y-4">
              {(lesson?.steps ?? module.guidedTasks.map((t) => ({ title: t, instruction: '', doneWhen: '' }))).map(
                (step, index) => (
                  <li key={step.title} className="border border-[var(--ml-soft-gray)] bg-white/50 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/45">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 text-sm font-medium">{step.title}</h3>
                    {step.instruction && (
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ml-ink)]/85">{step.instruction}</p>
                    )}
                    {step.doneWhen && (
                      <p className="mt-2 text-xs leading-relaxed text-[var(--ml-verified)]">
                        Done when: {step.doneWhen}
                      </p>
                    )}
                  </li>
                ),
              )}
            </ol>
            {module.teach && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--ml-ink)]/75">
                {module.teach.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </section>
          {moduleExtras}
        </div>
        <aside className="space-y-4 lg:col-span-4">
          <CheckpointAction
            status={checkpointStatus}
            onMarkReady={onMarkReady}
            responseNote={responseNote}
          />
          <div className="border border-[var(--ml-soft-gray)] bg-white/50 p-4">
            <button
              type="button"
              className="flex w-full items-center justify-between text-sm font-medium"
              onClick={() => setTipsOpen((v) => !v)}
              aria-expanded={tipsOpen}
            >
              Tips & troubleshooting
              <span className="font-mono text-xs">{tipsOpen ? '−' : '+'}</span>
            </button>
            {tipsOpen && (
              <div className="mt-3 space-y-3 text-sm text-[var(--ml-ink)]/75">
                <ul className="list-disc space-y-1 pl-4">
                  {module.tips.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {lesson && lesson.fixes.length > 0 && (
                  <ul className="space-y-2">
                    {lesson.fixes.map((fix) => (
                      <li key={fix.signal}>
                        <span className="font-medium text-[var(--ml-ink)]">{fix.signal}.</span> {fix.action}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="list-disc space-y-1 pl-4">
                  {module.troubleshooting.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {module.externalRefs.map((ref) => (
                  <ExternalRefCard key={ref.url} refItem={ref} />
                ))}
              </div>
            )}
          </div>
          <p className="font-mono text-[10px] text-[var(--ml-ink)]/45">Session {sessionCode}</p>
        </aside>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--ml-soft-gray)] pt-6">
        {prev != null ? (
          <Link href={hrefForModule(prev)} className="text-sm underline-offset-4 hover:underline">
            ← Previous
          </Link>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={onMarkReady}
          className="rounded-sm bg-[var(--ml-digital)] px-4 py-2 text-sm text-white"
        >
          Mark ready
        </button>
        {next != null ? (
          <Link href={hrefForModule(next)} className="text-sm underline-offset-4 hover:underline">
            Next →
          </Link>
        ) : (
          <Link href={`/workshop/moonlighter-ai-3d-printing/resources`} className="text-sm underline-offset-4 hover:underline">
            Resources →
          </Link>
        )}
      </div>
    </div>
  )
}
