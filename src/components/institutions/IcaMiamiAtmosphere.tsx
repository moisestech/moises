'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Soft internet-grid and pointer glow for /ica-miami.
 * Decorative only — meaning never depends on it.
 */
export function IcaMiamiAtmosphere() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 72, y: 18 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.045) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        className="absolute inset-0 transition-[background] duration-500 ease-out motion-reduce:transition-none"
        style={{
          background: `radial-gradient(42rem 28rem at ${pos.x}% ${pos.y}%, rgba(3,105,161,0.14), transparent 58%), radial-gradient(28rem 20rem at 88% 8%, rgba(109,40,217,0.08), transparent 55%)`,
        }}
      />
    </div>
  );
}
