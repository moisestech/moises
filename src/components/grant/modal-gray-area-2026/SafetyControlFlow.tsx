import {
  IconCachedFallback,
  IconRest,
  IconSafetyController,
  IconStateAperture,
  IconInfer,
} from './MachineSentenceIcons';

const FLOW = [
  { title: 'Model output', body: 'Constrained semantic values only — never motor commands', icon: IconInfer },
  { title: 'Schema validation', body: 'Reject malformed or empty payloads', icon: IconSafetyController },
  { title: 'Clamp to safe ranges', body: 'Retention, transformation, ambiguity, certainty, unresolved bounded', icon: IconSafetyController },
  { title: 'Authored-state mapper', body: 'Finite vocabulary: Sealed, Listening, Attentive, Exposed, Unresolved', icon: IconStateAperture },
  { title: 'Actuator limits', body: 'Single gearmotor within soft travel limits', icon: IconRest },
  { title: 'Linked shutter command', body: 'Deterministic local controller only', icon: IconSafetyController },
  { title: 'Physical aperture', body: 'Temporary authored opening — not continuous robot motion', icon: IconStateAperture },
] as const;

const FALLBACKS = [
  'Malformed model output → cached inference values',
  'Network failure → cached authored aperture state',
  'Visual-generation failure → existing or cached display field',
  'Actuator fault → stop and sealed pose',
  'Staff intervention → physical emergency stop',
] as const;

export function SafetyControlFlow() {
  return (
    <div role="group" aria-label="Safety control: model interprets, never drives motors directly">
      <ol className="space-y-3">
        {FLOW.map((step, i) => {
          const Icon = step.icon;
          return (
            <li key={step.title} className="flex gap-3 items-start">
              <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-stone-800 dark:border-stone-200 text-[10px] font-semibold">
                {i + 1}
              </span>
              <Icon className="h-6 w-6 shrink-0 mt-1 text-stone-700 dark:text-stone-300" decorative />
              <div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">{step.title}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-0.5">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 border border-stone-300 dark:border-stone-600 p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <IconCachedFallback className="h-5 w-5" decorative />
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">Fallback rail</p>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-700 dark:text-stone-300">
          {FALLBACKS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
