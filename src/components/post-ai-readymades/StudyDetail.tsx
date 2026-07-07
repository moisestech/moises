'use client';

import Link from 'next/link';
import type { Study } from '@/content/post-ai-readymades/postAiReadymades';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { StatusChip } from '@/components/post-ai-readymades/StatusChip';
import { StoryFrame } from '@/components/post-ai-readymades/StoryFrame';

type StudyDetailProps = {
  study: Study | null;
  onClose: () => void;
};

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-[#dedede] py-3 dark:border-neutral-800 sm:grid-cols-[10rem_1fr]">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-[#111111] dark:text-neutral-200">{value}</dd>
    </div>
  );
}

function DetailList({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="grid gap-1 border-b border-[#dedede] py-3 dark:border-neutral-800 sm:grid-cols-[10rem_1fr]">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-[#111111] dark:text-neutral-200">{values.join(' · ')}</dd>
    </div>
  );
}

export function StudyDetail({ study, onClose }: StudyDetailProps) {
  return (
    <Dialog open={study !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-[#dedede] bg-[#f7f5f0] p-0 dark:border-neutral-700 dark:bg-neutral-950">
        {study ? (
          <div className="grid md:grid-cols-[minmax(0,280px)_1fr]">
            <div className="border-b border-[#dedede] p-4 dark:border-neutral-800 md:border-b-0 md:border-r">
              <StoryFrame
                imageUrl={study.imageUrl}
                alt={`${study.title} — study ${study.number}`}
                label={`Study ${study.number}`}
                statusLabel={study.status}
              />
            </div>

            <div className="p-6 sm:p-8">
              <DialogHeader className="mb-6 space-y-3 text-left">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#777777] dark:text-neutral-400">
                  Study {study.number}
                </p>
                <DialogTitle className="text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
                  {study.title}
                </DialogTitle>
                <StatusChip status={study.status} />
              </DialogHeader>

              <p className="mb-8 text-base leading-relaxed text-[#111111] dark:text-neutral-200">
                {study.shortDescription}
              </p>

              <dl>
                <DetailRow label="Year" value={study.year} />
                <DetailRow label="Series" value={study.series} />
                <DetailRow label="Parent project" value={study.parentProject} />
                <DetailRow label="Object family" value={study.objectFamily} />
                <DetailList label="Primary objects" values={study.primaryObjects} />
                <DetailRow label="Image / object balance" value={study.imageObjectBalance} />
                <DetailList label="Missing labor type" values={study.missingLaborType} />
                <DetailList label="Rawness source" values={study.rawnessSource} />
                <DetailRow label="Public status" value={study.status} />
              </dl>

              {study.artworkSlug ? (
                <div className="mt-8">
                  <Link
                    href={`/art/${study.artworkSlug}`}
                    className="inline-flex min-h-11 items-center border border-[#111111] px-4 py-2 text-sm font-medium text-[#111111] transition-colors hover:bg-[#111111] hover:text-white dark:border-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-black"
                  >
                    View existing work
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
