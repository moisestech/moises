'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type DesignForwardFdeLoopDiagramProps = {
  className?: string;
};

const NODES = [
  { id: 'frame', n: '01', label: 'Frame', sub: 'user problem' },
  { id: 'facilitate', n: '02', label: 'Facilitate', sub: 'mixed session' },
  { id: 'prototype', n: '03', label: 'Prototype', sub: 'human gate' },
  { id: 'test', n: '04', label: 'Test', sub: 'real users' },
  { id: 'teach', n: '05', label: 'Leave', sub: 'teaching artifact' },
] as const;

/**
 * Museum-legible proposed FDE thin-slice. Decorative — step copy lives in the process list.
 */
export function DesignForwardFdeLoopDiagram({ className }: DesignForwardFdeLoopDiagramProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={rootRef}
      className={cn(
        'overflow-hidden rounded-xl border border-stone-200 bg-[linear-gradient(160deg,#f7f3ee_0%,#efe8df_55%,#e8dfd4_100%)] dark:border-stone-700 dark:bg-[linear-gradient(160deg,#1c1917_0%,#292524_100%)]',
        className,
      )}
    >
      <svg
        viewBox="0 0 720 168"
        role="img"
        aria-label="Proposed design-forward FDE thin slice: frame, facilitate, prototype with a human gate, test, leave a teaching artifact"
        className="h-auto w-full"
      >
        <title>Proposed first engagement — design-forward FDE thin slice</title>
        {NODES.map((node, i) => {
          const x = 36 + i * 138;
          const delay = `${i * 90}ms`;
          return (
            <g
              key={node.id}
              className={cn(
                'origin-center transition-opacity duration-700 motion-reduce:transition-none',
                visible ? 'opacity-100' : 'opacity-0',
              )}
              style={{ transitionDelay: visible ? delay : '0ms' }}
            >
              {i < NODES.length - 1 ? (
                <path
                  d={`M${x + 104} 78 H${x + 130}`}
                  fill="none"
                  stroke="#a8a29e"
                  strokeWidth="1.25"
                  markerEnd="url(#fde-loop-arrow)"
                  className={cn(
                    'motion-safe:[stroke-dasharray:28] motion-safe:[stroke-dashoffset:28] motion-reduce:[stroke-dasharray:none] motion-reduce:[stroke-dashoffset:0]',
                    visible && 'motion-safe:animate-[fdeLoopDraw_700ms_ease-out_forwards]',
                  )}
                  style={{ animationDelay: visible ? delay : '0ms' }}
                />
              ) : null}
              <rect
                x={x}
                y={36}
                width="104"
                height="84"
                rx="8"
                fill="#fffbeb"
                stroke="#d6d3d1"
                strokeWidth="1"
                className="dark:fill-stone-900"
              />
              <text
                x={x + 12}
                y={56}
                fontSize="9"
                fontFamily="ui-monospace, monospace"
                className="fill-stone-500"
              >
                {node.n}
              </text>
              <text
                x={x + 12}
                y={78}
                fontSize="13"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontWeight="600"
                className="fill-stone-900 dark:fill-stone-100"
              >
                {node.label}
              </text>
              <text
                x={x + 12}
                y={96}
                fontSize="10"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                className="fill-stone-600 dark:fill-stone-400"
              >
                {node.sub}
              </text>
            </g>
          );
        })}
        <defs>
          <marker id="fde-loop-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#a8a29e" />
          </marker>
        </defs>
      </svg>
      <figcaption className="border-t border-stone-200/80 px-3 py-2 text-[11px] text-stone-500 dark:border-stone-700 dark:text-stone-400">
        Proposed first engagement — not completed Deloitte client work. Human approval sits on write-paths
        before handover.
      </figcaption>
      <style>{`
        @keyframes fdeLoopDraw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </figure>
  );
}
