'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Image, Layout, FileText, Users, Zap, Shield, Clock, BookOpen, Play, RefreshCw, Copy, File, Link2, Search, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const learningObjectives = [
  "Navigate and use WIX's drag-and-drop website builder effectively",
  "Customize templates to create unique, professional websites",
  "Add and manage multimedia elements like images, videos, and galleries",
  "Implement essential web design principles for user-friendly and responsive sites",
  "Optimize websites for mobile devices and improve SEO for better visibility",
  "Set up a custom domain, publish, and maintain a live website",
  "Integrate interactive features like contact forms, social media, and e-commerce functionality",
  "Build & manage different types of websites, including personal blogs, business sites, & portfolios"
];

const courseContent = [
  {
    title: "Introduction",
    duration: "03:01",
    icon: Play,
    description: "Getting started with Wix"
  },
  {
    title: "Pages",
    duration: "05:02",
    icon: Layout,
    description: "Creating and managing website pages"
  },
  {
    title: "Backgrounds",
    duration: "04:02",
    icon: Image,
    description: "Customizing page backgrounds"
  },
  {
    title: "Adding Title",
    duration: "05:20",
    icon: FileText,
    description: "Creating and styling page titles"
  },
  {
    title: "Adding Slideshow",
    duration: "06:04",
    icon: Image,
    description: "Creating image slideshows"
  },
  {
    title: "Adding Strips",
    duration: "06:45",
    icon: Layout,
    description: "Using strip elements for layout"
  },
  {
    title: "Adding Buttons",
    duration: "02:53",
    icon: Layout,
    description: "Creating and styling buttons"
  },
  {
    title: "Content Manager",
    duration: "03:06",
    icon: FileText,
    description: "Managing website content"
  },
  {
    title: "Header and Footer",
    duration: "04:21",
    icon: Layout,
    description: "Customizing site headers and footers"
  },
  {
    title: "Adding Social Media Links",
    duration: "02:10",
    icon: Users,
    description: "Integrating social media"
  },
  {
    title: "Adding Blog",
    duration: "05:10",
    icon: FileText,
    description: "Setting up a blog section"
  },
  {
    title: "Adding Store",
    duration: "06:21",
    icon: Users,
    description: "Creating an online store"
  },
  {
    title: "Adding Booking",
    duration: "03:33",
    icon: Clock,
    description: "Setting up booking functionality"
  },
  {
    title: "Publish Site",
    duration: "01:49",
    icon: Globe,
    description: "Publishing your website"
  },
  {
    title: "Social Share",
    duration: "02:01",
    icon: Users,
    description: "Sharing your website"
  },
  {
    title: "SEO Google",
    duration: "06:32",
    icon: Zap,
    description: "Optimizing for search engines"
  }
];

const features = [
  {
    title: "Drag-and-Drop Editor",
    icon: Layout,
    description: "Intuitive visual editor for easy website building",
    details: [
      "No coding required",
      "Real-time preview",
      "Mobile responsive",
      "Customizable templates"
    ]
  },
  {
    title: "Portfolio Features",
    icon: Image,
    description: "Specialized tools for showcasing artwork",
    details: [
      "Gallery layouts",
      "Lightbox effects",
      "Image optimization",
      "Portfolio templates"
    ]
  },
  {
    title: "Content Management",
    icon: FileText,
    description: "Easy content organization and updates",
    details: [
      "Blog functionality",
      "Page scheduling",
      "Version history",
      "SEO tools"
    ]
  },
  {
    title: "E-commerce Integration",
    icon: Users,
    description: "Sell your artwork directly",
    details: [
      "Product galleries",
      "Shopping cart",
      "Payment processing",
      "Inventory management"
    ]
  }
];

const steps = [
  {
    title: "Getting Started",
    description: "Set up your Wix account and choose a template",
    checklist: [
      "Create a Wix account",
      "Select a portfolio template",
      "Choose a domain name",
      "Set up your profile"
    ]
  },
  {
    title: "Customization",
    description: "Personalize your website to match your artistic style",
    checklist: [
      "Upload your artwork",
      "Customize colors and fonts",
      "Add your branding",
      "Set up navigation"
    ]
  },
  {
    title: "Content Creation",
    description: "Add and organize your content effectively",
    checklist: [
      "Create portfolio pages",
      "Add artwork descriptions",
      "Set up your blog",
      "Add contact information"
    ]
  },
  {
    title: "Optimization",
    description: "Make your website perform at its best",
    checklist: [
      "Optimize images",
      "Set up SEO",
      "Test mobile responsiveness",
      "Enable analytics"
    ]
  }
];

const bestPractices = [
  {
    title: "Design",
    icon: Layout,
    items: [
      "Keep the design clean and focused on your artwork",
      "Use consistent branding throughout",
      "Ensure good contrast and readability",
      "Optimize for mobile viewing"
    ]
  },
  {
    title: "Content",
    icon: FileText,
    items: [
      "Write compelling artist statements",
      "Include high-quality images",
      "Add detailed artwork descriptions",
      "Keep content updated regularly"
    ]
  },
  {
    title: "Performance",
    icon: Zap,
    items: [
      "Compress images before uploading",
      "Use Wix's built-in optimization tools",
      "Regularly update your content",
      "Monitor site performance"
    ]
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      "Enable SSL certificate",
      "Use strong passwords",
      "Regularly backup your content",
      "Keep contact forms secure"
    ]
  }
];

const templateSwitching = {
  title: "Switching Your Site Template",
  duration: "6 min",
  description: "Learn how to switch templates and transfer content between sites",
  steps: [
    {
      title: "Choose your new template",
      icon: Layout,
      content: "Get started by selecting a new template from our huge range of professionally designed templates. There are a variety of options and categories available including portfolio sites, business services, eCommerce templates and more, so you can choose the best style for your brand needs.",
      links: [
        "View our Wix Editor templates",
        "View our Studio Editor templates"
      ]
    },
    {
      title: "Copy elements and pages from your old site",
      icon: Copy,
      content: "To make the process much easier when starting again with a new template, you can copy and paste elements and pages from your old site, or save and re-use design assets, depending on which editor you are using.",
      links: [
        "Copying elements from a Wix Editor site",
        "Copying elements from a Studio Editor site"
      ]
    },
    {
      title: "Import media from your old site",
      icon: File,
      content: "All the media from your existing site is saved under Site Files in your Media Manager. Site Files folders can be accessed from the Media Manager from all the sites in your account. If you want to add any file from your existing site to your new site, just import it from the Site Files folder.",
      links: [
        "Search your Media Manager to find the file you need"
      ]
    },
    {
      title: "Transfer additional features",
      icon: RefreshCw,
      content: "When starting over with a new template, it's important to note that there are some features that you can transfer over to the new site and some that you can't.",
      links: [
        "What other features can I transfer to a new template?",
        "What features can't I transfer to a new template?"
      ]
    },
    {
      title: "Transfer your plan and domain",
      icon: Link2,
      content: "Once your new site is ready, you can transfer your plan which you used to upgrade your site, and the domain from your old site to your new one. This ensures that your site will be fully functioning and live on the internet with your unique domain name, just as it used to be. The process takes just a couple of minutes.",
      links: [
        "Learn how to transfer your plan and domain to your new site"
      ]
    }
  ],
  faqs: [
    {
      question: "Can I use AI to build a website on Wix?",
      answer: "Yes, you can use AI to build your site on Wix. With Wix's AI tools, you can create a personalized website by answering a few questions about your preferences and needs. The AI will generate a custom design that you can further customize using the Wix Editor."
    },
    {
      question: "Can I use AI to create a new site if I've already started with a template?",
      answer: "If you've already started with a template, you cannot switch to AI for that site. However, you can create a new site using the AI option. The AI will generate a design based on your inputs, which you can customize further."
    },
    {
      question: "What happens to my current site if I create a new site?",
      answer: "Your current site will remain active unless you choose to delete it. You can have as many sites as you want in your account and choose which ones you want to upgrade with a Premium plan."
    },
    {
      question: "If I create a new site, can I use the same domain for the new site?",
      answer: "Yes, you can reassign your existing domain to a new site. Go to the Domains section in your Wix account and select the option to assign the domain to another site. Ensure your new site is published before reassigning the domain."
    },
    {
      question: "Can I switch between Wix Editor and Wix Studio?",
      answer: "No, the Wix Editor and Studio Editor are separate platforms, and sites created in one cannot be transferred to the other. If you want to use Wix Studio, you need to create a new site using the Studio Editor."
    }
  ]
};

export default function WixPlatformClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Wix Platform Guide
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Introduction */}
          <motion.section
            variants={fadeIn}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Wix Platform Guide</h1>
            <p className="text-xl text-blue-100">
              Learn how to create a professional artist website using Wix's intuitive platform
            </p>
          </motion.section>

          {/* Template Switching Section */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-100">
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{templateSwitching.title}</h2>
                <p className="text-gray-500">{templateSwitching.duration}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">{templateSwitching.description}</p>
            
            <div className="grid grid-cols-1 gap-6">
              {templateSwitching.steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.content}</p>
                      {step.links && (
                        <div className="space-y-2">
                          {step.links.map((link, i) => (
                            <a
                              key={i}
                              href="#"
                              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                            >
                              <Link2 className="w-4 h-4" />
                              <span>{link}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQs Section */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-100">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {templateSwitching.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What You'll Learn */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-100">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">What You'll Learn</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                    <span className="text-gray-600">{objective}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Course Content */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-100">
                <Play className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Course Content</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {courseContent.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-blue-100">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{item.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Steps */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Getting Started</h2>
            <div className="grid grid-cols-1 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.checklist.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Best Practices */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <practice.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{practice.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {practice.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 