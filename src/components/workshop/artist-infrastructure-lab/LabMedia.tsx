import {
  TRUTH_LABEL,
  labMark,
  labMedia,
  type LabMarkId,
  type LabMediaAsset,
} from '@/content/workshops/artist-infrastructure-lab';
import { cn } from '@/lib/utils';

const aspectClass = {
  '3/2': 'aspect-[3/2]',
  '4/5': 'aspect-[4/5]',
  '16/9': 'aspect-video',
} as const;

export function LabMedia({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const asset = labMedia(id);
  if (!asset) return null;
  return (
    <figure className={cn('space-y-2', className)}>
      <LabMediaFrame asset={asset} />
      <figcaption className="text-sm leading-relaxed text-[#3d3832]">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#0f5f5c]">
          {TRUTH_LABEL[asset.kind]}
        </span>
        {asset.caption}
      </figcaption>
    </figure>
  );
}

export function LabIcon({ id, className }: { id: string; className?: string }) {
  const asset = labMedia(id);
  if (!asset?.iconSrc) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset.iconSrc}
      alt=""
      aria-hidden="true"
      className={cn('size-6 shrink-0 object-contain', className)}
    />
  );
}

export function LabObject({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const asset = labMedia(id);
  if (!asset?.transparentSrc) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset.transparentSrc}
      alt={asset.alt}
      className={cn('max-h-72 w-full object-contain', className)}
    />
  );
}

export function LabMark({
  id,
  className,
}: {
  id: LabMarkId;
  className?: string;
}) {
  const mark = labMark(id);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={mark.iconSrc}
      alt=""
      aria-hidden="true"
      title={mark.alt}
      className={cn('size-10 shrink-0 object-contain', className)}
    />
  );
}

function LabMediaFrame({ asset }: { asset: LabMediaAsset }) {
  if (asset.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={asset.src}
        alt={asset.alt}
        className={cn(
          'w-full border border-[#d9d0c3] object-cover',
          aspectClass[asset.aspect]
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'flex flex-col justify-between border border-dashed border-[#b7aa9a] bg-[#e7e0d4] p-4',
        aspectClass[asset.aspect]
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#0f5f5c]">
        {TRUTH_LABEL[asset.kind]} · file not yet uploaded
      </p>
      <p className="max-w-xl text-sm leading-relaxed text-[#1c1916]">
        {asset.alt}
      </p>
      <p className="font-mono text-[11px] text-[#5c564e]">{asset.filename}</p>
    </div>
  );
}
