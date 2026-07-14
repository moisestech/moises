import { machineSentenceFastSlow } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';

export function FastSlowArchitecture() {
  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="border border-stone-200 dark:border-stone-700 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-3 text-[#3d5a3a] dark:text-[#a3be8c]">
            Fast path — body inference
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-700 dark:text-stone-300">
            {machineSentenceFastSlow.fast.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="border border-stone-200 dark:border-stone-700 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-3">Slow path — visual skin</h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-700 dark:text-stone-300">
            {machineSentenceFastSlow.slow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{machineSentenceFastSlow.note}</p>
    </div>
  );
}
