'use client';

import { useCallback, useState, type SyntheticEvent } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type ImageWithSkeletonProps = ImageProps;

/**
 * Neutral pulse behind a next/image until it loads.
 * The parent must be `relative` when `fill` is set.
 */
export default function ImageWithSkeleton({
  className,
  alt,
  fill,
  onLoad,
  ...rest
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  const markLoaded = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  const handleLoad = useCallback(
    (event: SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(event);
    },
    [onLoad],
  );

  return (
    <>
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 bg-neutral-200 dark:bg-neutral-800 print:hidden',
          loaded ? 'opacity-0' : 'animate-pulse motion-reduce:animate-none',
        )}
      />
      <Image
        {...rest}
        ref={markLoaded}
        alt={alt}
        fill={fill}
        className={cn(
          'transition-opacity duration-300 motion-reduce:transition-none',
          loaded ? 'opacity-100' : 'opacity-0 print:opacity-100',
          className,
        )}
        onLoad={handleLoad}
      />
    </>
  );
}
