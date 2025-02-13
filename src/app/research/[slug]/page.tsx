import { research, InteractiveContent } from '@/constants/research';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import InteractiveText from '@/components/InteractiveText';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(research).map((slug) => ({
    slug,
  }));
}

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
    <p>
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

export default function ResearchItemPage({ params }: Props) {
  const item = research[params.slug];

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-44 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Images */}
        <div className="space-y-8">
          {item.images.map((image, index) => (
            <div key={index} className="relative aspect-[9/16]">
              <Image
                src={image.url}
                alt={image.caption || item.title}
                fill
                className="object-cover"
              />
              {image.caption && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column - Details */}
        <div className="space-y-16">
          <div>
            <h1 className="font-['MoMA_Sans'] text-4xl md:text-5xl font-bold">
              {item.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              {item.year}
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-16">
            <div>
              <h2 className="font-['MoMA_Sans'] text-2xl font-bold">
                Description
              </h2>
              <EnhancedDescription
                description={item.description}
                interactiveContent={item.interactiveContent}
              />
            </div>

            <div>
              <h2 className="font-['MoMA_Sans'] text-2xl font-bold">
                Artistic Intent
              </h2>
              <p>{item.artistic_intent}</p>
            </div>

            {item.interpretation && (
              <div>
                <h2 className="font-['MoMA_Sans'] text-2xl font-bold">
                  Interpretation
                </h2>
                <p>{item.interpretation}</p>
              </div>
            )}

            <div>
              <h2 className="font-['MoMA_Sans'] text-2xl font-bold">
                Technical Requirements
              </h2>
              <div className="space-y-8">
                <div>
                  <h3>Power</h3>
                  <ul>
                    {item.technical_requirements.power.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-['MoMA_Sans'] text-2xl font-bold">
                    Space Requirements
                  </h3>
                  <ul>
                    <li>
                      Pedestal Size:{' '}
                      {item.technical_requirements.space.pedestal_size}
                    </li>
                    <li>
                      Wall Clearance:{' '}
                      {item.technical_requirements.space.wall_clearance}
                    </li>
                    <li>
                      Power Access:{' '}
                      {item.technical_requirements.space.power_access}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-['MoMA_Sans'] text-2xl font-bold">
                Materials
              </h2>
              <ul>
                {item.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-['MoMA_Sans'] text-2xl font-bold">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
