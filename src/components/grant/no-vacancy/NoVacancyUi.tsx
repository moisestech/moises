/**
 * No Vacancy UI — re-exports shared grant primitives with Nv* aliases
 * so existing pages keep working without churn.
 */
import { GrantPageChrome } from '@/components/grant/shared/GrantProposalUi';

export {
  GrantSection as NvSection,
  GrantPlaceholderFigure as NvPlaceholderFigure,
  GrantBudgetTable as NvBudgetTable,
  GrantExperienceBeats as NvExperienceBeats,
  GrantVisitorJourney as NvVisitorJourney,
  GrantRelatedWorks as NvRelatedWorks,
  type GrantPlaceholderMedia as NvPlaceholderMedia,
  type GrantBudgetLine as NvBudgetLine,
} from '@/components/grant/shared/GrantProposalUi';

/** Page chrome defaulting to No Vacancy hub */
export function NvPageChrome({
  children,
  backHref = '/grant/no-vacancy-2026',
  backLabel = '← No Vacancy 2026',
}: {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <GrantPageChrome backHref={backHref} backLabel={backLabel}>
      {children}
    </GrantPageChrome>
  );
}
