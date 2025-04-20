import { MessageSquare, Bot, Zap, Code } from 'lucide-react'
import { FaWix, FaSquarespace, FaGithub } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function AIChatbotsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">AI Chatbots & Assistants</h1>
        <p className="text-lg text-muted-foreground">
          Enhance your website with AI-powered chatbots and assistants. These tools help automate customer support, provide instant responses, and improve user engagement.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Wix AI Chatbots */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FaWix className="h-6 w-6 text-yellow-600" />
            <h2 className="text-xl font-semibold">Wix AI Chatbots</h2>
          </div>
          <PlatformBadge platform="wix">
            <FaWix className="mr-2" />
            Wix Platform
          </PlatformBadge>
          <p className="text-muted-foreground">
            Wix offers several AI chatbot solutions to enhance your website's customer support and engagement.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <MessageSquare className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Wix AI Site Chat</h3>
                  <p className="text-sm text-muted-foreground">
                    Free AI chatbot that provides 24/7 support and sales advice. Features include:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Customizable responses</li>
                    <li>Product recommendations</li>
                    <li>24/7 availability</li>
                    <li>Conversation history</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Bot className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Third-Party Integrations</h3>
                  <p className="text-sm text-muted-foreground">
                    Popular AI chatbot services that work with Wix:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Chatbase - Custom ChatGPT integration</li>
                    <li>Ada - AI-powered customer service</li>
                    <li>Zowie - Automated support solutions</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Squarespace AI Chatbots */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FaSquarespace className="h-6 w-6 text-gray-700" />
            <h2 className="text-xl font-semibold">Squarespace AI Chatbots</h2>
          </div>
          <PlatformBadge platform="squarespace">
            <FaSquarespace className="mr-2" />
            Squarespace Platform
          </PlatformBadge>
          <p className="text-muted-foreground">
            Integrate AI chatbots into your Squarespace website using these solutions.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <MessageSquare className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">LiveChat Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Official Squarespace extension for real-time communication:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Live chat support</li>
                    <li>Analytics dashboard</li>
                    <li>Mobile app access</li>
                    <li>File sharing</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Bot className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">AI Chatbot Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Popular AI chatbot services for Squarespace:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Elfsight - Custom AI chatbot widget</li>
                    <li>Chatling - No-code AI chatbot builder</li>
                    <li>BotPenguin - Easy integration chatbot</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* GitHub AI Chatbots */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FaGithub className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">GitHub AI Chatbots</h2>
          </div>
          <PlatformBadge platform="github">
            <FaGithub className="mr-2" />
            GitHub Platform
          </PlatformBadge>
          <p className="text-muted-foreground">
            AI-powered solutions for GitHub repositories and documentation.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">GitHub Copilot</h3>
                  <p className="text-sm text-muted-foreground">
                    AI pair programmer that helps you write better code:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Code suggestions</li>
                    <li>Documentation generation</li>
                    <li>Bug detection</li>
                    <li>Learning from your codebase</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Code className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Documentation Bots</h3>
                  <p className="text-sm text-muted-foreground">
                    AI tools for GitHub documentation:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>DocsGPT - AI-powered documentation assistant</li>
                    <li>GitBook AI - Smart documentation generator</li>
                    <li>ReadMe AI - Automated documentation updates</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 