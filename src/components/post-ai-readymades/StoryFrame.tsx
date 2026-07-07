import Image from 'next/image';
import { cn } from '@/lib/utils';

type StoryFrameProps = {
  imageUrl?: string;
  alt: string;
  label?: string;
  statusLabel?: string;
  className?: string;
  priority?: boolean;
};

export function StoryFrame({
  imageUrl,
  alt,
  label,
  statusLabel,
  className,
  priority = false,
}: StoryFrameProps) {
  return (
    <div
      className={cn(
        'relative aspect-[9/16] w-full overflow-hidden border border-[#dedede] bg-[#f0eeea] dark:border-neutral-700 dark:bg-neutral-900',
        className,
      )}
    >
      {imageUrl ? (
        <Image src={imageUrl} alt={alt} fill className="object-cover" priority={priority} sizes="(max-width: 768px) 100vw, 33vw" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <div className="h-px w-12 bg-[#dedede] dark:bg-neutral-600" />
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#777777] dark:text-neutral-400">
            Vertical study placeholder
          </p>
          <div className="h-px w-12 bg-[#dedede] dark:bg-neutral-600" />
        </div>
      )}
      {(label || statusLabel) && (
        <div className="absolute inset-x-0 bottom-0 border-t border-[#dedede]/80 bg-white/90 px-3 py-2 backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-950/90">
          {label ? (
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#111111] dark:text-neutral-100">
              {label}
            </p>
          ) : null}
          {statusLabel ? (
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] dark:text-neutral-400">
              {statusLabel}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
