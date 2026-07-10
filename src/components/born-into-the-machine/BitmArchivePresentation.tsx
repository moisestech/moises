'use client';

import Image from 'next/image';
import type { BitmArchiveEntry } from '@/content/born-into-the-machine/bitm-case-studies';
import { BitmAssetPlaceholder } from '@/components/born-into-the-machine/BitmAssetPlaceholder';

export function BitmArchivePresentation({
  entries,
  title,
}: {
  entries: BitmArchiveEntry[];
  title: string;
}) {
  return (
    <div className="mt-4 border border-[#dedede] p-3 dark:border-neutral-700">
      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#777777]">
        Archive accumulation — {title}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {entries.map((entry) => (
          <figure key={entry.date + entry.caption} className="relative">
            <div className="relative aspect-square overflow-hidden border border-[#dedede] dark:border-neutral-700">
              <Image
                src={entry.imageUrl}
                alt={`${title} archive — ${entry.caption}`}
                fill
                className="object-cover"
                sizes="150px"
              />
              <span className="absolute left-1 top-1 bg-[#111111]/80 px-1.5 py-0.5 font-mono text-[8px] text-white">
                {entry.date}
              </span>
            </div>
            <figcaption className="mt-1 text-[10px] leading-snug text-[#777777]">
              {entry.caption}
            </figcaption>
          </figure>
        ))}
        <BitmAssetPlaceholder
          aspect="square"
          label="INDEXING"
          caption="Additional archive entries being indexed"
          className="min-h-0"
        />
      </div>
    </div>
  );
}
