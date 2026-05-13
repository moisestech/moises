'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export type SkillRow = { name: string; value: number };

export function SkillCapabilityChart({ data, disclaimer }: { data: SkillRow[]; disclaimer: string }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-stone-900">Role-relevant strengths (self-assessed)</h3>
      <p className="mt-1 text-xs text-stone-500">{disclaimer}</p>
      <div className="mt-4 h-72 w-full sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 4, right: 12, left: 4, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} stroke="#78716c" />
            <YAxis
              type="category"
              dataKey="name"
              width={148}
              tick={{ fontSize: 10 }}
              stroke="#44403c"
              interval={0}
            />
            <Tooltip
              formatter={(value: number) => [`${value}`, 'Weight']}
              contentStyle={{ fontSize: 12, borderRadius: 8 }}
            />
            <Bar dataKey="value" fill="#0e7490" radius={[0, 4, 4, 0]} name="Self-assessed" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
