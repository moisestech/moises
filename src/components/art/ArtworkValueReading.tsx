'use client';

import { useEffect, useId, useState } from 'react';

type TermId = 'object' | 'content' | 'copy' | 'price' | 'ownership' | 'access';

const TERMS: { id: TermId; label: string; signal: string; reading: string }[] = [
  {
    id: 'object',
    label: 'Object',
    signal: '1 HARD DRIVE',
    reading: 'The carrier is an ordinary hard drive; the claim comes from what is stored inside.',
  },
  {
    id: 'content',
    label: 'Content',
    signal: '~1 TERABYTE',
    reading:
      'Copied software, games, music, and books whose retail prices were used to construct the claimed value.',
  },
  {
    id: 'copy',
    label: 'Copy',
    signal: 'COPY ≠ CONSUMPTION',
    reading:
      'Copying can multiply access without consuming the source the way a physical commodity is consumed.',
  },
  {
    id: 'price',
    label: 'Price',
    signal: '$5,000,000?',
    reading: 'The figure applies market prices to files that can circulate apart from the drive.',
  },
  {
    id: 'ownership',
    label: 'Ownership',
    signal: 'POSSESSION ≠ PERMISSION',
    reading:
      'Possessing the drive, owning the files, and having permission to use them are different forms of control.',
  },
  {
    id: 'access',
    label: 'Access',
    signal: 'ACCESS ≠ OWNERSHIP',
    reading:
      'The object concentrates access while leaving its legal and economic boundaries unresolved.',
  },
];

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

export default function ArtworkValueReading() {
  const [selected, setSelected] = useState<TermId>('object');
  const [preview, setPreview] = useState<TermId | null>(null);
  const reduced = useReducedMotion();
  const headingId = useId();
  const readingId = useId();
  const displayed = preview ?? selected;
  const active = TERMS.find((term) => term.id === displayed) ?? TERMS[0];

  return (
    <section className="mt-24 border-t border-gray-200 pt-16 dark:border-gray-800" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        A reading of the work
      </h2>
      <p className="mt-6 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
        What is worth five million?
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
        The same hard drive changes meaning depending on which system of value you look through.
      </p>

      <div className="mt-10 flex flex-wrap gap-x-2 gap-y-1" role="group" aria-label="Systems of value">
        {TERMS.map((term) => {
          const isOn = term.id === displayed;
          return (
            <button
              key={term.id}
              type="button"
              aria-pressed={term.id === selected}
              aria-describedby={term.id === displayed ? readingId : undefined}
              className={`min-h-11 px-3 text-left uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 ${
                reduced ? '' : 'transition-[opacity,transform] duration-300 ease-out'
              } ${
                isOn
                  ? 'text-base font-semibold text-neutral-950 dark:text-neutral-50'
                  : 'text-xs text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300'
              }`}
              onPointerEnter={(event) => {
                if (event.pointerType !== 'mouse') return;
                setPreview(term.id);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType !== 'mouse') return;
                setPreview((current) => (current === term.id ? null : current));
              }}
              onFocus={() => {
                setPreview(null);
                setSelected(term.id);
              }}
              onClick={() => {
                setPreview(null);
                setSelected(term.id);
              }}
            >
              {term.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 max-w-3xl border-t border-gray-200 pt-8 dark:border-gray-800">
        <div aria-live="polite">
          <p
            key={active.id}
            className={`max-w-full text-3xl font-medium leading-tight tracking-tight sm:text-5xl ${
              reduced ? '' : 'transition-opacity duration-300'
            }`}
          >
            {active.signal}
          </p>
          <p id={readingId} className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
            {active.reading}
          </p>
        </div>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">A reading of the artwork, not a valuation.</p>
      </div>
    </section>
  );
}
