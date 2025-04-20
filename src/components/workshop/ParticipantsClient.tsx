'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe, Code, Stars, User, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { PlatformIcon } from '@/components/workshop/PlatformIcons';
import { useState, useEffect, Suspense } from 'react';
import { ProfileCard } from './ProfileCard';

console.log('ParticipantsClient component initializing');

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

const participants: Array<{
  name: string;
  website: string;
  platforms: string[];
  webDesignLevel: number;
  aiLevel: number;
  goals: string | string[];
  overview: string;
  architecture: {
    home: {
      title: string;
      children?: {
        [key: string]: {
          title: string;
          description?: string;
          children?: {
            [key: string]: {
              title: string;
            };
          };
        };
      };
    };
  };
}> = [
  {
    name: "Augusto Esquivel",
    website: "augustoesquivel.com",
    platforms: ["squarespace", "coding"],
    webDesignLevel: 1,
    aiLevel: 1,
    goals: "Better understand how to drive traffic to website and social media",
    overview: "Augusto Esquivel is a self-taught artist from Buenos Aires, Argentina, known for creating sculptural art forms using thousands of buttons. His work explores themes of immigrant identity and the influence of capitalism.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: {
            title: "About",
            description: "Artist biography and statement"
          },
          allAccess: {
            title: "All Access",
            description: "Newsletter sign-up"
          }
        }
      }
    }
  },
  {
    name: "Shawna Moulton",
    website: "shawnamoulton.com",
    platforms: ["wix"],
    webDesignLevel: 2,
    aiLevel: 1,
    goals: "Update site and open a shop, more engagement with work",
    overview: "Shawna Moulton is a multidisciplinary artist and art educator based in South Florida. Her work includes sculpture, paintings, drawings, and printmaking, often reflecting her journey into motherhood and themes of identity.",
    architecture: {
      home: {
        title: "Home",
        children: {
          portfolio: {
            title: "Portfolio",
            children: {
              sculpture: { title: "Sculpture" },
              paintings: { title: "Paintings" },
              drawings: { title: "Drawings" },
              printmaking: { title: "Printmaking" },
              smartProjects: { title: "SMART Projects" }
            }
          },
          about: { title: "About" },
          more: { title: "More" }
        }
      }
    }
  },
  {
    name: "Morel Doucet",
    website: "moreldoucet.com",
    platforms: ["squarespace", "coding"],
    webDesignLevel: 3,
    aiLevel: 3,
    goals: "Refine Squarespace website and improve online presence",
    overview: "Morel Doucet is a Haitian-American artist whose work explores themes of environmental racism, climate gentrification, and the intersection of race and class in contemporary society.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          press: { title: "Press" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Monique Lazard",
    website: "moniquelazard.com",
    platforms: ["squarespace"],
    webDesignLevel: 3,
    aiLevel: 1,
    goals: "Learn how to edit website and make changes",
    overview: "Monique Lazard is a visual artist working in painting, drawing, and mixed media. Her work explores themes of memory, identity, and the natural world.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Monica Lopez De Victoria",
    website: "monicalopezdevictoria.com",
    platforms: ["squarespace", "coding", "other"],
    webDesignLevel: 3,
    aiLevel: 2,
    goals: "Level up website to showcase decades of work",
    overview: "Monica Lopez De Victoria is a Cuban-American artist whose work spans painting, sculpture, and installation. Her practice explores themes of cultural identity and personal history.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          exhibitions: { title: "Exhibitions" },
          press: { title: "Press" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Christine Cortes",
    website: "christine-cortes.com",
    platforms: ["coding", "other"],
    webDesignLevel: 3,
    aiLevel: 1,
    goals: "Improve website layout and accessibility",
    overview: "Christine Cortes is a photographer whose work focuses on portraiture and documentary photography, capturing intimate moments and personal narratives.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          portfolio: { title: "Portfolio" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Mateo SeZa",
    website: "mateoseza.art",
    platforms: ["squarespace", "wix"],
    webDesignLevel: 3,
    aiLevel: 3,
    goals: "Present artwork professionally and enhance digital presence",
    overview: "Mateo SeZa is a multidisciplinary artist working across painting, sculpture, and digital media. His work explores themes of technology, identity, and human connection.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          exhibitions: { title: "Exhibitions" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Wooster Delisfort",
    website: "wooslerdelisfort.com",
    platforms: ["squarespace", "wix"],
    webDesignLevel: 1,
    aiLevel: 1,
    goals: "Build and highlight portfolio on website",
    overview: "Wooster Delisfort is a visual artist and filmmaker whose work explores themes of identity, community, and social justice through various media.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Pedro Wazzan",
    website: "pedrowazzan.com",
    platforms: ["squarespace"],
    webDesignLevel: 1,
    aiLevel: 1,
    goals: "Improve website tools for client access",
    overview: "Pedro Wazzan is an artist and designer whose work spans graphic design, illustration, and interactive media.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Diana Espin",
    website: "dianaespin.com",
    platforms: ["squarespace"],
    webDesignLevel: 3,
    aiLevel: 2,
    goals: "Improve online presence and spread work",
    overview: "Diana Espin is a visual artist working in painting and mixed media. Her work explores themes of memory, identity, and the natural world.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          exhibitions: { title: "Exhibitions" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Mariale Icaza",
    website: "maipdesigns.com",
    platforms: ["wix"],
    webDesignLevel: 3,
    aiLevel: 3,
    goals: "Take website to next level for engagement",
    overview: "Mariale Icaza is a designer and artist whose work spans graphic design, illustration, and interactive media.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          contact: { title: "Contact" }
        }
      }
    }
  },
  {
    name: "Christina Pettersson",
    website: "christinapettersson.com",
    platforms: ["other"],
    webDesignLevel: 1,
    aiLevel: 1,
    goals: "Design own website with creative control",
    overview: "Christina Pettersson is a visual artist working in drawing, installation, and mixed media. Her work explores themes of mythology, history, and personal narrative.",
    architecture: {
      home: {
        title: "Home",
        children: {
          about: { title: "About" },
          work: { title: "Work" },
          exhibitions: { title: "Exhibitions" },
          contact: { title: "Contact" }
        }
      }
    }
  }
];

const LevelIndicator = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < level ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
      />
    ))}
  </div>
);

const TreeNode = ({ node, level = 0 }: { node: any; level?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && Object.keys(node.children).length > 0;

  return (
    <div className="pl-4">
      <div 
        className="flex items-center gap-2 py-1 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <ChevronRight 
            className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          />
        )}
        <span className="text-sm font-medium text-gray-700">{node.title}</span>
        {node.description && (
          <span className="text-xs text-gray-500">- {node.description}</span>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="border-l-2 border-gray-200 ml-2">
          {Object.entries(node.children).map(([key, child]: [string, any]) => (
            <TreeNode key={key} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const WebsiteArchitecture = ({ architecture }: { architecture: any }) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Website Architecture</h3>
      <TreeNode node={architecture.home} />
    </div>
  );
};

export default function ParticipantsClient() {
  console.log('ParticipantsClient component rendering');
  
  useEffect(() => {
    console.log('ParticipantsClient component mounted');
    return () => {
      console.log('ParticipantsClient component unmounting');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Header */}
          <motion.section variants={fadeIn} className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Workshop Participants
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Meet your fellow artists and explore their digital presence
            </p>
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1/introduction/digital-presence"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">Continue to Digital Presence</span>
            </Link>
          </motion.section>

          {/* Participants Grid */}
          <Suspense fallback={
            <div className="grid grid-cols-1 [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1200px)]:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-xl p-4 sm:p-6 animate-pulse">
                  <div className="h-24 sm:h-32 w-full bg-gray-200 rounded-lg mb-4" />
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          }>
            <div className="grid grid-cols-1 [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1200px)]:grid-cols-3 gap-4 sm:gap-6">
              {participants.map((participant) => (
                <ProfileCard 
                  key={participant.website} 
                  participant={participant} 
                />
              ))}
            </div>
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
} 