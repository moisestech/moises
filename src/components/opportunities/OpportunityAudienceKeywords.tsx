'use client';

import { Fragment, useId } from 'react';
import type { OpportunityAudienceKeywords as OpportunityAudienceKeywordsData } from '@/content/opportunities/types';
import { cn } from '@/lib/utils';

type OpportunityAudienceKeywordsProps = {
  data: OpportunityAudienceKeywordsData;
  className?: string;
};

function SeparatorBefore({ index, total }: { index: number; total: number }) {
  if (index === 0) return null;
  if (total === 2) {
    return (
      <>
        {' '}
        <span aria-hidden className="text-stone-400 dark:text-stone-500">
          and
        </span>{' '}
      </>
    );
  }
  if (index === total - 1) {
    return (
      <>
        <span aria-hidden className="text-stone-400">
          , and{' '}
        </span>
      </>
    );
  }
  return (
    <>
      <span aria-hidden className="text-stone-400 dark:text-stone-500">
        ,{' '}
      </span>
    </>
  );
}

function KeywordControl({
  label,
  detail,
  baseId,
  index,
}: {
  label: string;
  detail?: string;
  baseId: string;
  index: number;
}) {
  const tipId = detail ? `${baseId}-tip-${index}` : undefined;

  return (
    <span className="group relative inline-block align-baseline">
      <button
        type="button"
        className={cn(
          'relative mx-0.5 inline-flex min-h-[44px] max-w-full items-center rounded-md px-2 py-2 text-left text-base font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:min-h-0 sm:px-1.5 sm:py-1 sm:text-lg',
          'transition-[transform,box-shadow,color,background-color] duration-200 motion-reduce:transition-none',
          'hover:-translate-y-0.5 hover:text-cyan-600 dark:hover:text-cyan-400 motion-reduce:hover:translate-y-0',
          'hover:bg-gradient-to-b hover:from-cyan-50/90 hover:to-transparent dark:hover:from-cyan-950/50 dark:hover:to-transparent hover:shadow-[0_8px_28px_-6px_rgba(34,211,238,0.45)]',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400',
          'active:scale-[0.98] motion-reduce:active:scale-100',
          "after:pointer-events-none after:absolute after:inset-x-1 after:bottom-1 after:h-[2px] after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-teal-400 after:transition-transform after:duration-300 after:content-['']",
          'hover:after:scale-x-100 focus-visible:after:scale-x-100',
        )}
        aria-describedby={tipId}
      >
        {label}
      </button>
      {detail ? (
        <span
          id={tipId}
          role="tooltip"
          className={cn(
            'pointer-events-none invisible absolute left-1/2 top-full z-20 mt-2 w-max max-w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-1 scale-95 rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-900 px-3 py-2 text-left text-xs font-normal leading-snug text-stone-700 dark:text-stone-300 opacity-0 shadow-lg',
            'transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none',
            'group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100',
            'group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100',
          )}
        >
          {detail}
        </span>
      ) : null}
    </span>
  );
}

/**
 * Sentence-style, hoverable focus keywords for recruiting dossiers (mobile: large tap targets + same tooltips on focus).
 */
export function OpportunityAudienceKeywords({ data, className }: OpportunityAudienceKeywordsProps) {
  const { lead, terms } = data;
  const baseId = useId();
  const n = terms.length;

  if (!n) return null;

  return (
    <div className={cn('mb-8 text-center font-[\'MoMA_Sans\']', className)}>
      {lead ? (
        <p className="mx-auto mb-3 max-w-2xl text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">{lead}</p>
      ) : null}
      <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-stone-800 dark:text-stone-200 sm:text-lg">
        {terms.map((term, index) => (
          <Fragment key={`${term.label}-${index}`}>
            <SeparatorBefore index={index} total={n} />
            <KeywordControl
              label={term.label}
              detail={term.detail}
              baseId={baseId}
              index={index}
            />
          </Fragment>
        ))}
      </p>
    </div>
  );
}
