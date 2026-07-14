import { machineSentencesScope } from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export function ScopeLadder() {
  return (
    <div className="overflow-x-auto border border-stone-200 dark:border-stone-700">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/50">
            <th className="px-4 py-3 font-semibold">Scope</th>
            <th className="px-4 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {machineSentencesScope.map((row) => (
            <tr key={row.level} className="border-b border-stone-100 dark:border-stone-800">
              <td className="px-4 py-2.5 font-medium text-stone-900 dark:text-stone-100 whitespace-nowrap">
                {row.level}
              </td>
              <td className="px-4 py-2.5 text-stone-700 dark:text-stone-300">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
