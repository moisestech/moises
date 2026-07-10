import type {
  BitmCredit,
  BitmPlausibilityAudit,
  CaseStudyPresentation,
} from '@/content/born-into-the-machine/bitm-types';

export type BitmStageKey = 'prompt' | 'plausibility' | 'material' | 'object' | 'public';

export type BitmCaseStudyStage = {
  key: BitmStageKey;
  label: string;
  imageUrl?: string;
  imageStatus?: 'ready' | 'needed';
  caption: string;
};

export type BitmArchiveEntry = {
  date: string;
  imageUrl: string;
  caption: string;
};

export type BitmPhotoSequenceStep = {
  label: string;
  imageUrl?: string;
  imageStatus?: 'ready' | 'needed';
  caption: string;
};

export type BitmCaseStudy = {
  caseNumber: string;
  slug: string;
  title: string;
  medium: string;
  year: number;
  hoverLine: string;
  imageUrl: string;
  href: string;
  modelSoftware?: string;
  physicalMaterials?: string;
  publicContext?: string;
  collaborators?: string;
  status: string;
  concept: string;
  howItWorks: string;
  machineRole: string;
  humanRole: string;
  publicExperience: string;
  maintenance: string;
  stages?: BitmCaseStudyStage[];
  hasStageSlider: boolean;
  caseStudyPresentation: CaseStudyPresentation;
  plausibility: BitmPlausibilityAudit;
  credits?: BitmCredit[];
  archiveEntries?: BitmArchiveEntry[];
  photoSequence?: BitmPhotoSequenceStep[];
};

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const bitmCaseStudies: BitmCaseStudy[] = [
  {
    caseNumber: '01',
    slug: 'baby_agi',
    title: 'Baby AGI',
    medium: 'SCULPTURE / COMPUTER / PROPHECY',
    year: 2023,
    hoverLine: 'Pre-natal genesis of AGI staged as a smart stroller assembled from gaming hardware.',
    imageUrl: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    href: '/art/baby_agi',
    modelSoftware: 'Generative animation loop, custom PC stack',
    physicalMaterials: 'Baby stroller, GPUs, robotic hands, custom electronics',
    publicContext: 'Bakehouse Art Complex — Breadbytes exhibition',
    status: 'Exhibited',
    concept: 'Captures the nascent stages of AGI as a ready-made assembly symbolizing Generation Alpha born into AI infrastructure.',
    howItWorks: 'A looping generative animation maps birth to synthetic cognition while robotic hands guide the stroller.',
    machineRole: 'GPU stack runs generative loop; hardware embodies accelerationist prophecy.',
    humanRole: 'Artist as fabricator, curator of symbolic assembly, maintainer of custom electronics.',
    publicExperience: 'Viewers encounter a cradle-machine hybrid that reads as both nursery and data center.',
    maintenance: 'Electronics, display calibration, animation loop updates.',
    hasStageSlider: true,
    caseStudyPresentation: 'stage-slider',
    plausibility: {
      status: 'partial',
      machineProposal: 'Generative image of stroller-as-AGI-vessel — smart cradle with visible compute stack.',
      materialReality: 'Consumer stroller frame, custom PC assembly, robotic hands, looping animation on display.',
      institutionalReality: 'Breadbytes group exhibition at Bakehouse Art Complex — gallery context with institutional install requirements.',
      materialTest: 'Component fit tests in stroller frame; electronics bench debugging before final assembly.',
      rejectedOrSimplified: 'Full autonomous mobility rejected — sculpture operates as symbolic assembly, not functional AGI.',
      budget: { value: 'Pending verification', status: 'needed' },
      timeframe: { value: 'Weeks of assembly and electronics debugging', status: 'partial' },
      approvalsOrDependencies: ['Bakehouse exhibition context', 'Gallery power and display requirements'],
      maintenance: 'Electronics, display calibration, fan replacement, cable management.',
      documentationNeeded: ['Fabrication timeline', 'Component budget breakdown', 'Install documentation'],
    },
    credits: [
      { name: 'Moises Sanabria', role: 'Concept, fabrication, electronics', status: 'documented' },
    ],
    stages: [
      { key: 'prompt', label: 'PROMPT', imageUrl: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`, caption: 'Generated proposition — stroller as AGI vessel' },
      { key: 'plausibility', label: 'PLAUSIBILITY', imageStatus: 'needed', caption: 'Feasibility sketch and component audit — documentation needed' },
      { key: 'material', label: 'MATERIAL', imageUrl: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`, caption: 'Material test — PC components in stroller frame' },
      { key: 'object', label: 'OBJECT', imageUrl: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`, caption: 'Fabricated sculpture with robotic hands' },
      { key: 'public', label: 'PUBLIC', imageUrl: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`, caption: 'Gallery installation — public encounter with machine-birth metaphor' },
    ],
  },
  {
    caseNumber: '02',
    slug: 'ai_everydays',
    title: 'AI Everydays',
    medium: 'ALGORITHMIC PROJECTION / ARCHIVE',
    year: 2022,
    hoverLine: 'Five thousand daily images as a combinatory map of algorithmic production speed.',
    imageUrl: `${CDN}/v1738039650/art/moisestech-website/ai-everydays_2023_tw5k7j.jpg`,
    href: '/art/ai_everydays',
    status: 'Archive',
    concept: 'Reflects on the speed of contemporary algorithmic production and the artist\'s role in automation.',
    howItWorks: 'Combinatory projection of emerging technologies as data maps speculating on possible futures.',
    machineRole: 'Diffusion and algorithmic image pipelines generate daily outputs at scale.',
    humanRole: 'Artist as curator of taste, selection, and archival framing.',
    publicExperience: 'Overwhelming density of machine-made images staged as cultural condition.',
    maintenance: 'Archive indexing, display hardware, projection calibration.',
    hasStageSlider: false,
    caseStudyPresentation: 'archive',
    plausibility: {
      status: 'partial',
      machineProposal: 'Daily algorithmic image output at scale — combinatory map of emerging technologies.',
      materialReality: 'Archive of thousands of generated images; projection and display hardware for public presentation.',
      institutionalReality: 'Archive work — public presentation context varies by venue.',
      materialTest: 'Display calibration, projection density tests, archive indexing workflow.',
      rejectedOrSimplified: 'Not a single-object sculpture — plausibility applies to archival accumulation and presentation system.',
      timeframe: { value: 'Ongoing daily production over extended period', status: 'partial' },
      approvalsOrDependencies: ['Display hardware', 'Archive licensing for public projection'],
      maintenance: 'Archive indexing, display hardware, projection calibration.',
      documentationNeeded: ['Full archive count verification', 'Projection install documentation'],
    },
    archiveEntries: [
      { date: '2022', imageUrl: `${CDN}/v1738039650/art/moisestech-website/ai-everydays_2023_tw5k7j.jpg`, caption: 'Archive contact sheet — combinatory projection density' },
      { date: '2023', imageUrl: `${CDN}/v1738039650/art/moisestech-website/ai-everydays_2023_tw5k7j.jpg`, caption: 'Accumulated daily outputs as cultural condition map' },
    ],
  },
  {
    caseNumber: '03',
    slug: 'smart_shoppers',
    title: 'Smart Shoppers',
    medium: 'KINETIC SCULPTURE / CONSUMER SYSTEM',
    year: 2024,
    hoverLine: 'Cognition staged as consumer product under networked commerce.',
    imageUrl: `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`,
    href: '/art/smart-shoppers',
    status: 'Exhibited',
    concept: 'Examines how consumer systems encode desire, value, and automated decision-making.',
    howItWorks: 'Kinetic assembly of shopping infrastructure as sculptural critique.',
    machineRole: 'Automated retail logic, recommendation aesthetics.',
    humanRole: 'Fabrication, programming of kinetic behavior, institutional negotiation.',
    publicExperience: 'Shoppers encounter their own consumption rituals materialized as sculpture.',
    maintenance: 'Mechanical systems, software updates, gallery lighting.',
    hasStageSlider: true,
    caseStudyPresentation: 'stage-slider',
    plausibility: {
      status: 'partial',
      machineProposal: 'Generated consumer tableau — cognition as purchasable product.',
      materialReality: 'Kinetic sculpture assembled from consumer retail infrastructure.',
      institutionalReality: 'Gallery exhibition context — institutional install and lighting requirements.',
      materialTest: 'Kinetic behavior tests, mechanical assembly feasibility.',
      rejectedOrSimplified: 'Full retail automation rejected — sculpture operates as symbolic kinetic assembly.',
      budget: { value: 'Pending verification', status: 'needed' },
      timeframe: { value: 'Pending verification', status: 'needed' },
      approvalsOrDependencies: ['Gallery install requirements'],
      maintenance: 'Mechanical systems, software updates, gallery lighting.',
      documentationNeeded: ['Component audit photos', 'Fabrication timeline', 'Install documentation'],
    },
    stages: [
      { key: 'prompt', label: 'PROMPT', imageUrl: `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`, caption: 'Generated consumer tableau' },
      { key: 'plausibility', label: 'PLAUSIBILITY', imageStatus: 'needed', caption: 'Component feasibility audit — documentation needed' },
      { key: 'material', label: 'MATERIAL', imageStatus: 'needed', caption: 'Material assembly test — documentation needed' },
      { key: 'object', label: 'OBJECT', imageUrl: `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`, caption: 'Fabricated kinetic sculpture' },
      { key: 'public', label: 'PUBLIC', imageStatus: 'needed', caption: 'Public installation context — documentation needed' },
    ],
  },
  {
    caseNumber: '04',
    slug: 'doomscrolling_treadmill',
    title: 'Doomscrolling Treadmill',
    medium: 'KINETIC INSTALLATION / ATTENTION',
    year: 2024,
    hoverLine: 'Private scroll behavior turned into collective urban spectacle.',
    imageUrl: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
    href: '/art/doomscrolling_treadmill',
    publicContext: 'Touch Grass Circuit Floor, Chroma Art Film Festival',
    status: 'On view / touring',
    concept: 'Transforms algorithmic feed addiction into physical endurance ritual.',
    howItWorks: 'Treadmill station couples bodily movement to endless scroll interface.',
    machineRole: 'Feed algorithms, display systems, kinetic hardware.',
    humanRole: 'Fabrication, workshop facilitation, installation labor.',
    publicExperience: 'Participants physically enact the attention economy.',
    maintenance: 'Treadmill mechanics, screen replacement, software patches.',
    hasStageSlider: true,
    caseStudyPresentation: 'stage-slider',
    plausibility: {
      status: 'documented',
      machineProposal: 'Generated scroll spectacle — treadmill station coupling bodily movement to endless feed.',
      materialReality: 'Fabricated treadmill stations with display systems, cable infrastructure, and kinetic hardware.',
      institutionalReality: 'Touch Grass Circuit Floor at Chroma Art Film Festival — public festival install with crew labor.',
      materialTest: 'Station layout feasibility, cable systems test, treadmill mechanics verification.',
      rejectedOrSimplified: 'Single-station prototype scaled to multi-station festival circuit.',
      timeframe: { value: 'Festival install with crew labor', status: 'partial' },
      approvalsOrDependencies: ['Chroma Art Film Festival', 'Touch Grass program', 'Public safety for kinetic participation'],
      maintenance: 'Treadmill mechanics, screen replacement, software patches.',
    },
    stages: [
      { key: 'prompt', label: 'PROMPT', imageUrl: `${CDN}/v1743116742/art/moisestech-website/artworks/2024_doomscrolling_marathon/moises-sanabria-doomscrolling-marathon-proyecto-aparadores-cdmx-2024_jilui4.png`, caption: 'Generated scroll spectacle proposition' },
      { key: 'plausibility', label: 'PLAUSIBILITY', imageUrl: `${CDN}/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg`, caption: 'Station layout feasibility' },
      { key: 'material', label: 'MATERIAL', imageUrl: `${CDN}/v1737831898/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-4_qjc5w3.jpg`, caption: 'Material and cable systems test' },
      { key: 'object', label: 'OBJECT', imageUrl: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`, caption: 'Fabricated treadmill station' },
      { key: 'public', label: 'PUBLIC', imageUrl: `${CDN}/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg`, caption: 'Public festival installation' },
    ],
  },
  {
    caseNumber: '05',
    slug: 'simulation_faith',
    title: 'Simulation Faith',
    medium: 'MIXED MEDIA / SPIRITUALITY',
    year: 2025,
    hoverLine: 'Sacred iconography merged with VR immersion — belief mediated by screens.',
    imageUrl: `${CDN}/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`,
    href: '/art/simulation_faith',
    physicalMaterials: 'Porcelain-like resin, VR headset, interactive lighting',
    status: 'Exhibited',
    concept: 'A generation whose spiritual frameworks are mediated by technology.',
    howItWorks: 'Suspended figure with VR headset explores simulation as new sacred space.',
    machineRole: 'VR display, generative spiritual aesthetics.',
    humanRole: 'Sculptural fabrication, lighting design, conceptual framing.',
    publicExperience: 'Viewers confront religious iconography wearing machine vision.',
    maintenance: 'VR hardware, resin repair, lighting calibration.',
    hasStageSlider: true,
    caseStudyPresentation: 'stage-slider',
    plausibility: {
      status: 'partial',
      machineProposal: 'Sacred figure with VR headset — spirituality mediated by simulation.',
      materialReality: 'Porcelain-like resin sculpture, VR headset, interactive lighting system.',
      institutionalReality: 'Gallery exhibition — install and lighting requirements.',
      materialTest: 'Resin fabrication tests, VR integration, lighting calibration.',
      rejectedOrSimplified: 'Pending verification of rejected fabrication approaches.',
      budget: { value: 'Pending verification', status: 'needed' },
      approvalsOrDependencies: ['Gallery install requirements', 'VR hardware maintenance plan'],
      maintenance: 'VR hardware, resin repair, lighting calibration.',
      documentationNeeded: ['Fabrication process photos', 'Material test documentation'],
    },
    stages: [
      { key: 'prompt', label: 'PROMPT', imageUrl: `${CDN}/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`, caption: 'Generated spiritual proposition' },
      { key: 'plausibility', label: 'PLAUSIBILITY', imageStatus: 'needed', caption: 'Material and VR feasibility audit — documentation needed' },
      { key: 'material', label: 'MATERIAL', imageStatus: 'needed', caption: 'Resin fabrication test — documentation needed' },
      { key: 'object', label: 'OBJECT', imageUrl: `${CDN}/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`, caption: 'Fabricated sculpture with VR integration' },
      { key: 'public', label: 'PUBLIC', imageStatus: 'needed', caption: 'Public installation context — documentation needed' },
    ],
  },
  {
    caseNumber: '06',
    slug: 'privacy_is_a_luxury',
    title: 'Privacy Is a Luxury',
    medium: 'SCULPTURE / SURVEILLANCE',
    year: 2025,
    hoverLine: 'Privacy monetized — the protest mask becomes a corporate shrine.',
    imageUrl: `${CDN}/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg`,
    href: '/art/privacy_is_a_luxury',
    status: 'Exhibited',
    concept: 'Privacy is no longer a right but a subscription product.',
    howItWorks: 'Gold mask with POS terminal and router exoskeleton stages surveillance commerce.',
    machineRole: 'Network hardware, fake transaction displays, LED status systems.',
    humanRole: 'Assembly, symbolic material choices, institutional presentation.',
    publicExperience: 'Sharp shadows and sterile backdrop emphasize surveillance paradox.',
    maintenance: 'Router firmware, display content updates, physical cleaning.',
    hasStageSlider: true,
    caseStudyPresentation: 'stage-slider',
    plausibility: {
      status: 'partial',
      machineProposal: 'Gold surveillance mask with POS terminal — privacy as subscription product.',
      materialReality: 'Gold mask assembly with network hardware, POS terminal, router exoskeleton.',
      institutionalReality: 'Gallery exhibition context.',
      materialTest: 'Assembly feasibility, LED and display integration tests.',
      rejectedOrSimplified: 'Pending verification.',
      approvalsOrDependencies: ['Gallery install requirements'],
      maintenance: 'Router firmware, display content updates, physical cleaning.',
      documentationNeeded: ['Fabrication process', 'Component audit'],
    },
    stages: [
      { key: 'prompt', label: 'PROMPT', imageUrl: `${CDN}/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg`, caption: 'Generated surveillance commerce proposition' },
      { key: 'plausibility', label: 'PLAUSIBILITY', imageStatus: 'needed', caption: 'Component feasibility audit — documentation needed' },
      { key: 'material', label: 'MATERIAL', imageStatus: 'needed', caption: 'Assembly test — documentation needed' },
      { key: 'object', label: 'OBJECT', imageUrl: `${CDN}/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg`, caption: 'Fabricated mask with network hardware' },
      { key: 'public', label: 'PUBLIC', imageStatus: 'needed', caption: 'Public installation context — documentation needed' },
    ],
  },
  {
    caseNumber: '07',
    slug: 'digital_divinities',
    title: 'Digital Divinities',
    medium: 'INTERACTIVE AI / RITUAL',
    year: 2023,
    hoverLine: 'Spectators become artificial muses — the internet materialized as ritual.',
    imageUrl: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`,
    href: '/art/digital_divinities/project',
    modelSoftware: 'TouchDesigner, Stable Diffusion, ControlNet',
    status: 'Ongoing installation',
    concept: 'Real-time AI transforms participants into digitally deified portraits.',
    howItWorks: 'Camera capture → generative processing → live display of mythologized self.',
    machineRole: 'GPU ritual engine, segmentation, generative beautification.',
    humanRole: 'System design, ethical framing of participation, maintenance.',
    publicExperience: 'Participant offers image to machine and receives transformed self.',
    maintenance: 'GPU workstation, model updates, camera calibration, moderation.',
    hasStageSlider: true,
    caseStudyPresentation: 'stage-slider',
    plausibility: {
      status: 'partial',
      machineProposal: 'Real-time AI ritual — participant captured and transformed into digitally deified portrait.',
      materialReality: 'GPU workstation, camera system, TouchDesigner pipeline, live display.',
      institutionalReality: 'Ongoing installation — workshop and exhibition contexts including Bakehouse open studios.',
      materialTest: 'GPU inference latency tests, camera calibration, segmentation pipeline verification.',
      rejectedOrSimplified: 'Pending verification of simplified pipeline approaches.',
      approvalsOrDependencies: ['Participant consent framework', 'GPU workstation maintenance', 'Moderation protocol'],
      maintenance: 'GPU workstation, model updates, camera calibration, moderation.',
      documentationNeeded: ['Workshop documentation', 'Pipeline architecture diagram'],
    },
    credits: [
      { name: 'Moises Sanabria', role: 'System design, concept', status: 'documented' },
      { name: 'Fabiola Larios', role: 'Collaborator — pending role verification', status: 'partial' },
    ],
    stages: [
      { key: 'prompt', label: 'PROMPT', imageUrl: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`, caption: 'Generated ritual proposition' },
      { key: 'plausibility', label: 'PLAUSIBILITY', imageStatus: 'needed', caption: 'GPU pipeline feasibility audit — documentation needed' },
      { key: 'material', label: 'MATERIAL', imageStatus: 'needed', caption: 'Camera and display integration test — documentation needed' },
      { key: 'object', label: 'OBJECT', imageUrl: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`, caption: 'Live installation system' },
      { key: 'public', label: 'PUBLIC', imageUrl: `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`, caption: 'Bakehouse open studios — public workshop context' },
    ],
  },
  {
    caseNumber: '08',
    slug: 'eye_plug',
    title: 'Eye Plug',
    medium: 'PHOTOGRAPHY / BODY–MACHINE',
    year: 2019,
    hoverLine: 'Charger connected to iris — digital dependency as bodily extension.',
    imageUrl: `${CDN}/v1737831875/art/moisestech-website/eye_Moises_Sanabria_x_John_Yuyi_qiezip.jpg`,
    href: '/art/eye_plug',
    status: 'Archive',
    concept: 'Early body-machine image establishing dependency as physical bond.',
    howItWorks: 'Collaborative photograph stages interface as invasive intimacy.',
    machineRole: 'Consumer charging infrastructure grafted to body.',
    humanRole: 'Concept, collaboration, staging.',
    publicExperience: 'Unsettling legibility of device-as-organ.',
    maintenance: 'Print conservation, licensing.',
    hasStageSlider: false,
    caseStudyPresentation: 'photographic-sequence',
    plausibility: {
      status: 'partial',
      machineProposal: 'Body-machine photograph — charger connected to iris as digital dependency.',
      materialReality: 'Collaborative staged photograph with physical prop staging.',
      institutionalReality: 'Archive work — circulation through exhibition and press contexts.',
      materialTest: 'Staging and lighting tests for bodily interface proposition.',
      rejectedOrSimplified: 'Not applicable — photographic work; plausibility applies to staging and circulation.',
      approvalsOrDependencies: ['Collaborator consent and licensing', 'Print conservation'],
      maintenance: 'Print conservation, licensing.',
    },
    credits: [
      { name: 'Moises Sanabria', role: 'Concept, staging', status: 'documented' },
      { name: 'John Yuyi', role: 'Collaborator — pending role verification', status: 'partial' },
    ],
    photoSequence: [
      { label: 'CONCEPT', imageUrl: `${CDN}/v1737831875/art/moisestech-website/eye_Moises_Sanabria_x_John_Yuyi_qiezip.jpg`, caption: 'Body-machine dependency as conceptual proposition' },
      { label: 'STAGING', imageStatus: 'needed', caption: 'Prop staging and lighting setup — documentation needed' },
      { label: 'SHOOT', imageUrl: `${CDN}/v1737831875/art/moisestech-website/eye_Moises_Sanabria_x_John_Yuyi_qiezip.jpg`, caption: 'Collaborative photograph — charger grafted to iris' },
      { label: 'PRINT', imageStatus: 'needed', caption: 'Print production — documentation needed' },
      { label: 'CIRCULATION', imageStatus: 'needed', caption: 'Exhibition and press circulation — documentation needed' },
    ],
  },
];

export const bitmStageLabels: Record<BitmStageKey, string> = {
  prompt: 'PROMPT',
  plausibility: 'PLAUSIBILITY',
  material: 'MATERIAL',
  object: 'OBJECT',
  public: 'PUBLIC',
};

export function getCaseStudyBySlug(slug: string): BitmCaseStudy | undefined {
  return bitmCaseStudies.find((s) => s.slug === slug);
}
