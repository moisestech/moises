'use client';

import Image from 'next/image';
import type { FieldGuidePortraitMeta } from '@/constants/bac-field-guide-images-after-screen';
import { personAvatarPlaceholderUrl } from '@/lib/bac-field-guide-placeholders';

type PersonPortraitProps = {
  name: string;
  portrait: FieldGuidePortraitMeta;
  isDark: boolean;
  size?: number;
};

export function PersonPortrait({ name, portrait, isDark, size = 56 }: PersonPortraitProps) {
  const ring = isDark ? 'ring-1 ring-white/15' : 'ring-1 ring-black/10';
  const hasPhoto = Boolean(portrait.imageUrl);
  const src = hasPhoto ? portrait.imageUrl! : personAvatarPlaceholderUrl(name, isDark);
  const alt = hasPhoto
    ? portrait.creditLine || name
    : `Placeholder avatar for ${name} — replace with a licensed photo when available.`;

  return (
    <div className="flex flex-col gap-1 shrink-0">
      <div
        className={`relative overflow-hidden rounded-full ${ring}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover w-full h-full"
          unoptimized
        />
      </div>
      {portrait.sourcePageUrl && hasPhoto ? (
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
      {portrait.license && hasPhoto ? (
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
