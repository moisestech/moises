import type { Opportunity, ProcessDiagram } from '@/content/opportunities/types';
import { ApproachDiagramGallery } from '@/components/opportunities/ApproachDiagramGallery';
import { ProcessStepLogos } from '@/components/opportunities/ProcessStepLogos';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type InnovationProcessProps = {
  opportunity: Opportunity;
  /** Sticky nav anchor; defaults to `process` */
  sectionId?: string;
  /** Optional architecture diagrams (click to expand full screen). */
  diagrams?: ProcessDiagram[];
  /** `horizontal` = row on md+, stack on mobile. Default `stack`. */
  layout?: 'stack' | 'horizontal';
  framed?: boolean;
};

export function InnovationProcess({
  opportunity,
  sectionId = 'process',
  diagrams,
  layout = 'stack',
  framed = false,
}: InnovationProcessProps) {
  return (
    <section id={sectionId} className={framed ? 'scroll-mt-32' : opp.section}>
      <h2 className={opp.h2}>{opportunity.processSectionTitle ?? 'Process'}</h2>
      {opportunity.processIntro ? <p className={`mt-3 max-w-3xl ${opp.body}`}>{opportunity.processIntro}</p> : null}
      {diagrams?.length ? (
        <>
          <p className={`mt-6 ${opp.label}`}>Architecture overview</p>
          <ApproachDiagramGallery diagrams={diagrams} className="mt-3" />
        </>
      ) : null}
      <ol
        className={cn(
          diagrams?.length ? 'mt-10' : 'mt-8',
          layout === 'horizontal'
            ? 'grid gap-4 md:grid-cols-5'
            : 'space-y-4',
        )}
      >
        {opportunity.processSteps.map((step, i) => (
          <li
            key={step.title}
            className={cn(
              `flex gap-4 ${opp.card} p-4`,
              layout === 'horizontal' && 'flex-col md:gap-3',
            )}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 dark:bg-cyan-500/20 text-xs font-bold text-cyan-600 dark:text-cyan-400">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className={opp.matrixPrimary}>{step.title}</h3>
              <p className={opp.matrixSecondary}>{step.description}</p>
              {step.logoIds?.length ? <ProcessStepLogos logoIds={step.logoIds} /> : null}
            </div>
          </li>
        ))}
      </ol>
      {opportunity.innovationLabLead || opportunity.innovationLabBody ? (
        <div className={opp.calloutInner}>
          {opportunity.innovationLabSectionTitle ? (
            <h3 className={opp.h3MoMA}>{opportunity.innovationLabSectionTitle}</h3>
          ) : null}
          {opportunity.innovationLabLead ? (
            <p className="mt-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">{opportunity.innovationLabLead}</p>
          ) : null}
          {opportunity.innovationLabBody ? <p className={`mt-2 ${opp.body}`}>{opportunity.innovationLabBody}</p> : null}
        </div>
      ) : null}
    </section>
  );
}
