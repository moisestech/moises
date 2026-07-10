'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';

export function BitmAuthorOperator() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('author', ref);
  const accent = getBitmChapterAccent('author');

  return (
    <section
      id="author"
      ref={ref}
      className="mb-16 scroll-mt-44 pb-16 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <BitmSectionHeader
        eyebrow="Chapter 08"
        title="Author / Operator / Collaborators"
        iconKey="human-machine"
        accent={accent}
      />
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#111111] dark:text-neutral-200">
        {bitmPage.authorIntro}
      </p>

      <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
        <div className="relative aspect-square max-w-[200px] overflow-hidden border border-[#c4c4c4]/50">
          <Image
            src={bitmAssets.portraits.secondary}
            alt="Moises Sanabria — studio portrait, Bakehouse Studio 43"
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]">
            Bakehouse Art Complex · Studio 43 · Miami
          </p>
          <div className="flex flex-wrap gap-3">
            {bitmPage.ctas.map((cta) => (
              <Link
                key={cta.kind}
                href={cta.href}
                className="border border-[#111111] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white dark:border-neutral-300 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-[#111111]"
              >
                {cta.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#777777] dark:text-neutral-400">
            Collaborators are credited on individual case studies. Fields marked partial or needed
            await verification before publication.
          </p>

          <div className="mt-10">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777]">
              Deeper project
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {bitmPage.deeperLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block border border-[#dedede] p-4 transition-colors hover:border-[#ff5c00]/50 dark:border-neutral-700"
                  >
                    <span className="font-semibold text-[#111111] dark:text-neutral-100">
                      {link.label}
                    </span>
                    <p className="mt-1 text-sm text-[#777777] dark:text-neutral-400">
                      {link.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <img
          src={bitmAssets.signature}
          alt="Author signature"
          className="h-8 opacity-70"
        />
      </div>

      <BitmLaborReveal chapterId="author" />
    </section>
  );
}
