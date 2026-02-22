'use client';

import { useState } from 'react';
import { DraftAnalysis } from '@/lib/book/analysis-types';
import { Book, Users, Tag, Palette, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface EntityManagerProps {
  analysis: DraftAnalysis;
  filename: string;
}

export function EntityManager({ analysis, filename }: EntityManagerProps) {
  const [activeTab, setActiveTab] = useState('vocabulary');

  const handleExport = async (type: 'vocabulary' | 'writers' | 'books' | 'artworks') => {
    try {
      const response = await fetch('/api/book/auto-extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename }),
      });

      if (response.ok) {
        alert(`Extracted ${type} saved to content/born-into-the-machine/extracted/`);
      } else {
        alert('Failed to export');
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Failed to export');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Entity Manager</h1>
          <p className="text-gray-600 dark:text-gray-400">
            View and manage extracted vocabulary, writers, books, and artworks
          </p>
        </div>
        <Button
          onClick={() => handleExport('vocabulary')}
          variant="outline"
        >
          <Download className="h-4 w-4 mr-2" />
          Export All
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="vocabulary">
            <Tag className="h-4 w-4 mr-2" />
            Vocabulary ({analysis.extracted.vocabulary.length})
          </TabsTrigger>
          <TabsTrigger value="writers">
            <Users className="h-4 w-4 mr-2" />
            Writers ({analysis.extracted.writers.length})
          </TabsTrigger>
          <TabsTrigger value="books">
            <Book className="h-4 w-4 mr-2" />
            Books ({analysis.extracted.books.length})
          </TabsTrigger>
          <TabsTrigger value="artworks">
            <Palette className="h-4 w-4 mr-2" />
            Artworks ({analysis.extracted.artworks.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vocabulary" className="space-y-4">
          {analysis.extracted.vocabulary.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No vocabulary extracted</div>
          ) : (
            analysis.extracted.vocabulary.map((item, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{item.term}</h3>
                {item.definition && (
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Definition:</strong> {item.definition}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {item.context.substring(0, 300)}{item.context.length > 300 ? '...' : ''}
                </p>
                {item.themes.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {item.themes.map(theme => (
                      <span key={theme} className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">
                        {theme}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </TabsContent>

        <TabsContent value="writers" className="space-y-4">
          {analysis.extracted.writers.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No writers extracted</div>
          ) : (
            analysis.extracted.writers.map((writer, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{writer.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Mentioned {writer.mentions.length} time{writer.mentions.length !== 1 ? 's' : ''}
                </p>
                {writer.works && writer.works.length > 0 && (
                  <div className="mb-2">
                    <strong>Works:</strong> {writer.works.join(', ')}
                  </div>
                )}
                <div className="space-y-2">
                  {writer.mentions.slice(0, 3).map((mention, mIndex) => (
                    <div key={mIndex} className="text-sm p-2 bg-gray-50 dark:bg-gray-900 rounded">
                      {mention.context.substring(0, 200)}...
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </TabsContent>

        <TabsContent value="books" className="space-y-4">
          {analysis.extracted.books.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No books extracted</div>
          ) : (
            analysis.extracted.books.map((book, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{book.title}</h3>
                {book.author && (
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Author:</strong> {book.author}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {book.context.substring(0, 300)}...
                </p>
                {book.themes.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {book.themes.map(theme => (
                      <span key={theme} className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">
                        {theme}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </TabsContent>

        <TabsContent value="artworks" className="space-y-4">
          {analysis.extracted.artworks.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No artworks extracted</div>
          ) : (
            analysis.extracted.artworks.map((artwork, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{artwork.title}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                    {artwork.type}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{artwork.description}</p>
                {artwork.linkToExisting && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    Link: {artwork.linkToExisting}
                  </p>
                )}
                {artwork.themes.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {artwork.themes.map(theme => (
                      <span key={theme} className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">
                        {theme}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
