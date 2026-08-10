'use client';

import { useId, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { RoleReferenceData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type RoleReferenceAccordionProps = {
  data: RoleReferenceData;
  sectionId?: string;
};

export function RoleReferenceAccordion({
  data,
  sectionId = 'role-reference',
}: RoleReferenceAccordionProps) {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  return (
    <section id={sectionId} className={opp.sectionSm} aria-labelledby={`${sectionId}-heading`}>
      <div className={cn(opp.card, 'overflow-hidden')}>
        <h2 id={`${sectionId}-heading`} className="sr-only">
          {data.title}
        </h2>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={opp.h3MoMA}>{data.title}</span>
          <ChevronDown
            className={cn(
              'h-4 w-4 shrink-0 text-stone-500 transition motion-reduce:transition-none',
              open && 'rotate-180',
            )}
            aria-hidden
          />
        </button>
        {open ? (
          <div id={panelId} className="border-t border-stone-100 dark:border-stone-800 px-5 py-4">
            <dl className="grid gap-3 sm:grid-cols-2">
              {data.fields.map((field) => (
                <div key={field.label}>
                  <dt className={opp.label}>{field.label}</dt>
                  <dd className={`mt-0.5 ${opp.body}`}>{field.value}</dd>
                </div>
              ))}
            </dl>
            {data.narrativeSections?.length ? (
              <div className="mt-6 space-y-5 border-t border-stone-100 pt-5 dark:border-stone-800">
                {data.narrativeSections.map((section) => (
                  <div key={section.heading}>
                    <p className={opp.label}>{section.heading}</p>
                    <p className={`mt-1.5 max-w-3xl ${opp.body}`}>{section.body}</p>
                  </div>
                ))}
              </div>
            ) : null}
            <p className={`mt-5 ${opp.label}`}>Core platform references</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {data.platformReferences.map((ref) => (
                <li key={ref} className={opp.pill}>
                  {ref}
                </li>
              ))}
            </ul>
            {data.listingUrl ? (
              <a
                href={data.listingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center gap-1 text-sm ${opp.linkAccent}`}
              >
                {data.listingUrlLabel ?? 'Original job listing'}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : (
              <p className={`mt-4 ${opp.subtle}`}>
                Original job listing URL: TODO — add when a verified Affirm careers link is available.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
