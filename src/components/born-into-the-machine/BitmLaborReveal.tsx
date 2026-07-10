'use client';

import type { BitmChapterId } from '@/config/born-into-the-machine-theme';
import { getLaborForChapter } from '@/content/born-into-the-machine/bitm-labor';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmLaborReveal({
  chapterId,
  className,
}: {
  chapterId: BitmChapterId;
  className?: string;
}) {
  const { showLabor } = useBitm();
  const labor = getLaborForChapter(chapterId);
  if (!showLabor || !labor) return null;

  const rows = [
    labor.hours && { k: 'Hours', v: labor.hours },
    labor.materials && { k: 'Materials', v: labor.materials },
    labor.tools && { k: 'Tools', v: labor.tools },
    labor.collaborators && { k: 'Collaborators', v: labor.collaborators },
    labor.failures && { k: 'Failures', v: labor.failures },
    labor.maintenance && { k: 'Maintenance', v: labor.maintenance },
    labor.costRange && { k: 'Cost', v: labor.costRange },
  ].filter(Boolean) as { k: string; v: string }[];

  if (!rows.length) return null;

  return (
    <div
      className={cn(
        'mt-6 border border-[#ff5c00]/30 bg-[#ff5c00]/5 px-4 py-3 font-mono text-[11px] text-[#111111] dark:text-neutral-200',
        className,
      )}
    >
      <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[#ff5c00]">Labor layer</p>
      <dl className="space-y-1">
        {rows.map((r) => (
          <div key={r.k} className="grid grid-cols-[7rem_1fr] gap-2">
            <dt className="text-[#777777]">{r.k}</dt>
            <dd>{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
