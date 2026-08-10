'use client';

import { useEffect, useState } from 'react';
import { artistInfrastructurePage as P } from '@/content/institutions/artistInfrastructure';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstFamilyNav,
  InstPageShell,
  InstReveal,
  InstSectionLabel,
  INST_ACCENT,
} from '@/components/institutions/InstitutionalUi';
import {
  CaseStudyGallery,
  CaseStudyIntro,
  ContextProofStrip,
  CurriculumModuleCard,
  EngagementFormatCards,
  EngagementProcess,
  InstitutionalCTA,
  InstitutionalHero,
  MediaNeededStrip,
  PositioningTriad,
  PracticeProjectStrip,
  ProofStrip,
  SupportingProofCard,
} from '@/components/institutions/OutreachComponents';
import { cn } from '@/lib/utils';

const SECTION_NAV = [
  { id: 'positioning', label: 'Positioning', accent: 'ink' as const },
  { id: 'curriculum', label: 'Curriculum', accent: 'ocean' as const },
  { id: 'oolite-proof', label: 'Oolite', accent: 'teal' as const },
  { id: 'process', label: 'Process', accent: 'teal' as const },
  { id: 'supporting-proof', label: 'Proof', accent: 'copper' as const },
  { id: 'practice', label: 'Practice', accent: 'rose' as const },
  { id: 'engagement', label: 'Engage', accent: 'ocean' as const },
  { id: 'media-needed', label: 'Media', accent: 'copper' as const },
  { id: 'contact', label: 'Contact', accent: 'ink' as const },
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}

export function ArtistInfrastructureClient() {
  const [activeNav, setActiveNav] = useState('positioning');

  useEffect(() => {
    track('artist_infrastructure_view', { path: '/artist-infrastructure' });
    const ids = SECTION_NAV.map((n) => n.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 180) current = id;
      }
      setActiveNav(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <InstPageShell className="pt-[170px]">
      <OpportunityApplicationBanner banner={P.banner} className="mb-0" />
      {P.bannerNote ? (
        <p className="border-b border-neutral-200 bg-amber-50/80 px-4 py-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-amber-950 sm:px-6">
          {P.bannerNote}
        </p>
      ) : null}

      <InstFamilyNav active="artist-infrastructure" className="sticky top-0 z-40" />

      <nav
        className="border-b border-neutral-200 bg-[#f7f6f3]"
        aria-label="Page sections"
      >
        <InstContainer className="flex gap-1.5 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_NAV.map((item) => {
            const active = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'shrink-0 border px-3 py-1.5 text-xs font-medium transition',
                  active
                    ? INST_ACCENT[item.accent].chipActive
                    : INST_ACCENT[item.accent].chip,
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
        </InstContainer>
      </nav>

      <InstitutionalHero
        kicker={P.hero.kicker}
        headline={P.hero.headline}
        subhead={P.hero.subhead}
        availability={P.hero.availability}
        primaryCta={P.hero.primaryCta}
        secondaryCta={P.hero.secondaryCta}
        image={P.hero.image}
        imageNote={P.hero.imageNote}
      />

      <ContextProofStrip eyebrow={P.contextProof.eyebrow} items={P.contextProof.items} />

      <div className="border-b border-neutral-200 bg-white py-6 sm:py-8">
        <InstContainer>
          <InstReveal>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              {P.logoBandLabel}
            </p>
          </InstReveal>
        </InstContainer>
        <AnimatedLogoBand logos={[...P.logoBand]} bleed ariaLabel={P.logoBandLabel} />
      </div>

      <InstContainer>
        <PositioningTriad
          eyebrow={P.positioning.eyebrow}
          title={P.positioning.title}
          lead={P.positioning.lead}
          cards={P.positioning.cards}
        />

        <section id="curriculum" className="scroll-mt-28 border-t border-neutral-200 py-12 sm:py-16">
          <InstReveal>
            <InstSectionLabel accent="ocean">{P.curriculum.eyebrow}</InstSectionLabel>
            <h2 className="font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl">
              {P.curriculum.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              {P.curriculum.lead}
            </p>
          </InstReveal>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {P.curriculum.modules.map((module, i) => (
              <InstReveal key={module.id} delay={0.05 * i}>
                <li className="h-full">
                  <CurriculumModuleCard module={module} defaultOpen={i === 0} />
                </li>
              </InstReveal>
            ))}
          </ul>
          <InstReveal delay={0.12}>
            <p className="mt-8 text-sm text-neutral-600">
              Full public catalog (Presence, AI Literacy, Creative Coding, Systems + Archive):{' '}
              <a
                href="/workshops#catalog"
                className="font-medium text-neutral-950 underline underline-offset-4"
                onClick={() => track('artist_infrastructure_workshops_catalog', {})}
              >
                /workshops#catalog
              </a>
              . Ready landings include SEO, writing, documentation, vibe coding, and AI literacy.
            </p>
          </InstReveal>
        </section>

        <section
          id="oolite-proof"
          className="scroll-mt-28 border-t border-neutral-200 py-12 sm:py-16"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <InstReveal>
              <CaseStudyIntro
                eyebrow={P.ooliteProof.eyebrow}
                title={P.ooliteProof.title}
                lead={P.ooliteProof.lead}
                credit={P.ooliteProof.credit}
                contractNote={P.ooliteProof.contractNote}
                href={P.ooliteProof.href}
                hrefLabel={P.ooliteProof.hrefLabel}
                points={P.ooliteProof.points}
              />
            </InstReveal>
            <InstReveal delay={0.08}>
              <CaseStudyGallery
                items={P.ooliteProof.gallery}
                neededNote={P.ooliteProof.neededNote}
              />
            </InstReveal>
          </div>
        </section>

        <EngagementProcess
          eyebrow={P.engagementProcess.eyebrow}
          title={P.engagementProcess.title}
          valueLine={P.engagementProcess.valueLine}
          steps={P.engagementProcess.steps}
        />

        <ProofStrip
          eyebrow={P.supportingProof.eyebrow}
          title={P.supportingProof.title}
          lead={P.supportingProof.lead}
        >
          {P.supportingProof.cards.map((card) => (
            <SupportingProofCard
              key={card.id}
              title={card.title}
              org={card.org}
              body={card.body}
              status={card.status}
              statusNote={card.statusNote}
              href={card.href}
              secondaryHref={'secondaryHref' in card ? card.secondaryHref : undefined}
              secondaryLabel={'secondaryLabel' in card ? card.secondaryLabel : undefined}
              image={card.image}
            />
          ))}
        </ProofStrip>

        <PracticeProjectStrip
          eyebrow={P.practice.eyebrow}
          title={P.practice.title}
          lead={P.practice.lead}
          href={P.practice.href}
          hrefLabel={P.practice.hrefLabel}
          projects={P.practice.projects}
        />

        <EngagementFormatCards
          eyebrow={P.engagement.eyebrow}
          title={P.engagement.title}
          availability={P.engagement.availability}
          formats={P.engagement.formats}
        />

        <MediaNeededStrip
          eyebrow={P.mediaNeeded.eyebrow}
          title={P.mediaNeeded.title}
          lead={P.mediaNeeded.lead}
          items={P.mediaNeeded.items}
        />
      </InstContainer>

      <InstitutionalCTA
        eyebrow={P.cta.eyebrow}
        title={P.cta.title}
        lead={P.cta.lead}
        email={P.cta.email}
        emailSubject={P.cta.emailSubject}
        calendlyHref={P.cta.calendlyHref}
        calendlyLabel={P.cta.calendlyLabel}
        secondaryLinks={P.cta.secondaryLinks}
      />
    </InstPageShell>
  );
}
