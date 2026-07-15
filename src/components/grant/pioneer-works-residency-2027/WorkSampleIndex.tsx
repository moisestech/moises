import Image from 'next/image';
import type { WorkSampleAsset } from '@/content/grants/pioneer-works-residency-2027/shared';

function statusLabel(sample: WorkSampleAsset): string {
  if (!sample.physicallyBuilt) return 'Not yet built · placeholder asset';
  if (sample.assetVerification === 'verified') return 'Asset linked · file size unverified';
  return 'Asset needs verification';
}

export function WorkSampleIndex({ samples }: { samples: readonly WorkSampleAsset[] }) {
  const ordered = [...samples].sort((a, b) => a.applicationOrder - b.applicationOrder);

  return (
    <ul className="space-y-6">
      {ordered.map((sample) => (
        <li
          key={sample.id}
          className="grid sm:grid-cols-[7rem_1fr] gap-4 border-b border-stone-200 dark:border-stone-800 pb-6 last:border-0"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-900 border border-dashed border-stone-400 dark:border-stone-600">
            {sample.image ? (
              <Image
                src={sample.image}
                alt={sample.title}
                fill
                className="object-cover"
                sizes="7rem"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center px-2">
                <p className="text-[10px] uppercase tracking-wide text-amber-800 dark:text-amber-200 text-center">
                  [PLACEHOLDER — AUTHENTIC ASSET REQUIRED]
                </p>
              </div>
            )}
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">
              Sample {sample.applicationOrder}
            </p>
            <h3 className="font-semibold text-stone-900 dark:text-stone-100">
              {sample.title} <span className="text-stone-500 font-normal">({sample.year})</span>
            </h3>
            <p className="text-xs text-stone-500 mt-1">{sample.medium}</p>
            <p className="text-xs text-stone-500">{sample.dimensions}</p>
            {sample.collaborator ? (
              <p className="text-xs text-stone-500">with {sample.collaborator}</p>
            ) : null}
            <p className="mt-2 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {sample.context}
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-wide text-[#6b4f3a]">
              {statusLabel(sample)} · factual {sample.factualVerification}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
