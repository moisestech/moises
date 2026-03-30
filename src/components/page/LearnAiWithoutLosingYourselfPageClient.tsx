'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import { LEARN_AI_WORKSHOP_HERO_IMAGE } from '@/constants/learn-ai-workshop'
import { useTheme } from '@/contexts/ThemeContext'

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

function PullQuote({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <blockquote
      className={`border-l-2 border-amber-600/70 dark:border-amber-200/50 pl-5 sm:pl-7 py-1 my-10 sm:my-12 ${className}`}
    >
      <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-900 dark:text-zinc-100 leading-snug italic">
        {children}
      </p>
    </blockquote>
  )
}

const EXTRA_QUOTES = [
  'A summary is not understanding.',
  'More options do not mean more imagination.',
  'Scaling yourself is not the same as saving yourself.',
  'The tools can help you work faster. That does not mean they should decide who you become.',
]

export default function LearnAiWithoutLosingYourselfPageClient() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

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

  const overlayBottom = isDark
    ? 'absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/88 to-zinc-950/30'
    : 'absolute inset-0 bg-gradient-to-t from-white via-white/82 to-white/20'

  const overlaySide = isDark
    ? 'absolute inset-0 bg-gradient-to-r from-zinc-950/93 via-transparent to-zinc-950/48 md:from-zinc-950/96'
    : 'absolute inset-0 bg-gradient-to-r from-white/92 via-transparent to-white/38 md:from-white/96'

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-300">
      {/* 1. Hero */}
      <header className="relative min-h-[min(92vh,920px)] flex flex-col justify-end overflow-hidden">
        <Image
          src={LEARN_AI_WORKSHOP_HERO_IMAGE}
          alt="Learn AI Without Losing Yourself — atmospheric workshop artwork background"
          fill
          priority
          className="object-cover object-[center_22%] sm:object-center"
          sizes="100vw"
        />
        <div className={overlayBottom} aria-hidden />
        <div className={overlaySide} aria-hidden />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24 pt-28 sm:pt-36 w-full">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-5">
            Workshop · live performance
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-950 dark:text-white leading-[1.05] max-w-4xl">
            Learn AI Without Losing Yourself
          </h1>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl text-zinc-800 dark:text-zinc-200 font-light max-w-2xl leading-snug">
            A live workshop-performance on practical AI, burnout culture, and staying human in the loop.
          </p>
          <p className="mt-4 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl leading-relaxed">
            Learn how to use AI for writing, research, and creative work without flattening your voice, outsourcing
            judgment, or mistaking synthetic scale for freedom.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={mailtoInquiry('Bring “Learn AI Without Losing Yourself” to our space')}
              className="inline-flex justify-center items-center rounded-sm bg-zinc-900 text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
            >
              Bring this to your space
            </a>
            <a
              href="#inquiry"
              className="inline-flex justify-center items-center rounded-sm border border-zinc-400 dark:border-zinc-500/80 text-zinc-900 dark:text-zinc-100 px-6 py-3.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
            >
              Request details
            </a>
          </div>
        </div>
      </header>

      <div className="space-y-16 sm:space-y-24 pb-24 sm:pb-32 pt-14 sm:pt-20">
        {/* 2. What It Is */}
        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">What it is</h2>
          <div className="space-y-5 text-lg sm:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              <em className="text-zinc-950 dark:text-zinc-100 not-italic font-medium">Learn AI Without Losing Yourself</em>{' '}
              is a live workshop-performance that blends practical AI literacy, humor, and cultural critique. Through
              short scenarios, live demonstrations, and real-world examples, the session helps audiences learn how to use
              AI for writing, research, brainstorming, and creative work without surrendering their voice, judgment, or
              sense of self.
            </p>
            <p>
              Rather than treating AI as either salvation or catastrophe, the workshop explores the uncomfortable
              middle: pressure, productivity, burnout, over-optimization, and the strange friction of relying on systems
              that are genuinely useful, frequently absurd, and increasingly difficult to ignore.
            </p>
          </div>
        </Section>

        {/* 3. What This Workshop Is Really About */}
        <Section className="max-w-3xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">What this workshop is really about</h2>
          <div className="space-y-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              AI is often sold as empowerment: more speed, more leverage, more output, more scale. But those gains arrive
              inside real pressure — burnout, precarity, always-on expectations, and the growing belief that one person
              should now be able to do the work of many.
            </p>
            <p>
              This workshop teaches practical AI skills while asking a harder question: how do you use these tools without
              losing your voice, outsourcing your judgment, or mistaking synthetic scale for freedom?
            </p>
          </div>
          <PullQuote>Use AI for assistance, not surrender.</PullQuote>
        </Section>

        {/* 4. Why This Workshop Now */}
        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Why this workshop now</h2>
          <div className="space-y-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              We are living through a moment where speed, responsiveness, and even personality are being optimized in
              real time. AI tools can save time, but they can also flatten expression, create false confidence, and
              reward polish over thought.
            </p>
            <p>
              They can also quietly reshape what work expects from us. The more these tools help, the easier it becomes
              for institutions, teams, and individuals to assume that fewer people can now do more — faster, cheaper, and
              with less support.
            </p>
            <p>
              This workshop was designed for people who want to learn AI without becoming generic, over-reliant, or
              spiritually outsourced in the process.
            </p>
          </div>
        </Section>

        <Section className="max-w-4xl">
          <PullQuote>{EXTRA_QUOTES[0]}</PullQuote>
        </Section>

        {/* 5. What Audiences Learn */}
        <Section className="max-w-5xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">What audiences learn</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              {
                title: 'Write without sounding artificial',
                body: 'Learn how to use AI for drafting, editing, and tone-shifting without losing sincerity, specificity, or your own voice.',
              },
              {
                title: 'Research without fake mastery',
                body: 'Learn how to summarize, compare, and extract information with AI while preserving judgment, verification, and context.',
              },
              {
                title: 'Brainstorm without flattening creativity',
                body: 'Learn how to generate options with AI while protecting taste, originality, and the ability to tell when something is technically polished but emotionally dead.',
              },
              {
                title: 'Use AI assistants without confusing scale for support',
                body: 'Learn how AI can function as a stack of helpers — for planning, drafting, organizing, or synthesizing — while staying alert to the hidden labor of supervising, editing, and managing synthetic workflows.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-sm border border-zinc-200 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/35 px-5 py-6 sm:px-6 sm:py-7 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
              >
                <h3 className="text-zinc-950 dark:text-zinc-100 font-medium leading-snug mb-2">{card.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. What Should Stay Human */}
        <Section className="max-w-5xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">What should stay human</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl leading-relaxed">
            AI can help with many parts of the process. The challenge is knowing what should remain yours.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-sm border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30 p-6 sm:p-8">
              <h3 className="text-sm font-medium text-amber-800 dark:text-amber-200/90 mb-4">Human</h3>
              <ul className="text-zinc-700 dark:text-zinc-300 space-y-2 text-sm sm:text-base leading-relaxed">
                {['Intention', 'Judgment', 'Taste', 'Ethics', 'Context', 'Emotional truth', 'Final choice'].map(
                  (item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-zinc-400 dark:text-zinc-600 shrink-0">—</span>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="rounded-sm border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 p-6 sm:p-8">
              <h3 className="text-sm font-medium text-zinc-500 mb-4">Automated</h3>
              <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 text-sm sm:text-base leading-relaxed">
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
                    <span className="text-zinc-400 dark:text-zinc-700 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-lg text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed max-w-2xl">
            The problem is not automation by itself. The problem begins when we automate the parts of ourselves that
            matter most.
          </p>
        </Section>

        <Section className="max-w-4xl">
          <PullQuote>{EXTRA_QUOTES[1]}</PullQuote>
        </Section>

        {/* 7. Sample Scenarios */}
        <Section className="max-w-5xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Sample scenarios</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Writing emails without sounding possessed',
                body: 'How to use AI for structure and clarity without becoming a polite corporate ghost.',
              },
              {
                title: 'Using summaries without mistaking compression for understanding',
                body: 'How to move faster without confusing fluency with real knowledge.',
              },
              {
                title: 'Brainstorming with AI without drowning in generic ideas',
                body: 'How to use AI for variation without outsourcing taste or authorship.',
              },
              {
                title: 'I lost my job and gained 10 AI assistants',
                body: 'A humorous but pointed look at solo scale, synthetic labor, and what it means to become the manager of your own automation stack.',
              },
              {
                title: 'The convenience trap',
                body: 'Why most people do not lose themselves all at once, but one helpful shortcut at a time.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="border-b border-zinc-200 dark:border-zinc-800 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="text-zinc-950 dark:text-zinc-100 font-medium text-lg mb-2">{s.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 8. What Makes This Different */}
        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">What makes this different</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
            This is not a generic AI productivity talk. It does not treat AI as magic, and it does not reduce the
            conversation to fear.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
            Instead, it works in the tension between usefulness and discomfort.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
            The session is designed for people who already feel the contradiction:
          </p>
          <ul className="list-none space-y-3 text-zinc-700 dark:text-zinc-300 mb-6">
            {[
              'AI can help',
              'AI can flatten',
              'AI can speed things up',
              'AI can make you sound less like yourself',
              'AI can make one person feel more powerful',
              'AI can also normalize doing more work with less real support',
            ].map((line) => (
              <li key={line} className="flex gap-3 pl-1">
                <span className="text-amber-600/80 dark:text-amber-200/70 shrink-0">·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-zinc-800 dark:text-zinc-200 leading-relaxed">
            The point is not purity. The point is awareness, practice, and a more conscious relationship to the tools.
          </p>
        </Section>

        <Section className="max-w-4xl">
          <PullQuote>{EXTRA_QUOTES[2]}</PullQuote>
        </Section>

        {/* 9. Format Options */}
        <Section className="max-w-5xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Format options</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: '30-minute talk',
                desc: 'A compact version ideal for public programs, libraries, panels, and conference-style events.',
              },
              {
                label: '45-minute session',
                desc: 'A fuller lecture-performance with practical examples, humor, and audience reflection.',
              },
              {
                label: '60-minute workshop',
                desc: 'An expanded version with deeper scenarios, live demos, and more interactive discussion.',
              },
              {
                label: 'Custom versions',
                desc: 'Can be adapted for artists, students, educators, creative professionals, cultural institutions, libraries, coworking communities, and mixed public audiences.',
              },
            ].map((f) => (
              <div
                key={f.label}
                className="rounded-sm border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
              >
                <h3 className="text-zinc-900 dark:text-zinc-100 font-medium">{f.label}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 10. Ideal For */}
        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Ideal for</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg mb-6">
            This workshop works especially well for mixed audiences who are curious about AI, skeptical of hype, and
            looking for useful, human-centered ways to engage the tools.
          </p>
          <p className="text-sm uppercase tracking-wider text-zinc-500 mb-3">Ideal venues</p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Art spaces, libraries, universities, museums, cultural institutions, coworking spaces, maker spaces, public
            programs, and creative technology events.
          </p>
        </Section>

        {/* 11. Audience Takeaway */}
        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">Audience takeaway</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4 font-medium">Participants leave with:</p>
          <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 mb-8">
            {[
              'Practical AI workflows they can use right away',
              'A clearer sense of what should remain human',
              'Sharper critical awareness around speed, convenience, and over-optimization',
              'A more grounded understanding of what AI changes in writing, research, creativity, and work itself',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-amber-600/90 dark:text-amber-200/80 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            This is not about mastering every tool. It is about learning how to use AI without handing over your voice,
            your judgment, your taste, or your sense of what meaningful support actually looks like.
          </p>
        </Section>

        <Section className="max-w-4xl">
          <PullQuote>{EXTRA_QUOTES[3]}</PullQuote>
        </Section>

        {/* 12. About Moises */}
        <Section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">About Moises</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
            Moises Sanabria is an interdisciplinary artist, technologist, and educator based in Miami. His work explores
            the tensions between digital systems, culture, labor, identity, and public life across installation, live
            performance, media, and teaching. Through workshops, talks, and creative research, he helps audiences
            engage emerging technologies with both practical skill and critical self-awareness.
          </p>
        </Section>

        {/* 13. Bring This to Your Space */}
        <Section id="inquiry" className="max-w-2xl scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-950 dark:text-white mb-3">Bring this to your space</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
            <em className="not-italic font-medium text-zinc-900 dark:text-zinc-200">Learn AI Without Losing Yourself</em> is
            available as a talk, workshop, or customized session for institutions, schools, libraries, cultural
            organizations, and creative communities.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={mailtoInquiry('Book: Learn AI Without Losing Yourself')}
              className="inline-flex justify-center items-center rounded-sm bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Book this workshop
            </a>
            <a
              href={mailtoInquiry('Custom version: Learn AI Without Losing Yourself')}
              className="inline-flex justify-center items-center rounded-sm border border-zinc-400 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
            >
              Ask about a custom version
            </a>
          </div>

          <p className="text-zinc-600 dark:text-zinc-500 mb-6 text-sm sm:text-base leading-relaxed">
            Or send details below — same-day replies when possible. You can also email{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-zinc-900 dark:text-zinc-300 underline underline-offset-4 hover:text-zinc-950 dark:hover:text-white"
            >
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
                  className="w-full rounded-sm border border-zinc-300 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 px-3 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500"
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
                className="w-full rounded-sm border border-zinc-300 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 px-3 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500 resize-y min-h-[100px]"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex justify-center items-center rounded-sm bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 px-6 py-3 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Send inquiry
              </button>
              <a
                href={mailtoInquiry('Request details: Learn AI Without Losing Yourself')}
                className="inline-flex justify-center items-center rounded-sm border border-zinc-400 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 px-6 py-3 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
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
