'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { BitmPhotoSequenceStep } from '@/content/born-into-the-machine/bitm-case-studies';
import { BitmAssetPlaceholder } from '@/components/born-into-the-machine/BitmAssetPlaceholder';
import { cn } from '@/lib/utils';

export function BitmPhotographicSequence({
  steps,
  title,
}: {
  steps: BitmPhotoSequenceStep[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const step = steps[index] ?? steps[0];
  const hasImage = step.imageUrl && step.imageStatus !== 'needed';

  return (
    <div className="mt-4 border border-[#dedede] p-3 dark:border-neutral-700">
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#777777]">
        Photographic sequence — {title}
      </p>
      <div className="relative mb-3 aspect-[4/3] overflow-hidden bg-[#faf8f4] dark:bg-neutral-900">
        {hasImage ? (
          <Image
            src={step.imageUrl!}
            alt={`${title} — ${step.label}`}
            fill
            className="object-cover"
            sizes="400px"
          />
        ) : (
          <BitmAssetPlaceholder
            aspect="portrait"
            caption={step.caption}
            className="h-full w-full border-0"
          />
        )}
        <span className="absolute left-2 top-2 bg-[#111111]/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white">
          {step.label}
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {steps.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              'border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] transition-colors',
              i === index
                ? 'border-[#ff5c00] bg-[#ff5c00]/10 text-[#111111]'
                : 'border-[#dedede] text-[#777777] hover:border-[#111111] dark:border-neutral-600',
            )}
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-[#111111] dark:text-neutral-300">{step.caption}</p>
    </div>
  );
}
