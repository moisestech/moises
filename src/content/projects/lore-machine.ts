import type { ProjectDossier } from './types';
import { evidenceProjects } from '@/content/evidence/projects';
import { loreMachinePipelineFull } from '@/content/evidence/loreMachineSystemPipeline';

export const loreMachineProject: ProjectDossier = {
  slug: 'lore-machine',
  seo: {
    title: 'Lore Machine — From Narrative to Generative Production System | Moises Sanabria',
    description:
      'Founding-engineer system walkthrough: how Lore Machine turned unstructured narrative into an editable generative production application — frontend, auth, AI/data APIs, and human revision.',
  },
  title: 'Lore Machine',
  category: 'AI storytelling product · system case study',
  lead: 'From generative storytelling idea to creator-facing product.',
  whatItIs:
    'A real-time generative image-storytelling platform that turns scripts, books, and lyrics into structured multimedia outputs — connecting narrative input, scene development, model operations, media generation, and human revision in one creator-facing application.',
  whatIBuilt:
    'As a founding engineer, I owned the frontend web application, authentication, and AI/data API integrations from early prototype through production on Vercel. I designed prompt-facing product workflows, helped make asynchronous generation state legible, built creator review/revision loops, coordinated contractors and sprints, and translated between engineering, business, and marketing stakeholders. I did not personally build every model, training system, or infrastructure layer.',
  productFlow: [
    {
      label: 'Narrative input',
      detail: 'A creator brings a script, book, or lyrics into a persistent project.',
    },
    {
      label: 'Structured scenes',
      detail: 'Long-form source becomes discrete scenes the application can generate from.',
    },
    {
      label: 'Generative media',
      detail: 'Model jobs run asynchronously and return as inspectable assets.',
    },
    {
      label: 'Creator review',
      detail: 'A person compares, regenerates, or redirects output before it is kept.',
    },
    {
      label: 'Editable output',
      detail: 'The result stays inside a product the creator can continue to edit.',
    },
  ],
  stack: [
    'TypeScript',
    'Next.js',
    'Vercel',
    'LLMs',
    'PromptOps',
    'Stable Diffusion',
    'Replicate',
    'Azure',
    'Python',
  ],
  whyItMatters:
    'Shows production AI product engineering: turning ambiguous source material and probabilistic model behavior into an inspectable application with human control — structurally relevant to platforms that must make complex intelligence usable, without claiming RAG or legacy-code analysis.',
  imageSrc: evidenceProjects['lore-machine'].imageSrc,
  imageAlt: evidenceProjects['lore-machine'].imageAlt,
  externalHref: 'https://loremachine.world/',
  externalLabel: 'loremachine.world',
  systemPipeline: loreMachinePipelineFull,
};
