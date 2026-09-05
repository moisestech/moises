'use client'

import {
  TRUST_ROLES,
  type TrustIdeaDiagramId,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { TrustDiagramSvg, TrustEdge, TrustFigure, TrustNode, type TrustDiagramTone } from './diagram'

type FlowNode = {
  label: string | string[]
  sub?: string | string[]
  tone: TrustDiagramTone
  shape?: 'rect' | 'pill'
}

const SEAT_TONE: Record<TrustRoleId, TrustDiagramTone> = {
  pm: 'blue',
  engineering: 'slate',
  design: 'violet',
  strategy: 'fuchsia',
}

function LinearFlowSvg({
  nodes,
  title,
  description,
  orientation,
}: {
  nodes: readonly FlowNode[]
  title: string
  description: string
  orientation: 'horizontal' | 'vertical'
}) {
  if (orientation === 'vertical') {
    const vW = 240
    const vH = 56
    const vPitch = 78
    const vPad = 16
    return (
      <TrustDiagramSvg
        viewBox={`0 0 ${vPad * 2 + vW} ${vPad + vH + (nodes.length - 1) * vPitch + 8}`}
        title={title}
        description={description}
      >
        {nodes.map((node, index) => {
          const x = vPad
          const y = 8 + index * vPitch
          return (
            <g key={`${toLines(node.label).join(' ')}-v-${index}`}>
              <TrustNode
                x={x}
                y={y}
                width={vW}
                height={vH}
                tone={node.tone}
                label={node.label}
                sub={node.sub}
                shape={node.shape}
                labelClassName="text-[13px]"
                subClassName="text-[10px]"
                leading={{ label: 15, sub: 12, gap: 2 }}
              />
              {index < nodes.length - 1 ? (
                <TrustEdge
                  from={{ x: x + vW / 2, y: y + vH + 2 }}
                  to={{ x: x + vW / 2, y: y + vPitch - 2 }}
                />
              ) : null}
            </g>
          )
        })}
      </TrustDiagramSvg>
    )
  }

  const hW = nodes.length >= 5 ? 104 : 132
  const hH = 68
  const hPitch = nodes.length >= 5 ? 122 : 156
  const hPad = 16
  return (
    <TrustDiagramSvg
      viewBox={`0 0 ${hPad * 2 + hW + (nodes.length - 1) * hPitch} ${hH + 32}`}
      title={title}
      description={description}
    >
      {nodes.map((node, index) => {
        const x = hPad + index * hPitch
        const y = 16
        return (
          <g key={`${toLines(node.label).join(' ')}-${index}`}>
            <TrustNode
              x={x}
              y={y}
              width={hW}
              height={hH}
              tone={node.tone}
              label={node.label}
              sub={node.sub}
              shape={node.shape}
              radius={node.shape === 'pill' ? hH / 2 : undefined}
              labelClassName={nodes.length >= 5 ? 'text-[13px]' : undefined}
              subClassName={nodes.length >= 5 ? 'text-[10px]' : undefined}
              leading={nodes.length >= 5 ? { label: 15, sub: 12, gap: 2 } : undefined}
            />
            {index < nodes.length - 1 ? (
              <TrustEdge
                from={{ x: x + hW + 4, y: y + hH / 2 }}
                to={{ x: x + hPitch - 4, y: y + hH / 2 }}
              />
            ) : null}
          </g>
        )
      })}
    </TrustDiagramSvg>
  )
}

function LinearIdeaFlow({
  nodes,
  title,
  description,
  caption,
  eyebrow,
}: {
  nodes: readonly FlowNode[]
  title: string
  description: string
  caption: string
  eyebrow: string
}) {
  return (
    <TrustFigure eyebrow={eyebrow} title={title} caption={caption}>
      <div className="hidden sm:block">
        <LinearFlowSvg nodes={nodes} title={title} description={description} orientation="horizontal" />
      </div>
      <div className="sm:hidden">
        <LinearFlowSvg nodes={nodes} title={title} description={description} orientation="vertical" />
      </div>
    </TrustFigure>
  )
}

function toLines(value: string | string[]): string[] {
  return Array.isArray(value) ? value : [value]
}

function PromptOutputDiagram() {
  return (
    <LinearIdeaFlow
      eyebrow="The system"
      title="A prompt becomes an output"
      description="A prompt enters an AI system and comes out as an output. The card in this chapter is that output."
      caption="The card is an output, not proof the system behind it is safe."
      nodes={[
        { label: 'Prompt', tone: 'violet' },
        { label: 'AI System', tone: 'rose' },
        { label: 'Output', sub: 'the card', tone: 'blue' },
      ]}
    />
  )
}

function FourTasksDiagram() {
  const output = { x: 16, y: 108, w: 148, h: 80 }
  const seatX = 280
  const seatW = 168
  const seatH = 56
  const seatPitch = 72
  const title = 'One output, four tasks'
  const description =
    'The same output is read as four tasks. Product, Engineering, Design, and Strategy each hold one behavior. You do not test everything at once.'

  return (
    <TrustFigure
      eyebrow="Four tasks"
      title={title}
      caption="You do not test everything at once. Each seat holds one behavior."
    >
      <div className="hidden sm:block">
        <TrustDiagramSvg viewBox="0 0 468 300" title={title} description={description}>
          <TrustNode
            x={output.x}
            y={output.y}
            width={output.w}
            height={output.h}
            tone="stone"
            label="Output"
            sub="the same card"
          />
          {TRUST_ROLES.map((role, index) => {
            const y = 12 + index * seatPitch
            return (
              <g key={role.id}>
                <TrustEdge
                  from={{ x: output.x + output.w + 4, y: output.y + output.h / 2 }}
                  to={{ x: seatX - 4, y: y + seatH / 2 }}
                />
                <TrustNode
                  x={seatX}
                  y={y}
                  width={seatW}
                  height={seatH}
                  tone={SEAT_TONE[role.id]}
                  label={role.label}
                  sub="one task"
                  labelClassName="text-[13px]"
                  subClassName="text-[10px]"
                  leading={{ label: 15, sub: 12, gap: 2 }}
                />
              </g>
            )
          })}
        </TrustDiagramSvg>
      </div>
      <div className="sm:hidden">
        <LinearFlowSvg
          nodes={[
            { label: 'Output', sub: 'the same card', tone: 'stone' },
            ...TRUST_ROLES.map((role) => ({
              label: role.label,
              sub: 'one task',
              tone: SEAT_TONE[role.id],
            })),
          ]}
          title={title}
          description={description}
          orientation="vertical"
        />
      </div>
    </TrustFigure>
  )
}

function OutputKindsDiagram() {
  const title = 'Open-ended output'
  const description =
    'An LLM produces text, code, or multi-step actions. There is often no single right answer, so a finished look can hide a planted break.'
  const kinds: FlowNode[] = [
    { label: 'Text', tone: 'stone' },
    { label: 'Code', tone: 'emerald' },
    { label: 'Actions', tone: 'amber' },
  ]

  return (
    <TrustFigure
      eyebrow="Open-ended"
      title={title}
      caption="Breaks hide in the open-ended result, not in the voice."
    >
      <div className="hidden sm:block">
        <TrustDiagramSvg viewBox="0 0 500 236" title={title} description={description}>
          <TrustNode x={16} y={82} width={132} height={72} tone="emerald" label="LLM" />
          <TrustEdge from={{ x: 152, y: 118 }} to={{ x: 196, y: 118 }} />
          <rect
            x={204}
            y={12}
            width={276}
            height={212}
            rx="12"
            className="fill-stone-50 stroke-stone-300 dark:fill-stone-950 dark:stroke-stone-600"
            strokeWidth="2"
          />
          <text
            x={342}
            y={36}
            textAnchor="middle"
            className="fill-stone-500 text-[11px] dark:fill-stone-400"
          >
            Output
          </text>
          {kinds.map((kind, index) => (
            <TrustNode
              key={toLines(kind.label).join(' ')}
              x={228}
              y={48 + index * 56}
              width={228}
              height={48}
              tone={kind.tone}
              label={kind.label}
              labelClassName="text-[13px]"
            />
          ))}
        </TrustDiagramSvg>
      </div>
      <div className="sm:hidden">
        <LinearFlowSvg
          nodes={[{ label: 'LLM', tone: 'emerald' }, ...kinds]}
          title={title}
          description={description}
          orientation="vertical"
        />
      </div>
    </TrustFigure>
  )
}

function EvalStepsDiagram() {
  return (
    <LinearIdeaFlow
      eyebrow="Three steps"
      title="Task, eval data, grader"
      description="An eval has three steps: define the task, collect eval data, and build a grader that scores the output."
      caption="One picture every seat can hold. The five-noun anatomy stays in Go deeper."
      nodes={[
        { label: 'Task', sub: 'one behavior', tone: 'blue' },
        { label: 'Eval data', sub: 'where it fails', tone: 'amber' },
        { label: 'Grader', sub: 'how you score', tone: 'violet' },
      ]}
    />
  )
}

function GraderScoreDiagram() {
  return (
    <LinearIdeaFlow
      eyebrow="The grader"
      title="Output becomes a score"
      description="A grader takes the system output and turns it into a score someone can act on."
      caption="The harness turns a write into a number a person can Allow, Ask, or Deny."
      nodes={[
        { label: 'Output', tone: 'blue' },
        { label: 'Grader', sub: 'code · model · human', tone: 'violet' },
        { label: 'Score', shape: 'pill', tone: 'emerald' },
      ]}
    />
  )
}

function TransferPipelineDiagram() {
  return (
    <LinearIdeaFlow
      eyebrow="The method"
      title="Same pipeline, new system"
      description="Input enters a system and becomes an output. An eval scores that output. The method transfers; the last case does not."
      caption="Recall of Case A is not the test. You only know by measuring on this case."
      nodes={[
        { label: 'Input', tone: 'stone' },
        { label: 'System', tone: 'rose' },
        { label: 'Output', tone: 'blue' },
        { label: 'Eval', tone: 'amber' },
        { label: 'Score', shape: 'pill', tone: 'emerald' },
      ]}
    />
  )
}

const DIAGRAM = {
  'prompt-output': PromptOutputDiagram,
  'four-tasks': FourTasksDiagram,
  'output-kinds': OutputKindsDiagram,
  'eval-steps': EvalStepsDiagram,
  'grader-score': GraderScoreDiagram,
  'transfer-pipeline': TransferPipelineDiagram,
} as const

export function TrustIdeaDiagram({
  id,
  className,
}: {
  id: TrustIdeaDiagramId
  className?: string
}) {
  const Diagram = DIAGRAM[id]
  return (
    <div data-trust-idea-diagram={id} className={className}>
      <Diagram />
    </div>
  )
}
