import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

const PETALS = [
  { id: 'discover', label: 'Client + workflow discovery', x: 360, y: 36 },
  { id: 'design', label: 'Product + experience design', x: 620, y: 210 },
  { id: 'integrate', label: 'Software + system integration', x: 360, y: 384 },
  { id: 'teach', label: 'Teaching + capability transfer', x: 100, y: 210 },
] as const;

export function FdeRoleMap({ className }: { className?: string }) {
  return (
    <section id="role-map" className={cn('scroll-mt-32', className)} aria-labelledby="role-map-heading">
      <h2 id="role-map-heading" className={opp.h2}>
        Forward-Deployed Engineering
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.muted}`}>
        Four petals into one practice. A design and teaching background is inside the engineering work — not a
        fifth identity.
      </p>
      <figure
        className={cn(
          'mt-6 overflow-hidden rounded-xl border border-stone-200 bg-[linear-gradient(160deg,#f7f3ee_0%,#efe8df_55%,#e8dfd4_100%)] dark:border-stone-700 dark:bg-[linear-gradient(160deg,#1c1917_0%,#292524_100%)]',
        )}
      >
        <svg
          viewBox="0 0 720 460"
          role="img"
          aria-label="Four petals — discovery, design, integration, and teaching — meet at Forward-Deployed Engineering"
          className="h-auto w-full"
        >
          <title>FDE role map</title>
          {PETALS.map((petal) => (
            <g key={petal.id}>
              <path
                d={`M360 230 L${petal.x} ${petal.y}`}
                fill="none"
                stroke="#a8a29e"
                strokeWidth="1.25"
              />
              <rect
                x={petal.x - 118}
                y={petal.y - 28}
                width="236"
                height="56"
                rx="8"
                fill="#fffbeb"
                stroke="#d6d3d1"
                className="dark:fill-stone-900"
              />
              <text
                x={petal.x}
                y={petal.y + 5}
                textAnchor="middle"
                fontSize="12"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontWeight="600"
                className="fill-stone-900 dark:fill-stone-100"
              >
                {petal.label}
              </text>
            </g>
          ))}
          <circle cx="360" cy="230" r="58" fill="#1c1917" className="dark:fill-cyan-400" />
          <text
            x="360"
            y="224"
            textAnchor="middle"
            fontSize="11"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontWeight="700"
            fill="#fff"
            className="dark:fill-stone-950"
          >
            FORWARD-DEPLOYED
          </text>
          <text
            x="360"
            y="240"
            textAnchor="middle"
            fontSize="11"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontWeight="700"
            fill="#fff"
            className="dark:fill-stone-950"
          >
            ENGINEERING
          </text>
        </svg>
        <figcaption className="border-t border-stone-200/80 px-3 py-2 text-[11px] text-stone-500 dark:border-stone-700 dark:text-stone-400">
          Not a Platform / SWE / SA Venn. Creative-technologist craft sits inside discovery, design, and
          transfer.
        </figcaption>
      </figure>
    </section>
  );
}
