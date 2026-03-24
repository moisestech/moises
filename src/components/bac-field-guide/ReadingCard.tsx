'use client';

import { BookOpen, ExternalLink } from 'lucide-react';
import type { FieldGuideReading } from '@/constants/bac-field-guide-images-after-screen';
import { readingCoverPlaceholderUrl } from '@/lib/bac-field-guide-placeholders';

type ReadingCardProps = {
  reading: FieldGuideReading;
  isDark: boolean;
  border: string;
  cardBg: string;
  muted: string;
};

function publisherFaviconUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
}

export function ReadingCard({
  reading: r,
  isDark,
  border,
  cardBg,
  muted,
}: ReadingCardProps) {
  const hasCover = Boolean(r.coverImageUrl);
  const coverSrc = hasCover
    ? r.coverImageUrl!
    : readingCoverPlaceholderUrl(r.source, isDark);
  const coverAlt = hasCover
    ? r.coverImageAlt
    : `Placeholder cover for ${r.source} — replace with a rights-cleared image when available.`;

  return (
    <article
      className={`rounded-lg border overflow-hidden ${border} ${cardBg} max-w-4xl`}
    >
      <div className="grid md:grid-cols-[minmax(0,220px)_1fr] lg:grid-cols-[minmax(0,280px)_1fr] gap-0">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[200px] bg-neutral-100 dark:bg-neutral-900">
          {/* eslint-disable-next-line @next/next/no-img-element -- hotlinked publication covers; avoids optimizer/host edge cases */}
          <img
            src={coverSrc}
            alt={coverAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="p-5 sm:p-6 flex flex-col">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- favicon helper URL */}
            <img
              src={publisherFaviconUrl(r.publisherDomain)}
              width={28}
              height={28}
              alt=""
              className="rounded-sm bg-white/90 p-0.5"
            />
            <span className={`text-sm font-medium ${muted}`}>
              {r.source} · {r.year}
            </span>
          </div>

          <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${muted}`}>
            {r.author}
          </p>
          <h3
            className={`text-lg sm:text-xl font-semibold mb-4 leading-snug italic ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            {r.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-5">
            {r.externalUrl ? (
              <a
                href={r.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border-white/20 bg-white/5 text-white hover:bg-white/10'
                    : 'border-black/15 bg-white text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0 opacity-80" aria-hidden />
                Read online
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-60" aria-hidden />
              </a>
            ) : null}
            {r.pdfUrl ? (
              <a
                href={r.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border-white/20 bg-white/5 text-white hover:bg-white/10'
                    : 'border-black/15 bg-white text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0 opacity-80" aria-hidden />
                PDF
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-60" aria-hidden />
              </a>
            ) : null}
          </div>

          <div className={`space-y-3 text-sm sm:text-base leading-relaxed mt-auto ${muted}`}>
            <p>
              <span className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                Summary
              </span>
              {' — '}
              {r.summary}
            </p>
            <p>
              <span className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                Why it matters here
              </span>
              {' — '}
              {r.whyItMatters}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
