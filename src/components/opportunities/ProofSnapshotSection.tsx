import Image from 'next/image';
import { opp } from '@/components/opportunities/opportunityTheme';
import { EvidenceTypeBadge } from '@/components/opportunities/EvidenceTypeBadge';
import { EvidenceMaturityLegend } from '@/components/opportunities/EvidenceMaturityLegend';
import { PartnerMark } from '@/components/opportunities/PartnerMark';
import { LifecycleStageChip } from '@/components/opportunities/LifecycleStageChip';
import { FieldKitLoopDiagram } from '@/components/opportunities/FieldKitLoopDiagram';
import { AepHarnessVisual } from '@/components/opportunities/AepHarnessDiagrams';
import { DesignForwardFdeLoopDiagram } from '@/components/opportunities/DesignForwardFdeLoopDiagram';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import type { ProofSnapshot, ProofSnapshotCard } from '@/content/opportunities/types';
import { cn } from '@/lib/utils';

type ProofSnapshotSectionProps = {
  data: ProofSnapshot;
  framed?: boolean;
  sectionId?: string;
};

function ProofCardVisual({ card }: { card: ProofSnapshotCard }) {
  if (card.visual === 'field-kit-loop') {
    return <FieldKitLoopDiagram className="rounded-none border-0" />;
  }
  if (card.visual === 'harness') {
    return <AepHarnessVisual />;
  }
  if (card.visual === 'thin-slice') {
    return <DesignForwardFdeLoopDiagram className="rounded-none border-0" />;
  }
  if (card.imageSrc) {
    return (
      <div className="relative aspect-[16/10] w-full bg-stone-200 dark:bg-stone-800">
        {card.imageLocal ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={card.imageSrc} alt={card.imageAlt ?? ''} className="h-full w-full object-cover object-top" />
        ) : (
          <Image
            src={card.imageSrc}
            alt={card.imageAlt ?? ''}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>
    );
  }
  return null;
}

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
      <EvidenceMaturityLegend className="mt-4" />

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((card) => (
          <li
            key={card.title}
            className={cn(
              opp.card,
              'overflow-hidden transition duration-300 motion-reduce:transition-none',
              accent.cardHover,
            )}
          >
            <ProofCardVisual card={card} />
            <div className="p-4">
              <div className="flex items-start gap-3">
                {card.logoSrc ? <PartnerMark src={card.logoSrc} alt={card.logoAlt ?? card.title} size="sm" /> : null}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {card.lifecycleStage ? <LifecycleStageChip stage={card.lifecycleStage} /> : null}
                    <EvidenceTypeBadge type={card.evidenceType} />
                  </div>
                  <h3 className={cn(opp.matrixPrimary, 'mt-3')}>{card.title}</h3>
                </div>
              </div>
              <p className={cn(opp.matrixSecondary, 'mt-1.5')}>{card.body}</p>
              {card.tools?.length ? (
                <p className={cn(opp.subtle, 'mt-3')}>{card.tools.join(' · ')}</p>
              ) : null}
              {card.href ? (
                <a
                  href={card.href}
                  className={cn('mt-3 inline-flex min-h-11 items-center text-sm', opp.linkAccent)}
                  {...(card.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  Inspect
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      {data.rampStatement ? (
        <p className={cn(opp.callout, 'mt-6 max-w-3xl', opp.body)}>{data.rampStatement}</p>
      ) : null}
    </section>
  );
}
