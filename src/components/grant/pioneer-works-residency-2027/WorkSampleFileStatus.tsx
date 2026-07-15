import type { WorkSampleAsset } from '@/content/grants/pioneer-works-residency-2027/shared';

function fileSizeLabel(sample: WorkSampleAsset): string {
  if (sample.fileSizeStatus === 'verified') return 'File size verified under 50 MB';
  if (sample.fileSizeStatus === 'placeholder') return 'File placeholder — authentic asset required';
  return 'File size under 50 MB — unverified';
}

function formatLabel(sample: WorkSampleAsset): string {
  if (sample.formatStatus === 'ready' && sample.mimeType) return `Format: ${sample.mimeType}`;
  if (sample.formatStatus === 'placeholder') return 'Format: placeholder';
  return 'Format: needs check';
}

export function WorkSampleFileStatus({ samples }: { samples: readonly WorkSampleAsset[] }) {
  const ordered = [...samples].sort((a, b) => a.applicationOrder - b.applicationOrder);

  return (
    <ul className="divide-y divide-stone-200 dark:divide-stone-800 border border-stone-200 dark:border-stone-700">
      {ordered.map((sample) => (
        <li key={sample.id} className="px-4 py-3 text-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-medium text-stone-900 dark:text-stone-100">
              {sample.applicationOrder}. {sample.title}
            </p>
            <p className="text-[10px] uppercase tracking-wide text-stone-500">
              App order {sample.applicationOrder} · Page order {sample.proposalOrder}
            </p>
          </div>
          <ul className="mt-2 space-y-1 text-xs text-stone-600 dark:text-stone-400">
            <li>{fileSizeLabel(sample)}</li>
            <li>{formatLabel(sample)}</li>
            <li>
              Caption:{' '}
              {sample.captionStatus === 'draft-ready'
                ? 'draft ready'
                : sample.captionStatus === 'placeholder'
                  ? 'placeholder'
                  : 'needs check'}
            </li>
            <li>Factual verification: {sample.factualVerification}</li>
            <li className="text-stone-500">{sample.notes}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
