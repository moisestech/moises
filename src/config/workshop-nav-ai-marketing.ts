import { 
    Sparkles,
    Brain,
    Zap,
    BookOpen,
    PlayCircle,
    Heart,
    Target,
    Rocket,
    Star,
    CheckCircle,
    Download,
    ArrowRight,
    User
} from "lucide-react";


export const WORKSHOP_NAVIGATION = {
    // ... existing workshops ...
    "the-art-of-ai-marketing": {
      title: "The Art of AI Marketing",
      description: "Master AI-powered marketing, automation, and content creation for artists",
      icon: Sparkles,
      sections: [
        {
          title: "Introduction & Overview",
          items: [
            {
              title: "Welcome + Workshop Overview",
              href: "/workshop/the-art-of-ai-marketing/welcome",
              icon: Sparkles,
              description: "Introduction to AI marketing and workshop structure"
            },
            {
              title: "AI Marketing Fundamentals",
              href: "/workshop/the-art-of-ai-marketing/fundamentals",
              icon: Brain,
              description: "Core concepts and principles of AI marketing"
            },
            {
              title: "Automation Tools",
              href: "/workshop/the-art-of-ai-marketing/automation",
              icon: Zap,
              description: "Overview of automation tools and platforms"
            }
          ]
        },
        {
          title: "Content Creation",
          items: [
            {
              title: "AI Writing & Copy",
              href: "/workshop/the-art-of-ai-marketing/content/writing",
              icon: BookOpen,
              description: "Creating compelling content with AI assistance"
            },
            {
              title: "Visual Content",
              href: "/workshop/the-art-of-ai-marketing/content/visual",
              icon: PlayCircle,
              description: "Generating and optimizing visual content"
            },
            {
              title: "Social Media",
              href: "/workshop/the-art-of-ai-marketing/content/social",
              icon: Heart,
              description: "Social media strategies and automation"
            }
          ]
        },
        {
          title: "Automation & Integration",
          items: [
            {
              title: "n8n Workflows",
              href: "/workshop/the-art-of-ai-marketing/automation/n8n",
              icon: Zap,
              description: "Building automated workflows with n8n"
            },
            {
              title: "Make Scenarios",
              href: "/workshop/the-art-of-ai-marketing/automation/make",
              icon: Rocket,
              description: "Creating automation scenarios with Make"
            },
            {
              title: "API Integration",
              href: "/workshop/the-art-of-ai-marketing/automation/api",
              icon: Target,
              description: "Integrating APIs and services"
            }
          ]
        },
        {
          title: "Strategy & Analytics",
          items: [
            {
              title: "Marketing Strategy",
              href: "/workshop/the-art-of-ai-marketing/strategy",
              icon: Target,
              description: "Developing effective marketing strategies"
            },
            {
              title: "Analytics & Tracking",
              href: "/workshop/the-art-of-ai-marketing/analytics",
              icon: Star,
              description: "Measuring and analyzing performance"
            },
            {
              title: "Performance Optimization",
              href: "/workshop/the-art-of-ai-marketing/optimization",
              icon: CheckCircle,
              description: "Optimizing marketing efforts"
            }
          ]
        },
        {
          title: "Resources",
          items: [
            {
              title: "Templates",
              href: "/workshop/the-art-of-ai-marketing/resources/templates",
              icon: Download,
              description: "Ready-to-use templates and resources"
            },
            {
              title: "Tools & Platforms",
              href: "/workshop/the-art-of-ai-marketing/resources/tools",
              icon: ArrowRight,
              description: "Recommended tools and platforms"
            },
            {
              title: "Community",
              href: "/workshop/the-art-of-ai-marketing/resources/community",
              icon: User,
              description: "Join our community of artists"
            }
          ]
        }
      ]
    }
  } as const;