import { opp } from '@/components/opportunities/opportunityTheme';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import type {
  RolePortfolioContinuingBlock,
  RolePortfolioEducationItem,
} from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type EducationContinuingSectionProps = {
  educationTitle: string;
  education: RolePortfolioEducationItem[];
  continuing?: RolePortfolioContinuingBlock;
  sectionId?: string;
};

export function EducationContinuingSection({
  educationTitle,
  education,
  continuing,
  sectionId = 'education',
}: EducationContinuingSectionProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {educationTitle}
      </h2>

      <ul className="mt-8 space-y-4">
        {education.map((item) => (
          <li key={item.id} className={cn(opp.card, 'p-5')}>
            <h3 className="text-base font-bold text-stone-950 dark:text-stone-50 sm:text-lg">
              {item.institution}
            </h3>
            <p className="mt-1 text-sm italic text-stone-700 dark:text-stone-300">{item.degree}</p>
            {item.detail ? <p className={`mt-1 ${opp.subtle}`}>{item.detail}</p> : null}
          </li>
        ))}
      </ul>

      {continuing ? (
        <div className="mt-10" id="continuing">
          <h3 className={opp.h2Bold}>{continuing.title}</h3>
          <p className="mt-2 text-sm font-medium italic text-stone-700 dark:text-stone-300">
            {continuing.subtitle}
          </p>
          <p className={cn(opp.callout, 'mt-4', opp.body)}>
            <OpportunityRichText text={continuing.body} />
          </p>
        </div>
      ) : null}
    </section>
  );
}
