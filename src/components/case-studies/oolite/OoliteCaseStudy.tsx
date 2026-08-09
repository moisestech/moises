'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OOLITE_ARTS_CASE_STUDY } from '@/content/oolite-arts/case-study';
import {
  digilabAsset,
  digilabHeroParallaxLayers,
} from '@/content/oolite-arts/media';
import { InstFamilyNav } from '@/components/institutions/InstitutionalUi';
import { AssetNeeded } from './AssetNeeded';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { LabSystemMap } from './LabSystemMap';
import { VisibleInvisibleToggle } from './VisibleInvisibleToggle';

const C = OOLITE_ARTS_CASE_STUDY;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] uppercase text-neutral-500 mb-3">
      {children}
    </p>
  );
}

function DigilabHeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setOffset({ x, y });
  };

  const onLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[70vh] bg-neutral-300 overflow-hidden"
    >
      {digilabHeroParallaxLayers.map((layer, i) => {
        const asset = digilabAsset(layer.id);
        const tx = offset.x * layer.depth * 48;
        const ty = offset.y * layer.depth * 32;
        const scale = 1.1 + layer.depth * 0.35;
        return (
          <div
            key={layer.id}
            className="absolute inset-[-6%] transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`,
              opacity: i === 0 ? 1 : i === 1 ? 0.38 : 0.28,
              zIndex: i,
            }}
          >
            <Image
              src={asset.src}
              alt={i === 0 ? C.overview.heroImage.alt : ''}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
              aria-hidden={i > 0}
            />
          </div>
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20 z-10 pointer-events-none" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-7xl mx-auto w-full z-20">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/80 mb-3">
          Oolite Arts Digital Lab · Miami Beach · {C.overview.period}
        </p>
        <h1 className="font-['MoMA_Sans'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95] max-w-4xl mb-4">
          {C.overview.title}
        </h1>
        <p className="text-white/90 text-base sm:text-xl max-w-2xl mb-2">
          {C.overview.supportingLine}
        </p>
        <p className="font-mono text-[10px] text-white/60 tracking-wide">
          Hover to shift space · layered Digilab photography
        </p>
      </div>
    </div>
  );
}

function ClassArchive() {
  const [topic, setTopic] = useState<string>('all');
  const topics = useMemo(() => {
    const set = new Set<string>();
    C.classes.forEach((c) => c.topics.forEach((t) => set.add(t)));
    return ['all', ...Array.from(set)];
  }, []);

  const filtered =
    topic === 'all'
      ? C.classes
      : C.classes.filter((c) => (c.topics as readonly string[]).includes(topic));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter classes by topic">
        {topics.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={topic === t}
            onClick={() => setTopic(t)}
            className={`font-mono text-[11px] tracking-[0.12em] uppercase px-3 py-2 border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
              topic === t
                ? 'bg-black text-white border-black'
                : 'bg-white border-black/20 hover:border-black/50'
            }`}
          >
            {t === 'all' ? 'All' : t.replace(/-/g, ' ')}
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {filtered.map((cls) => (
          <article
            key={cls.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-black/10 pt-8"
          >
            <div className="lg:col-span-4">
              <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden mb-3">
                {cls.image ? (
                  <Image
                    src={cls.image.src}
                    alt={cls.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-neutral-500 text-center">
                      Class photo pending
                    </p>
                  </div>
                )}
              </div>
              {'documentary' in cls && cls.documentary.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {cls.documentary.map((shot) => (
                    <div
                      key={shot.mediaId ?? shot.src}
                      className="relative aspect-[4/3] bg-neutral-200 overflow-hidden"
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 16vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-2">
                {cls.format} · {cls.level}
                {cls.capacity != null ? ` · Cap ${cls.capacity}` : ''}
              </p>
              <h3 className="font-['MoMA_Sans'] text-2xl sm:text-3xl font-bold mb-2">
                {cls.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">{cls.dateLabel}</p>
              <p className="text-neutral-800 leading-relaxed mb-4">{cls.summary}</p>
              <p className="text-sm text-neutral-600 mb-3">
                Instructors: {cls.instructors.join(' · ')}
              </p>
              {cls.learningOutcomes.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {cls.learningOutcomes.map((o) => (
                    <li key={o} className="text-sm text-neutral-700 flex gap-2">
                      <span className="text-neutral-400">·</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={cls.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-[0.1em] uppercase underline underline-offset-4 hover:text-neutral-600"
              >
                Public source →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function OoliteCaseStudy() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-black pt-24 sm:pt-28">
      <InstFamilyNav active="oolite-arts" className="sticky top-0 z-40 max-w-none [&_div]:max-w-7xl" />
      {/* Disclaimer strip */}
      <div className="border-y border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11 py-3">
          <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.08em] text-neutral-600 leading-relaxed">
            {C.overview.disclaimer}
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <DigilabHeroParallax />
      </section>

      {/* Opening + credits */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11 py-14 sm:py-20">
        <p className="text-xl sm:text-2xl md:text-3xl leading-snug text-neutral-800 max-w-4xl mb-8">
          {C.overview.subtitle}
        </p>
        <blockquote className="border-l-2 border-[#E10600] pl-5 mb-10 max-w-3xl">
          <p className="text-lg sm:text-xl leading-snug text-black">
            {C.overview.thesis}
          </p>
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-black/10 pt-8 mb-8">
          {C.overview.credits.map((c) => (
            <div key={c.name} className="flex gap-4 items-start">
              {'portrait' in c && c.portrait && (
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden bg-neutral-200">
                  <Image
                    src={c.portrait.src}
                    alt={c.portrait.alt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              )}
              <div>
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1">
                  {c.role}
                </p>
                <p className="font-['MoMA_Sans'] text-xl font-bold">{c.name}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-600 mb-6">{C.overview.collaboration}</p>
        <p className="text-sm text-neutral-500">
          Public lab hours: {C.overview.publicLab.hours} · {C.overview.publicLab.languages} ·
          Support acknowledged publicly: {C.overview.publicLab.support}.{' '}
          <a
            href={C.overview.publicLab.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {C.overview.publicLab.sourceLabel}
          </a>
        </p>
      </section>

      {/* Lab gallery */}
      <section id="lab-gallery" className="border-t border-black/10 bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Space</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Digital Lab photography
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-10">
            Entrance, room, stations, and fabrication — named assets from the Digilab media registry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {C.labGallery.map((img, i) => (
              <figure
                key={img.mediaId}
                className={`relative overflow-hidden bg-neutral-200 ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 1024px) 50vw, 33vw'}
                />
                {img.caption && (
                  <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8">
                    <p className="font-mono text-[10px] tracking-[0.08em] text-white/90">
                      {img.caption}
                    </p>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative arc */}
      <section className="border-t border-black/10 bg-[#F7F8FA] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Narrative arc</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-4 max-w-3xl">
            {C.institutionalQuestion.title}
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-10">{C.institutionalQuestion.lead}</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {C.narrativeArc.map((step, i) => (
              <li key={step.title} className="border-t border-black pt-4">
                <p className="font-mono text-[11px] tracking-[0.14em] text-neutral-400 mb-2">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-['MoMA_Sans'] text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
          <ul className="flex flex-wrap gap-3">
            {C.institutionalQuestion.statements.map((s) => (
              <li
                key={s}
                className="font-mono text-[11px] sm:text-xs tracking-[0.08em] uppercase border border-black/15 bg-white px-3 py-2"
              >
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg sm:text-xl max-w-3xl text-neutral-800">
            {C.overview.oneSentence}
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section id="before-after" className="border-t border-black/10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Transformation</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {C.beforeAfter.title}
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-8">{C.beforeAfter.body}</p>
          {C.beforeAfter.pairs.map((pair) => (
            <BeforeAfterSlider
              key={pair.id}
              beforeLabel={pair.beforeLabel}
              afterLabel={pair.afterLabel}
              before={pair.before}
              after={pair.after}
              needed={pair.needed}
            />
          ))}
        </div>
      </section>

      {/* System map */}
      <section id="system" className="border-t border-black/10 bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>What we built · five layers</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Lab as connected system
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-10">
            Click a layer to read the problem, intervention, evidence, and outcome.
          </p>
          <LabSystemMap />
        </div>
      </section>

      {/* Resin workflow */}
      <section id="resin" className="border-t border-black/10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Fabrication knowledge</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {C.resinWorkflow.title}
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-8">{C.resinWorkflow.lead}</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-10">
            <div className="relative lg:col-span-7 aspect-[16/10] bg-neutral-200 overflow-hidden">
              <Image
                src={C.resinWorkflow.image.src}
                alt={C.resinWorkflow.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-3">
              {C.resinWorkflow.supportingImages.map((img) => (
                <div key={img.mediaId} className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
          <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {C.resinWorkflow.steps.map((step, i) => (
              <li
                key={step.id}
                className="border border-black/15 bg-white p-3 min-h-[6.5rem] flex flex-col"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium leading-snug mt-auto">{step.label}</span>
              </li>
            ))}
          </ol>
          <div>
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-3">
              Institutional knowledge required
            </p>
            <ul className="flex flex-wrap gap-2">
              {C.resinWorkflow.institutionalKnowledge.map((k) => (
                <li
                  key={k}
                  className="text-sm border border-black/15 px-3 py-1.5 bg-white"
                >
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="border-t border-black/10 bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Classes as a living program</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Featured Digital Lab workshops
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-8">
            Class cards use workshop banners; documentary stills sit underneath where available.
          </p>
          <ClassArchive />
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="border-t border-black/10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Now offered</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {C.offerings.title}
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-2">{C.offerings.lead}</p>
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-10">
            {C.offerings.originNote}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {C.offerings.items.map((item) => (
              <article key={item.id} className="border border-black/10 bg-white overflow-hidden">
                <div className="relative aspect-[16/10] bg-neutral-200">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-['MoMA_Sans'] text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/artist-infrastructure#contact"
              className="inline-flex items-center bg-black text-white px-5 py-3 text-sm font-medium hover:bg-[#E10600] transition-colors"
            >
              Discuss an offering →
            </Link>
          </div>
        </div>
      </section>

      {/* How artists accessed it */}
      <section id="access" className="border-t border-black/10 bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Access</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {C.artistAccess.title}
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-8">{C.artistAccess.lead}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {C.artistAccess.pathways.map((p) => (
              <li key={p.title} className="border border-black/10 bg-[#F7F8FA] p-5 sm:p-6">
                <h3 className="font-['MoMA_Sans'] text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
          <a
            href={C.artistAccess.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-2"
          >
            {C.artistAccess.sourceLabel}
          </a>
        </div>
      </section>

      {/* Documentation */}
      <section id="documentation" className="border-t border-black/10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Documentation</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {C.documentationResources.title}
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-8">{C.documentationResources.lead}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {C.documentationResources.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-neutral-800 border border-black/10 px-4 py-3 bg-white"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-black" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {C.documentationResources.documentary.map((img) => (
              <div key={img.mediaId} className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist support */}
      <section id="artists" className="border-t border-black/10 bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Helping artists</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Need → obstacle → support → result
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-10">
            Support patterns drawn from public curriculum—not named artists.
            Consented mini case studies can replace these archetypes over time.
          </p>
          <div className="space-y-8">
            {C.artistStories.map((story) => (
              <article
                key={story.id}
                className="border border-black/10 bg-[#F7F8FA] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#E10600] mb-3">
                  {story.anonymizedLabel}
                </p>
                <dl className="space-y-4 text-sm sm:text-base">
                  {(
                    [
                      ['Wanted', story.wanted],
                      ['Obstacle', story.obstacle],
                      ['Support', story.support],
                      ['Result', story.result],
                      ['Next', story.next],
                    ] as const
                  ).map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4"
                    >
                      <dt className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                        {label}
                      </dt>
                      <dd className="text-neutral-800 leading-relaxed">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6">
                  <AssetNeeded asset={story.needed} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Invisible infrastructure — signature */}
      <section id="infrastructure" className="border-t border-black/10 bg-black text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#E10600] mb-3">
            Signature section
          </p>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {C.visibleInvisible.title}
          </h2>
          <p className="text-white/75 max-w-2xl mb-10 text-lg leading-relaxed">
            {C.visibleInvisible.lead}
          </p>
          <VisibleInvisibleToggle tone="dark" />
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="border-t border-black/10 bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Outcomes dashboard</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Verified facts only
          </h2>
          <p className="text-neutral-600 text-sm mb-10 max-w-2xl">{C.metrics.asOfNote}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {C.metrics.items.map((m) => (
              <div
                key={m.id}
                className={`border p-4 sm:p-5 min-h-[8rem] flex flex-col ${
                  m.verified
                    ? 'border-black/15 bg-[#F7F8FA]'
                    : 'border-dashed border-neutral-300 bg-white'
                }`}
              >
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-neutral-500 mb-3">
                  {m.verified ? 'Verified' : 'Pending verification'}
                </p>
                <p className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold mb-1">
                  {m.value ?? '—'}
                </p>
                <p className="text-sm font-medium mb-1">{m.label}</p>
                <p className="text-xs text-neutral-500 mt-auto">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework */}
      <section id="framework" className="border-t border-black/10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Reusable model</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-10">
            {C.framework.title}
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-14">
            {C.framework.steps.map((step) => (
              <li key={step.n} className="border-t-2 border-black pt-4">
                <p className="font-mono text-xs tracking-[0.16em] text-neutral-400 mb-2">
                  {step.n}
                </p>
                <h3 className="font-['MoMA_Sans'] text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="bg-black text-white p-8 sm:p-12">
            <h3 className="font-['MoMA_Sans'] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight max-w-3xl mb-8">
              {C.framework.cta.headline}
            </h3>
            <div className="flex flex-wrap gap-3">
              {C.framework.cta.buttons.map((btn, i) => (
                <Link
                  key={btn.href + btn.label}
                  href={btn.href}
                  className={
                    i === 0
                      ? 'inline-flex items-center bg-white text-black px-5 py-3 text-sm font-medium hover:bg-[#E10600] hover:text-white transition-colors'
                      : 'inline-flex items-center border border-white/40 px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors'
                  }
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section id="credits" className="border-t border-black/10 bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Credits and archive notes</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            Credits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {C.credits.roles.map((r) => (
              <div key={r.name} className="flex gap-4 items-start">
                {'portrait' in r && r.portrait && (
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden bg-neutral-200">
                    <Image
                      src={r.portrait.src}
                      alt={r.portrait.alt}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                )}
                <div>
                  <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1">
                    {r.role}
                  </p>
                  <p className="font-['MoMA_Sans'] text-xl font-bold mb-1">{r.name}</p>
                  <a
                    href={r.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-2 text-neutral-600"
                  >
                    {r.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-600 mb-2">{C.credits.collective}</p>
          <p className="text-sm text-neutral-600 mb-6">{C.credits.funderNote}</p>
          <ul className="space-y-2 mb-8">
            {C.credits.sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-2"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[11px] tracking-[0.08em] text-neutral-500">
            Updated {C.credits.lastUpdated} · {C.credits.phaseNote}
          </p>
        </div>
      </section>
    </main>
  );
}
