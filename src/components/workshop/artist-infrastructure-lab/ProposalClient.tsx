'use client'

import Link from 'next/link'
import {
  LAB_CHAPTERS,
  LAB_FORMATS,
  LAB_INSTRUCTOR,
  LAB_LEARN,
  LAB_LENSES,
  LAB_NEXT,
  LAB_PREMISE,
  LAB_QUESTIONS,
  LAB_RHYTHM,
  LAB_SHARED_CENTER,
  LAB_THESIS,
  LAB_TITLE,
  LAB_TOOLS,
} from '@/content/workshops/artist-infrastructure-lab'
import { LabGhostButton, LabHeader, LabKicker, labPage, labWrap } from './LabChrome'
import { LabMedia } from './LabMedia'
import { useLabProject } from './useLabProject'

export function ProposalClient() {
  const { reset } = useLabProject()

  return (
    <main className={labPage}>
      <div className={`${labWrap} space-y-16`}>
        <LabHeader />

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end">
          <div className="space-y-4">
            <LabKicker>Eight studio sessions · one cumulative project</LabKicker>
            <h1 className="text-4xl leading-tight tracking-tight sm:text-5xl">{LAB_TITLE}</h1>
            <p className="text-lg leading-snug text-[#3d3832]">
              Digital humanities. Digital literacy. Systems artists can use.
            </p>
            <p className="text-xl leading-snug">{LAB_THESIS}</p>
            <p className="text-sm leading-relaxed text-[#5c564e]">
              Open to co-development. The interactive chapters are a working preview on one illustrative sample. They are not a finished course and they do not connect to institutional systems.
            </p>
            <Link
              href={`${LAB_LEARN}/observe`}
              className="inline-block border border-[#1c1916] bg-[#1c1916] px-4 py-2 text-sm text-[#f3eee6]"
            >
              Open chapter 1, Observe
            </Link>
          </div>
          <LabMedia id="coverB" />
        </section>

        <section className="space-y-4" aria-labelledby="why-heading">
          <LabKicker>Why this lab</LabKicker>
          <h2 id="why-heading" className="text-3xl tracking-tight">
            Two equal lenses
          </h2>
          {LAB_PREMISE.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="grid gap-4 md:grid-cols-2">
            {LAB_LENSES.map((lens) => (
              <article key={lens.id} className="border border-[#d9d0c3] bg-white p-4">
                <h3 className="text-lg">{lens.title}</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  {lens.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="border border-[#0f5f5c] bg-[#e5f2f1] px-4 py-3 text-sm">{LAB_SHARED_CENTER}</p>
          <p className="max-w-3xl text-sm leading-relaxed text-[#3d3832]">
            The lab is meant to sit beside conversations about creative practice, entrepreneurship, digital presence, and institutional capacity. Its value is practical independence with critical judgment. Dimitry’s feedback should determine the cohort, the curriculum connections, the examples, and the delivery format. This page does not assume a departmental requirement or a partnership with other FIU units.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="arc-heading">
          <LabKicker>One project</LabKicker>
          <h2 id="arc-heading" className="text-3xl tracking-tight">
            Eight artifacts, carried forward
          </h2>
          <p className="max-w-3xl text-base leading-relaxed">
            Every chapter asks a humanities question, builds an inspectable artifact, tests a failure, and hands the result to the next chapter. Each participant would choose a starting context. This preview uses one sample record so the path can be walked now.
          </p>
          <ol className="grid gap-3 sm:grid-cols-2">
            {LAB_CHAPTERS.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  href={`${LAB_LEARN}/${chapter.id}`}
                  className="block h-full border border-[#d9d0c3] bg-white p-4 hover:border-[#1c1916]"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0f5f5c]">
                    {chapter.number} · {chapter.title}
                  </p>
                  <p className="mt-2 text-base">{chapter.artifact}</p>
                  <p className="mt-1 text-sm text-[#5c564e]">{chapter.question}</p>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-4" aria-labelledby="tools-heading">
          <LabKicker>Tools and teaching rhythm</LabKicker>
          <h2 id="tools-heading" className="text-3xl tracking-tight">
            What the lab uses, and what this preview refuses
          </h2>
          <ul className="grid gap-3">
            {LAB_TOOLS.map((tool) => (
              <li key={tool.name} className="border border-[#d9d0c3] bg-white p-4">
                <h3 className="text-base">{tool.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#3d3832]">{tool.detail}</p>
              </li>
            ))}
          </ul>
          <ol className="flex flex-wrap gap-2">
            {LAB_RHYTHM.map((step, index) => (
              <li key={step} className="border border-[#d9d0c3] px-3 py-2 text-sm">
                {index + 1}. {step}
              </li>
            ))}
          </ol>
          <p className="max-w-3xl text-sm leading-relaxed text-[#5c564e]">
            Course previews use deterministic local sample data. No live institutional systems, student records, messages, payment systems, or publication actions. Tool costs, licenses, classroom access, and approved accounts have to be checked before delivery.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="instructor-heading">
          <LabKicker>Instructor</LabKicker>
          <h2 id="instructor-heading" className="text-3xl tracking-tight">
            Moises Sanabria
          </h2>
          <p className="max-w-2xl text-base leading-relaxed">{LAB_INSTRUCTOR}</p>
          <LabMedia id="facilitation" />
        </section>

        <section className="space-y-4" aria-labelledby="codesign-heading">
          <LabKicker>Co-development</LabKicker>
          <h2 id="codesign-heading" className="text-3xl tracking-tight">
            The backbone is ready to review. The delivery is not decided.
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            {LAB_FORMATS.map((format) => (
              <article key={format.title} className="border border-[#d9d0c3] bg-white p-4">
                <h3 className="text-base">{format.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{format.body}</p>
              </article>
            ))}
          </div>
          <div>
            <h3 className="text-base">Questions for Dimitry</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {LAB_QUESTIONS.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
          <p className="text-base">{LAB_NEXT}</p>
          <p className="text-sm leading-relaxed text-[#3d3832]">
            Portfolio references, not a claim that this proposal is an approved course:{' '}
            <a className="underline" href="https://www.moises.tech">
              moises.tech
            </a>
            {' · '}
            <Link className="underline" href="/artist-infrastructure">
              Artist infrastructure
            </Link>
            . Cover direction A remains an alternate.
          </p>
          <LabMedia id="coverA" />
          <LabGhostButton testId="reset-project" onClick={reset}>
            Clear this browser’s project package
          </LabGhostButton>
        </section>
      </div>
    </main>
  )
}
