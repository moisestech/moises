'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  GRANT_DOSSIER_STICKY_NAV_SELECTOR,
  GRANT_DOSSIER_SUBNAV_HEIGHT_VAR,
  grantDossierSectionScrollMarginClass,
  siteHeaderStickyTopClass,
} from '@/config/site-header-layout';
import type { SsrcEngineChapter, SsrcPracticeCategory } from '@/content/grants/ssrc-just-tech-fellowship-2027';

export const dossierTypography = {
  eyebrow: 'text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-stone-500 sm:text-xs dark:text-stone-400',
  h1: 'text-[clamp(2.625rem,1.5rem+4vw,7.5rem)] font-semibold leading-[0.95] tracking-tight text-stone-900 dark:text-stone-100',
  h2: 'text-[clamp(1.625rem,1.2rem+1.5vw,4rem)] font-semibold leading-tight text-stone-900 dark:text-stone-100',
  h3: 'text-[clamp(1.25rem,1.05rem+0.8vw,2.25rem)] font-semibold text-stone-900 dark:text-stone-100',
  pullQuote:
    'text-[clamp(1.375rem,1rem+1.2vw,3rem)] font-medium leading-snug text-stone-800 dark:text-stone-200',
  body: 'text-[clamp(1rem,0.95rem+0.3vw,1.125rem)] leading-relaxed text-stone-700 dark:text-stone-300',
  meta: 'text-[clamp(0.8125rem,0.78rem+0.15vw,0.875rem)] text-stone-600 dark:text-stone-400',
  prose: 'max-w-[62ch]',
  panel: 'max-w-[47.5rem]',
} as const;

export const grantCardClass =
  'border border-stone-300 bg-[#faf9f7] dark:border-stone-700 dark:bg-neutral-900';

export const grantButtonClass =
  'inline-flex min-h-11 items-center justify-center border border-stone-800 px-4 py-2.5 text-sm font-medium text-stone-900 transition hover:bg-stone-900 hover:text-white dark:border-stone-200 dark:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-black';

export const grantLinkClass =
  'font-medium text-stone-900 underline underline-offset-2 transition hover:opacity-80 dark:text-stone-100';

export type MajorZone = {
  id: string;
  number: string;
  label: string;
  summary: string;
};

export function SectionGroup({
  id,
  eyebrow,
  title,
  summary,
  children,
  className,
  paginated = false,
  accentEyebrowClass,
  accentBorderClass,
}: {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  children: React.ReactNode;
  className?: string;
  paginated?: boolean;
  accentEyebrowClass?: string;
  accentBorderClass?: string;
}) {
  return (
    <section id={id} className={cn(!paginated && grantDossierSectionScrollMarginClass, className)}>
      <div
        className={cn(
          'mb-8 border-b pb-4',
          accentBorderClass ?? 'border-stone-300 dark:border-stone-700',
        )}
      >
        <p className={cn(dossierTypography.eyebrow, accentEyebrowClass)}>{eyebrow} — {title}</p>
        <h2 className={cn('mt-2', dossierTypography.h2)}>{title}</h2>
        <p className={cn('mt-3', dossierTypography.meta)}>{summary}</p>
      </div>
      {children}
    </section>
  );
}

export function PanelHook({ label, text }: { label: string; text: string }) {
  return (
    <aside className={cn('mx-auto', dossierTypography.panel, grantCardClass, 'border-l-4 border-stone-800 p-5 sm:p-6 dark:border-stone-200')}>
      <p className={dossierTypography.eyebrow}>{label}</p>
      <p className={cn('mt-3', dossierTypography.body, 'text-stone-800 dark:text-stone-200')}>{text}</p>
    </aside>
  );
}

export function ThesisCard({ claim }: { claim: string }) {
  return (
    <blockquote className={cn(grantCardClass, 'border-l-4 border-red-900/70 p-5 sm:p-6 dark:border-red-400/50')}>
      <p className={dossierTypography.eyebrow}>Central claim</p>
      <p className={cn('mt-3', dossierTypography.pullQuote)}>{claim}</p>
    </blockquote>
  );
}

export function ExpandableText({
  preview,
  label,
  children,
  defaultOpen = false,
}: {
  preview: string;
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={grantCardClass}>
      <p className={cn('p-5 pb-0 sm:p-6 sm:pb-0', dossierTypography.body)}>{preview}</p>
      {open ? <div className={cn('space-y-4 p-5 pt-4 sm:p-6 sm:pt-4', dossierTypography.body)}>{children}</div> : null}
      <div className="border-t border-stone-200 px-5 py-3 dark:border-stone-700">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn('min-h-11 text-sm font-medium', grantLinkClass)}
          aria-expanded={open}
        >
          {open ? 'Show less' : label}
        </button>
      </div>
    </div>
  );
}

export function DiagramLadder({ steps }: { steps: readonly string[] }) {
  return (
    <>
      <ol className="hidden gap-3 sm:flex sm:flex-wrap sm:items-center">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3">
            <span className={cn(grantCardClass, 'px-3 py-2 text-sm font-medium text-stone-800 dark:text-stone-200')}>
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="text-stone-400 dark:text-stone-500" aria-hidden>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <ol className="space-y-2 sm:hidden">
        {steps.map((step, index) => (
          <li key={step} className="flex items-start gap-3">
            <span className={dossierTypography.meta}>{String(index + 1).padStart(2, '0')}</span>
            <span className={cn(grantCardClass, 'flex-1 px-3 py-2 text-sm text-stone-800 dark:text-stone-200')}>
              {step}
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}

export function EngineAccordion({ engines }: { engines: SsrcEngineChapter[] }) {
  const [openId, setOpenId] = useState<string | null>(engines[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {engines.map((chapter, index) => {
        const open = openId === chapter.id;
        return (
          <article key={chapter.id} className={cn('overflow-hidden', grantCardClass)}>
            <button
              type="button"
              className="flex w-full items-start gap-4 p-4 text-left sm:p-5"
              onClick={() => setOpenId(open ? null : chapter.id)}
              aria-expanded={open}
            >
              <span className={cn(dossierTypography.meta, 'mt-1 shrink-0 tabular-nums')}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 flex-1">
                <span className={cn('block', dossierTypography.h3)}>{chapter.title}</span>
                <span className={cn('mt-1 block', dossierTypography.meta)}>{chapter.focus}</span>
              </span>
              <span className={cn(dossierTypography.meta, 'shrink-0')}>{open ? '−' : '+'}</span>
            </button>
            {open ? (
              <div className="border-t border-stone-200 px-4 pb-5 sm:px-5 dark:border-stone-700">
                <figure>
                  <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
                    <Image
                      src={chapter.studyImage.src}
                      alt={chapter.studyImage.alt}
                      fill
                      className="object-cover opacity-60"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                    {chapter.studyImage.isPlaceholder ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-stone-900/40 px-4 text-center">
                        <p className="text-sm font-medium text-white">{chapter.studyImage.caption}</p>
                      </div>
                    ) : null}
                  </div>
                  <figcaption className={cn('mt-2', dossierTypography.meta)}>{chapter.studyImage.caption}</figcaption>
                </figure>
                <p className={cn('mt-4', dossierTypography.body)}>{chapter.body}</p>
                <ul className="mt-4 space-y-1">
                  {chapter.politicalQuestions.map((q) => (
                    <li key={q} className={dossierTypography.meta}>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

export function PracticeEvidenceTabs({
  categories,
  renderWorkLink,
}: {
  categories: SsrcPracticeCategory[];
  renderWorkLink: (work: SsrcPracticeCategory['works'][number]) => React.ReactNode;
}) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch]">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveId(category.id)}
            className={cn(
              'shrink-0 rounded-full border px-3 py-2 text-xs font-medium uppercase tracking-wide transition sm:text-sm',
              activeId === category.id
                ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
                : 'border-stone-300 text-stone-700 dark:border-stone-600 dark:text-stone-300',
            )}
          >
            {category.title}
          </button>
        ))}
      </div>
      {active ? (
        <ul className={cn('mt-4 space-y-4 p-5', grantCardClass)}>
          {active.works.map((work) => (
            <li key={`${active.id}-${work.title}`}>{renderWorkLink(work)}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function StatusPill({ status }: { status: string }) {
  const styles =
    status === 'Ready'
      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
      : status === 'Drafting' || status === 'Needs edit'
        ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300'
        : 'bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300';

  return (
    <span className={cn('inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide', styles)}>
      {status}
    </span>
  );
}

export function GrantDossierNav({
  zones,
  activeZoneId,
  onNavigate,
}: {
  zones: MajorZone[];
  activeZoneId: string;
  onNavigate: (id: string) => void;
}) {
  useEffect(() => {
    const syncSubnavHeight = () => {
      const nodes = document.querySelectorAll(GRANT_DOSSIER_STICKY_NAV_SELECTOR);
      let height = 0;

      nodes.forEach((node) => {
        const el = node as HTMLElement;
        if (el.offsetParent === null) return;
        height = Math.max(height, el.getBoundingClientRect().height);
      });

      if (height > 0) {
        document.documentElement.style.setProperty(GRANT_DOSSIER_SUBNAV_HEIGHT_VAR, `${Math.round(height)}px`);
      }
    };

    syncSubnavHeight();

    const nodes = document.querySelectorAll(GRANT_DOSSIER_STICKY_NAV_SELECTOR);
    const ro = new ResizeObserver(syncSubnavHeight);
    nodes.forEach((node) => ro.observe(node));

    window.addEventListener('resize', syncSubnavHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncSubnavHeight);
    };
  }, []);

  return (
    <>
      {/* Mobile: collapsible sections */}
      <details
        data-grant-dossier-sticky-nav
        className={cn(
          'sticky z-40 mb-6 border border-stone-300 bg-white/95 backdrop-blur md:hidden dark:border-stone-700 dark:bg-neutral-900/95',
          siteHeaderStickyTopClass,
        )}
      >
        <summary className={cn('cursor-pointer list-none px-4 py-3', dossierTypography.meta, '[&::-webkit-details-marker]:hidden')}>
          <span className="font-semibold text-stone-900 dark:text-stone-100">Sections</span>
          <span className="ml-2 text-stone-500 dark:text-stone-400">▾</span>
        </summary>
        <nav aria-label="Dossier sections" className="border-t border-stone-200 px-2 py-2 dark:border-stone-700">
          {zones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              onClick={() => onNavigate(zone.id)}
              className={cn(
                'flex w-full items-center gap-3 rounded px-3 py-2.5 text-left text-sm transition',
                activeZoneId === zone.id
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-black'
                  : 'text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800',
              )}
            >
              <span className="tabular-nums opacity-70">{zone.number}</span>
              {zone.label}
            </button>
          ))}
        </nav>
      </details>

      {/* Tablet: horizontal */}
      <nav
        data-grant-dossier-sticky-nav
        aria-label="Dossier sections"
        className={cn(
          'sticky z-40 mb-8 hidden overflow-x-auto overscroll-x-contain border border-stone-300 bg-white/95 px-2 py-2 backdrop-blur md:block lg:hidden dark:border-stone-700 dark:bg-neutral-900/95',
          siteHeaderStickyTopClass,
        )}
      >
        <div className="flex min-w-max gap-2">
          {zones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              onClick={() => onNavigate(zone.id)}
              className={cn(
                'rounded-full border px-3 py-2 text-xs font-medium uppercase tracking-wide',
                activeZoneId === zone.id
                  ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
                  : 'border-stone-300 text-stone-700 dark:border-stone-600 dark:text-stone-300',
              )}
            >
              {zone.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop: side nav */}
      <aside className="hidden lg:block">
        <nav aria-label="Dossier sections" className={cn('sticky space-y-1', siteHeaderStickyTopClass)}>
          {zones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              onClick={() => onNavigate(zone.id)}
              className={cn(
                'flex w-full items-start gap-3 border-l-2 px-3 py-2 text-left transition',
                activeZoneId === zone.id
                  ? 'border-stone-900 bg-stone-100/80 dark:border-stone-100 dark:bg-stone-800/50'
                  : 'border-transparent text-stone-600 hover:border-stone-400 dark:text-stone-400',
              )}
            >
              <span className={cn(dossierTypography.meta, 'tabular-nums')}>{zone.number}</span>
              <span>
                <span className="block text-sm font-semibold text-stone-900 dark:text-stone-100">{zone.label}</span>
                <span className={cn('mt-0.5 block', dossierTypography.meta)}>{zone.summary}</span>
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

export function ConceptCard({
  concept,
  engineTitle,
}: {
  concept: { name: string; shortDefinition: string; originality: string; appearsIn: string };
  engineTitle?: string;
}) {
  return (
    <article className={cn('p-4 sm:p-5', grantCardClass)}>
      <p className={dossierTypography.eyebrow}>{concept.originality}</p>
      <h3 className={cn('mt-2', dossierTypography.h3)}>{concept.name}</h3>
      <p className={cn('mt-2', dossierTypography.body)}>{concept.shortDefinition}</p>
      {engineTitle ? <p className={cn('mt-3', dossierTypography.meta)}>Related engine: {engineTitle}</p> : null}
      <p className={cn('mt-2', dossierTypography.meta)}>Appears in: {concept.appearsIn}</p>
    </article>
  );
}

export function ReferenceCard({
  reference,
}: {
  reference: { title: string; author: string; relevance: string; theme: string; href?: string };
}) {
  const inner = (
    <>
      <p className={dossierTypography.eyebrow}>{reference.theme}</p>
      <h3 className={cn('mt-2 text-base font-semibold text-stone-900 sm:text-lg dark:text-stone-100')}>
        {reference.title}
      </h3>
      <p className={cn('mt-1', dossierTypography.meta)}>{reference.author}</p>
      <p className={cn('mt-3', dossierTypography.body)}>{reference.relevance}</p>
    </>
  );
  return (
    <article
      className={cn(
        'p-4 sm:p-5 transition',
        grantCardClass,
        reference.href && 'hover:border-stone-500 dark:hover:border-stone-400',
      )}
    >
      {reference.href ? (
        <a href={reference.href} target="_blank" rel="noopener noreferrer" className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </article>
  );
}

export function ZoneNextLink({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <div className="mt-12 border-t border-stone-300 pt-6 dark:border-stone-700">
      <button type="button" onClick={onClick} className={grantButtonClass}>
        Next: {label} →
      </button>
    </div>
  );
}
