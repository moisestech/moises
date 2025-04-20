'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern e-commerce platform with seamless shopping experience",
    image: "/images/portfolio/ecommerce.jpg",
    tags: ["Web Development", "UI/UX Design"],
    link: "#"
  },
  {
    id: 2,
    title: "Mobile App Design",
    description: "User-friendly mobile application for task management",
    image: "/images/portfolio/mobile-app.jpg",
    tags: ["Mobile Design", "UI/UX"],
    link: "#"
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "Complete brand identity design for a tech startup",
    image: "/images/portfolio/branding.jpg",
    tags: ["Branding", "Graphic Design"],
    link: "#"
  }
];

export default function PortfolioClient() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Examples
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600">Showcase of our recent projects and work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-purple-600">Project {project.id}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="inline-flex items-center text-purple-600 hover:text-purple-700"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 