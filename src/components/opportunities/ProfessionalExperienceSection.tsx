import { opp } from '@/components/opportunities/opportunityTheme';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import type { RolePortfolioExperienceRole } from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type ProfessionalExperienceSectionProps = {
  title: string;
  intro?: string;
  roles: RolePortfolioExperienceRole[];
  sectionId?: string;
};

export function ProfessionalExperienceSection({
  title,
  intro,
  roles,
  sectionId = 'experience',
}: ProfessionalExperienceSectionProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {title}
      </h2>
      {intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p> : null}

      <div className="mt-10 space-y-10">
        {roles.map((role) => (
          <article key={role.id} className={cn(opp.card, 'p-5 sm:p-6')}>
            <h3 className="text-lg font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-xl">
              {role.org}
            </h3>
            <p className="mt-1 text-sm font-medium italic text-stone-700 dark:text-stone-300 sm:text-base">
              {role.title}
            </p>
            {role.location || role.period ? (
              <p className={`mt-1 ${opp.subtle}`}>
                {[role.location, role.period].filter(Boolean).join(' · ')}
              </p>
            ) : null}
            <ul className="mt-4 space-y-2.5">
              {role.bullets.map((bullet) => (
                <li key={bullet.slice(0, 72)} className={`flex gap-2 ${opp.body}`}>
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500/80" aria-hidden />
                  <OpportunityRichText text={bullet} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
