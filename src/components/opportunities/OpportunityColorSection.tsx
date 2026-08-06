import { cn } from '@/lib/utils';
import {
  getOpportunityCompactAccent,
  type OpportunityCompactSectionAccent,
} from '@/config/opportunity-compact-section-theme';

type OpportunityColorSectionProps = {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
  /** Optional override when accent is already resolved by the parent. */
  accent?: OpportunityCompactSectionAccent;
};

/** Colored rail + soft wash so compact dossier sections read as categorized on mobile and desktop. */
export function OpportunityColorSection({
  sectionId,
  children,
  className,
  accent: accentProp,
}: OpportunityColorSectionProps) {
  const accent = accentProp ?? getOpportunityCompactAccent(sectionId);
  return (
    <div
      className={cn(
        'scroll-mt-28 rounded-r-lg border-l-[3px] pl-2.5 sm:scroll-mt-32 sm:rounded-r-xl sm:border-l-4 sm:pl-4 md:pl-5',
        accent.rail,
        accent.softBg,
        className,
      )}
      data-section={sectionId}
    >
      {children}
    </div>
  );
}
