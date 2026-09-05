import type { ReactNode } from 'react';
import PageLayout from '@/components/PageLayout';

/**
 * Shared shell for the site's policy pages (privacy, terms, visitor guidelines).
 * Uses a narrower measure than the rest of the site because these pages are read
 * as prose rather than scanned as work.
 */
export function PolicyPage({
  title,
  purpose,
  updated,
  children,
}: {
  title: string;
  purpose: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <PageLayout>
      <main className="pt-[calc(var(--site-header-height,5rem)+3rem)] pb-32 px-4 max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{title}</h1>
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">{purpose}</p>
          <p className="mt-8 text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500">
            Last updated {updated}
          </p>
        </header>
        <div className="space-y-14">{children}</div>
      </main>
    </PageLayout>
  );
}

export function PolicySection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight mb-4">{heading}</h2>
      <div className="space-y-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        {children}
      </div>
    </section>
  );
}

export function PolicyList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3 list-disc pl-6">
      {items.map((item, index) => (
        <li key={index} className="text-lg leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}
