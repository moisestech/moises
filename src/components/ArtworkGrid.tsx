import Image from 'next/image';
import Link from 'next/link';
import { artist } from '@/constants/artworks';

export default function ArtworkGrid() {
  // Get artwork entries with their slugs
  const artworkEntries = Object.entries(artist.artworks).sort(
    ([, a], [, b]) => {
      if (a.on_view && !b.on_view) return -1;
      if (!a.on_view && b.on_view) return 1;
      return 0;
    }
  );

  const colors = {
    'bg-lime-400': 'text-lime-500',
    'bg-blue-400': 'text-blue-500',
    'bg-red-400': 'text-red-500',
    'bg-purple-400': 'text-purple-500',
    'bg-orange-400': 'text-orange-500',
    'bg-green-400': 'text-green-500',
  };

  const bgColors = Object.keys(colors);

  return (
    <div className="flex flex-col w-full gap-8 md:gap-0">
      {artworkEntries.map(([slug, artwork], index) => {
        const bgColor = bgColors[index % bgColors.length];
        const textColor = colors[bgColor as keyof typeof colors];
        const isEven = index % 2 === 0;

        return (
          <Link
            href={`/art/${slug}`}
            key={slug}
            className="group cursor-pointer"
          >
            <article className="flex flex-col md:flex-row h-auto md:h-[400px] lg:h-[500px] overflow-hidden w-full">
              {/* Image Section - Always First on Mobile */}
              <div className="w-full md:w-2/3 h-[300px] md:h-full order-1">
                <Image
                  className="w-full h-full object-cover"
                  width={1920}
                  height={1080}
                  src={artwork.images[0].url}
                  alt={artwork.images[0].caption || artwork.title}
                  priority={index === 0}
                />
              </div>

              {/* Text Section - Always Second on Mobile */}
              <div
                className={`w-full md:w-1/3 p-6 md:p-8 order-2 ${
                  isEven
                    ? 'md:order-first md:pl-16 md:pr-8'
                    : 'md:order-last md:pr-16 md:pl-8'
                } ${bgColor} md:bg-opacity-100 bg-opacity-0`}
              >
                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 md:mt-20 font-bold ${textColor} md:text-black md:dark:text-white`}
                >
                  {artwork.title}
                </h2>
                {artwork.location && (
                  <p className="text-lg sm:text-xl md:text-2xl mt-2 md:mt-4 text-black/80 dark:text-white/80">
                    {artwork.location}
                  </p>
                )}
                <p className="text-base sm:text-lg md:text-xl mt-1 md:mt-2 text-black/60 dark:text-white/60">
                  {artwork.year}
                </p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
