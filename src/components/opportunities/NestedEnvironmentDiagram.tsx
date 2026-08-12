import { cn } from '@/lib/utils';

type NestedEnvironmentDiagramProps = {
  className?: string;
  title?: string;
};

/**
 * Lightweight SVG hero/positioning diagram: nested environment boundaries,
 * agent trajectory, interruption, human review, evaluation marks.
 * Decorative — all important copy remains HTML elsewhere.
 */
export function NestedEnvironmentDiagram({
  className,
  title = 'Conceptual nested agent environment',
}: NestedEnvironmentDiagramProps) {
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-xl border border-stone-200 bg-[linear-gradient(160deg,#f7f3ee_0%,#efe8df_55%,#e8dfd4_100%)] dark:border-stone-700 dark:bg-[linear-gradient(160deg,#1c1917_0%,#292524_100%)]',
        className,
      )}
    >
      <svg
        viewBox="0 0 640 280"
        role="img"
        aria-label={title}
        className="h-auto w-full"
      >
        <title>{title}</title>
        {/* Outer environment */}
        <rect
          x="24"
          y="24"
          width="592"
          height="232"
          rx="8"
          fill="none"
          stroke="#a8a29e"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <text x="36" y="42" className="fill-stone-500" fontSize="9" fontFamily="ui-monospace, monospace">
          environment boundary
        </text>

        {/* Inner task sequence */}
        <rect
          x="56"
          y="56"
          width="360"
          height="168"
          rx="6"
          fill="none"
          stroke="#78716c"
          strokeWidth="1.25"
        />
        <text x="68" y="74" className="fill-stone-600" fontSize="9" fontFamily="ui-monospace, monospace">
          task sequence
        </text>

        {/* Agent path */}
        <path
          d="M88 180 C140 120, 180 200, 230 140 S320 100, 370 150"
          fill="none"
          stroke="#c2410c"
          strokeWidth="1.5"
          className="motion-safe:opacity-90"
        />
        <circle cx="88" cy="180" r="4" fill="#c2410c" />
        <circle cx="230" cy="140" r="4" fill="#c2410c" />
        <circle cx="370" cy="150" r="4" fill="#c2410c" />
        <text x="92" y="196" fontSize="8" fill="#9a3412" fontFamily="ui-monospace, monospace">
          agent trajectory
        </text>

        {/* Tool call */}
        <rect x="200" y="96" width="72" height="22" rx="3" fill="#fff7ed" stroke="#ea580c" strokeWidth="1" />
        <text x="210" y="110" fontSize="8" fill="#9a3412" fontFamily="ui-monospace, monospace">
          tool call
        </text>

        {/* Interruption */}
        <path d="M290 70 L300 90 L280 90 Z" fill="#b45309" />
        <text x="306" y="84" fontSize="8" fill="#92400e" fontFamily="ui-monospace, monospace">
          interruption
        </text>

        {/* Memory update */}
        <rect x="120" y="148" width="88" height="22" rx="3" fill="#fafaf9" stroke="#78716c" strokeWidth="1" />
        <text x="128" y="162" fontSize="8" fill="#44403c" fontFamily="ui-monospace, monospace">
          memory update
        </text>

        {/* Human review */}
        <rect
          x="440"
          y="72"
          width="140"
          height="64"
          rx="6"
          fill="#fffbeb"
          stroke="#d97706"
          strokeWidth="1.25"
        />
        <text x="452" y="94" fontSize="9" fill="#92400e" fontFamily="ui-monospace, monospace">
          human review
        </text>
        <text x="452" y="112" fontSize="8" fill="#78716c" fontFamily="ui-monospace, monospace">
          approval gate
        </text>
        <text x="452" y="126" fontSize="8" fill="#78716c" fontFamily="ui-monospace, monospace">
          permission boundary
        </text>

        {/* Eval signals */}
        <g>
          <circle cx="460" cy="180" r="5" fill="none" stroke="#059669" strokeWidth="1.5" />
          <circle cx="490" cy="180" r="5" fill="none" stroke="#d97706" strokeWidth="1.5" />
          <circle cx="520" cy="180" r="5" fill="none" stroke="#be123c" strokeWidth="1.5" />
          <text x="452" y="204" fontSize="8" fill="#57534e" fontFamily="ui-monospace, monospace">
            evaluation signals
          </text>
        </g>

        {/* Trace store */}
        <rect
          x="440"
          y="220"
          width="140"
          height="24"
          rx="3"
          fill="none"
          stroke="#a8a29e"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <text x="452" y="236" fontSize="8" fill="#57534e" fontFamily="ui-monospace, monospace">
          trace store / replay
        </text>
      </svg>
      <figcaption className="border-t border-stone-200/80 px-3 py-2 text-[11px] text-stone-500 dark:border-stone-700 dark:text-stone-400">
        Conceptual diagram — nested environments, not outer space. Research prototype visual language.
      </figcaption>
    </figure>
  );
}
