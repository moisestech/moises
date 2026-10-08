import Image from 'next/image'
import {
  dailyOperatorCloudinaryUrl,
  type DailyOperatorMediaAsset,
} from '@/content/workshops/ai-daily-operator/media'

export function WorkshopMediaFigure({
  asset,
  caption,
  priority = false,
  className = '',
}: {
  asset: DailyOperatorMediaAsset
  caption?: string
  priority?: boolean
  className?: string
}) {
  if (
    asset.delivery !== 'cloudinary' ||
    asset.status !== 'approved' ||
    !asset.width ||
    !asset.height
  ) {
    return null
  }

  return (
    <figure className={className}>
      <div className="overflow-hidden border border-[#d9d0c3] bg-[#fbf7f1]">
        <Image
          src={dailyOperatorCloudinaryUrl(asset.publicId)}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full object-contain"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 max-w-2xl text-xs leading-relaxed text-[#5c564e]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
