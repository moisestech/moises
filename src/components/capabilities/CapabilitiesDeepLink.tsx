import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type CapabilitiesDeepLinkProps = {
  href: string;
  /** Short context line under the CTA. */
  note?: string;
  className?: string;
};

/**
 * Shared strip pointing role pages at the canonical /capabilities map.
 */
export function CapabilitiesDeepLink({
  href,
  note = 'Shared skills map — Proven requires a public link. Role-specific proof stays on this page.',
  className,
}: CapabilitiesDeepLinkProps) {
  return (
    <aside
      className={cn(
        'rounded-xl border border-cyan-200/80 bg-cyan-50/50 p-4 dark:border-cyan-900/50 dark:bg-cyan-950/25 sm:p-5',
        className,
      )}
      aria-label="Technical capabilities map"
    >
      <p className={opp.label}>Technical Proof Engine</p>
      <Link
        href={href}
        className={cn(opp.btnSecondary, 'mt-3 min-h-11 w-full justify-center sm:w-auto')}
      >
        Full capabilities map
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
      </Link>
      <p className={`mt-2 max-w-2xl ${opp.subtle}`}>{note}</p>
    </aside>
  );
}
