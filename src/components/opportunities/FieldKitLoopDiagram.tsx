import { cn } from '@/lib/utils';

const NODES = [
  { n: '01', label: 'Brief', sub: 'creative request' },
  { n: '02', label: 'Recommend', sub: 'technique' },
  { n: '03', label: 'Review', sub: 'human gate' },
  { n: '04', label: 'Handoff', sub: 'reusable pack' },
] as const;

export function FieldKitLoopDiagram({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-xl border border-stone-200 bg-[linear-gradient(160deg,#f7f3ee_0%,#efe8df_55%,#e8dfd4_100%)] dark:border-stone-700 dark:bg-[linear-gradient(160deg,#1c1917_0%,#292524_100%)]',
        className,
      )}
    >
      <svg
        viewBox="0 0 640 140"
        role="img"
        aria-label="Field Kit loop: creative brief, technique recommendation, human review, reusable handoff"
        className="h-auto w-full"
      >
        <title>Field Kit — brief to reusable handoff</title>
        {NODES.map((node, i) => {
          const x = 24 + i * 156;
          return (
            <g key={node.n}>
              {i < NODES.length - 1 ? (
                <path d={`M${x + 118} 66 H${x + 148}`} fill="none" stroke="#a8a29e" strokeWidth="1.25" />
              ) : null}
              <rect x={x} y={28} width="118" height="84" rx="8" fill="#fffbeb" stroke="#d6d3d1" className="dark:fill-stone-900" />
              <text x={x + 12} y={50} fontSize="9" fontFamily="ui-monospace, monospace" className="fill-stone-500">
                {node.n}
              </text>
              <text
                x={x + 12}
                y={72}
                fontSize="13"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontWeight="600"
                className="fill-stone-900 dark:fill-stone-100"
              >
                {node.label}
              </text>
              <text x={x + 12} y={90} fontSize="10" fontFamily="ui-sans-serif, system-ui, sans-serif" className="fill-stone-600 dark:fill-stone-400">
                {node.sub}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="border-t border-stone-200/80 px-3 py-2 text-[11px] text-stone-500 dark:border-stone-700 dark:text-stone-400">
        Fixture demo of a client outcome. Live FLORA Techniques need published IDs and paid API access.
      </figcaption>
    </figure>
  );
}
