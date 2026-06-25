'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  dossierTypography,
  grantCardClass,
  grantLinkClass,
} from '@/components/grant/dossier/GrantDossierUi';
import type { ProofItem, ReadinessMetric } from '@/content/grants/four-artists-four-seasons';

const SWIPE_THRESHOLD = 48;

function extractYouTubeId(src?: string): string | null {
  if (!src) return null;
  if (!src.includes('/') && !src.includes('.')) return src;
  try {
    const url = new URL(src);
    if (url.hostname.includes('youtu.be')) return url.pathname.slice(1);
    return url.searchParams.get('v');
  } catch {
    return null;
  }
}

function ProofMedia({
  item,
  className,
}: {
  item: ProofItem;
  className?: string;
}) {
  const youtubeId = item.mediaType === 'youtube' ? extractYouTubeId(item.src) : null;
  const imageSrc = item.poster ?? item.src;
  const externalHref = item.surveyLink ?? item.href;

  if (youtubeId) {
    return (
      <div className={cn('relative h-full w-full bg-black', className)}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (item.mediaType === 'external' && imageSrc && externalHref) {
    return (
      <a
        href={externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('relative block h-full w-full bg-stone-900', className)}
        aria-label={`Watch ${item.title}`}
      >
        <Image
          src={imageSrc}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 320px"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors hover:bg-black/45">
          <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-stone-900 shadow-lg">
            Watch sample
          </span>
        </div>
      </a>
    );
  }

  if (imageSrc && (item.mediaType === 'cloudinary' || item.mediaType === 'image' || item.poster)) {
    return (
      <div className={cn('relative h-full w-full bg-stone-900', className)}>
        <Image
          src={imageSrc}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 320px"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-stone-800 to-stone-950 p-6 text-center',
        className,
      )}
    >
      <p className={cn(dossierTypography.eyebrow, 'text-stone-400')}>{item.category}</p>
      <p className="mt-3 text-sm font-medium text-stone-200">Media placeholder — final clip pending</p>
      {item.href ? (
        <span className="mt-2 text-xs text-stone-500">Link will be added before submission</span>
      ) : null}
    </div>
  );
}

function SmartphoneFrame({
  item,
  className,
}: {
  item: ProofItem;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[280px]', className)}>
      <div className="rounded-[2rem] border-[3px] border-stone-800 bg-stone-900 p-2 shadow-xl dark:border-stone-600">
        <div className="overflow-hidden rounded-[1.5rem] bg-black">
          <div className="relative aspect-[9/16] w-full">
            <ProofMedia item={item} />
            {item.captionOverlay ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-4 pt-16">
                <p className="text-[11px] font-medium leading-snug text-white">{item.captionOverlay}</p>
              </div>
            ) : null}
            {item.platformLabel ? (
              <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                {item.platformLabel}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReadinessPanel({
  metrics,
  item,
}: {
  metrics: ReadinessMetric[];
  item: ProofItem;
}) {
  return (
    <aside className={cn('p-4 sm:p-5', grantCardClass)}>
      <p className={dossierTypography.eyebrow}>Format preview — sample content-readiness</p>
      <p className={cn('mt-2', dossierTypography.meta)}>
        Qualitative review dimensions for <span className="font-medium text-stone-800 dark:text-stone-200">{item.title}</span>.
        Not performance analytics.
      </p>
      <ul className="mt-4 space-y-3">
        {metrics.map((metric) => (
          <li key={metric.label} className="border-b border-stone-200 pb-3 last:border-0 dark:border-stone-700">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-stone-800 dark:text-stone-200">{metric.label}</span>
              <span
                className={cn(
                  'shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                  metric.value === 'Strong'
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-black'
                    : metric.value === 'Ready'
                      ? 'bg-stone-200 text-stone-800 dark:bg-stone-700 dark:text-stone-100'
                      : 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400',
                )}
              >
                {metric.value}
              </span>
            </div>
            <p className={cn('mt-1', dossierTypography.meta)}>{metric.note}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ProofDetails({ item }: { item: ProofItem }) {
  const linkHref = item.surveyLink ?? item.href;
  const isPending = item.sampleStatus === 'pending';
  const isInternal = linkHref?.startsWith('/');

  return (
    <div className="min-w-0 space-y-4">
      <div>
        <p className={dossierTypography.eyebrow}>{item.category}</p>
        <h3 className={cn('mt-1', dossierTypography.h3)}>{item.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.applicationPriority ? (
            <span className="inline-block rounded border border-red-900/40 bg-red-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-900 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-300">
              Application sample
            </span>
          ) : null}
          {isPending ? (
            <span className="inline-block rounded border border-amber-700/40 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 dark:border-amber-400/30 dark:bg-amber-950/40 dark:text-amber-200">
              Sample link pending
            </span>
          ) : null}
        </div>
      </div>
      <p className={dossierTypography.body}>{item.proves}</p>
      <div>
        <p className={dossierTypography.eyebrow}>Tools</p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {item.tools.map((tool) => (
            <li
              key={tool}
              className="rounded border border-stone-300 px-2 py-1 text-xs text-stone-700 dark:border-stone-600 dark:text-stone-300"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={dossierTypography.eyebrow}>Role</p>
        <p className={cn('mt-1', dossierTypography.meta)}>{item.role.join(' · ')}</p>
      </div>
      {linkHref ? (
        isInternal ? (
          <Link href={linkHref} className={cn('inline-flex items-center gap-1 text-sm', grantLinkClass)}>
            {isPending ? 'Interim context link' : 'View source'}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </Link>
        ) : (
          <Link
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('inline-flex items-center gap-1 text-sm', grantLinkClass)}
          >
            {isPending ? 'Interim profile / context link' : 'View source'}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </Link>
        )
      ) : null}
      {isPending && linkHref ? (
        <p className={cn(dossierTypography.meta)}>Replace with direct reel or short URL before final submit.</p>
      ) : null}
    </div>
  );
}

type VerticalProofShowcaseProps = {
  items: ProofItem[];
  readinessMetrics: ReadinessMetric[];
};

export function VerticalProofShowcase({ items, readinessMetrics }: VerticalProofShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeItem = items[activeIndex] ?? items[0];

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % items.length) + items.length) % items.length);
    },
    [items.length],
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      touchStartX.current = null;
      if (Math.abs(diff) < SWIPE_THRESHOLD) return;
      if (diff > 0) goTo(activeIndex + 1);
      else goTo(activeIndex - 1);
    },
    [activeIndex, goTo],
  );

  if (!activeItem) return null;

  const priorityCount = items.filter((i) => i.applicationPriority).length;

  return (
    <div className="space-y-6">
      <p className={dossierTypography.meta}>
        {priorityCount} items marked for SurveyMonkey submission (2–5 required). Swipe on mobile; select cards on
        desktop.
      </p>

      {/* Mobile: single phone carousel */}
      <div
        className="md:hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <SmartphoneFrame item={activeItem} />
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-stone-300 dark:border-stone-600"
            aria-label="Previous proof"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <span className={dossierTypography.meta}>
            {activeIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-stone-300 dark:border-stone-600"
            aria-label="Next proof"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="mt-6">
          <ProofDetails item={activeItem} />
        </div>
      </div>

      {/* Tablet: phone + details */}
      <div className="hidden gap-8 md:grid md:grid-cols-2 lg:hidden">
        <SmartphoneFrame item={activeItem} />
        <div className="space-y-6">
          <ProofDetails item={activeItem} />
          <ReadinessPanel metrics={readinessMetrics} item={activeItem} />
        </div>
        <div className="col-span-2 flex flex-wrap gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                'min-h-11 rounded border px-3 py-2 text-left text-xs transition',
                index === activeIndex
                  ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
                  : 'border-stone-300 text-stone-700 dark:border-stone-600 dark:text-stone-300',
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: large preview + selector + readiness */}
      <div className="hidden lg:grid lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)_minmax(0,280px)] lg:gap-8">
        <div className="space-y-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                'w-full rounded border p-3 text-left transition',
                index === activeIndex
                  ? 'border-stone-900 bg-stone-100 dark:border-stone-100 dark:bg-stone-800/60'
                  : 'border-stone-300 hover:border-stone-500 dark:border-stone-600',
              )}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-500">{item.category}</p>
              <p className="mt-1 text-sm font-medium text-stone-900 dark:text-stone-100">{item.title}</p>
              {item.applicationPriority ? (
                <span className="mt-1 block text-[10px] text-red-800 dark:text-red-300">Application sample</span>
              ) : null}
              {item.sampleStatus === 'pending' ? (
                <span className="mt-0.5 block text-[10px] text-amber-800 dark:text-amber-300">Link pending</span>
              ) : null}
            </button>
          ))}
        </div>
        <SmartphoneFrame item={activeItem} className="lg:max-w-none" />
        <div className="space-y-6">
          <ProofDetails item={activeItem} />
          <ReadinessPanel metrics={readinessMetrics} item={activeItem} />
        </div>
      </div>
    </div>
  );
}
