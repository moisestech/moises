import { TrustDiagramSvg, TrustEdge, TrustFigure, TrustLegend, TrustNode } from './diagram'
import type { TrustDiagramTone } from './diagram'

const STAGES: { label: string; sub: string | string[]; tone: TrustDiagramTone }[] = [
  { label: 'Golden set', sub: 'common · edge · known failure', tone: 'rose' },
  { label: 'Runner', sub: 'the same cases, on every change', tone: 'slate' },
  { label: 'Graders', sub: 'human · user · code · judge', tone: 'cyan' },
  { label: 'Release gate', sub: 'allow · ask · deny, owned by a person', tone: 'amber' },
  { label: 'Monitor', sub: 'production behavior', tone: 'teal' },
]

const NODE_X = 40
const NODE_W = 300
const NODE_H = 48
const ROW_PITCH = 66
const FIRST_Y = 10
/** Clear of the node column, so the return edge crosses nothing. */
const RETURN_X = 384

/**
 * The Harness has eight separate widgets. This ties them into one picture, so
 * the chapter's parts read as an architecture rather than a list of exercises.
 *
 * A single column, not a grid: the sub-labels are long enough that three across
 * would overflow their nodes, and one column reflows to a phone unchanged.
 */
export function TrustEvalArchitecture({ className }: { className?: string }) {
  const lastY = FIRST_Y + (STAGES.length - 1) * ROW_PITCH

  return (
    <TrustFigure
      eyebrow="Architecture"
      title="How the harness fits together"
      className={className}
      caption="New production failures become new golden cases, which is what makes it a loop rather than a launch checklist."
      legend={
        <TrustLegend
          items={[
            { tone: 'rose', label: 'Cases', meaning: 'kept stable so runs compare' },
            { tone: 'cyan', label: 'Graders', meaning: 'each with a blind spot' },
            { tone: 'amber', label: 'Decision', meaning: 'owned by a person' },
            { tone: 'teal', label: 'Monitoring', meaning: 'where new cases come from' },
          ]}
        />
      }
    >
      <TrustDiagramSvg
        viewBox={`0 0 460 ${lastY + NODE_H + 14}`}
        title="Golden set to runner to graders to release gate to monitoring, and back"
        description="A golden set of cases feeds a runner that reruns them on every change. Graders score the results. A release gate records allow, ask, or deny, owned by a person. Production monitoring returns new failures to the golden set."
      >
        {STAGES.map((stage, index) => {
          const y = FIRST_Y + index * ROW_PITCH
          return (
            <g key={stage.label}>
              <TrustNode
                x={NODE_X}
                y={y}
                width={NODE_W}
                height={NODE_H}
                tone={stage.tone}
                label={stage.label}
                sub={stage.sub}
                labelClassName="text-[13px]"
                subClassName="text-[10px]"
                leading={{ label: 15, sub: 12, gap: 3 }}
              />
              {index < STAGES.length - 1 ? (
                <TrustEdge
                  from={{ x: NODE_X + NODE_W / 2, y: y + NODE_H + 2 }}
                  to={{ x: NODE_X + NODE_W / 2, y: y + ROW_PITCH - 2 }}
                />
              ) : null}
            </g>
          )
        })}

        {/* Monitoring back to the golden set, routed up the right margin. */}
        <TrustEdge
          from={{ x: NODE_X + NODE_W + 4, y: lastY + NODE_H / 2 }}
          points={[
            { x: RETURN_X, y: lastY + NODE_H / 2 },
            { x: RETURN_X, y: FIRST_Y + NODE_H / 2 },
          ]}
          to={{ x: NODE_X + NODE_W + 6, y: FIRST_Y + NODE_H / 2 }}
          dashed
          label="new failures"
          labelAt={{ x: RETURN_X + 4, y: (lastY + FIRST_Y) / 2 + NODE_H / 2 }}
        />
      </TrustDiagramSvg>
    </TrustFigure>
  )
}
