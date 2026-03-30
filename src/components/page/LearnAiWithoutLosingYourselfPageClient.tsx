'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  LEARN_AI_DIFFERENTIATION_BULLETS,
  LEARN_AI_FORMATS,
  LEARN_AI_IDEAL_INTRO,
  LEARN_AI_IDEAL_VENUES,
  LEARN_AI_LEARNING_OUTCOMES,
  LEARN_AI_OUTCOMES_HEADING,
  LEARN_AI_PROBLEM_LEAD,
  LEARN_AI_PROBLEM_SECOND,
  LEARN_AI_QUOTE_ASSISTANCE,
  LEARN_AI_QUOTE_SCALING,
  LEARN_AI_QUOTE_SUMMARY,
  LEARN_AI_SCENARIOS,
} from '@/constants/learn-ai-content'
import { LearnAiAboutBlock } from '@/components/learn-ai/LearnAiAboutBlock'
import { LearnAiHero } from '@/components/learn-ai/LearnAiHero'
import { LearnAiHumanSplit } from '@/components/learn-ai/LearnAiHumanSplit'
import { LearnAiInquiryForm, LEARN_AI_EMAIL } from '@/components/learn-ai/LearnAiInquiryForm'
import { GlyphListMark } from '@/components/learn-ai/LearnAiGlyphs'
import { LearnAiLearningCard } from '@/components/learn-ai/LearnAiLearningCard'
import { LearnAiProcessFour } from '@/components/learn-ai/LearnAiProcessFour'
import { LearnAiProofBlock } from '@/components/learn-ai/LearnAiProofBlock'
import { LearnAiPullQuote } from '@/components/learn-ai/LearnAiPullQuote'
import { LearnAiQuickFacts } from '@/components/learn-ai/LearnAiQuickFacts'
import { LearnAiReveal } from '@/components/learn-ai/LearnAiReveal'
import { LearnAiScenarioCard } from '@/components/learn-ai/LearnAiScenarioCard'
import { LearnAiSection } from '@/components/learn-ai/LearnAiSection'
import {
  learnAiAtmosphereNavy,
  learnAiPageRoot,
  learnAiSectionEyebrow,
  learnAiSectionTitle,
} from '@/components/learn-ai/learn-ai-tokens'
import { mailtoLearnAi } from '@/lib/learn-ai-mailto'
import { cn } from '@/lib/utils'

function FormatCard({ duration, kind, desc }: { duration: string; kind: string; desc: string }) {
  const reduce = useReducedMotion() ?? false
  const inner = (
    <div
      className={cn(
        'h-full rounded-sm border p-5 sm:p-6 transition-all duration-300',
        'border-zinc-800 bg-zinc-900/25',
        !reduce && 'hover:-translate-y-0.5 hover:border-lime-500/25 hover:shadow-[0_0_0_1px_rgba(163,230,53,0.08)]'
      )}
    >
      <h3 className="text-zinc-100">
        <span className="font-semibold text-lime-400/90">{duration}</span>{' '}
        <span className="font-medium text-zinc-300">{kind}</span>
      </h3>
      <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  )
  if (reduce) return inner
  return (
    <motion.div whileHover={{ scale: 1.005 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
      {inner}
    </motion.div>
  )
}

export default function LearnAiWithoutLosingYourselfPageClient() {
  return (
    <div className={learnAiPageRoot()}>
      <LearnAiHero />
      <LearnAiQuickFacts />

      <div className="space-y-20 sm:space-y-28 pb-28 sm:pb-36 pt-8 sm:pt-12">
        <div className={learnAiAtmosphereNavy()}>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(163,230,53,0.05),transparent)]"
            aria-hidden
          />
          <LearnAiReveal as="section" className="relative py-12 sm:py-16">
            <LearnAiSection className="max-w-3xl">
              <p className={learnAiSectionEyebrow()}>The Problem</p>
              <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
                <p className="text-xl sm:text-2xl font-light text-zinc-100 leading-snug">{LEARN_AI_PROBLEM_LEAD}</p>
                <p>{LEARN_AI_PROBLEM_SECOND}</p>
              </div>
              <LearnAiPullQuote>{LEARN_AI_QUOTE_ASSISTANCE}</LearnAiPullQuote>
            </LearnAiSection>
          </LearnAiReveal>
        </div>

        <LearnAiReveal as="section">
          <LearnAiSection className="max-w-5xl">
            <h2 className={cn(learnAiSectionTitle(), 'mb-8 max-w-3xl')}>{LEARN_AI_OUTCOMES_HEADING}</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {LEARN_AI_LEARNING_OUTCOMES.map((card) => (
                <LearnAiLearningCard key={card.title} variant={card.variant} title={card.title} body={card.body} />
              ))}
            </div>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiSection className="max-w-3xl">
          <LearnAiPullQuote tension>{LEARN_AI_QUOTE_SUMMARY}</LearnAiPullQuote>
        </LearnAiSection>

        <LearnAiProcessFour />

        <LearnAiHumanSplit />

        <LearnAiReveal as="section">
          <LearnAiSection className="max-w-5xl">
            <p className={learnAiSectionEyebrow()}>Sample scenarios</p>
            <div className="grid gap-4 sm:gap-5 mt-2">
              {LEARN_AI_SCENARIOS.map((s) => (
                <LearnAiScenarioCard key={s.title} title={s.title} body={s.body} />
              ))}
            </div>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiReveal as="section">
          <LearnAiSection>
            <p className={learnAiSectionEyebrow()}>What makes this different</p>
            <p className="text-lg text-zinc-300 mb-5 leading-relaxed max-w-2xl">
              This is not a generic AI productivity talk. It does not treat AI as magic, and it does not reduce the
              conversation to fear.
            </p>
            <p className="text-lg text-zinc-300 mb-5 leading-relaxed max-w-2xl">
              Instead, it works in the tension between usefulness and discomfort.
            </p>
            <p className="text-base text-zinc-400 mb-5 leading-relaxed max-w-2xl">
              The session is designed for people who already feel the contradiction:
            </p>
            <ul className="list-none space-y-2.5 text-zinc-300 mb-8 max-w-2xl">
              {LEARN_AI_DIFFERENTIATION_BULLETS.map((line) => (
                <li key={line} className="flex gap-3 pl-1">
                  <GlyphListMark className="text-amber-500/50" />
                  <span className="min-w-0">{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-zinc-200 leading-relaxed max-w-2xl">
              The point is not purity. The point is awareness, practice, and a more conscious relationship to the tools.
            </p>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiSection className="max-w-3xl">
          <LearnAiPullQuote>{LEARN_AI_QUOTE_SCALING}</LearnAiPullQuote>
        </LearnAiSection>

        <LearnAiReveal as="section">
          <LearnAiSection className="max-w-5xl">
            <p className={learnAiSectionEyebrow()}>Format options</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {LEARN_AI_FORMATS.map((f) => (
                <FormatCard key={`${f.duration}-${f.kind}`} duration={f.duration} kind={f.kind} desc={f.desc} />
              ))}
            </div>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiReveal as="section">
          <LearnAiSection>
            <p className={learnAiSectionEyebrow()}>Ideal for</p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">{LEARN_AI_IDEAL_INTRO}</p>
            <ul className="flex flex-wrap gap-2.5">
              {LEARN_AI_IDEAL_VENUES.map((venue) => (
                <li
                  key={venue}
                  className="rounded-sm border border-zinc-700 bg-zinc-900/40 px-3 py-2 text-sm text-zinc-300"
                >
                  {venue}
                </li>
              ))}
            </ul>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiAboutBlock />

        <LearnAiProofBlock />

        <LearnAiReveal as="section">
          <LearnAiSection id="inquiry" className="max-w-2xl scroll-mt-28">
            <h2 className={cn(learnAiSectionTitle(), 'mb-5')}>Bring this to your space</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              <span className="text-zinc-200 font-medium">Learn AI Without Losing Yourself</span> is available as a talk,
              workshop, or customized session for institutions, schools, libraries, cultural organizations, and creative
              communities.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={mailtoLearnAi('Bring “Learn AI Without Losing Yourself” to our space')}
                className="inline-flex justify-center items-center rounded-sm bg-zinc-100 text-zinc-950 px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Bring this to your space
              </a>
              <a
                href={mailtoLearnAi('Custom version: Learn AI Without Losing Yourself')}
                className="inline-flex justify-center items-center rounded-sm border border-zinc-600 text-zinc-200 px-5 py-2.5 text-sm font-medium hover:bg-zinc-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Ask about a custom version
              </a>
            </div>

            <p className="text-zinc-500 mb-6 text-sm sm:text-base leading-relaxed">
              Or send details below — same-day replies when possible. You can also email{' '}
              <a
                href={`mailto:${LEARN_AI_EMAIL}`}
                className="text-zinc-200 underline underline-offset-4 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-sm"
              >
                {LEARN_AI_EMAIL}
              </a>
              .
            </p>
            <LearnAiInquiryForm />
          </LearnAiSection>
        </LearnAiReveal>
      </div>
    </div>
  )
}
