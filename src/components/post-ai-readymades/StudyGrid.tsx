'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LayoutGrid } from 'lucide-react';
import { postAiReadymadesStudies } from '@/content/post-ai-readymades/postAiReadymades';
import type { Study } from '@/content/post-ai-readymades/postAiReadymades';
import { StudyCard } from '@/components/post-ai-readymades/StudyCard';
import { StudyDetail } from '@/components/post-ai-readymades/StudyDetail';
import { ReadymadesSectionHeader } from '@/components/post-ai-readymades/ReadymadesSectionHeader';

export function StudyGrid() {
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <ReadymadesSectionHeader
        eyebrow="Featured studies"
        title="Catalogue archive"
        description="Each entry is a vertical artifact: image, Story, pre-object, catalogue note, and possible sculpture."
        icon={LayoutGrid}
      />

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
    <p className="-mt-8 mb-16 text-sm text-[#777777] dark:text-neutral-400">
      Prompts and private process notes are not shown publicly.{' '}
      <Link
        href="/research/born-into-the-machine"
        className="underline underline-offset-4 transition hover:text-emerald-800 dark:hover:text-emerald-300"
      >
        Born Into the Machine
      </Link>{' '}
      is the parent project.
    </p>
  );
}
