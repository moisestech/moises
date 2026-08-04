'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OOLITE_ARTS_CASE_STUDY } from '@/content/oolite-arts/case-study';
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
              {cls.needed && <AssetNeeded asset={cls.needed} />}
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
        <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[70vh] bg-neutral-300 overflow-hidden">
          <Image
            src={C.overview.heroImage.src}
            alt={C.overview.heroImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-7xl mx-auto w-full">
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
              Phase 1 · Static hero · 360° immersive view pending
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11 py-4">
          <AssetNeeded asset={C.overview.neededHero360} />
        </div>
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
            <div key={c.name}>
              <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1">
                {c.role}
              </p>
              <p className="font-['MoMA_Sans'] text-xl font-bold">{c.name}</p>
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

      {/* Narrative arc */}
      <section className="border-t border-black/10 bg-white py-14 sm:py-20">
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
                className="font-mono text-[11px] sm:text-xs tracking-[0.08em] uppercase border border-black/15 bg-[#F7F8FA] px-3 py-2"
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
          <div className="mb-6">
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
          <AssetNeeded asset={C.resinWorkflow.needed} />
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
            Records grounded in Oolite Arts public class pages. Photo galleries expand as assets arrive.
          </p>
          <ClassArchive />
        </div>
      </section>

      {/* Artist support */}
      <section id="artists" className="border-t border-black/10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Helping artists</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Need → obstacle → support → result
          </h2>
          <p className="text-neutral-700 max-w-2xl mb-10">
            Phase 1 shows support patterns drawn from public curriculum—not named artists.
            Consented mini case studies will replace these archetypes.
          </p>
          <div className="space-y-8">
            {C.artistStories.map((story) => (
              <article
                key={story.id}
                className="border border-black/10 bg-white p-6 sm:p-8"
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
            Attribution
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {C.credits.roles.map((r) => (
              <div key={r.name}>
                <p className="font-['MoMA_Sans'] text-xl font-bold">{r.name}</p>
                <p className="text-sm text-neutral-600 mt-1 mb-2">{r.role}</p>
                <a
                  href={r.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-[0.1em] uppercase underline underline-offset-4"
                >
                  {r.website.replace(/^https?:\/\//, '')} →
                </a>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-700 mb-2">
            Developed in collaboration with: {C.credits.collective}
          </p>
          <p className="text-sm text-neutral-600 mb-6">{C.credits.funderNote}</p>
          <p className="text-sm text-neutral-600 mb-8 max-w-3xl">{C.overview.disclaimer}</p>

          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-3">
            Sources
          </p>
          <ul className="space-y-2 mb-8">
            {C.credits.sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-2 hover:text-neutral-600"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs text-neutral-500">
            Last updated {C.credits.lastUpdated} · {C.credits.phaseNote}
          </p>
        </div>
      </section>
    </main>
  );
}
