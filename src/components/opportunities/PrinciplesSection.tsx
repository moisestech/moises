import { opp } from '@/components/opportunities/opportunityTheme';
import type { RolePortfolioPrinciple } from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type PrinciplesSectionProps = {
  title: string;
  principles: RolePortfolioPrinciple[];
  sectionId?: string;
};

export function PrinciplesSection({
  title,
  principles,
  sectionId = 'principles',
}: PrinciplesSectionProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {title}
      </h2>
      <ol className="mt-8 space-y-4">
        {principles.map((principle, index) => (
          <li
            key={principle.id}
            className={cn(
              'border-l-2 border-cyan-400/60 py-1 pl-5 dark:border-cyan-500/50',
              opp.bodyLg,
              'font-medium text-stone-900 dark:text-stone-100',
            )}
          >
            <span className="mr-3 text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
              {String(index + 1).padStart(2, '0')}
            </span>
            {principle.text}
          </li>
        ))}
      </ol>
    </section>
  );
}
