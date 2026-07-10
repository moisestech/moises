'use client';

import { bitmVisibleLabor, bitmInvisibleLabor } from '@/content/born-into-the-machine/bitm-diagrams';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';

export function BitmLaborSplitDiagram() {
  const { showLabor } = useBitm();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="border border-[#dedede] p-5 dark:border-neutral-700">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777]">
          What the audience sees
        </p>
        <ul className="space-y-2 text-sm text-[#111111] dark:text-neutral-200">
          {bitmVisibleLabor.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>
      <div
        className="border border-[#ff5c00]/30 p-5 transition-opacity"
        style={{ opacity: showLabor ? 1 : 0.55 }}
      >
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#ff5c00]">
          What sustains it
        </p>
        <ul className="space-y-2 text-sm text-[#111111] dark:text-neutral-200">
          {bitmInvisibleLabor.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
