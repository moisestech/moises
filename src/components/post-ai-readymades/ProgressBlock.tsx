import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';

export function ProgressBlock() {
  const { review } = postAiReadymadesPage;
  const progressPercent = Math.round((review.entriesArchived / review.totalEntries) * 100);

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
        60-day review
      </p>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
        {review.title}
      </h2>
      <p className="mb-8 max-w-3xl text-base leading-relaxed text-[#111111] dark:text-neutral-200">
        {review.intro}
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="border border-[#dedede] bg-white p-5 dark:border-neutral-700 dark:bg-neutral-950">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
            Entries archived
          </p>
          <p className="mb-4 text-3xl font-semibold tracking-tight text-[#111111] dark:text-white">
            {String(review.entriesArchived).padStart(3, '0')} / {review.totalEntries}
          </p>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#f0eeea] dark:bg-neutral-800">
            <div
              className="h-full bg-[#111111] dark:bg-neutral-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] dark:text-neutral-500">
            First review at {review.firstReviewAt} entries
          </p>
        </div>

        <div className="border border-[#dedede] bg-white p-5 dark:border-neutral-700 dark:bg-neutral-950">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
            Website prototype target
          </p>
          <p className="mb-6 text-lg font-medium text-[#111111] dark:text-white">{review.websitePrototypeTarget}</p>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
            Review buckets
          </p>
          <ul className="space-y-2">
            {review.buckets.map((bucket) => (
              <li
                key={bucket}
                className="border border-[#dedede] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#111111] dark:border-neutral-700 dark:text-neutral-200"
              >
                {bucket}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
