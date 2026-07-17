'use client';

import { useCallback, useId, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { volverGlossary } from '@/content/grants/no-vacancy-2026/volver-a-valer';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

type GlossaryEntry = (typeof volverGlossary)[number];

function KeywordSpan({ entry }: { entry: GlossaryEntry }) {
  const reduce = useReducedMotion() ?? false;
  const popoverId = useId();
  const [open, setOpen] = useState(false);

  const activate = useCallback(() => setOpen(true), []);
  const deactivate = useCallback(() => setOpen(false), []);

  return (
    <span className="relative inline">
      <button
        type="button"
        className={cn(
          'inline font-semibold underline decoration-2 underline-offset-2 text-stone-900 dark:text-stone-50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800 dark:focus-visible:outline-stone-200',
          open && 'decoration-[3px]',
        )}
        aria-describedby={open ? popoverId : undefined}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        onFocus={activate}
        onBlur={deactivate}
        onClick={() => setOpen((prev) => !prev)}
      >
        {entry.term}
      </button>
      {open ? (
        <span
          id={popoverId}
          role="tooltip"
          className={cn(
            'absolute left-0 top-full z-30 mt-2 block w-[min(18rem,70vw)] border border-stone-300 bg-white p-3 text-left text-xs font-normal normal-case leading-relaxed shadow-md dark:border-stone-600 dark:bg-neutral-900',
            !reduce && 'motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150',
          )}
        >
          <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
            Glossary
          </span>
          <span className="text-stone-700 dark:text-stone-300">{entry.definition}</span>
        </span>
      ) : null}
    </span>
  );
}

export function VolverKeywordText({
  text,
  terms,
  className,
  as: Tag = 'p',
}: {
  text: string;
  /** Glossary term strings to highlight (matched case-insensitively) */
  terms?: readonly string[];
  className?: string;
  as?: 'p' | 'span' | 'div';
}) {
  const glossaryByTerm = useMemo(() => {
    const map = new Map<string, GlossaryEntry>();
    for (const entry of volverGlossary) {
      map.set(entry.term.toLowerCase(), entry);
    }
    return map;
  }, []);

  const resolved = useMemo(() => {
    const wanted = (terms ?? volverGlossary.map((g) => g.term))
      .map((t) => glossaryByTerm.get(t.toLowerCase()))
      .filter((e): e is GlossaryEntry => Boolean(e));
    return [...wanted].sort((a, b) => b.term.length - a.term.length);
  }, [terms, glossaryByTerm]);

  const parts = useMemo(() => {
    if (!resolved.length) return [{ text, entry: null as GlossaryEntry | null }];
    const pattern = new RegExp(`(${resolved.map((k) => escapeRegExp(k.term)).join('|')})`, 'gi');
    const segments = text.split(pattern).filter(Boolean);
    return segments.map((segment) => {
      const match = resolved.find((k) => segment.toLowerCase() === k.term.toLowerCase());
      return { text: segment, entry: match ?? null };
    });
  }, [text, resolved]);

  return (
    <Tag className={className}>
      {parts.map((part, index) =>
        part.entry ? (
          <KeywordSpan key={`${part.text}-${index}`} entry={part.entry} />
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        ),
      )}
    </Tag>
  );
}
