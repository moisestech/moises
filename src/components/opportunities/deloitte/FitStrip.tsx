import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { deloitteUi } from '@/components/opportunities/deloitte/deloitteTheme';
import { cn } from '@/lib/utils';
import type { deloitteFitStrip } from '@/content/opportunities/deloitte-ai-design-facilitator-fde';

type FitStripProps = {
  data: typeof deloitteFitStrip;
};

const linkClass = cn(
  'mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-medium',
  deloitteUi.limeText,
  'underline-offset-2 hover:underline',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86BC25]',
);

function PillarLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={linkClass}>
        {label}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
      </a>
    );
  }
  if (href.startsWith('#')) {
    return (
      <a href={href} className={linkClass}>
        {label}
        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
      </a>
    );
  }
  return (
    <Link href={href} className={linkClass}>
      {label}
      <ChevronRight className="h-3.5 w-3.5" aria-hidden />
    </Link>
  );
}

export function FitStrip({ data }: FitStripProps) {
  return (
    <section id="pillars" className="scroll-mt-32" aria-labelledby="pillars-heading">
      <p className={deloitteUi.eyebrow}>Immediate evidence</p>
      <h2 id="pillars-heading" className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>
      <ul className="mt-8 grid gap-px bg-stone-300 dark:bg-stone-700 sm:grid-cols-2">
        {data.pillars.map((pillar, index) => (
            <li key={pillar.id} className="bg-[#F7F6F2] p-5 dark:bg-stone-950 sm:p-6">
              <p className="font-mono text-[11px] tracking-[0.16em] text-stone-500">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className={`mt-2 ${opp.h3MoMA}`}>{pillar.label}</h3>
              <p className={`mt-2 ${opp.body}`}>{pillar.proof}</p>
              <PillarLink href={pillar.href} label={pillar.hrefLabel} />
            </li>
        ))}
      </ul>
    </section>
  );
}
