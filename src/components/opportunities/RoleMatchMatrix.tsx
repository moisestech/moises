'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import type { Opportunity, RoleMatchRow } from '@/content/opportunities/types';
import { cn } from '@/lib/utils';

type RoleMatchMatrixProps = {
  opportunity: Opportunity;
};

function IllustrationFrame({
  src,
  alt,
  local,
}: {
  src: string;
  alt: string;
  local?: boolean;
}) {
  if (local) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 42rem"
      priority={false}
    />
  );
}

function rowKey(row: RoleMatchRow, index: number) {
  return `${row.requirement}::${index}`;
}

export function RoleMatchMatrix({ opportunity }: RoleMatchMatrixProps) {
  const headers = opportunity.roleMatchColumnHeaders ?? {
    left: 'Skill/Experience',
    right: 'Relevant experience',
  };

  const rows = opportunity.roleMatchRows;
  const storytelling = useMemo(() => rows.some((r) => r.illustration), [rows]);

  const firstIllustrated = useMemo(() => {
    const i = rows.findIndex((r) => r.illustration);
    return i >= 0 ? i : 0;
  }, [rows]);

  const [activeIndex, setActiveIndex] = useState(firstIllustrated);

  useEffect(() => {
    setActiveIndex(firstIllustrated);
  }, [firstIllustrated, rows]);

  const activeRow = rows[activeIndex];
  const activeIllustration = activeRow?.illustration;

  if (!storytelling) {
    return (
      <section id="fit" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
        <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">
          {opportunity.roleMatchSectionTitle ?? 'Role fit'}
        </h2>
        {opportunity.roleMatchIntro ? (
          <p className="mt-3 max-w-3xl text-sm text-stone-600">{opportunity.roleMatchIntro}</p>
        ) : null}
        <div className="mt-6 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-100 text-xs font-semibold uppercase tracking-wide text-stone-600">
              <tr>
                <th className="px-4 py-3 sm:w-[42%]">{headers.left}</th>
                <th className="px-4 py-3">{headers.right}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {rows.map((row, index) => (
                <tr key={rowKey(row, index)} className="align-top">
                  <td className="px-4 py-3 font-medium text-stone-900">{row.requirement}</td>
                  <td className="px-4 py-3 text-stone-700">{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  return (
    <section id="fit" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
      <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">
        {opportunity.roleMatchSectionTitle ?? 'Role fit'}
      </h2>
      {opportunity.roleMatchIntro ? (
        <p className="mt-3 max-w-3xl text-sm text-stone-600">{opportunity.roleMatchIntro}</p>
      ) : null}

      <p className="mt-4 text-xs text-stone-500 lg:hidden">
        Tap a row to see the visual that goes with that skill or experience.
      </p>
      <p className="mt-4 hidden text-xs text-stone-500 lg:block">
        Hover or focus a row — the image updates to match that line.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-start">
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-0 border-b border-stone-100 bg-stone-100 px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-stone-600 sm:px-4">
            <span>{headers.left}</span>
            <span className="hidden sm:inline">{headers.right}</span>
            <span className="sm:hidden">Relevance</span>
          </div>
          <ul className="divide-y divide-stone-100" role="list">
            {rows.map((row, index) => {
              const active = index === activeIndex;
              return (
                <li key={rowKey(row, index)}>
                  <button
                    type="button"
                    className={cn(
                      'w-full px-3 py-3 text-left transition-colors sm:px-4',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan-400',
                      active
                        ? 'bg-cyan-50/80 ring-1 ring-inset ring-cyan-200/80'
                        : 'hover:bg-stone-50/90',
                    )}
                    aria-current={active ? 'true' : undefined}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="grid gap-2 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-4">
                      <span className="text-sm font-medium text-stone-900">{row.requirement}</span>
                      <span className="text-sm text-stone-700">{row.evidence}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="relative overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-sm lg:sticky lg:top-28 lg:self-start"
          aria-live="polite"
        >
          <div className="relative aspect-[4/3] w-full">
            {activeIllustration ? (
              <div
                key={activeIndex}
                className="absolute inset-0 animate-in fade-in-0 duration-300 motion-reduce:animate-none"
              >
                <IllustrationFrame
                  src={activeIllustration.src}
                  alt={activeIllustration.alt}
                  local={activeIllustration.local}
                />
              </div>
            ) : (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-2 p-6 text-center text-sm text-stone-500">
                <p>No preview for this row yet.</p>
                <p className="text-xs text-stone-400">{activeRow?.requirement}</p>
              </div>
            )}
          </div>
          {activeRow ? (
            <div className="border-t border-stone-200 bg-white/95 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-500">
                {activeRow.requirement}
              </p>
              <p className="mt-1 text-sm text-stone-700">{activeRow.evidence}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
