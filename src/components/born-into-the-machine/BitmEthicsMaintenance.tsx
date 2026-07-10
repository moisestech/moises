'use client';

import { useRef, useState } from 'react';
import { bitmLifecycleSteps, bitmVisibleLabor, bitmInvisibleLabor } from '@/content/born-into-the-machine/bitm-diagrams';
import { bitmEthicsChecklist } from '@/content/born-into-the-machine/bitm-keywords';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmConceptualIcon } from '@/components/born-into-the-machine/icons/BitmConceptualIcons';
import { BitmLaborSplitDiagram } from '@/components/born-into-the-machine/BitmLaborSplitDiagram';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function BitmEthicsMaintenance() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('ethics', ref);
  const accent = getBitmChapterAccent('ethics');
  const [maintained, setMaintained] = useState(false);

  return (
    <section
      id="ethics"
      ref={ref}
      className="mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <BitmSectionHeader
        eyebrow="Chapter 07"
        title="Ethics & Maintenance"
        iconKey="consent"
        accent={accent}
      />
      <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#111111] dark:text-neutral-200">
        {bitmPage.ethicsIntro}
      </p>

      <div className="mb-10 flex flex-wrap items-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]">
          Artwork online
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={maintained}
          onClick={() => setMaintained(!maintained)}
          className={cn(
            'relative h-7 w-14 rounded-full border transition-colors',
            maintained ? 'border-[#ff5c00] bg-[#ff5c00]/20' : 'border-[#dedede] bg-[#faf8f4]',
          )}
        >
          <span
            className={cn(
              'absolute top-0.5 h-5 w-5 rounded-full bg-[#111111] transition-transform dark:bg-neutral-200',
              maintained ? 'left-7' : 'left-1',
            )}
          />
        </button>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]">
          Artwork maintained
        </span>
      </div>

      <ul className="mb-10 space-y-3">
        {bitmEthicsChecklist.map((item) => (
          <li
            key={item.id}
            className={cn(
              'flex items-start gap-3 border px-4 py-3 transition-opacity',
              maintained ? 'border-[#ff5c00]/40 bg-[#ff5c00]/5' : 'border-[#dedede] opacity-70',
            )}
          >
            <BitmConceptualIcon iconKey={item.iconKey} className="mt-0.5 shrink-0 text-[#ff5c00]" />
            <span className="text-sm text-[#111111] dark:text-neutral-200">{item.label}</span>
          </li>
        ))}
      </ul>

      <div className="mb-10 overflow-x-auto">
        <div className="flex min-w-max items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#777777]">
          {bitmLifecycleSteps.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              {step}
              {i < bitmLifecycleSteps.length - 1 ? <span className="text-[#ff5c00]">→</span> : null}
            </span>
          ))}
        </div>
      </div>

      <BitmLaborSplitDiagram />

      <p className="mt-8">
        <Link
          href="/research/born-into-the-machine/ethics-method"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#ff5c00] underline underline-offset-4"
        >
          Full ethics & method →
        </Link>
      </p>

      <BitmLaborReveal chapterId="ethics" />
    </section>
  );
}
