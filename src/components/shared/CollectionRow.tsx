import Image from 'next/image';
import Link from 'next/link';
import { artist } from '@/constants/artworks';

interface CollectionRowProps {
  title: string;
  yearRange: string;
  slug: string;
  minYear: number;
  maxYear: number;
  reverse?: boolean;
  color?: string;
}

export default function CollectionRow({ title, yearRange, slug, minYear, maxYear, reverse = false, color = 'bg-gray-50 dark:bg-gray-900' }: CollectionRowProps) {
  // Get artwork entries with their slugs and filter by year range
  const artworkEntries = Object.entries(artist.artworks).filter(([, artwork]) => {
    if (typeof artwork.year !== 'number') return false;
    return artwork.year >= minYear && artwork.year <= maxYear;
  });

  // Get the first artwork for the collection image
  const firstArtwork = artworkEntries[0];
  const artworkCount = artworkEntries.length;

  if (!firstArtwork) {
    return null;
  }

  const [artworkSlug, artwork] = firstArtwork;
  const imageUrl = artwork.images[0]?.url || '/placeholder.jpg';

  const ImageSection = (
    <div className="md:col-span-2 relative h-[380px] overflow-hidden bg-gray-100 dark:bg-gray-800">
      <Image
        src={imageUrl}
        alt={artwork.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );

  const TextSection = (
    <div className={`md:col-span-1 h-full ${color} flex flex-col justify-between py-8 pl-11`}>
      <div>
        <h2 className="text-4xl font-bold group-hover:underline transition-colors leading-tight">
          {title}
        </h2>
        <p className="text-4xl font-bold leading-tight">
          {yearRange}
        </p>
      </div>
      
      <div>
        <div className="text-lg font-bold text-black dark:text-cyan-400 group-hover:underline leading-tight">
          View Collection →
        </div>
        <p className="text-lg font-bold text-black dark:text-gray-500 leading-tight">
          {artworkCount} {artworkCount === 1 ? 'artwork' : 'artworks'}
        </p>
      </div>
    </div>
  );

  return (
    <div className="h-[380px]">
      <Link href={`/collection/${slug}`} className="group block h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch h-full">
          {reverse ? (
            <>
              {TextSection}
              {ImageSection}
            </>
          ) : (
            <>
              {ImageSection}
              {TextSection}
            </>
          )}
        </div>
      </Link>
    </div>
  );
} 