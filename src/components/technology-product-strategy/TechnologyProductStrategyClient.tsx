'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin, FileText, ExternalLink, LayoutGrid, ChevronRight } from 'lucide-react';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { technologyProductStrategy } from '@/content/technologyProductStrategy';
import { track } from '@/lib/analytics';
import {
  AiMediaStackDiagram,
  CivicInformationStackDiagram,
  InvestmentLensDiagram,
} from '@/components/technology-product-strategy/FrameworkDiagrams';
import { SkillCapabilityChart } from '@/components/technology-product-strategy/SkillCapabilityChart';

function GridImage({
  src,
  alt,
  local,
}: {
  src: string;
  alt: string;
  local: boolean;
}) {
  if (local) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 50vw, 33vw"
    />
  );
}

const TPS_TRACK_SLUG = 'technology-product-strategy';

export default function TechnologyProductStrategyClient() {
  const { ctas } = technologyProductStrategy;
  const skillData = technologyProductStrategy.skills.map((s) => ({
    name: s.name,
    value: s.value,
  }));

  const navItems = technologyProductStrategy.nav.map((item) => ({ id: item.id, label: item.label }));

  const trackCta = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: TPS_TRACK_SLUG, kind });
  };

  return (
    <OpportunityShell navItems={navItems}>
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-8 font-['MoMA_Sans'] sm:pt-10">
        <p className="mb-6 text-center text-xs text-stone-500 sm:text-sm">
          {technologyProductStrategy.audienceLine}
        </p>

        <section id="profile" className="scroll-mt-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-800">
                {technologyProductStrategy.profile.location}
              </p>
              <h1 className="mt-2 font-['MoMA_Sans'] text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                {technologyProductStrategy.profile.headline}
              </h1>
              <p className="mt-2 text-lg text-stone-600">{technologyProductStrategy.profile.subtitle}</p>
              <p className="mt-1 text-sm text-stone-500">{technologyProductStrategy.profile.roleLine}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{technologyProductStrategy.profile.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {technologyProductStrategy.profile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={ctas.resumePrintPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800"
                  onClick={() => trackCta('resume_print')}
                >
                  <FileText className="h-4 w-4 shrink-0" aria-hidden />
                  Résumé (print to PDF)
                </a>
                <a
                  href={ctas.coverLetterPrintPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
                  onClick={() => trackCta('cover_letter_print')}
                >
                  <FileText className="h-4 w-4 shrink-0" aria-hidden />
                  Cover letter (print to PDF)
                </a>
                <a
                  href={`mailto:${ctas.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
                  onClick={() => trackCta('email')}
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  Email
                </a>
                <a
                  href={ctas.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
                  onClick={() => trackCta('linkedin')}
                >
                  <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
                  LinkedIn
                </a>
                <Link
                  href={ctas.portfolio}
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
                >
                  <LayoutGrid className="h-4 w-4 shrink-0" aria-hidden />
                  Portfolio
                </Link>
                <Link
                  href={ctas.cv}
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
                >
                  Web CV
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-stone-500">Selected visuals</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {technologyProductStrategy.heroGrid.map((cell) => (
                  <div
                    key={cell.alt}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg border border-stone-200 bg-stone-100"
                  >
                    <GridImage src={cell.src} alt={cell.alt} local={cell.local} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="thesis" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">{technologyProductStrategy.thesis.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-700">
            {technologyProductStrategy.thesis.body}
          </p>
        </section>

        <section id="fit" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">Why this background fits the role</h2>
          <p className="mt-3 max-w-3xl text-sm text-stone-600">{technologyProductStrategy.journalismNote}</p>
          <div className="mt-6 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 text-xs font-semibold uppercase tracking-wide text-stone-600">
                <tr>
                  <th className="px-4 py-3 sm:w-[42%]">Knight responsibilities (paraphrased)</th>
                  <th className="px-4 py-3">Relevant experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {technologyProductStrategy.strategicFit.map((row) => (
                  <tr key={row.need} className="align-top">
                    <td className="px-4 py-3 font-medium text-stone-900">{row.need}</td>
                    <td className="px-4 py-3 text-stone-700">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="skills" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">Capabilities map</h2>
          <div className="mt-6 max-w-3xl">
            <SkillCapabilityChart data={skillData} disclaimer={technologyProductStrategy.skillsDisclaimer} />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <AiMediaStackDiagram />
            <CivicInformationStackDiagram />
            <InvestmentLensDiagram />
          </div>
        </section>

        <section id="projects" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">Selected case studies</h2>
          <p className="mt-2 max-w-3xl text-sm text-stone-600">
            {technologyProductStrategy.relatedWorkNote.text}{' '}
            <Link href={technologyProductStrategy.relatedWorkNote.href} className="font-medium text-cyan-800 underline-offset-2 hover:underline">
              {technologyProductStrategy.relatedWorkNote.linkLabel}
            </Link>
            .
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {technologyProductStrategy.caseStudies.map((cs) => (
              <article
                key={cs.title}
                className="flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] border-b border-stone-100 bg-stone-100">
                  {cs.imageIsRemote ? (
                    <Image
                      src={cs.imageSrc}
                      alt={cs.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={cs.imageSrc} alt={cs.imageAlt} className="h-full w-full object-cover" loading="lazy" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-cyan-800">{cs.category}</p>
                  <h3 className="mt-1 font-['MoMA_Sans'] text-lg font-semibold text-stone-950">{cs.title}</h3>
                  <p className="mt-2 text-sm text-stone-700">{cs.description}</p>
                  <p className="mt-2 text-xs text-stone-500">
                    <span className="font-semibold text-stone-600">Role:</span> {cs.role}
                  </p>
                  <ul className="mt-2 list-inside list-disc text-xs text-stone-600">
                    {cs.technologyRelevance.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <p className="mt-3 border-t border-stone-100 pt-3 text-xs leading-relaxed text-stone-600">
                    <span className="font-semibold text-stone-700">For this role:</span> {cs.knightRelevance}
                  </p>
                  {cs.href ? (
                    cs.href.startsWith('/') ? (
                      <Link
                        href={cs.href}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-800 underline-offset-2 hover:underline"
                      >
                        View context
                        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    ) : (
                      <a
                        href={cs.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-800 hover:underline"
                      >
                        View context
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    )
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="startup" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">{technologyProductStrategy.startupBlurb.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-700">
            {technologyProductStrategy.startupBlurb.body}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologyProductStrategy.startupSkillRows.map((row) => (
              <div key={row.bucket} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-cyan-900">{row.bucket}</h3>
                <ul className="mt-2 space-y-1 text-xs text-stone-600">
                  {row.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="talks" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">Talks, teaching, and video</h2>
          <p className="mt-2 max-w-3xl text-sm text-stone-600">
            Embed URLs in `technologyProductStrategy.ts` when recordings are available. Convening and translation skills
            are central to this role.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {technologyProductStrategy.talks.map((talk) => (
              <div key={talk.title} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <h3 className="font-medium text-stone-900">{talk.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{talk.description}</p>
                {talk.embedUrl ? (
                  <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-black">
                    <iframe
                      src={talk.embedUrl}
                      title={talk.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="mt-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-stone-300 bg-stone-50 text-xs text-stone-500">
                    {talk.placeholder ? 'Video / embed — add when ready' : null}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="strategy" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">How I evaluate emerging technology projects</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {technologyProductStrategy.strategyLens.map((item, i) => (
              <div key={item.title} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <span className="text-xs font-bold text-cyan-800">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 font-medium text-stone-900">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{item.question}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="capabilities" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">What I would bring day to day</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologyProductStrategy.capabilities.map((c) => (
              <div key={c.title} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <h3 className="font-medium text-stone-900">{c.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="metrics" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">Proof points</h2>
          <p className="mt-2 text-xs text-stone-500">{technologyProductStrategy.metrics.disclaimer}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologyProductStrategy.metrics.items.map((m) => (
              <div key={m.label} className="rounded-xl border border-stone-200 bg-white p-4 text-center shadow-sm">
                <dt className="text-xs text-stone-500">{m.label}</dt>
                <dd className="mt-2 font-['MoMA_Sans'] text-2xl font-semibold text-cyan-900">{m.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="context" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">Selected contexts</h2>
          <p className="mt-2 text-xs text-stone-500">{technologyProductStrategy.logos.disclaimer}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologyProductStrategy.logos.names.map((name) => (
              <span
                key={name}
                className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700"
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
          <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">{technologyProductStrategy.closing.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-700">{technologyProductStrategy.closing.body}</p>
          <p className="mt-4 text-xs text-stone-500">{technologyProductStrategy.closing.preparedFor}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${ctas.email}?subject=Technology%20Product%20Strategist%20%E2%80%94%20Moises%20Sanabria`}
              className="inline-flex rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800"
              onClick={() => trackCta('email_moises_footer')}
            >
              Email Moises
            </a>
            <a
              href={ctas.resumePrintPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
              onClick={() => trackCta('resume_print_footer')}
            >
              Résumé (print to PDF)
            </a>
            <a
              href={ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
              onClick={() => trackCta('linkedin_footer')}
            >
              LinkedIn
            </a>
            <Link
              href={ctas.portfolio}
              className="inline-flex rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
            >
              Portfolio
            </Link>
          </div>
        </section>
      </main>
    </OpportunityShell>
  );
}
