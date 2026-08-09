export type AgentRole = 'interpreter' | 'predictor' | 'circulator' | 'materializer';

export type ToolPower = 'interpret' | 'predict' | 'circulate' | 'materialize';

export type PowerStatus = 'granted' | 'revoked';

export type NegotiationState =
  | 'idle'
  | 'negotiating'
  | 'awaiting-human'
  | 'authorized'
  | 'refused';

export type DialogueSource = 'deterministic' | 'browser-ai';

export type InitialInstructionId =
  | 'authority'
  | 'prediction'
  | 'circulation'
  | 'materialization';

export type ResidueObjectId =
  | 'revocation-bell'
  | 'recommendation-without-a-user'
  | 'unranked-feed'
  | 'unfinished-instruction';

export type AgentDefinition = {
  id: AgentRole;
  name: string;
  power: ToolPower;
  mandate: string;
};

export type InitialInstruction = {
  id: InitialInstructionId;
  label: string;
  number: string;
  text: string;
  residueId: ResidueObjectId;
};

export type ResidueSpec = {
  id: ResidueObjectId;
  title: string;
  materials: string[];
  materialRule: string;
  unresolvedDisagreement: string;
};

export type TranscriptEntry = {
  id: string;
  sequence: number;
  role: AgentRole;
  power: ToolPower;
  status: PowerStatus;
  statement: string;
  inheritedConstraint?: string;
  source: DialogueSource;
  at: string;
};

export type ProvisionalResidue = {
  objectId: ResidueObjectId;
  title: string;
  materials: string[];
  materialRule: string;
  unresolvedDisagreement: string;
  authorization: 'provisional' | 'authorized' | 'refused';
};

export type LocalConstitution = {
  version: number;
  tools: Record<ToolPower, PowerStatus>;
  humanRefusals: number;
  unresolvedConstraints: string[];
  lastInstructionId: InitialInstructionId | null;
  lastResidueId: ResidueObjectId | null;
  materializedIds: ResidueObjectId[];
  updatedAt: string;
};

export type BrowserAiCapability = {
  promptApi: boolean;
  webMcp: boolean;
  label: 'LOCAL AI AVAILABLE' | 'DETERMINISTIC SIMULATION';
};
