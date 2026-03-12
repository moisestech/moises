'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { EYEBEAM_INQUIRY } from '@/constants/eyebeam-inquiry';

export default function EyebeamInquiryPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main
      className={`min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <article className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <section className="mb-12 sm:mb-16">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {EYEBEAM_INQUIRY.hero.headline}
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.hero.subheadline}
          </p>
          <p
            className={`text-base leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.hero.intro}
          </p>
        </section>

        {/* Current Inquiry */}
        <section className="mb-12 sm:mb-16">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {EYEBEAM_INQUIRY.currentInquiry.title}
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.currentInquiry.content}
          </p>
        </section>

        {/* Selected Works */}
        <section className="mb-12 sm:mb-16">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Selected Works
          </h2>
          <div className="space-y-10 sm:space-y-12">
            {EYEBEAM_INQUIRY.selectedWorks.map((work) => (
              <div key={work.slug} className="space-y-3 sm:space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={work.imageUrl}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
                <div>
                  <h3
                    className={`text-lg sm:text-xl font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {work.title} ({work.year})
                  </h3>
                  <p
                    className={`text-sm mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {work.medium}
                  </p>
                  <p
                    className={`text-base leading-relaxed mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {work.description}
                  </p>
                  <p
                    className={`text-sm italic ${
                      isDark ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    <strong>Relevance:</strong> {work.relevance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology in the Practice */}
        <section className="mb-12 sm:mb-16">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {EYEBEAM_INQUIRY.technology.title}
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.technology.content}
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2
            className={`text-xl sm:text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Contact
          </h2>
          <p
            className={`text-base leading-relaxed mb-6 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {EYEBEAM_INQUIRY.contact.bio}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
            {EYEBEAM_INQUIRY.contact.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`min-h-[44px] min-w-[44px] inline-flex items-center text-sm font-medium underline underline-offset-4 hover:no-underline py-2 ${
                  isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p
            className={`text-base ${
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
