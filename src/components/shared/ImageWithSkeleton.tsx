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
  onError,
  ...rest
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

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
          failed || loaded ? 'opacity-0' : 'animate-pulse motion-reduce:animate-none',
        )}
      />
      {failed ? (
        <span className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm text-neutral-600 dark:text-neutral-300">
          {alt}
        </span>
      ) : null}
      <Image
        {...rest}
        ref={markLoaded}
        alt={alt}
        fill={fill}
        className={cn(
          'transition-opacity duration-300 motion-reduce:transition-none',
          loaded && !failed ? 'opacity-100' : 'opacity-0 print:opacity-100',
          className,
        )}
        onLoad={handleLoad}
        onError={(event) => {
          setFailed(true);
          setLoaded(true);
          onError?.(event);
        }}
      />
    </>
  );
}
