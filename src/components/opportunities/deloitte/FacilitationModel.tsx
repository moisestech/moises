import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { deloitteUi } from '@/components/opportunities/deloitte/deloitteTheme';
import { OpportunityZoomTrigger } from '@/components/opportunities/OpportunityZoomLightbox';
import type { deloitteFacilitationModel } from '@/content/opportunities/deloitte-ai-design-facilitator-fde';
import { cn } from '@/lib/utils';

type FacilitationModelProps = {
  data: typeof deloitteFacilitationModel;
};

export function FacilitationModel({ data }: FacilitationModelProps) {
  return (
    <section id="facilitation" className="scroll-mt-32" aria-labelledby="facilitation-heading">
      <p className={deloitteUi.eyebrow}>{data.eyebrow}</p>
      <h2 id="facilitation-heading" className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.body}`}>{data.intro}</p>

      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.steps.map((step, index) => (
          <li key={step.id} className="border-t border-stone-800 pt-4 dark:border-stone-200">
            <p className={deloitteUi.eyebrow}>
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className={`mt-2 ${opp.h3MoMA}`}>{step.label}</h3>
            <p className={`mt-2 ${opp.body}`}>{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {data.media.map((item) => (
          <figure key={item.src} className={deloitteUi.card}>
            <OpportunityZoomTrigger src={item.src} alt={item.alt} caption={item.caption} className={opp.cardMedia}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </OpportunityZoomTrigger>
            <figcaption className={`px-3 py-2.5 ${opp.subtle}`}>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      <article className={cn(deloitteUi.card, 'mt-8 grid gap-0 lg:grid-cols-2')}>
        <OpportunityZoomTrigger
          src={data.artifact.imageSrc}
          alt={data.artifact.imageAlt}
          caption={data.artifact.title}
          className={cn(opp.cardMedia, 'lg:aspect-auto lg:min-h-[220px]')}
        >
          <Image
            src={data.artifact.imageSrc}
            alt={data.artifact.imageAlt}
            fill
            className="object-contain bg-stone-950 p-3"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </OpportunityZoomTrigger>
        <div className="p-5 sm:p-6">
          <p className={deloitteUi.eyebrow}>Public teaching artifact</p>
          <h3 className={`mt-2 ${opp.h3MoMA}`}>{data.artifact.title}</h3>
          <p className={`mt-2 ${opp.body}`}>{data.artifact.body}</p>
          <Link
            href={data.artifact.href}
            className={cn(
              'mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-medium',
              deloitteUi.limeText,
              'underline-offset-2 hover:underline',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86BC25]',
            )}
          >
            {data.artifact.hrefLabel}
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </article>
    </section>
  );
}
