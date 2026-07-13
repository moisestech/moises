'use client';

import Link from 'next/link';
import {
  formatGrantDirectoryDate,
  grantDirectoryByDate,
  grantDirectoryCount,
  type GrantDirectoryEntry,
} from '@/content/grants/grant-directory';
import { dossierTypography, grantButtonClass, grantCardClass, grantLinkClass } from '@/components/grant/dossier/GrantDossierUi';
import { cn } from '@/lib/utils';

const statusLabel: Record<NonNullable<GrantDirectoryEntry['status']>, string> = {
  active: 'Active',
  draft: 'Draft',
  submitted: 'Submitted',
  archive: 'Archive',
};

function GrantRow({ entry }: { entry: GrantDirectoryEntry }) {
  const isChild = Boolean(entry.parentId);

  return (
    <li
      className={cn(
        'border-b border-stone-200 py-4 last:border-0 dark:border-stone-700',
        isChild && 'pl-4 sm:pl-6',
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <time
              dateTime={entry.updatedAt}
              className={cn(dossierTypography.eyebrow, 'text-stone-500 dark:text-stone-400')}
            >
              {formatGrantDirectoryDate(entry.updatedAt)}
            </time>
            {entry.status ? (
              <span className="rounded border border-stone-300 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-600 dark:border-stone-600 dark:text-stone-300">
                {statusLabel[entry.status]}
              </span>
            ) : null}
            {isChild ? (
              <span className="text-[10px] font-semibold uppercase tracking-wide text-stone-400">
                Proposal option
              </span>
            ) : null}
          </div>

          <h2 className="mt-1 text-lg font-semibold text-stone-900 dark:text-stone-100">
            <Link href={entry.route} className={grantLinkClass}>
              {entry.title}
            </Link>
          </h2>

          <p className={cn('mt-1', dossierTypography.meta)}>{entry.organization}</p>

          {entry.summary ? (
            <p className={cn('mt-2 max-w-2xl', dossierTypography.body)}>{entry.summary}</p>
          ) : null}

          {entry.deadline ? (
            <p className={cn('mt-2', dossierTypography.meta)}>
              Deadline: {formatGrantDirectoryDate(entry.deadline)}
            </p>
          ) : null}
        </div>

        <div className="shrink-0 sm:text-right">
          <Link href={entry.route} className={cn('text-sm', grantLinkClass)}>
            {entry.route}
          </Link>
        </div>
      </div>
    </li>
  );
}

export default function GrantsDirectoryList() {
  async function handleSignOut() {
    await fetch('/api/grants/auth', { method: 'DELETE' });
    window.location.reload();
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className={dossierTypography.eyebrow}>Internal directory</p>
          <h1 className={cn('mt-2', dossierTypography.h2)}>Grant routes</h1>
          <p className={cn('mt-3 max-w-2xl', dossierTypography.body)}>
            {grantDirectoryCount} application pages, sorted by last update (newest first).
          </p>
        </div>
        <button type="button" onClick={handleSignOut} className={grantButtonClass}>
          Sign out
        </button>
      </header>

      <section className={cn('p-4 sm:p-6', grantCardClass)} aria-label="Grant routes by date">
        <ul>
          {grantDirectoryByDate.map((entry) => (
            <GrantRow key={entry.id} entry={entry} />
          ))}
        </ul>
      </section>
    </div>
  );
}
