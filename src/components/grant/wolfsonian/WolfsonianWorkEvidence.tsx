'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { wolfsonianRelatedWorks } from '@/content/grants/wolfsonian-fellowship';

export function WolfsonianWorkEvidence() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {wolfsonianRelatedWorks.map((work) => {
        const hovered = hoveredId === work.id;
        return (
          <Link
            key={work.id}
            href={work.href}
            className="group block overflow-hidden border border-stone-300 bg-white transition hover:border-stone-500 dark:border-stone-700 dark:bg-neutral-900 dark:hover:border-stone-500"
            onMouseEnter={() => setHoveredId(work.id)}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId(work.id)}
            onBlur={() => setHoveredId(null)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="border-t border-stone-200 p-4 dark:border-stone-700">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">{work.title}</h3>
                <span className="text-xs text-stone-500 dark:text-stone-400">{work.year}</span>
              </div>
              <p
                className={cn(
                  'mt-2 text-sm leading-relaxed text-stone-600 transition dark:text-stone-400',
                  hovered && 'text-stone-800 dark:text-stone-200',
                )}
              >
                {work.relevance}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {work.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="border border-stone-300 px-2 py-0.5 text-xs text-stone-600 dark:border-stone-600 dark:text-stone-400"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
