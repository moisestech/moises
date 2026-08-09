'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  CONSTITUTION_STORAGE_KEY,
} from '@/content/research/the-internet-is-other-ai/projectData';
import type {
  InitialInstructionId,
  LocalConstitution,
  PowerStatus,
  ResidueObjectId,
  ToolPower,
} from '@/content/research/the-internet-is-other-ai/types';

const DEFAULT_TOOLS: Record<ToolPower, PowerStatus> = {
  interpret: 'granted',
  predict: 'granted',
  circulate: 'granted',
  materialize: 'granted',
};

export function createDefaultConstitution(): LocalConstitution {
  return {
    version: 1,
    tools: { ...DEFAULT_TOOLS },
    humanRefusals: 0,
    unresolvedConstraints: [],
    lastInstructionId: null,
    lastResidueId: null,
    materializedIds: [],
    updatedAt: new Date().toISOString(),
  };
}

function parseConstitution(raw: string | null): LocalConstitution | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as LocalConstitution;
    if (
      typeof parsed.version !== 'number' ||
      !parsed.tools ||
      typeof parsed.humanRefusals !== 'number' ||
      !Array.isArray(parsed.unresolvedConstraints)
    ) {
      return null;
    }
    return {
      ...createDefaultConstitution(),
      ...parsed,
      tools: { ...DEFAULT_TOOLS, ...parsed.tools },
      unresolvedConstraints: parsed.unresolvedConstraints.slice(0, 12),
      materializedIds: Array.isArray(parsed.materializedIds)
        ? parsed.materializedIds
        : [],
    };
  } catch {
    return null;
  }
}

export function useLocalConstitution() {
  const [constitution, setConstitution] = useState<LocalConstitution>(
    createDefaultConstitution,
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = parseConstitution(
      typeof window !== 'undefined'
        ? window.localStorage.getItem(CONSTITUTION_STORAGE_KEY)
        : null,
    );
    if (stored) setConstitution(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || typeof window === 'undefined') return;
    window.localStorage.setItem(
      CONSTITUTION_STORAGE_KEY,
      JSON.stringify(constitution),
    );
  }, [constitution, hydrated]);

  const bumpVersion = useCallback(
    (updater: (prev: LocalConstitution) => LocalConstitution) => {
      setConstitution((prev) => {
        const next = updater(prev);
        return {
          ...next,
          version: prev.version + 1,
          updatedAt: new Date().toISOString(),
        };
      });
    },
    [],
  );

  const setPower = useCallback(
    (power: ToolPower, status: PowerStatus, constraint?: string) => {
      bumpVersion((prev) => ({
        ...prev,
        tools: { ...prev.tools, [power]: status },
        unresolvedConstraints: constraint
          ? [...prev.unresolvedConstraints, constraint].slice(-12)
          : prev.unresolvedConstraints,
        humanRefusals:
          status === 'revoked' ? prev.humanRefusals + 1 : prev.humanRefusals,
      }));
    },
    [bumpVersion],
  );

  const registerRefusal = useCallback(
    (constraint: string) => {
      bumpVersion((prev) => ({
        ...prev,
        humanRefusals: prev.humanRefusals + 1,
        unresolvedConstraints: [
          ...prev.unresolvedConstraints,
          constraint,
        ].slice(-12),
      }));
    },
    [bumpVersion],
  );

  const recordNegotiation = useCallback(
    (instructionId: InitialInstructionId, residueId: ResidueObjectId) => {
      setConstitution((prev) => ({
        ...prev,
        lastInstructionId: instructionId,
        lastResidueId: residueId,
        updatedAt: new Date().toISOString(),
      }));
    },
    [],
  );

  const markMaterialized = useCallback((residueId: ResidueObjectId) => {
    bumpVersion((prev) => ({
      ...prev,
      lastResidueId: residueId,
      materializedIds: prev.materializedIds.includes(residueId)
        ? prev.materializedIds
        : [...prev.materializedIds, residueId],
      unresolvedConstraints: [
        ...prev.unresolvedConstraints,
        `Materialized residue authorized: ${residueId}`,
      ].slice(-12),
    }));
  }, [bumpVersion]);

  const reset = useCallback(() => {
    const next = createDefaultConstitution();
    setConstitution(next);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(CONSTITUTION_STORAGE_KEY);
    }
  }, []);

  const activePowerCount = (
    Object.values(constitution.tools) as PowerStatus[]
  ).filter((status) => status === 'granted').length;

  return {
    constitution,
    hydrated,
    activePowerCount,
    setPower,
    registerRefusal,
    recordNegotiation,
    markMaterialized,
    reset,
  };
}
