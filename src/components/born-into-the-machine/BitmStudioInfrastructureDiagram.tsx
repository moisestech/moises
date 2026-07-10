'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { bitmStudioInfrastructureNodes } from '@/content/born-into-the-machine/bitm-diagrams';
import {
  bitmInfrastructureCenterLabel,
  bitmInfrastructureDependencies,
} from '@/content/born-into-the-machine/bitm-institutions';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmStudioInfrastructureDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const { reducedMotion, isMobile } = useBitm();
  const [activeId, setActiveId] = useState<string>('artist');
  const [expanded, setExpanded] = useState(false);
  const [linesDrawn, setLinesDrawn] = useState(false);

  const orbit = bitmStudioInfrastructureNodes.filter((n) => n.id !== 'artist');
  const activeNode = bitmStudioInfrastructureNodes.find((n) => n.id === activeId);
  const dependencies = bitmInfrastructureDependencies[activeId] ?? [];

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (!linesDrawn) setLinesDrawn(true);
  };

  if (isMobile) {
    return (
      <div ref={ref} className="border border-[#c4c4c4]/40 bg-[#faf8f4]/50 p-4 dark:bg-neutral-900/50">
        <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-[#111111] dark:text-neutral-200">
          {bitmInfrastructureCenterLabel}
        </p>
        <div className="space-y-2">
          {bitmStudioInfrastructureNodes.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => handleSelect(node.id)}
              className={cn(
                'flex w-full items-center justify-between border px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.1em]',
                activeId === node.id
                  ? 'border-[#ff5c00] bg-[#ff5c00]/10'
                  : 'border-[#dedede] bg-white dark:border-neutral-600 dark:bg-neutral-900',
              )}
            >
              {node.label}
              {dependencies.includes(node.id) && activeId !== node.id ? (
                <span className="text-[#ff5c00]">↔</span>
              ) : null}
            </button>
          ))}
        </div>
        {activeNode ? (
          <p className="mt-4 text-sm leading-relaxed text-[#111111] dark:text-neutral-200">
            {activeNode.role}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative border border-[#c4c4c4]/40 bg-[#faf8f4]/50 p-6 dark:bg-neutral-900/50">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mb-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[#ff5c00] hover:underline"
      >
        {expanded ? 'Collapse network' : 'Expand studio → network'}
      </button>

      <div className="relative mx-auto flex min-h-[320px] max-w-lg items-center justify-center">
        <motion.button
          type="button"
          onClick={() => handleSelect('artist')}
          animate={expanded && !reducedMotion ? { scale: 1.05 } : { scale: 1 }}
          className={cn(
            'z-10 max-w-[200px] border-2 px-4 py-3 font-mono text-[9px] uppercase leading-snug tracking-wider',
            activeId === 'artist'
              ? 'border-[#ff5c00] bg-[#ff5c00]/10'
              : 'border-[#111111] bg-white dark:bg-neutral-950',
          )}
        >
          {bitmInfrastructureCenterLabel}
        </motion.button>

        {(expanded ? orbit : orbit.slice(0, 4)).map((node, i) => {
          const angle = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
          const r = expanded ? 130 : 85;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          const isDep = dependencies.includes(node.id);

          return (
            <motion.button
              key={node.id}
              type="button"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={inView || reducedMotion ? { opacity: 1, x, y } : {}}
              transition={{ delay: reducedMotion ? 0 : i * 0.05 }}
              onClick={() => handleSelect(node.id)}
              className={cn(
                'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                'border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em]',
                activeId === node.id
                  ? 'border-[#ff5c00] bg-[#ff5c00]/15 z-20'
                  : isDep && linesDrawn
                    ? 'border-[#ff5c00]/50 bg-[#ff5c00]/5 z-10'
                    : 'border-[#dedede] bg-white dark:border-neutral-600 dark:bg-neutral-900',
              )}
              style={{ marginLeft: x, marginTop: y }}
            >
              {node.label}
            </motion.button>
          );
        })}
      </div>

      {activeNode ? (
        <p className="mt-6 text-center text-sm leading-relaxed text-[#111111] dark:text-neutral-200">
          {activeNode.role}
        </p>
      ) : null}
    </div>
  );
}
