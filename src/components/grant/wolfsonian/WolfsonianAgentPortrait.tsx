'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { WolfsonianRole } from '@/content/grants/wolfsonian-fellowship';

const agentColorMap: Record<string, string> = {
  teal: 'border-teal-600 bg-teal-50 text-teal-900 dark:border-teal-400 dark:bg-teal-950/40 dark:text-teal-100',
  stone: 'border-stone-500 bg-stone-100 text-stone-800 dark:border-stone-400 dark:bg-stone-900/40 dark:text-stone-100',
  violet: 'border-violet-600 bg-violet-50 text-violet-900 dark:border-violet-400 dark:bg-violet-950/40 dark:text-violet-100',
  indigo: 'border-indigo-600 bg-indigo-50 text-indigo-900 dark:border-indigo-400 dark:bg-indigo-950/40 dark:text-indigo-100',
  cyan: 'border-cyan-600 bg-cyan-50 text-cyan-900 dark:border-cyan-400 dark:bg-cyan-950/40 dark:text-cyan-100',
  orange: 'border-orange-600 bg-orange-50 text-orange-900 dark:border-orange-400 dark:bg-orange-950/40 dark:text-orange-100',
  rose: 'border-rose-600 bg-rose-50 text-rose-900 dark:border-rose-400 dark:bg-rose-950/40 dark:text-rose-100',
  zinc: 'border-zinc-500 bg-zinc-100 text-zinc-800 dark:border-zinc-400 dark:bg-zinc-900/40 dark:text-zinc-100',
};

function initialsFromTitle(title: string) {
  return title
    .replace(/^The\s+/i, '')
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function WolfsonianAgentPortrait({
  role,
  active = false,
  size = 'md',
}: {
  role: WolfsonianRole;
  active?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const [imageError, setImageError] = useState(false);
  const colorClass = agentColorMap[role.color ?? 'stone'] ?? agentColorMap.stone;
  const sizeClass =
    size === 'sm' ? 'h-12 w-12 text-xs' : size === 'lg' ? 'h-24 w-24 text-lg' : 'h-16 w-16 text-sm';
  const showImage = (role.portraitSrc || role.portraitExpectedPath) && !imageError;
  const imageSrc = role.portraitSrc ?? role.portraitExpectedPath;

  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center justify-center overflow-hidden border-2 transition',
        sizeClass,
        colorClass,
        active && 'ring-2 ring-offset-2 ring-stone-400 dark:ring-stone-500',
      )}
      aria-hidden="true"
    >
      {showImage && imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-contain p-0.5"
          onError={() => setImageError(true)}
          sizes="96px"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-0.5 p-1 text-center">
          <span className="font-semibold tracking-tight">{initialsFromTitle(role.title)}</span>
          {role.material ? (
            <span className="text-[0.55rem] uppercase tracking-wider opacity-70">{role.material.replace('-', ' ')}</span>
          ) : null}
        </div>
      )}
    </div>
  );
}

export function getAgentColorClass(color?: string) {
  return agentColorMap[color ?? 'stone'] ?? agentColorMap.stone;
}
