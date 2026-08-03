import { opp } from '@/components/opportunities/opportunityTheme';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import type { RolePortfolioComingSoonBlock } from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type ComingSoonSectionProps = {
  data: RolePortfolioComingSoonBlock;
  sectionId?: string;
};

export function ComingSoonSection({ data, sectionId = 'coming-soon' }: ComingSoonSectionProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.intro ? (
        <p className={`mt-2 max-w-3xl ${opp.muted}`}>
          <OpportunityRichText text={data.intro} />
        </p>
      ) : null}

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {data.items.map((item) => (
          <li key={item.id} className={cn(opp.card, 'flex flex-col p-5')}>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className={opp.h3MoMA}>{item.title}</h3>
              <span className={opp.pill}>{item.badge ?? 'Coming soon'}</span>
            </div>
            <p className={`mt-3 flex-1 ${opp.body}`}>
              <OpportunityRichText text={item.body} />
            </p>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`mt-4 inline-flex text-sm ${opp.linkAccent}`}
              >
                {item.linkLabel ?? 'Open link'}
              </a>
            ) : (
              <p className={`mt-4 ${opp.subtle}`}>Link lands here when published.</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
