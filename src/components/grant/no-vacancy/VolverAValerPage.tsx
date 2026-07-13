import Link from 'next/link';
import { HotelStudySelector } from '@/components/grant/no-vacancy/HotelStudySelector';
import {
  NvBudgetTable,
  NvExperienceBeats,
  NvPageChrome,
  NvPlaceholderFigure,
  NvRelatedWorks,
  NvSection,
  NvVisitorJourney,
} from '@/components/grant/no-vacancy/NoVacancyUi';
import { noVacancyArtistBioShort } from '@/content/grants/no-vacancy-2026/shared';
import {
  volverAValer,
  volverBudget,
  volverBudgetTotal,
  volverClosing,
  volverFabrication,
  volverHero,
  volverHotelStudies,
  volverLatinResonance,
  volverMaterials,
  volverPrototypes,
  volverRelatedWorks,
  volverValueTransformations,
  volverVisitorJourney,
} from '@/content/grants/no-vacancy-2026/volver-a-valer';

export function VolverAValerPage() {
  const p = volverAValer;

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
          <NvPlaceholderFigure media={volverHero} aspectClass="aspect-[16/10]" priority />
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
          {p.hookParagraphs.map((para) => (
            <p key={para.slice(0, 40)} className="mt-4 text-stone-700 dark:text-stone-300 leading-relaxed">
              {para}
            </p>
          ))}
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="border border-stone-200 dark:border-stone-700 p-4">
              <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">Primary gesture</p>
              <p className="font-medium">{p.spatialGesture.primary}</p>
            </div>
            <div className="border border-stone-200 dark:border-stone-700 p-4">
              <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">Secondary form</p>
              <p className="font-medium">{p.spatialGesture.secondary}</p>
            </div>
            <div className="border border-stone-200 dark:border-stone-700 p-4">
              <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">Endpoint</p>
              <p className="font-medium">{p.spatialGesture.endpoint}</p>
            </div>
          </div>
        </NvSection>

        <NvSection title="Material vocabulary">
          <p className="text-stone-600 dark:text-stone-400 mb-8 text-sm leading-relaxed">
            Broader material is organized through systems — not national symbols — so Venezuela remains the
            core without becoming a pan-Latin collage.
          </p>
          <ul className="grid sm:grid-cols-2 gap-8">
            {volverMaterials.map((item) => (
              <li key={item.title}>
                <NvPlaceholderFigure media={item.media} aspectClass="aspect-[4/3]" />
                <h3 className="mt-3 font-semibold text-stone-900 dark:text-stone-100">{item.title}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{item.role}</p>
              </li>
            ))}
          </ul>
        </NvSection>

        <NvSection title="Site-adaptation studies">
          <HotelStudySelector studies={volverHotelStudies} />
        </NvSection>

        <NvSection title="Visitor journey">
          <NvVisitorJourney steps={volverVisitorJourney} />
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
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed italic">
            The work does not claim that art repairs economic collapse. It asks why art, hotels, currencies,
            and nations all depend on systems of belief to produce value.
          </p>
        </NvSection>

        <NvSection title={volverLatinResonance.heading}>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
            {volverLatinResonance.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-stretch">
            {volverLatinResonance.flows.map((flow, i) => (
              <div key={flow.stage} className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 border border-stone-800 dark:border-stone-200 p-4 text-center">
                  <p className="text-xs uppercase tracking-widest mb-2">{flow.stage}</p>
                  <p className="text-sm text-stone-600 dark:text-stone-400">{flow.items}</p>
                </div>
                {i < volverLatinResonance.flows.length - 1 ? (
                  <span className="text-stone-400 text-center sm:px-1" aria-hidden>
                    ↕
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </NvSection>

        <NvSection title="Sustainability and fabrication">
          <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
            {volverFabrication.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NvSection>

        <NvSection title="Prototype and testing">
          <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
            {volverPrototypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NvSection>

        <NvSection title="Budget">
          <p className="text-sm text-stone-500 mb-4">
            Draft within the $10,000 all-inclusive stipend — subject to site assignment and fabrication review.
          </p>
          <NvBudgetTable lines={volverBudget} total={volverBudgetTotal} />
        </NvSection>

        <NvSection title="Artist context">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">{noVacancyArtistBioShort}</p>
          <NvRelatedWorks works={volverRelatedWorks} />
        </NvSection>

        <NvSection>
          <NvPlaceholderFigure media={volverClosing} />
          <p className="mt-8 text-2xl font-medium tracking-tight">{'What survives when value does not?'}</p>
          <p className="mt-4 text-sm text-stone-500">
            Moises Sanabria · Miami, Florida · No Vacancy 2026 proposal
          </p>
        </NvSection>

        <footer className="border-t border-stone-200 dark:border-stone-700 pt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/grant/no-vacancy-2026" className="underline underline-offset-4">
            ← Application packet
          </Link>
          <Link href="/grant/no-vacancy-2026/touch-grass" className="underline underline-offset-4">
            Alternate: Touch Grass
          </Link>
          <Link href="/contact" className="underline underline-offset-4">
            Contact
          </Link>
        </footer>
      </article>
    </NvPageChrome>
  );
}
