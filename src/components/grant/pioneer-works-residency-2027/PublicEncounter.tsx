import {
  publicEncounterModes,
  visitorJourneySteps,
} from '@/content/grants/pioneer-works-residency-2027/machine-sentences';
import { GrantVisitorJourney } from '@/components/grant/shared/GrantProposalUi';

export function PublicEncounter() {
  return (
    <div className="space-y-8">
      <GrantVisitorJourney steps={visitorJourneySteps} />
      <ul className="grid sm:grid-cols-2 gap-4">
        {publicEncounterModes.map((mode) => (
          <li key={mode.id} className="border border-stone-200 dark:border-stone-700 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100">
              {mode.title}
            </h3>
            <p className="mt-2 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {mode.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
