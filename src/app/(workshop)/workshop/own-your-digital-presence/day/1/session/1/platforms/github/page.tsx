import { Metadata } from 'next';
import { FaGithub } from 'react-icons/fa';
import { Code, Monitor, Download, GitBranch, FileCode, Settings, Globe } from 'lucide-react';
import { PlatformBadge } from '@/components/workshop/PlatformBadge';

export const metadata: Metadata = {
  title: "GitHub Platform Guide - Day 1 | Digital Presence Workshop",
  description: "Learn the fundamentals of GitHub Pages and how to create your first website using GitHub, including account setup, repository creation, and basic deployment.",
  keywords: "GitHub, GitHub Pages, website hosting, version control, repository, deployment, web development",
  openGraph: {
    title: "GitHub Platform Guide - Day 1 | Digital Presence Workshop",
    description: "Learn the fundamentals of GitHub Pages and how to create your first website using GitHub.",
    images: [
      {
        url: "/images/workshop/github-day1.jpg",
        width: 1200,
        height: 630,
        alt: "GitHub Platform Guide - Day 1"
      }
    ]
  }
};

export default function GitHubPlatformClientDay1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <FaGithub className="w-12 h-12" />
        <div>
          <h1 className="text-3xl font-bold">GitHub Platform Guide</h1>
          <p className="text-gray-600">Free hosting for static websites with version control</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Getting Started */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">1. Create a GitHub Account</h3>
                <p className="text-gray-600">Sign up for a free GitHub account at github.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <GitBranch className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">2. Create Your Repository</h3>
                <p className="text-gray-600">Create a new repository named <code>username.github.io</code> (replace username with your GitHub username)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">3. Install GitHub Desktop</h3>
                <p className="text-gray-600">Download and install GitHub Desktop for easier version control</p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Setup */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Development Setup</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <FileCode className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium">1. Install VSCode</h3>
                <p className="text-gray-600">Download and install Visual Studio Code for coding</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium">2. Initialize Git</h3>
                <p className="text-gray-600">Connect your local repository with GitHub Desktop</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium">3. Local Testing</h3>
                <p className="text-gray-600">Test your site locally by opening HTML files in your browser</p>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Pages Setup */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">GitHub Pages Setup</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">1. Enable GitHub Pages</h3>
                <p className="text-gray-600">Go to repository Settings → Pages → Select main branch as source</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <GitBranch className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">2. Push Changes</h3>
                <p className="text-gray-600">Use GitHub Desktop to commit and push your changes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Monitor className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">3. View Your Site</h3>
                <p className="text-gray-600">Visit <code>username.github.io</code> to see your published site</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Always test changes locally before pushing to GitHub</li>
            <li>Use meaningful commit messages in GitHub Desktop</li>
            <li>Keep your repository organized with proper file structure</li>
            <li>Regularly push your changes to avoid losing work</li>
            <li>Use branches for major changes or experiments</li>
          </ul>
        </section>

        {/* Resources */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
          <div className="space-y-2">
            <a href="https://docs.github.com/en/pages/quickstart" className="text-blue-600 hover:underline block">
              GitHub Pages Quickstart Guide
            </a>
            <a href="https://github.com/apps/desktop" className="text-blue-600 hover:underline block">
              GitHub Desktop Documentation
            </a>
            <a href="https://code.visualstudio.com/docs" className="text-blue-600 hover:underline block">
              VSCode Documentation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 