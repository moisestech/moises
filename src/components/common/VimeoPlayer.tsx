'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface VimeoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
}

export default function VimeoPlayer({
  videoId,
  title = 'Vimeo video player',
  className = '',
  aspectRatio = '16:9',
  autoplay = false,
  controls = true,
  loop = false
}: VimeoPlayerProps) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);

  // Calculate padding based on aspect ratio
  const aspectRatioPadding = {
    '16:9': 'pb-[56.25%]', // (9 / 16) * 100
    '4:3': 'pb-[75%]',     // (3 / 4) * 100
    '1:1': 'pb-[100%]'     // Square
  };

  return (
    <div className={`relative w-full ${aspectRatioPadding[aspectRatio]} ${className}`}>
      {isLoading && (
        <div 
          className={`absolute inset-0 flex items-center justify-center ${
            theme === 'dark' ? 'bg-black' : 'bg-gray-100'
          }`}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}&loop=${loop ? 1 : 0}&background=0`}
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
} 