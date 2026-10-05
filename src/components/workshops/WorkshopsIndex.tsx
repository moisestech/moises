'use client'

import { useMemo, useState, type FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  LAB_BASE,
  LAB_THESIS,
  labMedia,
} from '@/content/workshops/artist-infrastructure-lab'
import { listReadyWorkshops, type WorkshopCatalogTrack } from '@/content/workshops/catalog'
import { getWorkshopCover } from '@/content/workshops/catalog-covers'
import { institutionalWorkshopOfferings } from '@/content/institutions/workshopsOfferings'
import { WORKSHOP_HUB } from '@/constants/workshop-hub'
import {
  DAILY_OPERATOR_HREF,
  DAILY_OPERATOR_METHOD,
  DAILY_OPERATOR_PROMISE,
  DAILY_OPERATOR_TITLE,
} from '@/content/workshops/ai-daily-operator/program'
import { track as trackEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const LAB_COVER = labMedia('coverB')

const TRACKS: Array<'All' | WorkshopCatalogTrack> = [
  'All',
  'Presence',
  'AI Literacy',
  'Creative Coding',
  'Systems + Archive',
]

const TRACK_LINES: Record<WorkshopCatalogTrack, string> = {
  Presence: 'How a practice is written, documented, and found.',
  'AI Literacy': 'Models in the studio, with authorship kept in the room.',
  'Creative Coding': 'Making in the browser, in code, and in material.',
  'Systems + Archive': 'Workflows, evidence, and what remains after the session.',
}

const FEATURED_SLUGS = ['moonlighter-ai-3d-printing', 'trust-is-not-a-vibe', 'own-your-digital-presence'] as const

export function WorkshopsIndex() {
  const reduce = useReducedMotion()
  const ready = listReadyWorkshops()
  const [track, setTrack] = useState<(typeof TRACKS)[number]>('All')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const visible = useMemo(
    () => (track === 'All' ? ready : ready.filter((workshop) => workshop.track === track)),
    [ready, track],
  )
  const featured = FEATURED_SLUGS.map((slug) => ready.find((workshop) => workshop.slug === slug)).filter(
    (workshop): workshop is NonNullable<typeof workshop> => Boolean(workshop),
  )
  const counts = useMemo(() => {
    const tally = Object.fromEntries(TRACKS.filter((item) => item !== 'All').map((item) => [item, 0])) as Record<
      WorkshopCatalogTrack,
      number
    >
    for (const workshop of ready) tally[workshop.track] += 1
    return tally
  }, [ready])

  function chooseTrack(next: (typeof TRACKS)[number], scroll: boolean) {
    setTrack(next)
    trackEvent('workshop_track_filter', { track: next })
    if (!scroll) return
    document.getElementById('catalog')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  async function onWaitlist(event: FormEvent) {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const params = new URLSearchParams(window.location.search)
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          utm_source: params.get('utm_source'),
          utm_campaign: params.get('utm_campaign'),
          utm_medium: params.get('utm_medium'),
          utm_content: params.get('utm_content'),
          utm_term: params.get('utm_term'),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Could not join the list')
      setSubmitted(true)
      trackEvent('waitlist_submit_success', { source: 'workshops_index' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f3eee6] text-[#1c1916]">
      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-36 sm:px-8 sm:pt-64">
        <header className="grid items-end gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-20">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Teaching</p>
            <h1 className="mt-8 text-6xl leading-[0.9] tracking-tight sm:text-8xl">Workshops</h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#3d3832]">
              Sessions for artists, and for the studios and institutions that host them. The subject changes. The aim is a practice that can be explained, used, and handed on.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="border border-[#1c1916] bg-[#1c1916] px-4 py-2.5 text-sm text-[#f3eee6]"
              >
                Browse the catalog
              </a>
              <a href="#hosts" className="border border-[#1c1916] px-4 py-2.5 text-sm">
                Host a session
              </a>
            </div>
          </div>
          <nav aria-label="Subjects" className="border-t border-[#1c1916]">
            {(Object.keys(TRACK_LINES) as WorkshopCatalogTrack[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => chooseTrack(item, true)}
                className="group flex w-full items-baseline justify-between gap-6 border-b border-[#d9d0c3] py-4 text-left transition-colors hover:border-[#1c1916]"
              >
                <span>
                  <span className="block text-lg tracking-tight">{item}</span>
                  <span className="mt-1 block max-w-xs text-sm leading-relaxed text-[#5c564e]">{TRACK_LINES[item]}</span>
                </span>
                <span className="font-mono text-[11px] text-[#0f5f5c]">{counts[item]}</span>
              </button>
            ))}
          </nav>
        </header>

        <section className="mt-28" aria-labelledby="proposal-heading">
          <Link
            href={LAB_BASE}
            onClick={() => trackEvent('workshop_card_click', { workshop: 'Artist Infrastructure Lab' })}
            className="group grid overflow-hidden bg-[#1c1916] text-[#f3eee6] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
          >
            <div className="relative min-h-[16rem] overflow-hidden bg-[#2a2622]">
              {LAB_COVER?.src ? (
                <Image
                  src={LAB_COVER.src}
                  alt={LAB_COVER.alt}
                  width={1536}
                  height={1024}
                  priority
                  className={cn(
                    'h-full w-full object-cover',
                    !reduce && 'transition duration-700 ease-out group-hover:scale-[1.03]',
                  )}
                />
              ) : null}
            </div>
            <div className="flex flex-col justify-between gap-10 p-6 sm:p-10">
              <div className="space-y-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#e8a07a]">
                  Working proposal · not an approved course
                </p>
                <h2 id="proposal-heading" className="text-3xl tracking-tight sm:text-4xl">
                  Artist Infrastructure Lab
                </h2>
                <p className="text-lg leading-snug text-[#f3eee6]">{LAB_THESIS}</p>
                <p className="max-w-md text-sm leading-relaxed text-[#d9d0c3]">
                  A proposed lab with Dimitry Chamy at FIU Ratcliffe. Eight studio sessions, one cumulative project. Dates, credit, and enrollment are not confirmed.
                </p>
              </div>
              <span className="inline-block w-fit border-b border-[#f3eee6] pb-0.5 text-sm">Open the proposal</span>
            </div>
          </Link>
        </section>

        <section className="mt-28 border-t border-[#1c1916] pt-16" aria-labelledby="daily-operator-heading">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-xl space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">A separate program</p>
              <h2 id="daily-operator-heading" className="text-4xl tracking-tight">
                {DAILY_OPERATOR_TITLE}
              </h2>
              <p className="text-lg leading-snug text-[#3d3832]">{DAILY_OPERATOR_PROMISE}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#5c564e]">{DAILY_OPERATOR_METHOD}</p>
            </div>
            <Link
              href={DAILY_OPERATOR_HREF}
              onClick={() => trackEvent('workshop_card_click', { workshop: DAILY_OPERATOR_TITLE })}
              className="inline-block w-fit border-b border-[#1c1916] pb-0.5 text-sm"
            >
              Read the curriculum
            </Link>
          </div>
        </section>

        <section className="mt-28" aria-label="Programs already built">
          <div className="max-w-xl space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">In the studio</p>
            <h2 className="text-4xl tracking-tight">Three programs already running</h2>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-3">
            {featured.map((workshop, index) => (
              <motion.article
                key={workshop.slug}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.08 }}
              >
                <CatalogLink workshop={workshop} cover={getWorkshopCover(workshop.slug)} large />
              </motion.article>
            ))}
          </div>
        </section>

        <section id="catalog" className="mt-32 scroll-mt-52" aria-labelledby="catalog-heading">
          <div className="max-w-xl space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Catalog</p>
            <h2 id="catalog-heading" className="text-4xl tracking-tight">
              Choose a subject
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by subject">
            {TRACKS.map((item) => {
              const count = item === 'All' ? ready.length : counts[item]
              const selected = track === item
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => chooseTrack(item, false)}
                  className={cn(
                    'border px-3 py-2 text-sm transition-colors duration-200',
                    selected
                      ? 'border-[#1c1916] bg-[#1c1916] text-[#f3eee6]'
                      : 'border-[#d9d0c3] bg-transparent text-[#1c1916] hover:border-[#1c1916]',
                  )}
                >
                  {item}
                  <span className={cn('ml-2 font-mono text-[11px]', selected ? 'text-[#f3eee6]/70' : 'text-[#5c564e]')}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
          <p className="mt-6 min-h-6 text-sm text-[#5c564e]" aria-live="polite">
            {track === 'All'
              ? `${visible.length} workshops across the four subjects.`
              : `${visible.length} ${visible.length === 1 ? 'workshop' : 'workshops'}. ${TRACK_LINES[track]}`}
          </p>
          <motion.ul layout className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((workshop) => (
                <motion.li
                  key={workshop.slug}
                  layout
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: 6 }}
                  transition={{ duration: reduce ? 0 : 0.28 }}
                >
                  <CatalogLink workshop={workshop} cover={getWorkshopCover(workshop.slug)} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </section>

        <section
          id="hosts"
          className="mt-32 scroll-mt-52 grid gap-14 border-t border-[#1c1916] pt-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]"
        >
          <div className="space-y-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">For hosts</p>
            <h2 className="text-4xl tracking-tight">Three modules an institution can pilot</h2>
            <p className="max-w-sm text-sm leading-relaxed text-[#3d3832]">
              {institutionalWorkshopOfferings.intro.lead} Rates follow the public Oolite workshop listing.
            </p>
            <a
              href={institutionalWorkshopOfferings.intro.calendlyHref}
              className="inline-block border border-[#1c1916] px-4 py-2.5 text-sm"
              onClick={() => trackEvent('cta_institutions_click', { source: 'workshops_index' })}
            >
              {institutionalWorkshopOfferings.intro.calendlyLabel}
            </a>
          </div>
          <ol className="divide-y divide-[#d9d0c3] border-y border-[#d9d0c3]">
            {institutionalWorkshopOfferings.offerings.map((offering, index) => (
              <li key={offering.id} className="grid gap-3 py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)]">
                <span className="font-mono text-[11px] text-[#0f5f5c]">0{index + 1}</span>
                <div className="space-y-2">
                  <h3 className="text-xl tracking-tight">{offering.title}</h3>
                  <p className="max-w-lg text-sm leading-relaxed text-[#3d3832]">{offering.promise}</p>
                  <p className="text-xs text-[#5c564e]">{offering.duration}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-24 grid gap-10 border-t border-[#d9d0c3] pt-14 sm:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] sm:items-end">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight">Ask for a date</h2>
            <p className="max-w-md text-sm leading-relaxed text-[#3d3832]">
              The catalog is public. A hosted session is scheduled when a studio, school, or lab asks.
            </p>
            {submitted ? (
              <p className="text-sm text-[#0f5f5c]">You are on the list.</p>
            ) : (
              <form onSubmit={onWaitlist} className="flex max-w-md flex-col gap-2 sm:flex-row">
                <label className="sr-only" htmlFor="workshop-email">
                  Email
                </label>
                <input
                  id="workshop-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  className="min-h-11 flex-1 border border-[#d9d0c3] bg-white px-3 text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="min-h-11 border border-[#1c1916] bg-[#1c1916] px-4 text-sm text-[#f3eee6] disabled:opacity-50"
                >
                  {loading ? 'Sending…' : 'Join the list'}
                </button>
              </form>
            )}
            {error ? <p className="text-sm text-[#7a3412]">{error}</p> : null}
          </div>
          <p className="text-sm text-[#5c564e]">
            <a className="border-b border-[#1c1916]" href={`mailto:${WORKSHOP_HUB.FOOTER.EMAIL}`}>
              {WORKSHOP_HUB.FOOTER.EMAIL}
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}

function CatalogLink({
  workshop,
  cover,
  large = false,
}: {
  workshop: ReturnType<typeof listReadyWorkshops>[number]
  cover: { src: string; alt: string } | null
  large?: boolean
}) {
  const reduce = useReducedMotion()
  return (
    <Link
      href={workshop.href}
      onClick={() => trackEvent('workshop_card_click', { workshop: workshop.publicTitle })}
      className="group block"
    >
      <div className="overflow-hidden bg-[#e7e0d4]">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            width={1200}
            height={800}
            className={cn(
              'aspect-[3/2] w-full object-cover',
              !reduce && 'transition duration-700 ease-out group-hover:scale-[1.04]',
            )}
          />
        ) : (
          <div className="aspect-[3/2] bg-[#1c1916]" aria-hidden />
        )}
      </div>
      <div className="space-y-2 pt-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0f5f5c]">
          {workshop.track}
          <span className="text-[#8a8176]"> · {workshop.duration}</span>
        </p>
        <h3 className={cn('tracking-tight transition-colors group-hover:text-[#0f5f5c]', large ? 'text-2xl' : 'text-xl')}>
          {workshop.publicTitle}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-[#3d3832]">{workshop.hook}</p>
      </div>
    </Link>
  )
}
