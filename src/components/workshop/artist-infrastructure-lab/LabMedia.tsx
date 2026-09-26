import { TRUTH_LABEL, labMedia, type LabMediaAsset } from '@/content/workshops/artist-infrastructure-lab'
import { cn } from '@/lib/utils'

const aspectClass = {
  '3/2': 'aspect-[3/2]',
  '4/5': 'aspect-[4/5]',
  '16/9': 'aspect-video',
} as const

export function LabMedia({
  id,
  className,
}: {
  id: string
  className?: string
}) {
  const asset = labMedia(id)
  if (!asset) return null
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
  )
}

function LabMediaFrame({ asset }: { asset: LabMediaAsset }) {
  if (asset.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={asset.src}
        alt={asset.alt}
        className={cn('w-full border border-[#d9d0c3] object-cover', aspectClass[asset.aspect])}
      />
    )
  }

  return (
    <div
      className={cn(
        'flex flex-col justify-between border border-dashed border-[#b7aa9a] bg-[#e7e0d4] p-4',
        aspectClass[asset.aspect],
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#0f5f5c]">
        {TRUTH_LABEL[asset.kind]} · file not yet uploaded
      </p>
      <p className="max-w-xl text-sm leading-relaxed text-[#1c1916]">{asset.alt}</p>
      <p className="font-mono text-[11px] text-[#5c564e]">{asset.filename}</p>
    </div>
  )
}
