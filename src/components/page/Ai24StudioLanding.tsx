'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AI24_STUDIO, type ProjectStatus } from '@/content/ai24/studio';

const C = AI24_STUDIO;

const STATUS_COLOR: Record<ProjectStatus, string> = {
  EXHIBITED: 'text-[#E10600]',
  DEPLOYED: 'text-[#0047AB]',
  'PUBLIC PROGRAM': 'text-[#0047AB]',
  RESEARCH: 'text-[#E10600]',
  PROTOTYPE: 'text-neutral-600',
  'IN DEVELOPMENT': 'text-neutral-600',
};

function StatusLabel({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`font-mono text-[11px] sm:text-xs tracking-[0.14em] uppercase ${STATUS_COLOR[status]}`}
    >
      {status}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#0047AB] mb-4">
      {children}
    </p>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: C.engagements.projectTypes[0],
    timeline: '',
    budget: C.engagements.budgetBands[0],
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const params = new URLSearchParams(
        typeof window !== 'undefined' ? window.location.search : ''
      );
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email.trim(),
          source: 'ai24',
          utm_source: params.get('utm_source'),
          utm_medium: params.get('utm_medium'),
          utm_campaign: params.get('utm_campaign'),
          utm_content: params.get('utm_content'),
          utm_term: params.get('utm_term'),
          context: {
            name: form.name.trim() || null,
            organization: form.organization.trim() || null,
            projectType: form.projectType,
            timeline: form.timeline.trim() || null,
            budget: form.budget,
            message: form.message.trim() || null,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    'w-full border border-black/15 bg-white px-3 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-[#0047AB] focus:ring-1 focus:ring-[#0047AB]';

  if (submitted) {
    return (
      <div className="border border-[#0047AB]/30 bg-[#0047AB]/5 p-8">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-[#0047AB] mb-2">
          Transmission received
        </p>
        <p className="text-lg text-black">
          Thanks — we will follow up about your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1.5 block">
            Name
          </span>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className={fieldClass}
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1.5 block">
            Email *
          </span>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
            className={fieldClass}
            autoComplete="email"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1.5 block">
            Organization
          </span>
          <input
            name="organization"
            value={form.organization}
            onChange={onChange}
            className={fieldClass}
            autoComplete="organization"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1.5 block">
            Project type
          </span>
          <select
            name="projectType"
            value={form.projectType}
            onChange={onChange}
            className={fieldClass}
          >
            {C.engagements.projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1.5 block">
            Timeline
          </span>
          <input
            name="timeline"
            value={form.timeline}
            onChange={onChange}
            placeholder="e.g. Fall 2026 / ASAP / exploratory"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1.5 block">
            Approximate budget
          </span>
          <select
            name="budget"
            value={form.budget}
            onChange={onChange}
            className={fieldClass}
          >
            {C.engagements.budgetBands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1.5 block">
          Message
        </span>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={onChange}
          className={fieldClass}
          placeholder="What are you trying to build, present, or learn?"
        />
      </label>
      {error && <p className="text-sm text-[#E10600]">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center bg-black text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#0047AB] transition-colors disabled:opacity-50"
      >
        {loading ? 'Sending…' : 'Start a conversation'}
      </button>
    </form>
  );
}

export default function Ai24StudioLanding() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-black pt-24 sm:pt-28 pb-0">
      {/* Live channel strip */}
      <div className="border-y border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11 py-2 flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-neutral-500">
          <span className="inline-flex items-center gap-2 text-[#E10600]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E10600] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E10600]" />
            </span>
            CHANNEL LIVE
          </span>
          <span>AI24 · MIAMI</span>
          <span className="hidden sm:inline">CULTURE · SYSTEMS · LEARNING</span>
        </div>
      </div>

      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11 pt-12 sm:pt-16 pb-16 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#0047AB] mb-6"
        >
          {C.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-['MoMA_Sans'] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] max-w-5xl mb-8"
        >
          {C.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="text-lg sm:text-xl md:text-2xl leading-snug text-neutral-700 max-w-3xl mb-4"
        >
          {C.hero.support}
        </motion.p>

        <p className="font-mono text-xs sm:text-sm tracking-wide text-neutral-500 mb-10">
          {C.hero.founders}
        </p>

        <div className="flex flex-wrap gap-3 mb-14 sm:mb-16">
          {C.hero.ctas.map((cta, i) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={
                i === 0
                  ? 'inline-flex items-center bg-black text-white px-5 py-3 text-sm font-medium hover:bg-[#0047AB] transition-colors'
                  : 'inline-flex items-center border border-black/20 bg-white px-5 py-3 text-sm font-medium hover:border-[#0047AB] hover:text-[#0047AB] transition-colors'
              }
            >
              {cta.label}
            </Link>
          ))}
        </div>

        {/* Montage — edge-to-edge within content width */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2 -mx-1"
        >
          {C.hero.montage.map((frame) => (
            <figure key={frame.src} className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-200 group">
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 50vw, 20vw"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-white/90">
                  {frame.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </section>

      {/* 2. What AI24 does */}
      <section
        id="practices"
        className="border-t border-black/10 bg-white py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>What AI24 does · 03 practices</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-3xl">
            Art, systems, and learning as one practice
          </h2>
          <p className="text-xl sm:text-2xl leading-snug text-neutral-800 max-w-3xl mb-4">
            {C.positioning.sharp}
          </p>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mb-12 sm:mb-16">
            {C.practicesBridge}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {C.practices.map((p, i) => (
              <article
                key={p.id}
                className="border-t-2 border-black pt-6"
              >
                <p className="font-mono text-[11px] tracking-[0.16em] text-[#E10600] mb-3">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-['MoMA_Sans'] text-2xl sm:text-3xl font-bold mb-4">
                  {p.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Case studies */}
      <section
        id="case-studies"
        className="border-t border-black/10 py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Selected case studies · evidence required</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Substantial projects—not every concept
          </h2>
          <p className="text-neutral-600 mb-12 sm:mb-16 max-w-2xl">
            Status labels keep experimental work honest: a research presentation is not a finished commission.
          </p>

          <div className="space-y-16 sm:space-y-20">
            {C.caseStudies.map((cs, index) => (
              <article
                key={cs.id}
                id={cs.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 border-t border-black/10 pt-10"
              >
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 mb-4">
                    <Image
                      src={cs.image.src}
                      alt={cs.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <StatusLabel status={cs.status} />
                    <span className="font-mono text-[11px] text-neutral-400">
                      {cs.year}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-neutral-400 mb-2">
                    CASE {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-['MoMA_Sans'] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    <Link
                      href={cs.href}
                      className="hover:text-[#0047AB] transition-colors"
                    >
                      {cs.title}
                    </Link>
                  </h3>

                  <dl className="space-y-4 text-sm sm:text-base">
                    {(
                      [
                        ['Context', cs.context],
                        ['Challenge', cs.challenge],
                        ['System', cs.system],
                        ['Outcome', cs.outcome],
                        ['Evidence', cs.evidence],
                        ['Roles', cs.roles],
                        ['Credits', cs.credits],
                      ] as const
                    ).map(([label, value]) => (
                      <div
                        key={label}
                        className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4"
                      >
                        <dt className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#0047AB] pt-0.5">
                          {label}
                        </dt>
                        <dd className="text-neutral-700 leading-relaxed">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    href={cs.href}
                    className="inline-block mt-6 font-mono text-xs tracking-[0.12em] uppercase text-black underline underline-offset-4 hover:text-[#0047AB]"
                  >
                    Open dossier →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How AI24 works */}
      <section
        id="method"
        className="border-t border-black/10 bg-black text-white py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#E10600] mb-4">
            Operating model · 04 stages
          </p>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 sm:mb-16">
            {C.method.title}
          </h2>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 sm:mb-16">
            {C.method.stages.map((stage) => (
              <li key={stage.n} className="border-t border-white/20 pt-5">
                <p className="font-mono text-xs tracking-[0.16em] text-[#7BA3E8] mb-3">
                  {stage.n}
                </p>
                <h3 className="font-['MoMA_Sans'] text-xl sm:text-2xl font-bold mb-3">
                  {stage.title}
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="max-w-3xl text-lg sm:text-xl leading-snug text-white/90 border-l-2 border-[#E10600] pl-5">
            {C.method.principle}
          </p>
        </div>
      </section>

      {/* 5. Ways to work */}
      <section
        id="work-with-us"
        className="border-t border-black/10 bg-white py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>Engagements</SectionLabel>
              <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                {C.engagements.title}
              </h2>
              <p className="text-xl sm:text-2xl leading-snug text-neutral-800 mb-8">
                {C.engagements.cta}
              </p>
              <ul className="space-y-3 mb-8">
                {C.engagements.types.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 text-neutral-700 border-b border-black/10 pb-3"
                  >
                    <span className="text-[#E10600] font-mono text-xs mt-1">▸</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-neutral-500">
                Or email{' '}
                <a
                  href={`mailto:${C.contact.email}`}
                  className="text-[#0047AB] underline underline-offset-2"
                >
                  {C.contact.email}
                </a>
              </p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Research / transmission */}
      <section
        id="transmission"
        className="border-t border-black/10 py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Transmission channel · research</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {C.transmission.title}
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mb-12 sm:mb-14">
            {C.transmission.lead}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {C.transmission.items.map((item) => {
              const inner = (
                <>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <StatusLabel status={item.status} />
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-neutral-400">
                      LOG
                    </span>
                  </div>
                  <h3 className="font-['MoMA_Sans'] text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#0047AB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {item.body}
                  </p>
                </>
              );
              const className =
                'block bg-[#F7F8FA] p-6 sm:p-8 hover:bg-white transition-colors group';
              if ('external' in item && item.external) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <Link key={item.title} href={item.href} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Team */}
      <section
        id="team"
        className="border-t border-black/10 bg-white py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Team · co-founders</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            AI24 belongs to both of us
          </h2>
          <p className="text-neutral-600 max-w-2xl mb-12 sm:mb-16">
            {C.team.lead}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {C.team.members.map((m) => (
              <article key={m.name} className="flex flex-col sm:flex-row gap-6">
                <div className="relative w-full sm:w-40 shrink-0 aspect-[3/4] overflow-hidden bg-neutral-200">
                  <Image
                    src={m.portrait}
                    alt={`${m.name} portrait`}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div>
                  <h3 className="font-['MoMA_Sans'] text-2xl font-bold">
                    {m.name}
                  </h3>
                  <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#0047AB] mt-1 mb-4">
                    {m.role}
                  </p>
                  <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-4">
                    {m.bio}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-neutral-400 mb-2">
                    Responsibilities
                  </p>
                  <ul className="text-sm text-neutral-700 space-y-1 mb-4">
                    {m.responsibilities.map((r) => (
                      <li key={r}>· {r}</li>
                    ))}
                  </ul>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-neutral-400 mb-2">
                    Selected institutional experience
                  </p>
                  <ul className="text-sm text-neutral-700 space-y-1 mb-4">
                    {m.institutions.map((inst) => (
                      <li key={inst}>· {inst}</li>
                    ))}
                  </ul>
                  <a
                    href={m.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-[0.1em] uppercase text-[#E10600] underline underline-offset-4"
                  >
                    {m.website.label} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Partners */}
      <section
        id="partners"
        className="border-t border-black/10 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <SectionLabel>Partners and context · categorized</SectionLabel>
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-4xl font-bold tracking-tight mb-10">
            Relationships, not a logo dump
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {C.partners.map((group) => (
              <div key={group.category}>
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#0047AB] mb-3 border-b border-black/10 pb-2">
                  {group.category}
                </p>
                <ul className="space-y-2 text-neutral-800">
                  {group.names.map((name) => (
                    <li key={name} className="text-sm sm:text-base">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related routes — keep distinct */}
      <section className="border-t border-black/10 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-neutral-400 mb-4">
            Related routes on moises.tech · not absorbed here
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {C.relatedRoutes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group text-sm"
              >
                <span className="font-medium group-hover:text-[#0047AB]">
                  {r.label}
                </span>
                <span className="text-neutral-400 ml-2 font-mono text-[11px]">
                  {r.note}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="border-t border-black/10 bg-[#0047AB] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
          <h2 className="font-['MoMA_Sans'] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-4xl mb-6">
            {C.finalCta.headline}
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mb-10">
            {C.finalCta.body}
          </p>
          <div className="flex flex-wrap gap-3">
            {C.finalCta.buttons.map((btn, i) => {
              const className =
                i === 0
                  ? 'inline-flex items-center bg-white text-black px-5 py-3 text-sm font-medium hover:bg-[#E10600] hover:text-white transition-colors'
                  : 'inline-flex items-center border border-white/40 px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors';
              if ('external' in btn && btn.external) {
                return (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {btn.label}
                  </a>
                );
              }
              return (
                <Link key={btn.label} href={btn.href} className={className}>
                  {btn.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
