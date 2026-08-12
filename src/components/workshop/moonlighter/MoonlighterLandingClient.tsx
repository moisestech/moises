'use client'

import Link from 'next/link'
import {
  MOONLIGHTER_PLACEHOLDERS,
  MOONLIGHTER_SLUG,
  productionTiers,
  printAttemptPolicySummary,
  sixHourRunOfShow,
  workshopPromise,
} from '@/content/workshops/moonlighter-ai-3d-printing'
import { MoonlighterShell } from './MoonlighterShell'

const base = `/workshop/${MOONLIGHTER_SLUG}`

export function MoonlighterLandingClient() {
  const p = MOONLIGHTER_PLACEHOLDERS
  const registerHref =
    p.registrationUrl.startsWith('http') || p.registrationUrl.startsWith('/')
      ? p.registrationUrl
      : `${base}/join`

  return (
    <MoonlighterShell>
      <header className="border-b border-[var(--ml-soft-gray)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/workshops" className="text-sm tracking-wide text-[var(--ml-ink)]/70 hover:text-[var(--ml-ink)]">
            Workshops
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link href={`${base}/resources`} className="underline-offset-4 hover:underline">
              Resources
            </Link>
            <Link href={`${base}/join`} className="underline-offset-4 hover:underline">
              Join session
            </Link>
            <a
              href={registerHref}
              className="rounded-sm bg-[var(--ml-ink)] px-4 py-2 text-[var(--ml-paper)]"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[var(--ml-soft-gray)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 20% 0%, rgba(39,125,168,0.18), transparent 55%), radial-gradient(ellipse at 90% 40%, rgba(216,138,36,0.12), transparent 45%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ml-digital)]">
            {p.brandName} · Ages {p.ages} · {p.durationHours} hours
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            {workshopPromise.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--ml-ink)]/80">{workshopPromise.short}</p>
          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['Date', p.dateTime],
              ['Ticket', `$${p.ticketPrice}`],
              ['Seats', `${p.pilotCapacity} (max ${p.conditionalMax})`],
              ['Material', `PLA · black / white / ${p.plaAccentName}`],
            ].map(([k, v]) => (
              <div key={k} className="border border-[var(--ml-soft-gray)] bg-white/40 p-3">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/55">{k}</dt>
                <dd className="mt-1 text-sm leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={registerHref} className="rounded-sm bg-[var(--ml-digital)] px-5 py-3 text-white">
              Register for the pilot
            </a>
            <Link
              href={`${base}/join`}
              className="rounded-sm border border-[var(--ml-ink)] px-5 py-3"
            >
              Enter class session
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--ml-soft-gray)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ml-ink)]/55">Outcome</h2>
          <ol className="mt-6 flex flex-wrap items-center gap-2 md:gap-4">
            {workshopPromise.pipeline.map((step, i) => (
              <li key={step} className="flex items-center gap-2 md:gap-4">
                <span className="rounded-sm border border-[var(--ml-digital)] bg-white/50 px-4 py-3 text-sm font-medium">
                  {step}
                </span>
                {i < workshopPromise.pipeline.length - 1 && (
                  <span className="text-[var(--ml-ink)]/40" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-[var(--ml-soft-gray)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">What you&apos;ll make</h2>
          <p className="mt-2 max-w-2xl text-[var(--ml-ink)]/75">
            Creative choice stays open; the site explains the physical consequences of each choice.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {productionTiers.map((tier) => (
              <article key={tier.id} className="border border-[var(--ml-soft-gray)] bg-white/40 p-6">
                <p className="font-mono text-xs tracking-wider text-[var(--ml-controlled)]">{tier.label}</p>
                <h3 className="mt-2 text-xl font-medium capitalize">{tier.id}</h3>
                <ul className="mt-4 space-y-2 text-sm text-[var(--ml-ink)]/80">
                  <li>Provisional size: {tier.sizeMm}</li>
                  <li>{tier.typicalEstimate}</li>
                  <li>{tier.classOutcome}</li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--ml-soft-gray)] py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Tool-flexible method</h2>
            <p className="mt-3 text-[var(--ml-ink)]/75">
              ChatGPT Images or Adobe Firefly; Meshy or Tripo; optional Blender; Bambu Studio; Bambu
              printers. The workshop teaches a transferable method rather than a single vendor interface.
            </p>
            <h3 className="mt-8 font-medium">Included</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--ml-ink)]/80">
              <li>Moonlighter computer (provisional: one per participant)</li>
              <li>PLA choice: black, white, or brand accent</li>
              <li>All source and production files</li>
              <li>One approved print attempt + qualifying automatic reprint</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Prerequisite</h2>
            <p className="mt-3 text-[var(--ml-ink)]/75">
              Ages {p.ages}. Moonlighter Basic 3D Printing or equivalent experience. Bring a reference
              image, upload before class, or photograph an object during class.
            </p>
            <h3 className="mt-8 font-medium">Print attempt & recovery</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ml-ink)]/80">{printAttemptPolicySummary}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--ml-soft-gray)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Instructor</h2>
          <p className="mt-4 max-w-3xl text-[var(--ml-ink)]/80">{workshopPromise.instructorStatement}</p>
          <Link
            href={workshopPromise.artistInfrastructureHref}
            className="mt-4 inline-block text-[var(--ml-digital)] underline-offset-4 hover:underline"
          >
            Artist Infrastructure
          </Link>
        </div>
      </section>

      <section className="border-b border-[var(--ml-soft-gray)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Schedule preview</h2>
          <p className="mt-2 text-sm text-[var(--ml-ink)]/65">
            Short demos alternate with guided work. Breaks occur during processing windows.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--ml-soft-gray)] font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/55">
                  <th className="py-2 pr-4">Time</th>
                  <th className="py-2 pr-4">Module</th>
                  <th className="py-2">Output</th>
                </tr>
              </thead>
              <tbody>
                {sixHourRunOfShow.map((row) => (
                  <tr key={row.moduleId} className="border-b border-[var(--ml-soft-gray)]/80">
                    <td className="py-3 pr-4 whitespace-nowrap font-mono text-xs">{row.time}</td>
                    <td className="py-3 pr-4 font-medium">{row.module}</td>
                    <td className="py-3 text-[var(--ml-ink)]/75">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Access notes</h2>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm text-[var(--ml-ink)]/80">
            <li>Under-18 participation follows Moonlighter waiver/media procedure: {p.under18Procedure}.</li>
            <li>Accessibility accommodations: {p.accessibilityContact}.</li>
            <li>Account and credit policies vary by tool; free tiers first, instructor credits as backup.</li>
            <li>This workshop does not certify independent printer operation.</li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={registerHref} className="rounded-sm bg-[var(--ml-ink)] px-5 py-3 text-[var(--ml-paper)]">
              Register
            </a>
            <Link href={`${base}/resources`} className="rounded-sm border border-[var(--ml-ink)] px-5 py-3">
              Post-class resources
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-[var(--ml-ink)]/55">
            Registration URL, fleet profiles, brand color, and one-week pickup language remain pending
            Moonlighter operational sign-off.
          </p>
        </div>
      </section>
    </MoonlighterShell>
  )
}
