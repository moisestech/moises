'use client'

import Link from 'next/link'
import { ArtifactWorksheet } from '@/components/workshop/ai-daily-operator/ArtifactWorksheet'
import { LevelIAssessment } from '@/components/workshop/ai-daily-operator/LevelIAssessment'
import { LEVEL_I_ARTIFACTS } from '@/content/workshops/ai-daily-operator/artifacts'
import {
  LEVEL_I_OPENING,
  LEVEL_I_WALKTHROUGH,
} from '@/content/workshops/ai-daily-operator/level-i-walkthrough'
import { DAILY_OPERATOR_BASE_PROMPT } from '@/content/workshops/ai-daily-operator/operator-prompt'
import { DAILY_OPERATOR_RESOURCES } from '@/content/workshops/ai-daily-operator/resources'
import { SYNTHETIC_LEVEL_I_CASE } from '@/content/workshops/ai-daily-operator/synthetic-case'

export function LevelIToolkitClient() {
  return (
    <main className="min-h-screen bg-[#f3eee6] text-[#1c1916] print:bg-white">
      <div className="mx-auto w-full max-w-5xl px-5 pb-28 pt-32 sm:px-8 sm:pt-48 print:max-w-none print:px-0 print:pt-0">
        <header className="border-b border-[#1c1916] pb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
            Founder Attention OS · Level I
          </p>
          <h1 className="mt-5 text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            AI Daily Operator — Participant Toolkit
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3d3832]">{LEVEL_I_OPENING}</p>
          <div className="mt-8 flex flex-wrap gap-3 print:hidden">
            <a href="#walkthrough" className="border border-[#1c1916] bg-[#1c1916] px-4 py-2.5 text-sm text-[#f3eee6]">
              Start the 90-minute walkthrough
            </a>
            <a href="#artifacts" className="border border-[#1c1916] px-4 py-2.5 text-sm">
              Open worksheets
            </a>
            <a href="#assessment" className="border border-[#d9d0c3] px-4 py-2.5 text-sm">
              Competency check
            </a>
            <Link href="/workshop/build-your-ai-daily-operator" className="border border-[#d9d0c3] px-4 py-2.5 text-sm">
              Program overview
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[#5c564e]">
            Your worksheet answers are stored only in this browser using local storage. Nothing is sent to the course site.
          </p>
        </header>

        <section className="pt-16" aria-labelledby="data-boundary-heading">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">
            Before you begin
          </p>
          <h2 id="data-boundary-heading" className="mt-3 text-3xl tracking-tight">
            Use the minimum safe context
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#3d3832]">
            Level I does not require sensitive business data. Do not paste passwords, bank credentials, regulated information, confidential customer or personnel records, or information you do not have permission to share. Use only the context needed for the decision, sanitize it when appropriate, or use the fictional practice case.
          </p>
          <details className="mt-6 border border-[#d9d0c3] bg-[#fbf7f1] p-5">
            <summary className="cursor-pointer text-sm font-medium">
              Use the fictional practice case — {SYNTHETIC_LEVEL_I_CASE.name}
            </summary>
            <div className="mt-5 grid gap-6 text-sm leading-relaxed text-[#3d3832] sm:grid-cols-2">
              <div>
                <p className="font-medium">Business</p>
                <p className="mt-1">{SYNTHETIC_LEVEL_I_CASE.founderProfile.business}</p>
              </div>
              <div>
                <p className="font-medium">30-day outcome</p>
                <p className="mt-1">{SYNTHETIC_LEVEL_I_CASE.founderProfile.thirtyDayOutcome}</p>
              </div>
              <div>
                <p className="font-medium">Today’s signals</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {SYNTHETIC_LEVEL_I_CASE.workday.signals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium">Possible tasks</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {SYNTHETIC_LEVEL_I_CASE.workday.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </section>

        <section className="pt-16" aria-labelledby="official-learning-heading">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Official foundations</p>
          <h2 id="official-learning-heading" className="mt-3 text-3xl tracking-tight">
            Learn the tools from the people who make them
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#3d3832]">
            This workshop does not try to replace broad product training. If you are new to ChatGPT or Claude, use the official academies for fundamentals and come back here to build the attention system.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {DAILY_OPERATOR_RESOURCES.filter((resource) =>
              ['openai-ai-foundations', 'openai-small-business-hub', 'claude-ai-fluency', 'claude-capabilities-limitations'].includes(resource.id),
            ).map((resource) => (
              <li key={resource.id} className="border-t border-[#d9d0c3] pt-3">
                <a href={resource.url} target="_blank" rel="noreferrer" className="text-sm font-medium underline underline-offset-4">
                  {resource.provider} — {resource.title}
                </a>
                <p className="mt-1 text-xs leading-relaxed text-[#5c564e]">{resource.useInProgram}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="walkthrough" className="scroll-mt-28 pt-20" aria-labelledby="walkthrough-heading">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Live exercise</p>
          <h2 id="walkthrough-heading" className="mt-3 text-4xl tracking-tight">
            90 minutes, no integrations
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3d3832]">
            Use ChatGPT or Claude. The method is the same. Copy each prompt only after completing the previous step.
          </p>

          <ol className="mt-10 space-y-12">
            {LEVEL_I_WALKTHROUGH.map((step) => (
              <li key={step.n} className="grid gap-5 border-t border-[#d9d0c3] pt-5 md:grid-cols-[6rem_minmax(0,1fr)]">
                <div>
                  <p className="font-mono text-[11px] text-[#0f5f5c]">STEP {String(step.n).padStart(2, '0')}</p>
                  <p className="mt-1 font-mono text-[11px] text-[#5c564e]">{step.minutes}</p>
                </div>
                <div>
                  <h3 className="text-2xl tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3d3832]">{step.participantAction}</p>
                  <div className="mt-4 border-l-2 border-[#0f5f5c] pl-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0f5f5c]">Why this step exists</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#3d3832]">{step.facilitatorPoint}</p>
                  </div>
                  {step.prompt ? (
                    <details className="mt-5 border border-[#d9d0c3] bg-[#fbf7f1] p-4 print:border-[#aaa]">
                      <summary className="cursor-pointer text-sm font-medium">Prompt</summary>
                      <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-[#3d3832]">{step.prompt}</p>
                    </details>
                  ) : null}
                  {step.leavesWith ? (
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#7a3412]">
                      Leaves with: {step.leavesWith}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="pt-24" aria-labelledby="portable-prompt-heading">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Portable baseline</p>
          <h2 id="portable-prompt-heading" className="mt-3 text-4xl tracking-tight">
            Daily Operator prompt
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3d3832]">
            Use this only after completing the Founder Profile and Attention Rules. Replace both placeholders before first use.
          </p>
          <details className="mt-6 border border-[#d9d0c3] bg-[#fbf7f1] p-5">
            <summary className="cursor-pointer text-sm font-medium">Open portable prompt</summary>
            <pre className="mt-5 max-h-[42rem] overflow-auto whitespace-pre-wrap text-xs leading-relaxed text-[#3d3832]">
              {DAILY_OPERATOR_BASE_PROMPT}
            </pre>
          </details>
        </section>

        <section id="artifacts" className="scroll-mt-28 pt-24" aria-labelledby="artifacts-heading">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0f5f5c]">Participant artifacts</p>
          <h2 id="artifacts-heading" className="mt-3 text-4xl tracking-tight">
            Build the operating context as you go
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3d3832]">
            These four artifacts are the proof of Level I. The prompt is portable; the context and judgment you encode are the durable work.
          </p>

          <div className="mt-14 space-y-24">
            {LEVEL_I_ARTIFACTS.map((artifact) => (
              <ArtifactWorksheet key={artifact.slug} artifact={artifact} />
            ))}
          </div>
        </section>

        <LevelIAssessment />
      </div>
    </main>
  )
}
