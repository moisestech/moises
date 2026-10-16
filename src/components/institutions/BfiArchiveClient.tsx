'use client';

import Link from 'next/link';
import { bfiArchive } from '@/content/institutions/bfi-archive';
import { BfiArchitectureDiagram, BfiRelationshipDiagram } from '@/components/institutions/BfiArchiveDiagrams';
import {
  InstContainer,
  InstPageShell,
  InstReveal,
  InstSectionLabel,
  INST_ACCENT,
  INST_PAGE_TOP_CLASS,
} from '@/components/institutions/InstitutionalUi';
import { cn } from '@/lib/utils';

const S = bfiArchive;

const SECTION_NAV = [
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Method' },
  { id: 'examples', label: 'Evidence' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'delivered', label: 'Delivered' },
  { id: 'remains', label: 'Remaining' },
  { id: 'capability', label: 'Reusable' },
] as const;

const SECTION_STICKY =
  'sticky z-30 top-[calc(var(--site-header-height,12rem)+var(--inst-header-gap,0.5rem))] border-b border-neutral-200 bg-[#f7f6f3]/90 backdrop-blur transition-[top] duration-300 ease-in-out';

/** This review page has no family nav, so anchors clear only the site header and this strip. */
const SECTION_ANCHOR =
  'scroll-mt-[calc(var(--site-header-height,12rem)+var(--inst-header-gap,0.5rem)+var(--inst-section-nav-height,3.25rem)+0.5rem)]';

const showDraftArtwork = process.env.NODE_ENV !== 'production';

export function BfiArchiveClient() {
  return (
    <InstPageShell className={INST_PAGE_TOP_CLASS}>
      <p className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-xs leading-relaxed text-amber-950 sm:text-sm">
        {S.visibilityNote}
      </p>

      <nav className={SECTION_STICKY} aria-label="Archive migration sections" data-inst-section-nav>
        <InstContainer className="flex gap-1.5 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn('shrink-0 border px-3 py-1.5 text-xs font-medium transition', INST_ACCENT.ink.chip)}
            >
              {item.label}
            </a>
          ))}
        </InstContainer>
      </nav>

      <header className="border-b border-neutral-200">
        <InstContainer className="py-12 sm:py-16 lg:py-20">
          <InstReveal>
            <InstSectionLabel>{S.hero.eyebrow}</InstSectionLabel>
            <h1 className="max-w-4xl font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              {S.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">{S.hero.lead}</p>
            <p className="mt-6 max-w-2xl border border-neutral-950 bg-white px-3 py-2 text-sm leading-relaxed text-neutral-900">
              <span className="font-semibold">{S.hero.status}</span>
              <span className="mt-1 block text-neutral-700">{S.hero.statusNote}</span>
            </p>
            <div className="mt-4 max-w-2xl border border-neutral-300 bg-[#fbfaf7] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">{S.hero.roleLabel}</p>
              <p className="mt-1 text-base font-semibold text-neutral-950">{S.hero.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{S.hero.scope}</p>
            </div>
          </InstReveal>
        </InstContainer>
      </header>

      <section className="border-b border-neutral-200 bg-white py-10 sm:py-12">
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="teal">{S.snapshot.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">{S.snapshot.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">{S.snapshot.lead}</p>
            <dl className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {S.snapshot.stats.map((stat) => (
                <div key={stat.label} className="border border-neutral-300 bg-[#f7f6f3] p-4">
                  <dt className="text-sm font-medium text-neutral-700">{stat.label}</dt>
                  <dd className="mt-2 font-['MoMA_Sans'] text-3xl font-semibold tracking-tight text-neutral-950">{stat.value}</dd>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">{stat.note}</p>
                </div>
              ))}
            </dl>
          </InstReveal>
        </InstContainer>
      </section>

      <section id="problem" className={cn(SECTION_ANCHOR, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="copper">{S.problem.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">{S.problem.title}</h2>
            {S.problem.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
                {paragraph}
              </p>
            ))}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {S.problem.surfaces.map((surface) => (
                <li key={surface.label} className="border border-neutral-300 bg-white p-4">
                  <p className="text-base font-semibold">{surface.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700">{surface.body}</p>
                </li>
              ))}
            </ul>
            {showDraftArtwork ? (
              <DraftFrame
                label="Development placeholder"
                title={S.problem.title}
                note="Illustration not approved. The four historical diagrams stay private and are not shown here."
              />
            ) : null}
          </InstReveal>
        </InstContainer>
      </section>

      <section id="approach" className={cn(SECTION_ANCHOR, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel>{S.approach.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">{S.approach.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">{S.approach.lead}</p>
            <ol className="mt-8 grid gap-3">
              {S.approach.responsibilities.map((item, index) => (
                <li key={item.label} className="grid gap-2 border border-neutral-300 bg-white p-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                    0{index + 1} · {item.role}
                  </p>
                  <div>
                    <p className="text-base font-semibold">{item.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 max-w-3xl border border-neutral-300 bg-neutral-100 px-4 py-3 text-sm leading-relaxed text-neutral-800">
              {S.approach.tooling}
            </p>
            <blockquote className="mt-4 max-w-3xl border-l-4 border-neutral-950 bg-white px-4 py-3 font-['MoMA_Sans'] text-lg font-medium leading-relaxed text-neutral-950">
              {S.approach.principle}
            </blockquote>
            {showDraftArtwork ? (
              <DraftFrame
                label="Development placeholder"
                title={S.approach.title}
                note="Companion illustration not approved."
              />
            ) : null}
            <BfiArchitectureDiagram />
          </InstReveal>
        </InstContainer>
      </section>

      <section id="examples" className={cn(SECTION_ANCHOR, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="teal">{S.examples.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">{S.examples.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">{S.examples.lead}</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Schematic only. The Dear Miami screenshot montage — source, structured record, website, and a
              redacted review excerpt — is not on this page yet.
            </p>
            <ul className="mt-8 grid gap-4 lg:grid-cols-3">
              {S.examples.items.map((item) => (
                <li key={item.id} className="flex flex-col border border-neutral-300 bg-white">
                  <div className="border-b border-dashed border-neutral-300 bg-[#fbfaf7] px-4 py-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                      Schematic · not a screenshot
                    </p>
                    <p className="mt-2 text-sm font-medium text-neutral-800">{item.kicker}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-['MoMA_Sans'] text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">{item.body}</p>
                    <p className="mt-4 text-sm">
                      <a href={item.href} className="font-medium underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                        {item.hrefLabel}
                      </a>
                    </p>
                    {item.sourceHref && item.sourceLabel ? (
                      <p className="mt-2 text-sm">
                        <a
                          href={item.sourceHref}
                          className="text-neutral-700 underline underline-offset-4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.sourceLabel}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </InstReveal>
        </InstContainer>
      </section>

      <section id="outcome" className={cn(SECTION_ANCHOR, 'border-b border-neutral-200 bg-[#f7f6f3] py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="teal">{S.outcome.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">{S.outcome.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">{S.outcome.lead}</p>
            <ul className="mt-8 grid gap-3 lg:grid-cols-3">
              {S.outcome.points.map((point) => (
                <li key={point.title} className="border border-neutral-300 bg-white p-5">
                  <p className="text-base font-semibold text-neutral-950">{point.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{point.body}</p>
                </li>
              ))}
            </ul>
          </InstReveal>
        </InstContainer>
      </section>

      <section id="delivered" className={cn(SECTION_ANCHOR, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="teal">{S.delivered.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">{S.delivered.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">{S.delivered.dateLine}</p>
            <div className="mt-8 grid gap-4">
              {S.delivered.groups.map((group) => (
                <div key={group.label} className="border border-neutral-300 bg-white p-4 sm:p-5">
                  <h3 className="text-base font-semibold">{group.label}</h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="border-l-2 border-neutral-950 py-1 pl-3 text-sm leading-relaxed text-neutral-800">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {S.delivered.additions.map((item) => (
                <li key={item.href} className="border border-neutral-300 bg-white px-4 py-3 text-sm">
                  <a href={item.href} className="font-medium underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </InstReveal>
        </InstContainer>
      </section>

      <section id="remains" className={cn(SECTION_ANCHOR, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="copper">{S.remains.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">{S.remains.title}</h2>
            <ul className="mt-6 grid gap-2">
              {S.remains.items.map((item) => (
                <li key={item} className="border-l-2 border-amber-700 bg-amber-50/80 py-2.5 pl-3 text-sm leading-relaxed text-neutral-800">
                  {item}
                </li>
              ))}
            </ul>
          </InstReveal>
        </InstContainer>
      </section>

      <section id="capability" className={cn(SECTION_ANCHOR, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel>{S.capability.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">{S.capability.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">{S.capability.lead}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {S.capability.points.map((point) => (
                <li key={point.title} className="border border-neutral-300 bg-white p-4">
                  <p className="text-base font-semibold">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700">{point.body}</p>
                </li>
              ))}
            </ul>
            <BfiRelationshipDiagram />
          </InstReveal>
        </InstContainer>
      </section>

      <section className="bg-neutral-950 py-14 text-white sm:py-16">
        <InstContainer>
          <InstReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">{S.cta.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">{S.cta.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">{S.cta.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={S.cta.calendlyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                {S.cta.calendlyLabel}
              </a>
              <a
                href={`mailto:${S.cta.email}?subject=${encodeURIComponent(S.cta.emailSubject)}`}
                className="inline-flex min-h-11 items-center justify-center border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white"
              >
                Email {S.cta.email}
              </a>
            </div>
            <p className="mt-8 border-t border-white/15 pt-6 text-sm text-white/70">
              <Link href={S.cta.secondaryHref} className="hover:text-white">
                {S.cta.secondaryLabel}
              </Link>
            </p>
          </InstReveal>
        </InstContainer>
      </section>
    </InstPageShell>
  );
}

function DraftFrame({ label, title, note }: { label: string; title: string; note: string }) {
  return (
    <div className="mt-8 border border-dashed border-amber-700/50 bg-amber-50 p-4 text-amber-950" role="status">
      <div className="flex aspect-video items-end border border-neutral-950/80 bg-[#fbfaf7] p-4">
        <p className="max-w-md font-['MoMA_Sans'] text-2xl font-semibold leading-tight text-neutral-950">{title}</p>
      </div>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em]">{label}</p>
      <p className="mt-1 text-sm leading-relaxed">{note}</p>
    </div>
  );
}
