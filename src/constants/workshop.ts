import { Laptop, Users, Monitor, Globe } from 'lucide-react'

// Types for workshop content
export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'article' | 'video' | 'tool';
  platform?: 'wix' | 'squarespace' | 'github';
}

export interface Segment {
  id: string;
  title: string;
  description: string;
  activities?: string[];
  wix?: string;
  squarespace?: string;
  github?: string;
  resources?: Resource[];
  wixGuide?: string[];
  squarespaceGuide?: string[];
  githubGuide?: string[];
  aiTools?: string[];
  artistTips?: string[];
}

export interface Session {
  id: string;
  title: string;
  description: string;
  duration: string;
  segments: Segment[];
}

export interface Day {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  icon: typeof Laptop | typeof Users | typeof Monitor | typeof Globe;
  sessions: Session[];
}

export const workshopContent: Day[] = [
  {
    id: "1",
    title: "Foundations of Website Creation",
    description: "An introductory virtual session on the foundations of website building and design basics",
    date: "Monday, April 24, 2025",
    time: "6:00 - 8:30 PM",
    location: "Virtual",
    icon: Laptop,
    sessions: [
      {
        id: "1",
        title: "Understanding Websites & Digital Presence",
        description: "Learn the fundamentals of website creation and how to establish your digital presence as an artist",
        duration: "1.5 hours",
        segments: [
          {
            id: "1",
            title: "Introduction to Website Building",
            description: "Understanding the basics of website creation and digital presence for artists",
            activities: [
              "Overview of website building fundamentals",
              "Understanding the importance of digital presence for artists",
              "Exploring different website platforms and their strengths"
            ],
            wixGuide: [
              "Choose a design template",
              "Start free trial",
              "Intro to site structure",
              "Explore ADI (AI assistant)",
              "Portfolio templates",
              "Visual builder"
            ],
            squarespaceGuide: [
              "Choose a design template",
              "Start free trial",
              "Intro to site structure",
              "Blueprint AI setup",
              "Template selection"
            ],
            githubGuide: [
              "Create GitHub account",
              "Intro to GitHub Pages",
              "Select a Jekyll theme",
              "Set up repository"
            ],
            aiTools: [
              "Blueprint AI (Squarespace)",
              "Wix AI site builder",
              "GitHub Copilot"
            ],
            artistTips: [
              "Think of your site as a gallery show",
              "Focus on clarity of message",
              "Reference sites you admire",
              "Consider your audience and goals",
              "Plan for future growth"
            ]
          }
        ]
      },
      {
        id: "2",
        title: "Domains, Hosting & Web Platforms",
        description: "Learn about domain names, hosting options, and how to set up your website platform",
        duration: "1.5 hours",
        segments: [
          {
            id: "2",
            title: "Domain and Hosting Setup",
            description: "Understanding domain names, hosting options, and platform-specific setup",
            activities: [
              "Choosing and registering domain names",
              "Understanding hosting options",
              "Setting up platform-specific configurations"
            ],
            wixGuide: [
              "Domain through Wix or connect external",
              "Performance starter setup",
              "Domain management",
              "Hosting configuration"
            ],
            squarespaceGuide: [
              "Connecting a custom domain",
              "Domain naming tips",
              "Hosting setup",
              "SSL configuration"
            ],
            githubGuide: [
              "How to use username.github.io",
              "CNAME for custom domain",
              "GitHub Pages hosting",
              "Custom domain setup"
            ],
            aiTools: [
              "Tools to generate domain name ideas (e.g. Namelix, ChatGPT)",
              "AI-powered domain availability checkers",
              "Domain suggestion tools"
            ],
            artistTips: [
              "Keep your domain easy to spell",
              "Make it memorable",
              "Ensure it aligns with your brand",
              "Consider future expansion",
              "Check social media availability"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Architecting Your Website",
    description: "Hands-on practice and website customization",
    date: "Saturday, April 26, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "In-Person at Bakehouse",
    icon: Users,
    sessions: [
      {
        id: "1",
        title: "Site Planning & Structure",
        description: "Learn how to plan and structure your website for optimal user experience",
        duration: "2.5 hours",
        segments: [
          {
            id: "1",
            title: "Website Structure and Navigation",
            description: "Planning your website's structure and navigation for optimal user experience",
            activities: [
              "Creating a site map",
              "Planning navigation structure",
              "Organizing content hierarchy"
            ],
            wixGuide: [
              "Use Menus & Pages panel",
              "Set up galleries/about/contact pages",
              "Navigation structure",
              "Page hierarchy"
            ],
            squarespaceGuide: [
              "Page setup via Pages panel",
              "Navigation bar setup",
              "Use of index pages",
              "Content organization"
            ],
            githubGuide: [
              "Markdown/HTML file structure",
              "Folder layout",
              "Link hierarchy",
              "Navigation setup"
            ],
            aiTools: [
              "Use ChatGPT to brainstorm page names",
              "Wireframe generators like Diagram.com",
              "AI-powered site structure suggestions"
            ],
            artistTips: [
              "Keep navigation simple (Home, Gallery, About, Contact)",
              "Use plain, clear labels",
              "Consider user flow",
              "Prioritize important content",
              "Maintain consistent structure"
            ]
          }
        ]
      },
      {
        id: "2",
        title: "Wireframing and Layouts",
        description: "Learn how to create effective layouts and wireframes for your website",
        duration: "2.5 hours",
        segments: [
          {
            id: "2",
            title: "Layout Design and Wireframing",
            description: "Creating effective layouts and wireframes for your website",
            activities: [
              "Creating wireframes",
              "Designing layouts",
              "Planning content placement"
            ],
            wixGuide: [
              "Drag-and-drop strip layout",
              "Pro Gallery for artwork",
              "Layout customization",
              "Responsive design"
            ],
            squarespaceGuide: [
              "Use pre-built section layouts",
              "Visual order of content",
              "Layout customization",
              "Responsive design"
            ],
            githubGuide: [
              "Hand-coding HTML layouts",
              "Using templates with layouts",
              "CSS grid/flexbox",
              "Responsive design"
            ],
            aiTools: [
              "Figma with AI plugins for wireframing",
              "Copilot for layout markup",
              "AI-powered layout suggestions"
            ],
            artistTips: [
              "Wireframe like curating an exhibition",
              "Balance text and image",
              "Consider visual hierarchy",
              "Plan for different screen sizes",
              "Maintain consistent spacing"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Building Your Website",
    description: "Hands-on practice and website customization",
    date: "Sunday, April 27, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "In-Person at Bakehouse",
    icon: Monitor,
    sessions: [
      {
        id: "1",
        title: "Content Integration – Text, Media, Galleries",
        description: "Learn how to integrate text, media, and galleries into your website",
        duration: "2.5 hours",
        segments: [
          {
            id: "1",
            title: "Content Management",
            description: "Integrating and managing content on your website",
            activities: [
              "Adding and formatting text",
              "Uploading and managing media",
              "Creating and organizing galleries"
            ],
            wixGuide: [
              "Drag images into Pro Gallery",
              "Use prebuilt about/contact sections",
              "Text formatting",
              "Media management"
            ],
            squarespaceGuide: [
              "Add gallery sections",
              "Image blocks",
              "Edit text blocks",
              "Content organization"
            ],
            githubGuide: [
              "Add Markdown or HTML files",
              "Upload images",
              "Embed via syntax",
              "Content management"
            ],
            aiTools: [
              "AI-assisted text writing for bios/artwork captions",
              "Image optimization tools",
              "Content organization suggestions"
            ],
            artistTips: [
              "Use descriptive filenames",
              "Add alt text for images",
              "Avoid text walls",
              "Organize content logically",
              "Maintain consistent formatting"
            ]
          }
        ]
      },
      {
        id: "2",
        title: "Design Customization",
        description: "Learn how to customize the design of your website",
        duration: "2.5 hours",
        segments: [
          {
            id: "2",
            title: "Visual Design and Styling",
            description: "Customizing the visual design and styling of your website",
            activities: [
              "Customizing colors and fonts",
              "Adjusting layouts",
              "Creating visual consistency"
            ],
            wixGuide: [
              "Theme manager",
              "Style customizer",
              "Mobile view adjustments",
              "Design elements"
            ],
            squarespaceGuide: [
              "Style editor (fonts/colors)",
              "Layout tweaks via Fluid Engine",
              "Design customization",
              "Responsive adjustments"
            ],
            githubGuide: [
              "Edit CSS files for branding",
              "Copilot-assisted styling",
              "Custom design elements",
              "Responsive design"
            ],
            aiTools: [
              "Generate brand palettes",
              "Font pairings with AI tools",
              "Design style suggestions",
              "Color scheme generators"
            ],
            artistTips: [
              "Consistency is key",
              "Design shouldn't outshine your work",
              "Use colors that complement your art",
              "Maintain readability",
              "Consider accessibility"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Advanced Features & Publishing",
    description: "A wrap-up virtual session on advanced features to ensure your website is responsive and functional",
    date: "Monday, April 28, 2025",
    time: "6:00 - 8:30 PM",
    location: "Virtual",
    icon: Globe,
    sessions: [
      {
        id: "1",
        title: "Analytics, Performance, and Accessibility",
        description: "Learn about analytics, performance, and accessibility for your website",
        duration: "1.5 hours",
        segments: [
          {
            id: "1",
            title: "Website Optimization",
            description: "Optimizing your website for search engines, analytics, and accessibility",
            activities: [
              "Setting up analytics",
              "Configuring analytics",
              "Ensuring accessibility"
            ],
            wixGuide: [
              "Performance starter setup",
              "Alt text setup",
              "Metadata editor",
              "Analytics integration"
            ],
            squarespaceGuide: [
              "Analytics panel",
              "Google Search Console connection",
              "Alt tags",
              "Analytics setup"
            ],
            githubGuide: [
              "Add meta tags manually",
              "Use sitemap.xml",
              "Verify via Search Console",
              "Accessibility markup"
            ],
            aiTools: [
              "ChatGPT for writing content titles/descriptions",
              "Alt text suggestions",
              "Accessibility checkers",
              "Performance optimization tools"
            ],
            artistTips: [
              "Write with real humans in mind",
              "Accessible sites are respected more",
              "Use descriptive alt text",
              "Maintain consistent metadata",
              "Regularly check analytics"
            ]
          }
        ]
      },
      {
        id: "2",
        title: "Publishing & Maintenance",
        description: "Learn how to publish and maintain your website",
        duration: "1.5 hours",
        segments: [
          {
            id: "2",
            title: "Launch and Maintenance",
            description: "Publishing your website and maintaining it over time",
            activities: [
              "Final checks and publishing",
              "Setting up maintenance routines",
              "Planning updates"
            ],
            wixGuide: [
              "Hit publish",
              "Upgrade for custom domain",
              "Test mobile/desktop view",
              "Maintenance tools"
            ],
            squarespaceGuide: [
              "Upgrade to paid plan",
              "Assign domain",
              "Auto-publish live changes",
              "Maintenance features"
            ],
            githubGuide: [
              "Push to main branch",
              "Confirm site build success",
              "Domain setup with CNAME",
              "Version control"
            ],
            aiTools: [
              "Copilot for code fixes",
              "Use ChatGPT for ongoing content updates",
              "Automated testing tools",
              "Maintenance reminders"
            ],
            artistTips: [
              "Revisit your site every few months",
              "Update work regularly",
              "Keep content fresh",
              "Monitor performance",
              "Backup important content"
            ]
          }
        ]
      }
    ]
  }
]

// Helper functions
export const getDayById = (id: string): Day | undefined => {
  return workshopContent.find(day => day.id === id);
};

export const getSessionById = (id: string): Session | undefined => {
  for (const day of workshopContent) {
    const session = day.sessions.find(session => session.id === id);
    if (session) return session;
  }
  return undefined;
};

export const getSegmentById = (id: string): Segment | undefined => {
  for (const day of workshopContent) {
    for (const session of day.sessions) {
      const segment = session.segments.find(segment => segment.id === id);
      if (segment) return segment;
    }
  }
  return undefined;
}; 