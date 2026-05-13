import type { Opportunity } from '@/content/opportunities/types';

type RoleMatchMatrixProps = {
  opportunity: Opportunity;
};

export function RoleMatchMatrix({ opportunity }: RoleMatchMatrixProps) {
  const headers = opportunity.roleMatchColumnHeaders ?? {
    left: 'Requirement',
    right: 'Relevant experience',
  };

  return (
    <section id="fit" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
      <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">
        {opportunity.roleMatchSectionTitle ?? 'Role fit'}
      </h2>
      {opportunity.roleMatchIntro ? (
        <p className="mt-3 max-w-3xl text-sm text-stone-600">{opportunity.roleMatchIntro}</p>
      ) : null}
      <div className="mt-6 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-100 text-xs font-semibold uppercase tracking-wide text-stone-600">
            <tr>
              <th className="px-4 py-3 sm:w-[42%]">{headers.left}</th>
              <th className="px-4 py-3">{headers.right}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {opportunity.roleMatchRows.map((row) => (
              <tr key={row.requirement} className="align-top">
                <td className="px-4 py-3 font-medium text-stone-900">{row.requirement}</td>
                <td className="px-4 py-3 text-stone-700">{row.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
