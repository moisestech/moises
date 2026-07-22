import { opp } from '@/components/opportunities/opportunityTheme';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import type { CapabilityMapData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type CapabilityMapProps = {
  data: CapabilityMapData;
  sectionId?: string;
};

export function CapabilityMap({ data, sectionId = 'capabilities' }: CapabilityMapProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.subtitle ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.subtitle}</p> : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {data.groups.map((group) => (
          <div key={group.id} className={cn(opp.card, 'p-5')}>
            <h3 className={opp.h3MoMA}>{group.title}</h3>
            {group.items.length === 1 ? (
              <p className={`mt-3 ${opp.body}`}>
                <OpportunityRichText text={group.items[0]} />
              </p>
            ) : (
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.slice(0, 48)} className={opp.body}>
                    <span className="mr-2 text-stone-400" aria-hidden>
                      ·
                    </span>
                    <OpportunityRichText text={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {data.currentlyExtending?.length ? (
        <p className={`mt-6 max-w-3xl ${opp.subtle}`}>
          <span className="font-semibold text-stone-500 dark:text-stone-400">Currently extending: </span>
          {data.currentlyExtending.join(' · ')}
        </p>
      ) : null}

      {data.closingStatement ? (
        <p className={cn(opp.callout, 'mt-8', opp.body)}>
          <OpportunityRichText text={data.closingStatement} />
        </p>
      ) : null}
    </section>
  );
}
