/**
 * The Cloud Is Thirsty.
 * Images are the nine 2026 Post-AI Readymades studies uploaded 14 Oct 2026.
 * They are AI-assisted image studies, not photographs of fabricated installations.
 */

export type WaterStudy = {
  id: string;
  number: string;
  title: string;
  premise: string;
  text: string;
  alt: string;
  image: string;
  width: number;
  height: number;
};

const FOLDER =
  'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const waterStudies: WaterStudy[] = [
  {
    id: 'spring-coolant',
    number: '081',
    title: 'Spring Coolant',
    premise: 'A graphics card sits on the water a person would drink.',
    text: 'Two unopened 24-packs of spring water form a low support for a liquid-cooled graphics card. Clear tubes and a power cable cross between the machine and the bottles.',
    alt: 'Image study of a liquid-cooled graphics card resting on two stacked 24-packs of bottled spring water, with clear tubes and a power cable, in a white gallery.',
    image: `${FOLDER}/v1792000724/art/moisestech-website/research/post-ai-readymades/moises-sanabria_post-ai-readymades_081_spring-coolant.png`,
    width: 941,
    height: 1672,
  },
  {
    id: 'still-processing',
    number: '048',
    title: 'Still Processing',
    premise: 'A workstation keeps running while water leaves it.',
    text: 'A beige monitor and tower stand on a metal frame. Water runs down through cables onto a keyboard and into a shallow tray. Vines climb the machine.',
    alt: 'Image study of a beige computer workstation with water streaming from the monitor through hanging cables into a floor tray, with vines around the frame.',
    image: `${FOLDER}/v1792000735/art/moisestech-website/research/post-ai-readymades/moises-sanabria_post-ai-readymades_048_still-processing.png`,
    width: 941,
    height: 1672,
  },
  {
    id: 'hydrant-compute',
    number: '086',
    title: 'Hydrant Compute',
    premise: 'Municipal water hardware becomes a stand for the computer.',
    text: 'Two red hydrants are joined by a pipe. A glass-sided desktop tower sits on each hydrant, fans lit, as if the street supply were the cooling system.',
    alt: 'Image study of two red fire hydrants connected by a pipe, each supporting a glass desktop computer tower, in a white gallery.',
    image: `${FOLDER}/v1792000730/art/moisestech-website/research/post-ai-readymades/moises-sanabria_post-ai-readymades_086_hydrant-compute.png`,
    width: 941,
    height: 1672,
  },
  {
    id: 'wet-algorithm',
    number: '084',
    title: 'Wet Algorithm',
    premise: 'A wet-floor sign announces the condition of the model.',
    text: 'A yellow caution sign reads “Wet Algorithm.” A small fan and a status screen are fixed to the sign. It stands in a puddle over a tablet showing a flooded interface.',
    alt: 'Image study of a yellow wet-floor sign reading Wet Algorithm, with a small fan and status screen, standing over a tablet in a clear puddle.',
    image: `${FOLDER}/v1792000728/art/moisestech-website/research/post-ai-readymades/moises-sanabria_post-ai-readymades_084_wet-algorithm.png`,
    width: 1122,
    height: 1402,
  },
  {
    id: 'operational-risk',
    number: '026',
    title: 'Operational Risk',
    premise: 'The server is already standing in the warning.',
    text: 'A rack of servers stands on a field of yellow wet-floor signs. Cables leave the rack and cross the signs. This is a later image study. The Post-AI Readymades catalogue still shows an earlier render as study 026.',
    alt: 'Image study of a server rack standing on dozens of yellow wet-floor caution signs, with cables running across the signs.',
    image: `${FOLDER}/v1792000734/art/moisestech-website/research/post-ai-readymades/moises-sanabria_post-ai-readymades_026_operational-risk.png`,
    width: 1023,
    height: 1537,
  },
  {
    id: 'more-context',
    number: '085',
    title: 'More Context',
    premise: 'The assistant asks for context while the head comes apart as water.',
    text: 'A glass head rests on a laptop. Its face breaks into a spray across the keyboard. The screen shows an assistant reply: “More context may help.”',
    alt: 'Image study of a glass head dissolving into a spray of water across a laptop keyboard, while the screen shows an AI assistant saying More context may help.',
    image: `${FOLDER}/v1792000729/art/moisestech-website/research/post-ai-readymades/moises-sanabria_post-ai-readymades_085_more-context.png`,
    width: 941,
    height: 1672,
  },
  {
    id: 'beach-mode',
    number: '052',
    title: 'Beach Mode',
    premise: 'Leisure is staged with dead screens and a picture of the sea.',
    text: 'A lounge chair is built from cracked displays, one of them reading 1%. An umbrella sheds a fringe of cables. A television beside the chair shows a beach.',
    alt: 'Image study of a lounge chair made of broken screens under an umbrella raining cables, next to a television showing a beach.',
    image: `${FOLDER}/v1792000737/art/moisestech-website/research/post-ai-readymades/moises-sanabria_post-ai-readymades_052_beach-mode.png`,
    width: 941,
    height: 1672,
  },
  {
    id: 'land-update',
    number: '082',
    title: 'Land Update',
    premise: 'A fish walks out of the picture of the water.',
    text: 'A silver fish with legs, one of them in a sneaker, stands on a monitor lying flat. The screen shows surf. A cable leaves the monitor.',
    alt: 'Image study of a fish with legs, one foot in a sneaker, standing on a flat monitor that shows ocean waves.',
    image: `${FOLDER}/v1792000725/art/moisestech-website/research/post-ai-readymades/moises-sanabria_post-ai-readymades_082_land-update.png`,
    width: 1023,
    height: 1537,
  },
  {
    id: 'feed-spill',
    number: '083',
    title: 'Feed Spill',
    premise: 'The feed comes down as paper and stays on the floor.',
    text: 'Printers on a warehouse rack send long strips of pictures to the ground. The paper pools like a flood. There is no literal water here. The spill is the residue of a feed.',
    alt: 'Image study of printers on a tall warehouse rack sending strips of printed pictures down into a wide pile on the floor.',
    image: `${FOLDER}/v1792000726/art/moisestech-website/research/post-ai-readymades/moises-sanabria_post-ai-readymades_083_feed-spill.png`,
    width: 941,
    height: 1672,
  },
];

export const waterResearchReferences = [
  {
    id: 'liquid-cooled-nike',
    title: 'PC Liquid Cooled Nike Air Max Deluxe',
    year: '2018',
    status: 'Earlier artwork',
    description:
      'A sneaker adapted with PC liquid-cooling components. An earlier object in which a consumer good and a machine share a body.',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/pc-liquid-cool-nike-shoe_isqxjd.jpg',
    alt: 'PC Liquid Cooled Nike Air Max Deluxe, a sneaker with computer liquid-cooling components',
    caption: 'PC Liquid Cooled Nike Air Max Deluxe · 2018',
    href: '/art/pc_liquid_cooled_nike',
    credit: 'Moises Sanabria',
  },
  {
    id: 'weight-of-cloud',
    title: 'The Weight of the Cloud',
    year: '2026',
    status: 'Adjacent research',
    description:
      'Obsolete electronics compressed into a cube. Not a water study. A parallel look at the hardware hidden by the word cloud.',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785768536/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-03-material-density_bsjcxa.png',
    alt: 'Material-density study of The Weight of the Cloud, a cube of compressed electronics',
    caption: 'The Weight of the Cloud · material-density study · 2026',
    href: '/research/weight-of-the-cloud',
    credit: 'Moises Sanabria + Fabiola Larios',
  },
] as const;
