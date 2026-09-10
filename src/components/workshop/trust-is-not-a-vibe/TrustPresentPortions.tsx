'use client'

import {
  Children,
  Fragment,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { TrustEvalDiagram } from './TrustEvalDiagram'
import { TrustIdeaPortrait } from './TrustIdeaPortrait'
import { TrustIdeaScene } from './TrustIdeaScene'
import { useTrustPresentation } from './TrustPresentation'

function flattensPortions(type: unknown): boolean {
  if (type === Fragment || type === 'div' || type === 'section') return true
  return Boolean((type as { flattenPortions?: boolean } | null)?.flattenPortions)
}

/**
 * Turns a section's first-level children into presentation slides.
 *
 * A wrapping fragment or layout `div` is flattened so existing lesson markup
 * — three idea paragraphs, a caption plus a specimen — pages one block at a
 * time. Custom components stay a single slide. Self-paced reading still sees
 * every child at once.
 */
export function toTrustPortions(node: ReactNode): ReactNode[] {
  const items = Children.toArray(node).flatMap((item) => {
    if (isValidElement(item) && item.type === Fragment) {
      return Children.toArray((item.props as { children?: ReactNode }).children)
    }
    return [item]
  })
  if (items.length === 1 && isValidElement(items[0])) {
    const el = items[0]
    if (flattensPortions(el.type)) {
      const inner = Children.toArray((el.props as { children?: ReactNode }).children)
      if (inner.length > 1) return inner
    }
  }
  return items
}

/** A named wrapper so Present does not flatten intro + specimen into two slides. */
export function TrustKeepTogether({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

function isFigurePortion(node: ReactNode): boolean {
  if (!isValidElement(node)) return false
  if (node.type === TrustIdeaPortrait) return true
  if (node.type === TrustIdeaScene) return true
  if (node.type === TrustEvalDiagram) return true
  // See it / Try it keep the card at its own type. The prose 34ch measure
  // would crush claims and actions if it wrapped this slide.
  if (node.type === TrustKeepTogether) return true
  return Boolean((node.props as { 'data-trust-present-figure'?: boolean })['data-trust-present-figure'])
}

function TrustPortionIncoming({
  dir,
  children,
}: {
  dir: 1 | -1
  children: ReactNode
}) {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setOn(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      className={cn(
        'motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none',
        'motion-safe:transition-[transform,opacity] motion-safe:duration-300 motion-safe:ease-out',
        on ? 'translate-x-0 opacity-100' : dir === 1 ? 'translate-x-8 opacity-0' : '-translate-x-8 opacity-0'
      )}
    >
      {children}
    </div>
  )
}

function TrustPortionOutgoing({
  dir,
  children,
}: {
  dir: 1 | -1
  children: ReactNode
}) {
  const [off, setOff] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setOff(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-x-0 top-0',
        'motion-reduce:hidden',
        'motion-safe:transition-[transform,opacity] motion-safe:duration-300 motion-safe:ease-out',
        off
          ? dir === 1
            ? '-translate-x-8 opacity-0'
            : 'translate-x-8 opacity-0'
          : 'translate-x-0 opacity-100'
      )}
    >
      {children}
    </div>
  )
}

export function TrustPresentPortions({
  children,
  className,
  animate = false,
}: {
  children: ReactNode
  className?: string
  animate?: boolean
}) {
  const { present, portionIndex, registerPortions } = useTrustPresentation()
  const reduceMotion = useReducedMotion()
  const portions = toTrustPortions(children)
  const index = Math.min(Math.max(portionIndex, 0), Math.max(portions.length - 1, 0))
  const prevIndex = useRef(index)
  const [leave, setLeave] = useState<{ index: number; dir: 1 | -1 } | null>(null)

  useEffect(() => {
    if (!present) return
    registerPortions(portions.length)
  }, [present, portions.length, registerPortions])

  useEffect(() => {
    const previous = prevIndex.current
    if (previous === index) return
    const dir: 1 | -1 = index > previous ? 1 : -1
    prevIndex.current = index
    if (!animate || reduceMotion) {
      setLeave(null)
      return
    }
    setLeave({ index: previous, dir })
    const timer = window.setTimeout(() => setLeave(null), 320)
    return () => window.clearTimeout(timer)
  }, [animate, index, reduceMotion])

  if (!present || portions.length <= 1) {
    return <div className={cn(className, present && '[&>:first-child]:mt-0')}>{children}</div>
  }

  const figure = isFigurePortion(portions[index])
  const sliding = Boolean(animate && leave && !reduceMotion)

  return (
    <div
      className={cn(
        className,
        '[&>:first-child]:mt-0',
        figure && 'max-w-none text-base font-normal leading-normal',
        sliding && 'relative overflow-hidden'
      )}
      data-trust-present-prose={!figure || undefined}
      data-trust-present-figure={figure || undefined}
      data-trust-portion={index + 1}
      data-trust-portion-count={portions.length}
    >
      {sliding && leave ? (
        <TrustPortionOutgoing dir={leave.dir}>{portions[leave.index]}</TrustPortionOutgoing>
      ) : null}
      {sliding && leave ? (
        <TrustPortionIncoming dir={leave.dir}>{portions[index]}</TrustPortionIncoming>
      ) : (
        portions[index]
      )}
    </div>
  )
}
