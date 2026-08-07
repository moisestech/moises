'use client';

import { useEffect, useState } from 'react';
import { artistInfrastructurePage as P } from '@/content/institutions/artistInfrastructure';
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
  CurriculumModuleCard,
  EngagementFormatCards,
  InstitutionalCTA,
  InstitutionalHero,
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
  { id: 'supporting-proof', label: 'Proof', accent: 'copper' as const },
  { id: 'practice', label: 'Practice', accent: 'rose' as const },
  { id: 'engagement', label: 'Engage', accent: 'ocean' as const },
  { id: 'contact', label: 'Contact', accent: 'ink' as const },
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' });
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
        if (el.getBoundingClientRect().top <= 130) current = id;
      }
      setActiveNav(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <InstPageShell>
      <InstFamilyNav active="artist-infrastructure" className="sticky top-0 z-40" />

      <nav
        className="sticky top-[45px] z-30 border-b border-neutral-200 bg-[#f7f6f3]/90 backdrop-blur"
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
        primaryCta={P.hero.primaryCta}
        secondaryCta={P.hero.secondaryCta}
        image={P.hero.image}
        imageNote={P.hero.imageNote}
      />

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
                  <CurriculumModuleCard module={module} />
                </li>
              </InstReveal>
            ))}
          </ul>
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
