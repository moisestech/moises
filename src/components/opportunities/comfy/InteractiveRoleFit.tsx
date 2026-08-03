'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/utils';
import { comfyWorkSample } from '@/content/opportunities/comfy/workSample';

export function InteractiveRoleFit() {
  const headingId = useId();
  const { roleFit } = comfyWorkSample;
  const [activeReq, setActiveReq] = useState<string | null>(roleFit.requirements[0]?.id ?? null);

  const active = roleFit.requirements.find((r) => r.id === activeReq) ?? roleFit.requirements[0];
  const highlighted = new Set(active?.evidenceIds ?? []);

  return (
    <section
      id="role-fit"
      className="scroll-mt-28 border-t border-stone-200 py-12 dark:border-stone-800 sm:scroll-mt-32 sm:py-16"
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="text-2xl font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-3xl"
      >
        {roleFit.title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-stone-600 dark:text-stone-400">{roleFit.intro}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ul className="space-y-2" role="listbox" aria-label="Role requirements">
          {roleFit.requirements.map((req) => {
            const selected = req.id === active?.id;
            return (
              <li key={req.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onMouseEnter={() => setActiveReq(req.id)}
                  onFocus={() => setActiveReq(req.id)}
                  onClick={() => setActiveReq(req.id)}
                  className={cn(
                    'w-full rounded-xl border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500',
                    selected
                      ? 'border-yellow-500/70 bg-yellow-50 dark:border-yellow-400/50 dark:bg-yellow-400/10'
                      : 'border-stone-200 bg-white hover:border-stone-300 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-stone-500',
                  )}
                >
                  <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">{req.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                    {req.summary}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-950 sm:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
            Linked evidence
          </p>
          <ul className="mt-3 space-y-2">
            {roleFit.evidence.map((ev) => {
              const on = highlighted.has(ev.id);
              return (
                <li key={ev.id}>
                  <a
                    href={ev.href}
                    className={cn(
                      'block rounded-xl border px-3 py-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500',
                      on
                        ? 'border-yellow-500/60 bg-white shadow-sm dark:border-yellow-400/40 dark:bg-stone-900'
                        : 'border-transparent bg-transparent opacity-55',
                    )}
                  >
                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">{ev.label}</p>
                    <p className="mt-1 text-xs text-stone-600 dark:text-stone-400">{ev.detail}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
