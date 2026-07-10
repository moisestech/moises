'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { bitmInstitutions } from '@/content/born-into-the-machine/bitm-institutions';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

const relationshipLabels: Record<string, string> = {
  studio: 'STUDIO',
  host: 'HOST',
  exhibition: 'EXHIBITION',
  education: 'EDUCATION',
  funder: 'FUNDER',
  partner: 'PARTNER',
  presentation: 'PRESENTATION',
};

export function BitmInstitutionBanner() {
  const { reducedMotion } = useBitm();
  const [index, setIndex] = useState(0);
  const institutions = bitmInstitutions;

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % institutions.length);
    }, 4000);
    return () => clearInterval(id);
  }, [reducedMotion, institutions.length]);

  const current = institutions[index];

  return (
    <div className="mt-8 overflow-hidden border border-[#c4c4c4]/40 bg-[#faf8f4]/50 dark:bg-neutral-900/50">
      <p className="border-b border-[#c4c4c4]/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777]">
        Institutional network
      </p>

      {reducedMotion ? (
        <ul className="grid gap-2 p-4 sm:grid-cols-2">
          {institutions.map((inst) => (
            <li key={inst.id} className="text-sm">
              <span className="font-medium text-[#111111] dark:text-neutral-100">{inst.name}</span>
              <span className="ml-2 font-mono text-[9px] uppercase text-[#ff5c00]">
                {relationshipLabels[inst.relationship]}
              </span>
              <p className="mt-0.5 text-xs text-[#777777]">{inst.caption}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative min-h-[120px] p-4">
          {institutions.map((inst, i) => (
            <div
              key={inst.id}
              className={cn(
                'transition-opacity duration-700',
                i === index ? 'opacity-100' : 'pointer-events-none absolute inset-4 opacity-0',
              )}
              aria-hidden={i !== index}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {inst.imageUrl ? (
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden border border-[#dedede] dark:border-neutral-700">
                    <Image
                      src={inst.imageUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                ) : null}
                <div>
                  <p className="font-semibold text-[#111111] dark:text-neutral-100">{inst.name}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#ff5c00]">
                    {relationshipLabels[inst.relationship]}
                  </p>
                  <p className="mt-1 text-sm text-[#777777] dark:text-neutral-400">{inst.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
