'use client'

import Link from 'next/link'
import {
  MOONLIGHTER_SLUG,
  archiveFolderSpec,
  moonlighterModules,
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
          <h2 className="text-xl font-medium">Curriculum modules</h2>
          <ul className="mt-4 space-y-3">
            {moonlighterModules.map((m) => (
              <li key={m.id} className="border border-[var(--ml-soft-gray)] bg-white/40 p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-digital)]">
                  Module {m.id} · {m.phase}
                </p>
                <h3 className="mt-1 font-medium">{m.header}</h3>
                <p className="mt-1 text-sm text-[var(--ml-ink)]/75">{m.objective}</p>
                {m.externalRefs.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {m.externalRefs.map((ref) => (
                      <ExternalRefCard key={ref.url} refItem={ref} compact />
                    ))}
                  </div>
                )}
              </li>
            ))}
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
