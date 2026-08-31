'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type OpportunityCardImageProps = {
  src: string;
  alt: string;
  srcDark?: string;
  local?: boolean;
};

/**
 * Reserved 16/10 frame with a stone placeholder and fade-in so evidence
 * panels never flash empty gray while remote images resolve.
 */
export function OpportunityCardImage({ src, alt, srcDark, local }: OpportunityCardImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imageClass = cn(
    'h-full w-full object-cover object-top transition duration-500 motion-reduce:duration-0',
    'motion-safe:group-hover/card:scale-[1.03] motion-reduce:group-hover/card:scale-100',
    loaded ? 'opacity-100' : 'opacity-0',
  );
  const lightClass = srcDark ? cn(imageClass, 'dark:hidden') : imageClass;
  const darkClass = cn(imageClass, 'hidden dark:block');

  return (
    <>
      <div
        className="absolute inset-0 bg-stone-200 dark:bg-stone-800"
        aria-hidden
      />
      {local ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={cn('relative z-[1]', lightClass)}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={lightClass}
          sizes="(max-width: 640px) 100vw, 50vw"
          onLoad={() => setLoaded(true)}
        />
      )}
      {srcDark ? (
        local ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={srcDark}
            alt=""
            aria-hidden
            className={cn('relative z-[1]', darkClass)}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        ) : (
          <Image
            src={srcDark}
            alt=""
            aria-hidden
            fill
            className={darkClass}
            sizes="(max-width: 640px) 100vw, 50vw"
            onLoad={() => setLoaded(true)}
          />
        )
      ) : null}
    </>
  );
}
