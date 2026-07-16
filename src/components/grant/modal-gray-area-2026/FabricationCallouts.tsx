import { GrantPlaceholderFigure } from '@/components/grant/shared/GrantProposalUi';
import { incompleteContainmentPlaceholders } from '@/content/grants/modal-gray-area-2026/incomplete-containment-media';

export const fabricationCalloutItems = [
  { n: 1, label: 'White civic-industrial outer shell' },
  { n: 2, label: 'Weighted self-standing base' },
  { n: 3, label: 'Black aperture panels and linked shutters' },
  { n: 4, label: 'Single actuator or gearmotor with soft limits' },
  { n: 5, label: 'Static flat display' },
  { n: 6, label: 'Curved PETG or polycarbonate diffusion membrane' },
  { n: 7, label: 'Directional microphone' },
  { n: 8, label: 'Thermal receipt printer' },
  { n: 9, label: 'Local deterministic controller' },
  { n: 10, label: 'Power, switches, emergency stop' },
  { n: 11, label: 'Rear service access and cable routing' },
] as const;

export function FabricationCallouts() {
  return (
    <div className="space-y-10">
      <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.explodedMechanism} aspectClass="aspect-[4/5]" />
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
        <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.rearFabrication} aspectClass="aspect-[4/5]" />
        <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed space-y-3">
          <p>
            The listening structure separates civic-facing enclosure from serviceable internals. The outer body
            remains formally legible when inactive. One linked two-shutter aperture, one static display behind a
            curved membrane, and a thermal printer bay remain accessible from the rear.
          </p>
          <p>
            Final materials, actuator selection, and exact dimensions will be confirmed through engineering tests
            and vendor quotes. The minimum version is a complete artwork — not a fragment awaiting stretch funding.
          </p>
        </div>
      </div>

      <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.curvedMembrane} aspectClass="aspect-[4/3]" />
    </div>
  );
}
