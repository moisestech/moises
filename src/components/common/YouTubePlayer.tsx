'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type YouTubePlayerProps = {
  videoId: string;
  title?: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3';
};

export default function YouTubePlayer({
  videoId,
  title = 'YouTube video',
  className = '',
  aspectRatio = '16:9',
}: YouTubePlayerProps) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const padding = aspectRatio === '16:9' ? 'pb-[56.25%]' : 'pb-[75%]';

  return (
    <div className={`relative w-full ${padding} ${className}`}>
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            theme === 'dark' ? 'bg-black' : 'bg-neutral-100'
          }`}
        >
          <span className="text-sm text-neutral-500">Loading video…</span>
        </div>
      )}
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
