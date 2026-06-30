'use client';

import Link from 'next/link';
import { wolfsonianApiHighlight, wolfsonianDownloads } from '@/content/grants/wolfsonian-fellowship';
import { grantButtonClass, grantCardClass } from '@/components/grant/dossier/GrantDossierUi';

export function WolfsonianDownloadCards() {
  return (
    <div className="mt-6 space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {wolfsonianDownloads.map((download) => (
          <div key={download.href} className={grantCardClass + ' p-4 transition hover:border-stone-500 dark:hover:border-stone-500'}>
            <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{download.label}</p>
            <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{download.note}</p>
            <Link href={download.href} className={grantButtonClass + ' mt-4 w-full'}>
              Download
            </Link>
          </div>
        ))}
      </div>

      <div className="border border-sky-400/50 bg-sky-50 p-5 dark:bg-sky-950/30">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-800 dark:text-sky-300">
          {wolfsonianApiHighlight.label}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          {wolfsonianApiHighlight.summary}
        </p>
        <a
          href={wolfsonianApiHighlight.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center border border-sky-700 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-100 dark:border-sky-300 dark:text-sky-200 dark:hover:bg-sky-900/50"
        >
          Explore the Wolfsonian API
        </a>
      </div>
    </div>
  );
}
