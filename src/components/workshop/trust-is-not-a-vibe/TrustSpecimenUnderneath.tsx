'use client'

import { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight, HiExclamationTriangle } from 'react-icons/hi2'
import type { TrustCase } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { usePresentationMode } from './TrustPresentation'
import { trustPresent, trustPresentChrome } from './trust-tokens'

function RequestBlock({
  call,
  present,
}: {
  call: TrustCase['runtime']['call']
  present?: boolean
}) {
  return (
    <div
      data-trust-specimen-request-frame
      className={cn(
        'rounded-lg bg-stone-950 dark:bg-black',
        present
          ? 'mt-2 min-h-0 flex-1 overflow-y-auto px-5 py-4'
          : 'mt-1.5 overflow-x-auto px-3 py-2.5'
      )}
    >
      <pre
        data-trust-specimen-request
        className={cn(
          'font-space-mono leading-relaxed text-stone-200',
          present ? 'text-xl leading-relaxed whitespace-pre-wrap break-words sm:text-2xl' : 'text-xs'
        )}
      >
        <code>
          <span className="text-cyan-300">{call.method}</span> {call.endpoint}
          {'\n{\n'}
          {call.body.map((field, index) => (
            <span key={field.key}>
              {'  '}
              <span className={field.contradicts ? 'text-amber-300' : 'text-stone-400'}>
                &quot;{field.key}&quot;
              </span>
              : <span className={field.contradicts ? 'text-amber-200' : 'text-stone-200'}>{field.value}</span>
              {index < call.body.length - 1 ? ',' : ''}
              {field.contradicts ? (
                <span className="text-amber-500/80">
                  {'  // contradicts '}
                  {field.contradicts.toLowerCase()}
                </span>
              ) : null}
              {'\n'}
            </span>
          ))}
          {'}'}
        </code>
      </pre>
    </div>
  )
}

function ScopeBlock({
  granted,
  missing,
  present,
  label,
  chip,
  missingChip,
}: {
  granted: readonly string[]
  missing: string[]
  present?: boolean
  label: string
  chip: string
  missingChip: string
}) {
  return (
    <section>
      <p className={label}>What it is allowed to do</p>
      <dl className={cn('grid sm:grid-cols-2', present ? 'mt-2 gap-3' : 'mt-1.5 gap-2')}>
        <div
          className={cn(
            'rounded-lg border border-stone-200 dark:border-stone-700',
            present ? 'px-4 py-3' : 'px-3 py-2'
          )}
        >
          <dt
            className={cn(
              'uppercase tracking-wide text-stone-500',
              present ? trustPresent.note : 'text-[10px]'
            )}
          >
            Granted
          </dt>
          <dd className={cn('flex flex-wrap', present ? 'mt-2 gap-1.5' : 'mt-1 gap-1')}>
            {granted.map((scope) => (
              <span key={scope} className={chip}>
                {scope}
              </span>
            ))}
          </dd>
        </div>
        <div
          className={cn(
            'rounded-lg border-2 border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40',
            present ? 'px-4 py-3' : 'px-3 py-2'
          )}
        >
          <dt
            className={cn(
              'uppercase tracking-wide text-amber-800 dark:text-amber-300',
              present ? trustPresent.note : 'text-[10px]'
            )}
          >
            This call needs, and does not have
          </dt>
          <dd className={cn('flex flex-wrap', present ? 'mt-2 gap-1.5' : 'mt-1 gap-1')}>
            {missing.map((scope) => (
              <span key={scope} className={missingChip}>
                {scope}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  )
}

function RecordNote({
  source,
  present,
  expandable,
}: {
  source: TrustCase['runtime']['sources'][number]
  present?: boolean
  expandable?: boolean
}) {
  const [open, setOpen] = useState(false)
  const body = (
    <>
      <span
        className={cn(
          'font-space-mono text-stone-500',
          present ? trustPresent.note : 'text-[11px]'
        )}
      >
        {source.record}
      </span>
      <span
        data-trust-specimen-record-body
        className={cn(
          'flex items-center gap-2 text-stone-800 dark:text-stone-200',
          present ? trustPresent.body : 'text-sm'
        )}
      >
        <HiExclamationTriangle
          data-trust-specimen-warning-icon
          className={cn(
            'shrink-0 text-amber-600 dark:text-amber-400',
            present ? 'h-8 w-8' : 'h-3.5 w-3.5'
          )}
          aria-hidden
        />
        <span className={cn(expandable && !open && 'line-clamp-3')}>{source.actual}</span>
      </span>
    </>
  )

  const frame = cn(
    'flex flex-col gap-y-1 rounded-lg bg-stone-50 text-left dark:bg-stone-800/60',
    present ? 'px-4 py-3' : 'px-3 py-2'
  )

  if (!expandable) {
    return (
      <li data-trust-specimen-record={source.record} className={cn(frame, 'flex-wrap items-baseline gap-x-2')}>
        {body}
      </li>
    )
  }

  return (
    <li data-trust-specimen-record={source.record}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={cn(frame, 'w-full transition hover:bg-stone-100 dark:hover:bg-stone-800')}
      >
        {body}
      </button>
    </li>
  )
}

/**
 * The machine layer of a specimen: the call the card would fire, the permission
 * it actually holds, and the records its claims rest on. Present pages records
 * one at a time so the layer stays inside the surface card.
 */
export function TrustSpecimenUnderneath({
  caseData,
  present: presentProp,
}: {
  caseData: TrustCase
  present?: boolean
}) {
  const { present: presentMode } = usePresentationMode()
  const present = presentProp ?? presentMode
  const { call, scopes, sources } = caseData.runtime
  const missing = scopes.required.filter((scope) => !scopes.granted.includes(scope))
  const [page, setPage] = useState(0)
  const lastPage = sources.length
  const onRequest = page === 0
  const focused = !onRequest ? sources[page - 1] : undefined

  const label = present
    ? cn(trustPresent.note, 'font-semibold uppercase tracking-wide text-stone-500')
    : 'text-[11px] font-semibold uppercase tracking-wide text-stone-500'
  const chip = present
    ? 'rounded bg-stone-100 px-2 py-1 font-space-mono text-base text-stone-700 sm:text-lg dark:bg-stone-800 dark:text-stone-300'
    : 'rounded bg-stone-100 px-1.5 py-0.5 font-space-mono text-[11px] text-stone-700 dark:bg-stone-800 dark:text-stone-300'
  const missingChip = present
    ? 'rounded bg-amber-100 px-2 py-1 font-space-mono text-base text-amber-900 sm:text-lg dark:bg-amber-900/60 dark:text-amber-100'
    : 'rounded bg-amber-100 px-1.5 py-0.5 font-space-mono text-[11px] text-amber-900 dark:bg-amber-900/60 dark:text-amber-100'

  useEffect(() => {
    if (!present || lastPage < 1) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented) return
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return
      const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown'
      const back = event.key === 'ArrowLeft' || event.key === 'ArrowUp'
      if (forward && page < lastPage) {
        event.preventDefault()
        setPage((current) => Math.min(current + 1, lastPage))
        return
      }
      if (back && page > 0) {
        event.preventDefault()
        setPage((current) => Math.max(current - 1, 0))
      }
    }

    window.addEventListener('keydown', onKeyDown, true)
    return () => window.removeEventListener('keydown', onKeyDown, true)
  }, [lastPage, page, present])

  if (present) {
    return (
      <div
        data-trust-specimen-underneath
        data-trust-specimen-record-page={page}
        data-trust-specimen-record-count={sources.length}
        data-trust-specimen-send-beat={onRequest ? 'request' : 'record'}
        className="flex h-full min-h-0 flex-col justify-between gap-4 overflow-hidden px-5 py-4"
      >
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {onRequest ? (
            <section className="flex min-h-0 flex-1 flex-col">
              <p className={label}>The request it would send</p>
              <RequestBlock call={call} present />
            </section>
          ) : (
            <section>
              <p className={label}>What the records actually say</p>
              {focused ? (
                <ul className="mt-2">
                  <RecordNote source={focused} present expandable />
                </ul>
              ) : null}
            </section>
          )}
        </div>

        {lastPage > 0 ? (
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <p className="flex items-center gap-1.5" aria-hidden>
              {Array.from({ length: lastPage + 1 }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={index === 0 ? 'The request' : `Record ${index}`}
                  aria-current={index === page || undefined}
                  onClick={() => setPage(index)}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full',
                    index === page ? 'bg-cyan-600 dark:bg-cyan-400' : 'bg-stone-300 dark:bg-stone-600'
                  )}
                />
              ))}
            </p>
            <p className={cn('font-space-mono tabular-nums text-stone-500', trustPresent.note)} aria-live="polite">
              {page + 1} / {lastPage + 1}
            </p>
            <div className="ml-auto flex gap-2">
              <button
                type="button"
                disabled={page === 0}
                onClick={() => setPage((current) => Math.max(current - 1, 0))}
                className={cn(trustPresentChrome.control, 'h-11 px-4 text-base disabled:opacity-40')}
              >
                <HiChevronLeft className="h-4 w-4" aria-hidden />
                Previous
              </button>
              <button
                type="button"
                disabled={page >= lastPage}
                onClick={() => setPage((current) => Math.min(current + 1, lastPage))}
                className={cn(trustPresentChrome.control, 'h-11 px-4 text-base disabled:opacity-40')}
              >
                {onRequest ? 'Next' : 'Next record'}
                <HiChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div data-trust-specimen-underneath className="space-y-3 px-3 py-3 sm:px-4">
      <section>
        <p className={label}>The request it would send</p>
        <RequestBlock call={call} />
      </section>

      <ScopeBlock
        granted={scopes.granted}
        missing={missing}
        label={label}
        chip={chip}
        missingChip={missingChip}
      />

      <section>
        <p className={label}>What the records actually say</p>
        <ul className="mt-1.5 space-y-1.5">
          {sources.map((source) => (
            <RecordNote key={source.record} source={source} />
          ))}
        </ul>
      </section>
    </div>
  )
}
