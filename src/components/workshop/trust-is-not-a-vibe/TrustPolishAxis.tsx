import { TrustDiagramSvg, TrustFigure } from './diagram'
import { TRUST_DIAGRAM_EDGE, TRUST_DIAGRAM_SUB } from './diagram'

const QUADRANTS = [
  { x: 60, y: 30, w: 190, h: 78, label: 'Rough and checkable', note: 'You verify it, and you can', tone: 'fill-emerald-50 dark:fill-emerald-950/30' },
  { x: 250, y: 30, w: 190, h: 78, label: 'Finished and checkable', note: 'Where you want to be', tone: 'fill-emerald-100 dark:fill-emerald-950/50' },
  { x: 60, y: 108, w: 190, h: 78, label: 'Obviously rough', note: 'Nobody trusts it, so nobody ships it', tone: 'fill-stone-100 dark:fill-stone-800/60' },
  { x: 250, y: 108, w: 190, h: 78, label: 'Polished and unverifiable', note: 'Where this card sits', tone: 'fill-red-50 dark:fill-red-950/40' },
]

/**
 * Polish against verifiability, with the card plotted.
 *
 * The point is that polish and verifiability are independent axes, so a card
 * can move a long way right without moving up at all.
 */
export function TrustPolishAxis({ className }: { className?: string }) {
  return (
    <TrustFigure
      eyebrow="Two axes"
      title="Polish is not evidence"
      className={className}
      caption="How finished something looks and how much of it you can check are independent. The card is far right and near the floor."
    >
      <TrustDiagramSvg
        viewBox="0 0 460 230"
        title="Polish plotted against verifiability, with the card in the polished but unverifiable quadrant"
        description="The horizontal axis is how finished the output looks; the vertical axis is how much of it you can check. The card sits far right and low: highly polished and barely verifiable."
      >
        {QUADRANTS.map((quadrant) => (
          <g key={quadrant.label}>
            <rect
              x={quadrant.x}
              y={quadrant.y}
              width={quadrant.w}
              height={quadrant.h}
              className={quadrant.tone}
            />
            <text x={quadrant.x + 10} y={quadrant.y + 22} className="fill-current text-[12px] font-semibold">
              {quadrant.label}
            </text>
            <text x={quadrant.x + 10} y={quadrant.y + 38} className={`${TRUST_DIAGRAM_SUB} text-[10px]`}>
              {quadrant.note}
            </text>
          </g>
        ))}

        {/* Axis lines. */}
        <path d="M 60 186 H 440" className={TRUST_DIAGRAM_EDGE} strokeWidth="1.5" fill="none" />
        <path d="M 60 30 V 186" className={TRUST_DIAGRAM_EDGE} strokeWidth="1.5" fill="none" />
        {/* Quadrant divides, lighter than the axes. */}
        <path d="M 250 30 V 186" className={TRUST_DIAGRAM_EDGE} strokeWidth="1" strokeDasharray="4 4" fill="none" />
        <path d="M 60 108 H 440" className={TRUST_DIAGRAM_EDGE} strokeWidth="1" strokeDasharray="4 4" fill="none" />

        <text x={250} y={208} textAnchor="middle" className={`${TRUST_DIAGRAM_SUB} text-[11px]`}>
          How finished it looks →
        </text>
        <text
          x={0}
          y={0}
          transform="translate(40 108) rotate(-90)"
          textAnchor="middle"
          className={`${TRUST_DIAGRAM_SUB} text-[11px]`}
        >
          How much you can check →
        </text>

        {/* The card. */}
        <circle cx={400} cy={168} r={8} className="fill-red-500 stroke-white dark:stroke-stone-900" strokeWidth="2" />
        <text x={400} y={152} textAnchor="middle" className="fill-current text-[11px] font-semibold">
          The send
        </text>
      </TrustDiagramSvg>
    </TrustFigure>
  )
}
