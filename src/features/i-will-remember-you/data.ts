import { placeholderImages } from './utils/placeholderImages'

export const nodes = [
  { 
    id: "Visitor", 
    group: 1, 
    power: "—", 
    poetic: "Human spark",
    image: placeholderImages["Visitor"]
  },
  { 
    id: "Mic / STT", 
    group: 2, 
    power: "2 W", 
    poetic: "Where voices crystallise into vectors",
    image: placeholderImages["Mic / STT"]
  },
  { 
    id: "Camera", 
    group: 2, 
    power: "1.5 W", 
    poetic: "Remembering faces, softly",
    image: placeholderImages["Camera"]
  },
  { 
    id: "Jetson Orin Nano", 
    group: 3, 
    power: "15 W", 
    poetic: "Edge-brain of the sculpture",
    image: placeholderImages["Jetson Orin Nano"]
  },
  { 
    id: "LLM + Memory DB", 
    group: 3, 
    power: "N/A", 
    poetic: "Dream archive & forgetting engine",
    image: placeholderImages["LLM + Memory DB"]
  },
  { 
    id: "Stable Diffusion", 
    group: 3, 
    power: "GPU", 
    poetic: "Turns text into lucid imagery",
    image: placeholderImages["Stable Diffusion"]
  },
  { 
    id: "Display", 
    group: 4, 
    power: "45 W", 
    poetic: "Projects the machine's daydreams",
    image: placeholderImages["Display"]
  },
  { 
    id: "Speakers", 
    group: 4, 
    power: "5 W", 
    poetic: "Gives the ghost a voice",
    image: placeholderImages["Speakers"]
  },
  { 
    id: "Local NVMe SSD", 
    group: 5, 
    power: "3 W", 
    poetic: "100-year memory crystal",
    image: placeholderImages["Local NVMe SSD"]
  },
  { 
    id: "UPS / Power", 
    group: 5, 
    power: "—", 
    poetic: "Heart-beat even in darkness",
    image: placeholderImages["UPS / Power"]
  },
  { 
    id: "Optional LAN / Wi-Fi", 
    group: 5, 
    power: "—", 
    poetic: "Occasional breath of the cloud",
    image: placeholderImages["Optional LAN / Wi-Fi"]
  },
]

export const links = [
  { source: "Visitor", target: "Mic / STT" },
  { source: "Visitor", target: "Camera" },
  { source: "Mic / STT", target: "Jetson Orin Nano" },
  { source: "Camera", target: "Jetson Orin Nano" },
  { source: "Jetson Orin Nano", target: "LLM + Memory DB" },
  { source: "LLM + Memory DB", target: "Stable Diffusion" },
  { source: "Stable Diffusion", target: "Display" },
  { source: "LLM + Memory DB", target: "Speakers" },
  { source: "Jetson Orin Nano", target: "Local NVMe SSD" },
  { source: "UPS / Power", target: "Jetson Orin Nano" },
  { source: "Optional LAN / Wi-Fi", target: "Jetson Orin Nano" },
] 