'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  MOONLIGHTER_PLACEHOLDERS,
  MOONLIGHTER_SLUG,
  moonlighterGlossary,
  productionTiers,
  printAttemptPolicySummary,
  sixHourRunOfShow,
  workshopPromise,
} from '@/content/workshops/moonlighter-ai-3d-printing'
import type { MeshGlyphId } from '@/content/workshops/moonlighter-ai-3d-printing/mesh-glyphs'
import { MoonlighterShell } from './MoonlighterShell'
import { SectionMedia } from './SectionMedia'
import { GlossaryCard, MeshKeyword } from './MeshKeyword'
import { MeshGlyph, MeshGlyphFrame } from './MeshGlyphs'

const base = `/workshop/${MOONLIGHTER_SLUG}`

const OUTCOME_TILES: {
  id: string
  icon: MeshGlyphId
  tone: 'charcoal' | 'coral'
  float?: boolean
}[] = [
  { id: 'outcome-reference', icon: 'ml-reference', tone: 'charcoal' },
  { id: 'outcome-image', icon: 'ml-image', tone: 'coral' },
  { id: 'outcome-mesh', icon: 'ml-mesh', tone: 'charcoal', float: true },
  { id: 'outcome-print', icon: 'ml-print', tone: 'charcoal' },
]

/** Set B — method pillars: generate → volume → validate → slice */
const TOOL_PILLARS: { label: string; icon: MeshGlyphId; hint: string }[] = [
  { label: 'Image gen', icon: 'ml-image-generate', hint: 'Concept still' },
  { label: 'AI to 3D', icon: 'ml-image-to-3d', hint: 'Flat → volume' },
  { label: 'Mesh check', icon: 'ml-mesh-check', hint: 'Inspect topology' },
  { label: 'Slice & print', icon: 'ml-slice-print', hint: 'Layers on bed' },
]

const INCLUDED_ROWS: { icon: MeshGlyphId; text: string }[] = [
  { icon: 'ml-computer', text: 'Moonlighter computer (provisional: one per participant)' },
  { icon: 'ml-filament', text: 'PLA choice: black, white, or coral accent' },
  { icon: 'ml-archive', text: 'All source and production files' },
  { icon: 'ml-reprint', text: 'One approved print attempt + qualifying automatic reprint' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

function SectionEnter({
  children,
  className = '',
  stagger = 0.06,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: 0.04 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

function EnterItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : fadeUp}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function MoonlighterLandingClient() {
  const p = MOONLIGHTER_PLACEHOLDERS
  const reduceMotion = useReducedMotion()
  const registerHref =
    p.registrationUrl.startsWith('http') || p.registrationUrl.startsWith('/')
      ? p.registrationUrl
      : `${base}/join`

  return (
    <MoonlighterShell>
      <header className="sticky top-0 z-30 border-b border-[var(--ml-soft-gray)] bg-[var(--ml-paper)]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/workshops"
            className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--ml-ink)]/60 transition-colors hover:text-[var(--ml-ink)]"
          >
            Workshops
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link
              href={`${base}/resources`}
              className="uppercase tracking-[0.12em] text-[var(--ml-ink)]/70 underline-offset-4 transition-colors hover:text-[var(--ml-accent)] hover:underline"
            >
              Resources
            </Link>
            <a
              href="#glossary"
              className="uppercase tracking-[0.12em] text-[var(--ml-ink)]/70 underline-offset-4 transition-colors hover:text-[var(--ml-accent)] hover:underline"
            >
              Glossary
            </a>
            <Link
              href={`${base}/join`}
              className="uppercase tracking-[0.12em] text-[var(--ml-ink)]/70 underline-offset-4 transition-colors hover:text-[var(--ml-accent)] hover:underline"
            >
              Join session
            </Link>
            <motion.a
              href={registerHref}
              className="rounded-full bg-[var(--ml-charcoal)] px-5 py-2.5 text-sm font-medium text-white"
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 420, damping: 24 }}
            >
              Register
            </motion.a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--ml-soft-gray)] bg-[var(--ml-charcoal)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 88% 12%, rgba(255,107,90,0.42), transparent 48%), linear-gradient(105deg, #1A1A1A 0%, #1A1A1A 48%, #2A2422 62%, #3A2E2A 100%)',
          }}
        />
        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-[var(--ml-accent)]/20 blur-3xl"
            animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.12, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? undefined : 'show'}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
          >
            <EnterItem>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ml-accent)]">
                {p.brandName} · Ages {p.ages} · {p.durationHours} hours
              </p>
            </EnterItem>
            <EnterItem>
              <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                {workshopPromise.title}
              </h1>
            </EnterItem>
            <EnterItem>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
                An advanced follow-on to Moonlighter&apos;s Basic 3D Printing class:{' '}
                <MeshKeyword id="reference" variant="dark">
                  reference
                </MeshKeyword>{' '}
                + prompt →{' '}
                <MeshKeyword id="image" variant="dark">
                  generated image
                </MeshKeyword>{' '}
                → <MeshKeyword id="mesh" variant="dark">mesh</MeshKeyword> → validation → optional
                repair → <MeshKeyword id="slice" variant="dark">slice</MeshKeyword> → approved{' '}
                <MeshKeyword id="print" variant="dark">print</MeshKeyword> or queue.
              </p>
            </EnterItem>
            <EnterItem>
              <dl className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ['Date', p.dateTime],
                  ['Ticket', `$${p.ticketPrice}`],
                  ['Seats', `${p.pilotCapacity} (max ${p.conditionalMax})`],
                  ['Material', `PLA · black / white / coral`],
                ].map(([k, v]) => (
                  <motion.div
                    key={k}
                    className="bg-white/10 p-3 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                    whileHover={reduceMotion ? undefined : { y: -3, rotateX: 4 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                  >
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm leading-snug text-white">{v}</dd>
                  </motion.div>
                ))}
              </dl>
            </EnterItem>
            <EnterItem>
              <div className="mt-10 flex flex-wrap gap-3">
                <motion.a
                  href={registerHref}
                  className="rounded-full bg-[var(--ml-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(255,107,90,0.8)]"
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                >
                  Register for the pilot
                </motion.a>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <Link
                    href={`${base}/join`}
                    className="inline-block rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ml-charcoal)]"
                  >
                    Enter class session
                  </Link>
                </motion.div>
              </div>
            </EnterItem>
          </motion.div>

          <div className="flex flex-col gap-2 [perspective:1400px]">
            <div className="relative">
              <div className="pointer-events-none absolute left-3 top-3 z-10">
                <MeshGlyphFrame id="ml-layers" tone="coral" size="md" />
              </div>
              <SectionMedia
                id="hero-pipeline"
                priority
                tilt="strong"
                float
                className="rounded-none shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {(
                [
                  { id: 'outcome-reference', glyph: 'ml-reference' as const },
                  { id: 'outcome-image', glyph: 'ml-image' as const },
                  { id: 'outcome-mesh', glyph: 'ml-mesh' as const },
                  { id: 'outcome-print', glyph: 'ml-print' as const },
                ]
              ).map(({ id, glyph }, i) => (
                <div key={id} className="relative">
                  <div className="pointer-events-none absolute inset-x-0 top-1 z-10 flex justify-center">
                    <span className="rounded-full bg-[var(--ml-charcoal)]/70 p-1 text-white backdrop-blur-sm">
                      <MeshGlyph id={glyph} className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <SectionMedia
                    id={id}
                    showIconFrame={false}
                    tilt="subtle"
                    delay={0.08 + i * 0.05}
                    className="rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome pillars */}
      <section className="border-b border-[var(--ml-soft-gray)] bg-[var(--ml-paper)] py-16 md:py-20">
        <SectionEnter className="mx-auto max-w-6xl px-6">
          <EnterItem>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ml-ink)]/50">
              <MeshGlyph id="ml-layers" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
              Outcome
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Reference → Image → Mesh → Print
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--ml-ink)]/70">
              One continuous pipeline. Each stage leaves a file you can inspect, revise, and keep —
              from <MeshKeyword id="reference">reference</MeshKeyword> through{' '}
              <MeshKeyword id="mesh">mesh</MeshKeyword> to a finished{' '}
              <MeshKeyword id="pla">PLA</MeshKeyword> object.
            </p>
          </EnterItem>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [perspective:1200px]">
            {OUTCOME_TILES.map((tile, i) => (
              <motion.article
                key={tile.id}
                className={`group/tile flex flex-col overflow-hidden ${
                  tile.tone === 'coral'
                    ? 'bg-[var(--ml-accent)] text-white'
                    : 'bg-[var(--ml-charcoal)] text-white'
                }`}
                variants={reduceMotion ? undefined : fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        rotateY: i % 2 === 0 ? -4 : 4,
                        rotateX: 3,
                        transition: { type: 'spring', stiffness: 320, damping: 20 },
                      }
                }
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-3 px-5 pt-5">
                  <MeshGlyphFrame
                    id={tile.icon}
                    tone={tile.tone === 'coral' ? 'paper' : 'coral'}
                    size="lg"
                  />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
                      Stage {i + 1}
                    </p>
                    <h3 className="text-lg font-semibold uppercase tracking-wide transition-transform duration-200 group-hover/tile:translate-x-0.5">
                      {workshopPromise.pipeline[i]}
                    </h3>
                  </div>
                </div>
                <SectionMedia
                  id={tile.id}
                  className="mt-4"
                  showIconFrame={false}
                  tilt="medium"
                  float={Boolean(tile.float)}
                  delay={0.05 + i * 0.04}
                />
              </motion.article>
            ))}
          </div>
        </SectionEnter>
      </section>

      {/* What you'll make */}
      <section className="border-b border-[var(--ml-soft-gray)] bg-[#F7F6F4] py-16 md:py-20">
        <SectionEnter className="mx-auto max-w-6xl px-6">
          <EnterItem>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ml-ink)]/50">
              <MeshGlyph id="ml-mini" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
              What you&apos;ll make
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Two production tiers
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--ml-ink)]/70">
              Creative choice stays open; the site explains the physical consequences of each choice —
              <MeshKeyword id="mini"> miniature</MeshKeyword> vs{' '}
              <MeshKeyword id="sculpture">sculpture</MeshKeyword>, including time,{' '}
              <MeshKeyword id="support">supports</MeshKeyword>, and{' '}
              <MeshKeyword id="pickup">pickup</MeshKeyword>.
            </p>
          </EnterItem>
          <div className="mt-10 grid gap-6 md:grid-cols-2 [perspective:1200px]">
            {productionTiers.map((tier, i) => {
              const mediaId = tier.id === 'miniature' ? 'tier-mini' : 'tier-sculpture'
              return (
                <motion.article
                  key={tier.id}
                  className="group overflow-hidden bg-white"
                  variants={reduceMotion ? undefined : fadeUp}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                          rotateY: i === 0 ? -3 : 3,
                          boxShadow: '0 28px 50px -28px rgba(26,26,26,0.35)',
                        }
                  }
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <SectionMedia id={mediaId} tilt="medium" delay={i * 0.06} />
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <MeshGlyphFrame
                        id={tier.id === 'miniature' ? 'ml-mini' : 'ml-sculpture'}
                        tone={tier.id === 'miniature' ? 'soft' : 'coral'}
                        size="md"
                      />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ml-accent)]">
                          {tier.label}
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold capitalize tracking-tight transition-transform duration-200 group-hover:translate-x-1">
                          {tier.id}
                        </h3>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-2 text-sm text-[var(--ml-ink)]/75">
                      <li className="flex items-center gap-2">
                        <MeshGlyph id="ml-orient" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
                        Provisional size: {tier.sizeMm}
                      </li>
                      <li className="flex items-center gap-2">
                        <MeshGlyph id="ml-clock" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
                        {tier.typicalEstimate}
                      </li>
                      <li className="flex items-center gap-2">
                        <MeshGlyph
                          id={tier.id === 'miniature' ? 'ml-print' : 'ml-pickup'}
                          className="h-3.5 w-3.5 text-[var(--ml-accent)]"
                        />
                        {tier.classOutcome}
                      </li>
                    </ul>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </SectionEnter>
      </section>

      {/* Tools + Included */}
      <section className="border-b border-[var(--ml-soft-gray)] py-16 md:py-20">
        <SectionEnter className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <EnterItem>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ml-ink)]/50">
                <MeshGlyph id="ml-image-to-3d" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
                Method
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Tool-flexible</h2>
              <p className="mt-4 text-[var(--ml-ink)]/75">
                ChatGPT Images or Adobe Firefly; Meshy or Tripo; optional Blender; Bambu Studio; Bambu
                printers. The workshop is <MeshKeyword id="tool-flexible">tool-flexible</MeshKeyword>
                : it teaches a transferable method rather than a single vendor interface.
              </p>
            </EnterItem>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 [perspective:800px]">
              {TOOL_PILLARS.map(({ label, icon, hint }, i) => (
                <motion.div
                  key={label}
                  className="flex flex-col items-center gap-3 bg-[var(--ml-charcoal)] px-3 py-5 text-center text-white"
                  variants={reduceMotion ? undefined : fadeUp}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                          rotateY: -8,
                          rotateX: 4,
                          backgroundColor: '#2A2A2A',
                        }
                  }
                  transition={{ type: 'spring', stiffness: 360, damping: 20, delay: i * 0.03 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ml-accent)] text-[var(--ml-charcoal)]"
                    whileHover={reduceMotion ? undefined : { scale: 1.12, rotate: -8 }}
                    style={{ transform: 'translateZ(16px)' }}
                  >
                    <MeshGlyph id={icon} className="h-5 w-5" />
                  </motion.span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">{label}</span>
                  <span className="text-[9px] uppercase tracking-[0.12em] text-white/45">{hint}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <SectionMedia id="tools-flexible" tilt="medium" />
              <SectionMedia id="tools-filament" tilt="medium" delay={0.06} />
            </div>
            <EnterItem>
              <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold">
                <MeshGlyphFrame id="ml-prerequisite" tone="soft" size="sm" />
                Prerequisite
              </h3>
              <p className="mt-3 text-[var(--ml-ink)]/75">
                Ages {p.ages}. Moonlighter Basic 3D Printing or equivalent experience. Bring a{' '}
                <MeshKeyword id="reference">reference</MeshKeyword> image, upload before class, or
                photograph an object during class.
              </p>
            </EnterItem>
          </div>
          <div>
            <EnterItem>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ml-ink)]/50">
                <MeshGlyph id="ml-archive" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
                Included
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">What you leave with</h2>
            </EnterItem>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <SectionMedia id="included-kit" tilt="medium" />
              <SectionMedia id="included-files" tilt="medium" delay={0.06} />
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[var(--ml-ink)]/80">
              {INCLUDED_ROWS.map(({ icon, text }, i) => (
                <motion.li
                  key={text}
                  className="flex items-start gap-3"
                  variants={reduceMotion ? undefined : fadeUp}
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <MeshGlyphFrame id={icon} tone="soft" size="sm" className="mt-0.5 shrink-0" />
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
            <EnterItem>
              <h3 className="mt-8 text-lg font-semibold">Print attempt & recovery</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ml-ink)]/80">
                Your workshop includes one approved <MeshKeyword id="print">print</MeshKeyword>{' '}
                attempt. Qualifying production or repairable{' '}
                <MeshKeyword id="mesh">mesh</MeshKeyword> failures include one{' '}
                <MeshKeyword id="reprint">automatic reprint</MeshKeyword>. Redesigns and preference
                changes are separate. {printAttemptPolicySummary}
              </p>
            </EnterItem>
          </div>
        </SectionEnter>
      </section>

      {/* Instructor */}
      <section className="border-b border-[var(--ml-soft-gray)] bg-[var(--ml-charcoal)] py-16 text-white md:py-20">
        <SectionEnter className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <SectionMedia id="instructor" tilt="strong" float />
          <EnterItem>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ml-accent)]">
              <MeshGlyph id="ml-shared-handoff" className="h-4 w-4" />
              Instructor
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Moises Sanabria
            </h2>
            <p className="mt-5 text-white/80">{workshopPromise.instructorStatement}</p>
            <motion.div
              className="mt-6 inline-flex"
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href={workshopPromise.artistInfrastructureHref}
                className="inline-flex rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Artist Infrastructure
              </Link>
            </motion.div>
          </EnterItem>
        </SectionEnter>
      </section>

      {/* Schedule */}
      <section className="border-b border-[var(--ml-soft-gray)] py-16 md:py-20">
        <SectionEnter className="mx-auto max-w-6xl px-6">
          <EnterItem>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ml-ink)]/50">
              <MeshGlyph id="ml-clock" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
              Schedule
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Six-hour run of show
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--ml-ink)]/70">
              Short demos alternate with guided work. Breaks occur during processing windows. The{' '}
              <MeshGlyph id="ml-printer" className="mr-1 inline h-3.5 w-3.5 align-[-2px] text-[var(--ml-accent)]" />
              printer station stays supervised while you move through modules.
            </p>
          </EnterItem>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            <div className="relative">
              <div className="pointer-events-none absolute left-3 top-3 z-10">
                <MeshGlyphFrame id="ml-clock" tone="coral" size="sm" />
              </div>
              <SectionMedia id="schedule-room" tilt="medium" />
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute left-3 top-3 z-10">
                <MeshGlyphFrame id="ml-printer" tone="charcoal" size="sm" />
              </div>
              <SectionMedia id="schedule-printers" tilt="medium" delay={0.06} />
            </div>
          </div>
          <EnterItem>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-[var(--ml-charcoal)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ml-ink)]/55">
                    <th className="py-3 pr-4">Time</th>
                    <th className="py-3 pr-4">Module</th>
                    <th className="py-3">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {sixHourRunOfShow.map((row, i) => (
                    <motion.tr
                      key={row.moduleId}
                      className="border-b border-[var(--ml-soft-gray)] transition-colors duration-150 hover:bg-[var(--ml-accent)]/8"
                      initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                      <td className="py-3.5 pr-4 whitespace-nowrap font-mono text-xs">{row.time}</td>
                      <td className="py-3.5 pr-4 font-medium">{row.module}</td>
                      <td className="py-3.5 text-[var(--ml-ink)]/75">{row.output}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </EnterItem>
        </SectionEnter>
      </section>

      {/* Glossary */}
      <section
        id="glossary"
        className="border-b border-[var(--ml-soft-gray)] bg-[var(--ml-paper)] py-16 md:py-20"
      >
        <SectionEnter className="mx-auto max-w-6xl px-6">
          <EnterItem>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ml-ink)]/50">
              <MeshGlyph id="ml-glossary" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
              Glossary
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Shared workshop language
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--ml-ink)]/70">
              Hover dotted keywords anywhere on the page for a quick definition. This starter set
              covers the pipeline, fabrication choices, and recovery terms used in class.
            </p>
          </EnterItem>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [perspective:1100px]">
            {moonlighterGlossary.map((term, i) => (
              <GlossaryCard key={term.id} term={term} index={i} />
            ))}
          </div>
        </SectionEnter>
      </section>

      {/* Access */}
      <section className="bg-[#F7F6F4] py-16 md:py-20">
        <SectionEnter className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-start">
          <div>
            <EnterItem>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ml-ink)]/50">
                <MeshGlyph id="ml-access" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
                Access notes
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Welcome & policies
              </h2>
            </EnterItem>
            <ul className="mt-6 space-y-3 text-sm text-[var(--ml-ink)]/80">
              <motion.li
                className="flex gap-3"
                variants={reduceMotion ? undefined : fadeUp}
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                <MeshGlyphFrame id="ml-age-16" tone="coral" size="sm" className="mt-0.5 shrink-0" />
                <span>
                  Under-18 participation follows Moonlighter waiver/media procedure:{' '}
                  {p.under18Procedure}. Ages {p.ages} shown in HTML, not baked into the icon.
                </span>
              </motion.li>
              <motion.li
                className="flex gap-3"
                variants={reduceMotion ? undefined : fadeUp}
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                <MeshGlyphFrame id="ml-access" tone="charcoal" size="sm" className="mt-0.5 shrink-0" />
                <span>Accessibility accommodations: {p.accessibilityContact}.</span>
              </motion.li>
              <motion.li
                className="flex gap-3"
                variants={reduceMotion ? undefined : fadeUp}
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                <MeshGlyphFrame id="ml-account" tone="paper" size="sm" className="mt-0.5 shrink-0" />
                <span>
                  Account and credit policies vary by tool; free tiers first, instructor credits as
                  backup.
                </span>
              </motion.li>
              <motion.li
                className="flex gap-3"
                variants={reduceMotion ? undefined : fadeUp}
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                <MeshGlyphFrame id="ml-printer" tone="soft" size="sm" className="mt-0.5 shrink-0" />
                <span>This workshop does not certify independent printer operation.</span>
              </motion.li>
            </ul>
            <EnterItem>
              <div className="mt-10 flex flex-wrap gap-3">
                <motion.a
                  href={registerHref}
                  className="rounded-full bg-[var(--ml-charcoal)] px-6 py-3.5 text-sm font-semibold text-white"
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  Register
                </motion.a>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <Link
                    href={`${base}/resources`}
                    className="inline-block rounded-full border-2 border-[var(--ml-charcoal)] px-6 py-3.5 text-sm font-semibold text-[var(--ml-charcoal)]"
                  >
                    Post-class resources
                  </Link>
                </motion.div>
              </div>
              <p className="mt-6 max-w-xl text-xs text-[var(--ml-ink)]/50">
                Registration URL, printer profiles, and one-week pickup language remain pending
                Moonlighter operational sign-off. Coral accent is provisional until official brand hex
                arrives.
              </p>
            </EnterItem>
          </div>
          <SectionMedia id="access-welcome" tilt="strong" float />
        </SectionEnter>
      </section>
    </MoonlighterShell>
  )
}
