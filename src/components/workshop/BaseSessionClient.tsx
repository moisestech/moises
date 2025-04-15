'use client';

import { Segment } from '@/constants/workshop';

interface BaseSessionClientProps {
  title: string;
  description: string;
  duration: string;
  segments: Segment[];
}

export function BaseSessionClient({ title, description, duration, segments }: BaseSessionClientProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-2 text-sm text-gray-500">Duration: {duration}</p>
      </div>
      
      <div className="space-y-6">
        {segments.map((segment) => (
          <div key={segment.id} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold">{segment.title}</h2>
            <p className="mt-2 text-gray-600">{segment.description}</p>
            
            {segment.activities && (
              <div className="mt-4">
                <h3 className="text-lg font-medium">Activities</h3>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  {segment.activities.map((activity, index) => (
                    <li key={index} className="text-gray-600">{activity}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-4 space-y-2">
              {segment.wix && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Wix Guide:</span> {segment.wix}
                </p>
              )}
              {segment.squarespace && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Squarespace Guide:</span> {segment.squarespace}
                </p>
              )}
              {segment.github && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">GitHub Guide:</span> {segment.github}
                </p>
              )}
            </div>
            
            {segment.resources && (
              <div className="mt-4">
                <h3 className="text-lg font-medium">Resources</h3>
                <ul className="mt-2 space-y-1">
                  {segment.resources.map((resource) => (
                    <li key={resource.id}>
                      <a 
                        href={resource.url} 
                        className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 