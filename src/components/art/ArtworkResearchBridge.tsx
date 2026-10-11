import Link from 'next/link';
import type { ArtworkResearchLink } from '@/constants/artworks';

export default function ArtworkResearchBridge({
  inquiry,
  thread,
}: {
  inquiry?: ArtworkResearchLink;
  thread?: ArtworkResearchLink;
}) {
  if (!inquiry && !thread) return null;

  return (
    <>
      {inquiry ? (
        <section
          className="mt-24 border-t border-gray-200 pt-20 dark:border-gray-800"
          aria-labelledby="current-inquiry-heading"
        >
          {inquiry.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {inquiry.eyebrow}
            </p>
          ) : null}
          <h2
            id="current-inquiry-heading"
            className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            {inquiry.title}
          </h2>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed md:text-2xl">{inquiry.text}</p>
          {inquiry.href && inquiry.linkLabel ? (
            <Link
              href={inquiry.href}
              className="mt-10 inline-flex min-h-11 items-center text-lg underline underline-offset-4"
            >
              {inquiry.linkLabel}
            </Link>
          ) : null}
        </section>
      ) : null}
      {thread ? (
        <section className="mt-16 max-w-2xl" aria-labelledby="broader-research-heading">
          {thread.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              {thread.eyebrow}
            </p>
          ) : null}
          <h2
            id="broader-research-heading"
            className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300"
          >
            {thread.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{thread.text}</p>
          {thread.href && thread.linkLabel ? (
            <Link
              href={thread.href}
              className="mt-3 inline-flex min-h-11 items-center text-sm text-gray-600 underline underline-offset-4 dark:text-gray-400"
            >
              {thread.linkLabel}
            </Link>
          ) : null}
        </section>
      ) : null}
    </>
  );
}
