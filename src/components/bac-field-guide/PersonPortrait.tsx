'use client';

import Image from 'next/image';
import type { FieldGuidePortraitMeta } from '@/constants/bac-field-guide-images-after-screen';

function initialsFromName(name: string): string {
  const duo = name.split(/\s*&\s*/).map((p) => p.trim()).filter(Boolean);
  if (duo.length >= 2) {
    const a = duo[0].match(/\p{L}/u)?.[0] ?? duo[0][0];
    const b = duo[1].match(/\p{L}/u)?.[0] ?? duo[1][0];
    return `${a}${b}`.toUpperCase();
  }
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    const a = words[0].match(/\p{L}/u)?.[0] ?? words[0][0];
    const b = words[1].match(/\p{L}/u)?.[0] ?? words[1][0];
    return `${a}${b}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

type PersonPortraitProps = {
  name: string;
  portrait: FieldGuidePortraitMeta;
  isDark: boolean;
  size?: number;
};

export function PersonPortrait({ name, portrait, isDark, size = 56 }: PersonPortraitProps) {
  const initial = initialsFromName(name);
  const ring = isDark ? 'ring-1 ring-white/15' : 'ring-1 ring-black/10';

  return (
    <div className="flex flex-col gap-1 shrink-0">
      <div
        className={`relative overflow-hidden rounded-full ${ring}`}
        style={{ width: size, height: size }}
      >
        {portrait.imageUrl ? (
          <Image
            src={portrait.imageUrl}
            alt={portrait.creditLine || name}
            width={size}
            height={size}
            className="object-cover w-full h-full"
            unoptimized
          />
        ) : (
          <span
            className={`flex h-full w-full items-center justify-center text-sm font-semibold tracking-tight ${
              isDark ? 'bg-white/10 text-neutral-200' : 'bg-neutral-200 text-neutral-700'
            }`}
            aria-hidden
          >
            {initial}
          </span>
        )}
      </div>
      {portrait.sourcePageUrl ? (
        <a
          href={portrait.sourcePageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-[10px] leading-tight underline underline-offset-2 max-w-[5.5rem] ${
            isDark ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          Photo source
        </a>
      ) : null}
      {portrait.license && portrait.imageUrl ? (
        <p
          className={`text-[10px] leading-tight max-w-[5.5rem] ${
            isDark ? 'text-neutral-600' : 'text-neutral-500'
          }`}
        >
          {portrait.license}
        </p>
      ) : null}
    </div>
  );
}
