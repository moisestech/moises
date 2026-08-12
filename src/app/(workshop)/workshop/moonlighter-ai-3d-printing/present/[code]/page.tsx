'use client'

import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import {
  getModule,
  sixHourRunOfShow,
  workshopPromise,
} from '@/content/workshops/moonlighter-ai-3d-printing'
import { MoonlighterShell } from '@/components/workshop/moonlighter/MoonlighterShell'
import { PresenterTimer } from '@/components/workshop/moonlighter/PresenterTimer'
import { WorkflowRail } from '@/components/workshop/moonlighter/WorkflowRail'
import { useMoonlighterSession } from '@/lib/workshop/moonlighter/useMoonlighterSession'

export default function PresenterPage() {
  const params = useParams()
  const code = String(params.code ?? '').toUpperCase()
  const { bundle, error } = useMoonlighterSession(code, 2500)
  const moduleId = bundle?.session.current_module ?? 0
  const module = getModule(moduleId)
  const schedule = useMemo(
    () => sixHourRunOfShow.find((r) => r.moduleId === moduleId),
    [moduleId],
  )

  return (
    <MoonlighterShell className="bg-[var(--ml-ink)] text-[var(--ml-paper)]">
      <div className="flex min-h-screen flex-col px-8 py-6 md:px-12 md:py-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ml-digital)]">
              Presenter · Session {code}
            </p>
            <h1 className="mt-2 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
              {workshopPromise.title}
            </h1>
          </div>
          {module && (
            <PresenterTimer
              timeboxMin={module.timeboxMin}
              warningMinutes={bundle?.session.warning_minutes ?? null}
              mode={bundle?.session.mode ?? 'running'}
            />
          )}
        </div>

        {error && <p className="mt-4 text-[var(--ml-diagnose)]">{error}</p>}

        <div className="mt-8 opacity-80">
          <WorkflowRail current={moduleId} />
        </div>

        {module && (
          <div className="mt-auto flex flex-1 flex-col justify-center py-12">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--ml-controlled)] md:text-base">
              Module {module.id} · {module.phase}
              {schedule ? ` · ${schedule.time}` : ''}
            </p>
            <h2 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.1] md:text-6xl lg:text-7xl">
              {module.header}
            </h2>
            <p className="mt-6 max-w-3xl text-xl text-[var(--ml-paper)]/80 md:text-2xl md:leading-snug">
              {module.objective}
            </p>
            <p className="mt-8 max-w-2xl border-l-2 border-[var(--ml-digital)] pl-4 text-lg text-[var(--ml-paper)]/70">
              Pass check: {module.passCheck}
            </p>
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-white/15 pt-4 text-sm text-white/60">
          <p>QR / join at /workshop/moonlighter-ai-3d-printing/join</p>
          <p className="font-mono text-2xl tracking-[0.3em] text-white">{code}</p>
        </div>
      </div>
    </MoonlighterShell>
  )
}
