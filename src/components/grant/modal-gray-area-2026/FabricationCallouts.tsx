import { ProposalFigure } from './ProposalFigure';
import { machineSentenceMedia } from '@/content/grants/modal-gray-area-2026/machine-sentence-media';

export const fabricationCalloutItems = [
  { n: 1, label: 'Raw-aluminum armature' },
  { n: 2, label: 'Integrated ballast base' },
  { n: 3, label: 'Large portrait display' },
  { n: 4, label: 'Medium landscape display' },
  { n: 5, label: 'Small near-square display' },
  { n: 6, label: 'Narrow vertical display' },
  { n: 7, label: 'Articulated screen cluster' },
  { n: 8, label: 'Pivot motor and encoder' },
  { n: 9, label: 'Civic-industrial enclosure' },
  { n: 10, label: 'Cable circulation' },
  { n: 11, label: 'Local controller' },
  { n: 12, label: 'Microphone input' },
  { n: 13, label: 'Central latent void' },
] as const;

export function FabricationCallouts() {
  return (
    <div className="space-y-10">
      <ProposalFigure media={machineSentenceMedia.explodedAnatomy} />
      <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
        {fabricationCalloutItems.map((item) => (
          <li key={item.n} className="flex gap-3 text-stone-700 dark:text-stone-300">
            <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-stone-800 dark:border-stone-200 text-[10px] font-semibold tabular-nums">
              {item.n}
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ol>

      <div className="grid sm:grid-cols-2 gap-8 items-start">
        <ProposalFigure media={machineSentenceMedia.rearInfrastructure} />
        <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed space-y-3">
          <p>
            The proposed sculpture separates its structural, computational, and moving systems. The outer
            aluminum cube provides a stable armature. Three articulated clusters carry seven displays of
            different proportions. Local controllers, motor drivers, power distribution, and ballast remain
            accessible inside the base.
          </p>
          <p>
            The final screen count, enclosure material, motor selection, and exact dimensions will be confirmed
            through engineering tests and the available production budget. The minimum version remains a complete
            sculpture even if the preferred seven-screen configuration must be reduced.
          </p>
        </div>
      </div>

      <ProposalFigure media={machineSentenceMedia.mechanicalDetail} />
    </div>
  );
}
