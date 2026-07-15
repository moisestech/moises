import Link from 'next/link';
import { HotelStudySelector } from '@/components/grant/no-vacancy/HotelStudySelector';
import {
  NvBudgetTable,
  NvPageChrome,
  NvPlaceholderFigure,
  NvRelatedWorks,
  NvSection,
  NvVisitorJourney,
} from '@/components/grant/no-vacancy/NoVacancyUi';
import { noVacancyArtistBioShort } from '@/content/grants/no-vacancy-2026/shared';
import {
  toGrantMedia,
  volverMedia,
  volverMediaDisclosure,
} from '@/content/grants/no-vacancy-2026/volver-a-valer-media';
import {
  volverAValer,
  volverBudget,
  volverBudgetNote,
  volverBudgetTotal,
  volverClosingMedia,
  volverClosingQuestion,
  volverCurrencyArchive,
  volverFabrication,
  volverHeroMedia,
  volverHotelStudies,
  volverInstallationSystem,
  volverPrototypes,
  volverRelatedWorks,
  volverValueTransformations,
  volverVisitorJourney,
} from '@/content/grants/no-vacancy-2026/volver-a-valer';

export function VolverAValerPage() {
  const p = volverAValer;
  const system = volverInstallationSystem;

  return (
    <NvPageChrome>
      <article>
        <header className="mb-8 sm:mb-10">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">{p.status}</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{p.title}</h1>
          <p className="text-xl sm:text-2xl text-stone-600 dark:text-stone-400 font-medium mb-6">
            {p.subtitle}
          </p>
        </header>

        <div className="mb-6">
          <NvPlaceholderFigure media={volverHeroMedia} aspectClass="aspect-[16/10]" priority />
          <p className="mt-2 text-xs text-stone-500 leading-relaxed">{volverMediaDisclosure}</p>
        </div>

        <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-10">
          {p.oneSentenceForm}
        </p>

        <p className="text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-stone-900 dark:text-stone-100 mb-4 border-l-2 border-stone-900 dark:border-stone-100 pl-4 sm:pl-6">
          {p.thesis}
        </p>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-14 sm:mb-16 max-w-2xl">
          {p.criticalDistinction}
        </p>

        <NvSection title="Installation system">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">{p.systemOverview}</p>
          <ul className="grid sm:grid-cols-3 gap-4 text-sm mb-10">
            {system.adaptationRules.map((rule) => (
              <li key={rule.scale} className="border border-stone-200 dark:border-stone-700 p-4">
                <p className="text-xs uppercase tracking-wide text-stone-500 mb-2">{rule.scale}</p>
                <ul className="list-disc pl-4 space-y-1 text-stone-700 dark:text-stone-300">
                  {rule.elements.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </NvSection>

        <NvSection title={system.floor.title} id="common-tender">
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">{system.floor.role}</p>
          <div className="mb-6">
            <NvPlaceholderFigure media={toGrantMedia(volverMedia.currencyFloorOverview)} />
          </div>
          <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line leading-relaxed mb-6">
            {system.floor.body}
          </div>
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-6">
            Public material term: <span className="font-medium">{system.floor.publicMaterialTerm}</span>.{' '}
            {system.floor.substrateNote}
          </p>
          <NvPlaceholderFigure media={toGrantMedia(volverMedia.currencyFloorDetail)} aspectClass="aspect-[4/3]" />
        </NvSection>

        {system.sculptures.map((sculpture) => {
          const overview =
            sculpture.id === 'market-rate'
              ? volverMedia.marketRateOverview
              : sculpture.id === 'soft-currency'
                ? volverMedia.softCurrencyOverview
                : volverMedia.carryOnOverview;
          const detail =
            sculpture.id === 'market-rate'
              ? volverMedia.marketRateDetail
              : sculpture.id === 'soft-currency'
                ? volverMedia.softCurrencyDetail
                : null;

          return (
            <NvSection key={sculpture.id} title={sculpture.title} id={sculpture.id}>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">
                {sculpture.role}
                {sculpture.optional ? ' · optional for large sites' : ''}
              </p>
              <NvPlaceholderFigure media={toGrantMedia(overview)} />
              <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line leading-relaxed mt-6 mb-6">
                {sculpture.body}
              </div>
              {detail ? (
                <NvPlaceholderFigure media={toGrantMedia(detail)} aspectClass="aspect-[4/3]" />
              ) : null}
            </NvSection>
          );
        })}

        <NvSection title="Visitor journey">
          <NvVisitorJourney steps={volverVisitorJourney.map((s) => s.title.toUpperCase())} />
          <p className="mt-4 mb-8 text-sm text-stone-500 italic">{p.emotionalSequence}</p>
          <div className="grid gap-8 sm:grid-cols-2">
            {volverVisitorJourney.map((beat) => (
              <div key={beat.number} className="border-t-2 border-stone-900 dark:border-stone-100 pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-2">{beat.number}</p>
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  {beat.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm sm:text-base">
                  {beat.body}
                </p>
              </div>
            ))}
          </div>
        </NvSection>

        <NvSection title="Hotel adaptations & 360 studies">
          <HotelStudySelector studies={volverHotelStudies} />
        </NvSection>

        <NvSection title={volverCurrencyArchive.heading}>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
            {volverCurrencyArchive.intro}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 mb-6">
            {volverCurrencyArchive.principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {volverCurrencyArchive.walkingPathNote}
          </p>
        </NvSection>

        <NvSection title="How does collapsed value become valuable again?">
          <div className="overflow-x-auto border border-stone-200 dark:border-stone-700 mb-6">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/50">
                  <th className="px-4 py-3 font-semibold">Mechanism</th>
                  <th className="px-4 py-3 font-semibold">Transformation</th>
                </tr>
              </thead>
              <tbody>
                {volverValueTransformations.map((row) => (
                  <tr key={row.mechanism} className="border-b border-stone-100 dark:border-stone-800">
                    <td className="px-4 py-3 font-medium align-top">{row.mechanism}</td>
                    <td className="px-4 py-3 text-stone-600 dark:text-stone-400">{row.transformation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </NvSection>

        <NvSection title="Fabrication, sustainability, and safety">
          <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
            {volverFabrication.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NvSection>

        <NvSection title="Prototype plan">
          <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 mb-8">
            {volverPrototypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="grid sm:grid-cols-3 gap-6">
            <NvPlaceholderFigure media={toGrantMedia(volverMedia.prototypeFloor)} aspectClass="aspect-square" />
            <NvPlaceholderFigure media={toGrantMedia(volverMedia.prototypeWeave)} aspectClass="aspect-square" />
            <NvPlaceholderFigure media={toGrantMedia(volverMedia.prototypeMirror)} aspectClass="aspect-square" />
          </div>
        </NvSection>

        <NvSection title="Budget">
          <p className="text-sm text-stone-500 mb-4">{volverBudgetNote}</p>
          <NvBudgetTable lines={volverBudget} total={volverBudgetTotal} />
          <p className="mt-4 text-sm text-stone-500">
            Timeline: site survey after selection · prototype and fabrication within the five-week hotel window ·
            documentation and teardown for reuse or edition.
          </p>
        </NvSection>

        <NvSection title="From Price of Existence to hospitality">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
            {noVacancyArtistBioShort} Price of Existence established bolívares as sculptural material around a
            body. Volver a Valer keeps that material authority while moving into hotel architecture, migration,
            and a floor-and-sculpture system that can stand independent of any single property.
          </p>
          <NvPlaceholderFigure media={toGrantMedia(volverMedia.priceOfExistenceRelated)} />
          <div className="mt-10">
            <NvRelatedWorks works={volverRelatedWorks} />
          </div>
        </NvSection>

        <NvSection>
          <NvPlaceholderFigure media={volverClosingMedia} />
          <p className="mt-8 text-2xl font-medium tracking-tight">{volverClosingQuestion}</p>
          <p className="mt-4 text-sm text-stone-500">
            Moises Sanabria · Miami, Florida · No Vacancy 2026 proposal
          </p>
        </NvSection>

        <footer className="border-t border-stone-200 dark:border-stone-700 pt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/grant/no-vacancy-2026" className="underline underline-offset-4">
            ← Application packet
          </Link>
          <Link href="/research/touch-grass-circuit-floor" className="underline underline-offset-4">
            Related research: Touch Grass
          </Link>
          <Link href="/contact" className="underline underline-offset-4">
            Contact
          </Link>
        </footer>
      </article>
    </NvPageChrome>
  );
}
