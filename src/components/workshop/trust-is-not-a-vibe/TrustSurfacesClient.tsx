import Link from 'next/link'
import {
  TRUST_DECISION_CARD_HREF,
  TRUST_INSTRUCTOR_CLIPS,
  TRUST_PLACEHOLDERS,
  TRUST_REHEARSE_HREF,
  TRUST_SESSION_TITLE,
  TRUST_TITLE,
  type TrustPlaceholder,
  trustIncompleteRequired,
  trustOptionalStills,
  trustPlaceholderEntries,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustMissingStillBadge } from './TrustMissingStill'
import { TrustPlaceholderFrame } from './TrustPlaceholderFrame'
import { trust } from './trust-tokens'

export function TrustSurfacesClient() {
  const required = trustIncompleteRequired()
  const optional = trustOptionalStills()
  return (
    <main className={cn(trust.shell, 'pb-20 print:bg-white print:text-black')}>
      <style>{`@media print { header, footer, [data-site-chrome] { display: none !important; } }`}</style>
      <div className={trust.main}>
        <p className={trust.eyebrow}>Facilitator surfaces · not indexed</p>
        <h1 className={cn(trust.title, 'mt-2')}>{TRUST_SESSION_TITLE}</h1>
        <p className={cn(trust.body, 'mt-3 max-w-2xl')}>
          Full register for {TRUST_TITLE}. {required.length} required slots are unfinished. {optional.length} optional
          photographs are documentation only. Interactive votes, lenses, tokens, and controls stay the exercise.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={TRUST_REHEARSE_HREF} className={trust.link}>
            Back to rehearse
          </Link>
          <Link href={TRUST_DECISION_CARD_HREF} className={trust.link}>
            Participant decision card
          </Link>
        </div>
        <ol className="mt-10 space-y-8">
          {trustPlaceholderEntries().map(([key], index) => {
            const asset: TrustPlaceholder = TRUST_PLACEHOLDERS[key]
            return (
              <li key={key} className="break-inside-avoid">
                <p className={trust.label}>
                  {String(index + 1).padStart(2, '0')} · {asset.surfaceFilename}
                </p>
                <h2 className={cn(trust.h2, 'mt-1')}>{asset.label}</h2>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <TrustMissingStillBadge status={asset.status} filename={asset.surfaceFilename} />
                  <span className="text-[10px] uppercase tracking-wide text-stone-500">
                    {asset.kind}
                    {asset.required ? '' : ' · optional'}
                    {asset.reusedFrom ? ` · reused from ${asset.reusedFrom}` : ''}
                    {asset.composite ? ` · ${asset.composite} composite` : ''}
                  </span>
                </div>
                <div className="mt-3">
                  {key === 'instructorClips' ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {TRUST_INSTRUCTOR_CLIPS.map((clip) => (
                        <TrustInstructorClip key={clip.id} chapterId={clip.chapterId} />
                      ))}
                    </div>
                  ) : (
                    <TrustPlaceholderFrame asset={key} />
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </main>
  )
}
