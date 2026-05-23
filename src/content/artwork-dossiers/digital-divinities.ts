import type { ArtworkDossier } from '@/content/artwork-dossiers/types';

const IMG_INSTALL =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png';

const IMG_MUSE_1 =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779573344/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities-FutureMuses_fpvc0n.jpg';

const IMG_MUSE_2 =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779573358/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities-FutureMuses-2_krpuis.jpg';

export const DIGITAL_DIVINITIES_DOSSIER: ArtworkDossier = {
  slug: 'digital_divinities',
  yearDisplay: '2023–2026',
  publicDescription:
    'Eternal Reflections of Digital Divinities is an interactive AI installation that transforms spectators into artificial muses in real time. The work materializes the internet as ritual, asking how platforms, images, and algorithms shape self-reflection, belief, and networked life.',
  description: `Eternal Reflections of Digital Divinities is an interactive AI installation that transforms spectators into artificial muses in real time. The work materializes the internet as ritual, asking how platforms, images, and algorithms shape self-reflection, belief, and networked life.

The piece begins with a participant looking into a camera. Their image is captured and translated by a generative AI system into a digitally deified portrait, part icon, part hallucination, part algorithmic mirror. The viewer is not simply represented; they are processed through machine logic that beautifies, mythologizes, and estranges them.

The installation treats artificial intelligence not as a neutral tool but as a cultural environment. It stages the moment when technology becomes devotional: when the screen no longer just displays us but produces symbolic versions of ourselves that feel seductive, authoritative, and spiritually charged.

By combining participation, portraiture, machine vision, generative image systems, and installation, the work creates a ritual encounter between viewer and machine. Its meaning depends on activation: the spectator offers their image to the system and receives a transformed version of the self, shaped by the same networked infrastructures that influence identity, attention, and desire.

The work asks what happens when the sacred image is no longer carved, painted, or photographed, but generated, instantly, personally, and endlessly, by the systems that increasingly mediate how we see and believe.`,
  status: 'Ongoing interactive installation — adaptable to exhibition context',
  category: 'Experiential AI installation',
  dimensions: 'Variable',
  heroImage: {
    url: IMG_INSTALL,
    alt: 'Eternal Reflections of Digital Divinities — installation view with LED panel and bust sculpture',
    caption: 'Installation view',
    role: 'Hero installation image',
  },
  gallery: [
    {
      url: IMG_MUSE_1,
      alt: 'Generative artificial muse portrait — Digital Divinities output',
      caption: 'Real-time generative portrait returned to the participant',
      role: 'AI output',
    },
    {
      url: IMG_MUSE_2,
      alt: 'Generative artificial muse portrait — variant output',
      caption: 'Artificial muse — generative portrait (variant)',
      role: 'AI output',
    },
    {
      url: IMG_INSTALL,
      alt: 'Eternal Reflections of Digital Divinities — full installation view',
      caption: 'Installation view — LED panel, bust, and capture interface',
      role: 'Installation view',
    },
  ],
  videos: [
    {
      youtubeId: '4sRDSQY7WZI',
      title: 'Digital Divinities — documentation',
      caption: 'Installation documentation and live interaction.',
    },
    {
      youtubeId: 'NbT94ooCs54',
      title: 'Digital Divinities — process documentation',
      caption: 'Real-time capture and generative transformation.',
    },
  ],
  experienceSteps: [
    {
      title: 'Encounter',
      description: 'The visitor approaches the installation — bust, LED panel, and capture interface frame the body as ritual site.',
    },
    {
      title: 'Capture',
      description: 'Their image is photographed or scanned through a camera-based capture system.',
    },
    {
      title: 'Transformation',
      description: 'Generative AI produces a digital divinity — an artificial muse returned as symbolic, machine-mediated portrait.',
    },
    {
      title: 'Reflection',
      description: 'The viewer sees themselves translated: part icon, part hallucination, part algorithmic mirror.',
    },
  ],
  technicalDescription: `Eternal Reflections of Digital Divinities is a real-time interactive AI installation developed using TouchDesigner, Python, CableGL, a local GPU workstation, ControlNet, and Stable Diffusion. This system integrates camera-based image capture, generative image processing, and a live display interface to transform participant portraits into digitally deified figures.

When a participant approaches the installation and looks into the camera, their image is captured and processed through a custom software pipeline. TouchDesigner functions as the real-time visual environment, coordinating the interface, camera input, display behavior, and the overall flow of the installation. Python scripts facilitate the generative workflow by preparing images, managing system logic, and linking the capture process to the AI transformation.

The image-generation layer employs Stable Diffusion in conjunction with ControlNet. The participant's photograph serves as the structural source for the generated image, enabling the system to retain pose, composition, and likeness while transforming the portrait into an artificial muse. The resulting figure is simultaneously icon, hallucination, and algorithmic mirror. CableGL facilitates the live visual presentation by connecting the generated imagery to the installation's display environment. The installation operates on a local GPU workstation, enabling real-time transformation during the participant's interaction rather than relying on pre-rendered output. The technical process progresses from image capture, to AI interpretation, to visual return. This loop is integral to the artwork's meaning: the viewer submits their image to the system and receives a symbolic version of the self shaped by machine vision and generative image culture.

The core components consist of a camera or webcam, local GPU computer, TouchDesigner patch, Python scripts, Stable Diffusion workflow, ControlNet, CableGL, display or projection system, lighting, and a participant-facing interface. The installation is adaptable and can function as a monitor-based station, projection work, or expanded environment depending on the exhibition context.

Technology is integral to the conceptual framework. The camera functions as a threshold, the GPU as a ritual engine, and the generative model as a system of translation. Collectively, these elements create a participatory encounter in which spectators observe themselves being processed, beautified, mythologized, and returned as digital divinities.

This work aligns with the Experiential Innovation category, as it relies on participation, presence, real-time processing, and activation. In the absence of the spectator's body and image, the work remains incomplete.`,
  technicalComponents: [
    'Camera or webcam',
    'Local GPU computer',
    'TouchDesigner patch',
    'Python scripts',
    'Stable Diffusion workflow',
    'ControlNet',
    'CableGL',
    'Display or projection system',
    'Lighting',
    'Participant-facing interface',
  ],
  technicalLayers: [
    { layer: 'TouchDesigner', function: 'Real-time visual environment — interface, camera input, display flow' },
    { layer: 'Python', function: 'Generative workflow — image prep, system logic, capture-to-AI link' },
    { layer: 'Stable Diffusion + ControlNet', function: 'Portrait transformation using participant photo as structural source' },
    { layer: 'CableGL', function: 'Live connection of generated imagery to display environment' },
    { layer: 'Local GPU workstation', function: 'Real-time transformation during participant interaction' },
    { layer: 'Camera', function: 'Threshold — captures participant image' },
    { layer: 'Display / projection', function: 'Returns the transformed portrait to the viewer' },
  ],
  recognition: [
    {
      award: 'The Lumen Prize, 2026',
      category: 'Experiential Innovation',
      status: 'submitted',
      summary:
        'Submitted under Experiential Innovation because the work’s meaning depends on activation. The spectator is not an observer of a finished image, but a participant in a real-time ritual of capture, transformation, and return. The artwork exists through the encounter between body, camera, interface, and generative system.',
    },
  ],
  presentations: [
    {
      year: '2026',
      title: 'Maker Faire Miami',
      location: 'Miami, FL',
      type: 'public activation',
    },
    {
      year: '2024',
      title: 'Bakehouse Art Complex — Open Studios',
      location: 'Miami, FL',
      type: 'presentation',
    },
    {
      year: '2023',
      title: 'Art Week Miami / Lincoln Road',
      location: 'Miami, FL',
      type: 'public activation',
    },
  ],
  press: [
    {
      publication: 'Future Commerce',
      title: 'Ancient Inspiration and Divine Innovation: A Recap of Muses',
      url: 'https://www.futurecommerce.com/posts/ancient-inspiration-and-divine-innovation-a-recap-of-muses',
      description:
        'Coverage of the Muses program and the Digital Divinities installation in dialogue with ancient inspiration and contemporary AI innovation.',
    },
  ],
  inquire: {
    email: 'm@moises.tech',
    subject: 'Inquiry: Eternal Reflections of Digital Divinities — exhibition or program',
  },
};

export function digitalDivinitiesInquireHref(): string {
  const q = new URLSearchParams({ subject: DIGITAL_DIVINITIES_DOSSIER.inquire.subject });
  return `mailto:${DIGITAL_DIVINITIES_DOSSIER.inquire.email}?${q.toString()}`;
}
