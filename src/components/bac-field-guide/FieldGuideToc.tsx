'use client';

import type { FieldGuideNavItem } from '@/constants/bac-field-guide-images-after-screen';

type FieldGuideTocProps = {
  items: readonly FieldGuideNavItem[];
  isDark: boolean;
};

export function FieldGuideToc({ items, isDark }: FieldGuideTocProps) {
  const linkClass = isDark
    ? 'text-neutral-300 hover:text-white'
    : 'text-neutral-600 hover:text-black';

  return (
    <>
      <nav
        className={`lg:hidden mb-10 border rounded-md px-4 py-3 ${
          isDark ? 'border-white/15 bg-white/[0.03]' : 'border-black/10 bg-neutral-50'
        }`}
        aria-label="On this page"
      >
        <details>
          <summary
            className={`cursor-pointer text-sm font-medium tracking-wide uppercase ${
              isDark ? 'text-neutral-200' : 'text-neutral-800'
            }`}
          >
            On this page
          </summary>
          <ul className="mt-3 space-y-2 list-none pl-0 text-sm">
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={`${linkClass} underline-offset-4 hover:underline`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </nav>

      <aside
        className={`hidden lg:block sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-2`}
        aria-label="On this page"
      >
        <p
          className={`text-xs font-medium tracking-widest uppercase mb-4 ${
            isDark ? 'text-neutral-500' : 'text-neutral-500'
          }`}
        >
          On this page
        </p>
        <ul className="space-y-2 list-none pl-0 text-sm leading-snug">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={`${linkClass} underline-offset-4 hover:underline`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
