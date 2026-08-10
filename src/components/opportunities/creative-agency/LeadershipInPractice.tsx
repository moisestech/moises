'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { LeadershipBlock } from '@/content/opportunities/creativeAgencyDossier';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { cn } from '@/lib/utils';

type LeadershipInPracticeProps = {
  data: LeadershipBlock;
  sectionId?: string;
  className?: string;
};

export function LeadershipInPractice({
  data,
  sectionId = 'leadership',
  className,
}: LeadershipInPracticeProps) {
  const accent = getOpportunityCompactAccent(sectionId);
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(data.points[0]?.id ?? null);

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
        Leadership evidence
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>
      <ul className="mt-8 space-y-3">
        {data.points.map((point, index) => {
          const open = openId === point.id;
          const panelId = `${baseId}-${point.id}`;
          return (
            <li
              key={point.id}
              className={cn(
                opp.card,
                'overflow-hidden border-l-[3px] transition',
                accent.rail,
                open ? accent.softBg : 'hover:shadow-md',
                open && 'shadow-sm',
              )}
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-start gap-3 px-4 py-4 text-left sm:px-5 sm:py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                onClick={() => setOpenId(open ? null : point.id)}
              >
                <span
                  className={cn(
                    'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums',
                    accent.navIdle,
                    accent.eyebrow,
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={cn(opp.h3MoMA, 'block')}>{point.title}</span>
                  {!open ? (
                    <span className={cn(opp.subtle, 'mt-1 line-clamp-2 block')}>{point.body}</span>
                  ) : null}
                </span>
                <ChevronDown
                  className={cn(
                    'mt-1 h-4 w-4 shrink-0 text-stone-400 transition motion-reduce:transition-none',
                    open && 'rotate-180 text-stone-600 dark:text-stone-300',
                  )}
                  aria-hidden
                />
              </button>
              {open ? (
                <div
                  id={panelId}
                  className="border-t border-stone-100 px-4 pb-5 pt-0 dark:border-stone-800 sm:px-5"
                >
                  <p className={cn(opp.body, 'pl-10 pt-4')}>{point.body}</p>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
