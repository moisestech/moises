'use client';

import { Day } from '@/constants/workshop';

interface BaseDayClientProps {
  title: string;
  description: string;
  sessions: Day['sessions'];
}

export function BaseDayClient({ title, description, sessions }: BaseDayClientProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      
      <div className="space-y-6">
        {sessions.map((session, index) => (
          <div key={index} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold">{session.title}</h2>
            <p className="mt-2 text-gray-600">{session.description}</p>
            {session.duration && (
              <p className="mt-2 text-sm text-gray-500">Duration: {session.duration}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 