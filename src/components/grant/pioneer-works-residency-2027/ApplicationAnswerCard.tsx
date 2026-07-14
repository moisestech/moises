'use client';

import { useState } from 'react';

type AnswerCardProps = {
  prompt: string;
  text: string;
  maxWords: number;
  wordCount: number;
};

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

export function ApplicationAnswerCard({ prompt, text, maxWords, wordCount }: AnswerCardProps) {
  const [copied, setCopied] = useState(false);
  const liveCount = wordCount || countWords(text);
  const over = liveCount > maxWords;

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="border border-[#c4beb4] dark:border-stone-700 bg-white/70 dark:bg-black/30 p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 leading-snug">{prompt}</h3>
        <p
          className={`text-xs tabular-nums shrink-0 ${
            over ? 'text-[#8b3a2a] font-semibold' : 'text-stone-500'
          }`}
        >
          {liveCount} / {maxWords} words
        </p>
      </div>
      <div className="max-h-48 overflow-y-auto text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line border border-dashed border-stone-300 dark:border-stone-600 p-3 bg-[#f7f4ef]/70 dark:bg-neutral-900/50">
        {text}
      </div>
      <button
        type="button"
        onClick={copyText}
        className="mt-3 min-h-11 px-4 text-xs font-semibold uppercase tracking-wide border border-stone-800 dark:border-stone-200 text-stone-900 dark:text-stone-100 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
      >
        {copied ? 'Copied' : 'Copy for form'}
      </button>
    </article>
  );
}
