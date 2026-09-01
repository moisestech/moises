'use client';

import { useEffect, useState } from 'react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type FdeTypedLineProps = {
  quote: string;
  className?: string;
};

export function FdeTypedLine({ quote, className }: FdeTypedLineProps) {
  const [shown, setShown] = useState('');
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduceMotion(reduce);
    if (reduce) {
      setShown(quote);
      return;
    }

    let i = 0;
    let timeout: number;
    const type = () => {
      i += 1;
      setShown(quote.slice(0, i));
      if (i < quote.length) {
        timeout = window.setTimeout(type, 28);
      } else {
        timeout = window.setTimeout(() => {
          i = 0;
          setShown('');
          timeout = window.setTimeout(type, 400);
        }, 2400);
      }
    };
    timeout = window.setTimeout(type, 200);
    return () => window.clearTimeout(timeout);
  }, [quote]);

  return (
    <figure
      className={cn(
        'mx-auto max-w-3xl overflow-hidden rounded-xl border border-stone-300 bg-stone-950 px-4 py-4 text-left dark:border-cyan-700/60',
        className,
      )}
    >
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
        fde // path
      </p>
      <blockquote className={cn(opp.bodyLg, 'mt-2 font-mono text-pretty text-cyan-100')}>
        <span>{shown}</span>
        {reduceMotion ? null : (
          <span
            aria-hidden
            className="ml-0.5 inline-block h-[1em] w-[0.55ch] translate-y-[0.1em] bg-cyan-400 align-baseline motion-safe:animate-pulse"
          />
        )}
      </blockquote>
    </figure>
  );
}
