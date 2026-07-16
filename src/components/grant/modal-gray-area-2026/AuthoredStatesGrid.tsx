import { incompleteContainmentApertureStates } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';
import { authoredStateIcons } from './MachineSentenceIcons';

export function AuthoredStatesGrid() {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {incompleteContainmentApertureStates.map((state) => {
        const Icon = authoredStateIcons[state.id] ?? authoredStateIcons.sealed;
        return (
          <li key={state.id} className="border border-stone-200 dark:border-stone-700 p-4">
            <Icon className="h-8 w-8 mb-3 text-stone-800 dark:text-stone-200" title={state.title} decorative={false} />
            <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">{state.id}</p>
            <h3 className="font-semibold text-stone-900 dark:text-stone-100">{state.title}</h3>
            <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">{state.physical}</p>
            <p className="mt-1 text-sm text-stone-500 italic">{state.tone}</p>
          </li>
        );
      })}
    </ul>
  );
}
