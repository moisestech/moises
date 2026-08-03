import Image from 'next/image';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import { opp } from '@/components/opportunities/opportunityTheme';
import { DELIVERY_STATUS_LABELS, type DeliveryStatus } from '@/content/opportunities/systemsDossier';
import type { RolePortfolioSelectedProject } from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type SelectedProjectSectionProps = {
  project: RolePortfolioSelectedProject;
  sectionId?: string;
  sectionTitle?: string;
  className?: string;
};

export function SelectedProjectSection({
  project,
  sectionId = 'selected-project',
  sectionTitle = 'Selected AI Project',
  className,
}: SelectedProjectSectionProps) {
  const status: DeliveryStatus = project.deliveryStatus;

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {sectionTitle}
      </h2>

      <article className={cn(opp.card, 'mt-8 overflow-hidden p-0')}>
        {project.imageSrc ? (
          <div className="relative aspect-[16/9] min-h-[120px] bg-stone-100 dark:bg-stone-800 sm:aspect-[21/9] sm:min-h-[160px] md:min-h-[180px]">
            {project.imageLocal || !project.imageSrc.startsWith('http') ? (
              <OpportunityCardImage src={project.imageSrc} alt={project.imageAlt ?? project.title} local />
            ) : (
              <Image
                src={project.imageSrc}
                alt={project.imageAlt ?? project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            )}
          </div>
        ) : null}

        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="min-w-0 text-base font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-lg md:text-xl">
              {project.title}
            </h3>
            <span
              className={cn(
                'inline-flex w-fit rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                status === 'deployed'
                  ? 'border-emerald-300/80 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200'
                  : 'border-stone-300 bg-stone-100 text-stone-700 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200',
              )}
            >
              {DELIVERY_STATUS_LABELS[status]}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium italic text-stone-700 dark:text-stone-300 sm:text-base">
            {project.subtitle}
          </p>
          <ul className="mt-4 space-y-2.5">
            {project.bullets.map((bullet) => (
              <li key={bullet.slice(0, 72)} className={`flex gap-2 ${opp.body}`}>
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500/80" aria-hidden />
                <OpportunityRichText text={bullet} />
              </li>
            ))}
          </ul>
          {project.href ? (
            <a
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`mt-5 inline-flex text-sm ${opp.linkAccent}`}
            >
              {project.linkLabel ?? 'Open project'}
            </a>
          ) : null}
          {status === 'prototype' || status === 'research' || status === 'in-development' ? (
            <p className={`mt-5 ${opp.subtle}`}>
              Status reflects shipment honesty — not claimed as a verified-live public production demo unless
              labeled Deployed.
            </p>
          ) : null}
        </div>
      </article>
    </section>
  );
}
