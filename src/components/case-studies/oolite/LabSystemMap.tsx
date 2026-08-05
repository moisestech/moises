'use client';

import { useState } from 'react';
import { OOLITE_ARTS_CASE_STUDY } from '@/content/oolite-arts/case-study';

const layers = OOLITE_ARTS_CASE_STUDY.systemLayers;
type LayerId = (typeof layers)[number]['id'];

export function LabSystemMap() {
  const [activeId, setActiveId] = useState<LayerId>(layers[0].id);
  const active = layers.find((l) => l.id === activeId) ?? layers[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
      <div className="lg:col-span-4 flex flex-col gap-2" role="tablist" aria-label="Lab system layers">
        {layers.map((layer, i) => {
          const selected = layer.id === activeId;
          return (
            <button
              key={layer.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`layer-tab-${layer.id}`}
              aria-controls={`layer-panel-${layer.id}`}
              onClick={() => setActiveId(layer.id)}
              className={`text-left border px-4 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                selected
                  ? 'bg-black text-white border-black'
                  : 'bg-white border-black/15 hover:border-black/40'
              }`}
            >
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-70">
                Layer {String(i + 1).padStart(2, '0')}
              </span>
              <span className="block font-['MoMA_Sans'] text-xl font-bold mt-1">
                {layer.label}
              </span>
            </button>
          );
        })}
      </div>

      <div
        className="lg:col-span-8 border border-black/10 bg-white p-6 sm:p-8"
        role="tabpanel"
        id={`layer-panel-${active.id}`}
        aria-labelledby={`layer-tab-${active.id}`}
      >
        <h3 className="font-['MoMA_Sans'] text-2xl sm:text-3xl font-bold mb-6">
          {active.label}
        </h3>
        <dl className="space-y-5 text-sm sm:text-base">
          {(
            [
              ['Problem', active.problem],
              ['Intervention', active.intervention],
              ['Outcome', active.outcome],
              ['Evidence', active.evidence],
            ] as const
          ).map(([label, value]) => (
            <div key={label} className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4 border-t border-black/10 pt-4">
              <dt className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                {label}
              </dt>
              <dd className="text-neutral-800 leading-relaxed">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
