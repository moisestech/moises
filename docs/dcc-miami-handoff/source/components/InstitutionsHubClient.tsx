'use client';

import { useEffect, useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { institutionsHub as H } from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstFamilyNav,
  InstPageShell,
  INST_FAMILY_STICKY_CLASS,
  INST_SECTION_STICKY_CLASS,
} from '@/components/institutions/InstitutionalUi';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { InstitutionsHero } from '@/components/institutions/InstitutionsHero';
import { InstitutionalProofStrip, CompoundingSystem } from '@/components/institutions/CompoundingSystem';
import { PracticeLaneGrid } from '@/components/institutions/PracticeLaneGrid';
import { AdditionalEvidence, FlagshipCaseStudies } from '@/components/institutions/FlagshipCaseStudies';
import { EngagementModes, ProcessSteps } from '@/components/institutions/EngagementModes';
import { InstitutionArchive } from '@/components/institutions/InstitutionArchive';
import { InstitutionsFinalCTA } from '@/components/institutions/InstitutionsFinalCTA';
import { cn } from '@/lib/utils';

const SECTION_ACCENT: Record<string, 'ink' | 'ocean' | 'teal' | 'copper' | 'violet' | 'rose'> = {
  top: 'ink',
  services: 'ocean',
  system: 'teal',
  work: 'ink',
  evidence: 'rose',
  engage: 'copper',
  archive: 'ocean',
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}

export function InstitutionsHubClient() {
  const [activeNav, setActiveNav] = useState('top');

  useEffect(() => {
    const ids = H.nav.map((n) => n.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) setActiveNav(id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <InstPageShell className="pt-[192px]">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to institutions overview
      </a>
      <OpportunityApplicationBanner banner={H.banner} className="mb-0" />
      {H.bannerNote ? (
        <p className="border-b border-neutral-200 bg-amber-50/80 px-4 py-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-amber-950 sm:px-6">
          {H.bannerNote}
        </p>
      ) : null}

      <InstFamilyNav active="institutions" className={INST_FAMILY_STICKY_CLASS} />

      <nav
        className={cn(
          INST_SECTION_STICKY_CLASS,
          'border-b border-neutral-200 bg-[#f7f6f3]/90 backdrop-blur',
        )}
        aria-label="Page sections"
      >
        <InstContainer className="flex items-center gap-2 py-2">
          <div className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {H.nav.map((item) => {
              const active = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'inline-flex min-h-11 shrink-0 items-center border-b-[3px] px-3 py-1.5 text-xs font-medium transition',
                    active
                      ? 'border-neutral-950 font-semibold text-neutral-950'
                      : 'border-transparent text-neutral-600 hover:text-neutral-950',
                    active && SECTION_ACCENT[item.id] === 'ocean' && 'border-sky-700',
                    active && SECTION_ACCENT[item.id] === 'teal' && 'border-teal-700',
                    active && SECTION_ACCENT[item.id] === 'copper' && 'border-amber-700',
                    active && SECTION_ACCENT[item.id] === 'rose' && 'border-rose-700',
                    active && SECTION_ACCENT[item.id] === 'violet' && 'border-violet-700',
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.id);
                    setActiveNav(item.id);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <a
            href={H.hero.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 shrink-0 items-center gap-1.5 bg-neutral-950 px-3 py-1.5 text-xs font-semibold text-white sm:inline-flex"
            onClick={() => track('institutions_cta_click', { placement: 'sticky-nav' })}
          >
            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
            Discuss a project
          </a>
        </InstContainer>
      </nav>

      <InstitutionsHero />
      <InstitutionalProofStrip />
      <PracticeLaneGrid />
      <CompoundingSystem />
      <FlagshipCaseStudies />
      <AdditionalEvidence />
      <ProcessSteps />
      <EngagementModes />
      <InstitutionArchive />
      <InstitutionsFinalCTA />
    </InstPageShell>
  );
}
