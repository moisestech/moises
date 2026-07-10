'use client';

import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  wireframe?: React.ReactNode;
  caption?: string;
  className?: string;
};

export function BitmCursorLens({ children, wireframe, caption, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      ref={ref}
      className={cn('relative hidden md:block', className)}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos(null)}
    >
      {children}
      {pos ? (
        <div
          className="pointer-events-none absolute z-10 h-28 w-28 overflow-hidden rounded-full border-2 border-[#ff5c00] bg-[#faf8f4]/90 shadow-lg"
          style={{ left: pos.x - 56, top: pos.y - 56 }}
        >
          {wireframe ?? (
            <div className="flex h-full items-center justify-center p-2 font-mono text-[8px] uppercase text-[#777777]">
              {caption ?? 'Inspect'}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
