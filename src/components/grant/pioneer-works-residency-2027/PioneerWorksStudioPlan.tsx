import {
  studioPlanDisclaimer,
  studioPlanZones,
} from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export function PioneerWorksStudioPlan() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-wide text-amber-800 dark:text-amber-200/90 border border-amber-300/80 dark:border-amber-700/50 bg-amber-50/80 dark:bg-amber-950/30 px-3 py-2">
        {studioPlanDisclaimer}
      </p>
      <div className="relative w-full aspect-[20/11] border-2 border-stone-800 dark:border-stone-200 bg-[#ebe6dc] dark:bg-neutral-900 overflow-hidden">
        {/* Glass front — visitor sightline */}
        <div className="absolute inset-x-0 bottom-0 h-[8%] border-t border-dashed border-[#8b3a2a]/70 bg-[#8b3a2a]/10">
          <p className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-wide text-[#8b3a2a] font-semibold">
            Glass · visitor sightline
          </p>
        </div>
        {/* Approx dimension ticks */}
        <p className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest text-stone-500">
          ~20 ft
        </p>
        <p className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[9px] uppercase tracking-widest text-stone-500">
          ~11 ft
        </p>
        {studioPlanZones.map((zone) => (
          <div
            key={zone.id}
            className="absolute border border-stone-700/70 dark:border-stone-400/70 bg-white/40 dark:bg-black/30 flex items-center justify-center px-1"
            style={{
              left: `${zone.x}%`,
              top: `${zone.y}%`,
              width: `${zone.w}%`,
              height: `${zone.h}%`,
            }}
          >
            <span className="text-[9px] sm:text-[10px] leading-tight text-center text-stone-800 dark:text-stone-200 font-medium">
              {zone.label}
            </span>
          </div>
        ))}
      </div>
      <ul className="grid sm:grid-cols-2 gap-2 text-xs text-stone-600 dark:text-stone-400">
        {studioPlanZones.map((zone) => (
          <li key={zone.id} className="flex gap-2">
            <span className="text-stone-400">▸</span>
            <span>{zone.label}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-stone-500">
        Do not treat this diagram as documentation of an assigned Pioneer Works studio. Assignment
        conditions unverified.
      </p>
    </div>
  );
}
