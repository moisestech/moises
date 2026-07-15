import { IconFastPath, IconInfer, IconSentenceInput, IconSlowPath, IconSafetyController, IconPhysicalMovement, IconDistributedSurface } from './MachineSentenceIcons';

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
  return (
    <div
      className="space-y-1"
      role="group"
      aria-label="Inference operates at two speeds: fast body path and slow skin path"
    >
      <Node label="Visitor input" sub="voice or text" icon={IconSentenceInput} />
      <Arrow />
      <Node label="Modal inference" sub="on-demand compute" icon={IconInfer} />
      <div className="grid sm:grid-cols-2 gap-3 my-2">
        <div>
          <div className="flex items-center justify-center gap-2 mb-2 text-[#3d5a3a] dark:text-[#a3be8c]">
            <IconFastPath className="h-4 w-4" decorative />
            <span className="text-[10px] font-semibold uppercase tracking-widest">Fast body path</span>
          </div>
          <ul className="text-[11px] text-stone-600 dark:text-stone-400 space-y-1 border border-stone-200 dark:border-stone-700 p-3">
            <li>Transcription / text</li>
            <li>Embedding</li>
            <li>Structured body score</li>
            <li>Authored state</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 mb-2 text-stone-500">
            <IconSlowPath className="h-4 w-4" decorative />
            <span className="text-[10px] font-semibold uppercase tracking-widest">Slow skin path</span>
          </div>
          <ul className="text-[11px] text-stone-600 dark:text-stone-400 space-y-1 border border-stone-200 dark:border-stone-700 p-3">
            <li>Semantic features</li>
            <li>Texture family</li>
            <li>Distributed visual surface</li>
            <li>Generated or cached imagery</li>
          </ul>
        </div>
      </div>
      <Arrow />
      <Node label="Local control layer" icon={IconSafetyController} />
      <Arrow />
      <div className="grid sm:grid-cols-2 gap-3">
        <Node label="Physical movement" icon={IconPhysicalMovement} />
        <Node label="Screen surface" icon={IconDistributedSurface} />
      </div>
      <Arrow />
      <Node label="Temporary sculptural state" />

      <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
        <div className="border border-stone-300 dark:border-stone-600 p-4">
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Implemented now</p>
          <p className="text-stone-700 dark:text-stone-300">Deterministic web-based body-score study</p>
        </div>
        <div className="border border-stone-300 dark:border-stone-600 p-4">
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Proposed exhibition path</p>
          <p className="text-stone-700 dark:text-stone-300">
            Modal-hosted inference connected to the physical controller
          </p>
        </div>
      </div>
    </div>
  );
}
