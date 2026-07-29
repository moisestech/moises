'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useId, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import type {
  SystemPipelineCaseStudyData,
  SystemPipelineOwnership,
  SystemPipelineStage,
} from '@/content/evidence/systemPipeline';
import { cn } from '@/lib/utils';

type SystemPipelineCaseStudyProps = {
  data: SystemPipelineCaseStudyData;
  sectionId?: string;
  /** Visual density hint — content already differs between full/condensed data objects. */
  variant?: 'full' | 'condensed';
  className?: string;
};

function ownershipBadgeClass(label: SystemPipelineOwnership): string {
  switch (label) {
    case 'Owned':
      return 'border-emerald-700/40 bg-emerald-50 text-emerald-950 dark:border-emerald-600/50 dark:bg-emerald-950/40 dark:text-emerald-100';
    case 'Co-designed':
      return 'border-sky-700/40 bg-sky-50 text-sky-950 dark:border-sky-600/50 dark:bg-sky-950/40 dark:text-sky-100';
    case 'Integrated':
      return 'border-amber-700/40 bg-amber-50 text-amber-950 dark:border-amber-600/50 dark:bg-amber-950/40 dark:text-amber-100';
    case 'Led delivery':
      return 'border-violet-700/40 bg-violet-50 text-violet-950 dark:border-violet-600/50 dark:bg-violet-950/40 dark:text-violet-100';
    default:
      return 'border-stone-300 bg-stone-100 text-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200';
  }
}

function OwnershipBadges({ labels }: { labels: SystemPipelineOwnership[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={`Ownership: ${labels.join(', ')}`}>
      {labels.map((label) => (
        <li key={label}>
          <span
            className={cn(
              'inline-flex rounded border px-2 py-0.5 text-[11px] font-semibold tracking-wide',
              ownershipBadgeClass(label),
            )}
          >
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function StageEvidence({ stage }: { stage: SystemPipelineStage }) {
  const evidence = stage.evidence;
  if (!evidence) return null;

  return (
    <figure className="mt-4 overflow-hidden rounded-lg border border-stone-200 dark:border-stone-700">
      <div className="relative aspect-[16/10] bg-stone-100 dark:bg-stone-800">
        {evidence.local || evidence.src.endsWith('.svg') ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={evidence.src} alt={evidence.alt} className="h-full w-full object-cover" />
        ) : (
          <Image
            src={evidence.src}
            alt={evidence.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 28rem"
          />
        )}
      </div>
      {evidence.imageTodo || evidence.isPlaceholder ? (
        <figcaption className="border-t border-dashed border-amber-300/80 bg-amber-50 px-3 py-2 font-mono text-[11px] text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100">
          {evidence.imageTodo ?? 'TODO: add approved evidence screenshot'}
        </figcaption>
      ) : (
        <figcaption className="sr-only">{evidence.alt}</figcaption>
      )}
    </figure>
  );
}

function StageBody({ stage }: { stage: SystemPipelineStage }) {
  return (
    <div className="space-y-3">
      <OwnershipBadges labels={stage.ownership} />
      <div>
        <p className={opp.label}>System action</p>
        <p className={`mt-1 ${opp.body}`}>{stage.systemAction}</p>
      </div>
      <div>
        <p className={opp.label}>Contribution</p>
        <p className={`mt-1 ${opp.body}`}>{stage.candidateContribution}</p>
      </div>
      {stage.boundaryNote ? (
        <p
          className="rounded-lg border border-amber-200 bg-amber-50/80 px-3 py-2 text-xs leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100"
          role="note"
        >
          {stage.boundaryNote}
        </p>
      ) : null}
      {stage.architectureNote ? (
        <p className={`font-mono text-[11px] leading-relaxed text-stone-600 dark:text-stone-400`}>
          {stage.architectureNote}
        </p>
      ) : null}
      {stage.pullQuote ? (
        <blockquote className={`border-l-2 border-cyan-500/60 pl-3 ${opp.body} italic`}>
          {stage.pullQuote}
        </blockquote>
      ) : null}
      {stage.technologyTags?.length ? (
        <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies for ${stage.title}`}>
          {stage.technologyTags.map((tag) => (
            <li key={tag} className={opp.pill}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      <StageEvidence stage={stage} />
    </div>
  );
}

/**
 * Data-driven multi-stage system pipeline case study.
 * Readable without hover/JS; keyboard focus exposes the same detail as pointer selection.
 */
export function SystemPipelineCaseStudy({
  data,
  sectionId = 'system-pipeline',
  variant = 'full',
  className,
}: SystemPipelineCaseStudyProps) {
  const baseId = useId();
  const [activeId, setActiveId] = useState(data.stages[0]?.id ?? '');
  const active = data.stages.find((s) => s.id === activeId) ?? data.stages[0];

  if (!active) return null;

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      {data.eyebrow ? <p className={opp.accent}>{data.eyebrow}</p> : null}
      <h2 id={`${sectionId}-heading`} className={cn(opp.h2, data.eyebrow && 'mt-2')}>
        {data.title}
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.muted}`}>{data.summary}</p>

      {data.fullCaseStudyHref ? (
        <p className="mt-4">
          <Link href={data.fullCaseStudyHref} className={cn(opp.linkAccent, 'inline-flex items-center gap-1 text-sm')}>
            {data.fullCaseStudyLabel ?? 'View full case study'}
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </p>
      ) : null}

      <div className="mt-6 rounded-xl border border-stone-200 bg-stone-50/80 p-4 dark:border-stone-700 dark:bg-stone-900/50">
        <h3 className={opp.h3MoMA}>Ownership legend</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {data.ownershipLegend.map((item) => (
            <li key={item.id} className="flex gap-2 text-sm">
              <span
                className={cn(
                  'mt-0.5 inline-flex shrink-0 rounded border px-2 py-0.5 text-[11px] font-semibold',
                  ownershipBadgeClass(item.id),
                )}
              >
                {item.id}
              </span>
              <span className={opp.body}>{item.meaning}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Always-visible semantic ordered list — no hover dependency */}
      <ol className="mt-8 space-y-4" aria-label="System pipeline stages">
        {data.stages.map((stage) => {
          const selected = stage.id === active.id;
          const panelId = `${baseId}-${stage.id}-panel`;
          const buttonId = `${baseId}-${stage.id}-button`;
          return (
            <li
              key={stage.id}
              className={cn(
                opp.card,
                'p-4 transition motion-reduce:transition-none sm:p-5',
                variant === 'condensed' && 'sm:p-4',
                selected && 'ring-1 ring-inset ring-cyan-400/50 dark:ring-cyan-500/40',
              )}
            >
              <button
                type="button"
                id={buttonId}
                aria-current={selected ? 'step' : undefined}
                onClick={() => setActiveId(stage.id)}
                onFocus={() => setActiveId(stage.id)}
                className="w-full rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs text-cyan-700 dark:text-cyan-300">{stage.step}</span>
                  <h3 className={opp.h3MoMA}>{stage.title}</h3>
                </div>
              </button>

              {/* Always visible — readable without JS / hover */}
              <div id={panelId} className="mt-3" aria-labelledby={buttonId}>
                <StageBody stage={stage} />
              </div>
            </li>
          );
        })}
      </ol>

      {data.technologyTags?.length ? (
        <div className="mt-8">
          <h3 className={opp.h3MoMA}>Verified technology surface</h3>
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Verified technologies">
            {data.technologyTags.map((tag) => (
              <li key={tag} className={opp.pillTag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {data.relevanceRows?.length ? (
        <div className="mt-10" aria-labelledby={`${sectionId}-relevance`}>
          <h3 id={`${sectionId}-relevance`} className={opp.h2}>
            {data.relevanceTitle ?? 'Relevance'}
          </h3>
          {data.relevanceIntro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.relevanceIntro}</p> : null}

          {/* Mobile: stacked */}
          <ul className="mt-6 space-y-3 lg:hidden" aria-label={data.relevanceTitle ?? 'Relevance'}>
            {data.relevanceRows.map((row) => (
              <li key={row.id} className={cn(opp.card, 'p-4')}>
                <p className={opp.matrixPrimary}>{row.challenge}</p>
                <p className={`mt-2 ${opp.matrixSecondary}`}>{row.evidence}</p>
              </li>
            ))}
          </ul>

          {/* Desktop: table */}
          <div className={`mt-6 hidden lg:block ${opp.tableWrap}`}>
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">{data.relevanceTitle ?? 'Relevance matrix'}</caption>
              <thead className={opp.tableHead}>
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Challenge
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Structural evidence
                  </th>
                </tr>
              </thead>
              <tbody className={opp.divide}>
                {data.relevanceRows.map((row) => (
                  <tr key={row.id} className={opp.rowHover}>
                    <th scope="row" className={opp.tableCellStrong}>
                      {row.challenge}
                    </th>
                    <td className={opp.tableCell}>{row.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {data.verificationNote ? (
        <p className={`mt-8 max-w-3xl ${opp.subtle}`} role="note">
          {data.verificationNote}
        </p>
      ) : null}

      {data.caveats?.length ? (
        <ul className={`mt-4 max-w-3xl list-disc space-y-1 pl-5 ${opp.subtle}`}>
          {data.caveats.map((c) => (
            <li key={c.slice(0, 48)}>{c}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
