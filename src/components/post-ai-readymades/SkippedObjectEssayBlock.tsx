import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';

export function SkippedObjectEssayBlock() {
  const { skippedObject } = postAiReadymadesPage;

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
        Essay anchor
      </p>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
        {skippedObject.title}
      </h2>
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-[#111111] dark:text-neutral-200 sm:text-lg">
        {skippedObject.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <button
        type="button"
        disabled
        className="mt-8 inline-flex min-h-11 cursor-not-allowed items-center border border-[#dedede] px-4 py-2 text-sm font-medium text-[#777777] dark:border-neutral-700 dark:text-neutral-500"
      >
        Essay draft coming soon
      </button>
    </section>
  );
}
