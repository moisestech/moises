'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { scrollToDossierSection } from '@/components/opportunities/creative-agency/scrollToDossierSection';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { DELIVERY_STATUS_LABELS } from '@/content/opportunities/systemsDossier';
import type { CreativeCaseStudyModule } from '@/content/opportunities/creativeAgencyDossier';
import { cn } from '@/lib/utils';

type CreativeCaseStudyModulesProps = {
  title: string;
  intro: string;
  studies: CreativeCaseStudyModule[];
  sectionId?: string;
  className?: string;
};

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
      className="object-cover object-top"
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
          Jump to a case study
        </p>
        <ol className="mt-2 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
          {studies.map((study, index) => {
            const active = openId === study.id;
            return (
              <li key={study.id} className="shrink-0 snap-start">
                <a
                  href={`#${study.id}`}
                  className={cn(
                    'inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
                    active
                      ? cn(accent.navActive, accent.navActiveText)
                      : cn(accent.navIdle, accent.eyebrow, 'bg-white dark:bg-stone-900'),
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenId(study.id);
                    scrollToDossierSection(study.id);
                  }}
                >
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
          return (
            <article
              key={study.id}
              className="scroll-mt-32"
              id={study.id}
            >
              <div
                className={cn(
                  opp.card,
                  'overflow-hidden border-l-[3px] transition',
                  accent.rail,
                  open ? 'shadow-md ring-1 ring-stone-200/80 dark:ring-stone-700/80' : 'hover:shadow-md',
                )}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="grid w-full grid-cols-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                  onClick={() => setOpenId(open ? null : study.id)}
                >
                  <div className="relative aspect-[16/10] w-full bg-stone-100 dark:bg-stone-800 sm:aspect-auto sm:min-h-[180px]">
                    <CaseMedia src={study.imageSrc} alt={study.imageAlt} local={study.imageLocal} />
                  </div>
                  <div className="flex items-start gap-3 p-4 sm:p-5 md:p-6">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] tabular-nums text-stone-400">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <p className={cn('text-xs font-medium uppercase tracking-wide', accent.eyebrow)}>
                          {study.category}
                        </p>
                        <span className={opp.pill}>{DELIVERY_STATUS_LABELS[study.deliveryStatus]}</span>
                      </div>
                      <h3 className={`mt-2 ${opp.h3MoMA}`}>{study.title}</h3>
                      <p className={cn(opp.body, 'mt-2 line-clamp-2 text-sm')}>{study.context}</p>
                      <p className={cn(opp.subtle, 'mt-3 text-xs')}>
                        {open ? 'Hide details' : 'Read full case'}
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
                    className="border-t border-stone-100 p-4 dark:border-stone-800 sm:p-6 md:p-7"
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
                        <dt className={opp.label}>Outputs</dt>
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
                            className="overflow-hidden rounded-lg border border-stone-200 dark:border-stone-700"
                          >
                            <div className="relative aspect-[4/3] bg-stone-100 dark:bg-stone-800">
                              {item.placeholderNote ? (
                                <div className="flex h-full flex-col items-center justify-center gap-1.5 p-3 text-center">
                                  <span className="rounded-full border border-amber-400/60 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 dark:border-amber-600/50 dark:bg-amber-950/50 dark:text-amber-100">
                                    Placeholder
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
