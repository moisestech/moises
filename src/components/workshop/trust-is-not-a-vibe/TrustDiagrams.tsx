import { TRUST_HARNESS_LINE, TRUST_LOOP } from '@/content/workshops/trust-is-not-a-vibe'
import { TrustDiagramSvg, TrustEdge, TrustFigure, TrustNode, type TrustDiagramTone } from './diagram'

const NODE_WIDTH = 132
const NODE_HEIGHT = 72
const NODE_PITCH = 160

export function SimpleLoopSvg({ className }: { className?: string }) {
  const nodes = TRUST_LOOP.slice(0, 4)

  return (
    <TrustFigure
      className={className}
      caption="Then add Stop · Ask · Continue. Observable traces only."
    >
      <TrustDiagramSvg
        viewBox="0 0 640 160"
        title="Observe, Decide, Act, Check"
        description="The agent loop runs in four stages, each feeding the next: observe the situation, decide what to do, act, then check the result."
      >
        {nodes.map((node, index) => {
          const x = 20 + index * NODE_PITCH
          const isLast = index === nodes.length - 1
          return (
            <g key={node.id}>
              <TrustNode
                x={x}
                y={36}
                width={NODE_WIDTH}
                height={NODE_HEIGHT}
                tone={node.color}
                label={node.label}
                sub={node.technical.split(',')[0]}
              />
              {isLast ? null : (
                <TrustEdge
                  from={{ x: x + NODE_WIDTH + 4, y: 72 }}
                  to={{ x: x + NODE_PITCH - 4, y: 72 }}
                />
              )}
            </g>
          )
        })}
      </TrustDiagramSvg>
    </TrustFigure>
  )
}

const RINGS: { label: string; sub: string; y: number; tone: TrustDiagramTone }[] = [
  { label: 'Model', sub: 'proposes', y: 28, tone: 'violet' },
  { label: 'Tools · Permissions · State', sub: 'system controls', y: 68, tone: 'slate' },
  { label: 'Eval · Guardrail · Approval · Trace · Fallback', sub: 'harness', y: 108, tone: 'slate' },
  { label: 'PM · Eng · Design · Strategy', sub: 'team authorizes', y: 148, tone: 'amber' },
]

export function FullHarnessSvg({ className }: { className?: string }) {
  return (
    <TrustFigure className={className} caption={TRUST_HARNESS_LINE}>
      <TrustDiagramSvg
        viewBox="0 0 640 200"
        title="Harness around the model"
        description="Four stacked layers. The model proposes; system controls bound what it can reach; the harness evaluates, guards, approves, traces, and recovers; the team authorizes."
      >
        {RINGS.map((ring) => (
          <TrustNode
            key={ring.label}
            x={24}
            y={ring.y}
            width={592}
            height={34}
            radius={8}
            tone={ring.tone}
            label={ring.label}
            sub={ring.sub}
            labelClassName="text-[13px]"
            subClassName="text-[10px] uppercase tracking-wide"
            leading={{ label: 13, sub: 11, gap: 2 }}
          />
        ))}
      </TrustDiagramSvg>
    </TrustFigure>
  )
}
