'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { bitmPipelineNodes } from '@/content/born-into-the-machine/bitm-diagrams';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import {
  bitmPipelineTraces,
  bitmTraceSelectorStub,
} from '@/content/born-into-the-machine/bitm-pipeline-traces';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { useBitm, useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmPipelineDiagram() {
  const ref = useRef<HTMLElement>(null);
  const traceRef = useRef<HTMLDivElement>(null);
  useBitmChapterObserver('method', ref);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const { reducedMotion, isMobile, activeTraceCaseStudyId } = useBitm();
  const accent = getBitmChapterAccent('method');
  const [activeId, setActiveId] = useState<string | null>('plausibility-audit');

  const { scrollYProgress } = useScroll({
    target: traceRef,
    offset: ['start end', 'end start'],
  });

  const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, bitmPipelineNodes.length - 1]);
  const [scrubIndex, setScrubIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || isMobile) return;
    const unsub = scrollIndex.on('change', (v) => {
      setScrubIndex(Math.round(v));
    });
    return () => unsub();
  }, [scrollIndex, reducedMotion, isMobile]);

  const trace = bitmPipelineTraces[activeTraceCaseStudyId] ?? [];
  const active = bitmPipelineNodes.find((n) => n.id === activeId);
  const activeTrace = trace.find((t) => t.nodeId === activeId);

  const highlightedNodeId =
    !reducedMotion && !isMobile ? bitmPipelineNodes[scrubIndex]?.id : activeId;

  return (
    <section
      id="method"
      ref={ref}
      className="mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <BitmSectionHeader eyebrow="Chapter 04" title="The Method" iconKey="dataset" accent={accent} />
      <p className="mb-4 max-w-2xl text-lg leading-relaxed text-[#111111] dark:text-neutral-200">
        {bitmPage.methodIntro}
      </p>

      <div className="mb-8 max-w-2xl border-l-2 border-[#ff5c00] pl-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ff5c00]">
          {bitmPage.methodology.workingTitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#777777] dark:text-neutral-400">
          {bitmPage.methodology.longDefinition}
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]">
          Trace an artwork ·
        </span>
        {bitmTraceSelectorStub.map((t) => (
          <span
            key={t.id}
            className={cn(
              'border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em]',
              t.active
                ? 'border-[#ff5c00] bg-[#ff5c00]/10 text-[#111111]'
                : 'border-[#dedede] text-[#c4c4c4] dark:border-neutral-700',
            )}
            aria-disabled={!t.active}
          >
            {t.label}
            {!t.active ? ' (soon)' : null}
          </span>
        ))}
      </div>

      <div ref={traceRef} className="overflow-x-auto pb-4">
        <div className="flex min-w-max flex-col items-center gap-1 md:gap-2">
          {bitmPipelineNodes.map((node, index) => {
            const isPlausibility = node.id === 'plausibility-audit';
            const isHighlighted = highlightedNodeId === node.id || activeId === node.id;
            const traceNode = trace.find((t) => t.nodeId === node.id);

            return (
              <div key={node.id} className="flex flex-col items-center">
                <motion.button
                  type="button"
                  initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
                  animate={inView || reducedMotion ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: reducedMotion ? 0 : index * 0.06 }}
                  onClick={() => setActiveId(activeId === node.id ? null : node.id)}
                  className={cn(
                    'min-w-[240px] border px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.12em] transition-colors',
                    isPlausibility && 'border-[#ff5c00] ring-1 ring-[#ff5c00]/30',
                    !isPlausibility && accent.border,
                    isHighlighted ? accent.tint : 'bg-white dark:bg-neutral-950',
                    accent.hover,
                  )}
                >
                  {node.label}
                  {isPlausibility ? (
                    <span className="mt-1 block text-[8px] normal-case tracking-normal text-[#ff5c00]">
                      {'// THE GENERATED IMAGE IS NOT THE FINAL FORM.'}
                    </span>
                  ) : null}
                </motion.button>

                {traceNode && isHighlighted ? (
                  <div className="mt-2 flex max-w-[280px] items-start gap-2 px-2">
                    {traceNode.thumbnailUrl ? (
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden border border-[#dedede]">
                        <Image
                          src={traceNode.thumbnailUrl}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                    ) : null}
                    <div>
                      <p className="text-xs leading-snug text-[#111111] dark:text-neutral-200">
                        {traceNode.sentence}
                      </p>
                      {traceNode.marginalNote ? (
                        <p className="mt-1 font-mono text-[8px] text-[#ff5c00]">
                          {traceNode.marginalNote}
                        </p>
                      ) : null}
                      <Link
                        href={traceNode.caseStudyHref}
                        className="mt-1 inline-block font-mono text-[8px] uppercase text-[#777777] hover:text-[#ff5c00]"
                      >
                        View case study →
                      </Link>
                    </div>
                  </div>
                ) : null}

                {index < bitmPipelineNodes.length - 1 ? (
                  <ArrowDown className="my-1 h-4 w-4 text-[#c4c4c4]" aria-hidden />
                ) : (
                  <span className="my-1 font-mono text-sm text-[#ff5c00]" aria-hidden>
                    ↺
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {active ? (
        <div className="mt-6 grid gap-4 border border-[#dedede] p-5 dark:border-neutral-700 sm:grid-cols-2">
          <Detail label="What happens" value={active.what} />
          <Detail label="Tools" value={active.tools} />
          <Detail label="What can fail" value={active.failures} />
          <Detail label="Who participates" value={active.participants} />
          <Detail label="Ethics" value={active.ethics} className="sm:col-span-2" />
          {activeTrace?.marginalNote ? (
            <p className="font-mono text-[9px] text-[#ff5c00] sm:col-span-2">{activeTrace.marginalNote}</p>
          ) : null}
        </div>
      ) : (
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]">
          {isMobile ? 'Tap a node — tools, failures, participants, ethics' : 'Scroll or click a node — Baby AGI trace activates per stage'}
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
