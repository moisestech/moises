'use client';

import { cn } from '@/lib/utils';

const variants = ['usb', 'pacifier', 'eye-camera', 'ethernet', 'rack'] as const;

export function BitmChromeObject({
  variant = 'usb',
  className,
}: {
  variant?: (typeof variants)[number];
  className?: string;
}) {
  return (
    <div
      className={cn(
        'pointer-events-none select-none',
        'h-10 w-10 rounded-sm border border-[#c4c4c4]/80',
        'bg-gradient-to-br from-[#f5f5f5] via-[#c4c4c4] to-[#888888]',
        'shadow-md dark:from-neutral-700 dark:via-neutral-500 dark:to-neutral-800',
        'animate-[bitm-chrome-tilt_6s_ease-in-out_infinite_alternate]',
        className,
      )}
      style={{ transform: 'perspective(200px) rotateY(-8deg)' }}
      aria-hidden
    >
      <div className="flex h-full items-center justify-center font-mono text-[7px] text-[#111111]/60 uppercase">
        {variant.slice(0, 3)}
      </div>
    </div>
  );
}
