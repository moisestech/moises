'use client'

import Link from 'next/link'
import {
  MOONLIGHTER_PLACEHOLDERS,
  MOONLIGHTER_SLUG,
  allChapterSlots,
  archiveFolderSpec,
  getLesson,
  moonlighterModules,
  printerAssumption,
  printAttemptPolicySummary,
  pickupLanguage,
  workshopPromise,
} from '@/content/workshops/moonlighter-ai-3d-printing'
import { MoonlighterShell } from './MoonlighterShell'
import { ArchiveChecklist } from './ArchiveChecklist'
import { PolicyDrawer } from './PolicyDrawer'
import { ExternalRefCard } from './ExternalRefCard'

const base = `/workshop/${MOONLIGHTER_SLUG}`

export function MoonlighterResourcesClient() {
  return (
    <MoonlighterShell>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link href={base} className="text-sm text-[var(--ml-ink)]/60 hover:text-[var(--ml-ink)]">
          ← {workshopPromise.title}
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">Post-class resources</h1>
        <p className="mt-3 text-[var(--ml-ink)]/75">
          Read-only curriculum, recovery policy, and archive checklist. Demo videos appear here as they are recorded.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-medium">What is still open</h2>
          <p className="mt-2 text-sm text-[var(--ml-ink)]/70">
            Reused stills are already in the chapters. Missing stills, machine facts, and videos stay named until they exist.
          </p>

          <h3 className="mt-6 text-sm font-medium">Chapter stills</h3>
          <ul className="mt-3 space-y-2">
            {allChapterSlots().map(({ moduleId, slot }) => (
              <li
                key={slot.id}
                className="flex flex-wrap items-baseline justify-between gap-2 border border-[var(--ml-soft-gray)] bg-white/40 px-3 py-2 text-sm"
              >
                <span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/45">
                    Module {moduleId}
                  </span>{' '}
                  {slot.title}
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    slot.status === 'reused' ? 'text-[var(--ml-verified)]' : 'text-[var(--ml-controlled)]'
                  }`}
                >
                  {slot.status === 'reused' ? `Reused · ${slot.assetId}` : 'Missing'}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-medium">Pending machine facts</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ml-ink)]/80">
            <li className="border border-[var(--ml-controlled)]/40 bg-[var(--ml-controlled)]/10 px-3 py-2">
              <span className="font-medium">{printerAssumption.primary.name}</span> — {printerAssumption.primary.role}{' '}
              {printerAssumption.status}
            </li>
            <li className="border border-[var(--ml-controlled)]/40 bg-[var(--ml-controlled)]/10 px-3 py-2">
              <span className="font-medium">{printerAssumption.alternate.name}</span> — {printerAssumption.alternate.role}{' '}
              {printerAssumption.status}
            </li>
            <li className="border border-[var(--ml-soft-gray)] px-3 py-2">
              Nozzle, plate, and profile: {MOONLIGHTER_PLACEHOLDERS.nozzlePlateDefaults}
            </li>
          </ul>

          <h3 className="mt-6 text-sm font-medium">Pending videos</h3>
          <ul className="mt-3 space-y-2">
            {moonlighterModules.flatMap((m) =>
              m.demos
                .filter((demo) => demo.status === 'planned')
                .map((demo) => (
                  <li
                    key={demo.id}
                    className="flex flex-wrap items-baseline justify-between gap-2 border border-[var(--ml-soft-gray)] px-3 py-2 text-sm"
                  >
                    <span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/45">
                        {demo.id}
                      </span>{' '}
                      {demo.title}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-controlled)]">
                      Planned
                    </span>
                  </li>
                )),
            )}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-medium">Curriculum modules</h2>
          <ul className="mt-4 space-y-3">
            {moonlighterModules.map((m) => {
              const lesson = getLesson(m.id)
              return (
                <li key={m.id} className="border border-[var(--ml-soft-gray)] bg-white/40 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-digital)]">
                    Module {m.id} · {m.phase}
                  </p>
                  <h3 className="mt-1 font-medium">{m.header}</h3>
                  <p className="mt-1 text-sm text-[var(--ml-ink)]/75">{m.objective}</p>
                  {lesson && (
                    <details className="mt-3">
                      <summary className="cursor-pointer text-sm text-[var(--ml-digital)]">
                        {lesson.example.title}
                      </summary>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ml-ink)]/80">{lesson.roomLine}</p>
                      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-[var(--ml-ink)]/80">
                        {lesson.steps.map((step) => (
                          <li key={step.title}>
                            <span className="font-medium">{step.title}.</span> {step.instruction}
                          </li>
                        ))}
                      </ol>
                      <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/45">
                        {lesson.fileTarget}
                      </p>
                    </details>
                  )}
                  {m.externalRefs.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.externalRefs.map((ref) => (
                        <ExternalRefCard key={ref.url} refItem={ref} compact />
                      ))}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-medium">Recovery policy</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ml-ink)]/80">{printAttemptPolicySummary}</p>
          <p className="mt-3 text-sm text-[var(--ml-ink)]/65">{pickupLanguage.publicSafe}</p>
          <div className="mt-4">
            <PolicyDrawer />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-medium">Project archive</h2>
          <ArchiveChecklist items={[...archiveFolderSpec]} />
        </section>

        <p className="mt-12 text-sm">
          <Link href={`${base}/join`} className="text-[var(--ml-digital)] underline-offset-4 hover:underline">
            Rejoin a live session
          </Link>
        </p>
      </div>
    </MoonlighterShell>
  )
}
