export function WolfsonianHeroNetwork() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full motion-safe:animate-[wolfsonian-drift_24s_ease-in-out_infinite] motion-reduce:animate-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wolfsonian-line-fade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="text-sky-600/40 dark:text-sky-400/30" stroke="url(#wolfsonian-line-fade)" strokeWidth="1" fill="none">
        <path d="M80,420 C280,180 420,520 620,280 S980,120 1120,360" />
        <path d="M40,300 C240,80 500,400 720,200 S1000,480 1160,240" />
        <path d="M200,520 C400,340 560,560 800,380 S1040,200 1180,440" />
      </g>
      <g className="text-stone-500/30 dark:text-stone-400/20" fill="currentColor">
        <circle cx="280" cy="180" r="3" />
        <circle cx="620" cy="280" r="4" />
        <circle cx="980" cy="120" r="3" />
        <circle cx="720" cy="200" r="3" />
        <circle cx="400" cy="340" r="3" />
      </g>
    </svg>
  );
}
