import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type StoryFrameProps = {
  imageUrl?: string;
  alt: string;
  label?: string;
  statusLabel?: string;
  className?: string;
  priority?: boolean;
  hovered?: boolean;
};

export function StoryFrame({
  imageUrl,
  alt,
  label,
  statusLabel,
  className,
  priority = false,
  hovered = false,
}: StoryFrameProps) {
  return (
    <div
      className={cn(
        'relative aspect-[9/16] w-full overflow-hidden border bg-[#f0eeea] transition duration-500 dark:bg-neutral-900',
        hovered
          ? 'border-emerald-600/50 shadow-[0_12px_40px_rgba(4,120,87,0.15)] scale-[1.01]'
          : 'border-[#dedede] dark:border-neutral-700',
        className,
      )}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className={cn('object-cover transition duration-700', hovered && 'scale-[1.03]')}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200/80 via-[#f0eeea] to-emerald-100/40 dark:from-neutral-900 dark:via-neutral-950 dark:to-emerald-950/20">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dedede]/80 bg-white/60 dark:border-neutral-700 dark:bg-neutral-900/60">
              <ImageIcon className="h-5 w-5 text-[#777777] dark:text-neutral-400" aria-hidden />
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#777777] dark:text-neutral-400">
              Vertical study placeholder
            </p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 to-transparent" />
      {(label || statusLabel) && (
        <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-gradient-to-t from-black/80 via-black/55 to-transparent px-3 py-3 backdrop-blur-[2px]">
          {label ? (
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white">{label}</p>
          ) : null}
          {statusLabel ? (
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/75">{statusLabel}</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
