import { GrantExperienceBeats } from '@/components/grant/shared/GrantProposalUi';
import { machineSentenceTemporal } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';

export function TemporalChoreography() {
  return (
    <div>
      <GrantExperienceBeats beats={machineSentenceTemporal} />
      <p className="mt-6 text-sm text-stone-500 leading-relaxed">
        The contrast is machine speed versus material time: interpretation can begin immediately, but matter
        needs time to absorb its consequences.
      </p>
    </div>
  );
}
