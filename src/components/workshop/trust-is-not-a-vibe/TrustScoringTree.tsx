import { TRUST_SCORING_APPROACHES } from '@/content/workshops/trust-is-not-a-vibe'
import { TrustDiagramSvg, TrustEdge, TrustFigure, TrustNode, type TrustDiagramTone } from './diagram'

/** The question that routes to each approach, in the order they branch. */
const BRANCHES: { id: string; question: string; tone: TrustDiagramTone; x: number }[] = [
  { id: 'deterministic', question: 'Is it countable or a rule?', tone: 'slate', x: 4 },
  { id: 'overlap', question: 'Is there one right wording?', tone: 'cyan', x: 119 },
  { id: 'semantic', question: 'Does only the meaning matter?', tone: 'violet', x: 234 },
  { id: 'rubric', question: 'Is it a judgement call?', tone: 'amber', x: 349 },
]

const LABEL: Record<string, string> = Object.fromEntries(
  TRUST_SCORING_APPROACHES.map((approach) => [approach.id, approach.label])
)

const NODE_W = 107

/** SVG cannot wrap, so break on words at a width the node can hold. */
function wrap(text: string, maxChars: number): string[] {
  return text.split(' ').reduce<string[]>((lines, word) => {
    const last = lines[lines.length - 1]
    if (last && `${last} ${word}`.length <= maxChars) lines[lines.length - 1] = `${last} ${word}`
    else lines.push(word)
    return lines
  }, [])
}

/**
 * Which check settles which kind of question.
 *
 * Drawn as a branch from the question rather than a list of metrics, because
 * the approach follows from what you are asking, not from a metric taxonomy.
 */
export function TrustScoringTree({ className }: { className?: string }) {
  return (
    <TrustFigure
      eyebrow="Choosing a check"
      title="The question decides the check"
      className={className}
      caption="Start from what you are asking. Only the last branch needs a rubric, and only the first fails closed."
    >
      <TrustDiagramSvg
        viewBox="0 0 460 250"
        title="A branch from the question you are asking to the kind of check that settles it"
        description="Countable facts and rules are checked in code. One right wording is matched against a reference. Meaning alone is compared semantically. A judgement call needs a written rubric."
      >
        <TrustNode
          x={110}
          y={8}
          width={240}
          height={44}
          tone="stone"
          label="What are you asking about this output?"
          labelClassName="text-[12px]"
          leading={{ label: 14 }}
        />

        {BRANCHES.map((branch) => {
          const centerX = branch.x + NODE_W / 2
          return (
            <g key={branch.id}>
              {/* Down out of the root, across, then down into the top of the
                  child — an elbow would arrive sideways into its edge. */}
              <TrustEdge
                from={{ x: 230, y: 54 }}
                points={[
                  { x: 230, y: 68 },
                  { x: centerX, y: 68 },
                ]}
                to={{ x: centerX, y: 82 }}
              />
              <TrustNode
                x={branch.x}
                y={84}
                width={NODE_W}
                height={60}
                tone="stone"
                label={wrap(branch.question, 17)}
                labelClassName="text-[11px] font-medium"
                leading={{ label: 13 }}
              />
              <TrustEdge from={{ x: centerX, y: 146 }} to={{ x: centerX, y: 174 }} />
              <TrustNode
                x={branch.x}
                y={176}
                width={NODE_W}
                height={48}
                tone={branch.tone}
                label={wrap(LABEL[branch.id] ?? branch.id, 12)}
                labelClassName="text-[12px]"
                leading={{ label: 14 }}
              />
            </g>
          )
        })}
      </TrustDiagramSvg>
    </TrustFigure>
  )
}
