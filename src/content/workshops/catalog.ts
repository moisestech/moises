/**
 * Public workshop catalog — imported from Workshops-All Data.csv.
 * Regenerate when the sheet changes. Do not hand-edit row content long-term.
 *
 * Routing:
 * - /workshops — hub (institutional pilots + this catalog)
 * - /workshop/[slug] — SEO landings for Ready catalog titles
 * - Reserved deep programs keep their existing multi-page routes
 * - Institutional incubator modules: workshopsOfferings.ts
 */

export type WorkshopCatalogStatus = 'ready' | 'in-development' | 'coming-soon';

export type WorkshopCatalogTrack =
  | 'Presence'
  | 'AI Literacy'
  | 'Creative Coding'
  | 'Systems + Archive';

export type WorkshopCatalogEntry = {
  slug: string;
  title: string;
  publicTitle: string;
  track: WorkshopCatalogTrack;
  status: WorkshopCatalogStatus;
  level: string;
  duration: string;
  subtitle: string;
  hook: string;
  shortDescription: string;
  whyNow: string;
  learningOutcomes: readonly string[];
  featured: boolean;
  /** Public route for this workshop. */
  href: string;
  sortOrder: number;
};

/** Slugs with dedicated multi-page programs (not the thin SEO landing). */
export const WORKSHOP_RESERVED_DEEP_SLUGS = [
  'own-your-digital-presence',
  'the-art-of-ai-agents',
  'learn-ai-without-losing-yourself',
  'artist-in-the-automation',
  'ai-and-the-arts',
  'the-art-of-ai-marketing',
  'moonlighter-ai-3d-printing',
  'agentic-evidence-pipeline',
] as const;

export const workshopCatalog: WorkshopCatalogEntry[] = [

  {
    slug: "own-your-digital-presence",
    title: "Own Your Digital Presence",
    publicTitle: "Own Your Digital Presence",
    track: "Presence" as WorkshopCatalogTrack,
    status: "ready",
    level: "Beginner",
    duration: "3–4 hours",
    subtitle: "Build the structure, language, and publishing plan for a website that clearly represents your practice.",
    hook: "Build the structure, language, and action plan for an artist website that clearly represents your practice.",
    shortDescription: "In this beginner-friendly workshop, participants develop the core structure of an artist website and draft essential text for presenting their work online. The focus is not on finishing an entire site in one sitting, but on leaving with a strong website spine, clearer writing, and a realistic plan for publishing.",
    whyNow: "Many artists still depend too heavily on social platforms and do not have a clear digital home for their work. This workshop helps participants move from scattered online presence to a more legible, professional, and maintainable artist website.",
    learningOutcomes: ["Define a clear website structure for an artist portfolio", "Draft a stronger About section and homepage language", "Identify the most important pages and content priorities", "Build a realistic publishing plan that can continue after class", "Understand how to keep a website updated over time"],
    featured: true,
    href: "/workshop/own-your-digital-presence",
    sortOrder: 1,
  },
  {
    slug: "seo-for-artists-in-the-age-of-ai-search",
    title: "SEO for Artists in the Age of AI Search",
    publicTitle: "SEO for Artists in the Age of AI Search",
    track: "Presence" as WorkshopCatalogTrack,
    status: "ready",
    level: "Beginner–Intermediate",
    duration: "2–3 hours",
    subtitle: "Learn how artists get found now across search, metadata, and AI-driven discovery.",
    hook: "Learn how artists get found across search, metadata, and AI-driven discovery.",
    shortDescription: "This workshop introduces artists to the fundamentals of search visibility in a way that is practical, contemporary, and artist-centered. Participants learn how website titles, project descriptions, image alt text, metadata, and page structure affect discoverability, and how AI search changes what gets surfaced online.",
    whyNow: "Visibility is no longer just about posting on social media. Artists increasingly need to think about websites, structured text, search engines, AI summaries, and how their work appears across multiple digital surfaces.",
    learningOutcomes: ["Understand basic SEO concepts in plain language", "Improve titles, page descriptions, and alt text", "Learn how AI search changes discoverability", "Identify common visibility problems on artist websites", "Build a practical optimization checklist for future updates"],
    featured: true,
    href: "/workshop/seo-for-artists-in-the-age-of-ai-search",
    sortOrder: 2,
  },
  {
    slug: "writing-about-your-digital-practice",
    title: "Writing About Your Digital Practice",
    publicTitle: "Writing About Your Digital Practice",
    track: "Presence" as WorkshopCatalogTrack,
    status: "ready",
    level: "Beginner",
    duration: "2–3 hours",
    subtitle: "Write artist statements, bios, and project descriptions that sound like you and make your work more legible.",
    hook: "Write artist statements, bios, and project descriptions that sound like you and make your work legible.",
    shortDescription: "In this writing-focused workshop, participants strengthen the language around their practice without becoming vague, defensive, or overly technical. The session focuses on artist bios, statements, short project descriptions, and web-ready language.",
    whyNow: "Artists working with digital tools are often asked to explain their practice across grants, exhibitions, websites, and talks. Many need help making their work understandable without flattening it.",
    learningOutcomes: ["Draft a clearer artist bio and short statement", "Distinguish between About text, artist statement, and project description", "Improve clarity without losing conceptual depth", "Edit generic or overly technical writing", "Build a reusable writing workflow for future use"],
    featured: true,
    href: "/workshop/writing-about-your-digital-practice",
    sortOrder: 3,
  },
  {
    slug: "documentation-for-artists",
    title: "Documentation for Artists",
    publicTitle: "Documentation for Artists",
    track: "Presence" as WorkshopCatalogTrack,
    status: "ready",
    level: "Beginner",
    duration: "2–3 hours",
    subtitle: "Learn how to document artwork, process, and installation in ways that are usable for websites, applications, and archives.",
    hook: "Learn how to document artwork, process, and installation in ways that are usable for websites, applications, and archives.",
    shortDescription: "This workshop helps artists build stronger documentation habits across still images, installation views, process captures, screen-based work, and short-form video. Participants learn what to document, how to select and prepare material for different uses, and how to organize assets.",
    whyNow: "Poor documentation weakens visibility, funding applications, and institutional legibility. Artists increasingly need documentation that works across websites, grant forms, social media, and archives.",
    learningOutcomes: ["Understand core documentation priorities for different artwork types", "Improve selection of images and process material", "Learn what different audiences need to see", "Build a documentation checklist for future use", "Organize assets more effectively for reuse"],
    featured: true,
    href: "/workshop/documentation-for-artists",
    sortOrder: 4,
  },
  {
    slug: "ai-for-artists-voice-workflow-and-authorship",
    title: "AI for Artists: Voice, Workflow, and Authorship",
    publicTitle: "AI for Artists: Voice, Workflow, and Authorship",
    track: "AI Literacy" as WorkshopCatalogTrack,
    status: "ready",
    level: "Beginner",
    duration: "3 hours",
    subtitle: "Learn how to use AI as a creative support tool without flattening your voice or confusing your authorship.",
    hook: "Learn how to use AI as a creative support tool without flattening your voice or confusing your authorship.",
    shortDescription: "This workshop offers a grounded introduction to AI for artists who want practical value without hype. Participants explore how AI can support ideation, writing, organization, and experimentation while also discussing authorship, bias, overreliance, and the cultural stakes of AI-assisted creation.",
    whyNow: "Artists are increasingly expected to understand AI tools, but many are unsure how to engage them without losing clarity, authorship, or critical perspective.",
    learningOutcomes: ["Identify useful roles AI can play in an art practice", "Understand major authorship and overreliance concerns", "Use AI for ideation, research, drafting, and workflow support", "Build a more critical and intentional relationship to these tools", "Clarify what should remain human-led in the creative process"],
    featured: true,
    href: "/workshop/ai-for-artists-voice-workflow-and-authorship",
    sortOrder: 5,
  },
  {
    slug: "vibe-coding-with-net-art",
    title: "Vibe-coding with Net Art",
    publicTitle: "Vibe-coding with Net Art",
    track: "Creative Coding" as WorkshopCatalogTrack,
    status: "ready",
    level: "Beginner",
    duration: "3 hours",
    subtitle: "Make a simple, shareable internet artwork using lightweight code and creative experimentation.",
    hook: "Make a simple, shareable internet artwork using lightweight code and creative experimentation.",
    shortDescription: "This beginner-friendly workshop introduces participants to web-based art through lightweight coding, experimentation, and publishing. Rather than teaching programming as a rigid technical skill, the class treats HTML and CSS as artistic materials and the browser as a creative surface.",
    whyNow: "Many artists want access to creative coding and browser-based art without needing a full development background. This workshop lowers the barrier while keeping the work conceptually alive.",
    learningOutcomes: ["Understand the basic structure of a simple web artwork", "Use HTML and CSS as creative materials", "Work with AI as a coding assistant when helpful", "Publish a lightweight net art piece online", "Gain confidence approaching code experimentally"],
    featured: true,
    href: "/workshop/vibe-coding-with-net-art",
    sortOrder: 6,
  },
  {
    slug: "organizing-your-digital-studio",
    title: "Organizing Your Digital Studio",
    publicTitle: "Organizing Your Digital Studio",
    track: "Systems + Archive" as WorkshopCatalogTrack,
    status: "ready",
    level: "Beginner",
    duration: "2 hours",
    subtitle: "Build a file, folder, naming, and backup system that actually supports your practice.",
    hook: "Build a file, folder, naming, and backup system that actually supports your practice.",
    shortDescription: "This workshop helps artists build a practical digital organization system for files, folders, assets, and backups. Participants learn how to reduce clutter, name files more consistently, separate drafts from finals, and create structures that make documentation, grant writing, publishing, and studio work easier over time.",
    whyNow: "Many artists lose time, momentum, and opportunities because their digital material is scattered, inconsistently named, or difficult to retrieve.",
    learningOutcomes: ["Create a basic folder and project organization system", "Improve naming conventions and versioning habits", "Identify what should be backed up and how", "Reduce clutter and confusion across digital workspaces", "Build a system that supports publishing, grants, and archiving"],
    featured: true,
    href: "/workshop/organizing-your-digital-studio",
    sortOrder: 7,
  },
  {
    slug: "ai-copyright-and-creative-risk",
    title: "AI, Copyright, and Creative Risk",
    publicTitle: "AI, Copyright, and Creative Risk",
    track: "AI Literacy" as WorkshopCatalogTrack,
    status: "ready",
    level: "Beginner–Intermediate",
    duration: "2–3 hours",
    subtitle: "Understand the practical questions artists face around AI, human authorship, copyright, and disclosure.",
    hook: "Understand the practical questions artists face around AI, human authorship, copyright, and disclosure.",
    shortDescription: "This workshop gives artists a grounded overview of the questions emerging around AI-assisted creative work, including human authorship, copyright uncertainty, disclosure, and practical risk. The session helps participants understand the current landscape, avoid common misconceptions, and develop clearer language around process, authorship, and responsible use.",
    whyNow: "As more artists use AI in writing, image generation, ideation, and workflow, they need practical literacy around what is known, what remains unsettled, and how to reduce confusion or overclaiming.",
    learningOutcomes: ["Understand core ideas around authorship and human contribution", "Recognize common misconceptions about copyright and AI outputs", "Learn practical habits for documenting process and reducing risk", "Speak more clearly about how AI is used in a project", "Build a more responsible and informed creative workflow"],
    featured: true,
    href: "/workshop/ai-copyright-and-creative-risk",
    sortOrder: 8,
  },
  {
    slug: "portfolio-pages-that-actually-work",
    title: "Portfolio Pages That Actually Work",
    publicTitle: "Portfolio Pages That Actually Work",
    track: "Presence" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Beginner–Intermediate",
    duration: "2–3 hours",
    subtitle: "Turn project pages into clear, useful records that work for curators, grants, and public audiences.",
    hook: "Turn project pages into clear, useful records that work for curators, grants, and public audiences.",
    shortDescription: "Learn how to structure project pages so images, text, and context work together clearly for websites, grants, curators, and the public.",
    whyNow: "Many artist websites have weak project pages that do not communicate enough context, quality, or structure.",
    learningOutcomes: ["Build a strong project-page structure", "Understand sequencing and hierarchy for images and text", "Pair visuals with useful context and concise writing", "Improve readability for curators, grants, and public audiences", "Create a reusable project-page framework for future updates"],
    featured: false,
    href: "/workshop/portfolio-pages-that-actually-work",
    sortOrder: 9,
  },
  {
    slug: "social-profiles-link-hubs-and-public-presence",
    title: "Social Profiles, Link Hubs, and Public Presence",
    publicTitle: "Social Profiles, Link Hubs, and Public Presence",
    track: "Presence" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Beginner",
    duration: "2 hours",
    subtitle: "Make your Instagram, link hub, newsletter, and website work together as one clear public presence.",
    hook: "Make your Instagram, link hub, newsletter, and website work together as one clear public presence.",
    shortDescription: "Align your social profiles, link systems, and website into one readable public-facing presence that reduces confusion and improves discoverability.",
    whyNow: "Artists often have fragmented digital identities across platforms, which weakens clarity and follow-through.",
    learningOutcomes: ["Align social profiles, link hubs, and websites into one clear public presence", "Improve consistency across platforms without overcomplicating the system", "Reduce audience confusion and make next steps easier to follow", "Identify what belongs on each platform and what should live on the website", "Build a lightweight public-presence maintenance plan"],
    featured: false,
    href: "/workshop/social-profiles-link-hubs-and-public-presence",
    sortOrder: 10,
  },
  {
    slug: "prompting-for-artists",
    title: "Prompting for Artists",
    publicTitle: "Prompting for Artists",
    track: "AI Literacy" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Beginner",
    duration: "2 hours",
    subtitle: "Learn prompting as a creative skill for image, text, research, and ideation workflows.",
    hook: "Learn prompting as a creative skill for image, text, research, and ideation workflows.",
    shortDescription: "A practical introduction to prompting for artists using text, image, and research workflows with more structure and creative intention.",
    whyNow: "Artists increasingly need practical prompting literacy, but many prompts remain vague, inconsistent, or overly generic.",
    learningOutcomes: ["Understand core prompt components and how they shape outputs", "Prompt more clearly for text, image, research, and ideation tasks", "Iterate prompts with more structure and intentionality", "Compare weak and strong prompting patterns", "Build a reusable personal prompt workflow"],
    featured: false,
    href: "/workshop/prompting-for-artists",
    sortOrder: 11,
  },
  {
    slug: "ai-research-for-creative-projects",
    title: "AI Research for Creative Projects",
    publicTitle: "AI Research for Creative Projects",
    track: "AI Literacy" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Beginner–Intermediate",
    duration: "2–3 hours",
    subtitle: "Use AI tools to gather references, compare concepts, summarize ideas, and support project development.",
    hook: "Use AI tools to gather references, compare concepts, summarize ideas, and support project development.",
    shortDescription: "Learn how to use AI tools for project research, concept comparison, reference gathering, and idea development without falling into shallow synthesis.",
    whyNow: "Artists need help using AI for thinking and research, not just output generation.",
    learningOutcomes: ["Use AI tools to support research rather than replace it", "Compare references, ideas, and conceptual directions more clearly", "Build stronger research prompts and synthesis habits", "Identify shallow or misleading AI outputs more quickly", "Create a reusable research workflow for future projects"],
    featured: false,
    href: "/workshop/ai-research-for-creative-projects",
    sortOrder: 12,
  },
  {
    slug: "ai-and-the-artist-statement",
    title: "AI and the Artist Statement",
    publicTitle: "AI and the Artist Statement",
    track: "AI Literacy" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Beginner",
    duration: "2 hours",
    subtitle: "Use AI to draft and edit artist writing while preserving your voice, conceptual clarity, and specificity.",
    hook: "Use AI to draft and edit artist writing while preserving your voice, conceptual clarity, and specificity.",
    shortDescription: "Use AI as a drafting partner for artist statements and project texts while learning how to edit out generic language and preserve your tone.",
    whyNow: "Many artists want writing support without letting AI language erase their voice or flatten their concepts.",
    learningOutcomes: ["Use AI to draft artist writing without losing tone or specificity", "Identify where AI helps and where heavy editing is still needed", "Compare rough notes, AI drafts, and human revisions more critically", "Preserve voice while speeding up early drafting stages", "Build a repeatable AI-assisted writing workflow"],
    featured: false,
    href: "/workshop/ai-and-the-artist-statement",
    sortOrder: 13,
  },
  {
    slug: "building-a-personal-ai-workflow",
    title: "Building a Personal AI Workflow",
    publicTitle: "Building a Personal AI Workflow",
    track: "AI Literacy" as WorkshopCatalogTrack,
    status: "coming-soon",
    level: "Intermediate",
    duration: "2–3 hours",
    subtitle: "Build a sustainable personal system for using AI across drafting, planning, organizing, and creative iteration.",
    hook: "Build a sustainable personal system for using AI across drafting, planning, organizing, and creative iteration.",
    shortDescription: "Design a repeatable AI workflow for your own practice across ideation, drafting, organization, and revision, with stronger boundaries and documentation.",
    whyNow: "Artists often experiment with AI inconsistently and without a repeatable system that supports long-term practice.",
    learningOutcomes: ["Map a repeatable AI workflow for ideation, drafting, organization, and revision", "Identify where AI helps most and where it should stay limited", "Organize prompts, outputs, and process notes more clearly", "Reduce chaos and repetition across AI-assisted tasks", "Build a more sustainable personal system for continued use"],
    featured: false,
    href: "/workshop/building-a-personal-ai-workflow",
    sortOrder: 14,
  },
  {
    slug: "code-art-into-html",
    title: "Code Art into HTML",
    publicTitle: "Code Art into HTML",
    track: "Creative Coding" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Beginner",
    duration: "2–3 hours",
    subtitle: "Learn how simple HTML and CSS can become artistic material, not just technical scaffolding.",
    hook: "Learn how simple HTML and CSS can become artistic material, not just technical scaffolding.",
    shortDescription: "A soft-entry workshop into HTML and CSS as expressive materials for online artworks, visual experiments, and browser-based publishing.",
    whyNow: "Artists often want a softer and more expressive entry point into code than a traditional technical tutorial.",
    learningOutcomes: ["Understand the basic structure of HTML and CSS in plain language", "Use simple markup and styling as artistic material", "Experiment with text, image, color, and layout as medium", "Publish a basic web-based artwork or study page", "Gain confidence continuing with browser-based making"],
    featured: false,
    href: "/workshop/code-art-into-html",
    sortOrder: 15,
  },
  {
    slug: "interactive-web-projects-for-artists",
    title: "Interactive Web Projects for Artists",
    publicTitle: "Interactive Web Projects for Artists",
    track: "Creative Coding" as WorkshopCatalogTrack,
    status: "coming-soon",
    level: "Intermediate",
    duration: "3–4 hours",
    subtitle: "Build simple interactive web pieces using scroll, click, image, and text-based behaviors.",
    hook: "Build simple interactive web pieces using scroll, click, image, and text-based behaviors.",
    shortDescription: "Learn how to build simple interactive web works using user actions, transitions, image/text states, and conceptual interaction patterns.",
    whyNow: "Artists increasingly want websites that function as artworks, not just static portfolios.",
    learningOutcomes: ["Understand how interaction changes the meaning of a web-based artwork", "Prototype simple interactive behaviors using scroll, click, image, and text states", "Plan an interactive concept before building it", "Gain confidence structuring a small interactive web work", "Identify next-step tools and approaches for continued experimentation"],
    featured: false,
    href: "/workshop/interactive-web-projects-for-artists",
    sortOrder: 16,
  },
  {
    slug: "creative-coding-without-fear",
    title: "Creative Coding Without Fear",
    publicTitle: "Creative Coding Without Fear",
    track: "Creative Coding" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Beginner",
    duration: "2–3 hours",
    subtitle: "A soft-entry workshop for artists who are curious about code but intimidated by it.",
    hook: "A soft-entry workshop for artists who are curious about code but intimidated by it.",
    shortDescription: "A gentle introduction to creative coding for artists who want to experiment with digital making but feel blocked by jargon or fear.",
    whyNow: "Fear and jargon keep many artists from trying code-based practice at all.",
    learningOutcomes: ["Reduce fear and intimidation around code-based practice", "Understand key concepts in plain language without jargon overload", "Try small browser-based experiments in a low-pressure environment", "Identify a realistic next step into creative coding", "Build confidence through approachable technical play"],
    featured: false,
    href: "/workshop/creative-coding-without-fear",
    sortOrder: 17,
  },
  {
    slug: "browser-based-artworks",
    title: "Browser-Based Artworks",
    publicTitle: "Browser-Based Artworks",
    track: "Creative Coding" as WorkshopCatalogTrack,
    status: "coming-soon",
    level: "Intermediate",
    duration: "3 hours",
    subtitle: "Use the browser as exhibition space, publication surface, and artistic medium.",
    hook: "Use the browser as exhibition space, publication surface, and artistic medium.",
    shortDescription: "Explore the browser as a medium for exhibition, publication, interface, and artistic experimentation through references and lightweight prototypes.",
    whyNow: "Browser-native work remains one of the most accessible and conceptually rich formats for digital practice.",
    learningOutcomes: ["Understand the browser as a medium rather than just a delivery tool", "Study examples of browser-native artworks and online publishing forms", "Prototype a small browser-based concept or composition", "Frame web-native work more clearly as artistic practice", "Build a foundation for future browser-based experimentation"],
    featured: false,
    href: "/workshop/browser-based-artworks",
    sortOrder: 18,
  },
  {
    slug: "experimental-digital-forms",
    title: "Experimental Digital Forms",
    publicTitle: "Experimental Digital Forms",
    track: "Creative Coding" as WorkshopCatalogTrack,
    status: "coming-soon",
    level: "Advanced / Experimental",
    duration: "3–4 hours",
    subtitle: "Explore nonstandard digital forms that sit between artwork, interface, publication, and experiment.",
    hook: "Explore nonstandard digital forms that sit between artwork, interface, publication, and experiment.",
    shortDescription: "A more open experimental workshop for artists ready to move beyond templates into strange, hybrid, or speculative digital structures.",
    whyNow: "Some artists want to move beyond templates and conventional websites into more speculative digital structures.",
    learningOutcomes: ["Identify digital forms that move beyond conventional websites and templates", "Explore interface, publication, and artwork as overlapping categories", "Prototype a speculative or nonstandard digital form", "Push aesthetic and structural choices more intentionally", "Expand comfort with experimental digital practice"],
    featured: false,
    href: "/workshop/experimental-digital-forms",
    sortOrder: 19,
  },
  {
    slug: "archiving-digital-work",
    title: "Archiving Digital Work",
    publicTitle: "Archiving Digital Work",
    track: "Systems + Archive" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Beginner–Intermediate",
    duration: "2–3 hours",
    subtitle: "Learn practical strategies for preserving websites, files, media assets, and process across a digital art practice.",
    hook: "Learn practical strategies for preserving websites, files, media assets, and process across a digital art practice.",
    shortDescription: "Build a practical preservation mindset for digital artworks, websites, assets, and process materials so your work remains accessible over time.",
    whyNow: "Time-based, web-based, and software-based works are especially vulnerable to loss and fragmentation.",
    learningOutcomes: ["Understand what parts of a digital practice should be archived", "Learn how to preserve process alongside final outputs", "Create a basic preservation and storage framework", "Identify risks for web-based, time-based, and software-based work", "Build a practical archive checklist for future use"],
    featured: false,
    href: "/workshop/archiving-digital-work",
    sortOrder: 20,
  },
  {
    slug: "publishing-your-practice",
    title: "Publishing Your Practice",
    publicTitle: "Publishing Your Practice",
    track: "Systems + Archive" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Beginner–Intermediate",
    duration: "2–3 hours",
    subtitle: "Turn process, research, and documentation into public-facing pages, PDFs, or simple online publications.",
    hook: "Turn process, research, and documentation into public-facing pages, PDFs, or simple online publications.",
    shortDescription: "Learn how to translate process, research, and documentation into public-facing web pages, PDFs, small publications, or other shareable formats.",
    whyNow: "Artists increasingly need to publish context, not just post finished images.",
    learningOutcomes: ["Choose the right publishing format for process-based material", "Structure research, documentation, and notes for public sharing", "Translate internal studio material into clearer public-facing outputs", "Connect publishing to websites, portfolios, and public communication", "Build a small publishing plan for future use"],
    featured: false,
    href: "/workshop/publishing-your-practice",
    sortOrder: 21,
  },
  {
    slug: "teaching-your-digital-practice",
    title: "Teaching Your Digital Practice",
    publicTitle: "Teaching Your Digital Practice",
    track: "Systems + Archive" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Intermediate",
    duration: "2–3 hours",
    subtitle: "Learn how to translate your own artistic process into a workshop or educational offering.",
    hook: "Learn how to translate your own artistic process into a workshop or educational offering.",
    shortDescription: "Identify the teachable parts of your practice and turn them into a clearer workshop, demo, clinic, or artist-centered learning format.",
    whyNow: "More artists are teaching, facilitating, or building educational offerings around their own process.",
    learningOutcomes: ["Identify the teachable parts of your artistic process", "Turn a practice into a workshop, clinic, or demo structure", "Clarify learning outcomes and audience level", "Avoid overcomplication in teaching design", "Draft a simple workshop outline you can reuse or adapt"],
    featured: false,
    href: "/workshop/teaching-your-digital-practice",
    sortOrder: 22,
  },
  {
    slug: "from-workshop-to-resource-packet",
    title: "From Workshop to Resource Packet",
    publicTitle: "From Workshop to Resource Packet",
    track: "Systems + Archive" as WorkshopCatalogTrack,
    status: "in-development",
    level: "Intermediate",
    duration: "2 hours",
    subtitle: "Convert a live workshop into a reusable packet with slides, links, worksheets, and follow-up materials.",
    hook: "Convert a live workshop into a reusable packet with slides, links, worksheets, and follow-up materials.",
    shortDescription: "Learn how to convert a live workshop into reusable educational assets like packets, slide decks, links, worksheets, and LMS-ready follow-up materials.",
    whyNow: "Reusable learning materials increase institutional value, clarity, and long-term reach.",
    learningOutcomes: ["Identify what parts of a workshop can become reusable assets", "Turn slides, links, and exercises into a coherent packet structure", "Improve follow-up value for participants and institutions", "Prepare workshops for future LMS or archive use", "Build a repeatable resource-packet workflow"],
    featured: false,
    href: "/workshop/from-workshop-to-resource-packet",
    sortOrder: 23,
  },
  {
    slug: "designing-a-sustainable-digital-practice",
    title: "Designing a Sustainable Digital Practice",
    publicTitle: "Designing a Sustainable Digital Practice",
    track: "Systems + Archive" as WorkshopCatalogTrack,
    status: "coming-soon",
    level: "Intermediate",
    duration: "3 hours",
    subtitle: "Build a digital practice that is visible, organized, critically aware, and maintainable over time.",
    hook: "Build a digital practice that is visible, organized, critically aware, and maintainable over time.",
    shortDescription: "A capstone-style workshop on building a digital practice that connects visibility, workflow, experimentation, documentation, and long-term maintenance.",
    whyNow: "Artists need systems that support longevity, not just bursts of production or temporary visibility.",
    learningOutcomes: ["Connect visibility, workflow, documentation, and experimentation into one sustainable system", "Identify the biggest friction points in a digital practice", "Build a realistic structure for long-term maintenance rather than short bursts", "Clarify what to prioritize now versus later", "Leave with a practical next-step plan for a more sustainable practice"],
    featured: false,
    href: "/workshop/designing-a-sustainable-digital-practice",
    sortOrder: 24,
  },
  {
    slug: 'quickbooks-automation-for-artists',
    title: 'QuickBooks Automation for Artists',
    publicTitle: 'QuickBooks Automation for Artists',
    track: 'Systems + Archive' as WorkshopCatalogTrack,
    status: 'ready',
    level: 'Beginner–Intermediate',
    duration: '2–3 hours',
    subtitle:
      'Turn studio bookkeeping into a readable, human-supervised workflow — invoices, expenses, and categories without drowning in spreadsheets.',
    hook: 'Make QuickBooks usable for an artist studio — with AI-assisted routing and clear human review gates.',
    shortDescription:
      'This workshop helps artists and studio managers map their money workflows, set up practical QuickBooks categories, and introduce light automation so invoices and expenses stay legible. The goal is not to become an accountant overnight — it is to leave with a maintainable operating template and review habits that fit a working practice. Part of Creative Infrastructure for Artists.',
    whyNow:
      'Artists lose hours and clarity when bookkeeping stays ad hoc. Automation only helps when categories, review gates, and documentation are designed for how studios actually work — not for corporate finance teams.',
    learningOutcomes: [
      'Map the studio money workflow (invoices, expenses, reimbursements, sales)',
      'Set up or clean a practical QuickBooks category structure',
      'Identify what can be automated vs what must stay human-approved',
      'Draft a simple runbook for ongoing bookkeeping hygiene',
      'Leave with templates that survive after the workshop',
    ],
    featured: true,
    href: '/workshop/quickbooks-automation-for-artists',
    sortOrder: 7,
  },
  {
    slug: 'moonlighter-ai-3d-printing',
    title: 'From Image to Object: AI-Assisted 3D Printing',
    publicTitle: 'From Image to Object: AI-Assisted 3D Printing',
    track: 'Creative Coding' as WorkshopCatalogTrack,
    status: 'ready',
    level: 'Advanced beginner / Intermediate',
    duration: '6 hours',
    subtitle:
      'Moonlighter FabLab workshop: reference + prompt → AI image → mesh → slice → approved print or queue.',
    hook: 'Turn a reference and a written prompt into a validated, sliced, print-ready object on Bambu printers.',
    shortDescription:
      'An advanced follow-on to Moonlighter’s Basic 3D Printing class. Participants develop a print-friendly concept with replaceable AI image tools, convert it to a mesh, inspect and optionally repair geometry, slice in Bambu Studio, and leave with source files plus one approved print attempt.',
    whyNow:
      'Artists and makers need a transferable method across AI image tools and image-to-3D services—not a single-vendor demo—while still meeting real printer constraints, approval gates, and durable project archives.',
    learningOutcomes: [
      'Combine a reference image and transformation prompt for printable volume',
      'Convert, inspect, and triage an AI-generated mesh',
      'Choose Miniature vs Sculpture tier with support and time tradeoffs',
      'Slice and document a Bambu Studio project for instructor approval',
      'Package a reproducible project archive and understand recovery/pickup policy',
    ],
    featured: true,
    href: '/workshop/moonlighter-ai-3d-printing',
    sortOrder: 0,
  },
  {
    slug: 'agentic-evidence-pipeline',
    title: 'Agentic Evidence Pipeline',
    publicTitle: 'Agentic Evidence Pipeline',
    track: 'Systems + Archive' as WorkshopCatalogTrack,
    status: 'ready',
    level: 'Intermediate',
    duration: 'Self-guided',
    subtitle:
      'Reference implementation: model versus harness, Allow/Ask/Deny, inspectable TypeScript, and a proposed FDE thin slice.',
    hook: 'Inspect a TypeScript reference for governed evidence — not a hosted customer product.',
    shortDescription:
      'A single-page teaching surface for the Agentic Evidence Pipeline. Participants inspect how a harness owns context, tools, permissions, and review; how unsupported citations fail closed; and how a proposed six-word engagement would move from observation to handoff. AEP is a reference implementation with synthetic fixtures. The thin slice is proposed, not Deloitte client work.',
    whyNow:
      'Teams need a way to talk about agent governance without inventing product screenshots. This page keeps the vocabulary inspectable: README-derived diagrams, public source files, and a labeled proposed method.',
    learningOutcomes: [
      'Separate model judgment from harness ownership',
      'Read Allow / Ask / Deny as an authority boundary',
      'Inspect public TypeScript for review, policy, retrieval, and jobs',
      'Walk a proposed Discover → Handoff thin slice without treating it as shipped work',
    ],
    featured: true,
    href: '/workshop/agentic-evidence-pipeline',
    sortOrder: 8,
  },
] as const;

export function getWorkshopBySlug(slug: string) {
  return workshopCatalog.find((w) => w.slug === slug);
}

export function listReadyWorkshops() {
  return workshopCatalog
    .filter((w) => w.status === 'ready')
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function listFeaturedWorkshops() {
  return workshopCatalog
    .filter((w) => w.featured)
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

/** Ready catalog titles that use the thin SEO landing (not a reserved deep program). */
export function listCatalogLandingSlugs(): string[] {
  const reserved = new Set<string>(WORKSHOP_RESERVED_DEEP_SLUGS);
  return listReadyWorkshops()
    .filter((w) => !reserved.has(w.slug))
    .map((w) => w.slug);
}

export function relatedWorkshops(slug: string, limit = 3) {
  const current = getWorkshopBySlug(slug);
  if (!current) return [];
  return listReadyWorkshops()
    .filter((w) => w.slug !== slug && w.track === current.track)
    .slice(0, limit);
}
