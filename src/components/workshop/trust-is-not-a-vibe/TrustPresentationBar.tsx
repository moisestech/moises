'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import {
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePresentationChartBar,
  HiOutlineUsers,
  HiOutlineXMark,
} from 'react-icons/hi2'
import {
  TRUST_BASE,
  TRUST_CHAPTERS,
  TRUST_LEARN_BASE,
  TRUST_ROLES,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { useTrustPresentation } from './TrustPresentation'
import { TrustPresentationClock } from './TrustPresentationClock'
import { TRUST_COURSE_BAR_HEIGHT_VAR, TRUST_ROLE_TONE, trustPresentChrome } from './trust-tokens'
import { useTrustProgress } from './useTrustProgress'

/**
 * Always-visible course strip: the budgeted window for this page, a Present
 * button, and — once presenting — the room controls that used to live only
 * behind `?present=1`.
 *
 * Sticky under the site header and chapter subnav. In immersive mode those
 * two hide, so this bar also carries chapter jump and seat focus. Present
 * starts on All seats; a seat is optional.
 */
export function TrustPresentationBar({ className }: { className?: string }) {
  const {
    present,
    slug,
    enter,
    exit,
    steps,
    stepIndex,
    portionIndex,
    portionCount,
    armed,
    next,
    prev,
    depthOpen,
    setDepthOpen,
    transitionActive,
  } = useTrustPresentation()
  const chapterTitle = slug ? TRUST_CHAPTERS.find((chapter) => chapter.slug === slug)?.title : undefined
  const { progress, update, reset } = useTrustProgress()
  const barRef = useRef<HTMLElement | null>(null)
  const chrome = trustPresentChrome

  useEffect(() => {
    const node = barRef.current
    if (!node) return

    const publish = () => {
      const height = Math.round(node.getBoundingClientRect().height)
      if (height > 0) {
        document.documentElement.style.setProperty(TRUST_COURSE_BAR_HEIGHT_VAR, `${height}px`)
      }
    }

    publish()
    const observer = new ResizeObserver(publish)
    observer.observe(node)
    window.addEventListener('resize', publish)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', publish)
    }
  }, [present])

  return (
    <aside
      ref={barRef}
      aria-label={present ? 'Presentation controls' : 'Course clock'}
      className={cn(
        'sticky z-40 flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-stone-200 bg-stone-50/95 px-3 py-1.5 backdrop-blur dark:border-stone-700 dark:bg-stone-900/95',
        'top-[calc(var(--site-header-height,5rem)+var(--trust-subnav-height,3.5rem))]',
        className
      )}
    >
      <TrustPresentationClock slug={slug} />

      {present ? (
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={prev}
            className={cn(chrome.control, 'w-8 justify-center px-0')}
            aria-label="Previous section"
          >
            <HiOutlineChevronLeft className={chrome.icon} aria-hidden />
          </button>
          <p
            className={cn(
              'min-w-[6.5rem] text-center',
              armed ? 'text-xs font-medium leading-none text-amber-700 dark:text-amber-300' : chrome.label
            )}
          >
            {transitionActive
              ? (chapterTitle ?? 'Chapter')
              : steps.length === 0
                ? '—'
                : armed
                  ? 'End of chapter'
                  : (steps[Math.max(stepIndex, 0)]?.label ?? '—')}
            <span className={cn(chrome.meta, 'ml-1.5')}>
              {' '}
              {transitionActive || steps.length === 0
                ? ''
                : armed
                  ? 'press again'
                  : portionCount > 1
                    ? `${portionIndex + 1} / ${portionCount}`
                    : `${Math.max(stepIndex + 1, 1)} / ${steps.length}`}
            </span>
          </p>
          <span className="sr-only">
            {transitionActive
              ? ` ${chapterTitle ?? 'Chapter'}. Press the right arrow to open The idea.`
              : ` ${Math.max(stepIndex + 1, 1)} / ${steps.length} sections. Use the arrow keys to move between them.`}
          </span>
          <button
            type="button"
            onClick={next}
            className={cn(
              chrome.control,
              'w-8 justify-center px-0',
              armed && 'border-amber-500 text-amber-800 dark:border-amber-400 dark:text-amber-200'
            )}
            aria-label={armed ? 'Continue to the next chapter' : 'Next section'}
          >
            <HiOutlineChevronRight className={chrome.icon} aria-hidden />
          </button>
        </div>
      ) : null}

      {present ? <PresentChapterJump slug={slug} /> : null}
      {present ? <PresentSeatPicker roleId={progress.role} onPick={(role) => update({ role })} /> : null}

      <div className="ml-auto flex flex-wrap items-center gap-1.5">
        {present ? (
          <>
            <button
              type="button"
              onClick={() => setDepthOpen(!depthOpen)}
              aria-pressed={depthOpen}
              className={cn(chrome.control, depthOpen && chrome.current)}
            >
              {depthOpen ? 'Close depth' : 'Open depth'}
            </button>
            <button type="button" onClick={reset} className={chrome.control}>
              Reset
            </button>
            <button type="button" onClick={exit} className={chrome.control}>
              <HiOutlineXMark className={chrome.icon} aria-hidden />
              Exit
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              update({ role: null })
              enter()
            }}
            className={chrome.control}
          >
            <HiOutlinePresentationChartBar className={chrome.icon} aria-hidden />
            Present
          </button>
        )}
      </div>
    </aside>
  )
}

function PresentChapterJump({ slug }: { slug?: string }) {
  const [open, setOpen] = useState(false)
  const current = slug ? TRUST_CHAPTERS.find((chapter) => chapter.slug === slug) : null
  const label = current ? current.title : 'Overview'
  const chrome = trustPresentChrome

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button type="button" aria-label={`Chapter: ${label}`} className={chrome.control}>
          {label}
          <HiOutlineChevronDown className={chrome.icon} aria-hidden />
        </button>
      </PopoverPrimitive.Trigger>
      <PresentPopoverPanel className="w-56">
        <nav aria-label="Chapters" className="flex flex-col">
          <Link
            href={TRUST_BASE}
            aria-current={!slug ? 'page' : undefined}
            onClick={() => setOpen(false)}
            className={cn(chrome.item, 'no-underline', !slug && chrome.current)}
          >
            <span className={chrome.meta}>00</span>
            Overview
          </Link>
          {TRUST_CHAPTERS.map((chapter) => {
            const href = `${TRUST_LEARN_BASE}/${chapter.slug}`
            const currentChapter = slug === chapter.slug
            return (
              <Link
                key={chapter.id}
                href={href}
                aria-label={`Chapter ${chapter.number}: ${chapter.title}`}
                aria-current={currentChapter ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={cn(chrome.item, 'no-underline', currentChapter && chrome.current)}
              >
                <span className={chrome.meta}>{String(chapter.number).padStart(2, '0')}</span>
                {chapter.title}
              </Link>
            )
          })}
        </nav>
      </PresentPopoverPanel>
    </PopoverPrimitive.Root>
  )
}

function PresentSeatPicker({
  roleId,
  onPick,
}: {
  roleId: TrustRoleId | null
  onPick: (role: TrustRoleId | null) => void
}) {
  const [open, setOpen] = useState(false)
  const role = TRUST_ROLES.find((entry) => entry.id === roleId)
  const label = role ? role.label : 'All seats'
  const TriggerIcon = role ? ROLE_ICON[role.id] : HiOutlineUsers
  const chrome = trustPresentChrome

  const choose = (next: TrustRoleId | null) => {
    onPick(next)
    setOpen(false)
  }

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button type="button" aria-label={`Seat: ${label}`} className={chrome.control}>
          <TriggerIcon className={cn(chrome.icon, role && TRUST_ROLE_TONE[role.id].icon)} aria-hidden />
          {label}
          <HiOutlineChevronDown className={chrome.icon} aria-hidden />
        </button>
      </PopoverPrimitive.Trigger>
      <PresentPopoverPanel className="w-52">
        <div role="group" aria-label="Seat" className="flex flex-col">
          <button
            type="button"
            aria-pressed={!roleId}
            onClick={() => choose(null)}
            className={cn(chrome.item, !roleId && chrome.current)}
          >
            <HiOutlineUsers className={chrome.icon} aria-hidden />
            All seats
          </button>
          {TRUST_ROLES.map((entry) => {
            const Icon = ROLE_ICON[entry.id]
            const tone = TRUST_ROLE_TONE[entry.id]
            const active = roleId === entry.id
            return (
              <button
                key={entry.id}
                type="button"
                aria-pressed={active}
                onClick={() => choose(entry.id)}
                className={cn(chrome.item, active && cn(tone.wash, tone.text))}
              >
                <Icon className={cn(chrome.icon, tone.icon)} aria-hidden />
                {entry.label}
              </button>
            )
          })}
        </div>
      </PresentPopoverPanel>
    </PopoverPrimitive.Root>
  )
}

/** Stays in the course root so fullscreen presenting can still receive the click. */
function PresentPopoverPanel({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <PopoverPrimitive.Content
      align="start"
      sideOffset={4}
      className={cn(
        'z-50 rounded-md border border-stone-200 bg-stone-50 p-1 text-stone-900 shadow-md outline-none dark:border-stone-700 dark:bg-stone-900 dark:text-stone-50',
        className
      )}
    >
      {children}
    </PopoverPrimitive.Content>
  )
}
