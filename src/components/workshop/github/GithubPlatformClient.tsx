'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  User, 
  BookOpen, 
  Download, 
  CheckCircle2, 
  Mail, 
  Globe, 
  Code, 
  GitBranch, 
  ArrowRight,
  Terminal,
  FileCode,
  Settings,
  Monitor,
  Key,
  Server,
  FileText,
  Shield,
  GitFork,
  GitPullRequest,
  GitCommit,
  GitBranch as Branch,
  GitMerge,
  GitCompare,
  Layout,
  LucideIcon
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import React from 'react'

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
  tips?: string[];
  links?: {
    text: string;
    url: string;
  }[];
  subsections?: {
    title: string;
    content: string[];
  }[];
}

interface TabContent {
  title: string;
  description: string;
  steps: Step[];
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const tabs: TabContent[] = [
  {
    title: 'Account & Repository',
    description: 'Set up your GitHub account and create your first repository',
    steps: [
      {
        title: 'Create GitHub Account',
        description: 'Sign up for a free GitHub account to get started with version control and website hosting.',
        icon: User,
        details: [
          'Navigate to https://github.com/',
          'Click "Sign up" in the top right corner',
          'Enter your email address, create a password, and choose a username',
          'Verify your email address to complete basic GitHub tasks',
          'Complete your profile with a picture and bio'
        ],
        tips: [
          'Choose a professional username that represents your artistic identity',
          'Use a secure password and enable two-factor authentication',
          'Consider using your professional email address',
          'Complete your profile to make it easier for others to find and connect with you'
        ],
        subsections: [
          {
            title: 'About Your Personal Account',
            content: [
              'Your GitHub account is your identity on the platform',
              'It includes a username and profile that represents you',
              'Free accounts have access to unlimited public repositories',
              'You can upgrade to paid plans for private repositories and additional features'
            ]
          },
          {
            title: 'Email Verification',
            content: [
              'Check your email for a verification link after signing up',
              'Verification is required for basic GitHub tasks',
              'You can resend the verification email if needed',
              'Some enterprises create managed user accounts - you cannot use those email addresses'
            ]
          }
        ],
        links: [
          {
            text: 'GitHub Sign Up',
            url: 'https://github.com/signup'
          },
          {
            text: 'About GitHub Accounts',
            url: 'https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts'
          },
          {
            text: 'Verifying Your Email',
            url: 'https://docs.github.com/en/get-started/signing-up-for-github/verifying-your-email-address'
          }
        ]
      },
      {
        title: 'Create Repository',
        description: 'Create a repository to store your website code and files.',
        icon: GitBranch,
        details: [
          'Click the "+" icon in the top right corner and select "New repository"',
          'Name your repository (e.g., "my-portfolio")',
          'Add a description of your repository',
          'Choose repository visibility (public or private)',
          'Select "Initialize this repository with a README"',
          'Click "Create repository"'
        ],
        tips: [
          'Use a descriptive name for your repository',
          'Add a clear description of your project',
          'Consider starting with a public repository for your portfolio',
          'Initialize with a README to add documentation right away'
        ],
        subsections: [
          {
            title: 'Repository Naming',
            content: [
              'Choose a short, memorable name',
              'Use hyphens or underscores for spaces',
              'Avoid special characters',
              'Make it descriptive of your project'
            ]
          },
          {
            title: 'Repository Settings',
            content: [
              'Public repositories are visible to everyone',
              'Private repositories require a paid plan',
              'README files help others understand your project',
              'You can add a license to specify usage terms'
            ]
          }
        ],
        links: [
          {
            text: 'Creating a Repository',
            url: 'https://docs.github.com/en/get-started/quickstart/create-a-repo'
          },
          {
            text: 'About Repositories',
            url: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories'
          }
        ]
      }
    ]
  },
  {
    title: 'Development Setup',
    description: 'Set up your local development environment',
    steps: [
      {
        title: 'Install GitHub Desktop',
        description: 'Download and install GitHub Desktop to manage your repositories locally.',
        icon: Download,
        details: [
          'Visit the GitHub Desktop download page',
          'Click "Download for macOS" (or Windows)',
          'Open the downloaded file from your Downloads folder',
          'Follow the installation prompts',
          'Launch GitHub Desktop and sign in with your GitHub account'
        ],
        tips: [
          'Keep GitHub Desktop updated for the latest features',
          'Configure your default text editor',
          'Set up your preferred terminal',
          'Enable automatic updates'
        ],
        subsections: [
          {
            title: 'System Requirements',
            content: [
              'macOS 11.0 or later',
              'Windows 10 64-bit or later',
              'At least 1GB of available disk space',
              'Internet connection for installation and updates'
            ]
          },
          {
            title: 'Post-Installation',
            content: [
              'Sign in with your GitHub account',
              'Configure Git with your name and email',
              'Set up your preferred text editor',
              'Choose your default terminal'
            ]
          }
        ],
        links: [
          {
            text: 'GitHub Desktop Download',
            url: 'https://desktop.github.com/'
          },
          {
            text: 'Installation Guide',
            url: 'https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-github-desktop'
          }
        ]
      },
      {
        title: 'Install VS Code',
        description: 'Set up Visual Studio Code for editing your website code.',
        icon: FileCode,
        details: [
          'Visit https://code.visualstudio.com/',
          'Download the appropriate version for your operating system',
          'Run the installer and follow the prompts',
          'Install useful extensions for web development',
          'Configure your settings and preferences'
        ],
        tips: [
          'Install the Live Server extension for quick previews',
          'Use the GitLens extension for better version control',
          'Configure your theme and font settings',
          'Set up keyboard shortcuts for efficiency'
        ],
        links: [
          {
            text: 'VS Code Download',
            url: 'https://code.visualstudio.com/download'
          },
          {
            text: 'VS Code Extensions',
            url: 'https://code.visualstudio.com/docs/editor/extension-marketplace'
          }
        ]
      }
    ]
  },
  {
    title: 'GitHub Pages',
    description: 'Configure GitHub Pages for hosting your website',
    steps: [
      {
        title: 'Enable GitHub Pages',
        description: 'Set up GitHub Pages to host your website.',
        icon: Settings,
        details: [
          'Go to your repository settings',
          'Scroll to the "GitHub Pages" section',
          'Select your source branch (usually main or master)',
          'Choose a theme or use a custom design',
          'Click "Save" to enable GitHub Pages'
        ],
        tips: [
          'Use a custom domain for a professional look',
          'Enable HTTPS for security',
          'Set up continuous deployment',
          'Monitor your site\'s performance'
        ],
        links: [
          {
            text: 'GitHub Pages Guide',
            url: 'https://docs.github.com/en/pages/getting-started-with-github-pages'
          }
        ]
      },
      {
        title: 'Configure Source',
        description: 'Set up your deployment source and options.',
        icon: Monitor,
        details: [
          'Choose between deploying from a branch or GitHub Actions',
          'Configure your build settings if needed',
          'Set up custom domains if desired',
          'Configure environment variables',
          'Set up deployment previews'
        ],
        tips: [
          'Use GitHub Actions for more control over deployment',
          'Set up preview deployments for pull requests',
          'Configure caching for faster builds',
          'Monitor deployment status'
        ],
        links: [
          {
            text: 'GitHub Pages Configuration',
            url: 'https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site'
          }
        ]
      }
    ]
  }
];

const accountSetup = {
  title: "Creating Your GitHub Account",
  description: "Set up your personal GitHub account to get started with version control and website hosting.",
  steps: [
    {
      title: "Navigate to GitHub",
      description: "Visit https://github.com/ and click 'Sign up' in the top right corner.",
      icon: Globe
    },
    {
      title: "Create Your Account",
      description: "Enter your email address, create a password, and choose a username. Your username will be part of your GitHub profile URL.",
      icon: User
    },
    {
      title: "Verify Your Email",
      description: "Check your email for a verification link. You must verify your email to complete basic GitHub tasks like creating repositories.",
      icon: Mail
    },
    {
      title: "Complete Your Profile",
      description: "Add a profile picture, bio, and other details to personalize your GitHub presence.",
      icon: Settings
    }
  ],
  tips: [
    "Choose a professional username that represents your artistic identity",
    "Use a secure password and enable two-factor authentication",
    "Consider using your professional email address",
    "Complete your profile to make it easier for others to find and connect with you"
  ]
}

const repositorySetup = {
  title: "Creating Your Repository",
  description: "A repository is where your website's code and files will live. Let's create your first repository.",
  steps: [
    {
      title: "New Repository",
      description: "Click the '+' icon in the top right corner and select 'New repository'.",
      icon: BookOpen
    },
    {
      title: "Repository Details",
      description: "Name your repository (e.g., 'my-portfolio'), add a description, and choose visibility (public or private).",
      icon: FileText
    },
    {
      title: "Initialize Repository",
      description: "Select 'Initialize this repository with a README' to create your first file.",
      icon: FileCode
    },
    {
      title: "Create Repository",
      description: "Click 'Create repository' to finalize the setup.",
      icon: CheckCircle2
    }
  ],
  tips: [
    "Use a descriptive name for your repository",
    "Add a clear description of your project",
    "Consider starting with a public repository for your portfolio",
    "Initialize with a README to add documentation right away"
  ]
}

const desktopSetup = {
  title: "Installing GitHub Desktop",
  description: "GitHub Desktop makes it easier to manage your repositories and push changes.",
  steps: [
    {
      title: "Download GitHub Desktop",
      description: "Visit the GitHub Desktop download page and click 'Download for macOS'.",
      icon: Download
    },
    {
      title: "Install the Application",
      description: "Open the downloaded file and follow the installation prompts.",
      icon: Monitor
    },
    {
      title: "Sign In",
      description: "Launch GitHub Desktop and sign in with your GitHub account.",
      icon: User
    },
    {
      title: "Configure Git",
      description: "Set up your name and email for Git commits.",
      icon: Settings
    }
  ],
  tips: [
    "Keep GitHub Desktop updated for the latest features",
    "Configure your default text editor",
    "Set up your preferred terminal",
    "Enable automatic updates"
  ]
}

const developmentSetup = {
  title: "Development Environment",
  description: "Set up your local development environment to work on your website.",
  steps: [
    {
      title: "Install VS Code",
      description: "Download and install Visual Studio Code, a popular code editor.",
      icon: FileCode
    },
    {
      title: "Clone Repository",
      description: "Use GitHub Desktop to clone your repository to your local machine.",
      icon: GitBranch
    },
    {
      title: "Install Dependencies",
      description: "Set up any necessary development tools and dependencies.",
      icon: Settings
    },
    {
      title: "Start Development",
      description: "Open your project in VS Code and begin development.",
      icon: Code
    }
  ],
  tips: [
    "Install useful VS Code extensions for web development",
    "Set up a consistent folder structure",
    "Configure your Git settings",
    "Create a development branch for new features"
  ]
}

const pagesSetup = {
  title: "GitHub Pages Setup",
  description: "Configure GitHub Pages to host your website.",
  steps: [
    {
      title: "Enable GitHub Pages",
      description: "Go to repository settings, scroll to GitHub Pages section, and select your source branch.",
      icon: Globe
    },
    {
      title: "Choose Theme",
      description: "Select a theme for your site or use a custom design.",
      icon: Layout
    },
    {
      title: "Configure Domain",
      description: "Set up a custom domain if desired.",
      icon: Server
    },
    {
      title: "Deploy Changes",
      description: "Push your changes to see them live on your site.",
      icon: ArrowRight
    }
  ],
  tips: [
    "Use a custom domain for a professional look",
    "Enable HTTPS for security",
    "Set up continuous deployment",
    "Monitor your site's performance"
  ]
}

export default function GithubPlatformClient() {
  const [activeTab, setActiveTab] = useState(0);
  const currentContent = tabs[activeTab];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex gap-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === index
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {currentContent && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-indigo-100">
                  {currentContent.steps.length > 0 && (
                    <div className="w-6 h-6 text-indigo-600">
                      {React.createElement(currentContent.steps[0].icon)}
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentContent.title}</h2>
                  <p className="text-gray-600">{currentContent.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {currentContent.steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-gray-100">
                          <div className="w-5 h-5 text-gray-600">
                            {React.createElement(Icon)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                          <p className="text-gray-600 mt-1">{step.description}</p>
                          
                          {step.details && (
                            <div className="mt-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Steps:</h4>
                              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                                {step.details.map((detail, i) => (
                                  <li key={i}>{detail}</li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {step.subsections && (
                            <div className="mt-4 space-y-4">
                              {step.subsections.map((subsection, i) => (
                                <div key={i} className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="text-sm font-medium text-gray-900 mb-2">{subsection.title}</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                    {subsection.content.map((item, j) => (
                                      <li key={j}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {step.tips && (
                            <div className="mt-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Tips:</h4>
                              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                {step.tips.map((tip, i) => (
                                  <li key={i}>{tip}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {step.links && (
                            <div className="mt-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Resources:</h4>
                              <ul className="space-y-2">
                                {step.links.map((link, i) => (
                                  <li key={i}>
                                    <a
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-indigo-600 hover:text-indigo-800"
                                    >
                                      {link.text} →
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 