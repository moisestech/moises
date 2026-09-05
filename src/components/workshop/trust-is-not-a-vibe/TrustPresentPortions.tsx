'use client'

import {
  Children,
  Fragment,
  isValidElement,
  useEffect,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'
import { useTrustPresentation } from './TrustPresentation'

/**
 * Turns a section's first-level children into presentation slides.
 *
 * A wrapping fragment or layout `div` is flattened so existing lesson markup
 * — three idea paragraphs, a caption plus a specimen — pages one block at a
 * time. Custom components stay a single slide. Self-paced reading still sees
 * every child at once.
 */
export function toTrustPortions(node: ReactNode): ReactNode[] {
  const items = Children.toArray(node)
  if (items.length === 1 && isValidElement(items[0])) {
    const el = items[0]
    if (el.type === Fragment || el.type === 'div' || el.type === 'section') {
      const inner = Children.toArray((el.props as { children?: ReactNode }).children)
      if (inner.length > 1) return inner
    }
  }
  return items
}

export function TrustPresentPortions({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const { present, portionIndex, registerPortions } = useTrustPresentation()
  const portions = toTrustPortions(children)

  useEffect(() => {
    if (!present) return
    registerPortions(portions.length)
  }, [present, portions.length, registerPortions])

  if (!present || portions.length <= 1) {
    return <div className={className}>{children}</div>
  }

  const index = Math.min(Math.max(portionIndex, 0), portions.length - 1)

  return (
    <div
      className={cn(className)}
      data-trust-present-prose
      data-trust-portion={index + 1}
      data-trust-portion-count={portions.length}
    >
      {portions[index]}
    </div>
  )
}
