'use client';

import { useEffect, useState } from 'react';
import { AgentProtocol } from './AgentProtocol';
import { BrowserSequence } from './BrowserSequence';
import { CompoundingFlow } from './CompoundingFlow';
import { ImplementationStrip } from './ImplementationStrip';
import { ProjectHero } from './ProjectHero';
import { ProjectInformation } from './ProjectInformation';
import { Proposition } from './Proposition';
import { ResearchFooter } from './ResearchFooter';
import { ResearchHeader } from './ResearchHeader';
import { detectBrowserAi } from './chromeAI';
import { useLocalConstitution } from './useLocalConstitution';
import { tioaRootClass } from './theme';

export default function TheInternetIsOtherAiClient() {
  const constitutionApi = useLocalConstitution();
  const [simulationLabel, setSimulationLabel] = useState<
    'LOCAL AI AVAILABLE' | 'DETERMINISTIC SIMULATION'
  >('DETERMINISTIC SIMULATION');
  const [browserAiAvailable, setBrowserAiAvailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void detectBrowserAi().then((capability) => {
      if (cancelled) return;
      setSimulationLabel(capability.label);
      setBrowserAiAvailable(capability.promptApi);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`${tioaRootClass} relative left-1/2 w-screen -translate-x-1/2 -mt-44 md:-mt-52`}>
      <ResearchHeader simulationLabel={simulationLabel} />
      <main>
        <ProjectHero />
        <ImplementationStrip />
        <Proposition />
        <AgentProtocol
          constitutionApi={constitutionApi}
          browserAiAvailable={browserAiAvailable}
          simulationLabel={simulationLabel}
        />
        <BrowserSequence />
        <CompoundingFlow />
        <ProjectInformation />
      </main>
      <ResearchFooter />
    </div>
  );
}
