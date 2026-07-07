import { postAiReadymadesObjectFamilies } from '@/content/post-ai-readymades/postAiReadymades';

export function ObjectFamilies() {
  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
        Object families
      </p>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
        Intellectual structure
      </h2>
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-[#777777] dark:text-neutral-300">
        Families group studies by the kinds of objects, labor, and display conditions they stage.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {postAiReadymadesObjectFamilies.map((family) => (
          <div
            key={family.id}
            className="border border-[#dedede] bg-white p-4 dark:border-neutral-700 dark:bg-neutral-950"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold tracking-tight text-[#111111] dark:text-white">
                {family.title}
              </h3>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] dark:text-neutral-500">
                {family.studyCount === 0 ? '0 studies' : `${family.studyCount} ${family.studyCount === 1 ? 'study' : 'studies'}`}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#777777] dark:text-neutral-300">{family.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
