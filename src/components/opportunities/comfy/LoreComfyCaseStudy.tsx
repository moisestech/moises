'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { comfyWorkSample, type OwnershipLane } from '@/content/opportunities/comfy/workSample';

const LANE_STYLE: Record<OwnershipLane, { label: string; chip: string; bar: string }> = {
  owned: {
    label: 'Owned by Moises',
    chip: 'border-emerald-400/50 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200',
    bar: 'bg-emerald-500',
  },
  collaborated: {
    label: 'Collaborated on',
    chip: 'border-amber-400/50 bg-amber-500/10 text-amber-900 dark:text-amber-100',
    bar: 'bg-amber-400',
  },
  teammate: {
    label: 'Teammate-owned infrastructure',
    chip: 'border-stone-400/60 bg-stone-500/10 text-stone-700 dark:text-stone-300',
    bar: 'bg-stone-400',
  },
};

function PipelineDiagram({ steps }: { steps: readonly string[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ol
      ref={ref}
      className="mt-6 flex gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] sm:flex-wrap sm:overflow-visible"
      aria-label="System pipeline"
    >
      {steps.map((step, index) => (
        <li key={step} className="flex shrink-0 items-center gap-2">
          <span
            className={cn(
              'rounded-lg border border-stone-300 bg-white px-3 py-2 text-xs font-semibold text-stone-800 shadow-sm transition duration-500 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 sm:text-sm',
              visible || reduceMotion ? 'translate-y-0 opacity-100' : 'translate-y-1.5 opacity-0',
            )}
            style={
              reduceMotion ? undefined : { transitionDelay: visible ? `${index * 70}ms` : '0ms' }
            }
          >
            <span className="mr-1.5 tabular-nums text-yellow-700 dark:text-yellow-400">
              {String(index + 1).padStart(2, '0')}
            </span>
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span
              className="hidden h-px w-6 bg-gradient-to-r from-yellow-500/80 to-stone-300 dark:to-stone-600 sm:block"
              aria-hidden
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function LoreComfyCaseStudy() {
  const cs = comfyWorkSample.caseStudy;
  const headingId = useId();

  return (
    <section
      id={cs.sectionId}
      className="scroll-mt-28 border-t border-stone-200 py-12 dark:border-stone-800 sm:scroll-mt-32 sm:py-16"
      aria-labelledby={headingId}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-yellow-700 dark:text-yellow-400">
        Lead case study
      </p>
      <h2 id={headingId} className="mt-2 text-2xl font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-3xl">
        {cs.title}
      </h2>
      <p className="mt-1 text-sm italic text-stone-600 dark:text-stone-400">{cs.subtitle}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400">
              The challenge
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300 sm:text-base">
              {cs.challenge}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400">
              My role
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              {cs.roleLead}
            </p>
            <ul className="mt-3 space-y-2">
              {cs.roleBullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-stone-700 dark:text-stone-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="overflow-hidden rounded-xl border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-900">
          <div className="relative aspect-[16/10]">
            <Image
              src={cs.evidence.imageSrc}
              alt={cs.evidence.imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <figcaption className="border-t border-stone-200 px-4 py-3 text-xs text-stone-600 dark:border-stone-700 dark:text-stone-400">
            Product surface evidence — Lore Machine creator-facing UI.{' '}
            <a
              href={cs.evidence.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyan-600 underline-offset-2 hover:underline dark:text-cyan-400"
            >
              {cs.evidence.linkLabel}
            </a>
          </figcaption>
        </figure>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400">
          The system
        </h3>
        <p className="mt-2 max-w-3xl text-sm text-stone-600 dark:text-stone-400">
          How narrative entered the product and returned as reviewable visual sequences — with ComfyUI
          as the generative-image execution path.
        </p>
        <PipelineDiagram steps={cs.pipeline} />
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400">
          What you personally owned
        </h3>
        <p className="mt-2 max-w-3xl text-sm text-stone-600 dark:text-stone-400">
          Honest boundaries increase credibility. Color lanes are labeled in text — not color alone.
        </p>
        <ul className="mt-5 space-y-2.5">
          {cs.ownership.map((item) => {
            const lane = LANE_STYLE[item.lane];
            return (
              <li
                key={item.id}
                className="flex flex-col gap-2 rounded-xl border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
              >
                <span className={cn('h-1 w-full rounded-full sm:h-10 sm:w-1.5', lane.bar)} aria-hidden />
                <span
                  className={cn(
                    'inline-flex w-fit shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                    lane.chip,
                  )}
                >
                  {lane.label}
                </span>
                <p className="text-sm text-stone-800 dark:text-stone-200">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400">
          Product and technical decisions
        </h3>
        <ul className="mt-3 grid gap-3 sm:grid-cols-3">
          {cs.decisions.map((d) => (
            <li
              key={d}
              className="rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm leading-relaxed text-stone-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300"
            >
              {d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
