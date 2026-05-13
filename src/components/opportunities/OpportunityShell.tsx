'use client';

import type { OpportunityNavItem } from '@/content/opportunities/types';

type OpportunityShellProps = {
  children: React.ReactNode;
  navItems?: OpportunityNavItem[];
};

function StickyMiniNav({ items }: { items: OpportunityNavItem[] }) {
  return (
    <nav
      className="sticky top-[10.5rem] z-30 border-b border-stone-200 bg-stone-50/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-stone-50/85"
      aria-label="Section navigation"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto px-4 pb-1 text-sm whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full border border-transparent px-3 py-1 text-stone-600 hover:border-stone-300 hover:bg-white hover:text-stone-900"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function OpportunityShell({ navItems, children }: OpportunityShellProps) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-['MoMA_Sans']">
      {navItems?.length ? <StickyMiniNav items={navItems} /> : null}
      {children}
    </div>
  );
}
