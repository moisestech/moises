'use client';

import { useCallback, useId, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { WolfsonianKeyword } from '@/content/grants/wolfsonian-fellowship';
import { normalizeHighlights, resolveKeyword } from '@/content/grants/wolfsonian-keywords';
import type { WolfsonianSectionAccent } from '@/config/wolfsonian-section-theme';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

type KeywordSpanProps = {
  keyword: WolfsonianKeyword;
  accent: WolfsonianSectionAccent;
  activeKeyword?: string | null;
  onKeywordActivate?: (term: string | null) => void;
};

function KeywordSpan({ keyword, accent, activeKeyword, onKeywordActivate }: KeywordSpanProps) {
  const reduce = useReducedMotion() ?? false;
  const popoverId = useId();
  const [open, setOpen] = useState(false);
  const hasReveal = Boolean(keyword.description);
  const isActive = activeKeyword?.toLowerCase() === keyword.term.toLowerCase();

  const handleActivate = useCallback(() => {
    onKeywordActivate?.(keyword.term);
    if (hasReveal) setOpen(true);
  }, [hasReveal, keyword.term, onKeywordActivate]);

  const handleDeactivate = useCallback(() => {
    setOpen(false);
    onKeywordActivate?.(null);
  }, [onKeywordActivate]);

  if (!hasReveal) {
    return (
      <strong className={cn('font-semibold underline decoration-2 underline-offset-2', accent.keywordUnderline, accent.keywordActive)}>
        {keyword.term}
      </strong>
    );
  }

  return (
    <span className="relative inline">
      <button
        type="button"
        className={cn(
          'inline font-semibold underline decoration-2 underline-offset-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          accent.keywordUnderline,
          isActive || open ? accent.keywordActive : 'text-stone-900 dark:text-stone-50',
          open && 'decoration-[3px]',
        )}
        aria-describedby={open ? popoverId : undefined}
        onMouseEnter={handleActivate}
        onMouseLeave={handleDeactivate}
        onFocus={handleActivate}
        onBlur={handleDeactivate}
        onClick={() => setOpen((prev) => !prev)}
      >
        {keyword.term}
      </button>
      {open ? (
        <span
          id={popoverId}
          role="tooltip"
          className={cn(
            'absolute left-0 top-full z-30 mt-2 block w-[min(18rem,70vw)] border bg-white p-3 text-left text-xs font-normal normal-case leading-relaxed shadow-md dark:bg-neutral-900',
            accent.mediaBorder,
            !reduce && 'motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150',
          )}
        >
          {keyword.label ? (
            <span className={cn('mb-1 block text-[0.65rem] font-semibold uppercase tracking-wide', accent.eyebrow)}>
              {keyword.label}
            </span>
          ) : null}
          <span className="text-stone-700 dark:text-stone-300">{keyword.description}</span>
        </span>
      ) : null}
    </span>
  );
}

export function WolfsonianKeywordText({
  text,
  highlights = [],
  accent,
  activeKeyword,
  onKeywordActivate,
  className,
}: {
  text: string;
  highlights?: (string | WolfsonianKeyword)[];
  accent: WolfsonianSectionAccent;
  activeKeyword?: string | null;
  onKeywordActivate?: (term: string | null) => void;
  className?: string;
}) {
  const resolved = useMemo(() => normalizeHighlights(highlights), [highlights]);

  const parts = useMemo(() => {
    if (!resolved.length) return [{ text, keyword: null as WolfsonianKeyword | null }];

    const sorted = [...resolved].sort((a, b) => b.term.length - a.term.length);
    const pattern = new RegExp(`(${sorted.map((k) => escapeRegExp(k.term)).join('|')})`, 'gi');
    const segments = text.split(pattern).filter(Boolean);

    return segments.map((segment) => {
      const match = sorted.find((k) => segment.toLowerCase() === k.term.toLowerCase());
      return { text: segment, keyword: match ?? null };
    });
  }, [text, resolved]);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part.keyword ? (
          <KeywordSpan
            key={`${part.text}-${index}`}
            keyword={part.keyword.description ? part.keyword : resolveKeyword(part.keyword.term)}
            accent={accent}
            activeKeyword={activeKeyword}
            onKeywordActivate={onKeywordActivate}
          />
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        ),
      )}
    </span>
  );
}
