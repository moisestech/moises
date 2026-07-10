'use client';

import { cn } from '@/lib/utils';
import { readymadesCatalogueAnswerIcons, readymadesAccent } from '@/config/post-ai-readymades-theme';

type CatalogueAnswerProps = {
  question: string;
  answer: string;
};

export function CatalogueAnswerCard({ question, answer }: CatalogueAnswerProps) {
  const Icon = readymadesCatalogueAnswerIcons[question];

  return (
    <div
      className={cn(
        'group rounded-sm border border-[#dedede] bg-white/80 p-4 transition duration-300',
        'hover:border-emerald-600/40 hover:bg-gradient-to-br hover:from-emerald-50/80 hover:to-sky-50/40',
        'hover:shadow-[0_8px_30px_rgba(4,120,87,0.08)] dark:border-neutral-800 dark:bg-neutral-950/80',
        'dark:hover:from-emerald-950/30 dark:hover:to-sky-950/20',
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        {Icon ? (
          <span
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-sm transition group-hover:scale-105',
              readymadesAccent.iconBg,
              readymadesAccent.iconText,
            )}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </span>
        ) : null}
        <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
          {question}
        </dt>
      </div>
      <dd className="text-sm leading-relaxed text-[#111111] dark:text-neutral-200">{answer}</dd>
    </div>
  );
}
