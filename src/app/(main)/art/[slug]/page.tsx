import { artist } from '@/constants/artworks';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { InteractiveContent } from '@/constants/research';
import InteractiveText from '@/components/InteractiveText';
import VimeoPlayer from '@/components/common/VimeoPlayer';
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

  return (
    <main className="w-full">
      {/* Title Banner */}
      <div className={`${color} w-full py-20 px-8 mt-40`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-8xl font-bold text-black dark:text-white">
            {artwork.title}
          </h1>
          <p className="text-4xl font-bold mt-4 text-black dark:text-white">
            {artwork.year}
          </p>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full relative h-[70vh]">
        <Image
          src={artwork.images[0].url}
          alt={artwork.images[0].caption || artwork.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Metadata Column */}
          <div className="space-y-8">
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
          </div>

          {/* Description Column */}
          <div className="md:col-span-2">
            <EnhancedDescription
              description={artwork.description}
              interactiveContent={artwork.interactiveContent || []}
            />
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
                </div>
              </div>
            )}

            {/* Video Section */}
            {artwork.video && (
              <div className="mt-16 mb-16">
                <h3 className="text-2xl font-semibold mb-6">Video Documentation</h3>
                {artwork.video.type === 'vimeo' && (
                  <VimeoPlayer
                    videoId={artwork.video.id}
                    title={artwork.video.title}
                    aspectRatio="16:9"
                    className="mb-4"
                  />
                )}
                {artwork.video.caption && (
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                    {artwork.video.caption}
                  </p>
                )}
                {artwork.video.technical_details && (
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                    {artwork.video.technical_details}
                  </p>
                )}
                <a 
                  href={artwork.video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Watch on Vimeo
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Variations Section */}
        {artwork.images.length > 0 && (
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8">
              {artwork.images.length} Variation
              {artwork.images.length !== 1 ? 's' : ''} Online
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {artwork.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative group cursor-pointer"
                >
                  <Image
                    src={image.url}
                    alt={
                      image.caption ||
                      `${artwork.title} - Variation ${index + 1}`
                    }
                    fill
                    className="object-cover rounded-lg"
                  />
                  {image.caption && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

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
