import Image from 'next/image';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import { opp } from '@/components/opportunities/opportunityTheme';
import type {
  RolePortfolioEvidenceItemStatus,
  RolePortfolioEvidenceRoadmap,
} from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

const STATUS_LABEL: Record<RolePortfolioEvidenceItemStatus, string> = {
  ready: 'Ready',
  'in-progress': 'In progress',
  todo: 'TODO',
};

const STATUS_PILL: Record<RolePortfolioEvidenceItemStatus, string> = {
  ready:
    'border-emerald-300/80 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200',
  'in-progress':
    'border-amber-300/80 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100',
  todo: 'border-stone-300 bg-stone-100 text-stone-700 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200',
};

const STATUS_DOT: Record<RolePortfolioEvidenceItemStatus, string> = {
  ready: 'bg-emerald-500/20 text-emerald-700 dark:bg-emerald-500/25 dark:text-emerald-300',
  'in-progress': 'bg-amber-500/20 text-amber-800 dark:bg-amber-500/25 dark:text-amber-200',
  todo: 'bg-stone-400/20 text-stone-700 dark:bg-stone-500/25 dark:text-stone-300',
};

type EvidenceRoadmapSectionProps = {
  data: RolePortfolioEvidenceRoadmap;
  sectionId?: string;
  className?: string;
};

export function EvidenceRoadmapSection({
  data,
  sectionId = 'evidence',
  className,
}: EvidenceRoadmapSectionProps) {
  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.intro ? (
        <p className={`mt-2 max-w-3xl ${opp.muted}`}>
          <OpportunityRichText text={data.intro} />
        </p>
      ) : null}

      <ol className="mt-8 space-y-4">
        {data.items.map((item, index) => (
          <li key={item.id} className={cn(opp.card, 'overflow-hidden p-0 sm:flex')}>
            {item.imageSrc ? (
              <div className="relative aspect-[16/10] shrink-0 bg-stone-100 dark:bg-stone-800 sm:aspect-auto sm:w-44 sm:min-h-[7.5rem]">
                {item.imageLocal || !item.imageSrc.startsWith('http') ? (
                  <OpportunityCardImage src={item.imageSrc} alt={item.imageAlt ?? item.title} local />
                ) : (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt ?? item.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 176px"
                  />
                )}
              </div>
            ) : (
              <div
                className={cn(
                  'flex aspect-[16/10] shrink-0 items-center justify-center sm:aspect-auto sm:w-44 sm:min-h-[7.5rem]',
                  STATUS_DOT[item.status],
                )}
                aria-hidden
              >
                <span className="text-2xl font-bold tabular-nums opacity-80">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            )}

            <div className="flex-1 p-5">
              <div className="flex flex-wrap items-center gap-2">
                {!item.imageSrc ? null : (
                  <span
                    className={cn(
                      'flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold',
                      STATUS_DOT[item.status],
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}
                <h3 className={opp.matrixPrimary}>{item.title}</h3>
                <span
                  className={cn(
                    'inline-flex w-fit rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                    STATUS_PILL[item.status],
                  )}
                >
                  {STATUS_LABEL[item.status]}
                </span>
              </div>
              <p className={`mt-3 ${opp.body}`}>
                <OpportunityRichText text={item.body} />
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`mt-3 inline-flex text-sm ${opp.linkAccent}`}
                >
                  {item.linkLabel ?? 'View'}
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
