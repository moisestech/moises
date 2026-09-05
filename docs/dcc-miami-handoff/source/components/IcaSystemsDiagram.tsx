'use client';

import Image from 'next/image';
import { ArrowRight, Database, RadioTower, Workflow } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Reconstructed ICA digital-production map.
 * Marked as reconstructed — no private Salesforce, donor, or member data.
 */
export function IcaSystemsDiagram({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        'border border-sky-200 bg-sky-50/70 p-4 sm:p-6',
        className,
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-900">
        System diagram · reconstructed from project work
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <DiagramNode
          icon={Database}
          title="Salesforce"
          body="Collection records"
        />
        <DiagramNode
          icon={Workflow}
          title="WordPress + ticketing"
          body="Public pages, registration"
        />
        <DiagramNode
          icon={RadioTower}
          title="OBS + YouTube"
          body="Programs, captions"
        />
      </div>
      <p className="mt-4 flex flex-wrap items-center gap-2 text-xs leading-relaxed text-sky-950/80">
        <span className="inline-flex items-center gap-1 font-medium">
          Salesforce
          <ArrowRight className="h-3 w-3" aria-hidden />
          WordPress / ticketing
        </span>
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1 font-medium">
          GitHub / GraphQL
          <ArrowRight className="h-3 w-3" aria-hidden />
          AWS CloudFront
        </span>
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1 font-medium">
          OBS
          <ArrowRight className="h-3 w-3" aria-hidden />
          captions / YouTube
        </span>
      </p>
      <figcaption className="mt-3 text-xs leading-relaxed text-neutral-600">
        Museum data, public web, and livestream production as one connected workflow—not three vendor silos.
      </figcaption>
    </figure>
  );
}

function DiagramNode({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Database;
  title: string;
  body: string;
}) {
  return (
    <div className="border border-sky-200 bg-white p-3">
      <Icon className="h-5 w-5 text-sky-800" strokeWidth={1.75} aria-hidden />
      <p className="mt-2 font-['MoMA_Sans'] text-sm font-semibold">{title}</p>
      <p className="mt-0.5 text-xs text-neutral-600">{body}</p>
    </div>
  );
}

export function LaneStackVisual({
  logos,
  accentClass,
}: {
  logos: readonly { src: string; alt: string; height?: number }[];
  accentClass?: string;
}) {
  if (!logos.length) return null;
  return (
    <ul className={cn('mt-4 flex flex-wrap items-center gap-3', accentClass)} aria-label="Software in this lane">
      {logos.map((logo) => (
        <li key={logo.alt} className="flex h-9 items-center border border-neutral-200 bg-white px-2.5">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={Math.round((logo.height ?? 28) * 3)}
            height={logo.height ?? 28}
            className="h-5 w-auto max-w-[88px] object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
