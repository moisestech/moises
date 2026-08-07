'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { PillarCard } from '@/components/capabilities/PillarCard';
import { opp } from '@/components/opportunities/opportunityTheme';
import {
  evidenceScoreSummary,
  listPillars,
  type CapabilityPillarId,
} from '@/content/capabilities';
import { cn } from '@/lib/utils';

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'ai-engineering', label: 'AI Eng', shortLabel: 'AI' },
  { id: 'software-engineering', label: 'Software', shortLabel: 'SE' },
  { id: 'data-infrastructure', label: 'Data' },
  { id: 'design-creative-technology', label: 'Creative', shortLabel: 'CT' },
  { id: 'devops-deployment', label: 'DevOps' },
  { id: 'leadership-communication', label: 'Leadership', shortLabel: 'Lead' },
];

function readHashPillar(): CapabilityPillarId | null {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash.replace(/^#/, '');
  const ids = listPillars().map((p) => p.id);
  return ids.includes(hash as CapabilityPillarId) ? (hash as CapabilityPillarId) : null;
}

export function CapabilitiesPageClient() {
  const pillars = listPillars();
  const score = evidenceScoreSummary();
  const [openPillar, setOpenPillar] = useState<CapabilityPillarId | null>(null);

  useEffect(() => {
    const apply = () => setOpenPillar(readHashPillar());
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  return (
    <OpportunityShell navItems={NAV} stickyNavTopClassName="top-[4.75rem] md:top-[8.4rem]">
      <main className={cn(opp.main, 'overflow-x-clip pt-6 sm:pt-10')}>
        <p className="mb-4 text-center text-[11px] leading-relaxed text-stone-500 dark:text-stone-400 sm:text-xs">
          Technical Proof Engine · skills change only here · Proven requires a public link
        </p>

        <section id="overview" className="scroll-mt-28 sm:scroll-mt-32" aria-labelledby="capabilities-heading">
          <p className={opp.accent}>Capabilities</p>
          <h1 id="capabilities-heading" className={`mt-2 ${opp.h1}`}>
            What evidence does a hiring manager need to believe I can solve their problems in week
            one?
          </h1>
          <p className={`mt-4 max-w-3xl ${opp.bodyLg}`}>
            Six pillars. Every skill is Proven, Building, or Planned — and Proven always links to a
            repo, case study, or live demo. Role pages deep-link here instead of re-listing the same
            matrix.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
            <div className={cn(opp.card, 'p-3 text-center sm:p-4')}>
              <dt className={opp.label}>Proven</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums text-stone-950 dark:text-stone-50">
                {score.proven}
              </dd>
            </div>
            <div className={cn(opp.card, 'p-3 text-center sm:p-4')}>
              <dt className={opp.label}>Building</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums text-stone-950 dark:text-stone-50">
                {score.building}
              </dd>
            </div>
            <div className={cn(opp.card, 'p-3 text-center sm:p-4')}>
              <dt className={opp.label}>Planned</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums text-stone-400">{score.planned}</dd>
            </div>
          </dl>

          <p className={`mt-4 max-w-2xl ${opp.subtle}`}>
            Certifications are tracked offline until statuses are confirmed — this page ships skills
            and evidence only. See{' '}
            <Link href="/ai-engineering" className={opp.linkAccent}>
              /ai-engineering
            </Link>{' '}
            and focus dossiers for role narrative.
          </p>
        </section>

        <section
          className="mt-10 sm:mt-14"
          aria-label="Capability pillars"
        >
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {pillars.map((pillar) => (
              <PillarCard
                key={pillar.id}
                pillar={pillar}
                preferOpen={openPillar === pillar.id}
              />
            ))}
          </div>
        </section>

        <section className={`${opp.section} mt-14`} aria-labelledby="how-to-use-heading">
          <h2 id="how-to-use-heading" className={opp.h2}>
            How hiring managers should use this
          </h2>
          <ol className={`mt-4 list-decimal space-y-2 pl-5 ${opp.body}`}>
            <li>Open the pillar that matches the role (AI, data, creative tech, etc.).</li>
            <li>Click Proven evidence links — those are the week-one proof artifacts.</li>
            <li>Treat Building as active ramp with named next proof; Planned is roadmap only.</li>
            <li>
              For a specific application, use the matching archetype or private dossier — they link
              back here for the shared map.
            </li>
          </ol>
        </section>
      </main>
    </OpportunityShell>
  );
}
