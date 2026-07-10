'use client';

import { useEffect, useState } from 'react';
import { bitmChapters } from '@/content/born-into-the-machine/bitm-chapters';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { cn } from '@/lib/utils';

export function BitmChapterNav() {
  const ids = bitmChapters.map((c) => c.id);
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const compute = () => {
      const offset = 200;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = id;
      }
      setActiveId(current);
    };
    compute();
    window.addEventListener('scroll', compute, { passive: true });
    return () => window.removeEventListener('scroll', compute);
  }, [ids]);

  return (
    <nav
      className="sticky top-[4.75rem] z-30 -mx-4 mb-8 overflow-x-auto border-b border-[#dedede] bg-[#faf8f4]/95 px-4 py-2 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/95 md:top-[8.4rem]"
      aria-label="Chapter navigation"
    >
      <ul className="flex min-w-max gap-2">
        {bitmChapters.map((ch) => {
          const accent = getBitmChapterAccent(ch.id);
          const isActive = activeId === ch.id;
          return (
            <li key={ch.id}>
              <a
                href={`#${ch.id}`}
                className={cn(
                  'inline-block rounded-sm border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors',
                  isActive ? accent.navActive : accent.navIdle,
                  isActive ? accent.navActiveText : '',
                )}
              >
                {String(ch.index).padStart(2, '0')} {ch.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
