/**
 * Print-to-PDF résumé for Senior GenAI Engineer recruiting pages.
 * Open `/opportunities/cvs-senior-genai-engineer/print/resume` → Print → Save as PDF.
 */

export const genaiResumePrint = {
  headline: 'Moises Sanabria',
  titleLine: 'Senior GenAI Engineer · LLM applications · Multimodal AI · Product prototyping',
  location: 'Miami Beach, FL — remote-friendly',
  contact: {
    email: 'm@moises.tech',
    site: 'https://moises.tech/opportunities/cvs-senior-genai-engineer',
    linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
    github: 'https://github.com/moisestech',
  },
  summary: [
    'Miami-based engineer, artist-technologist, and product strategist with 12+ years building web systems, creative AI tools, and experimental GenAI workflows at the intersection of software engineering, multimodal AI, and applied research.',
    'Hands-on across LLM applications, agent-style automation, generative image pipelines, cloud deployment, and innovation-lab prototyping — with public AI literacy programs and institutional digital infrastructure work.',
  ],
  skillGroups: [
    {
      title: 'GenAI / LLMs',
      items: [
        'OpenAI API, prompt engineering, structured generation',
        'LLM workflow design and evaluation',
        'LangChain-style patterns; expanding LangGraph / CrewAI / OpenAI Agents',
      ],
    },
    {
      title: 'Multimodal & platforms',
      items: [
        'Stable Diffusion, ComfyUI, text-to-image pipelines',
        'Hugging Face ecosystem, Replicate',
        'n8n automation and tool-based workflows',
      ],
    },
    {
      title: 'Engineering',
      items: [
        'Python, TypeScript, JavaScript, Next.js / React',
        'Azure, Vercel, Supabase, CI/CD, workers',
        'Rapid PoCs, MVPs, technical research translation',
      ],
    },
  ],
  experienceIntro:
    'Selected experience (see moises.tech/cv/artist for exhibition and fuller project history):',
};
