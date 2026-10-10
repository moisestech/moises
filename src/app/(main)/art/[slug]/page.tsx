import { artist } from '@/constants/artworks';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { InteractiveContent } from '@/constants/research';
import InteractiveText from '@/components/InteractiveText';
import ArtworkGallery from '@/components/art/ArtworkGallery';
import ArtworkMediaCarousel from '@/components/art/ArtworkMediaCarousel';
import ArtworkVideo from '@/components/art/ArtworkVideo';
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton';
import Link from 'next/link';
import { seoKeywordsAlpha } from '../../../../../lib/seoKeywords';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

const colors = [
  'bg-lime-400',
  'bg-blue-400',
  'bg-red-400',
  'bg-purple-400',
  'bg-orange-400',
  'bg-green-400',
];

// Make EnhancedDescription a regular function component (not exported)
function EnhancedDescription({
  description,
  interactiveContent,
}: {
  description: string;
  interactiveContent: InteractiveContent[];
}) {
  let enhancedText = description;

  // Defensive: filter out any undefined/null and handle missing interactiveContent
  const sortedContent = [...(interactiveContent || [])].filter(Boolean).sort(
    (a, b) => b.text.length - a.text.length
  );

  // Replace each interactive text instance with a marker
  sortedContent.forEach((content, index) => {
    enhancedText = enhancedText.replace(content.text, `|||${index}|||`);
  });

  // Split by markers and map to components
  const parts = enhancedText.split('|||');

  return (
    <p className="text-lg leading-relaxed">
      {parts.map((part, index) => {
        const contentIndex = parseInt(part);
        if (!isNaN(contentIndex)) {
          const content = sortedContent[contentIndex];
          if (!content) return null;
          return (
            <InteractiveText
              key={index}
              type={content.type}
              content={content.content}
            >
              {content.text}
            </InteractiveText>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}

export default async function ArtPage({ params }: PageProps) {
  const artwork = artist.artworks[params.slug];

  if (!artwork) {
    notFound();
  }

  // Find the index of this artwork to determine its color
  const artworkIndex = Object.keys(artist.artworks).indexOf(params.slug);
  const color = colors[artworkIndex % colors.length];
  const useCarousel = artwork.mediaLayout === 'carousel';

  return (
    <main className="w-full">
      {/* Title Banner */}
      <div className={`${color} w-full px-4 py-12 mt-28 sm:mt-36 sm:px-8 sm:py-16 md:mt-40 md:py-20`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold leading-[0.95] text-black dark:text-white sm:text-6xl lg:text-8xl">
            {artwork.title}
          </h1>
          <p className="mt-4 text-2xl font-bold text-black dark:text-white sm:text-4xl">
            {artwork.year}
          </p>
          {artwork.presentationTitle ? (
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black dark:text-white md:text-xl">
              {artwork.presentationTitle}
            </p>
          ) : null}
          {artwork.yearNote ? (
            <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-black dark:text-white md:text-xl">
              {artwork.yearNote}
            </p>
          ) : null}
        </div>
      </div>

      {/* Main Image */}
      {!useCarousel ? (
      <div className="w-full relative h-[70vh]">
        <Image
          src={artwork.images[0].url}
          alt={artwork.images[0].caption || artwork.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      ) : null}

      {useCarousel ? (
        <ArtworkMediaCarousel
          title={artwork.title}
          images={artwork.images}
          video={
            artwork.video
              ? {
                  url: artwork.video.url,
                  title: artwork.video.title,
                  caption: artwork.video.caption,
                }
              : null
          }
          photoCredit={artwork.photoCredit}
        />
      ) : null}

      {artwork.video &&
      !useCarousel &&
      params.slug !== 'simulation_faith' &&
      (artwork.video.type === 'youtube' ||
        artwork.video.type === 'vimeo' ||
        artwork.video.type === 'file') ? (
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-8 sm:pt-12">
          <ArtworkVideo video={artwork.video} />
        </div>
      ) : null}

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:px-11">
        {artwork.oneLine ? (
          <p className="max-w-3xl text-xl leading-snug md:text-2xl">{artwork.oneLine}</p>
        ) : null}
        {artwork.researchQuestion ? (
          <p className="mt-8 max-w-4xl text-2xl font-medium leading-tight md:text-4xl">
            {artwork.researchQuestion}
          </p>
        ) : null}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-16 ${artwork.oneLine || artwork.researchQuestion ? 'mt-16' : ''}`}>
          {/* Metadata Column */}
          <div className="space-y-8">
            {artwork.exhibitionHistory && artwork.exhibitionHistory.length > 0 ? (
              <div>
                <h3 className="text-lg font-bold mb-2">Exhibition history</h3>
                <ul className="space-y-4">
                  {artwork.exhibitionHistory.map((entry) => (
                    <li key={`${entry.title}-${entry.date}`}>
                      {entry.href ? (
                        <a
                          href={entry.href}
                          className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
                        >
                          {entry.title}
                        </a>
                      ) : (
                        <p className="font-medium">{entry.title}</p>
                      )}
                      <p>{entry.date}</p>
                      <p>{entry.location}</p>
                      {entry.note ? <p>{entry.note}</p> : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {artwork.location && (
              <div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                {artwork.location_url ? (
                  <p>
                    <a
                      href={artwork.location_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
                    >
                      {artwork.location}
                    </a>
                  </p>
                ) : (
                  <p>{artwork.location}</p>
                )}
              </div>
            )}
            {artwork.curator && (
              <div>
                <h3 className="text-lg font-bold mb-2">Curator</h3>
                <p>{artwork.curator}</p>
              </div>
            )}
            {artwork.collaboration && (
              <div>
                <h3 className="text-lg font-bold mb-2">Collaboration</h3>
                <p>{artwork.collaboration}</p>
              </div>
            )}
            {artwork.materials && (
              <div>
                <h3 className="text-lg font-bold mb-2">Materials</h3>
                <ul className="list-disc pl-4">
                  {artwork.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
            )}
            {artwork.medium && (
              <div>
                <h3 className="text-lg font-bold mb-2">Medium</h3>
                <p>{artwork.medium}</p>
              </div>
            )}
            {artwork.dimensions && (
              <div>
                <h3 className="text-lg font-bold mb-2">Dimensions</h3>
                <p>{artwork.dimensions}</p>
              </div>
            )}
            {artwork.technical_requirements && (
              <div>
                <h3 className="text-lg font-bold mb-2">Installation</h3>
                <ul className="space-y-2 text-sm">
                  {artwork.technical_requirements.space?.dimensions ? (
                    <li>{artwork.technical_requirements.space.dimensions}</li>
                  ) : null}
                  {artwork.technical_requirements.mounting?.length ? (
                    <li>{artwork.technical_requirements.mounting.join('; ')}</li>
                  ) : null}
                  {artwork.technical_requirements.power?.length ? (
                    <li>{artwork.technical_requirements.power.join('; ')}</li>
                  ) : null}
                  {artwork.technical_requirements.space?.requirements?.length ? (
                    <li>{artwork.technical_requirements.space.requirements.join('; ')}</li>
                  ) : null}
                </ul>
              </div>
            )}
            {artwork.tags && (
              <div>
                <h3 className="text-lg font-bold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {artwork.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-800 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {artwork.links && artwork.links.length > 0 ? (
              <div>
                <h3 className="text-lg font-bold mb-2">{artwork.linksLabel || 'Links'}</h3>
                <ul className="space-y-2">
                  {artwork.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Description Column */}
          <div className="md:col-span-2">
            <EnhancedDescription
              description={artwork.description}
              interactiveContent={artwork.interactiveContent || []}
            />
            {params.slug === 'simulation_faith' &&
            artwork.video &&
            (artwork.video.type === 'youtube' || artwork.video.type === 'vimeo') ? (
              <div className="mt-10">
                <ArtworkVideo video={artwork.video} heading="Exhibition documentation" />
              </div>
            ) : null}
            {artwork.interpretation && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Interpretation</h3>
                <EnhancedDescription
                  description={artwork.interpretation}
                  interactiveContent={artwork.interactiveContent || []}
                />
              </div>
            )}

            {/* Press Coverage Section */}
            {(artwork.title === 'Smart Shoppers' || artwork.title === 'The Price of Existence') && (
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Press Coverage</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">
                      <strong>eP Investiga</strong> - "Continuum, una mirada a los avances en la expresión artística"
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Featured in the CONTINUUM exhibition at MUNAG, Antigua Guatemala, organized by Fundación Paiz para la Educación y la Cultura.
                    </p>
                    <a 
                      href="https://epinvestiga.com/dominical/continuum-una-mirada-a-los-avances-en-la-expresion-artistica/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline text-sm inline-flex items-center mt-2"
                    >
                      Read full article →
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {artwork.title === 'Taste the Algorithm' && (
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Press Coverage</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">
                      <strong>Artburst Miami</strong> - "Local Artists Given the Spotlight in Latest Museum of Sex Exhibit"
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Featured in F*ck Art: Nature & Artifice at the Museum of Sex, Miami. Written by Douglas Markowitz, March 3, 2026.
                    </p>
                    <a 
                      href="https://www.artburstmiami.com/visual_arts/miami-museum-of-sex-fck-art-nature-and-artifice-exhibition"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline text-sm inline-flex items-center mt-2"
                    >
                      Read full article →
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      <strong>Museum of Sex</strong> - "F*ck Art: Nature & Artifice"
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Official exhibition page for the Miami presentation of Taste the Algorithm.
                    </p>
                    <a
                      href="https://museumofsex.com/exhibitions/fck-art-nature-artifice/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline text-sm inline-flex items-center mt-2"
                    >
                      View exhibition →
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {artwork.images.length > 0 && !useCarousel ? (
          <ArtworkGallery title={artwork.title} images={artwork.images} />
        ) : null}

        {/* Venue / support (only when defined on the artwork) */}
        {artwork.exhibition_support && (
          <div className="mt-24 border-t border-gray-200 dark:border-gray-800 pt-16">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Venue & support
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {artwork.exhibition_support.text}
              </p>
              {artwork.exhibition_support.sponsors &&
                artwork.exhibition_support.sponsors.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center gap-10 pt-2">
                    {artwork.exhibition_support.sponsors.map((s) => (
                      <div key={s.name} className="flex flex-col items-center gap-2">
                        {s.logoUrl ? (
                          s.href ? (
                            <a
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block opacity-90 hover:opacity-100 transition-opacity"
                            >
                              <Image
                                src={s.logoUrl}
                                alt={s.logoAlt ?? s.name}
                                width={220}
                                height={80}
                                className="h-14 w-auto max-w-[220px] object-contain object-center dark:brightness-0 dark:invert"
                              />
                            </a>
                          ) : (
                            <Image
                              src={s.logoUrl}
                              alt={s.logoAlt ?? s.name}
                              width={220}
                              height={80}
                              className="h-14 w-auto max-w-[220px] object-contain object-center dark:brightness-0 dark:invert"
                            />
                          )
                        ) : s.href ? (
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
                          >
                            {s.name}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {s.name}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
        )}

        {artwork.related && artwork.related.length > 0 ? (
          <section className="mt-24 border-t border-gray-200 pt-16 dark:border-gray-800" aria-labelledby="related-works-heading">
            <h2 id="related-works-heading" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Related works
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2">
              {artwork.related.map((item) => {
                const work = artist.artworks[item.slug];
                if (!work?.images[0]) return null;
                return (
                  <li key={item.slug}>
                    <Link href={`/art/${item.slug}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                      <div className="relative aspect-[4/5] bg-neutral-950">
                        <ImageWithSkeleton
                          src={work.images[0].url}
                          alt={work.images[0].caption || work.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 36rem"
                          className="object-contain"
                        />
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold underline-offset-4 group-hover:underline">
                        {work.title}
                      </h3>
                      <p className="mt-1 text-sm tabular-nums">{work.year}</p>
                      <p className="mt-3 max-w-prose text-base leading-relaxed">{item.note}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {artwork.studio ? (
          <section className="mt-16 border-t border-gray-200 pt-12 dark:border-gray-800" aria-labelledby="studio-heading">
            <h2 id="studio-heading" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Studio
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">{artwork.studio.text}</p>
            <Link
              href={artwork.studio.href}
              className="mt-6 inline-flex min-h-11 items-center text-lg underline underline-offset-4"
            >
              {artwork.studio.label}
            </Link>
          </section>
        ) : null}
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const work = artist.artworks[params.slug];
  if (!work) return {};

  // Find up to 8 matching keywords from seoKeywordsAlpha
  const tagKeywords = (work.tags || []).map(t => t.toLowerCase());
  const matchedKeywords = seoKeywordsAlpha.filter((kw: string) => tagKeywords.some(tag => kw.includes(tag)));
  const extraKeywords = ['moises sanabria', 'new media art', 'miami artist'];
  const allKeywords = Array.from(new Set([
    ...tagKeywords,
    ...matchedKeywords.slice(0, 8),
    ...extraKeywords
  ])).join(', ');

  return {
    title: `${work.title} – Moises Sanabria`,
    description: work.description?.slice(0, 155) || '',
    keywords: allKeywords,
    alternates: { canonical: `/art/${params.slug}` },
    openGraph: {
      title: work.title,
      description: work.description,
      images: work.images?.[0]?.url ?? '',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: work.title,
      description: work.description,
      images: [work.images?.[0]?.url ?? ''],
    },
  };
}

// Optional: Add generateStaticParams if using static generation
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(artist.artworks).map(slug => ({ slug }));
}
