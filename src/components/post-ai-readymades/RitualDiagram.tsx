import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';

export function RitualDiagram() {
  const { ritualSteps, ritualLine } = postAiReadymadesPage;

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
        Daily ritual
      </p>
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
        One selection becomes an archive entry
      </h2>

      <div className="hidden md:block overflow-x-auto">
        <div className="flex min-w-max items-center gap-3">
          {ritualSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <div className="rounded-sm border border-[#dedede] bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-950">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111111] dark:text-neutral-100">
                  {step}
                </p>
              </div>
              {index < ritualSteps.length - 1 ? (
                <span className="font-mono text-sm text-[#777777] dark:text-neutral-500" aria-hidden>
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <ol className="md:hidden space-y-0">
        {ritualSteps.map((step, index) => (
          <li key={step} className="flex flex-col items-center">
            <div className="w-full rounded-sm border border-[#dedede] bg-white px-4 py-3 text-center dark:border-neutral-700 dark:bg-neutral-950">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111111] dark:text-neutral-100">
                {step}
              </p>
            </div>
            {index < ritualSteps.length - 1 ? (
              <span className="my-1 font-mono text-sm text-[#777777] dark:text-neutral-500" aria-hidden>
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-2xl border-l-2 border-[#111111] pl-4 text-base leading-relaxed text-[#111111] dark:border-neutral-200 dark:text-neutral-200 sm:text-lg">
        {ritualLine}
      </p>
    </section>
  );
}
