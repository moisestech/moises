export function VoidGrammarDiagram() {
  const rows = [
    { element: 'Cubic armature', function: 'Syntax' },
    { element: 'Screen clusters', function: 'Clauses' },
    { element: 'Physical pivots', function: 'Punctuation' },
    { element: 'Distributed imagery', function: 'Semantic pressure' },
    { element: 'Central void', function: 'Latent space' },
    { element: 'Complete object', function: 'Machine sentence' },
  ];

  return (
    <div className="overflow-x-auto border border-stone-200 dark:border-stone-700">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/50">
            <th className="px-4 py-3 font-semibold">Element</th>
            <th className="px-4 py-3 font-semibold">Function</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.element} className="border-b border-stone-100 dark:border-stone-800">
              <td className="px-4 py-3 font-medium">{row.element}</td>
              <td className="px-4 py-3 text-stone-600 dark:text-stone-400">{row.function}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
