'use client';

import { useCallback, useId, useMemo, useState } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReadymadesSectionAccent } from '@/config/post-ai-readymades-theme';
import {
  normalizeReadymadesHighlights,
  resolveReadymadesKeyword,
  splitTextByReadymadesHighlights,
  type ReadymadesKeyword,
} from '@/content/post-ai-readymades/postAiReadymadesKeywords';

type KeywordSpanProps = {
  keyword: ReadymadesKeyword;
  accent: ReadymadesSectionAccent;
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
      <strong className={cn('font-semibold underline decoration-2 underline-offset-2', accent.keywordUnderline)}>
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
          isActive || open ? accent.keywordActive : 'text-[#111111] dark:text-neutral-100',
          open && 'decoration-[3px]',
        )}
        aria-describedby={open ? popoverId : undefined}
        onMouseEnter={handleActivate}
        onMouseLeave={handleDeactivate}
        onFocus={handleActivate}
        onBlur={handleDeactivate}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        {keyword.term}
      </button>
      {open ? (
        <span
          id={popoverId}
          role="tooltip"
          className={cn(
            'absolute left-0 top-full z-40 mt-2 block w-[min(20rem,85vw)] border bg-white p-3 text-left shadow-lg dark:bg-neutral-950',
            accent.mediaBorder,
            !reduce && 'motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150',
          )}
        >
          {keyword.label ? (
            <span className={cn('mb-1 block font-mono text-[0.65rem] uppercase tracking-[0.16em]', accent.eyebrow)}>
              {keyword.label}
            </span>
          ) : null}
          <span className="text-sm leading-relaxed text-[#555555] dark:text-neutral-300">{keyword.description}</span>
          {keyword.imageUrl ? (
            <span className="relative mt-3 block aspect-[16/10] w-full overflow-hidden border border-[#dedede] dark:border-neutral-700">
              <Image src={keyword.imageUrl} alt="" fill className="object-cover" sizes="320px" />
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}

export function ReadymadesKeywordText({
  text,
  highlights = [],
  accent,
  activeKeyword,
  onKeywordActivate,
  className,
}: {
  text: string;
  highlights?: (string | ReadymadesKeyword)[];
  accent: ReadymadesSectionAccent;
  activeKeyword?: string | null;
  onKeywordActivate?: (term: string | null) => void;
  className?: string;
}) {
  const resolved = useMemo(() => normalizeReadymadesHighlights(highlights), [highlights]);
  const parts = useMemo(() => splitTextByReadymadesHighlights(text, resolved), [text, resolved]);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part.keyword ? (
          <KeywordSpan
            key={`${part.text}-${index}`}
            keyword={part.keyword.description ? part.keyword : resolveReadymadesKeyword(part.keyword.term)}
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
