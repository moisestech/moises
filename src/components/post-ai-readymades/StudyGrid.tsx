'use client';

import { useState } from 'react';
import Link from 'next/link';
import { postAiReadymadesStudies } from '@/content/post-ai-readymades/postAiReadymades';
import type { Study } from '@/content/post-ai-readymades/postAiReadymades';
import { StudyCard } from '@/components/post-ai-readymades/StudyCard';
import { StudyDetail } from '@/components/post-ai-readymades/StudyDetail';

export function StudyGrid() {
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
        Featured studies
      </p>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
        Catalogue archive
      </h2>
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-[#777777] dark:text-neutral-300">
        Each entry is a vertical artifact: image, Story, pre-object, catalogue note, and possible sculpture.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {postAiReadymadesStudies.map((study) => (
          <StudyCard key={study.id} study={study} onSelect={setSelectedStudy} />
        ))}
      </div>

      <StudyDetail study={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </section>
  );
}

export function StudyGridFooterNote() {
  return (
    <p className="mt-8 text-sm text-[#777777] dark:text-neutral-400">
      Prompts and private process notes are not shown publicly.{' '}
      <Link href="/research/born-into-the-machine" className="underline underline-offset-4 hover:no-underline">
        Born Into the Machine
      </Link>{' '}
      is the parent project.
    </p>
  );
}
