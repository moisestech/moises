'use client'

import { useState } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'
import {
  TRUST_CASE_A,
  TRUST_CONTROLS,
  TRUST_TRACE_STEPS,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_CONTROL_CLASS, TRUST_SCROLL_MT, TRUST_STAGE_CLASS } from './trust-tokens'

const FAILURE = new Map(TRUST_CASE_A.failures.map((failure) => [failure.id, failure]))
const CONTROL = new Map(TRUST_CONTROLS.map((control) => [control.id, control]))

/**
 * What a trace is, using the run the class already judged: request, retrieval,
 * tool call, permission gate, action. Every planted failure sits at a specific
 * step, which is the argument for tracing — "it went wrong" is not actionable,
 * "it went wrong at the permission gate" is.
 */
export function TrustTraceDiagram({ className }: { className?: string }) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <figure className={cn('m-0', className)}>
      <ol className="space-y-1.5">
        {TRUST_TRACE_STEPS.map((step, index) => {
          const open = openId === step.id
          const failure = step.failureId ? FAILURE.get(step.failureId) : undefined
          const control = CONTROL.get(step.control)
          return (
            <li key={step.id}>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : step.id)}
                className={cn(
                  'w-full rounded-xl border px-3 py-2.5 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                  TRUST_SCROLL_MT,
                  open
                    ? 'border-stone-400 bg-stone-50 dark:border-stone-500 dark:bg-stone-900/60'
                    : 'border-stone-200 bg-white hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900'
                )}
              >
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-space-mono text-[10px] text-stone-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-stone-950 dark:text-stone-50">{step.label}</span>
                  <span
                    className={cn(
                      'rounded-full border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                      TRUST_STAGE_CLASS[step.stage]
                    )}
                  >
                    {step.stage}
                  </span>
                  {failure ? (
                    <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-red-800 dark:text-red-300">
                      <HiOutlineExclamationCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      1 failure here
                    </span>
                  ) : null}
                </span>
                <span className="mt-1 block break-words font-space-mono text-xs text-stone-600 dark:text-stone-400">
                  {step.detail}
                </span>
              </button>

              {open ? (
                <div
                  className="mt-1.5 rounded-xl border border-stone-200 bg-white px-3 py-2.5 dark:border-stone-700 dark:bg-stone-900"
                  aria-live="polite"
                >
                  {failure ? (
                    <>
                      <p className="text-sm font-medium text-stone-950 dark:text-stone-50">{failure.label}</p>
                      <p className="mt-0.5 text-sm leading-snug text-stone-700 dark:text-stone-300">
                        {failure.detail}
                      </p>
                      <p className="mt-1 text-xs text-stone-500">
                        Plain: {failure.visible} · Technical: {failure.technical}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-stone-700 dark:text-stone-300">
                      Nothing failed here. It is on the trace so you can prove that.
                    </p>
                  )}
                  {control ? (
                    <p
                      className={cn(
                        'mt-2 inline-block rounded-full border px-2 py-0.5 text-xs font-medium',
                        TRUST_CONTROL_CLASS[control.id]
                      )}
                    >
                      Control that belongs here: {control.label}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </li>
          )
        })}
      </ol>
      <figcaption className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        A trace records each step of a run. Without one, a failure is a rumor.
      </figcaption>
    </figure>
  )
}
