'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import { CapabilityMap } from '@/components/opportunities/CapabilityMap';
import { FitPillars } from '@/components/opportunities/FitPillars';
import { OpportunityColorSection } from '@/components/opportunities/OpportunityColorSection';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { CreativeCaseStudyModules } from '@/components/opportunities/creative-agency/CreativeCaseStudyModules';
import { DossierSectionBreak } from '@/components/opportunities/creative-agency/DossierSectionBreak';
import { DossierSectionNav } from '@/components/opportunities/creative-agency/DossierSectionNav';
import { HumanAiWorkflow } from '@/components/opportunities/creative-agency/HumanAiWorkflow';
import { MotionAndAnimationSection } from '@/components/opportunities/creative-agency/MotionAndAnimationSection';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { flagshipEvidence } from '@/content/evidence/flagships';
import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';
import type {
  CreativeCaseStudyModule,
  HumanAiWorkflowBlock,
  MotionSection,
} from '@/content/opportunities/creativeAgencyDossier';
import type { CapabilityMapData, FitPillar } from '@/content/opportunities/systemsDossier';
import type { OpportunityNavItem } from '@/content/opportunities/types';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export type CreativeSystemsFlagshipData = {
  flagshipId: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  tertiaryCta: { label: string; href: string };
  logoBand: LogoBandItem[];
  navItems: OpportunityNavItem[];
  capabilitiesTitle: string;
  capabilitiesIntro?: string;
  capabilities: FitPillar[];
  caseStudiesTitle: string;
  caseStudiesIntro: string;
  caseStudies: CreativeCaseStudyModule[];
  workflow: HumanAiWorkflowBlock;
  motionSection: MotionSection;
  stack: CapabilityMapData;
  layers?: Array<{
    id: string;
    title: string;
    body: string;
    caseIds: string[];
  }>;
  evidenceCases?: Array<{
    id: string;
    title: string;
    subtitle: string;
    summary: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    repoUrl?: string;
  }>;
  digilabBridge?: {
    title: string;
    body: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  };
  futureCases?: {
    id: string;
    title: string;
    body: string;
    slots: Array<{ id: string; title: string; note: string }>;
  };
  relatedFlagships: Array<{
    id: string;
    href: string;
    label: string;
    status: 'live' | 'building';
  }>;
};

type CreativeSystemsFlagshipClientProps = {
  data: CreativeSystemsFlagshipData;
};

/**
 * Shared composer for `/creative-ai` and `/creative-strategist`.
 * Reuses Ogilvy creative-agency sections without employer JD chrome.
 */
export function CreativeSystemsFlagshipClient({ data }: CreativeSystemsFlagshipClientProps) {
  const sectionClass = 'mt-16 sm:mt-20 md:mt-24';
  const framed = '!mt-0 !border-0 !pt-0 scroll-mt-28 sm:scroll-mt-32';

  return (
    <OpportunityShell
      navItems={data.navItems}
      getSectionNavAccent={getOpportunityCompactAccent}
      stickyNavTopClassName="top-[4.5rem] md:top-[5.25rem]"
      sectionSpyOffsetPx={160}
    >
      <main className={cn(opp.main, 'overflow-x-clip pt-8 sm:pt-10')}>
        <section id="overview" className="scroll-mt-28 sm:scroll-mt-32">
          <p className={opp.accent}>{data.eyebrow}</p>
          <h1 className={cn(opp.h1, 'mt-2')}>{data.title}</h1>
          <p className={cn(opp.bodyLg, 'mt-3 max-w-3xl')}>{data.subtitle}</p>
          <p className={cn(opp.body, 'mt-4 max-w-3xl')}>{data.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={data.primaryCta.href}
              className={opp.btnPrimary}
              onClick={() =>
                track('flagship_cta_click', { flagship: data.flagshipId, kind: 'primary' })
              }
            >
              {data.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href={data.secondaryCta.href} className={opp.btnSecondary}>
              {data.secondaryCta.label}
            </Link>
            <Link href={data.tertiaryCta.href} className={opp.btnSecondaryMedium}>
              {data.tertiaryCta.label}
            </Link>
          </div>
        </section>

        {data.logoBand.length ? (
          <div className="mt-10 sm:mt-12">
            <AnimatedLogoBand
              logos={data.logoBand}
              bleed
              ariaLabel="Creative AI production tools"
            />
          </div>
        ) : null}

        <div className="mt-10 sm:mt-12">
          <DossierSectionNav
            items={data.navItems.filter((item) => item.id !== 'overview')}
            title="Flagship map"
            intro="Jump to any section. Sticky nav stays in sync as you scroll."
          />
        </div>

        <DossierSectionBreak className="mt-10 sm:mt-12" />

        <OpportunityColorSection sectionId="capabilities" className={sectionClass}>
          <FitPillars
            title={data.capabilitiesTitle}
            intro={data.capabilitiesIntro}
            pillars={data.capabilities}
            sectionId="capabilities"
            className={framed}
          />
        </OpportunityColorSection>

        {data.layers?.length ? (
          <>
            <DossierSectionBreak />
            <OpportunityColorSection sectionId="layers" className={sectionClass}>
              <section id="layers" className={framed} aria-labelledby="layers-heading">
                <h2 id="layers-heading" className={opp.h2}>
                  Three layers
                </h2>
                <p className={cn(opp.muted, 'mt-2 max-w-3xl')}>
                  Direction, production systems, and interfaces — one practice, three ownership surfaces.
                </p>
                <div className="mt-8 space-y-6">
                  {data.layers.map((layer, i) => (
                    <article key={layer.id} className={opp.callout}>
                      <p className={opp.accent}>
                        {String(i + 1).padStart(2, '0')} · {layer.title}
                      </p>
                      <p className={cn(opp.body, 'mt-2')}>{layer.body}</p>
                      <ul className="mt-3 flex flex-wrap gap-2" role="list">
                        {layer.caseIds.map((id) => {
                          const ev = flagshipEvidence[id as keyof typeof flagshipEvidence];
                          if (!ev || !ev.claimable) return null;
                          const external = ev.href.startsWith('http');
                          return (
                            <li key={id}>
                              {external ? (
                                <a
                                  href={ev.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={opp.pillTag}
                                >
                                  {ev.title}
                                </a>
                              ) : (
                                <Link href={ev.href} className={opp.pillTag}>
                                  {ev.title}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            </OpportunityColorSection>
          </>
        ) : null}

        <DossierSectionBreak />
        <OpportunityColorSection sectionId="case-studies" className={sectionClass}>
          <CreativeCaseStudyModules
            title={data.caseStudiesTitle}
            intro={data.caseStudiesIntro}
            studies={data.caseStudies}
            sectionId="case-studies"
            className={framed}
          />
        </OpportunityColorSection>

        {data.evidenceCases?.length ? (
          <>
            <DossierSectionBreak />
            <section className={sectionClass} aria-labelledby="shipped-heading">
              <h2 id="shipped-heading" className={opp.h2}>
                Evidence cards
              </h2>
              <p className={cn(opp.muted, 'mt-2 max-w-3xl')}>
                Compact claimable cards from the flagship evidence registry.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {data.evidenceCases.map((c) => {
                  const external = c.href.startsWith('http');
                  const inner = (
                    <>
                      <div className="relative mb-3 aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
                        <Image
                          src={c.imageSrc}
                          alt={c.imageAlt}
                          fill
                          className="object-cover"
                          sizes="400px"
                        />
                      </div>
                      <p className={opp.subtle}>{c.subtitle}</p>
                      <h3 className={cn(opp.h3, 'mt-1')}>{c.title}</h3>
                      <p className={cn(opp.muted, 'mt-1')}>{c.summary}</p>
                      {c.repoUrl ? (
                        <span
                          className={cn(
                            opp.linkAccent,
                            'mt-2 inline-flex items-center gap-1 text-xs',
                          )}
                        >
                          GitHub <ExternalLink className="h-3 w-3" aria-hidden />
                        </span>
                      ) : null}
                    </>
                  );
                  return external ? (
                    <a
                      key={c.id}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={opp.cardInteractive}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link key={c.id} href={c.href} className={opp.cardInteractive}>
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </section>
          </>
        ) : null}

        <DossierSectionBreak />
        <OpportunityColorSection sectionId="workflow" className={sectionClass}>
          <HumanAiWorkflow data={data.workflow} sectionId="workflow" className={framed} />
        </OpportunityColorSection>

        <DossierSectionBreak />
        <OpportunityColorSection sectionId="motion" className={sectionClass}>
          <MotionAndAnimationSection
            data={data.motionSection}
            sectionId="motion"
            className={framed}
          />
        </OpportunityColorSection>

        {data.digilabBridge ? (
          <>
            <DossierSectionBreak />
            <section className={sectionClass} aria-labelledby="digilab-heading">
              <h2 id="digilab-heading" className={opp.h2}>
                {data.digilabBridge.title}
              </h2>
              <Link href={data.digilabBridge.href} className={cn(opp.cardInteractive, 'mt-4 block')}>
                <div className="relative mb-3 aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <Image
                    src={data.digilabBridge.imageSrc}
                    alt={data.digilabBridge.imageAlt}
                    fill
                    className="object-cover"
                    sizes="600px"
                  />
                </div>
                <p className={opp.body}>{data.digilabBridge.body}</p>
              </Link>
            </section>
          </>
        ) : null}

        <DossierSectionBreak />
        <OpportunityColorSection sectionId="stack" className={sectionClass}>
          <CapabilityMap data={data.stack} sectionId="stack" className={framed} />
        </OpportunityColorSection>

        {data.futureCases ? (
          <>
            <DossierSectionBreak />
            <section
              id={data.futureCases.id}
              className={sectionClass}
              aria-labelledby="future-heading"
            >
              <h2 id="future-heading" className={opp.h2}>
                {data.futureCases.title}
              </h2>
              <p className={cn(opp.body, 'mt-2 max-w-3xl')}>{data.futureCases.body}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2" role="list">
                {data.futureCases.slots.map((slot) => (
                  <li key={slot.id} className={cn(opp.card, 'p-4 opacity-70')}>
                    <p className={opp.accent}>Planned</p>
                    <h3 className={cn(opp.h3, 'mt-1')}>{slot.title}</h3>
                    <p className={cn(opp.subtle, 'mt-2')}>{slot.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          </>
        ) : null}

        <DossierSectionBreak />
        <section
          id="related"
          className={cn(sectionClass, 'mb-10 sm:mb-14 scroll-mt-28 sm:scroll-mt-32')}
          aria-labelledby="related-heading"
        >
          <h2 id="related-heading" className={opp.h2}>
            Related surfaces
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3" role="list">
            {data.relatedFlagships.map((f) => (
              <li key={f.id}>
                <Link href={f.href} className={opp.btnSecondary}>
                  {f.label}
                  {f.status === 'building' ? <span className={opp.subtle}>Building</span> : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </OpportunityShell>
  );
}
