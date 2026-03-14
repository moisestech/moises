'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { EYEBEAM_INQUIRY } from '@/constants/eyebeam-inquiry';
import { WorkImageCarousel } from './WorkImageCarousel';
import { GlitchText } from '@/components/common/GlitchText';

export default function EyebeamInquiryPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main
      className={`min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* Hero - 200px heading area, full-width */}
      <section
        className={`mt-[200px] min-h-[200px] flex flex-col justify-center px-6 sm:px-10 lg:px-11 mb-12 sm:mb-16 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto">
          <GlitchText
            as="h1"
            className={`text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[200px] font-bold tracking-tight leading-[0.9] ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {EYEBEAM_INQUIRY.hero.headline}
          </GlitchText>
        </div>
      </section>

      <article className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
        {/* Hero subheadline and intro */}
        <section className="mb-16 sm:mb-24 border-b border-current/10 pb-16 sm:pb-24">
          <p
            className={`text-[28px] sm:text-[36px] md:text-[43px] leading-[1.2] mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.hero.subheadline}
          </p>
          <p
            className={`text-[28px] sm:text-[36px] md:text-[43px] leading-[1.2] ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.hero.intro}
          </p>
        </section>

        {/* Current Inquiry */}
        <section className="mb-16 sm:mb-24">
          <Link
            href="/research/born-into-the-machine"
            className="block group"
          >
            <GlitchText
              as="h2"
              className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-tight group-hover:underline ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {EYEBEAM_INQUIRY.currentInquiry.title}
            </GlitchText>
          </Link>
          <p
            className={`text-[28px] sm:text-[36px] md:text-[43px] leading-[1.2] ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.currentInquiry.content}
          </p>
          <Link
            href="/research/born-into-the-machine"
            className={`inline-block mt-6 text-[20px] sm:text-[24px] font-medium underline underline-offset-4 ${
              isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            Explore Born into the Machine →
          </Link>
        </section>

        {/* Selected Works */}
        <section className="mb-16 sm:mb-24">
          <GlitchText
            as="h2"
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Selected Works
          </GlitchText>
          <div className="space-y-16 sm:space-y-20">
            {EYEBEAM_INQUIRY.selectedWorks.map((work) => (
              <Link
                key={work.slug}
                href={`/art/${work.slug}`}
                className="block space-y-4 sm:space-y-6 group"
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <WorkImageCarousel images={work.images} alt={work.title} />
                </div>
                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-semibold mb-2 group-hover:underline ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {work.title} ({work.year})
                  </h3>
                  <p
                    className={`text-[20px] sm:text-[24px] mb-3 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {work.medium}
                  </p>
                  <p
                    className={`text-[28px] sm:text-[36px] md:text-[43px] leading-[1.2] mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {work.description}
                  </p>
                  <p
                    className={`text-[20px] sm:text-[24px] italic ${
                      isDark ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    <strong>Relevance:</strong> {work.relevance}
                  </p>
                  <span
                    className={`inline-block mt-4 text-[20px] sm:text-[24px] font-medium underline underline-offset-4 ${
                      isDark ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-blue-600 group-hover:text-blue-700'
                    }`}
                  >
                    View work →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Technology in the Practice */}
        <section className="mb-16 sm:mb-24 border-t border-current/10 pt-16 sm:pt-24">
          <GlitchText
            as="h2"
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {EYEBEAM_INQUIRY.technology.title}
          </GlitchText>
          <p
            className={`text-[28px] sm:text-[36px] md:text-[43px] leading-[1.2] ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.technology.content}
          </p>
        </section>

        {/* Contact */}
        <section className="mb-16 sm:mb-24 border-t border-current/10 pt-16 sm:pt-24">
          <GlitchText
            as="h2"
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Contact
          </GlitchText>
          <p
            className={`text-[28px] sm:text-[36px] md:text-[43px] leading-[1.2] mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.contact.bio}
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
            {EYEBEAM_INQUIRY.contact.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`min-h-[44px] min-w-[44px] inline-flex items-center text-[20px] sm:text-[24px] font-medium underline underline-offset-4 hover:no-underline py-2 ${
                  isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p
            className={`text-[28px] sm:text-[36px] md:text-[43px] leading-[1.2] ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.contact.closing}
          </p>
        </section>
      </article>
    </main>
  );
}
