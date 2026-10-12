'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { EYEBEAM_INQUIRY } from '@/constants/eyebeam-inquiry';
import { WorkImageCarousel } from './WorkImageCarousel';
import { GlitchText } from '@/components/common/GlitchText';
import EyebeamLineage from './EyebeamLineage';

const bodyClass = 'text-lg sm:text-xl leading-relaxed max-w-3xl';

export default function EyebeamInquiryPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const muted = isDark ? 'text-gray-400' : 'text-gray-600';
  const heading = isDark ? 'text-white' : 'text-gray-900';
  const focusClass = `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
    isDark ? 'focus-visible:outline-white' : 'focus-visible:outline-black'
  }`;
  const linkClass = `min-h-[44px] min-w-[44px] inline-flex items-center text-lg sm:text-xl font-medium underline underline-offset-4 hover:no-underline py-2 ${focusClass} ${
    isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
  }`;

  return (
    <main
      className={`min-h-screen overflow-x-clip pt-24 sm:pt-32 pb-16 sm:pb-24 transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <section
        className={`mt-10 sm:mt-24 lg:mt-[200px] min-h-0 lg:min-h-[200px] flex flex-col justify-center overflow-x-clip px-6 sm:px-10 lg:px-11 mb-12 sm:mb-16 ${heading}`}
      >
        <div className="w-full max-w-7xl mx-auto">
          <GlitchText
            as="h1"
            className={`max-w-full text-[clamp(2.75rem,7.2vw,7.75rem)] font-bold tracking-tight leading-[0.9] ${heading}`}
          >
            {EYEBEAM_INQUIRY.hero.headline}
          </GlitchText>
        </div>
      </section>

      <article className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
        <section className="mb-16 sm:mb-24 border-b border-current/10 pb-16 sm:pb-24">
          <p className={`${bodyClass} ${muted}`}>{EYEBEAM_INQUIRY.hero.intro}</p>
        </section>

        <section className="mb-16 sm:mb-24">
          <p className={`text-sm tracking-wide uppercase mb-3 ${muted}`}>
            {EYEBEAM_INQUIRY.currentInquiry.eyebrow}
          </p>
          <GlitchText
            as="h2"
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${heading}`}
          >
            {EYEBEAM_INQUIRY.currentInquiry.title}
          </GlitchText>
          <p
            className={`text-3xl sm:text-5xl md:text-6xl leading-tight mb-8 max-w-4xl font-medium ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}
          >
            {EYEBEAM_INQUIRY.currentInquiry.proposition}
          </p>
          <div className={`space-y-5 ${muted}`}>
            <p className={bodyClass}>{EYEBEAM_INQUIRY.currentInquiry.stakes}</p>
            <p className={bodyClass}>{EYEBEAM_INQUIRY.currentInquiry.gap}</p>
            <p className={bodyClass}>{EYEBEAM_INQUIRY.currentInquiry.authority}</p>
            <p className={bodyClass}>{EYEBEAM_INQUIRY.currentInquiry.questions}</p>
          </div>
        </section>

        <section className="mb-16 sm:mb-24">
          <h2 className="sr-only">Method</h2>
          <ol className="max-w-3xl border-b border-current/15">
            {EYEBEAM_INQUIRY.method.steps.map((step, index) => (
              <li
                key={step}
                className="flex items-baseline gap-4 border-t border-current/15 py-3 sm:py-4"
              >
                <span className={`w-8 shrink-0 text-sm tabular-nums ${muted}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg sm:text-xl">{step}</span>
              </li>
            ))}
          </ol>
          <div className={`mt-8 space-y-5 ${muted}`}>
            <p className={bodyClass}>{EYEBEAM_INQUIRY.method.instrument}</p>
            <p className={bodyClass}>{EYEBEAM_INQUIRY.method.argument}</p>
            <p className={bodyClass}>{EYEBEAM_INQUIRY.method.examples}</p>
            <p className={bodyClass}>{EYEBEAM_INQUIRY.method.unresolved}</p>
          </div>
        </section>

        <section className="mb-16 sm:mb-24">
          <EyebeamLineage rows={EYEBEAM_INQUIRY.lineage} muted={muted} />
          <GlitchText
            as="h2"
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 tracking-tight ${heading}`}
          >
            Selected Works
          </GlitchText>

          <div className="space-y-16 sm:space-y-20">
            {EYEBEAM_INQUIRY.selectedWorks.map((work) => (
              <article key={work.slug} className="space-y-4 sm:space-y-6">
                <WorkImageCarousel images={work.images} alt={work.title} />
                <div>
                  <h3 className={`text-xl sm:text-2xl font-semibold mb-2 ${heading}`}>
                    <Link
                      href={`/art/${work.slug}`}
                      className={`underline-offset-4 hover:underline ${focusClass}`}
                    >
                      {work.title} ({work.year})
                    </Link>
                  </h3>
                  <p className={`text-lg sm:text-xl mb-3 ${muted}`}>{work.medium}</p>
                  <p className={`${bodyClass} mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {work.description}
                  </p>
                  <p className={`${bodyClass} italic ${muted}`}>{work.relevance}</p>
                  <Link href={`/art/${work.slug}`} className={`mt-4 ${linkClass}`}>
                    View work →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-24 border-t border-current/10 pt-16 sm:pt-24">
          <GlitchText
            as="h2"
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${heading}`}
          >
            {EYEBEAM_INQUIRY.technology.title}
          </GlitchText>
          <p className={`${bodyClass} ${muted}`}>{EYEBEAM_INQUIRY.technology.content}</p>
        </section>

        <section className="mb-16 sm:mb-24">
          <p className={`${bodyClass} mb-4 ${muted}`}>{EYEBEAM_INQUIRY.broaderResearch.text}</p>
          <Link href={EYEBEAM_INQUIRY.broaderResearch.href} className={linkClass}>
            {EYEBEAM_INQUIRY.broaderResearch.label}
          </Link>
        </section>

        <section className="mb-16 sm:mb-24 border-t border-current/10 pt-16 sm:pt-24">
          <GlitchText
            as="h2"
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${heading}`}
          >
            Contact
          </GlitchText>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {EYEBEAM_INQUIRY.contact.links.map((link) => (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>
          <p className={`${bodyClass} ${muted}`}>{EYEBEAM_INQUIRY.contact.closing}</p>
        </section>
      </article>
    </main>
  );
}
