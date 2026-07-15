import {
  IconClauseCluster,
  IconLatentVoid,
  IconPivot,
  IconSyntaxCube,
  IconDistributedSurface,
} from './MachineSentenceIcons';

const ROWS = [
  { icon: IconSyntaxCube, element: 'Cube', function: 'Syntax' },
  { icon: IconClauseCluster, element: 'Screen cluster', function: 'Clause' },
  { icon: IconPivot, element: 'Pivot', function: 'Punctuation' },
  { icon: IconDistributedSurface, element: 'Distributed image', function: 'Semantic pressure' },
  { icon: IconLatentVoid, element: 'Central void', function: 'Latent space' },
] as const;

export function LatentVoidGrammar() {
  return (
    <div
      className="border border-stone-300 dark:border-stone-600 p-5 sm:p-6"
      role="group"
      aria-label="Latent void grammar: cube as syntax, clusters as clauses, void as latent space"
    >
      <p className="text-xs uppercase tracking-[0.18em] text-stone-500 mb-5">Latent void grammar</p>
      <ul className="space-y-4">
        {ROWS.map(({ icon: Icon, element, function: fn }) => (
          <li key={element} className="flex items-center gap-4">
            <Icon className="h-7 w-7 shrink-0 text-stone-800 dark:text-stone-200" decorative />
            <div className="flex-1 flex flex-wrap items-baseline justify-between gap-2 border-b border-stone-200 dark:border-stone-700 pb-3">
              <span className="font-medium text-stone-900 dark:text-stone-100">{element}</span>
              <span className="text-sm text-stone-500">{fn}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
