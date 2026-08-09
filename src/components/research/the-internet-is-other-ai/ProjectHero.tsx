'use client';

import Image from 'next/image';
import { media, projectMeta } from '@/content/research/the-internet-is-other-ai/projectData';

export function ProjectHero() {
  return (
    <section className="border-b border-[#f0eee5]/15" aria-labelledby="tioa-hero-title">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:items-end md:gap-10 md:px-6 md:py-14">
        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8d9088]">
            {projectMeta.category}
          </p>
          <h1
            id="tioa-hero-title"
            className="text-[clamp(2.4rem,7vw,4.75rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[#f0eee5]"
          >
            THE INTERNET
            <br />
            IS OTHER AI
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#f0eee5]/85 md:text-lg">
            {projectMeta.lede}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#protocol"
              className="inline-flex min-h-11 items-center justify-center border border-[#b6e2ba] bg-[#b6e2ba] px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#10110f] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
            >
              ENTER THE AGENT WEB
            </a>
            <a
              href="#proposition"
              className="inline-flex min-h-11 items-center justify-center border border-[#f0eee5]/40 px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#f0eee5] transition-colors hover:border-[#f0eee5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
            >
              READ THE PROPOSITION
            </a>
          </div>
        </div>

        <figure className="relative">
          <div className="relative aspect-[16/9] overflow-hidden border border-[#f0eee5]/20 bg-[#10110f]">
            <Image
              src={media.entry.src}
              alt={media.entry.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
            {media.entry.label}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
