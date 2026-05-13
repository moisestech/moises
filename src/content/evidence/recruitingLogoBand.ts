export type LogoBandItem = {
  src: string;
  alt: string;
  /** Display height in px; width follows aspect ratio */
  height?: number;
};

/**
 * Default partner / stack marks for GenAI recruiting pages (Cloudinary).
 * Reuse `AnimatedLogoBand` with this list or pass a custom array per opportunity.
 */
export const genAiRecruitingLogoBand: LogoBandItem[] = [
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692506/jobs/weaviate-logo_g6kh3i.svg',
    alt: 'Weaviate',
    height: 36,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/hugging-face-logo_crknti.svg',
    alt: 'Hugging Face',
    height: 36,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/Pinecone-Full-Logo-Black_wwrbcu.svg',
    alt: 'Pinecone',
    height: 32,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/lang-graph-logo_g4x6ik.svg',
    alt: 'LangGraph',
    height: 34,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692506/jobs/LangChain_Logo.svg_n0z55e.png',
    alt: 'LangChain',
    height: 40,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/python-logo_edccrx.png',
    alt: 'Python',
    height: 40,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/FastAPI_logo.svg_qrodn7.png',
    alt: 'FastAPI',
    height: 36,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/open-ai-logo_vvvlks.png',
    alt: 'OpenAI',
    height: 36,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/crew_only_logo_x3lqxj.png',
    alt: 'CrewAI',
    height: 40,
  },
];

/** Editorial portrait (optional hero swap vs headshot). */
export const moisesSanabriaPortraitFull =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750944896/portraits/moises-sanabria-portrait_qtathx.jpg';

export const moisesSanabriaHeadshot =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692604/portraits/moises-headshot_asgp7d.jpg';
