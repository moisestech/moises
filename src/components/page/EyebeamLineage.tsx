'use client';

import { useEffect, useId, useState } from 'react';
import { EYEBEAM_INQUIRY } from '@/constants/eyebeam-inquiry';

type LineageRow = (typeof EYEBEAM_INQUIRY.lineage)[number];

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

export default function EyebeamLineage({
  rows,
  muted,
}: {
  rows: readonly LineageRow[];
  muted: string;
}) {
  const [selected, setSelected] = useState(rows[0]?.year ?? '2011');
  const [preview, setPreview] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const headingId = useId();
  const readingId = useId();
  const displayed = preview ?? selected;
  const active = rows.find((row) => row.year === displayed) ?? rows[0];

  return (
    <div className="mb-12 max-w-3xl sm:mb-16">
      <h2 id={headingId} className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        Practice lineage
      </h2>
      <p className="mt-4 text-2xl font-medium leading-tight sm:text-3xl">The subject changes. The method persists.</p>
      <div className="mt-8 border-b border-current/15" role="group" aria-labelledby={headingId}>
        {rows.map((row) => {
          const isOn = row.year === displayed;
          return (
            <div key={row.year} className="border-t border-current/15">
              <button
                type="button"
                aria-pressed={row.year === selected}
                aria-describedby={isOn ? readingId : undefined}
                className={`grid w-full grid-cols-1 gap-1 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 sm:grid-cols-[5.5rem_1fr] sm:gap-6 ${
                  reduced ? '' : 'transition-opacity duration-300'
                } ${isOn ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                onPointerEnter={(event) => {
                  if (event.pointerType !== 'mouse') return;
                  setPreview(row.year);
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType !== 'mouse') return;
                  setPreview((current) => (current === row.year ? null : current));
                }}
                onFocus={() => {
                  setPreview(null);
                  setSelected(row.year);
                }}
                onClick={() => {
                  setPreview(null);
                  setSelected(row.year);
                }}
              >
                <span className={`text-sm tabular-nums ${muted}`}>{row.year}</span>
                <span>
                  <span className={`block text-sm tracking-wide ${muted}`}>{row.terms}</span>
                  <span className="mt-1 block min-h-11 text-lg sm:text-xl">
                    {row.title}
                    {row.note ? (
                      <span className={`mt-1 block text-sm sm:ml-3 sm:mt-0 sm:inline ${muted}`}>{row.note}</span>
                    ) : null}
                  </span>
                </span>
              </button>
            </div>
          );
        })}
      </div>
      {active ? (
        <p id={readingId} aria-live="polite" className="mt-6 max-w-2xl text-lg leading-relaxed">
          {active.reading}
        </p>
      ) : null}
      <p className={`mt-8 text-sm tracking-wide ${muted}`}>
        Invisible system → familiar object or action → contradiction → material argument
      </p>
    </div>
  );
}
