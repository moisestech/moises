'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { bitmCaseStudies } from '@/content/born-into-the-machine/bitm-case-studies';

export function BitmContactSheetTransition() {
  const [collapsed, setCollapsed] = useState(false);
  const thumbs = bitmCaseStudies.slice(0, 5).map((s) => s.imageUrl);

  useEffect(() => {
    const t = setTimeout(() => setCollapsed(true), 1400);
    return () => clearTimeout(t);
  }, []);

  if (collapsed) return null;

  return (
    <div
      className="mb-8 flex gap-2 overflow-hidden border border-[#dedede] p-2 dark:border-neutral-700"
      aria-hidden
    >
      {thumbs.map((src, i) => (
        <div
          key={src}
          className="relative h-20 w-14 shrink-0 overflow-hidden opacity-80 transition-all duration-500"
          style={{
            transform: collapsed ? 'scale(0)' : `translateY(${i * 2}px)`,
            transitionDelay: `${i * 80}ms`,
          }}
        >
          <Image src={src} alt="" fill className="object-cover" sizes="56px" />
        </div>
      ))}
      <p className="self-center font-mono text-[9px] uppercase tracking-[0.14em] text-[#777777]">
        Contact sheet → selection
      </p>
    </div>
  );
}
