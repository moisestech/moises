'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { BAC_FIELD_GUIDE_IMAGES_AFTER_SCREEN as C } from '@/constants/bac-field-guide-images-after-screen';
import { FieldGuideToc } from './FieldGuideToc';

const sectionScroll =
  'scroll-mt-28 sm:scroll-mt-32';

function SectionTitle({
  id,
  children,
  isDark,
}: {
  id: string;
  children: React.ReactNode;
  isDark: boolean;
}) {
  return (
    <h2
      id={id}
      className={`text-xl sm:text-2xl font-semibold tracking-tight mb-6 ${sectionScroll} ${
        isDark ? 'text-white' : 'text-neutral-900'
      }`}
    >
      {children}
    </h2>
  );
}

function Prose({ isDark, children }: { isDark: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`space-y-4 text-base sm:text-[17px] leading-relaxed max-w-3xl ${
        isDark ? 'text-neutral-300' : 'text-neutral-700'
      }`}
    >
      {children}
    </div>
  );
}

export default function BacFieldGuideClient() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const border = isDark ? 'border-white/10' : 'border-black/10';
  const cardBg = isDark ? 'bg-white/[0.03]' : 'bg-neutral-50';
  const muted = isDark ? 'text-neutral-400' : 'text-neutral-600';
  const accentLink = isDark
    ? 'text-cyan-400 hover:text-cyan-300'
    : 'text-blue-700 hover:text-blue-900';

  return (
    <main
      className={`min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-28 transition-colors font-['MoMA_Sans'] ${
        isDark ? 'bg-black text-white' : 'bg-[#fafafa] text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
        <header className="mb-14 sm:mb-20 max-w-4xl">
          <p
            className={`text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 ${
              isDark ? 'text-neutral-500' : 'text-neutral-500'
            }`}
          >
            {C.hero.kicker}
          </p>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] mb-6 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            {C.hero.title}
          </h1>
          <p className={`text-lg sm:text-xl leading-snug mb-6 ${muted}`}>{C.hero.subtitle}</p>
          <p className={`text-sm sm:text-base ${muted}`}>{C.hero.presentersLine}</p>
          <p className={`text-sm sm:text-base ${muted}`}>{C.hero.collaborationLine}</p>
          <p className={`text-sm sm:text-base mt-4 font-medium ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
            <span className="font-semibold">Session date:</span> {C.hero.sessionDate}
          </p>
          <p className={`mt-8 text-sm sm:text-base leading-relaxed max-w-3xl border-l-2 pl-4 ${
            isDark ? 'border-white/20 text-neutral-400' : 'border-black/15 text-neutral-600'
          }`}>
            {C.hero.purposeLine}
          </p>

          <nav
            className={`mt-10 flex flex-wrap gap-2 sm:gap-3`}
            aria-label="Section shortcuts"
          >
            {C.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs sm:text-sm transition-colors ${
                  isDark
                    ? 'border-white/20 text-neutral-200 hover:bg-white/10'
                    : 'border-black/15 text-neutral-800 hover:bg-black/[0.04]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-12 xl:gap-16">
          <div className="order-2 lg:order-1 min-w-0">
            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="session-overview" isDark={isDark}>
                {C.overview.title}
              </SectionTitle>
              <Prose isDark={isDark}>
                {C.overview.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Prose>
              <aside
                className={`mt-10 max-w-3xl rounded-md border p-5 sm:p-6 ${border} ${cardBg}`}
              >
                <h3
                  className={`text-sm font-semibold tracking-wide uppercase mb-3 ${
                    isDark ? 'text-neutral-200' : 'text-neutral-800'
                  }`}
                >
                  {C.overview.whyNowTitle}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${muted}`}>{C.overview.whyNow}</p>
              </aside>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="how-readings-connect" isDark={isDark}>
                {C.connections.title}
              </SectionTitle>
              <div className="grid gap-6 sm:grid-cols-3">
                {C.connections.cards.map((card) => (
                  <div
                    key={card.label}
                    className={`rounded-md border p-5 ${border} ${cardBg}`}
                  >
                    <h3
                      className={`text-sm font-semibold mb-3 leading-snug ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {card.label}
                    </h3>
                    <p className={`text-sm leading-relaxed ${muted}`}>{card.text}</p>
                  </div>
                ))}
              </div>
              <p className={`mt-8 text-base leading-relaxed max-w-3xl ${muted}`}>
                {C.connections.bridge}
              </p>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="readings" isDark={isDark}>
                Readings
              </SectionTitle>
              <div className="space-y-12">
                {C.readings.map((r) => (
                  <article
                    key={r.id}
                    className={`max-w-3xl border-b ${border} pb-12 last:border-0 last:pb-0`}
                  >
                    <p className={`text-sm font-medium uppercase tracking-wide mb-1 ${muted}`}>
                      {r.author}
                    </p>
                    <h3
                      className={`text-lg sm:text-xl font-semibold mb-1 italic ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {r.title}
                    </h3>
                    <p className={`text-sm mb-4 ${muted}`}>
                      {r.source}, {r.year}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {r.externalUrl ? (
                        <a
                          href={r.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium underline underline-offset-4 ${accentLink}`}
                        >
                          Read online
                        </a>
                      ) : null}
                      {r.pdfUrl ? (
                        <a
                          href={r.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium underline underline-offset-4 ${accentLink}`}
                        >
                          PDF
                        </a>
                      ) : null}
                    </div>
                    <div className="space-y-3 text-sm sm:text-base leading-relaxed">
                      <p>
                        <span className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                          Summary
                        </span>
                        <span className={muted}> — {r.summary}</span>
                      </p>
                      <p>
                        <span className={`font-semibold ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                          Why it matters here
                        </span>
                        <span className={muted}> — {r.whyItMatters}</span>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="suggested-reading-path" isDark={isDark}>
                {C.suggestedPath.title}
              </SectionTitle>
              <Prose isDark={isDark}>
                <ol className="list-decimal pl-5 space-y-3">
                  {C.suggestedPath.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className={`text-sm sm:text-base ${muted} pt-2`}>{C.suggestedPath.note}</p>
              </Prose>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="key-concepts" isDark={isDark}>
                Key Concepts
              </SectionTitle>
              <p className={`text-sm mb-8 max-w-3xl ${muted}`}>
                Expand each term for a short working definition for discussion.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 max-w-4xl">
                {C.concepts.map((c) => (
                  <details
                    key={c.term}
                    className={`group rounded-md border ${border} ${cardBg} overflow-hidden`}
                  >
                    <summary
                      className={`cursor-pointer list-none px-4 py-3 text-sm font-semibold flex justify-between items-center gap-2 ${
                        isDark
                          ? 'text-white hover:bg-white/[0.06]'
                          : 'text-neutral-900 hover:bg-black/[0.03]'
                      } [&::-webkit-details-marker]:hidden`}
                    >
                      {c.term}
                      <span className={`text-xs font-normal ${muted} group-open:rotate-180 transition-transform`}>
                        ▾
                      </span>
                    </summary>
                    <div
                      className={`px-4 pb-4 text-sm leading-relaxed border-t ${border} pt-3 ${muted}`}
                    >
                      {c.definition}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="writers-and-thinkers" isDark={isDark}>
                {C.writers.title}
              </SectionTitle>
              <ul className="space-y-6 max-w-3xl list-none pl-0">
                {C.writers.core.map((w) => (
                  <li key={w.name}>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {w.name}
                    </span>
                    <span className={muted}> — {w.bio}</span>
                  </li>
                ))}
              </ul>
              <h3
                className={`text-base font-semibold mt-10 mb-4 ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}
              >
                {C.writers.relatedTitle}
              </h3>
              <ul className="space-y-4 max-w-3xl list-none pl-0">
                {C.writers.related.map((w) => (
                  <li key={w.name}>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {w.name}
                    </span>
                    <span className={muted}> — {w.bio}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="artists-and-references" isDark={isDark}>
                {C.artists.title}
              </SectionTitle>
              <p className={`text-sm sm:text-base mb-8 max-w-3xl ${muted}`}>{C.artists.intro}</p>
              <ul className="space-y-5 max-w-3xl list-none pl-0 mb-12">
                {C.artists.core.map((a) => (
                  <li key={a.name}>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {a.name}
                    </span>
                    <span className={muted}> — {a.note}</span>
                  </li>
                ))}
              </ul>
              <h3
                className={`text-base font-semibold mb-4 ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}
              >
                {C.artists.referencesTitle}
              </h3>
              <ul className="space-y-4 max-w-3xl list-none pl-0">
                {C.artists.references.map((a) => (
                  <li key={a.name}>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {a.name}
                    </span>
                    <span className={muted}> — {a.note}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="discussion-questions" isDark={isDark}>
                {C.discussion.title}
              </SectionTitle>
              <ol className="space-y-5 max-w-3xl list-decimal pl-5 text-base leading-relaxed">
                {C.discussion.questions.map((q) => (
                  <li key={q} className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                    {q}
                  </li>
                ))}
              </ol>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="session-flow" isDark={isDark}>
                {C.sessionFlow.title}
              </SectionTitle>
              <ol className="space-y-6 max-w-3xl list-none pl-0">
                {C.sessionFlow.blocks.map((b, i) => (
                  <li key={b.label} className="flex gap-4">
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                        isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-neutral-900'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                        {b.label}
                      </p>
                      <p className={`text-sm sm:text-base leading-relaxed ${muted}`}>{b.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="further-reading" isDark={isDark}>
                {C.furtherReading.title}
              </SectionTitle>
              <p className={`text-sm sm:text-base mb-6 max-w-3xl ${muted}`}>{C.furtherReading.intro}</p>
              <ul className="space-y-3 max-w-3xl list-disc pl-5 text-sm sm:text-base leading-relaxed">
                {C.furtherReading.bullets.map((b) => (
                  <li key={b} className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            <section className={`mb-16 sm:mb-24 pb-16 sm:pb-24 border-b ${border}`}>
              <SectionTitle id="about-hosts" isDark={isDark}>
                {C.hosts.title}
              </SectionTitle>
              <div className="space-y-8 max-w-3xl">
                {C.hosts.people.map((h) => (
                  <div key={h.name}>
                    <p className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {h.name}
                    </p>
                    <p className={`text-sm sm:text-base leading-relaxed ${muted}`}>{h.bio}</p>
                    {h.websiteUrl ? (
                      <a
                        href={h.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block mt-2 text-sm font-medium underline underline-offset-4 ${accentLink}`}
                      >
                        Website
                      </a>
                    ) : (
                      <p className={`mt-2 text-sm ${muted}`}>Website — link to be added</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <SectionTitle id="related-links" isDark={isDark}>
                {C.relatedLinks.title}
              </SectionTitle>
              <ul className="space-y-3 list-none pl-0 max-w-3xl">
                {C.relatedLinks.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm sm:text-base font-medium underline underline-offset-4 ${accentLink}`}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <span className={`text-sm sm:text-base ${muted}`}>{l.label} — link to be added</span>
                    )}
                  </li>
                ))}
              </ul>
              <p className={`mt-10 text-sm ${muted}`}>
                Back to{' '}
                <Link href="/" className={`underline underline-offset-4 ${accentLink}`}>
                  home
                </Link>
                {' · '}
                <Link href="/bio" className={`underline underline-offset-4 ${accentLink}`}>
                  bio
                </Link>
                {' · '}
                <Link
                  href="/research/born-into-the-machine"
                  className={`underline underline-offset-4 ${accentLink}`}
                >
                  Born into the Machine
                </Link>
              </p>
            </section>
          </div>

          <div className="order-1 lg:order-2 min-w-0">
            <FieldGuideToc items={C.nav} isDark={isDark} />
          </div>
        </div>
      </div>
    </main>
  );
}
