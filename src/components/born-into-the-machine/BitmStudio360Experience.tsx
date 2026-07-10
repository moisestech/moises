'use client';

import { useState } from 'react';
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { bitmStudioHotspots } from '@/content/born-into-the-machine/bitm-keywords';
import { cn } from '@/lib/utils';

export function BitmStudio360Experience() {
  const [embedVisible, setEmbedVisible] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777]">
          BAKEHOUSE ART COMPLEX · STUDIO 43
        </p>
        {!embedVisible ? (
          <button
            type="button"
            onClick={() => setEmbedVisible(true)}
            className="border border-[#111111] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white dark:border-neutral-300 dark:text-neutral-100"
          >
            Enter Studio 43
          </button>
        ) : null}
      </div>

      {embedVisible ? (
        <div className="relative aspect-[16/10] overflow-hidden border border-[#c4c4c4]/50 bg-black">
          <iframe
            src={bitmAssets.studio43.panoramaEmbedUrl}
            width="100%"
            height="100%"
            allowFullScreen
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            className="absolute inset-0 h-full w-full border-0"
            title="Moises Sanabria Studio 43 360 Tour — Bakehouse Art Complex"
          />
        </div>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden border border-[#c4c4c4]/50 bg-[#111111]/5">
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ff5c00]">
              360° Studio Tour
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#777777] dark:text-neutral-400">
              Primary documentation of Studio 43 at Bakehouse — distributed production environment
              with printers, GPUs, cables, and maintained infrastructure.
            </p>
          </div>
        </div>
      )}

      <p className="max-w-2xl text-sm leading-relaxed text-[#777777] dark:text-neutral-400">
        Studio practice extends beyond a single room — Bakehouse Studio 43, Oolite Digital Lab, and
        institutional partners form a distributed network for public art production.
      </p>

      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777]">
          Studio infrastructure index
        </p>
        <ol className="grid gap-3 sm:grid-cols-2">
          {bitmStudioHotspots.map((spot, i) => (
            <li
              key={spot.id}
              className="border border-[#dedede] p-4 dark:border-neutral-700"
            >
              <span className="font-mono text-[10px] text-[#ff5c00]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#111111] dark:text-neutral-100">
                {spot.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#777777] dark:text-neutral-400">
                {spot.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {bitmAssets.studio43.flatPhoto.status === 'needed' ? (
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#777777]">
          Flat Studio 43 photograph for image-positioned hotspots — planned next production pass
        </p>
      ) : null}

      <a
        href={bitmAssets.studio43.panoramaEmbedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] hover:text-[#ff5c00]',
        )}
      >
        Open 360 tour in new window ↗
      </a>
    </div>
  );
}
