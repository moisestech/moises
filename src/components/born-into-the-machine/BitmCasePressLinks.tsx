'use client';

import { getPressForCaseStudy } from '@/content/born-into-the-machine/bitm-press';

export function BitmCasePressLinks({ slug }: { slug: string }) {
  const items = getPressForCaseStudy(slug);
  if (!items.length) return null;

  return (
    <div className="mt-4 border-t border-[#dedede] pt-3 dark:border-neutral-700">
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#777777]">
        Institutional documentation
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="text-sm font-medium text-[#111111] underline-offset-2 group-hover:underline dark:text-neutral-100">
                {item.title}
              </span>
              <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.12em] text-[#777777]">
                {item.source} ↗
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-[#777777] dark:text-neutral-400">
                {item.summary}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
