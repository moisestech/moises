import { TRUST_CHAPTERS } from '@/content/workshops/trust-is-not-a-vibe'
import { TrustDiagramSvg, TrustEdge, TrustFigure, TrustLegend, TrustNode, type TrustDiagramTone } from './diagram'

/** Which part of the eval cycle each chapter is actually teaching. */
const STAGE: Record<string, { stage: string; tone: TrustDiagramTone }> = {
  'looks-right': { stage: 'Decision', tone: 'amber' },
  'four-lenses': { stage: 'Criteria', tone: 'violet' },
  'seeded-failures': { stage: 'Cases', tone: 'rose' },
  'the-loop': { stage: 'Graders', tone: 'cyan' },
  'the-harness': { stage: 'Evidence', tone: 'teal' },
  transfer: { stage: 'Back to cases', tone: 'emerald' },
}

const NODE_W = 132
const NODE_H = 56
/** Columns leave a 24-unit gap, which an arrowhead needs to sit in cleanly. */
const COL_X = [8, 164, 320]
const ROW_Y = [30, 132]

/**
 * The six chapters laid out on the eval cycle, so the course reads as one loop
 * rather than six topics.
 *
 * A serpentine rather than a ring: a six-node ring puts labels at angles where
 * they collide, and this reflows legibly at phone widths.
 */
export function TrustCourseMap({ className }: { className?: string }) {
  // Top row left to right, bottom row right to left, so Transfer ends directly
  // below Looks Right and the return arrow is a short hop.
  const placed = TRUST_CHAPTERS.slice(0, 6).map((chapter, index) => {
    const row = index < 3 ? 0 : 1
    const column = row === 0 ? index : 5 - index
    return { chapter, x: COL_X[column], y: ROW_Y[row] }
  })

  return (
    <TrustFigure
      eyebrow="Course map"
      title="Six chapters, one eval cycle"
      className={className}
      caption="Each chapter teaches one part of the same cycle. Transfer starts it again on an unseen card."
      legend={
        <TrustLegend
          items={[
            { tone: 'rose', label: 'Cases', meaning: 'what we test on' },
            { tone: 'violet', label: 'Criteria', meaning: 'what good means' },
            { tone: 'cyan', label: 'Graders', meaning: 'who or what checks' },
            { tone: 'teal', label: 'Evidence', meaning: 'what the check produced' },
            { tone: 'amber', label: 'Decision', meaning: 'may it act' },
          ]}
        />
      }
    >
      <TrustDiagramSvg
        viewBox="0 0 460 220"
        title="The six chapters positioned on the evaluation cycle"
        description="Looks Right teaches the decision, Four Lenses the criteria, Seeded Failures the cases, The Loop the graders, The Harness the evidence, and Transfer returns to cases on a new card."
      >
        {placed.map(({ chapter, x, y }) => (
          <TrustNode
            key={chapter.id}
            x={x}
            y={y}
            width={NODE_W}
            height={NODE_H}
            tone={STAGE[chapter.id]?.tone ?? 'stone'}
            label={chapter.title}
            sub={STAGE[chapter.id]?.stage}
            labelClassName="text-[13px]"
            subClassName="text-[10px] uppercase tracking-wide"
            leading={{ label: 15, sub: 12, gap: 3 }}
          />
        ))}

        {/* Top row, left to right. */}
        <TrustEdge from={{ x: 142, y: 58 }} to={{ x: 160, y: 58 }} />
        <TrustEdge from={{ x: 298, y: 58 }} to={{ x: 316, y: 58 }} />
        {/* Down the right column into the bottom row. */}
        <TrustEdge from={{ x: 386, y: 88 }} to={{ x: 386, y: 128 }} />
        {/* Bottom row, right to left. */}
        <TrustEdge from={{ x: 316, y: 160 }} to={{ x: 298, y: 160 }} />
        <TrustEdge from={{ x: 160, y: 160 }} to={{ x: 142, y: 160 }} />
        {/*
          Transfer back up to the start. It runs in the gap between the rows,
          where Transfer already sits directly below Looks Right, rather than
          bowing around the outside and crossing both boxes.
        */}
        <TrustEdge from={{ x: 74, y: 128 }} to={{ x: 74, y: 90 }} dashed />
      </TrustDiagramSvg>
    </TrustFigure>
  )
}
