'use client'

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code, Globe, Layout, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from '@/components/ui/button';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const websites = [
  {
    id: 1,
    title: "Corporate Website",
    description: "Professional website for businesses and organizations",
    features: ["Responsive Design", "SEO Optimized", "Content Management"],
    image: "/images/websites/corporate.jpg"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Showcase your work and creative projects",
    features: ["Gallery Layout", "Project Showcase", "Contact Form"],
    image: "/images/websites/portfolio.jpg"
  },
  {
    id: 3,
    title: "Blog Website",
    description: "Share your thoughts and expertise with the world",
    features: ["Blog Layout", "Categories", "Search Functionality"],
    image: "/images/websites/blog.jpg"
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description: "Sell products and services online",
    features: ["Product Catalog", "Shopping Cart", "Payment Integration"],
    image: "/images/websites/ecommerce.jpg"
  }
];

export default function WebsitesClient() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/workshop/own-your-digital-presence/day/1/session/1/examples" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Examples
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Websites</h1>
          <p className="text-xl text-gray-600">Explore our collection of website designs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {websites.map((website, index) => (
            <motion.div
              key={website.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-purple-600">Website</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {website.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {website.description}
                </p>
                <div className="space-y-2 mb-6">
                  {website.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Globe className="w-4 h-4 text-purple-600" />
                    <span>Web</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Smartphone className="w-4 h-4 text-purple-600" />
                    <span>Mobile</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Code className="w-4 h-4 text-purple-600" />
                    <span>Custom</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  View Website
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 