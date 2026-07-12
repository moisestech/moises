'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { postAiReadymadesStudies } from '@/content/post-ai-readymades/postAiReadymades';

type FeaturedNarrativeProps = {
  studyId: string;
  relevance: string;
  conceptualTag: string;
};

function FeaturedNarrativeEntry({ studyId, relevance, conceptualTag }: FeaturedNarrativeProps) {
  const study = postAiReadymadesStudies.find((s) => s.id === studyId);
  const [showOverlay, setShowOverlay] = useState(false);

  if (!study) return null;

  return (
    <article className="grid gap-6 border border-[#dedede] bg-white dark:border-neutral-700 dark:bg-neutral-950 md:grid-cols-[minmax(0,220px)_1fr]">
      <div
        className="group relative aspect-[9/16] w-full overflow-hidden bg-[#f0eeea] dark:bg-neutral-900"
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        {study.imageUrl ? (
          <Image src={study.imageUrl} alt={study.title} fill className="object-cover" sizes="220px" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]">
            Placeholder
          </div>
        )}
        <div
          className={`absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-200 ${
            showOverlay ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-sm font-medium leading-snug text-white">{conceptualTag}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
          Study {study.number}
          {study.objectFamily ? ` · ${study.objectFamily}` : ''}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#111111] dark:text-white">{study.title}</h3>
        {study.shortDescription ? (
          <p className="mt-3 text-sm leading-relaxed text-[#777777] dark:text-neutral-300">{study.shortDescription}</p>
        ) : null}
        <p className="mt-4 text-sm italic leading-relaxed text-[#555555] dark:text-neutral-400">
          <span className="font-medium not-italic text-[#111111] dark:text-neutral-200">Relevance:</span> {relevance}
        </p>
        {study.artworkSlug ? (
          <Link
            href={`/art/${study.artworkSlug}`}
            className="mt-5 inline-flex text-sm font-medium underline underline-offset-4 text-[#111111] hover:no-underline dark:text-neutral-200"
          >
            View existing work
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function ReadymadesFeaturedNarratives({
  items,
}: {
  items: readonly { studyId: string; relevance: string; conceptualTag: string }[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
        Study anchors
      </p>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
        Existing works inside the archive
      </h2>
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-[#777777] dark:text-neutral-300">
        Prior sculptures enter the daily rhythm as study anchors—proof that the catalogue method extends work already in the world.
      </p>
      <div className="space-y-6">
        {items.map((item) => (
          <FeaturedNarrativeEntry key={item.studyId} {...item} />
        ))}
      </div>
    </section>
  );
}
