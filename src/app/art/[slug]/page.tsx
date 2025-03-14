import { artist } from '@/constants/artworks';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { InteractiveContent } from '@/constants/research';
import InteractiveText from '@/components/InteractiveText';

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

  // Sort interactive content by text length (longest first) to avoid nested replacements
  const sortedContent = [...interactiveContent].sort(
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
      <div className={`${color} w-full py-20 px-8 mt-24`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-8xl font-bold text-black dark:text-white">
            {artwork.title}
          </h1>
          <p className="text-4xl mt-4 text-black/60 dark:text-white/60">
            {artwork.year}
          </p>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full h-[70vh] relative">
        <Image
          src={artwork.images[0].url}
          alt={artwork.images[0].caption || artwork.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Metadata Column */}
          <div className="space-y-8">
            {artwork.location && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p>{artwork.location}</p>
              </div>
            )}
            {artwork.curator && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Curator</h3>
                <p>{artwork.curator}</p>
              </div>
            )}
            {artwork.collaboration && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                <p>{artwork.collaboration}</p>
              </div>
            )}
            {artwork.materials && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Materials</h3>
                <ul className="list-disc pl-4">
                  {artwork.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
            )}
            {artwork.medium && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Medium</h3>
                <p>{artwork.medium}</p>
              </div>
            )}
            {artwork.dimensions && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
                <p>{artwork.dimensions}</p>
              </div>
            )}
            {artwork.tags && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {artwork.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
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

            {/* Video Section */}
              {artwork.video && (
                <div className="mb-16">
                  <div className="aspect-video w-full relative">
                    {artwork.video.type === 'vimeo' && (
                      <iframe
                        src={`https://player.vimeo.com/video/${artwork.video.id}?h=00000000&title=0&byline=0&portrait=0`}
                        title={artwork.video.title}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    )}
                  </div>
                  {artwork.video.caption && (
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      {artwork.video.caption}
                    </p>
                  )}
                  <a 
                    href={artwork.video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Watch on Vimeo
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

        {/* Support Information */}
        <div className="mt-24 border-t border-gray-200 dark:border-gray-800 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Support for this exhibition is provided by the Bakehouse Art
              Complex and the Miami-Dade County Department of Cultural Affairs.
              {/* Additional support comes from the State of Florida, Department of State, Division of Arts and Culture, 
                            the Florida Council on Arts and Culture, and the National Endowment for the Arts. */}
              {artwork.curator &&
                ` Special thanks to ${artwork.curator} for the curatorial vision and support.`}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

// Optional: Add generateMetadata if needed
export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `Art - ${params.slug}`,
    // ... other metadata
  };
}

// Optional: Add generateStaticParams if using static generation
export async function generateStaticParams() {
  return [
    { slug: 'art-1' },
    { slug: 'art-2' },
    // ... other slugs
  ];
}
