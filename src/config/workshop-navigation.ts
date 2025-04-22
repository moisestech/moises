import {
  BookOpen,
  Calendar,
  Image,
  FileText,
  Layout,
  ImagePlus,
  ClipboardList,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  GraduationCap,
  Send,
  User,
  Globe,
  Server,
  Shield,
  Smartphone,
  Search,
  Code2,
  FileCode,
  LayoutDashboard,
  MessageSquare,
  PenTool,
  Monitor,
  Layers,
  Clock,
  Lightbulb,
  UserCheck,
  Code,
  Paintbrush,
  ArrowUpRight,
  DollarSign,
  Laptop,
  CheckCircle,
  Menu,
  X,
  Zap,
  Star,
  BarChart2,
  Activity,
  Presentation,
  ArrowUpCircle,
  Brain,
  RefreshCw,
  Rocket,
  Settings,
  Grid,
  Briefcase,
  ShoppingCart,
  Package,
  CreditCard,
  Link,
  Sparkles,
  PlayCircle,
  Heart,
  Target,
  Download,
  ArrowRight
} from 'lucide-react'
import { FaSquarespace, FaWix, FaGithub } from 'react-icons/fa'

// Session 1 Configuration
const session1Config = {
  title: "Session 1",
  href: "/workshop/own-your-digital-presence/day/1/session/1",
  icon: Globe,
  description: "Foundations of Digital Presence",
  items: [
    {
      title: "Introduction",
      href: "/workshop/own-your-digital-presence/day/1/session/1/introduction",
      icon: BookOpen,
      description: "Get started with the workshop",
      items: [
        {
          title: "Participants",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/participants",
          icon: Users,
          description: "Meet your fellow workshop participants"
        },
        {
          title: "Digital Presence",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/digital-presence",
          icon: Globe,
          description: "Understanding online presence"
        },
        {
          title: "Analysis",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/analysis",
          icon: Search,
          description: "Analyze website elements"
        },
        {
          title: "Sustainability",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/sustainability",
          icon: RefreshCw,
          description: "Maintaining your digital presence"
        },
        {
          title: "Vocabulary Basics",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/vocabulary",
          icon: FileText,
          description: "Essential digital presence terminology"
        }
      ]
    },
    {
      title: "Web Fundamentals",
      href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals",
      icon: Layers,
      description: "Core concepts of digital presence",
      items: [
        {
          title: "Layout",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/layout",
          icon: Layout,
          description: "Understanding website layout principles"
        },
        {
          title: "Structure",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/structure",
          icon: Layers,
          description: "Understanding website architecture and page organization"
        },
        {
          title: "Assets",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/assets",
          icon: Image,
          description: "Managing and organizing digital assets"
        },
        {
          title: "Media",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/media",
          icon: ImagePlus,
          description: "Working with different media types"
        },
        {
          title: "Content",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/content",
          icon: FileText,
          description: "Content creation and organization"
        },
        {
          title: "Events",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/events",
          icon: Calendar,
          description: "Creating and managing events across platforms"
        },
        {
          title: "About & CV",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/about-cv",
          icon: User,
          description: "Creating professional About and CV pages"
        },
        {
          title: "Gallery",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/gallery",
          icon: Image,
          description: "Creating and managing galleries across platforms"
        },
        {
          title: "Contact",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/contact",
          icon: MessageSquare,
          description: "Creating and managing contact forms across platforms"
        },
        {
          title: "Examples",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples",
          icon: Monitor,
          description: "View successful artist websites"
        }
      ]
    },
    {
      title: "Platform Guides",
      href: "/workshop/own-your-digital-presence/day/1/session/1/platforms",
      icon: Monitor,
      description: "Platform-specific guides and tutorials",
      items: [
        {
          title: "Wix",
          href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/wix",
          icon: FaWix,
          description: "Wix platform guide and tutorials"
        },
        {
          title: "Squarespace",
          href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/squarespace",
          icon: FaSquarespace,
          description: "Squarespace platform guide and tutorials"
        },
        {
          title: "GitHub",
          href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/github",
          icon: FaGithub,
          description: "GitHub platform guide and tutorials"
        }
      ]
    }
  ]
}

// Session 2 Configuration
const session2Config = {
  title: "Session 2",
  href: "/workshop/own-your-digital-presence/day/2/session/2",
  icon: MessageSquare,
  description: "Content Organization & Customization",
  items: [
    {
      title: "AI Tools",
      href: "/workshop/own-your-digital-presence/day/2/session/2/ai",
      icon: Brain,
      description: "Platform-specific AI tools and assistants",
      items: [
        {
          title: "Wix AI Assistant",
          href: "/workshop/own-your-digital-presence/day/2/session/2/ai/wix",
          icon: FaWix,
          description: "Learn about Wix's AI Assistant features"
        },
        {
          title: "Squarespace AI",
          href: "/workshop/own-your-digital-presence/day/2/session/2/ai/squarespace",
          icon: FaSquarespace,
          description: "Explore Squarespace's AI capabilities"
        },
        {
          title: "GitHub Copilot",
          href: "/workshop/own-your-digital-presence/day/2/session/2/ai/github",
          icon: FaGithub,
          description: "Master GitHub Copilot for development"
        }
      ]
    },
    {
      title: "AI Fundamentals",
      href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals",
      icon: Brain,
      description: "Introduction to AI tools for artists",
      items: [
        {
          title: "LLMs",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/llms",
          icon: MessageSquare,
          description: "Understanding Large Language Models"
        },
        {
          title: "Image Models",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/image-models",
          icon: Image,
          description: "AI models for image generation and editing"
        },
        {
          title: "Prompting",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/prompting",
          icon: PenTool,
          description: "Effective prompting techniques and strategies"
        },
        {
          title: "Ethics",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/ethics",
          icon: Shield,
          description: "Ethical considerations in AI usage"
        },
        {
          title: "Assets",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/assets",
          icon: Image,
          description: "Managing and organizing AI-generated assets"
        },
        {
          title: "Content",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/content",
          icon: FileText,
          description: "Creating and managing AI-assisted content"
        },
        {
          title: "Layout",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/layout",
          icon: Layout,
          description: "AI tools for website layout and design"
        },
        {
          title: "AI Refresh",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/ai-refresh",
          icon: RefreshCw,
          description: "Using AI to refresh and update content"
        }
      ]
    },
    {
      title: "Productivity",
      href: "/workshop/own-your-digital-presence/day/1/session/2/productivity",
      icon: Zap,
      description: "Productivity tools and systems for artists"
    },
    {
      title: "Content Strategy",
      href: "/workshop/own-your-digital-presence/day/1/session/2/content-strategy",
      icon: FileText,
      description: "Developing a content strategy for your website"
    }
  ]
}

// Day 1 Session 1 Configuration
const day1Session1Config = {
  title: "Session 1",
  href: "/workshop/own-your-digital-presence/day/1/session/1",
  icon: Globe,
  description: "Foundations of Digital Presence",
  items: [
    {
      title: "Introduction",
      href: "/workshop/own-your-digital-presence/day/1/session/1/introduction",
      icon: BookOpen,
      description: "Get started with the workshop",
      items: [
        {
          title: "Participants",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/participants",
          icon: Users,
          description: "Meet your fellow workshop participants"
        },
        {
          title: "Digital Presence",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/digital-presence",
          icon: Globe,
          description: "Understanding online presence"
        },
        {
          title: "Analysis",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/analysis",
          icon: Search,
          description: "Analyze website elements"
        },
        {
          title: "Sustainability",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/sustainability",
          icon: RefreshCw,
          description: "Maintaining your digital presence"
        },
        {
          title: "Vocabulary",
          href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/vocabulary",
          icon: FileText,
          description: "Essential digital presence terminology"
        }
      ]
    },
    {
      title: "Web Fundamentals",
      href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals",
      icon: Layers,
      description: "Core concepts of digital presence",
      items: [
        {
          title: "Layout",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/layout",
          icon: Layout,
          description: "Understanding website layout principles"
        },
        {
          title: "Structure",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/structure",
          icon: Layers,
          description: "Understanding website architecture and page organization"
        },
        {
          title: "Assets",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/assets",
          icon: Image,
          description: "Managing and organizing digital assets"
        },
        {
          title: "Media",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/media",
          icon: ImagePlus,
          description: "Working with different media types"
        },
        {
          title: "Content",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/content",
          icon: FileText,
          description: "Content creation and organization"
        },
        {
          title: "Events",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/events",
          icon: Calendar,
          description: "Creating and managing events across platforms"
        },
        {
          title: "About & CV",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/about-cv",
          icon: User,
          description: "Creating professional About and CV pages"
        },
        {
          title: "Gallery",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/gallery",
          icon: Image,
          description: "Creating and managing galleries across platforms"
        },
        {
          title: "Contact",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/contact",
          icon: MessageSquare,
          description: "Creating and managing contact forms across platforms"
        },
        {
          title: "Examples",
          href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples",
          icon: Monitor,
          description: "View successful artist websites"
        }
      ]
    },
    {
      title: "Platform Guides",
      href: "/workshop/own-your-digital-presence/day/1/session/1/platforms",
      icon: Monitor,
      description: "Platform-specific guides and tutorials",
      items: [
        {
          title: "Wix",
          href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/wix",
          icon: FaWix,
          description: "Wix platform guide and tutorials"
        },
        {
          title: "Squarespace",
          href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/squarespace",
          icon: FaSquarespace,
          description: "Squarespace platform guide and tutorials"
        },
        {
          title: "GitHub",
          href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/github",
          icon: FaGithub,
          description: "GitHub platform guide and tutorials"
        }
      ]
    }
  ]
}

// Day 1 Session 2 Configuration
const day1Session2Config = {
  title: "Session 2",
  href: "/workshop/own-your-digital-presence/day/1/session/2",
  icon: MessageSquare,
  description: "Content Organization & Customization",
  items: [
    {
      title: "AI Tools",
      href: "/workshop/own-your-digital-presence/day/2/session/2/ai",
      icon: Brain,
      description: "Platform-specific AI tools and assistants",
      items: [
        {
          title: "Wix AI Assistant",
          href: "/workshop/own-your-digital-presence/day/2/session/2/ai/wix",
          icon: FaWix,
          description: "Learn about Wix's AI Assistant features"
        },
        {
          title: "Squarespace AI",
          href: "/workshop/own-your-digital-presence/day/2/session/2/ai/squarespace",
          icon: FaSquarespace,
          description: "Explore Squarespace's AI capabilities"
        },
        {
          title: "GitHub Copilot",
          href: "/workshop/own-your-digital-presence/day/2/session/2/ai/github",
          icon: FaGithub,
          description: "Master GitHub Copilot for development"
        }
      ]
    },
    {
      title: "AI Fundamentals",
      href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals",
      icon: Brain,
      description: "Introduction to AI tools for artists",
      items: [
        {
          title: "LLMs",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/llms",
          icon: MessageSquare,
          description: "Understanding Large Language Models"
        },
        {
          title: "Image Models",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/image-models",
          icon: Image,
          description: "AI models for image generation and editing"
        },
        {
          title: "Prompting",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/prompting",
          icon: PenTool,
          description: "Effective prompting techniques and strategies"
        },
        {
          title: "Ethics",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/ethics",
          icon: Shield,
          description: "Ethical considerations in AI usage"
        },
        {
          title: "Assets",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/assets",
          icon: Image,
          description: "Managing and organizing AI-generated assets"
        },
        {
          title: "Content",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/content",
          icon: FileText,
          description: "Creating and managing AI-assisted content"
        },
        {
          title: "Layout",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/layout",
          icon: Layout,
          description: "AI tools for website layout and design"
        },
        {
          title: "AI Refresh",
          href: "/workshop/own-your-digital-presence/day/1/session/2/ai-fundamentals/ai-refresh",
          icon: RefreshCw,
          description: "Using AI to refresh and update content"
        }
      ]
    },
    {
      title: "Productivity",
      href: "/workshop/own-your-digital-presence/day/1/session/2/productivity",
      icon: Zap,
      description: "Productivity tools and systems for artists"
    },
    {
      title: "Content Strategy",
      href: "/workshop/own-your-digital-presence/day/1/session/2/content-strategy",
      icon: FileText,
      description: "Developing a content strategy for your website"
    }
  ]
}

// Day 2 Session 1 Configuration
const day2Session1Config = {
  title: "Session 1",
  href: "/workshop/own-your-digital-presence/day/2/session/1",
  icon: Code,
  description: "Platform-Specific Architecture",
  items: [
    {
      title: "Web Structure",
      href: "/workshop/own-your-digital-presence/day/2/session/1/structure",
      icon: Layout,
      description: "Understanding essential web components",
      items: [
        {
          title: "Layout Basics",
          href: "/workshop/own-your-digital-presence/day/2/session/1/structure/layout",
          icon: LayoutDashboard,
          description: "Headers, footers, sections, and grids"
        },
        {
          title: "Navigation",
          href: "/workshop/own-your-digital-presence/day/2/session/1/structure/navigation",
          icon: Menu,
          description: "Website navigation structures and best practices"
        },
        {
          title: "Components",
          href: "/workshop/own-your-digital-presence/day/2/session/1/structure/components",
          icon: Layers,
          description: "Carousels, modals, menus, and galleries"
        },
        {
          title: "Mobile Design",
          href: "/workshop/own-your-digital-presence/day/2/session/1/structure/mobile",
          icon: Smartphone,
          description: "Mobile-first design principles"
        },
        {
          title: "Wireframing",
          href: "/workshop/own-your-digital-presence/day/2/session/1/structure/wireframing",
          icon: PenTool,
          description: "Planning with sketches and AI tools"
        }
      ]
    },
    {
      title: "Content Planning",
      href: "/workshop/own-your-digital-presence/day/2/session/1/content",
      icon: ClipboardList,
      description: "Plan and prepare your content",
      items: [
        {
          title: "Content Inventory",
          href: "/workshop/own-your-digital-presence/day/2/session/1/content/inventory",
          icon: FileText,
          description: "Organize and catalog your content"
        },
        {
          title: "Asset Preparation",
          href: "/workshop/own-your-digital-presence/day/2/session/1/content/assets",
          icon: Image,
          description: "Prepare and optimize your assets"
        },
        {
          title: "Content Strategy",
          href: "/workshop/own-your-digital-presence/day/2/session/1/content/strategy",
          icon: FileText,
          description: "Develop your content strategy"
        }
      ]
    },
    {
      title: "Platform Implementation",
      href: "/workshop/own-your-digital-presence/day/2/session/1/platforms",
      icon: Monitor,
      description: "Platform-specific implementation guides",
      items: [
        {
          title: "Wix",
          href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix",
          icon: FaWix,
          description: "Wix implementation guide",
          items: [
            {
              title: "Web Structure",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/structure",
              icon: Layout,
              description: "Wix page structure and components"
            },
            {
              title: "Navigation",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/navigation",
              icon: Menu,
              description: "Wix navigation setup and customization"
            },
            {
              title: "Components",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/components",
              icon: Code2,
              description: "Wix-specific components and features"
            },
            {
              title: "Mobile Design",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/mobile",
              icon: Smartphone,
              description: "Mobile-first design in Wix"
            },
            {
              title: "Implementation",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/implementation",
              icon: Code,
              description: "Step-by-step implementation guide"
            },
            {
              title: "Templates",
              href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/wix/templates",
              icon: Layout,
              description: "Template switching and content transfer"
            },
            {
              title: "Wix Apps",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/apps",
              icon: Grid,
              description: "Essential Wix apps for your website",
              items: [
                {
                  title: "Portfolio & Media",
                  href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/apps/portfolio",
                  icon: Image,
                  description: "Portfolio, Instagram Feed, Video, and Music apps"
                },
                {
                  title: "Business Tools",
                  href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/apps/business",
                  icon: Briefcase,
                  description: "Bookings, Events, Forms, and Chat apps"
                },
                {
                  title: "E-commerce",
                  href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/apps/ecommerce",
                  icon: ShoppingCart,
                  description: "Online Store, Pricing Plans, and Donations"
                },
                {
                  title: "Community",
                  href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/apps/community",
                  icon: Users,
                  description: "Groups, File Share, and Online Programs"
                }
              ]
            }
          ]
        },
        {
          title: "Squarespace",
          href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace",
          icon: FaSquarespace,
          description: "Squarespace implementation guide",
          items: [
            {
              title: "Web Structure",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/structure",
              icon: Layout,
              description: "Squarespace page structure and components"
            },
            {
              title: "Navigation",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/navigation",
              icon: Menu,
              description: "Squarespace navigation setup and customization"
            },
            {
              title: "Components",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/components",
              icon: Code2,
              description: "Squarespace-specific components and features"
            },
            {
              title: "Mobile Design",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/mobile",
              icon: Smartphone,
              description: "Mobile-first design in Squarespace"
            },
            {
              title: "Implementation",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/implementation",
              icon: Code,
              description: "Step-by-step implementation guide"
            }
          ]
        },
        {
          title: "GitHub",
          href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/github",
          icon: FaGithub,
          description: "GitHub implementation guide",
          items: [
            {
              title: "Web Structure",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/github/structure",
              icon: Layout,
              description: "GitHub Pages structure and components"
            },
            {
              title: "Components",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/github/components",
              icon: Code2,
              description: "Custom components and features"
            },
            {
              title: "Mobile Design",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/github/mobile",
              icon: Smartphone,
              description: "Mobile-first design in GitHub Pages"
            },
            {
              title: "Implementation",
              href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/github/implementation",
              icon: Code,
              description: "Step-by-step implementation guide"
            }
          ]
        }
      ]
    },
    {
      title: "Resources & Templates",
      href: "/workshop/own-your-digital-presence/day/2/session/1/resources",
      icon: FileCode,
      description: "Platform-specific resources and templates",
      items: [
        {
          title: "Templates",
          href: "/workshop/own-your-digital-presence/day/2/session/1/resources/templates",
          icon: LayoutDashboard,
          description: "Platform-specific templates"
        },
        {
          title: "Asset Guides",
          href: "/workshop/own-your-digital-presence/day/2/session/1/resources/assets",
          icon: Image,
          description: "Asset optimization guides"
        },
        {
          title: "Testing Tools",
          href: "/workshop/own-your-digital-presence/day/2/session/1/resources/testing",
          icon: CheckSquare,
          description: "Mobile testing tools and checklists"
        },
        {
          title: "Publishing Guides",
          href: "/workshop/own-your-digital-presence/day/2/session/1/resources/publishing",
          icon: Send,
          description: "Platform-specific publishing guides"
        }
      ]
    }
  ]
}

// Day 2 Session 2 Configuration
const day2Session2Config = {
  title: "Session 2",
  href: "/workshop/own-your-digital-presence/day/2/session/2",
  icon: Rocket,
  description: "Advanced Customization & Launch",
  items: [
    {
      title: "Customization",
      href: "/workshop/own-your-digital-presence/day/2/session/2/customization",
      icon: Code,
      description: "Advanced website customization techniques",
      items: [
        {
          title: "Platform Customization",
          href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform",
          icon: Globe,
          description: "Platform-specific customization options",
          items: [
            {
              title: "Wix Apps",
              href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/wix-apps",
              icon: Grid,
              description: "Essential Wix apps for your website",
              items: [
                {
                  title: "Portfolio & Media",
                  href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/wix-apps/portfolio",
                  icon: Image,
                  description: "Portfolio, Instagram Feed, Video, and Music apps"
                },
                {
                  title: "Business Tools",
                  href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/wix-apps/business",
                  icon: Briefcase,
                  description: "Bookings, Events, Forms, and Chat apps"
                },
                {
                  title: "E-commerce",
                  href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/wix-apps/ecommerce",
                  icon: ShoppingCart,
                  description: "Online Store, Pricing Plans, and Donations"
                },
                {
                  title: "Community",
                  href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/wix-apps/community",
                  icon: Users,
                  description: "Groups, File Share, and Online Programs"
                }
              ]
            },
            {
              title: "Squarespace Extensions",
              href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/squarespace-extensions",
              icon: Grid,
              description: "Essential Squarespace extensions",
              items: [
                {
                  title: "Sales & Marketing",
                  href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/squarespace-extensions/marketing",
                  icon: BarChart2,
                  description: "Mailchimp, Weglot, SEOSpace, and LiveChat"
                },
                {
                  title: "Inventory & Products",
                  href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/squarespace-extensions/products",
                  icon: Package,
                  description: "Printful, Syncee, and inventory management"
                },
                {
                  title: "Finance & Shipping",
                  href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/squarespace-extensions/finance",
                  icon: CreditCard,
                  description: "TaxJar, QuickBooks, and shipping solutions"
                },
                {
                  title: "Connected Services",
                  href: "/workshop/own-your-digital-presence/day/2/session/2/customization/platform/squarespace-extensions/services",
                  icon: Link,
                  description: "Social media and third-party integrations"
                }
              ]
            }
          ]
        },
        {
          title: "Customization Tools",
          href: "/workshop/own-your-digital-presence/day/2/session/2/customization/tools",
          icon: Settings,
          description: "Tools for advanced customization"
        },
        {
          title: "Best Practices",
          href: "/workshop/own-your-digital-presence/day/2/session/2/customization/best-practices",
          icon: CheckCircle,
          description: "Customization best practices"
        }
      ]
    },
    {
      title: "Launch Preparation",
      href: "/workshop/own-your-digital-presence/day/2/session/2/launch",
      icon: Rocket,
      description: "Prepare your website for launch",
      items: [
        {
          title: "Platform Launch",
          href: "/workshop/own-your-digital-presence/day/2/session/2/launch/platform",
          icon: Globe,
          description: "Platform-specific launch steps"
        },
        {
          title: "Launch Checklist",
          href: "/workshop/own-your-digital-presence/day/2/session/2/launch/checklist",
          icon: ClipboardList,
          description: "Pre-launch checklist"
        },
        {
          title: "Post-Launch",
          href: "/workshop/own-your-digital-presence/day/2/session/2/launch/post-launch",
          icon: CheckCircle,
          description: "Post-launch tasks and monitoring"
        }
      ]
    },
    {
      title: "Resources",
      href: "/workshop/own-your-digital-presence/day/2/session/2/resources",
      icon: BookOpen,
      description: "Additional resources and guides",
      items: [
        {
          title: "Design Guide",
          href: "/workshop/own-your-digital-presence/day/2/session/2/resources/design",
          icon: Layout,
          description: "Advanced design techniques"
        },
        {
          title: "Optimization Tips",
          href: "/workshop/own-your-digital-presence/day/2/session/2/resources/optimization",
          icon: Zap,
          description: "Performance optimization guide"
        },
        {
          title: "Launch Checklist",
          href: "/workshop/own-your-digital-presence/day/2/session/2/resources/checklist",
          icon: CheckCircle,
          description: "Detailed launch checklist"
        }
      ]
    }
  ]
}

// Day 3 Session 1 Configuration
const day3Session1Config = {
  title: "Session 1",
  href: "/workshop/own-your-digital-presence/day/3/session/1",
  icon: Code2,
  description: "Advanced Website Features",
  items: [
    {
      title: "Extensions",
      href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/extensions",
      icon: Grid,
      description: "Essential Squarespace extensions",
      items: [
        {
          title: "Sales & Marketing",
          href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/extensions/marketing",
          icon: BarChart2,
          description: "Mailchimp, Weglot, SEOSpace, and LiveChat"
        },
        {
          title: "Inventory & Products",
          href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/extensions/products",
          icon: Package,
          description: "Printful, Syncee, and inventory management"
        },
        {
          title: "Finance & Shipping",
          href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/extensions/finance",
          icon: CreditCard,
          description: "TaxJar, QuickBooks, and shipping solutions"
        },
        {
          title: "Connected Services",
          href: "/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/extensions/services",
          icon: Link,
          description: "Social media and third-party integrations"
        }
      ]
    },
    {
      title: "Advanced Layouts",
      href: "/workshop/own-your-digital-presence/day/3/session/1/layouts",
      icon: Layout,
      description: "Creating advanced page layouts",
      items: [
        {
          title: "Grid Systems",
          href: "/workshop/own-your-digital-presence/day/3/session/1/layouts/grid",
          icon: LayoutDashboard,
          description: "Advanced grid layouts and systems"
        },
        {
          title: "Responsive Design",
          href: "/workshop/own-your-digital-presence/day/3/session/1/layouts/responsive",
          icon: Smartphone,
          description: "Advanced responsive techniques"
        },
        {
          title: "Animation",
          href: "/workshop/own-your-digital-presence/day/3/session/1/layouts/animation",
          icon: Activity,
          description: "Adding motion and transitions"
        }
      ]
    },
    {
      title: "Interactive Elements",
      href: "/workshop/own-your-digital-presence/day/3/session/1/interactive",
      icon: Zap,
      description: "Adding interactive features",
      items: [
        {
          title: "Forms",
          href: "/workshop/own-your-digital-presence/day/3/session/1/interactive/forms",
          icon: FileText,
          description: "Creating interactive forms"
        },
        {
          title: "Galleries",
          href: "/workshop/own-your-digital-presence/day/3/session/1/interactive/galleries",
          icon: Image,
          description: "Interactive image galleries"
        },
        {
          title: "Navigation",
          href: "/workshop/own-your-digital-presence/day/3/session/1/interactive/navigation",
          icon: Menu,
          description: "Advanced navigation patterns"
        }
      ]
    },
    {
      title: "Performance Optimization",
      href: "/workshop/own-your-digital-presence/day/3/session/1/performance",
      icon: Star,
      description: "Optimizing website performance",
      items: [
        {
          title: "Loading Speed",
          href: "/workshop/own-your-digital-presence/day/3/session/1/performance/speed",
          icon: Zap,
          description: "Improving loading times"
        },
        {
          title: "Asset Optimization",
          href: "/workshop/own-your-digital-presence/day/3/session/1/performance/assets",
          icon: Image,
          description: "Optimizing media assets"
        },
        {
          title: "Code Optimization",
          href: "/workshop/own-your-digital-presence/day/3/session/1/performance/code",
          icon: Code,
          description: "Optimizing website code"
        }
      ]
    }
  ]
}

// Day 3 Session 2 Configuration
const day3Session2Config = {
  title: "Session 2",
  href: "/workshop/own-your-digital-presence/day/3/session/2",
  icon: Search,
  description: "Analytics & Performance",
  items: [
    {
      title: "Analytics Basics",
      href: "/workshop/own-your-digital-presence/day/3/session/2/analytics",
      icon: BarChart2,
      description: "Understanding website analytics",
      items: [
        {
          title: "Google Analytics",
          href: "/workshop/own-your-digital-presence/day/3/session/2/analytics/google",
          icon: BarChart2,
          description: "Setting up Google Analytics"
        },
        {
          title: "Visitor Tracking",
          href: "/workshop/own-your-digital-presence/day/3/session/2/analytics/tracking",
          icon: Users,
          description: "Tracking visitor behavior"
        },
        {
          title: "Data Analysis",
          href: "/workshop/own-your-digital-presence/day/3/session/2/analytics/analysis",
          icon: Activity,
          description: "Analyzing website data"
        }
      ]
    },
    {
      title: "Performance Tracking",
      href: "/workshop/own-your-digital-presence/day/3/session/2/tracking",
      icon: Activity,
      description: "Tracking website performance",
      items: [
        {
          title: "Speed Metrics",
          href: "/workshop/own-your-digital-presence/day/3/session/2/tracking/speed",
          icon: Zap,
          description: "Monitoring loading speed"
        },
        {
          title: "User Experience",
          href: "/workshop/own-your-digital-presence/day/3/session/2/tracking/ux",
          icon: User,
          description: "Tracking user experience"
        },
        {
          title: "Error Monitoring",
          href: "/workshop/own-your-digital-presence/day/3/session/2/tracking/errors",
          icon: X,
          description: "Monitoring website errors"
        }
      ]
    }
  ]
}

// Day 4 Session 1 Configuration
const day4Session1Config = {
  title: "Session 1",
  href: "/workshop/own-your-digital-presence/day/4/session/1",
  icon: Presentation,
  description: "Final Project Showcase",
  items: [
    {
      title: "Project Presentations",
      href: "/workshop/own-your-digital-presence/day/4/session/1/presentations",
      icon: Presentation,
      description: "Showcase your completed website",
      items: [
        {
          title: "Presentation Prep",
          href: "/workshop/own-your-digital-presence/day/4/session/1/presentations/prep",
          icon: ClipboardList,
          description: "Preparing your presentation"
        },
        {
          title: "Demo Setup",
          href: "/workshop/own-your-digital-presence/day/4/session/1/presentations/demo",
          icon: Monitor,
          description: "Setting up your demo"
        },
        {
          title: "Presentation Tips",
          href: "/workshop/own-your-digital-presence/day/4/session/1/presentations/tips",
          icon: Lightbulb,
          description: "Presentation best practices"
        }
      ]
    },
    {
      title: "Feedback Session",
      href: "/workshop/own-your-digital-presence/day/4/session/1/feedback",
      icon: MessageSquare,
      description: "Receive feedback on your work",
      items: [
        {
          title: "Peer Review",
          href: "/workshop/own-your-digital-presence/day/4/session/1/feedback/peer",
          icon: Users,
          description: "Peer feedback session"
        },
        {
          title: "Instructor Feedback",
          href: "/workshop/own-your-digital-presence/day/4/session/1/feedback/instructor",
          icon: GraduationCap,
          description: "Instructor feedback session"
        },
        {
          title: "Action Items",
          href: "/workshop/own-your-digital-presence/day/4/session/1/feedback/actions",
          icon: CheckCircle,
          description: "Implementing feedback"
        }
      ]
    }
  ]
}

// Day 4 Session 2 Configuration
const day4Session2Config = {
  title: "Session 2",
  href: "/workshop/own-your-digital-presence/day/4/session/2",
  icon: ArrowUpCircle,
  description: "Future Growth & Maintenance",
  items: [
    {
      title: "Maintenance Plan",
      href: "/workshop/own-your-digital-presence/day/4/session/2/maintenance",
      icon: Shield,
      description: "Creating a maintenance plan",
      items: [
        {
          title: "Regular Updates",
          href: "/workshop/own-your-digital-presence/day/4/session/2/maintenance/updates",
          icon: RefreshCw,
          description: "Planning regular updates"
        },
        {
          title: "Security",
          href: "/workshop/own-your-digital-presence/day/4/session/2/maintenance/security",
          icon: Shield,
          description: "Website security practices"
        },
        {
          title: "Backup Strategy",
          href: "/workshop/own-your-digital-presence/day/4/session/2/maintenance/backup",
          icon: Server,
          description: "Creating backup strategies"
        }
      ]
    },
    {
      title: "Growth Strategies",
      href: "/workshop/own-your-digital-presence/day/4/session/2/growth",
      icon: ArrowUpCircle,
      description: "Planning for future growth",
      items: [
        {
          title: "Content Strategy",
          href: "/workshop/own-your-digital-presence/day/4/session/2/growth/content",
          icon: FileText,
          description: "Content growth planning"
        },
        {
          title: "Feature Roadmap",
          href: "/workshop/own-your-digital-presence/day/4/session/2/growth/features",
          icon: Star,
          description: "Planning new features"
        },
        {
          title: "Audience Growth",
          href: "/workshop/own-your-digital-presence/day/4/session/2/growth/audience",
          icon: Users,
          description: "Growing your audience"
        }
      ]
    },
    {
      title: "Next Steps",
      href: "/workshop/own-your-digital-presence/day/4/session/2/next-steps",
      icon: ArrowUpRight,
      description: "Planning your next steps",
      items: [
        {
          title: "Resources",
          href: "/workshop/own-your-digital-presence/day/4/session/2/next-steps/resources",
          icon: BookOpen,
          description: "Additional learning resources"
        },
        {
          title: "Community",
          href: "/workshop/own-your-digital-presence/day/4/session/2/next-steps/community",
          icon: Users,
          description: "Joining the community"
        },
        {
          title: "Future Learning",
          href: "/workshop/own-your-digital-presence/day/4/session/2/next-steps/learning",
          icon: GraduationCap,
          description: "Continuing your learning journey"
        }
      ]
    }
  ]
}

// Main Navigation Configuration
export const workshopInfoNavigation = {
  title: "Build Your Website: Own Your Digital Presence",
  description: "A practical, hands-on course designed to teach accessible and open-source solutions to design, host, and manage your website domain.",
  items: [
    {
      title: "Schedule",
      href: "/workshop/own-your-digital-presence/schedule",
      icon: Calendar,
      description: "View the workshop schedule and session details"
    }
  ]
}

export const workshopContentNavigation = {
  title: "Workshop Content",
  description: "Follow along with the workshop sessions and materials",
  items: [
    {
      title: "Day 1",
      href: "/workshop/own-your-digital-presence/day/1",
      icon: Clock,
      description: "Understanding Websites & Digital Presence",
      items: [
        day1Session1Config,
        day1Session2Config,
        {
          title: "Homework Challenges",
          href: "/workshop/own-your-digital-presence/day/1/homework",
          icon: ClipboardList,
          description: "Day 1 homework challenges and exercises",
          items: [
            {
              title: "Digital Presence Analysis",
              href: "/workshop/own-your-digital-presence/day/1/homework/analysis",
              icon: Search,
              description: "Analyze and document your current digital presence"
            },
            {
              title: "Platform Research",
              href: "/workshop/own-your-digital-presence/day/1/homework/research",
              icon: Monitor,
              description: "Research and compare different website platforms"
            },
            {
              title: "Content Planning",
              href: "/workshop/own-your-digital-presence/day/1/homework/content",
              icon: FileText,
              description: "Plan your website content and structure"
            }
          ]
        }
      ]
    },
    {
      title: "Day 2",
      href: "/workshop/own-your-digital-presence/day/2",
      icon: Clock,
      description: "Hands-on Website Creation",
      items: [
        day2Session1Config,
        day2Session2Config,
        {
          title: "Homework Challenges",
          href: "/workshop/own-your-digital-presence/day/2/homework",
          icon: ClipboardList,
          description: "Day 2 homework challenges and exercises",
          items: [
            {
              title: "Template Customization",
              href: "/workshop/own-your-digital-presence/day/2/homework/template",
              icon: Layout,
              description: "Customize your chosen website template"
            },
            {
              title: "Content Implementation",
              href: "/workshop/own-your-digital-presence/day/2/homework/content",
              icon: FileText,
              description: "Implement your planned content"
            },
            {
              title: "Mobile Optimization",
              href: "/workshop/own-your-digital-presence/day/2/homework/mobile",
              icon: Smartphone,
              description: "Optimize your site for mobile devices"
            }
          ]
        }
      ]
    },
    {
      title: "Day 3",
      href: "/workshop/own-your-digital-presence/day/3",
      icon: Clock,
      description: "Advanced Features & Analytics",
      items: [
        day3Session1Config,
        day3Session2Config,
        {
          title: "Homework Challenges",
          href: "/workshop/own-your-digital-presence/day/3/homework",
          icon: ClipboardList,
          description: "Day 3 homework challenges and exercises",
          items: [
            {
              title: "Advanced Features",
              href: "/workshop/own-your-digital-presence/day/3/homework/features",
              icon: Code2,
              description: "Implement advanced website features"
            },
            {
              title: "Analytics Setup",
              href: "/workshop/own-your-digital-presence/day/3/homework/analytics",
              icon: BarChart2,
              description: "Set up and configure website analytics"
            },
            {
              title: "Performance Testing",
              href: "/workshop/own-your-digital-presence/day/3/homework/performance",
              icon: Zap,
              description: "Test and optimize website performance"
            }
          ]
        }
      ]
    },
    {
      title: "Day 4",
      href: "/workshop/own-your-digital-presence/day/4",
      icon: Clock,
      description: "Final Showcase & Future Growth",
      items: [
        day4Session1Config,
        day4Session2Config,
        {
          title: "Homework Challenges",
          href: "/workshop/own-your-digital-presence/day/4/homework",
          icon: ClipboardList,
          description: "Day 4 homework challenges and exercises",
          items: [
            {
              title: "Final Project",
              href: "/workshop/own-your-digital-presence/day/4/homework/project",
              icon: Presentation,
              description: "Complete and polish your final project"
            },
            {
              title: "Growth Plan",
              href: "/workshop/own-your-digital-presence/day/4/homework/growth",
              icon: ArrowUpCircle,
              description: "Create a website growth and maintenance plan"
            },
            {
              title: "Portfolio Update",
              href: "/workshop/own-your-digital-presence/day/4/homework/portfolio",
              icon: Image,
              description: "Update your portfolio with new work"
            }
          ]
        }
      ]
    }
  ]
}

export type WorkshopNavigation = typeof workshopContentNavigation 