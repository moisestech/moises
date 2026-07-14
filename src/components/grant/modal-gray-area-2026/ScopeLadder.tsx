import { machineSentenceScope } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';

export function ScopeLadder() {
  return (
    <div className="overflow-x-auto border border-stone-200 dark:border-stone-700">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/50">
            <th className="px-4 py-3 font-semibold">Scope</th>
            <th className="px-4 py-3 font-semibold">Screens</th>
            <th className="px-4 py-3 font-semibold">Notes</th>
          </tr>
        </thead>
        <tbody>
          {machineSentenceScope.map((row) => (
            <tr key={row.level} className="border-b border-stone-100 dark:border-stone-800">
              <td className="px-4 py-3 font-medium align-top">{row.level}</td>
              <td className="px-4 py-3 align-top tabular-nums">{row.screens}</td>
              <td className="px-4 py-3 text-stone-600 dark:text-stone-400">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
