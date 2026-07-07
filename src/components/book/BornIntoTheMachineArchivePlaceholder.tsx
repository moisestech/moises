import Link from 'next/link';
import type { Metadata } from 'next';

type ArchivePlaceholderProps = {
  title: string;
  description: string;
};

export function archivePlaceholderMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | Born into the Machine`,
    description,
    robots: { index: false, follow: true },
  };
}

export function BornIntoTheMachineArchivePlaceholder({ title, description }: ArchivePlaceholderProps) {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <div className="mx-auto w-[min(96vw,720px)] px-4 py-16 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
          Born into the Machine — research archive
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-6 text-base leading-relaxed text-stone-700 dark:text-stone-300">{description}</p>
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
          This module is in development. Content is managed in the Born into the Machine research system and will publish
          here as it is verified.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/research/born-into-the-machine"
            className="inline-flex min-h-11 items-center border border-stone-800 px-4 py-2 text-sm font-medium hover:bg-stone-900 hover:text-white dark:border-stone-200 dark:hover:bg-stone-100 dark:hover:text-black"
          >
            ← Born into the Machine
          </Link>
          <Link
            href="/grant/ssrc-just-tech-fellowship-2027"
            className="inline-flex min-h-11 items-center border border-stone-300 px-4 py-2 text-sm font-medium dark:border-stone-600"
          >
            SSRC grant dossier
          </Link>
        </div>
      </div>
    </div>
  );
}
