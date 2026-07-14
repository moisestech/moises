import { GrantPlaceholderFigure } from '@/components/grant/shared/GrantProposalUi';
import {
  fabricationChecklist,
  machineSentencesPlaceholders,
} from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export function FabricationAnatomy() {
  return (
    <div className="space-y-8">
      <GrantPlaceholderFigure media={machineSentencesPlaceholders.fabricationExploded} />
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest mb-3">
          Prototype and testing plan
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
          {fabricationChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
