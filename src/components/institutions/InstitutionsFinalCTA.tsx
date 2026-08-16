'use client';

import Image from 'next/image';
import { institutionsHub as H } from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstReveal,
  InstSecondaryCta,
} from '@/components/institutions/InstitutionalUi';

export function InstitutionsFinalCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 bg-neutral-950 py-16 text-white sm:py-20"
      aria-labelledby="contact-heading"
    >
      <InstContainer>
        <InstReveal>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 id="contact-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-tight">
                {H.contact.headline}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                {H.contact.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={H.engagement.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-white/90"
                  onClick={() => track('institutions_cta_click', { placement: 'final' })}
                >
                  {H.engagement.primaryCta.label}
                </a>
                <a
                  href={`mailto:${H.contact.email}`}
                  className="inline-flex min-h-11 items-center justify-center border border-white/40 px-5 py-2.5 text-sm font-medium text-white"
                  onClick={() => track('institutions_email_click')}
                >
                  {H.contact.email}
                </a>
                <InstSecondaryCta href={H.contact.cvHref} label="Download technology CV" />
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="relative mx-auto aspect-[4/5] max-w-[280px] overflow-hidden bg-neutral-800">
                <Image
                  src={H.contact.image.src}
                  alt={H.contact.image.alt}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
          </div>
        </InstReveal>
      </InstContainer>
    </section>
  );
}
