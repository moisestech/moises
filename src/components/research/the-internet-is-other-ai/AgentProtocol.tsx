'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  agents,
  buildDeterministicStatements,
  getInstruction,
  getResidueSpec,
  initialInstructions,
  powerLabels,
} from '@/content/research/the-internet-is-other-ai/projectData';
import type {
  DialogueSource,
  InitialInstructionId,
  LocalConstitution,
  NegotiationState,
  PowerStatus,
  ProvisionalResidue,
  ToolPower,
  TranscriptEntry,
} from '@/content/research/the-internet-is-other-ai/types';
import { optionalLocalPrompt } from './chromeAI';

type ConstitutionApi = {
  constitution: LocalConstitution;
  activePowerCount: number;
  setPower: (power: ToolPower, status: PowerStatus, constraint?: string) => void;
  registerRefusal: (constraint: string) => void;
  recordNegotiation: (
    instructionId: InitialInstructionId,
    residueId: ReturnType<typeof getResidueSpec>['id'],
  ) => void;
  markMaterialized: (residueId: ReturnType<typeof getResidueSpec>['id']) => void;
  reset: () => void;
};

type Props = {
  constitutionApi: ConstitutionApi;
  browserAiAvailable: boolean;
  simulationLabel: string;
};

function statusVerb(status: PowerStatus) {
  return status === 'granted' ? 'GRANTED' : 'REVOKED';
}

function PermissionRegistry({
  tools,
}: {
  tools: Record<ToolPower, PowerStatus>;
}) {
  return (
    <div
      className="border border-[#f0eee5]/20"
      aria-label="Machine-readable powers"
    >
      <div className="border-b border-[#f0eee5]/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
        Permission registry
      </div>
      <ul className="divide-y divide-[#f0eee5]/10">
        {(Object.keys(powerLabels) as ToolPower[]).map((power) => {
          const status = tools[power];
          return (
            <li
              key={power}
              className="flex min-h-11 items-center justify-between gap-3 px-3 py-2"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                {powerLabels[power]}
              </span>
              <span
                className={
                  status === 'granted'
                    ? 'font-mono text-[11px] uppercase tracking-[0.14em] text-[#b6e2ba]'
                    : 'font-mono text-[11px] uppercase tracking-[0.14em] text-[#c45c4a]'
                }
              >
                {status === 'granted' ? '● GRANTED' : '× REVOKED'}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AgentTranscript({
  entries,
  reducedMotion,
}: {
  entries: TranscriptEntry[];
  reducedMotion: boolean;
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCount(entries.length);
      return;
    }
    setVisibleCount(0);
    if (entries.length === 0) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= entries.length) window.clearInterval(id);
    }, 420);
    return () => window.clearInterval(id);
  }, [entries, reducedMotion]);

  const shown = entries.slice(0, visibleCount);

  return (
    <div
      className="border border-[#f0eee5]/20"
      aria-live="polite"
      aria-relevant="additions"
      aria-label="Agent transcript"
    >
      <div className="border-b border-[#f0eee5]/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
        Agent transcript
      </div>
      {shown.length === 0 ? (
        <p className="px-3 py-6 text-sm text-[#8d9088]">
          No negotiation yet. Select an instruction and begin.
        </p>
      ) : (
        <ol className="divide-y divide-[#f0eee5]/10">
          {shown.map((entry) => {
            const agent = agents.find((item) => item.id === entry.role);
            return (
              <li key={entry.id} className="px-3 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#b6e2ba]">
                    {String(entry.sequence).padStart(2, '0')} · {agent?.name} ·{' '}
                    {powerLabels[entry.power]} · {statusVerb(entry.status)}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8d9088]">
                    {entry.source === 'browser-ai' ? 'BROWSER AI' : 'DETERMINISTIC'}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#f0eee5]/9">
                  {entry.statement}
                </p>
                {entry.inheritedConstraint ? (
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8d9088]">
                    Constraint · {entry.inheritedConstraint}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}

function ResidueCard({ residue }: { residue: ProvisionalResidue | null }) {
  if (!residue) {
    return (
      <div className="border border-[#f0eee5]/20 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
          Post-AI Readymade
        </p>
        <p className="mt-3 text-sm text-[#8d9088]">
          Provisional output appears after negotiation. Materialization always
          requires a human action.
        </p>
      </div>
    );
  }

  const authLabel =
    residue.authorization === 'authorized'
      ? 'AUTHORIZED'
      : residue.authorization === 'refused'
        ? 'REFUSED'
        : 'PROVISIONAL';

  return (
    <div className="border border-[#f0eee5]/20 p-4" aria-live="polite">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
        Post-AI Readymade · {authLabel}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
        {residue.title}
      </h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8d9088]">
            Materials
          </dt>
          <dd className="mt-1 text-[#f0eee5]/85">
            {residue.materials.join(' · ')}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8d9088]">
            Material rule
          </dt>
          <dd className="mt-1 text-[#f0eee5]/85">{residue.materialRule}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8d9088]">
            Unresolved disagreement
          </dt>
          <dd className="mt-1 text-[#f0eee5]/85">
            {residue.unresolvedDisagreement}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export function AgentProtocol({
  constitutionApi,
  browserAiAvailable,
  simulationLabel,
}: Props) {
  const {
    constitution,
    activePowerCount,
    setPower,
    registerRefusal,
    recordNegotiation,
    markMaterialized,
    reset,
  } = constitutionApi;

  const [instructionId, setInstructionId] =
    useState<InitialInstructionId>('authority');
  const [state, setState] = useState<NegotiationState>('idle');
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [residue, setResidue] = useState<ProvisionalResidue | null>(null);
  const [useBrowserAi, setUseBrowserAi] = useState(false);
  const [statusNote, setStatusNote] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);
  const sequenceRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const instruction = useMemo(
    () => getInstruction(instructionId),
    [instructionId],
  );

  const pushEntries = async () => {
    const statements = buildDeterministicStatements(
      instructionId,
      constitution.unresolvedConstraints,
    );
    const inherited =
      constitution.unresolvedConstraints[
        constitution.unresolvedConstraints.length - 1
      ];
    const nextEntries: TranscriptEntry[] = [];

    for (const agent of agents) {
      const powerStatus = constitution.tools[agent.power];
      let statement = statements[agent.id];
      let source: DialogueSource = 'deterministic';

      if (useBrowserAi && browserAiAvailable && powerStatus === 'granted') {
        const result = await optionalLocalPrompt(
          `You are the ${agent.name}. Mandate: ${agent.mandate}. Instruction: ${instruction.text}. Respond in one sentence. Do not invent personal data.`,
        );
        if (result.ok && result.text) {
          statement = result.text;
          source = 'browser-ai';
        }
      }

      if (powerStatus === 'revoked') {
        statement = `${agent.name} cannot act: ${powerLabels[agent.power]} is revoked.${inherited ? ` Inherited constraint: ${inherited}` : ''}`;
      }

      sequenceRef.current += 1;
      nextEntries.push({
        id: `${Date.now()}-${agent.id}-${sequenceRef.current}`,
        sequence: sequenceRef.current,
        role: agent.id,
        power: agent.power,
        status: powerStatus,
        statement,
        inheritedConstraint: inherited,
        source,
        at: new Date().toISOString(),
      });
    }

    setTranscript((prev) => [...prev, ...nextEntries]);

    const spec = getResidueSpec(instruction.residueId);
    setResidue({
      objectId: spec.id,
      title: spec.title,
      materials: spec.materials,
      materialRule: spec.materialRule,
      unresolvedDisagreement: spec.unresolvedDisagreement,
      authorization: 'provisional',
    });
    recordNegotiation(instructionId, spec.id);
  };

  const beginNegotiation = async () => {
    setState('negotiating');
    setStatusNote('Agents negotiating…');
    setResidue(null);
    await pushEntries();
    setState('awaiting-human');
    setStatusNote('Awaiting human authority.');
  };

  const withholdContext = () => {
    registerRefusal(
      'Context withheld: agents must proceed without additional visitor context.',
    );
    setStatusNote('Context withheld. Constraint inherited by next negotiation.');
  };

  const revokeSelectedPower = () => {
    const agent = agents.find((item) => item.id === 'circulator') ?? agents[0];
    setPower(
      agent.power,
      'revoked',
      `${powerLabels[agent.power]} revoked before negotiation.`,
    );
    setStatusNote(`${powerLabels[agent.power]} revoked.`);
  };

  const allowAction = () => {
    setState('authorized');
    setStatusNote('Action allowed. Residue remains provisional until materialization.');
  };

  const refuseAction = () => {
    registerRefusal(
      `Human refused negotiation on instruction: ${instruction.label}.`,
    );
    setState('refused');
    setResidue((prev) =>
      prev ? { ...prev, authorization: 'refused' } : prev,
    );
    setStatusNote('Refused. Constraint will condition the next negotiation.');
  };

  const askAnotherAi = () => {
    setStatusNote(
      'Another AI may be consulted only as parallel commentary. No agent has final authority.',
    );
  };

  const removeTool = () => {
    const active = (Object.keys(constitution.tools) as ToolPower[]).find(
      (power) => constitution.tools[power] === 'granted',
    );
    if (!active) {
      setStatusNote('No active tools remain.');
      return;
    }
    setPower(active, 'revoked', `${powerLabels[active]} removed by human.`);
    setStatusNote(`${powerLabels[active]} removed.`);
  };

  const materialize = () => {
    if (!residue || residue.authorization === 'refused') return;
    markMaterialized(residue.objectId);
    setResidue({ ...residue, authorization: 'authorized' });
    setState('authorized');
    setStatusNote('Dispute materialized under human authorization.');
  };

  const refuseObject = () => {
    if (!residue) return;
    registerRefusal(`Object refused: ${residue.title}.`);
    setResidue({ ...residue, authorization: 'refused' });
    setState('refused');
    setStatusNote('Object refused. Negotiation may continue without materialization.');
  };

  const returnToNegotiation = () => {
    setState('idle');
    setStatusNote('Returned to negotiation.');
  };

  const forgetSession = () => {
    reset();
    setTranscript([]);
    setResidue(null);
    setState('idle');
    setUseBrowserAi(false);
    sequenceRef.current = 0;
    setStatusNote('Local constitution forgotten.');
  };

  const btn =
    'inline-flex min-h-11 items-center justify-center border px-3 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba] disabled:cursor-not-allowed disabled:opacity-40';

  return (
    <section
      id="protocol"
      className="scroll-mt-28 border-b border-[#f0eee5]/15"
      aria-labelledby="protocol-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8d9088]">
              Live working protocol
            </p>
            <h2
              id="protocol-heading"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.03em]"
            >
              Grant, refuse, revoke, materialize
            </h2>
          </div>
          <div className="space-y-1 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-[#8d9088]">
            <p>
              Constitution v{constitution.version}.0 · {activePowerCount}/4 powers
              active
            </p>
            <p>{constitution.humanRefusals} human refusals inherited</p>
            <p>
              State · {state} · {simulationLabel}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-4">
            <div className="border border-[#f0eee5]/20 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
                Initial instructions
              </p>
              <ul className="mt-3 space-y-2" role="radiogroup" aria-label="Initial instruction">
                {initialInstructions.map((item) => {
                  const selected = item.id === instructionId;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => setInstructionId(item.id)}
                        className={`${btn} w-full justify-start border-[#f0eee5]/25 text-left ${
                          selected
                            ? 'border-[#b6e2ba] bg-[#b6e2ba]/10 text-[#f0eee5]'
                            : 'text-[#f0eee5]/85 hover:border-[#f0eee5]/50'
                        }`}
                      >
                        <span className="mr-3 text-[#8d9088]">{item.number}</span>
                        <span>
                          <span className="block">{item.label}</span>
                          <span className="mt-1 block font-sans text-[12px] normal-case tracking-normal text-[#8d9088]">
                            {item.text}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <PermissionRegistry tools={constitution.tools} />

            <div className="border border-[#f0eee5]/20 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
                Entry controls
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  className={`${btn} border-[#b6e2ba] bg-[#b6e2ba] text-[#10110f]`}
                  onClick={() => void beginNegotiation()}
                  disabled={state === 'negotiating'}
                >
                  Begin negotiation
                </button>
                <button
                  type="button"
                  className={`${btn} border-[#f0eee5]/35 text-[#f0eee5]`}
                  onClick={withholdContext}
                >
                  Withhold context
                </button>
                <button
                  type="button"
                  className={`${btn} border-[#f0eee5]/35 text-[#f0eee5]`}
                  onClick={revokeSelectedPower}
                >
                  Revoke a power
                </button>
              </div>

              {browserAiAvailable ? (
                <label className="mt-4 flex min-h-11 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8d9088]">
                  <input
                    type="checkbox"
                    checked={useBrowserAi}
                    onChange={(event) => setUseBrowserAi(event.target.checked)}
                    className="size-4 accent-[#b6e2ba]"
                  />
                  Activate browser-resident inference
                </label>
              ) : (
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8d9088]">
                  Deterministic simulation active · no cloud fallback
                </p>
              )}
            </div>

            <div className="border border-[#f0eee5]/20 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
                Dispute controls
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  className={`${btn} border-[#f0eee5]/35 text-[#f0eee5]`}
                  onClick={allowAction}
                  disabled={state === 'idle' || state === 'negotiating'}
                >
                  Allow this action
                </button>
                <button
                  type="button"
                  className={`${btn} border-[#c45c4a]/70 text-[#f0eee5]`}
                  onClick={refuseAction}
                  disabled={state === 'idle' || state === 'negotiating'}
                >
                  Refuse
                </button>
                <button
                  type="button"
                  className={`${btn} border-[#f0eee5]/35 text-[#f0eee5]`}
                  onClick={askAnotherAi}
                  disabled={state === 'idle'}
                >
                  Ask another AI
                </button>
                <button
                  type="button"
                  className={`${btn} border-[#f0eee5]/35 text-[#f0eee5]`}
                  onClick={removeTool}
                >
                  Remove this tool
                </button>
              </div>
            </div>

            <div className="border border-[#f0eee5]/20 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
                Materialization controls
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  className={`${btn} border-[#b6e2ba] text-[#b6e2ba]`}
                  onClick={materialize}
                  disabled={!residue || residue.authorization === 'refused'}
                >
                  Materialize this dispute
                </button>
                <button
                  type="button"
                  className={`${btn} border-[#f0eee5]/35 text-[#f0eee5]`}
                  onClick={refuseObject}
                  disabled={!residue}
                >
                  Refuse object
                </button>
                <button
                  type="button"
                  className={`${btn} border-[#f0eee5]/35 text-[#f0eee5]`}
                  onClick={returnToNegotiation}
                >
                  Return to negotiation
                </button>
                <button
                  type="button"
                  className={`${btn} border-[#c45c4a]/70 text-[#f0eee5]`}
                  onClick={forgetSession}
                >
                  Forget this session
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border border-[#f0eee5]/15 px-3 py-3">
              <p className="text-sm text-[#f0eee5]/8" role="status">
                {statusNote || 'Ready.'}
              </p>
              <button
                type="button"
                className={`${btn} border-[#f0eee5]/35 text-[#f0eee5]`}
                onClick={forgetSession}
              >
                Reset local state
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <AgentTranscript entries={transcript} reducedMotion={reducedMotion} />
            <ResidueCard residue={residue} />
          </div>
        </div>
      </div>
    </section>
  );
}
