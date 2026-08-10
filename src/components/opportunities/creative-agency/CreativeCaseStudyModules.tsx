'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDown,
  ExternalLink,
  Image as ImageIcon,
  Layers,
  Sparkles,
  Workflow,
  CheckCircle2,
  Beaker,
  FlaskConical,
  Construction,
} from 'lucide-react';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { scrollToDossierSection } from '@/components/opportunities/creative-agency/scrollToDossierSection';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { DELIVERY_STATUS_LABELS } from '@/content/opportunities/systemsDossier';
import type { DeliveryStatus } from '@/content/opportunities/systemsDossier';
import type { CreativeCaseStudyModule } from '@/content/opportunities/creativeAgencyDossier';
import { cn } from '@/lib/utils';

type CreativeCaseStudyModulesProps = {
  title: string;
  intro: string;
  studies: CreativeCaseStudyModule[];
  sectionId?: string;
  className?: string;
};

const STATUS_THEME: Record<
  DeliveryStatus,
  {
    rail: string;
    badge: string;
    soft: string;
    Icon: typeof CheckCircle2;
  }
> = {
  deployed: {
    rail: 'border-l-emerald-600 dark:border-l-emerald-400',
    badge:
      'border-emerald-400/70 bg-emerald-50 text-emerald-900 dark:border-emerald-600/60 dark:bg-emerald-950/40 dark:text-emerald-200',
    soft: 'from-emerald-500/15 via-transparent to-cyan-500/10',
    Icon: CheckCircle2,
  },
  prototype: {
    rail: 'border-l-amber-500 dark:border-l-amber-400',
    badge:
      'border-amber-400/70 bg-amber-50 text-amber-950 dark:border-amber-600/60 dark:bg-amber-950/40 dark:text-amber-100',
    soft: 'from-amber-500/15 via-transparent to-orange-500/10',
    Icon: Beaker,
  },
  research: {
    rail: 'border-l-violet-600 dark:border-l-violet-400',
    badge:
      'border-violet-400/70 bg-violet-50 text-violet-900 dark:border-violet-600/60 dark:bg-violet-950/40 dark:text-violet-200',
    soft: 'from-violet-500/15 via-transparent to-fuchsia-500/10',
    Icon: FlaskConical,
  },
  'in-development': {
    rail: 'border-l-sky-600 dark:border-l-sky-400',
    badge:
      'border-sky-400/70 bg-sky-50 text-sky-900 dark:border-sky-600/60 dark:bg-sky-950/40 dark:text-sky-200',
    soft: 'from-sky-500/15 via-transparent to-cyan-500/10',
    Icon: Construction,
  },
};

function categoryIcon(category: string) {
  const c = category.toLowerCase();
  if (c.includes('product') || c.includes('software')) return Layers;
  if (c.includes('institution') || c.includes('workshop') || c.includes('enable')) return Workflow;
  if (c.includes('editorial') || c.includes('ai')) return Sparkles;
  return ImageIcon;
}

function CaseMedia({
  src,
  alt,
  local,
}: {
  src: string;
  alt: string;
  local?: boolean;
}) {
  if (local || !src.startsWith('http')) {
    return <OpportunityCardImage src={src} alt={alt} local />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top transition duration-700 ease-out group-hover/case:scale-[1.04] motion-reduce:group-hover/case:scale-100"
      sizes="(max-width: 768px) 100vw, 90vw"
    />
  );
}

export function CreativeCaseStudyModules({
  title,
  intro,
  studies,
  sectionId = 'case-studies',
  className,
}: CreativeCaseStudyModulesProps) {
  const accent = getOpportunityCompactAccent(sectionId);
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(studies[0]?.id ?? null);

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
        Selected evidence
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p>

      <nav className="mt-6" aria-label="Case study jump links">
        <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
          Jump to a case · status color-coded
        </p>
        <ol className="mt-2 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
          {studies.map((study, index) => {
            const active = openId === study.id;
            const status = STATUS_THEME[study.deliveryStatus];
            const StatusIcon = status.Icon;
            return (
              <li key={study.id} className="shrink-0 snap-start">
                <a
                  href={`#${study.id}`}
                  className={cn(
                    'inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
                    active
                      ? cn(accent.navActive, accent.navActiveText)
                      : cn(status.badge, 'hover:brightness-95 dark:hover:brightness-110'),
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenId(study.id);
                    scrollToDossierSection(study.id);
                  }}
                >
                  <StatusIcon className="h-3.5 w-3.5 opacity-80" aria-hidden />
                  <span className="tabular-nums opacity-70">{String(index + 1).padStart(2, '0')}</span>
                  {study.title.split(' — ')[0] ?? study.title}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="mt-10 space-y-5 sm:space-y-6">
        {studies.map((study, index) => {
          const open = openId === study.id;
          const panelId = `${baseId}-panel-${study.id}`;
          const status = STATUS_THEME[study.deliveryStatus];
          const StatusIcon = status.Icon;
          const CategoryIcon = categoryIcon(study.category);
          const outcomes = study.outputs.slice(0, 3);

          return (
            <article key={study.id} className="scroll-mt-32" id={study.id}>
              <div
                className={cn(
                  'group/case relative overflow-hidden rounded-xl border border-stone-200 bg-white',
                  'border-l-[3px] shadow-sm transition duration-300',
                  'dark:border-stone-700 dark:bg-stone-950',
                  status.rail,
                  open
                    ? 'shadow-md ring-1 ring-stone-200/80 dark:ring-stone-700/80'
                    : 'hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0',
                )}
              >
                <div
                  className={cn(
                    'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 transition group-hover/case:opacity-100',
                    status.soft,
                  )}
                  aria-hidden
                />

                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="relative z-10 grid w-full grid-cols-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
                  onClick={() => setOpenId(open ? null : study.id)}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 dark:bg-stone-800 sm:aspect-auto sm:min-h-[200px]">
                    <CaseMedia src={study.imageSrc} alt={study.imageAlt} local={study.imageLocal} />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-stone-950/10" />
                    <span
                      className={cn(
                        'absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm',
                        status.badge,
                      )}
                    >
                      <StatusIcon className="h-3 w-3" aria-hidden />
                      {DELIVERY_STATUS_LABELS[study.deliveryStatus]}
                    </span>
                  </div>

                  <div className="relative flex items-start gap-3 p-4 sm:p-5 md:p-6">
                    <span
                      className={cn(
                        'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm',
                        'bg-white/95 transition duration-300 group-hover/case:scale-105 dark:bg-stone-900/95',
                        accent.navIdle,
                        accent.eyebrow,
                      )}
                    >
                      <CategoryIcon className="h-4 w-4" aria-hidden />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] tabular-nums text-stone-400">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <p className={cn('text-xs font-medium uppercase tracking-wide', accent.eyebrow)}>
                          {study.category}
                        </p>
                      </div>
                      <h3 className={`mt-2 ${opp.h3MoMA}`}>{study.title}</h3>
                      <p className={cn(opp.body, 'mt-2 line-clamp-2 text-sm')}>{study.context}</p>

                      {outcomes.length ? (
                        <ul className="mt-3 flex flex-wrap gap-1.5" role="list">
                          {outcomes.map((item) => (
                            <li
                              key={item.slice(0, 48)}
                              className="max-w-full truncate rounded-md border border-stone-200/90 bg-white/80 px-2 py-1 text-[11px] text-stone-600 dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-300"
                              title={item}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <p className={cn(opp.subtle, 'mt-3 text-xs')}>
                        {open ? 'Hide details' : 'Open case · role, workflow, outputs'}
                      </p>
                    </div>

                    <ChevronDown
                      className={cn(
                        'mt-1 h-4 w-4 shrink-0 text-stone-400 transition motion-reduce:transition-none',
                        open && 'rotate-180',
                      )}
                      aria-hidden
                    />
                  </div>
                </button>

                {open ? (
                  <div
                    id={panelId}
                    className="relative z-10 border-t border-stone-100 p-4 dark:border-stone-800 sm:p-6 md:p-7"
                  >
                    <dl className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <dt className={opp.label}>Context</dt>
                        <dd className={`mt-1 ${opp.body}`}>{study.context}</dd>
                      </div>
                      <div>
                        <dt className={opp.label}>Challenge</dt>
                        <dd className={`mt-1 ${opp.body}`}>{study.challenge}</dd>
                      </div>
                      <div>
                        <dt className={opp.label}>Moises’s role</dt>
                        <dd className={`mt-1 ${opp.body}`}>{study.role}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className={opp.label}>Design decisions</dt>
                        <dd className="mt-1">
                          <ul className={`list-disc space-y-1.5 pl-5 ${opp.body}`}>
                            {study.designDecisions.map((item) => (
                              <li key={item.slice(0, 48)}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className={opp.label}>AI or technical workflow</dt>
                        <dd className={`mt-1 ${opp.body}`}>{study.workflow}</dd>
                      </div>
                      <div>
                        <dt className={opp.label}>What you get (outputs)</dt>
                        <dd className="mt-1">
                          <ul className={`list-disc space-y-1 pl-5 ${opp.body}`}>
                            {study.outputs.map((item) => (
                              <li key={item.slice(0, 40)}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                      <div>
                        <dt className={opp.label}>What changed or was learned</dt>
                        <dd className={`mt-1 ${opp.body}`}>{study.learning}</dd>
                      </div>
                    </dl>

                    {study.todos?.length ? (
                      <div className="mt-5 rounded-lg border border-amber-300/60 bg-amber-50/80 p-4 dark:border-amber-700/50 dark:bg-amber-950/30">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-900 dark:text-amber-100">
                          Assets & facts needed
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {study.todos.map((todo) => (
                            <li
                              key={todo}
                              className="text-xs leading-relaxed text-amber-950 dark:text-amber-100"
                            >
                              {todo}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {study.gallery?.length ? (
                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {study.gallery.map((item) => (
                          <figure
                            key={`${item.src}-${item.alt}`}
                            className="overflow-hidden rounded-lg border border-stone-200 transition hover:-translate-y-0.5 hover:shadow-md dark:border-stone-700"
                          >
                            <div className="relative aspect-[4/3] bg-stone-100 dark:bg-stone-800">
                              {item.placeholderNote ? (
                                <div className="flex h-full flex-col items-center justify-center gap-1.5 p-3 text-center">
                                  <span className="rounded-full border border-amber-400/60 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 dark:border-amber-600/50 dark:bg-amber-950/50 dark:text-amber-100">
                                    Image slot
                                  </span>
                                  <span className="text-xs text-stone-500 dark:text-stone-400">
                                    {item.placeholderNote}
                                  </span>
                                </div>
                              ) : (
                                <CaseMedia src={item.src} alt={item.alt} local={item.local} />
                              )}
                            </div>
                            {item.caption ? (
                              <figcaption
                                className={`border-t border-stone-100 px-2 py-1.5 dark:border-stone-800 ${opp.subtle}`}
                              >
                                {item.caption}
                              </figcaption>
                            ) : null}
                          </figure>
                        ))}
                      </div>
                    ) : null}

                    {study.href ? (
                      <div className="mt-5">
                        <Link
                          href={study.href}
                          className={cn(
                            opp.linkAccent,
                            'inline-flex min-h-11 items-center gap-1 text-sm sm:min-h-0',
                          )}
                          {...(study.href.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {study.linkLabel ?? 'View project'}
                          {study.href.startsWith('http') ? (
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                          ) : null}
                        </Link>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
