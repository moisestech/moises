'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';
import { DELIVERY_STATUS_LABELS } from '@/content/opportunities/systemsDossier';
import type { CreativeCaseStudyModule } from '@/content/opportunities/wmxCreativeDossier';
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
  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p>

      <nav className="mt-6" aria-label="Case study jump links">
        <p className={opp.label}>Jump to a case study</p>
        <ol className="mt-2 flex flex-wrap gap-2">
          {studies.map((study, index) => (
            <li key={study.id}>
              <a
                href={`#${study.id}`}
                className={cn(
                  opp.pillTag,
                  'inline-flex min-h-10 items-center gap-1.5 font-medium transition hover:border-cyan-400/50 hover:bg-cyan-50/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:hover:bg-cyan-950/30',
                )}
              >
                <span className="tabular-nums text-stone-400">{String(index + 1).padStart(2, '0')}</span>
                {study.title.split(' — ')[0] ?? study.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-14">
        {studies.map((study) => (
          <article key={study.id} className="scroll-mt-32" id={study.id}>
            <div className={cn(opp.card, 'overflow-hidden')}>
              <div className="relative aspect-[16/9] w-full bg-stone-100 dark:bg-stone-800 sm:aspect-[2/1]">
                <CaseMedia src={study.imageSrc} alt={study.imageAlt} local={study.imageLocal} />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <p className={opp.accentCategory}>{study.category}</p>
                  <span className={opp.pill}>{DELIVERY_STATUS_LABELS[study.deliveryStatus]}</span>
                </div>
                <h3 className={`mt-2 ${opp.h3MoMA}`}>{study.title}</h3>

                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
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
                      className={cn(opp.linkAccent, 'inline-flex items-center gap-1 text-sm')}
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
