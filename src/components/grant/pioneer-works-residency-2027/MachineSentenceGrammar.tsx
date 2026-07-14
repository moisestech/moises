import { machineSentencesGrammar } from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export function MachineSentenceGrammar() {
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
          {machineSentencesGrammar.map((row) => (
            <tr key={row.element} className="border-b border-stone-100 dark:border-stone-800">
              <td className="px-4 py-2.5 text-stone-800 dark:text-stone-200">{row.element}</td>
              <td className="px-4 py-2.5 text-stone-600 dark:text-stone-400 font-medium">
                {row.function}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
