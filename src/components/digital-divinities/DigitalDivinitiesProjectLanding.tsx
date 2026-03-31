import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DIGITAL_DIVINITIES_PROJECT,
  digitalDivinitiesMailtoHref,
} from '@/constants/digital-divinities-project';

const NAV = [
  { href: '#overview', label: 'Overview' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#live-experience', label: 'Live Experience' },
  { href: '#technical-setup', label: 'Technical Setup' },
  { href: '#exhibitions', label: 'Exhibitions' },
  { href: '#about', label: 'About' },
  { href: '#inquire', label: 'Inquire' },
] as const;

const FACTS = [
  'Interactive exhibit',
  'AI image generation',
  'Art + technology',
  'Miami-based',
  'Festivals / institutions / workshops',
] as const;

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="scroll-mt-36 text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white border-b border-black/10 dark:border-white/10 pb-4 mb-8">
      {children}
    </h2>
  );
}

export default function DigitalDivinitiesProjectLanding() {
  const mailto = digitalDivinitiesMailtoHref();

  return (
    <main className="w-full font-['MoMA_Sans'] bg-white text-black dark:bg-black dark:text-white">
      {/* Hero — compact on mobile */}
      <section
        className="pt-28 sm:pt-36 md:pt-40 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-11"
        aria-labelledby="dd-project-title"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-3">
            Project
          </p>
          <h1
            id="dd-project-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Digital Divinities
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl leading-snug text-neutral-700 dark:text-neutral-300">
            An interactive AI art installation where visitors become machine-generated mythic
            portraits.
          </p>

          <div className="mt-8 relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[50vh] sm:max-h-[56vh] rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-900 ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src={DIGITAL_DIVINITIES_PROJECT.heroImage}
              alt={DIGITAL_DIVINITIES_PROJECT.heroImageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 sm:p-5">
              <p className="text-white text-xs sm:text-sm font-medium drop-shadow">
                Installation view — embed video documentation here when available (16:9).
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#gallery"
              className="inline-flex justify-center items-center px-6 py-3 text-sm sm:text-base font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
            >
              View Gallery
            </a>
            <a
              href={mailto}
              className="inline-flex justify-center items-center px-6 py-3 text-sm sm:text-base font-semibold border border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Inquire / Book
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {FACTS.map((fact) => (
              <span
                key={fact}
                className="inline-block px-3 py-1.5 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200"
              >
                {fact}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky subnav */}
      <nav
        className="sticky top-[80px] z-30 border-y border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-md"
        aria-label="Digital Divinities page sections"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-11">
          <div
            className="flex gap-1 sm:gap-2 overflow-x-auto py-3 sm:py-3.5 -mx-1 px-1 sm:flex-wrap sm:overflow-visible sm:justify-start md:justify-center
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {NAV.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="shrink-0 px-3 py-1.5 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white whitespace-nowrap border border-transparent hover:border-black/20 dark:hover:border-white/20 rounded-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <article className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-11 py-12 sm:py-16 md:py-20 space-y-16 sm:space-y-20 md:space-y-24">
        {/* Overview */}
        <section id="overview" className="scroll-mt-36">
          <SectionTitle>Overview</SectionTitle>
          <div className="max-w-3xl space-y-4 text-base sm:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
            <p>
              Digital Divinities is an interactive AI artwork that transforms visitor selfies into
              mythic, symbolic portraits through a custom image-generation system. The project
              asks how machine vision, social media aesthetics, and algorithmic culture shape
              identity and self-image. Developed in collaboration with{' '}
              <span className="whitespace-nowrap">Fabiola Larios</span>.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 border-l-2 border-black/20 dark:border-white/20 pl-4">
              Ideal for festivals, museums, public programs, AI literacy workshops, and
              art-and-technology events.
            </p>
          </div>
          <p className="mt-8 text-sm">
            <Link
              href="/art/digital_divinities"
              className="font-medium underline underline-offset-4 decoration-black/30 dark:decoration-white/30 hover:decoration-black dark:hover:decoration-white"
            >
              Full artwork page (archive) →
            </Link>
          </p>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-36">
          <SectionTitle>How It Works</SectionTitle>
          <ol className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-4xl">
            {[
              {
                step: '1',
                text: 'A visitor submits a selfie or portrait capture at the installation.',
              },
              {
                step: '2',
                text: 'The image moves through a generative AI workflow tuned for symbolic, mythic output.',
              },
              {
                step: '3',
                text: 'A transformed “divine” portrait is produced and displayed in real time.',
              },
              {
                step: '4',
                text: 'The encounter invites reflection on identity, aesthetics, and machine mediation.',
              },
            ].map(({ step, text }) => (
              <li
                key={step}
                className="flex gap-4 p-5 sm:p-6 border border-black/10 dark:border-white/10 bg-neutral-50/80 dark:bg-neutral-950/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black dark:border-white text-sm font-bold">
                  {step}
                </span>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-800 dark:text-neutral-200 pt-1">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-36">
          <SectionTitle>Gallery</SectionTitle>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8">
            Installation views, participant outputs, and documentation stills. Add images to the
            project config as the archive grows — the grid scales without layout breaks.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {DIGITAL_DIVINITIES_PROJECT.gallery.map((item, index) => (
              <figure
                key={`${item.url}-${index}`}
                className={`flex flex-col ${
                  index === 0
                    ? 'col-span-2 row-span-2 min-h-[220px] sm:min-h-[280px] md:min-h-[340px]'
                    : ''
                }`}
              >
                <div
                  className={`relative group flex-1 min-h-[140px] ${
                    index === 0 ? 'min-h-[200px] sm:min-h-[260px] md:min-h-[320px]' : 'aspect-square'
                  }`}
                >
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    className="object-cover bg-neutral-100 dark:bg-neutral-900"
                    sizes={
                      index === 0
                        ? '(max-width: 768px) 100vw, 66vw'
                        : '(max-width: 768px) 50vw, 33vw'
                    }
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 hidden md:block bg-black/55 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-white text-sm">{item.caption}</span>
                  </figcaption>
                </div>
                <figcaption className="md:hidden mt-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Live experience */}
        <section id="live-experience" className="scroll-mt-36">
          <SectionTitle>Live Experience</SectionTitle>
          <div className="max-w-3xl space-y-4 text-base sm:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
            <p>
              In the room, the work reads as both sculpture and live imaging: a bust and LED panel
              anchor the body while portraits shift in response to each new participant. The mood
              is ceremonial but contemporary — closer to a secular ritual than a tech demo.
            </p>
            <p>
              People linger to watch strangers’ images appear, compare outputs, and talk about what
              feels flattering, uncanny, or mythic. The piece is legible without a wall text wall:
              the loop from face to “divine” image carries the idea in one clear gesture.
            </p>
          </div>
        </section>

        {/* Technical */}
        <section id="technical-setup" className="scroll-mt-36">
          <SectionTitle>Technical Setup</SectionTitle>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8">
            Summary for producers and registrars. Replace placeholders with venue-specific riders as
            needed.
          </p>
          <dl className="grid gap-0 max-w-3xl border border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10">
            {DIGITAL_DIVINITIES_PROJECT.technical.map(({ label, value }) => (
              <div
                key={label}
                className="grid sm:grid-cols-[minmax(8rem,11rem)_1fr] gap-2 sm:gap-6 px-4 py-4 sm:px-5 sm:py-5"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {label}
                </dt>
                <dd className="text-sm sm:text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Exhibitions */}
        <section id="exhibitions" className="scroll-mt-36">
          <SectionTitle>Exhibitions &amp; Context</SectionTitle>
          <ul className="space-y-6 max-w-3xl">
            {DIGITAL_DIVINITIES_PROJECT.exhibitions.map((item) => (
              <li
                key={item.title}
                className="border-l-2 border-black dark:border-white pl-5 sm:pl-6"
              >
                <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Press clips and extended CV lines can be mirrored here alongside the main artwork page
            as they are finalized.
          </p>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-36">
          <SectionTitle>About the Artist</SectionTitle>
          <div className="max-w-3xl space-y-4 text-base sm:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
            <p>
              <strong>Moises Sanabria</strong> is a Miami-based artist working across installation,
              computation, and systems-based practice. He treats code, models, and interfaces as
              materials inside a museum-facing body of work — not as a separate “tech” identity.
            </p>
            <p>
              His projects often stage how platforms, labor, and belief circulate in networked life.
              Alongside exhibitions, he develops public-facing education and workshops that connect
              audiences to AI and digital culture without flattening the work into product
              language.
            </p>
          </div>
        </section>

        {/* Inquire */}
        <section
          id="inquire"
          className="scroll-mt-36 border border-black/10 dark:border-white/10 p-8 sm:p-10 md:p-12 bg-neutral-50 dark:bg-neutral-950/80"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Exhibitions, programs &amp; collaborations
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            Book the installation, schedule a talk or walkthrough, or propose a workshop or
            residency format. Share your venue, dates, and audience — we will follow up with a
            tailored technical and programming outline.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={mailto}
              className="inline-flex justify-center items-center px-6 py-3 text-sm sm:text-base font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
            >
              Email — Inquire / Book
            </a>
            <a
              href="#gallery"
              className="inline-flex justify-center items-center px-6 py-3 text-sm sm:text-base font-semibold border border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Back to gallery
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
