'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type GlitchTextProps = {
  children: string;
  className?: string;
  as?: HeadingTag;
} & Omit<React.HTMLAttributes<HTMLElement>, 'children'>;

export function GlitchText({
  children,
  className,
  as: Component = 'span',
  ...props
}: GlitchTextProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const blue = isDark ? '#1bc7fb' : '#2563eb';
  const magenta = isDark ? '#e0287d' : '#cc00aa';

  const Tag = Component;

  return (
    <>
      <Tag
        data-text={children}
        className={cn('glitch-text glitch-layers', className)}
        style={
          {
            '--glitch-blue': blue,
            '--glitch-magenta': magenta,
          } as React.CSSProperties
        }
        {...props}
      >
        <span className="glitch-inner">{children}</span>
      </Tag>
      <style jsx>{`
        .glitch-text {
          position: relative;
          display: inline-block;
          cursor: default;
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3));
        }
        .glitch-inner {
          position: relative;
          z-index: 2;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 110%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
          opacity: 0;
        }
        .glitch-text::before {
          top: 8px;
          left: 12px;
          color: var(--glitch-magenta);
        }
        .glitch-text::after {
          top: 4px;
          left: -8px;
          color: var(--glitch-blue);
        }
        .glitch-text:hover::before {
          opacity: 1;
          animation: glitch-paths 0.5s step-end 1 forwards,
            glitch-opacity 0.5s step-end 1 forwards,
            glitch-movement 0.5s step-end 1 forwards;
        }
        .glitch-text:hover::after {
          opacity: 1;
          animation: glitch-paths 0.5s step-end 1 forwards,
            glitch-opacity 0.5s step-end 1 forwards,
            glitch-movement-alt 0.5s step-end 1 forwards;
          animation-delay: 0.02s;
        }
        .glitch-text:hover .glitch-inner {
          animation: glitch-font 0.5s step-end 1 forwards;
        }
        @keyframes glitch-paths {
          0% {
            clip-path: polygon(
              0% 0%,
              100% 0%,
              100% 45%,
              0% 45%
            );
          }
          20% {
            clip-path: polygon(
              0% 55%,
              100% 55%,
              100% 100%,
              0% 100%
            );
          }
          40% {
            clip-path: polygon(
              0% 0%,
              45% 0%,
              45% 100%,
              0% 100%
            );
          }
          60% {
            clip-path: polygon(
              55% 0%,
              100% 0%,
              100% 100%,
              55% 100%
            );
          }
          80% {
            clip-path: polygon(
              0% 20%,
              100% 20%,
              100% 80%,
              0% 80%
            );
          }
          100% {
            clip-path: none;
          }
        }
        @keyframes glitch-opacity {
          0%,
          20%,
          40% {
            opacity: 0.85;
          }
          60%,
          80% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes glitch-movement {
          0% {
            top: 8px;
            left: 12px;
          }
          20% {
            top: -4px;
            left: -6px;
          }
          40% {
            top: 6px;
            left: 10px;
          }
          60% {
            top: -2px;
            left: -10px;
          }
          80% {
            top: 4px;
            left: 6px;
          }
          100% {
            top: 8px;
            left: 12px;
          }
        }
        @keyframes glitch-movement-alt {
          0% {
            top: 4px;
            left: -8px;
          }
          20% {
            top: 10px;
            left: 4px;
          }
          40% {
            top: -6px;
            left: -12px;
          }
          60% {
            top: 8px;
            left: -4px;
          }
          80% {
            top: -2px;
            left: 8px;
          }
          100% {
            top: 4px;
            left: -8px;
          }
        }
        @keyframes glitch-font {
          0% {
            filter: blur(0);
          }
          20% {
            filter: blur(2px);
          }
          40% {
            filter: blur(0);
          }
          60% {
            filter: blur(1px);
          }
          80% {
            filter: blur(0);
          }
          100% {
            filter: blur(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .glitch-text:hover::before,
          .glitch-text:hover::after {
            animation: none;
            opacity: 0;
          }
          .glitch-text:hover .glitch-inner {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
