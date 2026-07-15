import Link from 'next/link';
import { MachineSentencePrototype } from '@/components/grant/modal-gray-area-2026/MachineSentencePrototype';
import { machineSentencesModalLink } from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

/**
 * Residency-specific wrapper around the existing Modal Machine Sentence prototype.
 * No second scoring system — frames the demo as a digital movement/composition study.
 */
export function MachineSentenceDigitalStudy() {
  return (
    <div className="space-y-6">
      <div className="border border-[#c4beb4] dark:border-stone-700 p-4 sm:p-5 bg-white/60 dark:bg-black/30">
        <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">
          Digital movement and composition study — physical hardware not connected
        </p>
        <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          The interactive study below reuses the existing Machine Sentence body-score prototype in
          deterministic mock mode. Physical hardware is not connected. This Pioneer Works application
          does not depend on Modal deployment. Modal endpoint failure cannot break this page when mock
          mode is selected.
        </p>
        <p className="mt-3 text-sm text-stone-500">
          Parallel commission context:{' '}
          <Link href={machineSentencesModalLink.proposalHref} className="underline underline-offset-4">
            Modal × Gray Area / Machine Sentence No. 1
          </Link>
        </p>
      </div>
      <MachineSentencePrototype />
    </div>
  );
}
