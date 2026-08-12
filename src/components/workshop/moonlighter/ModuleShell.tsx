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
import { archiveFolderSpec } from '@/content/workshops/moonlighter-ai-3d-printing'

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
          <TierSelector value={tier} onChange={setTier} />
          <SupportMeter value={support} onChange={setSupport} />
        </div>
      )
    }
    if (module.id === 7) {
      return <SliceEstimate estimate={{ timeMin: tier === 'miniature' ? 55 : 140, grams: 28, supports: support }} />
    }
    if (module.id === 8) {
      return <PolicyDrawer onAcknowledge={onPolicyAck} />
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
          <section>
            <h2 className="text-lg font-medium">Guided task</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-[var(--ml-ink)]/85">
              {module.guidedTasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
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
