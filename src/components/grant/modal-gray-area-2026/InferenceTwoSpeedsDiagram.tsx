import { IconInfer, IconSentenceInput, IconSafetyController, IconStateAperture } from './MachineSentenceIcons';
import { incompleteContainmentInferenceFlow } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';

function Node({
  label,
  sub,
  icon: Icon,
}: {
  label: string;
  sub?: string;
  icon?: typeof IconInfer;
}) {
  return (
    <div className="border border-stone-300 dark:border-stone-600 px-3 py-2.5 text-center bg-[#f3f1eb] dark:bg-neutral-900">
      {Icon ? <Icon className="h-5 w-5 mx-auto mb-1.5 text-stone-700 dark:text-stone-300" decorative /> : null}
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100">{label}</p>
      {sub ? <p className="text-[11px] text-stone-500 mt-1 leading-snug">{sub}</p> : null}
    </div>
  );
}

function Arrow() {
  return (
    <p className="text-center text-stone-400 text-sm py-1" aria-hidden>
      ↓
    </p>
  );
}

export function InferenceTwoSpeedsDiagram() {
  const flow = incompleteContainmentInferenceFlow;
  return (
    <div
      className="space-y-1"
      role="group"
      aria-label="Inference path from testimony to aperture and evidence receipt"
    >
      <Node label="Visitor testimony" sub="one sentence" icon={IconSentenceInput} />
      <Arrow />
      <Node label="Modal inference" sub="when live — on-demand compute" icon={IconInfer} />
      <div className="grid sm:grid-cols-3 gap-3 my-2">
        <div className="border border-stone-200 dark:border-stone-700 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-500 mb-2">Input path</p>
          <ul className="text-[11px] text-stone-600 dark:text-stone-400 space-y-1">
            {flow.input.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-stone-200 dark:border-stone-700 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#3d5a3a] dark:text-[#a3be8c] mb-2">
            Control layer
          </p>
          <ul className="text-[11px] text-stone-600 dark:text-stone-400 space-y-1">
            {flow.control.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-stone-200 dark:border-stone-700 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-500 mb-2">Output path</p>
          <ul className="text-[11px] text-stone-600 dark:text-stone-400 space-y-1">
            {flow.output.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Arrow />
      <Node label="Local control layer" icon={IconSafetyController} />
      <Arrow />
      <div className="grid sm:grid-cols-2 gap-3">
        <Node label="Aperture position" icon={IconStateAperture} />
        <Node label="Thermal evidence receipt" sub="forensic trace" icon={IconSentenceInput} />
      </div>

      <p className="mt-6 text-sm text-stone-600 dark:text-stone-400 leading-relaxed border-l-2 border-stone-400 pl-4">
        {flow.note}
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
        <div className="border border-stone-300 dark:border-stone-600 p-4">
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Implemented now</p>
          <p className="text-stone-700 dark:text-stone-300">Deterministic web-based inference and aperture study</p>
        </div>
        <div className="border border-stone-300 dark:border-stone-600 p-4">
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Proposed exhibition path</p>
          <p className="text-stone-700 dark:text-stone-300">
            Modal-hosted inference connected to physical controller and thermal printer
          </p>
        </div>
      </div>
    </div>
  );
}
