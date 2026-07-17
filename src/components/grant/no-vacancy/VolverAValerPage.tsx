import Link from 'next/link';
import { HotelStudySelector } from '@/components/grant/no-vacancy/HotelStudySelector';
import { VolverDetailTags, VolverTagList, type VolverDetailTag } from '@/components/grant/no-vacancy/VolverDetailTags';
import { VolverKeywordText } from '@/components/grant/no-vacancy/VolverKeywordText';
import { VolverRevealMedia } from '@/components/grant/no-vacancy/VolverRevealMedia';
import { VolverInteractiveChrome } from '@/components/grant/no-vacancy/VolverSectionNav';
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
  volverAdaptationRules,
  volverAValer,
  volverBudget,
  volverBudgetAssumptions,
  volverBudgetNote,
  volverBudgetTotal,
  volverChapterAccentClass,
  volverChapters,
  volverClosingMedia,
  volverClosingQuestion,
  volverCurrencyArchive,
  volverFeasibility,
  volverFloor,
  volverHeroMedia,
  volverHotelStudies,
  volverLineageParagraph,
  volverPrototypes,
  volverRelatedWorks,
  volverSculptures,
  volverVisitorJourney,
  type VolverChapterAccent,
} from '@/content/grants/no-vacancy-2026/volver-a-valer';
import { grantDossierSectionScrollMarginClass } from '@/config/site-header-layout';
import { cn } from '@/lib/utils';

function chapterFor(id: string) {
  return volverChapters.find((c) => c.id === id);
}

function sectionAccentClass(accent: VolverChapterAccent) {
  return cn('border-l-4 pl-4 sm:pl-6', volverChapterAccentClass[accent]);
}

export function VolverAValerPage() {
  const p = volverAValer;

  return (
    <NvPageChrome>
      <article>
        <header className="mb-8 sm:mb-10">
          <p className="text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">{p.status}</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{p.title}</h1>
          <p className="text-xl sm:text-2xl text-stone-600 dark:text-stone-400 font-medium mb-6">
            {p.subtitle}
          </p>
        </header>

        <div className="mb-6">
          <NvPlaceholderFigure media={volverHeroMedia} aspectClass="aspect-[4/5] sm:aspect-[3/4]" priority />
          <p className="mt-2 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{volverMediaDisclosure}</p>
        </div>

        <p className="text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-stone-900 dark:text-stone-100 mb-4 border-l-2 border-stone-900 dark:border-stone-100 pl-4 sm:pl-6">
          {p.thesis}
        </p>
        <VolverKeywordText
          text={p.criticalDistinction}
          terms={['remittance', 'redenomination']}
          className="text-stone-600 dark:text-stone-400 leading-relaxed mb-10 max-w-2xl"
        />

        <VolverInteractiveChrome chapters={volverChapters}>
          <NvSection
            id="form"
            title="Physical form"
            className={cn(
              grantDossierSectionScrollMarginClass,
              sectionAccentClass(chapterFor('form')!.accent),
            )}
          >
            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
              {p.oneSentenceForm}
            </p>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
              {p.physicalFormParagraph}
            </p>
            <ul className="grid sm:grid-cols-3 gap-4 text-sm">
              {volverAdaptationRules.map((rule) => (
                <li key={rule.scale} className="border border-stone-200 dark:border-stone-700 p-4">
                  <p className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-2">
                    {rule.scale}
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-stone-700 dark:text-stone-300">
                    {rule.elements.map((el) => (
                      <li key={el}>{el}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
              The application shows the full installation. Sculpture count adapts to circulation, egress, and the
              assigned hotel. Casa de Cambio remains the institutional counterweight in each preferred configuration.
            </p>
          </NvSection>

          <NvSection
            id="journey"
            title="Visitor experience"
            className={cn(
              grantDossierSectionScrollMarginClass,
              sectionAccentClass(chapterFor('journey')!.accent),
            )}
          >
            <NvVisitorJourney steps={volverVisitorJourney.map((s) => s.title.toUpperCase())} />
            <p className="mt-4 mb-8 text-sm text-stone-500 dark:text-stone-400 italic">{p.emotionalSequence}</p>
            <div className="grid gap-8 sm:grid-cols-2">
              {volverVisitorJourney.map((beat) => (
                <div key={beat.number} className="border-t-2 border-stone-900 dark:border-stone-100 pt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2">
                    {beat.number}
                  </p>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">{beat.title}</h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm sm:text-base">
                    {beat.body}
                  </p>
                </div>
              ))}
            </div>
          </NvSection>

          <NvSection
            id="common-tender"
            title={volverFloor.title}
            className={cn(
              grantDossierSectionScrollMarginClass,
              sectionAccentClass(chapterFor('common-tender')!.accent),
            )}
          >
            <p className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              {volverFloor.role}
            </p>
            <VolverRevealMedia
              primary={volverFloor.overview}
              reveal={{
                iconId: volverFloor.reveal.iconId,
                caption: volverFloor.reveal.caption,
                media: volverFloor.reveal.media,
              }}
            />
            <VolverKeywordText
              text={volverFloor.summary}
              terms={['remittance', 'bolívar', 'redenomination']}
              className="mt-6 text-stone-700 dark:text-stone-300 leading-relaxed"
            />
            <VolverDetailTags
              accent="arrival"
              tags={[
                {
                  id: 'floor-overview',
                  label: 'Overview',
                  openInFull: true,
                  content: (
                    <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line leading-relaxed text-sm">
                      {volverFloor.body}
                    </div>
                  ),
                },
                {
                  id: 'floor-materials',
                  label: 'Materials',
                  openInFull: true,
                  content: <VolverTagList items={volverFloor.materials} />,
                },
                {
                  id: 'floor-construction',
                  label: 'Construction',
                  content: <VolverTagList items={volverFloor.construction} />,
                },
                {
                  id: 'floor-site',
                  label: 'Site',
                  content: (
                    <dl className="grid gap-3 text-sm">
                      <div>
                        <dt className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-1">
                          Dimensions
                        </dt>
                        <dd className="text-stone-700 dark:text-stone-300">{volverFloor.dimensions}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-1">
                          Public material term
                        </dt>
                        <dd className="text-stone-700 dark:text-stone-300">{volverFloor.publicMaterialTerm}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-1">
                          Site variation
                        </dt>
                        <dd className="text-stone-700 dark:text-stone-300">{volverFloor.siteVariation}</dd>
                      </div>
                    </dl>
                  ),
                },
                {
                  id: 'floor-detail',
                  label: 'Detail still',
                  content: (
                    <NvPlaceholderFigure media={toGrantMedia(volverFloor.detail)} aspectClass="aspect-[4/3]" />
                  ),
                },
              ]}
            />
          </NvSection>

          {volverSculptures.map((sculpture) => {
            const chapter = chapterFor(sculpture.id);
            const accent = chapter?.accent ?? 'embodiment';
            const glossaryTerms =
              sculpture.id === 'harina-de-otro-costal'
                ? (['chinchorro'] as const)
                : sculpture.id === 'casa-de-cambio'
                  ? (['casa de cambio'] as const)
                  : undefined;

            const detailTags: VolverDetailTag[] = [
              {
                id: `${sculpture.id}-concept`,
                label: 'Concept',
                openInFull: true,
                content: (
                  <div>
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-3">
                      {sculpture.body}
                    </p>
                    <VolverTagList items={sculpture.conceptualRole} />
                  </div>
                ),
              },
              {
                id: `${sculpture.id}-materials`,
                label: 'Materials',
                openInFull: true,
                content: <VolverTagList items={sculpture.materials} />,
              },
              {
                id: `${sculpture.id}-construction`,
                label: 'Construction',
                content: <VolverTagList items={sculpture.construction} />,
              },
              {
                id: `${sculpture.id}-site`,
                label: 'Site',
                content: (
                  <dl className="grid gap-3 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-1">
                        Dimensions
                      </dt>
                      <dd className="text-stone-700 dark:text-stone-300">{sculpture.dimensions}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-1">
                        Site variation
                      </dt>
                      <dd className="text-stone-700 dark:text-stone-300">{sculpture.siteVariation}</dd>
                    </div>
                  </dl>
                ),
              },
              {
                id: `${sculpture.id}-risk`,
                label: 'Risk',
                content: (
                  <p className="text-sm text-stone-600 dark:text-stone-400 italic leading-relaxed">
                    {sculpture.riskNote}
                  </p>
                ),
              },
            ];

            if (sculpture.detail) {
              detailTags.push({
                id: `${sculpture.id}-detail`,
                label: 'Detail still',
                content: (
                  <NvPlaceholderFigure media={toGrantMedia(sculpture.detail)} aspectClass="aspect-[4/3]" />
                ),
              });
            }

            return (
              <NvSection
                key={sculpture.id}
                id={sculpture.id}
                title={sculpture.title}
                className={cn(
                  grantDossierSectionScrollMarginClass,
                  chapter ? sectionAccentClass(chapter.accent) : '',
                )}
              >
                <p className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
                  {sculpture.role}
                  {sculpture.workingTitle ? ' · working title' : ''}
                </p>
                <VolverRevealMedia
                  primary={sculpture.overview}
                  reveal={{
                    iconId: sculpture.reveal.iconId,
                    caption: sculpture.reveal.caption,
                    media: sculpture.reveal.media,
                  }}
                />
                <VolverKeywordText
                  text={sculpture.summary}
                  terms={glossaryTerms}
                  className="mt-6 text-stone-700 dark:text-stone-300 leading-relaxed"
                />
                <VolverDetailTags accent={accent} tags={detailTags} />
              </NvSection>
            );
          })}

          <NvSection
            id="hotels"
            title="Hotel adaptations"
            className={cn(
              grantDossierSectionScrollMarginClass,
              sectionAccentClass(chapterFor('hotels')!.accent),
            )}
          >
            <HotelStudySelector studies={volverHotelStudies} />
          </NvSection>

          <NvSection
            id="archive"
            title={volverCurrencyArchive.heading}
            className={cn(
              grantDossierSectionScrollMarginClass,
              sectionAccentClass(chapterFor('archive')!.accent),
            )}
          >
            <VolverKeywordText
              text={volverCurrencyArchive.intro}
              terms={['bolívar', 'redenomination', 'remittance']}
              className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6"
            />
            <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 mb-6">
              {volverCurrencyArchive.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              {volverCurrencyArchive.walkingPathNote}
            </p>
          </NvSection>

          <NvSection
            id="feasibility"
            title="Feasibility and hotel compatibility"
            className={cn(
              grantDossierSectionScrollMarginClass,
              sectionAccentClass(chapterFor('feasibility')!.accent),
            )}
          >
            <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
              {volverFeasibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </NvSection>

          <NvSection
            id="prototypes"
            title="Prototype plan"
            className={cn(
              grantDossierSectionScrollMarginClass,
              sectionAccentClass(chapterFor('prototypes')!.accent),
            )}
          >
            <ol className="list-decimal pl-5 space-y-2 text-stone-700 dark:text-stone-300 mb-8">
              {volverPrototypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <div className="grid sm:grid-cols-3 gap-6">
              <NvPlaceholderFigure
                media={toGrantMedia(volverMedia.prototypeFloorSample)}
                aspectClass="aspect-square"
              />
              <NvPlaceholderFigure
                media={toGrantMedia(volverMedia.prototypeKioskMockup)}
                aspectClass="aspect-square"
              />
              <NvPlaceholderFigure
                media={toGrantMedia(volverMedia.prototypeScreen)}
                aspectClass="aspect-square"
              />
            </div>
          </NvSection>

          <NvSection
            id="budget"
            title="Budget and timeline"
            className={cn(
              grantDossierSectionScrollMarginClass,
              sectionAccentClass(chapterFor('budget')!.accent),
            )}
          >
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">{volverBudgetNote}</p>
            <NvBudgetTable lines={volverBudget} total={volverBudgetTotal} />
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide mb-2">Budget assumptions</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 mb-6">
              {volverBudgetAssumptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Timeline: site survey after selection · prototypes and fabrication within the five-week hotel window ·
              one installation day · one removal day · documentation and reuse or edition.
            </p>
          </NvSection>

          <NvSection
            id="lineage"
            title="From Price of Existence to hospitality"
            className={cn(
              grantDossierSectionScrollMarginClass,
              sectionAccentClass(chapterFor('lineage')!.accent),
            )}
          >
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">{noVacancyArtistBioShort}</p>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">{volverLineageParagraph}</p>
            <NvPlaceholderFigure media={toGrantMedia(volverMedia.priceOfExistenceRelated)} />
            <div className="mt-10">
              <NvRelatedWorks works={volverRelatedWorks} />
            </div>
          </NvSection>

          <NvSection>
            <NvPlaceholderFigure media={volverClosingMedia} />
            <p className="mt-8 text-2xl font-medium tracking-tight">{volverClosingQuestion}</p>
            <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
              Moises Sanabria · Miami, Florida · No Vacancy 2026 proposal
            </p>
          </NvSection>
        </VolverInteractiveChrome>

        <footer className="border-t border-stone-200 dark:border-stone-700 pt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/grant/no-vacancy-2026" className="underline underline-offset-4">
            ← Application packet
          </Link>
          <Link href="/contact" className="underline underline-offset-4">
            Contact
          </Link>
        </footer>
      </article>
    </NvPageChrome>
  );
}
