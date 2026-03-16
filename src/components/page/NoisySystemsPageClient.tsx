'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { NOISY_SYSTEMS } from '@/constants/noisy-systems';
import { artist } from '@/constants/artworks';
import { SectionWrapper } from '@/components/noisy-systems/SectionWrapper';
import { ArtworkEntry } from '@/components/noisy-systems/ArtworkEntry';
import { MetadataRow } from '@/components/noisy-systems/MetadataRow';
import { LinkList } from '@/components/noisy-systems/LinkList';
import { TextWithLexicon } from '@/components/noisy-systems/TextWithLexicon';
import { MarginalNote } from '@/components/noisy-systems/MarginalNote';
import { ProcessFragment } from '@/components/noisy-systems/ProcessFragment';
import Link from 'next/link';

export default function NoisySystemsPageClient() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';
  const textMutedLight = isDark ? 'text-gray-500' : 'text-gray-500';
  const headingClass = isDark ? 'text-white' : 'text-gray-900';
  const bodyClass = isDark ? 'text-gray-300' : 'text-gray-700';

  return (
    <main
      className={`min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* Hero - matches Eyebeam structure */}
      <section
        className={`mt-[200px] min-h-[200px] flex flex-col justify-center px-6 sm:px-10 lg:px-11 mb-16 sm:mb-24 border-b border-current/10 pb-16 sm:pb-24 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 ${headingClass}`}
          >
            {NOISY_SYSTEMS.hero.title}
          </h1>
          <p className={`text-xl sm:text-2xl ${textMuted} mb-2`}>
            {NOISY_SYSTEMS.hero.subtitle}
          </p>
          <p className={`text-base ${textMutedLight} mb-4`}>
            {NOISY_SYSTEMS.hero.framingLine}
          </p>
          <p className={`text-lg max-w-2xl leading-relaxed mb-6 ${bodyClass}`}>
            {NOISY_SYSTEMS.hero.framingParagraph}
          </p>
          <p className={`text-sm ${textMutedLight}`}>{NOISY_SYSTEMS.hero.cfpNote}</p>
        </div>
      </section>

      <article className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-11">
        {/* 2. Abstract */}
        <SectionWrapper withBorder>
          <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 tracking-tight ${headingClass}`}>
            Proposed Abstract
          </h2>
          <p className={`text-lg font-medium max-w-2xl mb-4 ${bodyClass}`}>
            {NOISY_SYSTEMS.abstract.title}
          </p>
          <MetadataRow
            items={[
              { label: 'Author', value: NOISY_SYSTEMS.abstract.metadata.author },
              { label: 'Location', value: NOISY_SYSTEMS.abstract.metadata.location },
              { label: 'Practice', value: NOISY_SYSTEMS.abstract.metadata.practice },
              { label: 'Status', value: NOISY_SYSTEMS.abstract.metadata.status },
            ]}
          />
          <div className={`space-y-4 max-w-2xl ${bodyClass}`}>
            {NOISY_SYSTEMS.abstract.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed">
                <TextWithLexicon text={paragraph} lexicon={NOISY_SYSTEMS.lexicon} />
              </p>
            ))}
          </div>
        </SectionWrapper>

        <ProcessFragment text={NOISY_SYSTEMS.processFragments[0]} glitchTerm="noise" />

        {/* 3. Selected Works */}
        <SectionWrapper withBorder>
          <h2 className={`text-2xl sm:text-3xl font-semibold mb-8 sm:mb-10 tracking-tight ${headingClass}`}>
            Selected Works
          </h2>
          <div className="space-y-16 sm:space-y-20">
            {NOISY_SYSTEMS.selectedWorks.map((work) => {
              const artwork = artist.artworks[work.slug];
              if (!artwork) return null;
              const image = 'imageOverride' in work && work.imageOverride
                ? work.imageOverride
                : artwork.images[0];
              const imageUrl = image.url;
              const imageAlt = 'alt' in image ? image.alt : (image.caption || artwork.title);
              return (
                <ArtworkEntry
                  key={work.slug}
                  title={artwork.title}
                  year={artwork.year}
                  imageUrl={imageUrl}
                  imageAlt={imageAlt}
                  description={artwork.description}
                  relevance={work.relevance}
                  slug={work.slug}
                  conceptualTag={work.conceptualTag}
                />
              );
            })}
          </div>
        </SectionWrapper>

        <ProcessFragment text={NOISY_SYSTEMS.processFragments[1]} />

        {/* 4. Artist Process */}
        <SectionWrapper withBorder>
          <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 tracking-tight ${headingClass}`}>
            Artist Process
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl leading-relaxed ${bodyClass}`}>
            <TextWithLexicon
              text={NOISY_SYSTEMS.artistProcess}
              lexicon={NOISY_SYSTEMS.lexicon}
            />
            {' '}
            <MarginalNote>
              This concept emerges from ongoing work in Born into the Machine. The practice-based
              approach treats making as a form of inquiry.
            </MarginalNote>
          </p>
        </SectionWrapper>

        <ProcessFragment text={NOISY_SYSTEMS.processFragments[2]} />

        {/* 5. Born into the Machine */}
        <SectionWrapper withBorder>
          <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 tracking-tight ${headingClass}`}>
            Born into the Machine
          </h2>
          <p className={`text-lg max-w-2xl leading-relaxed mb-4 ${bodyClass}`}>
            {NOISY_SYSTEMS.bornIntoTheMachine.paragraph}
          </p>
          <Link
            href={NOISY_SYSTEMS.bornIntoTheMachine.link.href}
            className={`text-base font-medium underline underline-offset-4 ${
              isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {NOISY_SYSTEMS.bornIntoTheMachine.link.label}
          </Link>
        </SectionWrapper>

        <ProcessFragment text={NOISY_SYSTEMS.processFragments[3]} />

        {/* 6. Bio / Links */}
        <SectionWrapper withBorder>
          <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 tracking-tight ${headingClass}`}>
            Bio
          </h2>
          <p className={`text-lg max-w-2xl leading-relaxed mb-6 ${bodyClass}`}>
            {NOISY_SYSTEMS.bio.summary}
          </p>
          <LinkList links={NOISY_SYSTEMS.bio.links} />
        </SectionWrapper>

        {/* 7. Selected Links */}
        <SectionWrapper withBorder>
          <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 tracking-tight ${headingClass}`}>
            Selected Links
          </h2>
          <LinkList links={NOISY_SYSTEMS.selectedLinks} />
        </SectionWrapper>
      </article>
    </main>
  );
}
