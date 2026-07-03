'use client';

import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';

type CareerPacketInteractiveSectionProps = {
  /** Compact preview for tablet (above list) and desktop (side column). */
  tabletPanel: React.ReactNode;
  /** Full-size sticky panel for desktop side column. */
  desktopPanel: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Responsive shell for career-packet interactive rows:
 * - mobile: children only (inline accordion panels live inside rows)
 * - tablet: compact preview above list
 * - desktop: sticky side panel
 */
export function CareerPacketInteractiveSection({
  tabletPanel,
  desktopPanel,
  children,
}: CareerPacketInteractiveSectionProps) {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-start">
      <div>
        <div className="mb-4 hidden md:block lg:hidden" aria-live="polite">
          {tabletPanel}
        </div>
        {children}
      </div>
      <div className={cn(opp.illustrationPanel, 'hidden lg:block')} aria-live="polite">
        {desktopPanel}
      </div>
    </div>
  );
}
