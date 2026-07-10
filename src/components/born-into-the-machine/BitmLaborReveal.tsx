'use client';

import type { BitmChapterId } from '@/config/born-into-the-machine-theme';
import {
  getLaborForChapter,
  getLaborForCaseStudy,
} from '@/content/born-into-the-machine/bitm-labor';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

const statusLabels = {
  documented: 'DOCUMENTED',
  partial: 'PARTIAL',
  'being-indexed': 'BEING INDEXED',
  'not-applicable': 'NOT APPLICABLE',
} as const;

export function BitmLaborReveal({
  chapterId,
  caseStudySlug,
  className,
}: {
  chapterId?: BitmChapterId;
  caseStudySlug?: string;
  className?: string;
}) {
  const { showLabor } = useBitm();
  const labor = chapterId
    ? getLaborForChapter(chapterId)
    : caseStudySlug
      ? getLaborForCaseStudy(caseStudySlug)
      : undefined;

  if (!showLabor || !labor) return null;

  const rows = labor.fields.filter((f) => f.value && f.status !== 'not-applicable');
  if (!rows.length) return null;

  return (
    <div
      className={cn(
        'mt-6 border border-[#ff5c00]/30 bg-[#ff5c00]/5 px-4 py-3 font-mono text-[11px] text-[#111111] dark:text-neutral-200',
        className,
      )}
    >
      <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[#ff5c00]">Labor layer</p>
      <dl className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[7rem_1fr] gap-2">
            <dt className="text-[#777777]">
              {r.label}
              <span className="mt-0.5 block text-[8px] text-[#ff5c00]">
                {statusLabels[r.status]}
              </span>
            </dt>
            <dd>{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
