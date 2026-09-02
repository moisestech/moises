import { TRUST_HARNESS_LINE, TRUST_LOOP } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

const NODE_FILL: Record<string, string> = {
  cyan: 'fill-cyan-100 stroke-cyan-500 dark:fill-cyan-950 dark:stroke-cyan-400',
  violet: 'fill-violet-100 stroke-violet-500 dark:fill-violet-950 dark:stroke-violet-400',
  blue: 'fill-blue-100 stroke-blue-500 dark:fill-blue-950 dark:stroke-blue-400',
  slate: 'fill-slate-100 stroke-slate-500 dark:fill-slate-900 dark:stroke-slate-400',
  amber: 'fill-amber-100 stroke-amber-500 dark:fill-amber-950 dark:stroke-amber-400',
}

export function SimpleLoopSvg({ className }: { className?: string }) {
  const nodes = TRUST_LOOP.slice(0, 4)
  return (
    <figure className={cn('rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900', className)}>
      <svg viewBox="0 0 640 160" className="h-auto w-full text-stone-800 dark:text-stone-100" role="img" aria-labelledby="simple-loop-title">
        <title id="simple-loop-title">Observe, Decide, Act, Check</title>
        {nodes.map((node, index) => {
          const x = 20 + index * 160
          return (
            <g key={node.id}>
              <rect x={x} y={36} width={132} height={72} rx={12} className={NODE_FILL[node.color]} strokeWidth="2" />
              <text x={x + 66} y={68} textAnchor="middle" className="fill-current text-[15px] font-semibold">
                {node.label}
              </text>
              <text x={x + 66} y={90} textAnchor="middle" className="fill-stone-500 text-[11px] dark:fill-stone-400">
                {node.technical.split(',')[0]}
              </text>
              {index < nodes.length - 1 ? (
                <path d={`M ${x + 136} 72 L ${x + 156} 72`} className="stroke-stone-400" strokeWidth="2" markerEnd="url(#trust-arrow)" />
              ) : null}
            </g>
          )
        })}
        <defs>
          <marker id="trust-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="fill-stone-400" />
          </marker>
        </defs>
      </svg>
      <figcaption className="mt-2 text-xs text-stone-500">Then add Stop · Ask · Continue. Observable traces only.</figcaption>
    </figure>
  )
}

export function FullHarnessSvg({ className }: { className?: string }) {
  const rings = [
    { label: 'Model', sub: 'proposes', y: 28 },
    { label: 'Tools · Permissions · State', sub: 'system controls', y: 68 },
    { label: 'Eval · Guardrail · Approval · Trace · Fallback', sub: 'harness', y: 108 },
    { label: 'PM · Eng · Design · Strategy', sub: 'team authorizes', y: 148 },
  ]
  return (
    <figure className={cn('rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900', className)}>
      <svg viewBox="0 0 640 200" className="h-auto w-full text-stone-800 dark:text-stone-100" role="img" aria-labelledby="harness-title">
        <title id="harness-title">Harness around the model</title>
        {rings.map((ring, index) => (
          <g key={ring.label}>
            <rect
              x={24}
              y={ring.y}
              width={592}
              height={34}
              rx={8}
              className={
                index === 0
                  ? 'fill-violet-100 stroke-violet-400 dark:fill-violet-950/50'
                  : index === 3
                    ? 'fill-amber-100 stroke-amber-400 dark:fill-amber-950/40'
                    : 'fill-slate-100 stroke-slate-400 dark:fill-slate-900/80'
              }
              strokeWidth="1.5"
            />
            <text x={320} y={ring.y + 15} textAnchor="middle" className="fill-current text-[13px] font-semibold">
              {ring.label}
            </text>
            <text x={320} y={ring.y + 28} textAnchor="middle" className="fill-stone-500 text-[10px] uppercase tracking-wide">
              {ring.sub}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{TRUST_HARNESS_LINE}</figcaption>
    </figure>
  )
}
