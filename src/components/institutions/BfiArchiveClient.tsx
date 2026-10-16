'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { bfiArchive } from '@/content/institutions/bfi-archive';
import { BFI_PAGE_IMAGES, BFI_PENDING_SLOTS, BFI_SYSTEMS, type BfiPageImage, type BfiSystemId } from '@/content/institutions/bfi-archive-media';
import { BfiArchitectureDiagram, BfiRelationshipDiagram } from '@/components/institutions/BfiArchiveDiagrams';
import {
  InstContainer,
  InstPageShell,
  InstReveal,
  InstPlaceholder,
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

type SectionId = (typeof SECTION_NAV)[number]['id'];

const MARK = {
  copper: 'bg-amber-700',
  emerald: 'bg-emerald-700',
  neutral: 'bg-neutral-400',
  teal: 'bg-teal-700',
  violet: 'bg-violet-800',
} as const;

type PathMark = keyof typeof MARK;

const SECTION_META: Record<
  SectionId,
  { n: string; accent: keyof typeof INST_ACCENT; marks?: readonly PathMark[]; held?: boolean }
> = {
  problem: { n: '01', accent: 'copper' },
  approach: { n: '02', accent: 'ink', marks: ['copper', 'emerald', 'neutral', 'teal', 'violet'] },
  examples: { n: '03', accent: 'ink', marks: ['copper', 'teal', 'violet'] },
  outcome: { n: '04', accent: 'ink' },
  delivered: { n: '05', accent: 'violet' },
  remains: { n: '06', accent: 'copper', held: true },
  capability: { n: '07', accent: 'ink' },
};

const SUMMARY_TONE: Record<SectionId, string> = {
  problem: 'hover:bg-amber-50 group-open:border-l-amber-700 group-open:bg-amber-50',
  approach: 'hover:bg-neutral-100 group-open:border-l-neutral-950 group-open:bg-neutral-100',
  examples: 'hover:bg-neutral-100 group-open:border-l-neutral-950 group-open:bg-neutral-100',
  outcome: 'hover:bg-neutral-100 group-open:border-l-neutral-950 group-open:bg-neutral-100',
  delivered: 'hover:bg-violet-50 group-open:border-l-violet-800 group-open:bg-violet-50',
  remains: 'hover:bg-amber-50 group-open:border-l-amber-800 group-open:bg-amber-50',
  capability: 'hover:bg-neutral-100 group-open:border-l-neutral-950 group-open:bg-neutral-100',
};

const SECTION_STICKY =
  'sticky z-30 top-[calc(var(--site-header-height,12rem)+var(--inst-header-gap,0.5rem))] border-b border-neutral-200 bg-[#f7f6f3]/90 backdrop-blur transition-[top] duration-300 ease-in-out';

/** This review page has no family nav, so anchors clear only the site header and this strip. */
const SECTION_ANCHOR =
  'scroll-mt-[calc(var(--site-header-height,12rem)+var(--inst-header-gap,0.5rem)+var(--inst-section-nav-height,3.25rem)+0.5rem)]';

const SLOT = Object.fromEntries(BFI_PENDING_SLOTS.map((slot) => [slot.id, slot])) as Record<
  (typeof BFI_PENDING_SLOTS)[number]['id'],
  (typeof BFI_PENDING_SLOTS)[number]
>;

function revealSection(id: string) {
  const section = document.getElementById(id);
  const details = section?.querySelector('details');
  if (details instanceof HTMLDetailsElement) details.open = true;
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function BfiArchiveClient() {
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set());

  function setSectionOpen(id: string, open: boolean) {
    setOpenIds((current) => {
      if (current.has(id) === open) return current;
      const next = new Set(current);
      if (open) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!(id in SECTION_META)) return;
    revealSection(id);
    setSectionOpen(id, true);
  }, []);

  return (
    <InstPageShell className={INST_PAGE_TOP_CLASS}>
      <p className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-xs leading-relaxed text-amber-950 sm:text-sm">
        {S.visibilityNote}
      </p>

      <nav className={SECTION_STICKY} aria-label="Archive migration sections" data-inst-section-nav>
        <InstContainer className="flex gap-1.5 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_NAV.map((item) => {
            const open = openIds.has(item.id);
            const meta = SECTION_META[item.id];
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={open ? 'true' : undefined}
                className={cn(
                  'shrink-0 border px-3 py-1.5 font-mono text-xs font-medium transition',
                  meta.held
                    ? open
                      ? 'border-amber-800 bg-amber-800 text-white'
                      : 'border-dashed border-amber-800 bg-amber-50 text-amber-950 hover:bg-amber-100'
                    : open
                      ? INST_ACCENT[meta.accent].chipActive
                      : INST_ACCENT[meta.accent].chip,
                )}
                onClick={(event) => {
                  event.preventDefault();
                  revealSection(item.id);
                  setSectionOpen(item.id, true);
                  window.history.replaceState(null, '', `#${item.id}`);
                }}
              >
                {meta.n} {item.label}
              </a>
            );
          })}
        </InstContainer>
      </nav>

      <header className="border-b border-neutral-200">
        <InstContainer className="py-12 sm:py-16 lg:py-20">
          <InstReveal>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BFI_PAGE_IMAGES.logo.src} alt={BFI_PAGE_IMAGES.logo.alt} className="h-12 w-12 bg-white" />
              <InstSectionLabel>{S.hero.eyebrow}</InstSectionLabel>
            </div>
            <h1 className="mt-4 max-w-4xl font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
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
            <SystemLegend />
            <div className="mt-8 max-w-4xl">
              <EvidenceImage image={BFI_PAGE_IMAGES.cover} />
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

      <SectionAccordion id="problem" eyebrow={S.problem.eyebrow} title={S.problem.title} onToggle={setSectionOpen}>
        {S.problem.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            {paragraph}
          </p>
        ))}
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {S.problem.surfaces.map((surface) => (
            <li key={surface.label} className={cn('border p-4', SURFACE_CLASS[surface.label])}>
              <p className="text-base font-semibold">{surface.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-700">{surface.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 max-w-3xl">
          <EvidenceImage image={BFI_PAGE_IMAGES.cargoFiles} />
        </div>
      </SectionAccordion>

      <SectionAccordion id="approach" eyebrow={S.approach.eyebrow} title={S.approach.title} onToggle={setSectionOpen}>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">{S.approach.lead}</p>
        <ol className="mt-8 grid gap-3">
          {S.approach.responsibilities.map((item, index) => (
            <li key={item.label} className={cn('grid gap-2 border p-4 sm:grid-cols-[8rem_1fr] sm:gap-4', APPROACH_CLASS[index])}>
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
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <EvidenceImage image={BFI_PAGE_IMAGES.driveFolder} />
          <EvidenceImage image={BFI_PAGE_IMAGES.githubRepo} />
        </div>
        <BfiArchitectureDiagram />
      </SectionAccordion>

      <SectionAccordion id="examples" eyebrow={S.examples.eyebrow} title={S.examples.title} onToggle={setSectionOpen}>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">{S.examples.lead}</p>
        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {S.examples.items.map((item) => (
            <li key={item.id} className={cn('flex flex-col border bg-white', EXAMPLE_BORDER[item.id])}>
              {item.id === 'dear-miami' ? (
                <div className="grid gap-4 p-3">
                  <EvidenceImage image={BFI_PAGE_IMAGES.dearMiamiCargo} />
                  <EvidenceImage image={BFI_PAGE_IMAGES.dearMiamiAirtable} />
                </div>
              ) : (
                <ImageSlot id={item.id === 'loni-johnson' ? 'evidence.loni-johnson' : 'evidence.conversation'} />
              )}
              <div className="flex flex-1 flex-col p-4">
                <div className="flex flex-wrap gap-1.5">
                  {EXAMPLE_SYSTEMS[item.id].map((system) => (
                    <SystemChip key={system} id={system} />
                  ))}
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">{item.kicker}</p>
                <h3 className="mt-2 font-['MoMA_Sans'] text-xl font-semibold">{item.title}</h3>
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
      </SectionAccordion>

      <SectionAccordion id="outcome" eyebrow={S.outcome.eyebrow} title={S.outcome.title} onToggle={setSectionOpen}>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">{S.outcome.lead}</p>
        <ul className="mt-8 grid gap-3 lg:grid-cols-3">
          {S.outcome.points.map((point) => (
            <li key={point.title} className="border border-neutral-300 bg-white p-5">
              <p className="text-base font-semibold text-neutral-950">{point.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{point.body}</p>
            </li>
          ))}
        </ul>
      </SectionAccordion>

      <SectionAccordion id="delivered" eyebrow={S.delivered.eyebrow} title={S.delivered.title} onToggle={setSectionOpen}>
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
      </SectionAccordion>

      <SectionAccordion id="remains" eyebrow={S.remains.eyebrow} title={S.remains.title} onToggle={setSectionOpen}>
        <ul className="mt-6 grid gap-2">
          {S.remains.items.map((item) => (
            <li key={item} className="border-l-2 border-amber-700 bg-amber-50/80 py-2.5 pl-3 text-sm leading-relaxed text-neutral-800">
              {item}
            </li>
          ))}
        </ul>
      </SectionAccordion>

      <SectionAccordion id="capability" eyebrow={S.capability.eyebrow} title={S.capability.title} onToggle={setSectionOpen}>
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
      </SectionAccordion>

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

function SectionAccordion({
  id,
  eyebrow,
  title,
  onToggle,
  children,
}: {
  id: SectionId;
  eyebrow: string;
  title: string;
  onToggle: (id: SectionId, open: boolean) => void;
  children: ReactNode;
}) {
  const meta = SECTION_META[id];
  return (
    <section id={id} className={cn(SECTION_ANCHOR, 'border-b border-neutral-200')}>
      <details className="group" onToggle={(event) => onToggle(id, event.currentTarget.open)}>
        <summary
          className={cn(
            'cursor-pointer list-none border-l-4 border-l-transparent transition-colors [&::-webkit-details-marker]:hidden',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-950',
            SUMMARY_TONE[id],
          )}
        >
          <InstContainer className="flex items-start justify-between gap-6 py-8 sm:py-11">
            <span className="flex min-w-0 items-start gap-4 sm:gap-5">
              <SectionNumber n={meta.n} accent={meta.accent} held={meta.held} />
              <span className="min-w-0">
                <InstSectionLabel accent={meta.held ? 'copper' : meta.accent}>{eyebrow}</InstSectionLabel>
                <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold leading-snug sm:text-3xl">{title}</h2>
                {meta.marks ? <PathMarks marks={meta.marks} /> : null}
              </span>
            </span>
            <span className="mt-1 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
              <span className="group-open:hidden">Open</span>
              <span className="hidden group-open:inline">Close</span>
            </span>
          </InstContainer>
        </summary>
        <InstContainer className="pb-12 sm:pb-16">{children}</InstContainer>
      </details>
    </section>
  );
}

function SectionNumber({
  n,
  accent,
  held,
}: {
  n: string;
  accent: keyof typeof INST_ACCENT;
  held?: boolean;
}) {
  return (
    <span
      className={cn(
        'inline-flex h-11 w-11 shrink-0 items-center justify-center font-mono text-sm font-medium',
        held ? 'border border-dashed border-amber-800 bg-amber-50 text-amber-950' : INST_ACCENT[accent].iconBg,
      )}
      aria-hidden
    >
      {n}
    </span>
  );
}

function PathMarks({ marks }: { marks: readonly PathMark[] }) {
  return (
    <span className="mt-4 flex gap-1.5" aria-hidden>
      {marks.map((mark) => (
        <span key={mark} className={cn('h-1.5 w-7', MARK[mark])} />
      ))}
    </span>
  );
}

const SURFACE_CLASS: Record<string, string> = {
  Cargo: 'border-amber-800 bg-amber-50',
  Workbook: 'border-amber-800 bg-amber-50',
  Airtable: 'border-teal-800 bg-teal-50',
  Webflow: 'border-violet-800 bg-violet-50',
};

const APPROACH_CLASS = [
  'border-amber-800 bg-amber-50',
  'border-emerald-800 bg-emerald-50',
  'border-neutral-400 bg-white',
  'border-teal-800 bg-teal-50',
  'border-violet-800 bg-violet-50',
] as const;

const EXAMPLE_BORDER: Record<string, string> = {
  'dear-miami': 'border-amber-800',
  'loni-johnson': 'border-violet-800',
  conversation: 'border-violet-800',
};

const EXAMPLE_SYSTEMS: Record<string, readonly BfiSystemId[]> = {
  'dear-miami': ['cargo', 'airtable', 'webflow'],
  'loni-johnson': ['cargo', 'webflow'],
  conversation: ['webflow'],
};

function SystemLegend() {
  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="System colors">
      {(Object.keys(BFI_SYSTEMS) as BfiSystemId[]).map((id) => (
        <li key={id}>
          <SystemChip id={id} />
        </li>
      ))}
    </ul>
  );
}

function SystemChip({ id }: { id: BfiSystemId }) {
  const system = BFI_SYSTEMS[id];
  return (
    <span className={cn('inline-flex border px-2.5 py-1 text-xs font-medium', INST_ACCENT[system.accent].chip)}>
      {system.label}
    </span>
  );
}

function EvidenceImage({ image }: { image: BfiPageImage }) {
  return (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={image.alt} className="w-full border border-neutral-300 bg-white" />
      <figcaption className="mt-2 text-sm leading-relaxed text-neutral-600">{image.caption}</figcaption>
    </figure>
  );
}

function ImageSlot({ id }: { id: keyof typeof SLOT }) {
  const slot = SLOT[id];
  return <InstPlaceholder label={slot.title} note={`${slot.note} ${slot.folder}`} />;
}
