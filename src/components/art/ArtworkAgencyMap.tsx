'use client';

import { useEffect, useId, useState } from 'react';
import { cn } from '@/lib/utils';

type NodeId = 'body' | 'treadmill' | 'work' | 'feed' | 'platform' | 'grass';

type Relation = {
  verb: string;
  direction: 'out' | 'in' | 'both';
  toward?: NodeId;
};

type AgentNode = {
  id: NodeId;
  label: string;
  x: number;
  y: number;
  relations: Relation[];
};

const NODES: AgentNode[] = [
  {
    id: 'body',
    label: 'Body',
    x: 16,
    y: 22,
    relations: [
      { verb: 'walks', direction: 'out', toward: 'treadmill' },
      { verb: 'codes', direction: 'out', toward: 'work' },
      { verb: 'scrolls', direction: 'out', toward: 'feed' },
      { verb: 'supplies attention', direction: 'out', toward: 'platform' },
      { verb: 'receives recommendations', direction: 'in', toward: 'feed' },
      { verb: 'treadmill sets pace', direction: 'in', toward: 'treadmill' },
    ],
  },
  {
    id: 'platform',
    label: 'Platform',
    x: 78,
    y: 16,
    relations: [
      { verb: 'selects', direction: 'out', toward: 'feed' },
      { verb: 'repeats', direction: 'out', toward: 'feed' },
      { verb: 'recommends', direction: 'out', toward: 'body' },
      { verb: 'captures attention', direction: 'out', toward: 'body' },
      { verb: 'receives behavioral input', direction: 'in', toward: 'body' },
    ],
  },
  {
    id: 'treadmill',
    label: 'Treadmill',
    x: 22,
    y: 52,
    relations: [
      { verb: 'sets pace', direction: 'out', toward: 'body' },
      { verb: 'measures movement', direction: 'out', toward: 'body' },
      { verb: 'keeps body moving', direction: 'out', toward: 'body' },
      { verb: 'becomes workstation infrastructure', direction: 'in', toward: 'work' },
    ],
  },
  {
    id: 'feed',
    label: 'Feed',
    x: 80,
    y: 50,
    relations: [
      { verb: 'recommends', direction: 'out', toward: 'body' },
      { verb: 'repeats', direction: 'out', toward: 'body' },
      { verb: 'refreshes', direction: 'out' },
      { verb: 'continues', direction: 'out' },
    ],
  },
  {
    id: 'work',
    label: 'Work',
    x: 14,
    y: 80,
    relations: [
      { verb: 'productivity', direction: 'out' },
      { verb: 'self-optimization', direction: 'out', toward: 'body' },
      { verb: 'labor', direction: 'out', toward: 'body' },
      { verb: 'entertainment', direction: 'both', toward: 'feed' },
    ],
  },
  {
    id: 'grass',
    label: 'Grass',
    x: 68,
    y: 78,
    relations: [
      { verb: 'interrupt', direction: 'out' },
      { verb: 'step away', direction: 'out' },
      { verb: 'pause', direction: 'out' },
      { verb: 'refuse?', direction: 'out' },
      { verb: 'return', direction: 'out', toward: 'treadmill' },
    ],
  },
];

const ARROW = { out: '→', in: '←', both: '↔' } as const;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(query.matches);
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);
  return reduced;
}

function place(node: AgentNode, activeId: NodeId | null, reduced: boolean) {
  if (!activeId || reduced || node.id !== activeId) return { x: node.x, y: node.y };
  return {
    x: node.x + (50 - node.x) * 0.42,
    y: node.y + (46 - node.y) * 0.42,
  };
}

export default function ArtworkAgencyMap() {
  const [activeId, setActiveId] = useState<NodeId | null>(null);
  const reduced = useReducedMotion();
  const headingId = useId();
  const readingId = useId();
  const active = NODES.find((node) => node.id === activeId) ?? null;
  const linked = new Set(
    active?.relations.map((relation) => relation.toward).filter((id): id is NodeId => Boolean(id))
  );

  return (
    <section className="mt-24 border-t border-gray-200 pt-16 dark:border-gray-800" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        Who acts?
      </h2>
      <p className="mt-6 max-w-3xl text-2xl font-medium leading-tight md:text-3xl">
        The apparent agent changes depending on where you stand in the system.
      </p>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">A reading of the artwork, not a measurement.</p>

      <div
        className="relative mt-12 h-[32rem] overflow-hidden sm:h-[40rem]"
        onPointerLeave={(event) => {
          if (event.pointerType !== 'mouse') return;
          const next = event.relatedTarget;
          if (next instanceof Node && event.currentTarget.contains(next)) return;
          if (event.currentTarget.contains(document.activeElement)) return;
          setActiveId(null);
        }}
        onBlur={(event) => {
          const next = event.relatedTarget;
          if (next instanceof Node && event.currentTarget.contains(next)) return;
          setActiveId(null);
        }}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-neutral-400 dark:text-neutral-500"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {active && active.id !== 'grass'
            ? active.relations
                .filter((relation) => relation.toward)
                .map((relation) => {
                  const target = NODES.find((node) => node.id === relation.toward);
                  if (!target) return null;
                  const from = place(active, activeId, reduced);
                  const to = place(target, activeId, reduced);
                  return (
                    <line
                      key={`${active.id}-${relation.verb}`}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke="currentColor"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                      className="opacity-80"
                    />
                  );
                })
            : null}
        </svg>

        {active?.id === 'grass' ? (
          <p className="pointer-events-none absolute left-1/2 top-[42%] max-w-[12rem] -translate-x-1/2 text-center text-sm uppercase tracking-[0.2em] text-neutral-800 dark:text-neutral-100">
            Interruption / refusal?
          </p>
        ) : null}

        {NODES.map((node) => {
          const position = place(node, activeId, reduced);
          const selected = activeId === node.id;
          const quiet = activeId && !selected && (activeId === 'grass' || !linked.has(node.id));
          return (
            <button
              key={node.id}
              type="button"
              aria-pressed={selected}
              aria-describedby={readingId}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') setActiveId(node.id);
              }}
              onFocus={() => setActiveId(node.id)}
              onClick={() => setActiveId(node.id)}
              style={{ left: `${position.x}%`, top: `${position.y}%` }}
              className={cn(
                'absolute min-h-11 -translate-x-1/2 -translate-y-1/2 px-1 text-left text-xs font-semibold uppercase tracking-[0.18em] transition-[left,top,opacity] duration-500 ease-out motion-reduce:transition-none',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100',
                selected
                  ? 'text-neutral-950 underline decoration-neutral-950 decoration-1 underline-offset-8 dark:text-white dark:decoration-white'
                  : 'text-neutral-700 dark:text-neutral-300',
                quiet ? 'opacity-25' : 'opacity-100'
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'mb-2 block h-1.5 w-1.5 rounded-full',
                  selected ? 'bg-neutral-950 dark:bg-white' : 'bg-neutral-400 dark:bg-neutral-500'
                )}
              />
              {node.label}
            </button>
          );
        })}
      </div>

      <div id={readingId} aria-live="polite" className="mt-8 max-w-xl">
        {active ? (
          <>
            <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">From {active.label}</p>
            <ul className="mt-3 space-y-1 text-base leading-relaxed">
              {active.relations.map((relation) => (
                <li key={relation.verb}>
                  <span aria-hidden="true">{ARROW[relation.direction]} </span>
                  {relation.verb}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
            The positions stay apart until one is chosen.
          </p>
        )}
      </div>
    </section>
  );
}
