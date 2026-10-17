import Link from 'next/link'
import { WorkshopMediaFigure } from '@/components/workshop/ai-daily-operator/WorkshopMediaFigure'
import { ToolGuidePlaceholders } from '@/components/workshop/ai-daily-operator/ToolGuidePlaceholders'
import { WORKSHOP_HUB } from '@/constants/workshop-hub'
import { LEVEL_I_DELIVERY } from '@/content/workshops/ai-daily-operator/delivery'
import { DAILY_OPERATOR_MEDIA } from '@/content/workshops/ai-daily-operator/media'
import {
  DAILY_OPERATOR_ARTIFACTS,
  DAILY_OPERATOR_CAPSTONE,
  DAILY_OPERATOR_FOR,
  DAILY_OPERATOR_FORMATS,
  DAILY_OPERATOR_JUDGMENT,
  DAILY_OPERATOR_LENSES,
  DAILY_OPERATOR_LEVELS,
  DAILY_OPERATOR_METHOD,
  DAILY_OPERATOR_MODULES,
  DAILY_OPERATOR_OVERLAYS,
  DAILY_OPERATOR_PATH,
  DAILY_OPERATOR_PRINCIPLES,
  DAILY_OPERATOR_PROJECTS,
  DAILY_OPERATOR_PROMISE,
  DAILY_OPERATOR_SCALEUP,
  DAILY_OPERATOR_SCENARIO_PACKS,
  DAILY_OPERATOR_SENTENCE,
  DAILY_OPERATOR_SOFTWARE,
  DAILY_OPERATOR_STATUS,
  DAILY_OPERATOR_TITLE,
} from '@/content/workshops/ai-daily-operator/program'

const hostMail = `mailto:${WORKSHOP_HUB.FOOTER.EMAIL}?subject=${encodeURIComponent('Level I — Build Your AI Daily Operator')}`
const levelIHref = '/workshop/build-your-ai-daily-operator/level-i'

const button = 'border border-[#1c1916] px-4 py-2.5 text-sm'
const buttonSolid = `${button} bg-[#1c1916] text-[#f3eee6]`

export function ProgramClient() {
  return (
    <main className="min-h-screen bg-[#f3eee6] text-[#1c1916]">
      <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-36 sm:px-8 sm:pt-64">
        <header className="grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-20">
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
              <Link href={levelIHref} className={buttonSolid}>
                Start with Level I
              </Link>
              <a href={hostMail} className={button}>
                Host Level I
              </a>
              <a href="#levels" className={button}>
                See the five-level path
              </a>
            </div>
          </div>
          <WorkshopMediaFigure
            asset={DAILY_OPERATOR_MEDIA.core.operatorCore}
            priority
            caption="Many signals compete for one finite resource: the founder’s attention."
          />
        </header>

        <section className="mt-28" aria-labelledby="scarce-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">The scarce resource</p>
            <h2 id="scarce-heading" className="mt-3 text-4xl tracking-tight">
              Founder attention runs out before the task list does
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
              A calendar can be full and still hide the decision. The work is to say what deserves the person, why, and what can wait. Automation comes after that sentence is true.
            </p>
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
        </section>

        <section className="mt-28" aria-labelledby="core-heading">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
                Level I · {LEVEL_I_DELIVERY.core.name}
              </p>
              <h2 id="core-heading" className="mt-3 text-4xl tracking-tight">
                Useful in {LEVEL_I_DELIVERY.core.duration}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#3d3832]">{LEVEL_I_DELIVERY.competency}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#3d3832]">{LEVEL_I_DELIVERY.core.audience}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">In the room</p>
              <ul className="mt-4 divide-y divide-[#d9d0c3] border-y border-[#d9d0c3]">
                {LEVEL_I_DELIVERY.core.includes.map((item) => (
                  <li key={item} className="py-3 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-28" aria-labelledby="leave-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">What you leave with</p>
            <h2 id="leave-heading" className="mt-3 text-4xl tracking-tight">
              Four artifacts, one friction, seven days of use
            </h2>
          </div>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2">
            {DAILY_OPERATOR_PROJECTS.filter((item) => item.id === 'I').map((item) => (
              <li key={item.id} className="sm:col-span-2">
                <p className="text-lg tracking-tight">{item.project}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#3d3832]">{item.able}</p>
                {'builds' in item ? (
                  <p className="mt-3 text-sm leading-relaxed">
                    Built in the room: {item.builds.join(', ')}. Generated from the profile:{' '}
                    {item.generated.join(', ')}.
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#3d3832]">
            {DAILY_OPERATOR_CAPSTONE.title}. {DAILY_OPERATOR_CAPSTONE.detail}
          </p>
        </section>

        <section className="mt-28" aria-labelledby="brief-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">The artifact</p>
            <h2 id="brief-heading" className="mt-3 text-4xl tracking-tight">
              A Daily Operating Brief, not a longer calendar
            </h2>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-xl tracking-tight">A normal calendar</h3>
              <ul className="mt-4 divide-y divide-[#d9d0c3] border-y border-[#d9d0c3]">
                {DAILY_OPERATOR_FORMATS.demo.calendar.map((row) => (
                  <li key={row.time} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 py-3">
                    <span className="font-mono text-[11px] text-[#0f5f5c]">{row.time}</span>
                    <span>{row.item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl tracking-tight">The brief</h3>
              <ul className="mt-4 space-y-4">
                {DAILY_OPERATOR_FORMATS.demo.brief.map((row) => (
                  <li key={row.label}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0f5f5c]">{row.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#3d3832]">{row.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-28" aria-labelledby="lenses-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Evidence</p>
            <h2 id="lenses-heading" className="mt-3 text-4xl tracking-tight">
              Four lenses, then fact, interpretation, recommendation
            </h2>
          </div>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {DAILY_OPERATOR_LENSES.map((lens) => (
              <li key={lens.id}>
                <p className="text-lg tracking-tight">{lens.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#3d3832]">{lens.detail}</p>
              </li>
            ))}
          </ul>
          <ol className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {DAILY_OPERATOR_JUDGMENT.map((question, index) => (
              <li key={question} className="text-sm">
                <span className="font-mono text-[11px] text-[#0f5f5c]">0{index + 1}</span> {question}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-28" aria-labelledby="proof-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Proof</p>
            <h2 id="proof-heading" className="mt-3 text-4xl tracking-tight">
              The walkthrough slots are waiting on a real run
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
              ChatGPT needs 7 screenshots and 1 short video. Claude needs the same. These placeholders stay until that capture exists. Nothing here is a generated interface.
            </p>
          </div>
          <div className="mt-8">
            <ToolGuidePlaceholders level="I" mode="compact" />
          </div>
        </section>

        <section className="mt-28" aria-labelledby="friction-heading">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">After the brief</p>
              <h2 id="friction-heading" className="mt-3 text-4xl tracking-tight">
                Friction becomes a decision: delegate, retain, redesign, or automate
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#3d3832]">{DAILY_OPERATOR_FORMATS.boundary.ends}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#3d3832]">{DAILY_OPERATOR_FORMATS.boundary.note}</p>
              <ul className="mt-6 space-y-2">
                {DAILY_OPERATOR_FORMATS.boundary.choices.map((choice) => (
                  <li key={choice} className="text-sm leading-relaxed">
                    {choice}
                  </li>
                ))}
              </ul>
            </div>
            <WorkshopMediaFigure
              asset={DAILY_OPERATOR_MEDIA.modules.m08.frictionOverview}
              caption="Repeated manual work is evidence. It is not yet a system."
            />
          </div>
        </section>

        <section className="mt-28" aria-labelledby="approval-heading">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <WorkshopMediaFigure
              asset={DAILY_OPERATOR_MEDIA.modules.m11.humanApprovalGate}
              caption="The system recommends and explains. A person approves before a consequential action."
            />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Authority</p>
              <h2 id="approval-heading" className="mt-3 text-4xl tracking-tight">
                Recommend, explain, ask, then act
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
                Unknown stays unknown. A missing field is not a false one. The person remains visible before anything that commits the work.
              </p>
            </div>
          </div>
        </section>

        <section id="levels" className="mt-28 scroll-mt-32" aria-labelledby="levels-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">The path</p>
            <h2 id="levels-heading" className="mt-3 text-4xl tracking-tight">
              Core, Studio, then five levels
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">
              Level I is the competency. {LEVEL_I_DELIVERY.core.name} delivers it in {LEVEL_I_DELIVERY.core.duration}.{' '}
              {LEVEL_I_DELIVERY.studio.name} uses {LEVEL_I_DELIVERY.studio.duration} for the same artifacts, with more coaching.
            </p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl tracking-tight">
                {LEVEL_I_DELIVERY.studio.name} · {LEVEL_I_DELIVERY.studio.duration}
              </h3>
              <ul className="mt-4 space-y-2">
                {LEVEL_I_DELIVERY.studio.adds.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-[#3d3832]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ol className="divide-y divide-[#d9d0c3] border-y border-[#d9d0c3]">
              {DAILY_OPERATOR_LEVELS.map((level) => (
                <li key={level.id} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-4">
                  <span className="font-mono text-[11px] text-[#0f5f5c]">{level.id}</span>
                  <span>
                    <span className="tracking-tight">{level.title}</span>
                    <span className="mt-1 block text-sm text-[#3d3832]">{level.question}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <details className="mt-12 border-t border-[#d9d0c3] pt-6">
            <summary className="cursor-pointer text-sm tracking-tight">Full curriculum map</summary>
            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-lg tracking-tight">Projects</h3>
                <ul className="mt-3 space-y-2">
                  {DAILY_OPERATOR_PROJECTS.map((item) => (
                    <li key={item.id} className="text-sm leading-relaxed">
                      {item.id} · {item.project} — {item.artifact}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 text-lg tracking-tight">Modules</h3>
                <ul className="mt-3 space-y-1">
                  {DAILY_OPERATOR_MODULES.map((module) => (
                    <li key={module.n} className="text-sm text-[#3d3832]">
                      {module.n}. {module.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg tracking-tight">Artifacts</h3>
                <ul className="mt-3 space-y-1">
                  {DAILY_OPERATOR_ARTIFACTS.map((artifact) => (
                    <li key={artifact.n} className="text-sm text-[#3d3832]">
                      {artifact.n}. {artifact.name} · Level {artifact.level}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 text-lg tracking-tight">90-minute beats</h3>
                <ul className="mt-3 space-y-1">
                  {DAILY_OPERATOR_SCALEUP.map((beat) => (
                    <li key={beat.range} className="text-sm text-[#3d3832]">
                      {beat.range} {beat.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg tracking-tight">Principles</h3>
                <ul className="mt-3 space-y-2">
                  {DAILY_OPERATOR_PRINCIPLES.map((item) => (
                    <li key={item.principle} className="text-sm text-[#3d3832]">
                      {item.principle}. {item.line}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg tracking-tight">Tools and scenarios</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3d3832]">{DAILY_OPERATOR_SOFTWARE.rule}</p>
                <ul className="mt-3 space-y-1">
                  {DAILY_OPERATOR_SOFTWARE.layers.map((layer) => (
                    <li key={layer.layer} className="text-sm text-[#3d3832]">
                      {layer.layer}: {layer.defaultTool} · {layer.requirement}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 space-y-1">
                  {DAILY_OPERATOR_SCENARIO_PACKS.map((pack) => (
                    <li key={pack.id} className="text-sm text-[#3d3832]">
                      {pack.title}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 space-y-1">
                  {DAILY_OPERATOR_OVERLAYS.map((overlay) => (
                    <li key={overlay.id} className="text-sm text-[#3d3832]">
                      {overlay.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </section>

        <section className="mt-28" aria-labelledby="host-heading">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Hosts</p>
            <h2 id="host-heading" className="mt-3 text-4xl tracking-tight">
              A pilot can be hosted before the course is called proven
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d3832]">{DAILY_OPERATOR_FOR.hosts}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#3d3832]">{DAILY_OPERATOR_FOR.case}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#3d3832]">{DAILY_OPERATOR_FOR.instructor}</p>
          </div>
        </section>

        <section className="mt-28 grid gap-10 border-t border-[#1c1916] pt-16 sm:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] sm:items-end">
          <div className="max-w-xl space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Next</p>
            <h2 className="text-4xl tracking-tight">Start with Level I</h2>
            <p className="text-base leading-relaxed text-[#3d3832]">
              Open the toolkit, or write to host a 90-minute Core. {DAILY_OPERATOR_FOR.case}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={levelIHref} className={buttonSolid}>
                Start with Level I
              </Link>
              <a href={hostMail} className={button}>
                Host Level I
              </a>
              <a href="#levels" className={button}>
                See the five-level path
              </a>
            </div>
            <a href={hostMail} className="inline-block text-sm">
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
