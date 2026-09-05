import { HiOutlineCheck } from 'react-icons/hi2'
import {
  TRUST_ROLES,
  TRUST_SEAT_COVERAGE,
  TRUST_SEAT_COVERAGE_LINE,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustFigure } from './diagram'
import { TRUST_ROLE_TONE } from './trust-tokens'

/**
 * Which seat notices which planted failure.
 *
 * A coverage matrix rather than a Venn: four overlapping sets cannot be drawn
 * without unreadable regions, and the useful reading here is per row — how many
 * seats catch this, and which ones.
 */
export function TrustSeatCoverage({ className }: { className?: string }) {
  return (
    <TrustFigure
      eyebrow="Coverage"
      title="What each seat catches"
      className={className}
      caption={TRUST_SEAT_COVERAGE_LINE}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <caption className="sr-only">
            Planted failures in rows, seats in columns, with a check where that seat notices the failure first.
          </caption>
          <thead>
            <tr>
              <th scope="col" className="pb-2 text-[10px] font-semibold uppercase tracking-wide text-stone-500">
                Planted failure
              </th>
              {TRUST_ROLES.map((role) => (
                <th
                  key={role.id}
                  scope="col"
                  className={cn(
                    'pb-2 text-center text-[10px] font-semibold uppercase tracking-wide',
                    TRUST_ROLE_TONE[role.id].text
                  )}
                >
                  {role.label}
                </th>
              ))}
              <th scope="col" className="pb-2 text-center text-[10px] font-semibold uppercase tracking-wide text-stone-500">
                Seats
              </th>
            </tr>
          </thead>
          <tbody>
            {TRUST_SEAT_COVERAGE.map((row) => {
              // Two seats is the thin case: lose one and the failure ships.
              const thin = row.seats.length <= 2
              return (
                <tr key={row.failureId} className="border-t border-stone-200 dark:border-stone-700">
                  <th scope="row" className="py-2 pr-3 align-top font-normal">
                    <span className="block text-sm font-semibold text-stone-900 dark:text-stone-100">
                      {row.label}
                    </span>
                    <span className="block text-xs text-stone-500 dark:text-stone-400">{row.because}</span>
                  </th>
                  {TRUST_ROLES.map((role) => {
                    const catches = row.seats.includes(role.id as TrustRoleId)
                    return (
                      <td key={role.id} className="py-2 text-center align-middle">
                        {catches ? (
                          <>
                            <HiOutlineCheck
                              className={cn('mx-auto h-4 w-4', TRUST_ROLE_TONE[role.id].icon)}
                              aria-hidden
                            />
                            <span className="sr-only">{role.label} catches this</span>
                          </>
                        ) : (
                          <>
                            <span aria-hidden className="text-stone-300 dark:text-stone-600">
                              ·
                            </span>
                            <span className="sr-only">{role.label} does not</span>
                          </>
                        )}
                      </td>
                    )
                  })}
                  <td className="py-2 text-center align-middle">
                    <span
                      className={cn(
                        'inline-flex min-w-[1.75rem] justify-center rounded-full border px-1.5 py-0.5 text-xs font-semibold',
                        thin
                          ? 'border-amber-400/60 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200'
                          : 'border-stone-300 text-stone-600 dark:border-stone-600 dark:text-stone-300'
                      )}
                    >
                      {row.seats.length}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-stone-500 dark:text-stone-400">
        Amber marks a failure only two seats catch. Those are the ones a smaller room misses.
      </p>
    </TrustFigure>
  )
}
