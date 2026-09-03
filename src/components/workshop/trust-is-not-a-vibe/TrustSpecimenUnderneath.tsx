import { HiExclamationTriangle } from 'react-icons/hi2'
import type { TrustCase } from '@/content/workshops/trust-is-not-a-vibe'

/**
 * The machine layer of a specimen: the call the card would fire, the permission
 * it actually holds, and the records its claims rest on. Fields that undermine a
 * surface claim are marked, so the contradiction is visible rather than described.
 */
export function TrustSpecimenUnderneath({ caseData }: { caseData: TrustCase }) {
  const { call, scopes, sources } = caseData.runtime
  const missing = scopes.required.filter((scope) => !scopes.granted.includes(scope))

  return (
    <div className="space-y-3 px-3 py-3 sm:px-4">
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
          The request it would send
        </p>
        <div className="mt-1.5 overflow-x-auto rounded-lg bg-stone-950 px-3 py-2.5 dark:bg-black">
          <pre className="font-space-mono text-xs leading-relaxed text-stone-200">
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
      </section>

      <section>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
          What it is allowed to do
        </p>
        <dl className="mt-1.5 grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-stone-200 px-3 py-2 dark:border-stone-700">
            <dt className="text-[10px] uppercase tracking-wide text-stone-500">Granted</dt>
            <dd className="mt-1 flex flex-wrap gap-1">
              {scopes.granted.map((scope) => (
                <span
                  key={scope}
                  className="rounded bg-stone-100 px-1.5 py-0.5 font-space-mono text-[11px] text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                >
                  {scope}
                </span>
              ))}
            </dd>
          </div>
          <div className="rounded-lg border-2 border-amber-300 bg-amber-50 px-3 py-2 dark:border-amber-800 dark:bg-amber-950/40">
            <dt className="text-[10px] uppercase tracking-wide text-amber-800 dark:text-amber-300">
              This call needs, and does not have
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1">
              {missing.map((scope) => (
                <span
                  key={scope}
                  className="rounded bg-amber-100 px-1.5 py-0.5 font-space-mono text-[11px] text-amber-900 dark:bg-amber-900/60 dark:text-amber-100"
                >
                  {scope}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <section>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
          What the records actually say
        </p>
        <ul className="mt-1.5 space-y-1.5">
          {sources.map((source) => (
            <li
              key={source.record}
              className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 rounded-lg bg-stone-50 px-3 py-2 dark:bg-stone-800/60"
            >
              <span className="font-space-mono text-[11px] text-stone-500">{source.record}</span>
              <span className="flex items-center gap-1 text-sm text-stone-800 dark:text-stone-200">
                <HiExclamationTriangle className="h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
                {source.actual}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
