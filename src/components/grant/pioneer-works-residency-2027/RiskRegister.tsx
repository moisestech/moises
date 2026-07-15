import { machineSentencesRisks } from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export function RiskRegister() {
  return (
    <div className="overflow-x-auto border border-stone-200 dark:border-stone-700">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/50">
            <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">Risk</th>
            <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">
              Mitigation
            </th>
          </tr>
        </thead>
        <tbody>
          {machineSentencesRisks.map((row) => (
            <tr key={row.risk} className="border-b border-stone-100 dark:border-stone-800">
              <td className="px-4 py-2.5 font-medium text-stone-900 dark:text-stone-100 align-top">
                {row.risk}
              </td>
              <td className="px-4 py-2.5 text-stone-700 dark:text-stone-300">{row.mitigation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
