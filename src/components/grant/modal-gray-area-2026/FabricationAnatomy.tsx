import { machineSentenceFabrication } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';
import { GrantPlaceholderFigure } from '@/components/grant/shared/GrantProposalUi';

export function FabricationAnatomy() {
  return (
    <div className="space-y-8">
      <GrantPlaceholderFigure
        media={{
          label: '[PLACEHOLDER] Fabrication anatomy — exploded lattice',
          caption:
            'Weighted base, aluminum cube, three clusters, housings, pivots, controller, cable loom. Procurement only after selection.',
          alt: 'Placeholder exploded fabrication anatomy for Machine Sentence No. 1',
        }}
      />
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest mb-3">Prototype and testing plan</h3>
        <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
          {machineSentenceFabrication.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
