'use client';

import type { BitmCredit } from '@/content/born-into-the-machine/bitm-types';
import { cn } from '@/lib/utils';

export function BitmCredits({ credits }: { credits: BitmCredit[] }) {
  if (!credits.length) return null;

  return (
    <div className="mt-4 border-t border-[#dedede] pt-3 dark:border-neutral-700">
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#777777]">
        Credits
      </p>
      <ul className="space-y-1">
        {credits.map((c) => (
          <li key={`${c.name}-${c.role}`} className="text-xs">
            {c.url ? (
              <a
                href={c.url}
                className="font-medium text-[#111111] underline-offset-2 hover:underline dark:text-neutral-100"
              >
                {c.name}
              </a>
            ) : (
              <span className="font-medium text-[#111111] dark:text-neutral-100">{c.name}</span>
            )}
            <span className="text-[#777777]"> — {c.role}</span>
            {c.status && c.status !== 'documented' ? (
              <span className={cn('ml-1 font-mono text-[8px] uppercase text-[#ff5c00]')}>
                ({c.status.replace('-', ' ')})
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
