'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import { LEARN_AI_WORKSHOP_HERO_IMAGE } from '@/constants/learn-ai-workshop'

const EMAIL = 'm@moises.tech'

function mailtoInquiry(subject: string, body?: string) {
  const q = new URLSearchParams({ subject })
  if (body) q.set('body', body)
  return `mailto:${EMAIL}?${q.toString()}`
}

function Section({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`max-w-3xl mx-auto px-5 sm:px-6 ${className}`}>
      {children}
    </section>
  )
}

export default function LearnAiWithoutLosingYourselfPageClient() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    audience: '',
    format: '',
    date: '',
    notes: '',
  })

  const submitInquiry = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const lines = [
        form.name && `Name: ${form.name}`,
        form.organization && `Organization: ${form.organization}`,
        form.email && `Email: ${form.email}`,
        form.audience && `Audience: ${form.audience}`,
        form.format && `Preferred format: ${form.format}`,
        form.date && `Proposed date: ${form.date}`,
        form.notes && `Notes / goals:\n${form.notes}`,
      ].filter(Boolean)
      window.location.href = mailtoInquiry('Learn AI Without Losing Yourself — inquiry', lines.join('\n\n'))
    },
    [form]
  )

  return (
    <div className="bg-zinc-950 text-zinc-100 antialiased">
      {/* Hero — editorial banner, not SaaS */}
      <header className="relative min-h-[min(92vh,900px)] flex flex-col justify-end overflow-hidden">
        <Image
          src={LEARN_AI_WORKSHOP_HERO_IMAGE}
          alt="Atmospheric documentation of a live art and technology gathering — placeholder hero for Learn AI Without Losing Yourself until the final workshop banner is added"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/40"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-transparent to-zinc-950/50 md:from-zinc-950/95" aria-hidden />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24 pt-28 sm:pt-36 w-full">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-5">
            Workshop · live session
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05] max-w-4xl">
            Learn AI Without Losing Yourself
          </h1>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl text-zinc-200 font-light max-w-2xl leading-snug">
            A live workshop-performance on practical AI, burnout culture, and staying human in the loop.
          </p>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
            Practical AI skills for writing, research, and creative work — taught through humor, friction, and critical
            reflection.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={mailtoInquiry('Bring “Learn AI Without Losing Yourself” to our space')}
              className="inline-flex justify-center items-center rounded-sm bg-white text-zinc-950 px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-zinc-200 transition-colors"
            >
              Bring this to your space
            </a>
            <a
              href="#inquiry"
              className="inline-flex justify-center items-center rounded-sm border border-zinc-500/80 text-zinc-100 px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Request details
            </a>
          </div>
        </div>
      </header>

      <div className="space-y-20 sm:space-y-28 pb-24 sm:pb-32 pt-16 sm:pt-20">
        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">What it is</h2>
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-300">
            <em className="text-zinc-100 not-italic font-medium">Learn AI Without Losing Yourself</em> is a live
            workshop-performance that blends practical AI literacy, humor, and cultural critique. Through short
            scenarios, live demonstrations, and real-world examples, the session helps audiences learn how to use AI for
            writing, research, brainstorming, and creative work without surrendering their voice, judgment, or sense of
            self.
          </p>
        </Section>

        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">Why this workshop now</h2>
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-300">
            We are living through a moment where speed, responsiveness, and even personality are being optimized in
            real time. AI tools can save time, but they can also flatten expression, create false confidence, and reward
            polish over thought. This workshop was designed for people who want to learn AI without becoming generic,
            over-reliant, or spiritually outsourced in the process.
          </p>
        </Section>

        <Section className="max-w-4xl">
          <blockquote className="border-l-2 border-amber-200/60 pl-6 sm:pl-8 py-2">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-100 leading-tight">
              Use AI for assistance, not surrender.
            </p>
          </blockquote>
        </Section>

        <Section className="max-w-5xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">What audiences learn</h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              'Write without sounding artificial',
              'Research without fake mastery',
              'Brainstorm without flattening creativity',
            ].map((title) => (
              <div
                key={title}
                className="rounded-sm border border-zinc-800 bg-zinc-900/40 px-5 py-6 hover:border-zinc-600 transition-colors"
              >
                <p className="text-zinc-100 font-medium leading-snug">{title}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="max-w-5xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">What should stay human</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-sm border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
              <h3 className="text-sm font-medium text-amber-200/90 mb-4">Human</h3>
              <ul className="text-zinc-300 space-y-2 text-sm sm:text-base leading-relaxed">
                {[
                  'Intention',
                  'Judgment',
                  'Taste',
                  'Ethics',
                  'Context',
                  'Emotional truth',
                  'Final choice',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-zinc-600 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
              <h3 className="text-sm font-medium text-zinc-500 mb-4">Automated</h3>
              <ul className="text-zinc-400 space-y-2 text-sm sm:text-base leading-relaxed">
                {[
                  'First drafts',
                  'Summarization',
                  'Reformatting',
                  'Comparison',
                  'Variation',
                  'Speed',
                  'Pattern assistance',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-zinc-700 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">Sample scenarios</h2>
          <ul className="space-y-4 text-lg text-zinc-300">
            <li className="flex gap-3">
              <span className="text-zinc-600 shrink-0">01</span>
              Writing emails without sounding possessed
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-600 shrink-0">02</span>
              Using summaries without mistaking compression for understanding
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-600 shrink-0">03</span>
              Brainstorming with AI without drowning in generic ideas
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-600 shrink-0">04</span>
              The convenience trap
            </li>
          </ul>
        </Section>

        <Section className="max-w-5xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Format options</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: '30-minute talk', desc: 'Focused provocation and Q&A.' },
              { label: '45-minute session', desc: 'Scenarios, demos, and discussion.' },
              { label: '60-minute workshop', desc: 'Deeper practice and room for friction.' },
              { label: 'Custom versions', desc: 'Tailored length and goals for your space.' },
            ].map((f) => (
              <div key={f.label} className="rounded-sm border border-zinc-800 p-5 sm:p-6">
                <h3 className="text-zinc-100 font-medium">{f.label}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Ideal for</h2>
          <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
            Art spaces, libraries, universities, museums, cultural institutions, coworking spaces, maker spaces, public
            programs, and creative technology events.
          </p>
        </Section>

        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">About Moises</h2>
          <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
            Moises Sanabria is an interdisciplinary artist, technologist, and educator based in Miami. His work explores
            the tensions between digital systems, culture, labor, and identity across installation, live performance,
            media, and public teaching. Through workshops, talks, and creative research, he helps audiences engage
            emerging technologies with both practical skill and critical self-awareness.
          </p>
        </Section>

        <Section id="inquiry" className="max-w-xl scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Bring this to your space</h2>
          <p className="text-zinc-500 mb-8 text-sm sm:text-base leading-relaxed">
            Share a few details — same-day replies when possible. Or email directly at{' '}
            <a href={`mailto:${EMAIL}`} className="text-zinc-300 underline underline-offset-4 hover:text-white">
              {EMAIL}
            </a>
            .
          </p>
          <form onSubmit={submitInquiry} className="space-y-5">
            {(
              [
                ['name', 'Name', 'text'],
                ['organization', 'Organization', 'text'],
                ['email', 'Email', 'email'],
                ['audience', 'Audience type', 'text'],
                ['format', 'Preferred format', 'text'],
                ['date', 'Proposed date', 'text'],
              ] as const
            ).map(([key, label, type]) => (
              <div key={key}>
                <label htmlFor={key} className="block text-xs uppercase tracking-wider text-zinc-500 mb-1.5">
                  {label}
                </label>
                <input
                  id={key}
                  name={key}
                  type={type}
                  autoComplete={key === 'email' ? 'email' : 'off'}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                  className="w-full rounded-sm border border-zinc-800 bg-zinc-900/50 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                />
              </div>
            ))}
            <div>
              <label htmlFor="notes" className="block text-xs uppercase tracking-wider text-zinc-500 mb-1.5">
                Notes / goals for the session
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                className="w-full rounded-sm border border-zinc-800 bg-zinc-900/50 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500 resize-y min-h-[100px]"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex justify-center items-center rounded-sm bg-white text-zinc-950 px-6 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                Send inquiry
              </button>
              <a
                href={mailtoInquiry('Request details: Learn AI Without Losing Yourself')}
                className="inline-flex justify-center items-center rounded-sm border border-zinc-600 text-zinc-200 px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Open email only
              </a>
            </div>
          </form>
        </Section>
      </div>
    </div>
  )
}
