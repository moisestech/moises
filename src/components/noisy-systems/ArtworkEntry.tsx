'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

interface ArtworkEntryProps {
  title: string;
  year: number;
  imageUrl: string;
  imageAlt: string;
  description: string;
  relevance: string;
  slug: string;
  conceptualTag?: string;
}

export function ArtworkEntry({
  title,
  year,
  imageUrl,
  imageAlt,
  description,
  relevance,
  slug,
  conceptualTag,
}: ArtworkEntryProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <article className="space-y-4 sm:space-y-6">
      <div className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
        />
        {conceptualTag && (
          <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-t from-black/60 to-transparent dark:from-black/70 dark:to-transparent">
            <span className="text-sm font-medium text-white drop-shadow-sm">
              {conceptualTag}
            </span>
          </div>
        )}
      </div>
      <div>
        <h3
          className={`text-xl sm:text-2xl font-semibold mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {title} ({year})
        </h3>
        <p
          className={`text-base sm:text-lg mb-3 max-w-2xl ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
        <p
          className={`text-sm sm:text-base italic mb-4 ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}
        >
          <span className="font-medium not-italic">Relevance:</span> {relevance}
        </p>
        <Link
          href={`/art/${slug}`}
          className={`inline-block text-base font-medium underline underline-offset-4 ${
            isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          View work
        </Link>
      </div>
    </article>
  );
}
