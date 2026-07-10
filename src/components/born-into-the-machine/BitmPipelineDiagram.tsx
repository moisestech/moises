'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { bitmPipelineNodes } from '@/content/born-into-the-machine/bitm-diagrams';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { BitmCursorLens } from '@/components/born-into-the-machine/BitmCursorLens';
import { useBitm, useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmPipelineDiagram() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('method', ref);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const { reducedMotion } = useBitm();
  const accent = getBitmChapterAccent('method');
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = bitmPipelineNodes.find((n) => n.id === activeId);

  return (
    <section
      id="method"
      ref={ref}
      className="mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <BitmSectionHeader eyebrow="Chapter 04" title="The Method" iconKey="dataset" accent={accent} />
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#111111] dark:text-neutral-200">
        {bitmPage.methodIntro}
      </p>

      <BitmCursorLens caption="Pipeline wireframe layer">
        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-max flex-col items-center gap-1 md:gap-2">
            {bitmPipelineNodes.map((node, index) => (
              <div key={node.id} className="flex flex-col items-center">
                <motion.button
                  type="button"
                  initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
                  animate={inView || reducedMotion ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: reducedMotion ? 0 : index * 0.06 }}
                  onClick={() => setActiveId(activeId === node.id ? null : node.id)}
                  className={cn(
                    'min-w-[220px] border px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.12em] transition-colors',
                    accent.border,
                    activeId === node.id ? accent.tint : 'bg-white dark:bg-neutral-950',
                    accent.hover,
                  )}
                >
                  {node.label}
                </motion.button>
                {index < bitmPipelineNodes.length - 1 ? (
                  <ArrowDown className="my-1 h-4 w-4 text-[#c4c4c4]" aria-hidden />
                ) : (
                  <span className="my-1 font-mono text-sm text-[#ff5c00]" aria-hidden>
                    ↺
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </BitmCursorLens>

      {active ? (
        <div className="mt-6 grid gap-4 border border-[#dedede] p-5 dark:border-neutral-700 sm:grid-cols-2">
          <Detail label="What happens" value={active.what} />
          <Detail label="Tools" value={active.tools} />
          <Detail label="What can fail" value={active.failures} />
          <Detail label="Who participates" value={active.participants} />
          <Detail label="Ethics" value={active.ethics} className="sm:col-span-2" />
        </div>
      ) : (
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]">
          Click a node — tools, failures, participants, ethics
        </p>
      )}

      <BitmLaborReveal chapterId="method" />
    </section>
  );
}

function Detail({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#ff5c00]">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-[#111111] dark:text-neutral-200">{value}</p>
    </div>
  );
}
