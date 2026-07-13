import Link from 'next/link';
import { HotelStudySelector } from '@/components/grant/no-vacancy/HotelStudySelector';
import {
  NvBudgetTable,
  NvExperienceBeats,
  NvPageChrome,
  NvPlaceholderFigure,
  NvRelatedWorks,
  NvSection,
} from '@/components/grant/no-vacancy/NoVacancyUi';
import { noVacancyArtistBioShort } from '@/content/grants/no-vacancy-2026/shared';
import {
  touchGrassNv,
  touchGrassNvBudget,
  touchGrassNvBudgetTotal,
  touchGrassNvClosing,
  touchGrassNvFabrication,
  touchGrassNvHero,
  touchGrassNvHotels,
  touchGrassNvPrototypes,
  touchGrassNvRelated,
  touchGrassNvSpecs,
} from '@/content/grants/no-vacancy-2026/touch-grass';

export function TouchGrassNoVacancyPage() {
  const p = touchGrassNv;

  return (
    <NvPageChrome>
      <article>
        <header className="mb-10 sm:mb-14">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">{p.status}</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{p.title}</h1>
          <p className="text-xl sm:text-2xl text-stone-600 dark:text-stone-400 font-medium mb-4">
            {p.subtitle}
          </p>
          <p className="text-sm text-stone-500 mb-2">
            A proposed site-specific installation for No Vacancy, Miami Beach 2026.
          </p>
          <ul className="flex flex-wrap gap-2 mt-4">
            {p.metadata.map((item) => (
              <li
                key={item}
                className="text-[10px] uppercase tracking-wide border border-stone-400 dark:border-stone-600 px-2 py-1 text-stone-600 dark:text-stone-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </header>

        <div className="mb-12">
          <NvPlaceholderFigure media={touchGrassNvHero} priority />
        </div>

        <p className="text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-stone-900 dark:text-stone-100 mb-12 border-l-2 border-stone-900 dark:border-stone-100 pl-4 sm:pl-6">
          {p.thesis}
        </p>

        <NvSection title="Three-beat experience">
          <NvExperienceBeats beats={p.experienceBeats} />
        </NvSection>

        <NvSection title="Concept">
          <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line leading-relaxed">
            {p.conceptStatement}
          </div>
          <p className="mt-6 text-stone-700 dark:text-stone-300 leading-relaxed">{p.lede}</p>
        </NvSection>

        <NvSection title="Technical specifications">
          <dl className="divide-y divide-stone-200 dark:divide-stone-700 border border-stone-200 dark:border-stone-700">
            {touchGrassNvSpecs.map((row) => (
              <div key={row.label} className="grid sm:grid-cols-3 gap-2 px-4 py-3 text-sm">
                <dt className="font-medium text-stone-900 dark:text-stone-100">{row.label}</dt>
                <dd className="sm:col-span-2 text-stone-600 dark:text-stone-400">{row.value}</dd>
              </div>
            ))}
          </dl>
        </NvSection>

        <NvSection title="Site-adaptation studies">
          <HotelStudySelector studies={touchGrassNvHotels} />
        </NvSection>

        <NvSection title="Sustainability and fabrication">
          <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
            {touchGrassNvFabrication.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NvSection>

        <NvSection title="Prototype phase">
          <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
            {touchGrassNvPrototypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NvSection>

        <NvSection title="Budget">
          <p className="text-sm text-stone-500 mb-4">
            Draft within the $10,000 all-inclusive stipend — subject to site assignment and fabrication review.
          </p>
          <NvBudgetTable lines={touchGrassNvBudget} total={touchGrassNvBudgetTotal} />
        </NvSection>

        <NvSection title="Artist context">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{noVacancyArtistBioShort}</p>
          <p className="text-sm text-stone-500 mb-8">
            Full research dossier:{' '}
            <Link href={p.researchRoute} className="underline underline-offset-4">
              /research/touch-grass-circuit-floor
            </Link>
          </p>
          <NvRelatedWorks works={touchGrassNvRelated} />
        </NvSection>

        <NvSection>
          <NvPlaceholderFigure media={touchGrassNvClosing} />
          <p className="mt-8 text-2xl font-medium tracking-tight">The ground is online.</p>
          <p className="mt-4 text-sm text-stone-500">
            Moises Sanabria · Miami, Florida · No Vacancy 2026 proposal
          </p>
        </NvSection>

        <footer className="border-t border-stone-200 dark:border-stone-700 pt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/grant/no-vacancy-2026" className="underline underline-offset-4">
            ← Application packet
          </Link>
          <Link href="/grant/no-vacancy-2026/volver-a-valer" className="underline underline-offset-4">
            Alternate: Volver a Valer
          </Link>
          <Link href={p.researchRoute} className="underline underline-offset-4">
            Research dossier
          </Link>
          <Link href="/contact" className="underline underline-offset-4">
            Contact
          </Link>
        </footer>
      </article>
    </NvPageChrome>
  );
}
