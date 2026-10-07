import Link from 'next/link'
import { WORKSHOP_HUB } from '@/constants/workshop-hub'
import {
  DAILY_OPERATOR_ARTIFACTS,
  DAILY_OPERATOR_CAPSTONE,
  DAILY_OPERATOR_CREDENTIALS,
  DAILY_OPERATOR_FOR,
  DAILY_OPERATOR_JUDGMENT,
  DAILY_OPERATOR_LABS,
  DAILY_OPERATOR_LENSES,
  DAILY_OPERATOR_LEVELS,
  DAILY_OPERATOR_METHOD,
  DAILY_OPERATOR_MODULES,
  DAILY_OPERATOR_OVERLAYS,
  DAILY_OPERATOR_OWNS,
  DAILY_OPERATOR_PATH,
  DAILY_OPERATOR_PROGRESSION,
  DAILY_OPERATOR_PROMISE,
  DAILY_OPERATOR_REFUSALS,
  DAILY_OPERATOR_SCALEUP,
  DAILY_OPERATOR_SENTENCE,
  DAILY_OPERATOR_STATUS,
  DAILY_OPERATOR_TITLE,
} from '@/content/workshops/ai-daily-operator/program'

const hostMail = `mailto:${WORKSHOP_HUB.FOOTER.EMAIL}?subject=${encodeURIComponent('Level I — Build Your AI Daily Operator')}`

export function ProgramClient() {
  return (
    <main className="min-h-screen bg-[#f3eee6] text-[#1c1916]">
      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-36 sm:px-8 sm:pt-64">
        <header className="grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] lg:gap-20">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
              {DAILY_OPERATOR_METHOD}
            </p>
            <h1 className="mt-8 text-5xl leading-[0.92] tracking-tight sm:text-7xl">{DAILY_OPERATOR_TITLE}</h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#3d3832]">{DAILY_OPERATOR_PROMISE}</p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#3d3832]">{DAILY_OPERATOR_SENTENCE}</p>
            <p className="mt-6 max-w-md border border-[#e2b8a2] bg-[#f8efe8] px-3 py-2 font-mono text-[11px] leading-relaxed tracking-wide text-[#7a3412]">
              {DAILY_OPERATOR_STATUS}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#levels" className="border border-[#1c1916] bg-[#1c1916] px-4 py-2.5 text-sm text-[#f3eee6]">
                Read the five levels
              </a>
              <Link href="/workshop/build-your-ai-daily-operator/level-i" className="border border-[#1c1916] px-4 py-2.5 text-sm">
                Open Level I toolkit
              </Link>
              <a href={hostMail} className="border border-[#1c1916] px-4 py-2.5 text-sm">
                Ask to host Level I
              </a>
            </div>
          </div>
          <div className="border-t border-[#1c1916]">
            <p className="border-b border-[#d9d0c3] py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
              Who this page is for
            </p>
            <dl className="divide-y divide-[#d9d0c3]">
              <div className="py-4">
                <dt className="text-sm text-[#5c564e]">Hosts</dt>
                <dd className="mt-1 text-base leading-relaxed">{DAILY_OPERATOR_FOR.hosts}</dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-[#5c564e]">Participants</dt>
                <dd className="mt-1 text-base leading-relaxed">{DAILY_OPERATOR_FOR.participants}</dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-[#5c564e]">On this site</dt>
                <dd className="mt-1 text-base leading-relaxed">{DAILY_OPERATOR_FOR.case}</dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-[#5c564e]">Instructor</dt>
                <dd className="mt-1 text-base leading-relaxed">{DAILY_OPERATOR_FOR.instructor}</dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="mt-28 grid gap-16 lg:grid-cols-2" aria-labelledby="territory-heading">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Territory</p>
            <h2 id="territory-heading" className="mt-3 text-4xl tracking-tight">
              What this refuses
            </h2>
            <ul className="mt-8 divide-y divide-[#d9d0c3] border-y border-[#d9d0c3]">
              {DAILY_OPERATOR_REFUSALS.map((item) => (
                <li key={item} className="py-3 text-lg leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">What it owns</p>
            <h2 className="mt-3 text-4xl tracking-tight">Attention, then a system</h2>
            <ul className="mt-8 space-y-6">
              {DAILY_OPERATOR_OWNS.map((item) => (
                <li key={item.title}>
                  <p className="text-lg tracking-tight">{item.title}</p>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-[#3d3832]">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-28" aria-labelledby="path-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">The path</p>
            <h2 id="path-heading" className="mt-3 text-4xl tracking-tight">
              Make the work legible
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">{DAILY_OPERATOR_PROGRESSION}</p>
          </div>
          <ol className="mt-10 grid gap-px bg-[#d9d0c3] sm:grid-cols-2 lg:grid-cols-3">
            {DAILY_OPERATOR_PATH.map((step, index) => (
              <li key={step.id} className="bg-[#f3eee6] p-5">
                <p className="font-mono text-[11px] text-[#0f5f5c]">0{index + 1}</p>
                <p className="mt-3 text-2xl tracking-tight">{step.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#3d3832]">{step.question}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <h3 className="text-2xl tracking-tight">Judgment</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#3d3832]">
                Four questions, in this order. The lenses sit inside the third.
              </p>
              <ol className="mt-6 space-y-2">
                {DAILY_OPERATOR_JUDGMENT.map((question, index) => (
                  <li key={question} className="flex gap-4 border-b border-[#d9d0c3] py-3">
                    <span className="font-mono text-[11px] text-[#0f5f5c]">0{index + 1}</span>
                    <span>{question}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-2xl tracking-tight">Four lenses</h3>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                {DAILY_OPERATOR_LENSES.map((lens) => (
                  <li key={lens.id}>
                    <p className="text-lg tracking-tight">{lens.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#3d3832]">{lens.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="levels" className="mt-28 scroll-mt-32" aria-labelledby="levels-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Competency map</p>
            <h2 id="levels-heading" className="mt-3 text-4xl tracking-tight">
              Five levels
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
              Each level is what a participant can demonstrably do, and the artifact that proves it. Lessons attach here later.
            </p>
          </div>
          <ol className="mt-12 space-y-16">
            {DAILY_OPERATOR_LEVELS.map((level) => (
              <li key={level.id} className="grid gap-8 border-t border-[#1c1916] pt-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Level {level.id}</p>
                  <h3 className="mt-3 text-3xl tracking-tight">{level.title}</h3>
                  <p className="mt-4 text-lg leading-snug">{level.question}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#5c564e]">{level.time}</p>
                  {level.note ? <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#3d3832]">{level.note}</p> : null}
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0f5f5c]">Can</p>
                    <ul className="mt-3 space-y-2">
                      {level.can.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-[#3d3832]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0f5f5c]">Leaves with</p>
                    <p className="mt-3 text-sm leading-relaxed">{level.leavesWith.join(' · ')}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-28" aria-labelledby="credentials-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Stackable</p>
            <h2 id="credentials-heading" className="mt-3 text-4xl tracking-tight">
              One session, or the sequence
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
              These are the hosted blocks. The levels above are what a participant can demonstrate. A host can book Level I alone.
            </p>
          </div>
          <ol className="mt-10 divide-y divide-[#d9d0c3] border-y border-[#d9d0c3]">
            {DAILY_OPERATOR_CREDENTIALS.map((item) => (
              <li key={item.id} className="grid gap-2 py-5 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6">
                <span className="font-mono text-[11px] text-[#0f5f5c]">{item.id}</span>
                <span>
                  <span className="text-lg tracking-tight">{item.name}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#3d3832]">{item.offer}</span>
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5c564e]">{item.time}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-28" aria-labelledby="modules-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Full curriculum</p>
            <h2 id="modules-heading" className="mt-3 text-4xl tracking-tight">
              A map, not the lessons
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
              About 8–10 hours, plus an asynchronous capstone. Modules 1–4 are Level I, 5–6 are Level II, 7 is Level III, 8 is Level IV, and 9–12 with the capstone are Level V.
            </p>
          </div>
          <ol className="mt-10 divide-y divide-[#d9d0c3] border-y border-[#d9d0c3]">
            {DAILY_OPERATOR_MODULES.map((module) => (
              <li key={module.n} className="grid gap-2 py-4 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6">
                <span className="font-mono text-[11px] text-[#0f5f5c]">{String(module.n).padStart(2, '0')}</span>
                <span>
                  <span className="tracking-tight">{module.title}</span>
                  <span className="mt-1 block text-sm text-[#3d3832]">{module.question}</span>
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5c564e]">
                  L{module.level} · {module.time}
                </span>
              </li>
            ))}
            <li className="grid gap-2 py-4 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6">
              <span className="font-mono text-[11px] text-[#0f5f5c]">—</span>
              <span>
                <span className="tracking-tight">{DAILY_OPERATOR_CAPSTONE.title}</span>
                <span className="mt-1 block text-sm text-[#3d3832]">{DAILY_OPERATOR_CAPSTONE.detail}</span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5c564e]">
                L{DAILY_OPERATOR_CAPSTONE.level} · {DAILY_OPERATOR_CAPSTONE.time}
              </span>
            </li>
          </ol>
        </section>

        <section className="mt-28" aria-labelledby="artifacts-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">What they leave owning</p>
            <h2 id="artifacts-heading" className="mt-3 text-4xl tracking-tight">
              Twelve artifacts
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
              By the end, the sequence has documented how the work operates.
            </p>
          </div>
          <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {DAILY_OPERATOR_ARTIFACTS.map((artifact) => (
              <li key={artifact.n} className="border-t border-[#d9d0c3] pt-4">
                <p className="font-mono text-[11px] text-[#0f5f5c]">
                  {String(artifact.n).padStart(2, '0')} · Level {artifact.level}
                </p>
                <p className="mt-2 text-lg tracking-tight">{artifact.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#3d3832]">{artifact.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-28" aria-labelledby="overlays-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">One method</p>
            <h2 id="overlays-heading" className="mt-3 text-4xl tracking-tight">
              The examples change
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
              Commitments, revenue or mission, risk, capacity, signals, friction, and workflow stay put. The nouns change with the work.
            </p>
          </div>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {DAILY_OPERATOR_OVERLAYS.map((overlay) => (
              <li key={overlay.id}>
                <h3 className="text-xl tracking-tight">{overlay.title}</h3>
                {'caseStudy' in overlay ? (
                  <p className="mt-2 text-sm text-[#0f5f5c]">{overlay.caseStudy}</p>
                ) : null}
                <ul className="mt-3 space-y-2">
                  {overlay.lines.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-[#3d3832]">
                      {line}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="mt-14 max-w-xl">
            <h3 className="text-2xl tracking-tight">Later labs</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#3d3832]">
              After the core, the same method can open a functional lab. These are not separate courses, and they are not built yet.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {DAILY_OPERATOR_LABS.map((lab) => (
                <li key={lab} className="border border-[#d9d0c3] px-3 py-2 text-sm">
                  {lab}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-28" aria-labelledby="scaleup-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Doorway</p>
            <h2 id="scaleup-heading" className="mt-3 text-4xl tracking-tight">
              The 90-minute ScaleUp session
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
              Level I runs the whole arc in miniature. It does not teach the full curriculum. The deeper levels open after.
            </p>
          </div>
          <ol className="mt-10 divide-y divide-[#d9d0c3] border-y border-[#d9d0c3]">
            {DAILY_OPERATOR_SCALEUP.map((beat) => (
              <li key={beat.range} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 py-4 sm:grid-cols-[6rem_minmax(0,1fr)]">
                <span className="font-mono text-[11px] text-[#0f5f5c]">{beat.range}</span>
                <span className="tracking-tight">{beat.title}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-28 grid gap-10 border-t border-[#1c1916] pt-16 sm:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] sm:items-end">
          <div className="max-w-xl space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Next</p>
            <h2 className="text-4xl tracking-tight">Ask for Level I</h2>
            <p className="text-base leading-relaxed text-[#3d3832]">
              Moises Sanabria. {DAILY_OPERATOR_METHOD}. DCC Miami is the documented operating case. The next step is a 90-minute session, not a checkout.
            </p>
            <a href={hostMail} className="inline-block border border-[#1c1916] bg-[#1c1916] px-4 py-2.5 text-sm text-[#f3eee6]">
              {WORKSHOP_HUB.FOOTER.EMAIL}
            </a>
          </div>
          <p className="text-sm text-[#5c564e]">
            <Link href="/workshops" className="border-b border-[#1c1916]">
              Back to workshops
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}
