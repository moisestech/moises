'use client';

import { useState } from 'react';
import { Shapes } from 'lucide-react';
import { postAiReadymadesObjectFamilies } from '@/content/post-ai-readymades/postAiReadymades';
import { readymadesFamilyIcons } from '@/config/post-ai-readymades-theme';
import { ReadymadesSectionHeader } from '@/components/post-ai-readymades/ReadymadesSectionHeader';
import { cn } from '@/lib/utils';

export function ObjectFamilies() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <ReadymadesSectionHeader
        eyebrow="Object families"
        title="Intellectual structure"
        description="Families group studies by the kinds of objects, labor, and display conditions they stage."
        icon={Shapes}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {postAiReadymadesObjectFamilies.map((family) => {
          const Icon = readymadesFamilyIcons[family.id];
          const isActive = activeId === family.id;

          return (
            <div
              key={family.id}
              onMouseEnter={() => setActiveId(family.id)}
              onMouseLeave={() => setActiveId(null)}
              className={cn(
                'border bg-white p-4 transition duration-300 dark:bg-neutral-950',
                isActive
                  ? 'border-emerald-600/40 bg-gradient-to-br from-emerald-50/60 to-white shadow-[0_8px_24px_rgba(4,120,87,0.08)] dark:from-emerald-950/20 dark:to-neutral-950'
                  : 'border-[#dedede] dark:border-neutral-700',
              )}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {Icon ? (
                    <span
                      className={cn(
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[#dedede]/80 bg-[#faf8f4] text-[#555555] transition dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300',
                        isActive && 'border-emerald-600/30 bg-emerald-100 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200',
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                  ) : null}
                  <h3 className="text-base font-semibold tracking-tight text-[#111111] dark:text-white">
                    {family.title}
                  </h3>
                </div>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] dark:text-neutral-500">
                  {family.studyCount === 0
                    ? '0 studies / coming soon'
                    : `${family.studyCount} ${family.studyCount === 1 ? 'study' : 'studies'}`}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#777777] dark:text-neutral-300">{family.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
