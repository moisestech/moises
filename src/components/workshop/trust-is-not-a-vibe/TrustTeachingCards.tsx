import type { TrustRoleId, TrustTeachingCard } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

export function TrustTeachingCards({
  cards,
  roleId,
}: {
  cards: readonly TrustTeachingCard[]
  roleId?: TrustRoleId | null
}) {
  if (cards.length === 0) return null

  return (
    <div className="space-y-3">
      {cards.map((card) => {
        const roleLine = roleId ? card.roleHint?.[roleId] : undefined
        return (
          <article
            key={card.id}
            className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
              {card.kind === 'contrast' ? 'Hold both' : card.kind === 'list' ? 'Field list' : card.kind === 'rule' ? 'Rule' : 'Definition'}
            </p>
            <h3 className="mt-1 text-sm font-bold text-stone-950 dark:text-stone-50">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{card.body}</p>
            {card.items ? (
              <dl
                className={cn(
                  'mt-3 grid gap-2',
                  card.items.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2'
                )}
              >
                {card.items.map((item) => (
                  <div key={item.label} className="rounded-lg bg-stone-50 px-3 py-2 dark:bg-stone-800/60">
                    <dt className="text-xs font-semibold text-stone-900 dark:text-stone-100">{item.label}</dt>
                    <dd className="mt-0.5 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{item.body}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {card.aside ? <p className="mt-3 text-xs leading-relaxed text-stone-500">{card.aside}</p> : null}
            {roleLine ? (
              <p className="mt-3 rounded-lg border border-cyan-200 bg-cyan-50/80 px-3 py-2 text-xs text-cyan-900 dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-100">
                {roleLine}
              </p>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}
