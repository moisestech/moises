'use client';

import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import { ArrowLeftRight, ChevronLeft, ChevronRight, Crosshair } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  provenanceDemo,
  type ProvenanceNode,
  type ProvenanceOutput,
} from '@/content/opportunities/comfy/workSample';

function nodeCenter(node: ProvenanceNode) {
  return { x: node.x, y: node.y };
}

export function OutputProvenanceExplorer() {
  const headingId = useId();
  const selectable = useMemo(
    () => provenanceDemo.outputs.filter((o) => o.state === 'ok'),
    [],
  );
  const [selectedId, setSelectedId] = useState(selectable[0]?.id ?? provenanceDemo.outputs[0].id);
  const [compareId, setCompareId] = useState<string | null>(null);
  const [jumpFlash, setJumpFlash] = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const selected = provenanceDemo.outputs.find((o) => o.id === selectedId) ?? provenanceDemo.outputs[0];
  const compare = compareId ? provenanceDemo.outputs.find((o) => o.id === compareId) : null;
  const activeNodeIds = new Set(selected.nodeIds);

  const selectByIndex = useCallback(
    (delta: number) => {
      const idx = selectable.findIndex((o) => o.id === selectedId);
      if (idx < 0) return;
      const next = selectable[(idx + delta + selectable.length) % selectable.length];
      if (next) setSelectedId(next.id);
    },
    [selectable, selectedId],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, [contenteditable="true"]')) return;
      const root = document.getElementById('provenance-explorer');
      if (!root) return;
      const inView = root.getBoundingClientRect().top < window.innerHeight && root.getBoundingClientRect().bottom > 0;
      if (!inView) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        selectByIndex(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        selectByIndex(1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectByIndex]);

  const jumpToSource = () => {
    const first = selected.nodeIds[0];
    if (!first) return;
    setJumpFlash(first);
    window.setTimeout(() => setJumpFlash(null), reduceMotion ? 0 : 900);
  };

  return (
    <section
      id="provenance-explorer"
      className="scroll-mt-28 border-t border-stone-200 py-12 dark:border-stone-800 sm:scroll-mt-32 sm:py-16"
      aria-labelledby={headingId}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-yellow-700 dark:text-yellow-400">
        Interactive proof · static mock data
      </p>
      <h2
        id={headingId}
        className="mt-2 text-2xl font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-3xl"
      >
        Output Provenance Explorer
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">
        A contained frontend demonstration: select a generated output to highlight its source nodes,
        inspect metadata, compare two frames, and jump to the producing path. No backend — typed mock
        data only. Use ← → when this section is in view.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-stone-300 bg-stone-950 text-stone-100 shadow-sm dark:border-stone-700">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 px-3 py-2.5 sm:px-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400">
            Workflow · output inspector
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => selectByIndex(-1)}
              className="inline-flex min-h-9 items-center gap-1 rounded-md border border-stone-700 px-2.5 text-xs font-medium hover:border-yellow-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
              Prev
            </button>
            <button
              type="button"
              onClick={() => selectByIndex(1)}
              className="inline-flex min-h-9 items-center gap-1 rounded-md border border-stone-700 px-2.5 text-xs font-medium hover:border-yellow-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              Next
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={jumpToSource}
              className="inline-flex min-h-9 items-center gap-1 rounded-md border border-yellow-500/50 bg-yellow-400/10 px-2.5 text-xs font-medium text-yellow-200 hover:bg-yellow-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              <Crosshair className="h-3.5 w-3.5" aria-hidden />
              Jump to source node
            </button>
            <button
              type="button"
              onClick={() =>
                setCompareId((prev) => {
                  if (prev) return null;
                  const other = selectable.find((o) => o.id !== selectedId);
                  return other?.id ?? null;
                })
              }
              className="inline-flex min-h-9 items-center gap-1 rounded-md border border-stone-700 px-2.5 text-xs font-medium hover:border-yellow-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              aria-pressed={Boolean(compareId)}
            >
              <ArrowLeftRight className="h-3.5 w-3.5" aria-hidden />
              {compareId ? 'Exit compare' : 'Compare'}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_1fr]">
          <div className="relative min-h-[240px] border-b border-stone-800 p-3 sm:min-h-[280px] sm:p-4 lg:border-b-0 lg:border-r">
            <GraphCanvas
              nodes={provenanceDemo.nodes}
              edges={provenanceDemo.edges}
              activeNodeIds={activeNodeIds}
              jumpFlash={jumpFlash}
              reduceMotion={reduceMotion}
            />
          </div>

          <div className="flex flex-col gap-4 p-3 sm:p-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                Outputs
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3" role="listbox" aria-label="Generated outputs">
                {provenanceDemo.outputs.map((output) => (
                  <OutputThumb
                    key={output.id}
                    output={output}
                    selected={output.id === selectedId}
                    compared={output.id === compareId}
                    onSelect={() => setSelectedId(output.id)}
                    onCompareToggle={() => {
                      if (output.state !== 'ok') return;
                      setCompareId((prev) => (prev === output.id ? null : output.id));
                    }}
                  />
                ))}
              </ul>
            </div>

            <DetailsPanel selected={selected} compare={compare ?? null} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OutputThumb({
  output,
  selected,
  compared,
  onSelect,
  onCompareToggle,
}: {
  output: ProvenanceOutput;
  selected: boolean;
  compared: boolean;
  onSelect: () => void;
  onCompareToggle: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        role="option"
        aria-selected={selected}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === 'c' || e.key === 'C') {
            e.preventDefault();
            onCompareToggle();
          }
        }}
        className={cn(
          'group w-full overflow-hidden rounded-lg border text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400',
          selected
            ? 'border-yellow-400 ring-1 ring-yellow-400/60'
            : 'border-stone-700 hover:border-stone-500',
          compared && 'ring-1 ring-cyan-400/70',
        )}
      >
        <div
          className={cn(
            'relative aspect-[4/3] bg-gradient-to-br',
            output.thumbTone,
            output.state === 'empty' && 'opacity-50',
            output.state === 'error' && 'opacity-80',
          )}
        >
          {output.state === 'empty' ? (
            <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-wider text-stone-400">
              Empty
            </span>
          ) : null}
          {output.state === 'error' ? (
            <span className="absolute inset-0 flex items-center justify-center bg-red-950/40 text-[10px] font-semibold uppercase tracking-wider text-red-200">
              Error
            </span>
          ) : null}
        </div>
        <div className="border-t border-stone-800 px-2 py-1.5">
          <p className="truncate text-[11px] font-medium text-stone-200">{output.title}</p>
        </div>
      </button>
    </li>
  );
}

function DetailsPanel({
  selected,
  compare,
}: {
  selected: ProvenanceOutput;
  compare: ProvenanceOutput | null;
}) {
  const rows = [
    { k: 'Seed', v: selected.seed || '—' },
    { k: 'Steps', v: selected.steps || '—' },
    { k: 'Model', v: selected.model },
    { k: 'Sampler', v: selected.sampler },
  ];

  return (
    <div className="rounded-xl border border-stone-800 bg-stone-900/80 p-3 sm:p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500">
        Parameters
      </p>
      <dl className="mt-2 grid grid-cols-2 gap-2 text-xs">
        {rows.map((row) => (
          <div key={row.k} className="rounded-md bg-stone-950/70 px-2 py-1.5">
            <dt className="text-stone-500">{row.k}</dt>
            <dd className="mt-0.5 font-medium text-stone-100">{row.v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500">
        Prompt
      </p>
      <p className="mt-1 text-xs leading-relaxed text-stone-300">{selected.prompt}</p>

      {compare ? (
        <div className="mt-4 border-t border-stone-800 pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-400/90">
            Comparing with {compare.title}
          </p>
          <p className="mt-1 text-xs text-stone-400">
            Seed {compare.seed} · {compare.sampler} · {compare.steps} steps
          </p>
          <p className="mt-1 text-xs leading-relaxed text-stone-400">{compare.prompt}</p>
        </div>
      ) : null}

      {selected.state === 'error' ? (
        <p className="mt-3 rounded-md border border-red-500/40 bg-red-950/40 px-2 py-1.5 text-xs text-red-200">
          Error state example — decode failed before Save Image. Source path stops at KSampler.
        </p>
      ) : null}
      {selected.state === 'empty' ? (
        <p className="mt-3 rounded-md border border-stone-600 bg-stone-950/60 px-2 py-1.5 text-xs text-stone-400">
          Empty state example — no provenance graph to highlight.
        </p>
      ) : null}
    </div>
  );
}

function GraphCanvas({
  nodes,
  edges,
  activeNodeIds,
  jumpFlash,
  reduceMotion,
}: {
  nodes: readonly ProvenanceNode[];
  edges: readonly [string, string][];
  activeNodeIds: Set<string>;
  jumpFlash: string | null;
  reduceMotion: boolean;
}) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg viewBox="0 0 100 80" className="h-full w-full" role="img" aria-label="Simplified node workflow">
      {edges.map(([from, to]) => {
        const a = byId[from];
        const b = byId[to];
        if (!a || !b) return null;
        const ac = nodeCenter(a);
        const bc = nodeCenter(b);
        const active = activeNodeIds.has(from) && activeNodeIds.has(to);
        return (
          <g key={`${from}-${to}`}>
            <path
              d={`M ${ac.x} ${ac.y} C ${(ac.x + bc.x) / 2} ${ac.y}, ${(ac.x + bc.x) / 2} ${bc.y}, ${bc.x} ${bc.y}`}
              fill="none"
              stroke={active ? '#facc15' : '#44403c'}
              strokeWidth={active ? 0.55 : 0.35}
              opacity={active ? 1 : 0.55}
              className={cn(!reduceMotion && active && 'origin-center')}
              style={
                !reduceMotion && active
                  ? { strokeDasharray: 4, animation: 'dash 1.2s linear infinite' }
                  : undefined
              }
            />
          </g>
        );
      })}
      {nodes.map((node) => {
        const active = activeNodeIds.has(node.id);
        const flash = jumpFlash === node.id;
        return (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <rect
              x={-7}
              y={-5}
              width={14}
              height={10}
              rx={1.4}
              fill={active ? '#1c1917' : '#0c0a09'}
              stroke={flash ? '#22d3ee' : active ? '#facc15' : '#57534e'}
              strokeWidth={flash ? 0.7 : 0.4}
            />
            <text
              textAnchor="middle"
              y={1.2}
              className="fill-stone-200"
              style={{ fontSize: '2.4px', fontWeight: 600 }}
            >
              {node.label}
            </text>
          </g>
        );
      })}
      <style>{`@keyframes dash { to { stroke-dashoffset: -16; } }`}</style>
    </svg>
  );
}
