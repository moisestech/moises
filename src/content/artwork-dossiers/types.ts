export type ArtworkDossierPressLink = {
  publication: string;
  title: string;
  url: string;
  description?: string;
};

export type ArtworkDossierRecognition = {
  /** e.g. "The Lumen Prize, 2026" */
  award: string;
  category?: string;
  status: 'submitted' | 'finalist' | 'winner' | 'honorable-mention';
  summary: string;
};

export type ArtworkDossierExperienceStep = {
  title: string;
  description: string;
};

export type ArtworkDossierTechnicalLayer = {
  layer: string;
  function: string;
};

export type ArtworkDossierPresentation = {
  year: string;
  title: string;
  location: string;
  type: 'exhibition' | 'presentation' | 'public activation' | 'studio research';
};

export type ArtworkDossierGalleryImage = {
  url: string;
  alt: string;
  caption: string;
  /** Slot label shown in gallery module */
  role: string;
};

export type ArtworkDossierVideo = {
  youtubeId: string;
  title: string;
  caption?: string;
};

export type ArtworkDossier = {
  slug: string;
  /** Display year when range differs from artwork.year */
  yearDisplay: string;
  /** ~280 characters — public-facing lead (hero) */
  publicDescription: string;
  /** Full artwork description — paragraph-separated */
  description: string;
  status: string;
  category: string;
  dimensions: string;
  heroImage: ArtworkDossierGalleryImage;
  gallery: ArtworkDossierGalleryImage[];
  videos: ArtworkDossierVideo[];
  experienceSteps: ArtworkDossierExperienceStep[];
  /** Full technical description — paragraph-separated */
  technicalDescription: string;
  /** Optional component inventory shown below technical description */
  technicalComponents?: string[];
  technicalLayers: ArtworkDossierTechnicalLayer[];
  recognition: ArtworkDossierRecognition[];
  presentations: ArtworkDossierPresentation[];
  press: ArtworkDossierPressLink[];
  inquire: {
    email: string;
    subject: string;
  };
};
