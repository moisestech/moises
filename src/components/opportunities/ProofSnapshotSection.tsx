import { opp } from '@/components/opportunities/opportunityTheme';
import { EvidenceTypeBadge } from '@/components/opportunities/EvidenceTypeBadge';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import type { ProofSnapshot } from '@/content/opportunities/types';
import { cn } from '@/lib/utils';

type ProofSnapshotSectionProps = {
  data: ProofSnapshot;
  framed?: boolean;
  sectionId?: string;
};

export function ProofSnapshotSection({
  data,
  framed = false,
  sectionId = 'honesty',
}: ProofSnapshotSectionProps) {
  const accent = getOpportunityCompactAccent(sectionId);

  return (
    <section
      id={sectionId}
      className={framed ? 'scroll-mt-32' : opp.section}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.intro ? <p className={`mt-3 max-w-3xl ${opp.muted}`}>{data.intro}</p> : null}

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((card) => (
          <li
            key={card.title}
            className={cn(
              opp.card,
              'p-4 transition duration-300 motion-reduce:transition-none',
              accent.cardHover,
            )}
          >
            <EvidenceTypeBadge type={card.evidenceType} />
            <h3 className={cn(opp.matrixPrimary, 'mt-3')}>{card.title}</h3>
            <p className={cn(opp.matrixSecondary, 'mt-1.5')}>{card.body}</p>
            {card.tools?.length ? (
              <p className={cn(opp.subtle, 'mt-3')}>{card.tools.join(' · ')}</p>
            ) : null}
          </li>
        ))}
      </ul>

      {data.rampStatement ? (
        <p className={cn(opp.callout, 'mt-6 max-w-3xl', opp.body)}>{data.rampStatement}</p>
      ) : null}
    </section>
  );
}
