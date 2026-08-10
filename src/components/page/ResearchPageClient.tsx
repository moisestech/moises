'use client'

import { ResearchItem } from '@/constants/research'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight, ExternalLink, FileText, Calendar, MapPin, Users, Camera, DollarSign, Wrench, BookOpen, Info, Lightbulb, Eye, Zap, Ruler, ImageIcon, Settings, Receipt } from 'lucide-react'
import EnhancedDescription from '@/components/EnhancedDescription'
import { SystemArchitectureVisualization } from '@/components/page/SystemArchitectureVisualization'

interface ResearchPageClientProps {
  item: ResearchItem
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ResearchPageClient({ item }: ResearchPageClientProps) {
  const [activeTab, setActiveTab] = useState('overview')

  // Function to process text with interactive content
  const processText = (text: string) => {
    let result = text;
    item.interactiveContent.forEach((content) => {
      const regex = new RegExp(content.text, 'g');
      if (content.type === 'italic') {
        result = result.replace(regex, `<em class="text-indigo-600 cursor-help" title="${content.content.text}">$&</em>`);
      } else if (content.type === 'highlight') {
        if (content.content.image) {
          result = result.replace(regex, `<span class="text-indigo-600 cursor-help group relative" title="${content.content.text || ''}">$&<img src="${content.content.image.src}" alt="${content.content.image.alt}" class="hidden group-hover:block absolute z-50 max-w-xs rounded-lg shadow-lg" /></span>`);
        } else if (content.content.link) {
          result = result.replace(regex, `<a href="${content.content.link.url}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800 underline">$&</a>`);
        } else {
          result = result.replace(regex, `<span class="text-indigo-600 cursor-help" title="${content.content.text}">$&</span>`);
        }
      }
    });
    return result;
  };

  return (
    <div className="max-w-7xl mx-auto px-12 pt-44 pb-12">
      {/* Header Section with Image */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="mb-12"
      >
        {/* Header Image */}
        {item.images && item.images.length > 0 && (
          <motion.div
            variants={fadeIn}
            className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8"
          >
            <Image
              src={item.images[0].url}
              alt={item.images[0].caption}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}
        
        <motion.h1 
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {item.title}
        </motion.h1>
        <motion.p 
          variants={fadeIn}
          className="text-xl text-gray-600 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: processText(item.description) }}
        />
      </motion.div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {item.essay && <TabsTrigger value="essay">Essay</TabsTrigger>}
          {item.implementation && <TabsTrigger value="implementation">Implementation</TabsTrigger>}
          {item.budget && <TabsTrigger value="budget">Budget</TabsTrigger>}
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          {item.pitchSteps && item.pitchSteps.length > 0 ? (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-500" />
                Sequential pitch
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
                Six beats from summary to budget — hover highlighted terms in the copy below for
                definitions.
              </p>
              <ol className="space-y-5" role="list">
                {item.pitchSteps.map((step, index) => (
                  <li
                    key={step.id}
                    className="relative border-l-2 border-indigo-500/40 pl-5 dark:border-indigo-400/40"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300 mb-1">
                      {String(index + 1).padStart(2, '0')} · {step.title}
                    </p>
                    <EnhancedDescription
                      description={step.body}
                      interactiveContent={item.interactiveContent}
                    />
                  </li>
                ))}
              </ol>
            </Card>
          ) : null}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              Overview
            </h3>
            <EnhancedDescription 
              description={item.enhancedDescriptions.overview}
              interactiveContent={item.interactiveContent}
            />
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Artistic Intent
            </h3>
            <EnhancedDescription 
              description={item.artistic_intent}
              interactiveContent={item.interactiveContent}
            />
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5 text-green-500" />
              Interpretation
            </h3>
            <EnhancedDescription 
              description={item.interpretation}
              interactiveContent={item.interactiveContent}
            />
          </Card>
        </TabsContent>

        {/* Essay Tab */}
        <TabsContent value="essay" className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-500" />
              Essay
            </h3>
            <EnhancedDescription 
              description={item.enhancedDescriptions.essay}
              interactiveContent={item.interactiveContent}
            />
          </Card>
          {item.essay && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-500" />
                Full Essay
              </h3>
              <EnhancedDescription 
                description={item.essay}
                interactiveContent={item.interactiveContent}
              />
            </Card>
          )}
        </TabsContent>

        {/* Implementation Tab */}
        <TabsContent value="implementation" className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5 text-blue-500" />
              Implementation Overview
            </h3>
            <EnhancedDescription 
              description={item.enhancedDescriptions.implementation}
              interactiveContent={item.interactiveContent}
            />
          </Card>
          {item.implementation && (
            <>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-500" />
                  Timeline
                </h3>
                <EnhancedDescription 
                  description={item.implementation.timeline}
                  interactiveContent={item.interactiveContent}
                />
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  Locations
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {item.implementation.locations.map((location, index) => (
                    <li key={index} className="text-gray-700">
                      <EnhancedDescription 
                        description={location}
                        interactiveContent={item.interactiveContent}
                      />
                    </li>
                  ))}
                </ul>
              </Card>
            </>
          )}
        </TabsContent>

        {/* Budget Tab */}
        <TabsContent value="budget" className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Budget Overview
            </h3>
            <EnhancedDescription 
              description={item.enhancedDescriptions.budget}
              interactiveContent={item.interactiveContent}
            />
          </Card>
          {item.budget && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Receipt className="h-5 w-5 text-blue-500" />
                Budget Breakdown
              </h3>
              <div className="space-y-4">
                {item.budget.items.map((budgetItem, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">
                      <EnhancedDescription 
                        description={budgetItem.name}
                        interactiveContent={item.interactiveContent}
                      />
                    </span>
                    <span className="font-medium">${budgetItem.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg">${item.budget.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </TabsContent>

        {/* Technical Tab */}
        <TabsContent value="technical" className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-gray-500" />
              Technical Overview
            </h3>
            <EnhancedDescription 
              description={item.enhancedDescriptions.technical}
              interactiveContent={item.interactiveContent}
            />
          </Card>
          
          {/* System Architecture Visualization - Only show for I Will Remember You */}
          {item.title === 'I Will Remember You' && (
            <SystemArchitectureVisualization 
              title="System Architecture Visualization"
              description="Interactive 3D visualization showing the technical components and data flow of the I Will Remember You installation"
            />
          )}
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Power Requirements
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {item.technical_requirements.power.map((req, index) => (
                <li key={index} className="text-gray-700">
                  <EnhancedDescription 
                    description={req}
                    interactiveContent={item.interactiveContent}
                  />
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Ruler className="h-5 w-5 text-blue-500" />
              Space Requirements
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Pedestal Size:</span>{" "}
                <EnhancedDescription 
                  description={item.technical_requirements.space.pedestal_size}
                  interactiveContent={item.interactiveContent}
                />
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Wall Clearance:</span>{" "}
                <EnhancedDescription 
                  description={item.technical_requirements.space.wall_clearance}
                  interactiveContent={item.interactiveContent}
                />
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Power Access:</span>{" "}
                <EnhancedDescription 
                  description={item.technical_requirements.space.power_access}
                  interactiveContent={item.interactiveContent}
                />
              </p>
            </div>
          </Card>
        </TabsContent>

        {/* Gallery Tab */}
        <TabsContent value="gallery" className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-purple-500" />
              Gallery Overview
            </h3>
            <EnhancedDescription 
              description={item.enhancedDescriptions.gallery}
              interactiveContent={item.interactiveContent}
            />
          </Card>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {item.images.map((image, index) => (
              <motion.div
                key={index}
                className="mb-8 break-inside-avoid"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={image.url}
                    alt={image.caption}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-center">
                      <EnhancedDescription 
                        description={image.caption}
                        interactiveContent={item.interactiveContent}
                      />
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 