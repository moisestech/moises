'use client';

import Image from 'next/image';
import { useState } from 'react';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { ComingSoonSection } from '@/components/opportunities/ComingSoonSection';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { CapabilitiesDeepLink } from '@/components/capabilities/CapabilitiesDeepLink';
import { ComfyProofHero, ComfyCredibilityBar } from '@/components/opportunities/comfy/ComfyProofHero';
import { LoreComfyCaseStudy } from '@/components/opportunities/comfy/LoreComfyCaseStudy';
import { ProvenanceProductSection } from '@/components/opportunities/comfy/ProvenanceProductSection';
import { OutputProvenanceExplorer } from '@/components/opportunities/comfy/OutputProvenanceExplorer';
import { InteractiveRoleFit } from '@/components/opportunities/comfy/InteractiveRoleFit';
import {
  ComfyCommandPalette,
  ComfyInspectAnnotations,
  ComfyInspectToggle,
} from '@/components/opportunities/comfy/ComfyCommandPalette';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { comfyWorkSample, provenanceBrand } from '@/content/opportunities/comfy/workSample';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { Opportunity } from '@/content/opportunities/types';

type ComfyWorkSampleClientProps = {
  opportunity: Opportunity;
};

const STEP_STATUS: Record<string, { label: string; className: string }> = {
  done: {
    label: 'Done',
    className:
      'border-emerald-300/80 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200',
  },
  next: {
    label: 'Next',
    className:
      'border-sky-300/80 bg-sky-50 text-sky-900 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-200',
  },
  open: {
    label: 'Open',
    className:
      'border-stone-300 bg-stone-100 text-stone-700 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200',
  },
};

/**
 * Purpose-built Comfy frontend work-sample layout — live Vue demo as primary proof.
 */
export function ComfyWorkSampleClient({ opportunity }: ComfyWorkSampleClientProps) {
  const dossier = opportunity.rolePortfolio;
  const [inspect, setInspect] = useState(false);
  const { engineering, first30, selectedWork, ramp } = comfyWorkSample;

  return (
    <OpportunityShell
      navItems={opportunity.navItems}
      getSectionNavAccent={getOpportunityCompactAccent}
      stickyNavTopClassName="top-[4.75rem] md:top-[8.4rem]"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow dark:focus:bg-stone-900"
      >
        Skip to content
      </a>

      <ComfyProofHero opportunitySlug={opportunity.slug} />
      <ComfyCredibilityBar />

      <main id="main-content" className={cn(opp.main, 'overflow-x-clip pt-2')}>
        <LoreComfyCaseStudy />
      </main>

      <ProvenanceProductSection />

      <main className={cn(opp.main, 'overflow-x-clip')}>
        <InteractiveRoleFit />

        <section
          id="engineering"
          className="scroll-mt-28 border-t border-stone-200 py-12 dark:border-stone-800 sm:scroll-mt-32 sm:py-16"
          aria-labelledby="engineering-heading"
        >
          <h2
            id="engineering-heading"
            className="text-2xl font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-3xl"
          >
            {engineering.title}
          </h2>
          <ol className="mt-6 space-y-3">
            {engineering.principles.map((p, i) => (
              <li
                key={p}
                className="flex gap-3 rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900"
              >
                <span
                  className="text-xs font-bold tabular-nums"
                  style={{ color: provenanceBrand.accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-stone-700 dark:text-stone-300">{p}</p>
              </li>
            ))}
          </ol>
        </section>

        {dossier?.comingSoon ? (
          <div id="ramp" className="scroll-mt-28 sm:scroll-mt-32">
            <ComingSoonSection
              data={{
                ...dossier.comingSoon,
                title: ramp.title,
                intro: `${ramp.intro} ${ramp.loreBoundary}`,
              }}
              sectionId="ramp"
              className="!mt-0 !border-0 !pt-12 sm:!pt-16"
            />
          </div>
        ) : null}

        <OutputProvenanceExplorer />

        <section
          id="selected-work"
          className="scroll-mt-28 border-t border-stone-200 py-12 dark:border-stone-800 sm:scroll-mt-32 sm:py-16"
          aria-labelledby="selected-work-heading"
        >
          <h2
            id="selected-work-heading"
            className="text-2xl font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-3xl"
          >
            Selected frontend work
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-stone-600 dark:text-stone-400">
            Live Vue work sample first; Lore Machine as production ComfyUI collaboration context.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {selectedWork.map((work) => {
              const isSvg = work.imageSrc.endsWith('.svg');
              return (
                <li key={work.id} className={cn(opp.card, 'overflow-hidden')}>
                  <div className="relative aspect-[16/10] bg-stone-100 dark:bg-stone-800">
                    {isSvg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={work.imageSrc}
                        alt={work.imageAlt}
                        className="h-full w-full object-contain p-4"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={work.imageSrc}
                        alt={work.imageAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-stone-950 dark:text-stone-50">
                      {work.title}
                    </h3>
                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{work.detail}</p>
                    {work.href ? (
                      <a
                        href={work.href}
                        target={work.href.startsWith('http') ? '_blank' : undefined}
                        rel={work.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`mt-3 inline-flex text-sm ${opp.linkAccent}`}
                      >
                        Open project
                      </a>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          id="process"
          className="scroll-mt-28 border-t border-stone-200 py-12 dark:border-stone-800 sm:scroll-mt-32 sm:py-16"
          aria-labelledby="process-heading"
        >
          <h2
            id="process-heading"
            className="text-2xl font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-3xl"
          >
            {first30.title}
          </h2>
          <ol className="mt-6 space-y-3">
            {first30.steps.map((step, i) => {
              const status = STEP_STATUS[step.status] ?? STEP_STATUS.open;
              return (
                <li
                  key={step.title}
                  className="rounded-xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-900"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-stone-950 dark:text-stone-50">
                      <span className="mr-2 tabular-nums text-yellow-700 dark:text-yellow-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {step.title}
                    </p>
                    <span
                      className={cn(
                        'inline-flex rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                        status.className,
                      )}
                    >
                      {status.label}
                    </span>
                  </div>
                  <p className="mt-1.5 break-words text-sm text-stone-600 dark:text-stone-400">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        <section
          id="contact"
          className="scroll-mt-28 border-t border-stone-200 py-12 dark:border-stone-800 sm:scroll-mt-32 sm:py-16"
        >
          {opportunity.capabilitiesHref ? (
            <CapabilitiesDeepLink
              href={opportunity.capabilitiesHref}
              className="mb-8"
              note="Creative technology and adjacent pillars live on the shared capabilities map. This page keeps the Comfy work sample."
            />
          ) : null}
          <ResumeCTA opportunity={opportunity} />
          {dossier?.availabilityNote ? (
            <p className={`mt-4 max-w-3xl ${opp.subtle}`}>{dossier.availabilityNote}</p>
          ) : null}
          <p className="mt-3 text-xs text-stone-500 dark:text-stone-400">
            Tip: press <kbd className="rounded border border-stone-300 px-1 dark:border-stone-600">⌘K</kbd> /{' '}
            <kbd className="rounded border border-stone-300 px-1 dark:border-stone-600">Ctrl+K</kbd> for the
            command palette.
          </p>
        </section>
      </main>

      <ComfyCommandPalette />
      <ComfyInspectToggle enabled={inspect} onToggle={() => setInspect((v) => !v)} />
      <ComfyInspectAnnotations enabled={inspect} />
    </OpportunityShell>
  );
}
