'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import {
  institutionsHub,
  type InstitutionCaseStudy,
  type InstitutionOrg,
  type OrgRelationship,
} from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstFamilyNav,
  InstLaneIcon,
  InstPageShell,
  InstPrimaryCta,
  InstReveal,
  InstSecondaryCta,
  InstSectionLabel,
  INST_ACCENT,
} from '@/components/institutions/InstitutionalUi';
import { ProposePilotBand } from '@/components/institutions/PilotPricingBand';
import { cn } from '@/lib/utils';

const H = institutionsHub;

const SECTION_ACCENT = {
  practice: 'teal',
  'case-studies': 'ink',
  organizations: 'ocean',
  engage: 'copper',
} as const;

const KIND_ACCENT: Record<InstitutionCaseStudy['kind'], keyof typeof INST_ACCENT> = {
  systems: 'teal',
  program: 'ocean',
  exhibition: 'rose',
  platform: 'copper',
  workshop: 'sky',
};

const ORG_FILTERS: Array<{ id: 'all' | OrgRelationship; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'lab', label: 'Lab' },
  { id: 'residency', label: 'Residency' },
  { id: 'employment', label: 'Employment' },
  { id: 'platform', label: 'Platform' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'exhibition', label: 'Exhibition' },
  { id: 'festival', label: 'Festival' },
  { id: 'funder', label: 'Funder' },
  { id: 'education', label: 'Education' },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}

function CaseStudyCard({ study, large }: { study: InstitutionCaseStudy; large?: boolean }) {
  const accentKey = KIND_ACCENT[study.kind] ?? 'ink'
  const accent = INST_ACCENT[accentKey]
  const inner = (
    <>
      <div className={cn('relative overflow-hidden bg-neutral-200', large ? 'aspect-[16/9]' : 'aspect-[16/10]')}>
        {study.imageSrc ? (
          <Image
            src={study.imageSrc}
            alt={study.imageAlt || study.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes={large ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
          />
        ) : null}
        <span
          className={cn(
            'absolute left-3 top-3 border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm',
            accent.chipActive,
          )}
        >
          {study.kindLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
          {study.org}
        </p>
        <h3 className="mt-2 font-['MoMA_Sans'] text-lg font-semibold leading-snug sm:text-xl">
          {study.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">{study.body}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
          {study.external ? 'Open external' : 'Open case study'}
          {study.external ? (
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          ) : (
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
          )}
        </span>
      </div>
    </>
  );

  const className = cn(
    'group flex h-full flex-col border border-neutral-200 bg-white transition hover:shadow-sm',
    'hover:ring-2',
    accent.ring,
  );

  if (study.external) {
    return (
      <a href={study.href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={study.href} className={className}>
      {inner}
    </Link>
  );
}

function OrgCard({ org }: { org: InstitutionOrg }) {
  const body = (
    <>
      {org.imageSrc ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
          <Image
            src={org.imageSrc}
            alt={org.imageAlt ?? org.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-neutral-100 px-4 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
            {org.relationshipLabel}
          </p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
          {org.relationshipLabel}
        </p>
        <h3 className="mt-1.5 font-['MoMA_Sans'] text-base font-semibold leading-snug sm:text-lg">
          {org.name}
        </h3>
        <p className="mt-1 text-xs text-neutral-500">{org.location}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">{org.summary}</p>
        {org.href ? (
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
            View
            {org.external ? (
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            ) : (
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            )}
          </span>
        ) : null}
      </div>
    </>
  );

  const className =
    'group flex h-full flex-col overflow-hidden border border-neutral-200 bg-white transition hover:border-neutral-400';

  if (!org.href) {
    return <div className={className}>{body}</div>;
  }

  if (org.external) {
    return (
      <a href={org.href} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }

  return (
    <Link href={org.href} className={className}>
      {body}
    </Link>
  );
}

export function InstitutionsHubClient() {
  const [activeNav, setActiveNav] = useState('practice');
  const [orgFilter, setOrgFilter] = useState<'all' | OrgRelationship>('all');

  const featured = useMemo(
    () => H.caseStudies.filter((c) => c.featured),
    [],
  );
  const moreStudies = useMemo(
    () => H.caseStudies.filter((c) => !c.featured),
    [],
  );

  const filteredOrgs = useMemo(() => {
    if (orgFilter === 'all') return H.organizations;
    return H.organizations.filter((o) => o.relationship === orgFilter);
  }, [orgFilter]);

  useEffect(() => {
    const ids = H.nav.map((n) => n.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 110) current = id;
      }
      setActiveNav(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <InstPageShell>
      <InstFamilyNav active="institutions" className="sticky top-0 z-40" />
      <header className="border-b border-neutral-200 bg-[#f7f6f3]">
        <InstContainer className="py-14 sm:py-20 md:py-24">
          <InstSectionLabel>{H.hero.eyebrow}</InstSectionLabel>
          <h1 className="max-w-4xl font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {H.hero.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            {H.hero.lead}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
            {H.hero.availability}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <InstPrimaryCta
              href={H.hero.primaryCta.href}
              label={H.hero.primaryCta.label}
              external={H.hero.primaryCta.external}
              onClick={() =>
                track('cta_institutions_click', { source: 'institutions_hero' })
              }
            />
            <InstSecondaryCta
              href={H.hero.secondaryCta.href}
              label={H.hero.secondaryCta.label}
              external={H.hero.secondaryCta.external}
            />
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-neutral-200 pt-8">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Organizations
              </dt>
              <dd className="mt-1 font-['MoMA_Sans'] text-2xl font-semibold">{H.organizations.length}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Case studies
              </dt>
              <dd className="mt-1 font-['MoMA_Sans'] text-2xl font-semibold">{H.caseStudies.length}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Practice lanes
              </dt>
              <dd className="mt-1 font-['MoMA_Sans'] text-2xl font-semibold">{H.lanes.length}</dd>
            </div>
          </dl>
        </InstContainer>
      </header>

      <InstContainer className="py-8 sm:py-10">
        <ProposePilotBand />
      </InstContainer>

      <nav
        className="sticky top-[45px] z-30 border-b border-neutral-200 bg-[#f7f6f3]/90 backdrop-blur"
        aria-label="Page sections"
      >
        <InstContainer className="flex gap-1.5 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {H.nav.map((item) => {
            const active = activeNav === item.id;
            const accentKey = SECTION_ACCENT[item.id as keyof typeof SECTION_ACCENT] ?? 'ink';
            const accent = INST_ACCENT[accentKey];
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'shrink-0 border px-3 py-1.5 text-xs font-medium transition',
                  active ? accent.chipActive : accent.chip,
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

      <section
        id="practice"
        className="scroll-mt-28 border-b border-neutral-200 py-14 sm:py-16"
        aria-labelledby="lanes-heading"
      >
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="teal">What I build with institutions</InstSectionLabel>
            <h2 id="lanes-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              Four lanes of institutional practice
            </h2>
          </InstReveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {H.lanes.map((lane, index) => {
              const accentKey = lane.accent ?? 'ink';
              const accent = INST_ACCENT[accentKey];
              return (
                <InstReveal key={lane.id} delay={0.05 * index}>
                  <li
                    className={cn(
                      'h-full border border-neutral-200 bg-white p-5 transition sm:p-6',
                      'hover:ring-2',
                      accent.ring,
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      {lane.icon ? (
                        <InstLaneIcon name={lane.icon} accent={accentKey} />
                      ) : null}
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                    <h3 className="mt-4 font-['MoMA_Sans'] text-lg font-semibold leading-snug">
                      {lane.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-700">{lane.body}</p>
                    <Link
                      href={lane.href}
                      className={cn(
                        'mt-5 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline',
                        accent.text,
                      )}
                    >
                      {lane.linkLabel}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </li>
                </InstReveal>
              );
            })}
          </ul>
        </InstContainer>
      </section>

      <section
        id="case-studies"
        className="scroll-mt-28 border-b border-neutral-200 py-14 sm:py-16"
        aria-labelledby="case-studies-heading"
      >
        <InstContainer>
          <InstReveal>
            <InstSectionLabel>Evidence</InstSectionLabel>
            <h2 id="case-studies-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              Case studies
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              Flagship systems and programs first, then exhibition and festival proof. Each card links to a
              dedicated page or archive on this site.
            </p>
          </InstReveal>

          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {featured.map((study, i) => (
              <InstReveal key={study.id} delay={0.04 * i}>
                <li>
                  <CaseStudyCard study={study} large />
                </li>
              </InstReveal>
            ))}
          </ul>

          <h3 className="mt-12 font-['MoMA_Sans'] text-xl font-semibold sm:text-2xl">
            More institutional evidence
          </h3>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreStudies.map((study, i) => (
              <InstReveal key={study.id} delay={0.03 * i}>
                <li>
                  <CaseStudyCard study={study} />
                </li>
              </InstReveal>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section
        id="organizations"
        className="scroll-mt-28 border-b border-neutral-200 py-14 sm:py-16"
        aria-labelledby="orgs-heading"
      >
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="ocean">Directory</InstSectionLabel>
            <h2 id="orgs-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              Organizations worked with
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              {H.organizations.length} verified institutions — filter by relationship type.
            </p>
          </InstReveal>

          <div
            className="mt-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filter organizations"
          >
            {ORG_FILTERS.map((filter) => {
              const active = orgFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setOrgFilter(filter.id)}
                  className={cn(
                    'shrink-0 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition',
                    active
                      ? INST_ACCENT.ocean.chipActive
                      : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500',
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOrgs.map((org, i) => (
              <InstReveal key={org.id} delay={Math.min(0.03 * i, 0.24)}>
                <li>
                  <OrgCard org={org} />
                </li>
              </InstReveal>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-neutral-500">{H.honestyNote}</p>
        </InstContainer>
      </section>

      <section id="engage" className="scroll-mt-28 py-14 sm:py-16" aria-labelledby="next-heading">
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="copper">Engagements</InstSectionLabel>
            <h2 id="next-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              {H.nextSteps.title}
            </h2>
            <ul className="mt-8 space-y-3">
              {H.nextSteps.items.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-amber-700 bg-amber-50/60 py-3 pl-4 text-sm leading-relaxed text-neutral-800 sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <InstPrimaryCta
                href={H.hero.primaryCta.href}
                label={H.hero.primaryCta.label}
                onClick={() =>
                  track('cta_institutions_click', { source: 'institutions_footer' })
                }
              />
              <InstSecondaryCta href="/oolite-arts" label="Start with Oolite proof" />
            </div>
          </InstReveal>
        </InstContainer>
      </section>
    </InstPageShell>
  );
}
