import React from 'react';
import dynamic from 'next/dynamic';

console.log('Participants page server component initializing');

// Use dynamic import with loading state
const ParticipantsClient = dynamic(
  () => {
    console.log('Dynamic import of ParticipantsClient starting');
    return import('@/components/workshop/ParticipantsClient').then(module => {
      console.log('ParticipantsClient module loaded successfully');
      return module;
    }).catch(error => {
      console.error('Error loading ParticipantsClient:', error);
      throw error;
    });
  },
  {
    ssr: true, // Enable SSR for better performance
    loading: () => {
      console.log('Showing loading state for ParticipantsClient');
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading participants...</p>
          </div>
        </div>
      );
    }
  }
);

export default function ParticipantsPage() {
  console.log('ParticipantsPage server component rendering');
  
  return (
    <div>
      <ParticipantsClient />
    </div>
  );
} 