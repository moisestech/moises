'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { bitmStudioInfrastructureNodes } from '@/content/born-into-the-machine/bitm-diagrams';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmStudioInfrastructureDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const { reducedMotion } = useBitm();
  const [activeId, setActiveId] = useState<string | null>('studio');
  const [expanded, setExpanded] = useState(false);

  const orbit = bitmStudioInfrastructureNodes.filter((n) => n.id !== 'artist');

  return (
    <div ref={ref} className="relative border border-[#c4c4c4]/40 bg-[#faf8f4]/50 p-6 dark:bg-neutral-900/50">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mb-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[#ff5c00] hover:underline"
      >
        {expanded ? 'Collapse network' : 'Expand studio → network'}
      </button>

      <div className="relative mx-auto flex min-h-[280px] max-w-lg items-center justify-center">
        <motion.button
          type="button"
          onClick={() => setActiveId('artist')}
          animate={expanded && !reducedMotion ? { scale: 1.1 } : { scale: 1 }}
          className={cn(
            'z-10 border-2 px-6 py-4 font-mono text-xs uppercase tracking-wider',
            activeId === 'artist'
              ? 'border-[#ff5c00] bg-[#ff5c00]/10'
              : 'border-[#111111] bg-white dark:bg-neutral-950',
          )}
        >
          Studio
        </motion.button>

        {(expanded ? orbit : orbit.slice(0, 4)).map((node, i) => {
          const angle = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
          const r = expanded ? 120 : 80;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;

          return (
            <motion.button
              key={node.id}
              type="button"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={inView || reducedMotion ? { opacity: 1, x, y } : {}}
              transition={{ delay: reducedMotion ? 0 : i * 0.05 }}
              onClick={() => setActiveId(node.id)}
              className={cn(
                'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                'border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em]',
                activeId === node.id
                  ? 'border-[#ff5c00] bg-[#ff5c00]/15 z-20'
                  : 'border-[#dedede] bg-white dark:border-neutral-600 dark:bg-neutral-900',
              )}
              style={{ marginLeft: x, marginTop: y }}
            >
              {node.label}
            </motion.button>
          );
        })}
      </div>

      {activeId ? (
        <p className="mt-6 text-center text-sm text-[#111111] dark:text-neutral-200">
          {bitmStudioInfrastructureNodes.find((n) => n.id === activeId)?.role}
        </p>
      ) : null}
    </div>
  );
}
