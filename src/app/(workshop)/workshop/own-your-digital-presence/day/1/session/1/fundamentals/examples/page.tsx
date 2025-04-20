'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  Contact, 
  CreditCard, 
  Globe, 
  Home, 
  Layout, 
  MessageSquare, 
  ShoppingCart, 
  Users 
} from 'lucide-react';
import Link from 'next/link';

const examples = [
  {
    title: "About",
    description: "Learn about our story, mission, and values",
    icon: BookOpen,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/about"
  },
  {
    title: "Blog",
    description: "Explore our latest articles and insights",
    icon: MessageSquare,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/blog"
  },
  {
    title: "Case Studies",
    description: "Discover our successful projects and client stories",
    icon: Briefcase,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/case-studies"
  },
  {
    title: "Contact",
    description: "Get in touch with our team",
    icon: Contact,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/contact"
  },
  {
    title: "E-Commerce",
    description: "Browse our online store and products",
    icon: ShoppingCart,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/e-commerce"
  },
  {
    title: "Landing Pages",
    description: "View our collection of landing page designs",
    icon: Layout,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/landing-pages"
  },
  {
    title: "Landing",
    description: "Explore our main landing page design",
    icon: Home,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/landing"
  },
  {
    title: "Portfolio",
    description: "View our creative work and projects",
    icon: Globe,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/portfolio"
  },
  {
    title: "Pricing",
    description: "Check out our service packages and pricing",
    icon: CreditCard,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/pricing"
  },
  {
    title: "Services",
    description: "Learn about our range of services",
    icon: Briefcase,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/services"
  },
  {
    title: "Social Media",
    description: "Connect with us on social platforms",
    icon: Users,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/social-media"
  }
];

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Examples</h1>
          <p className="text-xl text-gray-600">Explore our collection of website examples</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={example.href}
                  className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-100">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {example.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {example.description}
                      </p>
                      <div className="flex items-center text-purple-600">
                        <span className="text-sm font-medium">View Example</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 