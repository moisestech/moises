'use client';

import Image from 'next/image';
import type { BitmCaseStudy } from '@/content/born-into-the-machine/bitm-case-studies';

export function BitmCaseStudyCardImage({ study }: { study: BitmCaseStudy }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image
        src={study.imageUrl}
        alt={study.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width:768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="absolute bottom-3 left-3 right-3 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
        {study.hoverLine}
      </p>
    </div>
  );
}
