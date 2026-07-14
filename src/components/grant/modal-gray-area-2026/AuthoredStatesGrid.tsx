import { machineSentenceStates } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';

export function AuthoredStatesGrid() {
  return (
    <ul className="grid sm:grid-cols-2 gap-4">
      {machineSentenceStates.map((state) => (
        <li key={state.id} className="border border-stone-200 dark:border-stone-700 p-4">
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">{state.id.replace('_', ' ')}</p>
          <h3 className="font-semibold text-stone-900 dark:text-stone-100">{state.title}</h3>
          <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">{state.physical}</p>
          <p className="mt-1 text-sm text-stone-500 italic">{state.tone}</p>
        </li>
      ))}
    </ul>
  );
}
