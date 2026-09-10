'use client'

import { Fragment, isValidElement, useEffect, useState, type ReactNode } from 'react'
import {
  getTrustLessonPacket,
  getTrustRole,
  TRUST_ROLE_STANCE,
  type TrustChapterId,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustChapterFrame } from './TrustChapterFrame'
import { TrustGoDeeper } from './TrustGoDeeper'
import { TrustPageContents, TrustPageRail } from './TrustPageRail'
import { TrustPresentPortions } from './TrustPresentPortions'
import { useRegisterTrustStep, useTrustPresentation } from './TrustPresentation'
import { ROLE_ICON } from './TrustSeatSection'
import { highlightIdeaTerms, IdeaTermsProvider } from './TrustIdeaCopy'
import { TrustIdeaDiagram } from './TrustIdeaDiagrams'
import { TrustRoleCheck } from './TrustRoleCheck'
import { TrustIdeaQuote } from './TrustIdeaQuote'
import { TrustIdeaScene } from './TrustIdeaScene'
import { TrustIdeaStill } from './TrustIdeaStill'
import { trustTryHintPortions } from './TrustSeatStance'
import {
  TRUST_ROLE_TONE,
  TRUST_SCROLL_MT,
  trustIdea,
  trustLesson,
  trustPanelIdle,
  trustPanelOpen,
  trustPresent,
} from './trust-tokens'

/** Lets Check it page a lesson fragment beside the seat question. */
function unwrapFragment(node: ReactNode): ReactNode {
  if (isValidElement(node) && node.type === Fragment) {
    return (node.props as { children?: ReactNode }).children
  }
  return node
}

function PortionDots({ count, index }: { count: number; index: number }) {
  if (count <= 1) return null
  return (
    <p className="mt-3 flex items-center gap-1.5" aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={cn(
            'h-2 w-2 rounded-full',
            i === index ? 'bg-cyan-600 dark:bg-cyan-400' : 'bg-stone-300 dark:bg-stone-600'
          )}
        />
      ))}
    </p>
  )
}

function PacketStep({
  step,
  label,
  deck,
  hint,
  className,
  portionsClassName,
  children,
}: {
  step: number
  label: string
  deck?: string
  hint?: ReactNode
  className?: string
  portionsClassName?: string
  children: ReactNode
}) {
  const { ref, current, focused, select } = useRegisterTrustStep(label)
  const { present, portionIndex, portionCount } = useTrustPresentation()

  return (
    <section
      data-trust-panel-open={focused || undefined}
      hidden={present && !focused}
      className={cn(
        'rounded-lg border-l-4',
        focused ? cn(trustPanelOpen, 'border-l-cyan-600') : cn(trustPanelIdle, 'border-l-transparent'),
        current && focused && 'ring-cyan-500',
        present && !focused && 'hidden',
        className
      )}
    >
      <button
        ref={ref}
        type="button"
        tabIndex={-1}
        data-trust-step
        data-trust-step-current={current || undefined}
        aria-expanded={focused}
        onClick={select}
        className={cn(
          'flex w-full flex-col items-start px-3 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset',
          present && 'px-5 py-5 sm:px-8 sm:py-6',
          TRUST_SCROLL_MT
        )}
      >
            <p
              className={
                present
                  ? 'font-space-mono text-lg uppercase tracking-[0.2em] text-stone-500'
                  : trustLesson.eyebrow
              }
            >
              {step}
            </p>
        <p className={cn(present ? trustPresent.title : trustLesson.title, 'mt-1')}>{label}</p>
        {deck && !focused ? (
          <p className={present ? trustPresent.deck : trustLesson.deck}>{deck}</p>
        ) : null}
        {present && focused ? <PortionDots count={portionCount} index={portionIndex} /> : null}
      </button>
      {focused ? (
        <div
          className={cn(
            'border-t border-cyan-200 px-3 py-3 dark:border-cyan-900',
            present && 'px-5 py-6 sm:px-8 sm:py-8'
          )}
        >
          {hint}
          <TrustPresentPortions className={portionsClassName}>{children}</TrustPresentPortions>
        </div>
      ) : null}
    </section>
  )
}

/**
 * The repeatable chapter packet. One portion is open at a time. The left rail
 * and the presentation arrows share the same step list. Seat, job, and do-now
 * live in a closed accordion above The idea so a chapter opens on the claim.
 */
export function TrustLessonPacket({
  chapterId,
  where,
  idea,
  ideaBody,
  ideaFigure,
  ideaLandscape,
  seeIt,
  seeCaption,
  tryIt,
  tryCaption,
  checkIt,
  checkCaption,
  checkPortionsClassName,
  roleCheckAfter = false,
  job,
  doNow,
  doneWhen,
  seat,
  roleId,
  roleCheckChoice,
  onRoleCheck,
  deeper,
  deeperHint,
  announce,
  hideTryHint,
}: {
  chapterId: TrustChapterId
  where: string
  idea: string
  /** Richer idea copy. When omitted, packet paragraphs or `idea` are used. */
  ideaBody?: ReactNode
  /** Right-column figure for The idea. Replaces `ideaStill` when passed. */
  ideaFigure?: ReactNode
  /**
   * Landscape teaching diagram after the claim. Pages as its own Present
   * portion. Does not replace the vertical idea portrait.
   */
  ideaLandscape?: ReactNode
  seeIt: ReactNode
  seeCaption?: string
  tryIt: ReactNode
  tryCaption?: string
  checkIt?: ReactNode
  checkCaption?: string
  /** Self-paced stack gap for Check it. Present still pages one child. */
  checkPortionsClassName?: string
  /**
   * Default keeps the seat question first. Seeded Failures pages teaching
   * first (diagram / portrait) and puts the check last.
   */
  roleCheckAfter?: boolean
  job: ReactNode
  doNow: string
  doneWhen: string
  seat?: ReactNode
  roleId?: TrustRoleId | null
  roleCheckChoice?: string | null
  onRoleCheck?: (choice: string) => void
  deeper?: ReactNode
  deeperHint?: string
  announce?: string
  /** When the Try it body already holds the seat hint (card stage). */
  hideTryHint?: boolean
}) {
  const { ref: ideaRef, current: ideaCurrent, focused: ideaFocused, select: selectIdea } =
    useRegisterTrustStep('The idea')
  const { present, focusIndex, releaseFocus, depthOpen, portionIndex, portionCount, transitionActive } =
    useTrustPresentation()
  const [briefOpen, setBriefOpen] = useState(false)
  const role = getTrustRole(roleId ?? null)
  const packetMeta = getTrustLessonPacket(chapterId)
  const SeatIcon = role ? ROLE_ICON[role.id] : null
  const ideaSentences = packetMeta?.ideaParagraphs ?? [idea]
  const showingIdeaDiagram = Boolean(
    present &&
      ideaFocused &&
      (ideaLandscape || packetMeta?.ideaDiagram) &&
      portionIndex >= ideaSentences.length
  )
  const roleCheck = (
    <TrustRoleCheck
      roleId={roleId ?? null}
      check={roleId ? packetMeta?.roleChecks[roleId] : undefined}
      choice={roleCheckChoice ?? null}
      onPick={onRoleCheck}
    />
  )

  useEffect(() => {
    if (focusIndex >= 0) setBriefOpen(false)
  }, [focusIndex])

  const toggleBrief = () => {
    if (briefOpen) {
      setBriefOpen(false)
      selectIdea()
      return
    }
    setBriefOpen(true)
    releaseFocus()
  }

  return (
    <div
      className={cn(
        'lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-x-10',
        present && transitionActive && 'hidden'
      )}
    >
      <TrustPageRail />
      <div
        className={cn('min-w-0', !present && 'space-y-3')}
        data-trust-deck
        hidden={(present && transitionActive) || undefined}
      >
        {present ? null : <TrustPageContents className="mb-4" />}

        <section
          data-trust-panel-open={briefOpen || undefined}
          hidden={present && !briefOpen}
          className={cn(
            'rounded-lg border-l-4',
            briefOpen ? cn(trustPanelOpen, 'border-l-cyan-600') : cn(trustPanelIdle, 'border-l-transparent'),
            present && !briefOpen && 'hidden'
          )}
        >
          <button
            type="button"
            data-trust-brief
            aria-expanded={briefOpen}
            onClick={toggleBrief}
            className={cn(
              'flex w-full flex-col items-start px-3 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset',
              TRUST_SCROLL_MT
            )}
          >
            <p className={cn(trustLesson.eyebrow, role && TRUST_ROLE_TONE[role.id].text)}>
              {role ? 'Your seat' : 'On this chapter'}
            </p>
            <p className={cn(trustLesson.title, 'mt-1 inline-flex items-center gap-2', role && TRUST_ROLE_TONE[role.id].text)}>
              {role && SeatIcon ? (
                <SeatIcon className={cn('h-6 w-6', TRUST_ROLE_TONE[role.id].icon)} aria-hidden />
              ) : null}
              {role ? role.label : 'Your seat'}
            </p>
            {briefOpen ? null : (
              <p className={trustLesson.deck}>{role ? TRUST_ROLE_STANCE[role.id] : 'Seat, job, and what to do now'}</p>
            )}
          </button>
          {briefOpen ? (
            <div className="border-t border-stone-200 px-3 py-3 dark:border-stone-700">
              {seat ? <div className="mb-3">{seat}</div> : null}
              <TrustChapterFrame
                compact
                hideWhereGoal
                where={where}
                goal={idea}
                job={job}
                doNow={doNow}
                doneWhen={doneWhen}
              />
            </div>
          ) : null}
        </section>

        <section
          data-trust-panel-open={ideaFocused || undefined}
          hidden={present && !ideaFocused}
          className={cn(
            'rounded-lg border-l-4',
            ideaFocused
              ? cn(trustPanelOpen, 'border-l-cyan-600 bg-stone-50 dark:bg-stone-950/40')
              : cn(trustPanelIdle, 'border-l-transparent'),
            ideaCurrent && ideaFocused && 'ring-cyan-500',
            present && !ideaFocused && 'hidden'
          )}
        >
          <button
            ref={ideaRef}
            type="button"
            tabIndex={-1}
            data-trust-step
            data-trust-step-current={ideaCurrent || undefined}
            aria-expanded={ideaFocused}
            onClick={selectIdea}
            className={cn(
              'flex w-full flex-col items-start px-4 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset',
              present && 'px-5 py-5 sm:px-8 sm:py-6',
              TRUST_SCROLL_MT
            )}
          >
            <p className={trustLesson.eyebrow}>{where}</p>
            <p className={cn(present ? trustPresent.title : trustIdea.title, 'mt-1')}>The idea</p>
            {present && ideaFocused ? <PortionDots count={portionCount} index={portionIndex} /> : null}
          </button>
          {ideaFocused ? (
            <div
              className={cn(
                'border-t border-stone-300 px-4 py-4 dark:border-stone-600',
                present && 'px-5 py-6 sm:px-8 sm:py-8'
              )}
            >
              <div
                className={cn(
                  'gap-6',
                  showingIdeaDiagram ||
                    packetMeta?.ideaStills ||
                    (ideaLandscape && !present) ||
                    (!ideaFigure && !packetMeta?.ideaStill)
                    ? 'block'
                    : 'md:grid md:grid-cols-[minmax(0,1fr)_min(20rem,38%)] md:items-start'
                )}
              >
                <div className={present || packetMeta?.ideaStills ? undefined : trustIdea.body}>
                  <IdeaTermsProvider>
                    <TrustPresentPortions
                      className={cn(
                        'space-y-4',
                        present && !showingIdeaDiagram && !packetMeta?.ideaStills && trustPresent.body
                      )}
                    >
                      {ideaLandscape && ideaFigure && !present && !ideaBody && !packetMeta?.ideaStills ? (
                        <div className="md:grid md:grid-cols-[minmax(0,1fr)_min(20rem,38%)] md:items-start md:gap-6">
                          <div className={cn('space-y-4', trustIdea.body)}>
                            {ideaSentences.map((paragraph) => (
                              <p key={paragraph.slice(0, 40)}>
                                {highlightIdeaTerms(paragraph, packetMeta?.ideaTerms ?? [])}
                              </p>
                            ))}
                          </div>
                          {ideaFigure}
                        </div>
                      ) : (
                        ideaBody ??
                        ideaSentences.map((paragraph, index) => {
                          const still = packetMeta?.ideaStills?.[index]
                          const copy = (
                            <p>{highlightIdeaTerms(paragraph, packetMeta?.ideaTerms ?? [])}</p>
                          )
                          return still ? (
                            <TrustIdeaScene key={still.id} still={still} priority={index === 0}>
                              {copy}
                            </TrustIdeaScene>
                          ) : (
                            <p
                              key={paragraph.slice(0, 40)}
                              className={cn(!present && packetMeta?.ideaStills && trustIdea.body)}
                            >
                              {highlightIdeaTerms(paragraph, packetMeta?.ideaTerms ?? [])}
                            </p>
                          )
                        })
                      )}
                      {ideaLandscape}
                      {packetMeta?.ideaDiagram ? (
                        <div data-trust-present-figure>
                          <TrustIdeaDiagram id={packetMeta.ideaDiagram} />
                        </div>
                      ) : null}
                      {packetMeta?.ideaQuote ? <TrustIdeaQuote quote={packetMeta.ideaQuote} /> : null}
                    </TrustPresentPortions>
                  </IdeaTermsProvider>
                </div>
                {(ideaFigure || packetMeta?.ideaStill) &&
                !packetMeta?.ideaStills &&
                !showingIdeaDiagram &&
                !(ideaLandscape && !present) ? (
                  ideaFigure ?? (
                    <TrustIdeaStill asset={packetMeta!.ideaStill!} className="mt-5 md:mt-0" />
                  )
                ) : null}
              </div>
            </div>
          ) : null}
        </section>

        <PacketStep step={2} label="See it" deck={seeCaption}>
          {seeIt}
        </PacketStep>

        <PacketStep
          step={3}
          label="Try it"
          deck={tryCaption}
          portionsClassName={!hideTryHint ? 'space-y-6' : undefined}
        >
          <>
            {hideTryHint
              ? null
              : trustTryHintPortions({
                  roleId: roleId ?? null,
                  signal: roleId ? packetMeta?.roleSignals[roleId] : undefined,
                  present,
                })}
            {tryIt}
          </>
        </PacketStep>

        <PacketStep
          step={4}
          label="Check it"
          deck={checkCaption ?? 'One question for your seat.'}
          portionsClassName={checkPortionsClassName ?? 'space-y-6'}
        >
          {roleCheckAfter ? (
            <>
              {unwrapFragment(checkIt)}
              {roleCheck}
            </>
          ) : (
            <>
              {roleCheck}
              {checkIt}
            </>
          )}
        </PacketStep>

        {announce ? (
          <div className="sr-only" aria-live="polite">
            {announce}
          </div>
        ) : null}

        {deeper ? (
          <div className={present && !depthOpen ? 'hidden' : undefined}>
            <TrustGoDeeper hint={deeperHint}>{deeper}</TrustGoDeeper>
          </div>
        ) : null}
      </div>
    </div>
  )
}
