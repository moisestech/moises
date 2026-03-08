'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FILES_TO_PROCESS = [
  'open-ended-01a.md',
  'open-ended-01b.md',
  'open-ended-02a.md',
  'open-ended-02b.md',
];

interface ProcessingResult {
  filename: string;
  success: boolean;
  stats?: {
    blocks: number;
    lines: number;
    speakers: { human: number; ai: number; unknown: number };
    themes: number;
    vocabulary: number;
    writers: number;
    books: number;
    artworks: number;
  };
  error?: string;
}

export default function ProcessAllDraftsPage() {
  const router = useRouter();
  const [processing, setProcessing] = useState(true);
  const [results, setResults] = useState<ProcessingResult[]>([]);
  const [currentFile, setCurrentFile] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processAll = async () => {
      try {
        const response = await fetch('/api/book/process-all-drafts', {
          method: 'POST',
        });

        if (!response.ok) {
          throw new Error('Failed to process drafts');
        }

        const data = await response.json();
        setResults(
          data.results.map((r: any) => ({
            filename: r.filename,
            success: true,
            stats: r.stats,
          })).concat(
            data.errors.map((e: any) => ({
              filename: e.filename,
              success: false,
              error: e.error,
            }))
          )
        );
        setProcessing(false);
      } catch (err: any) {
        setError(err.message || 'Failed to process files');
        setProcessing(false);
      }
    };

    processAll();
  }, []);

  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12 pt-44">
        <h1 className="text-3xl font-bold mb-8">Processing All Draft Files</h1>

        {processing && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-lg">
              <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
              <span>Processing files...</span>
            </div>
            {currentFile && (
              <div className="text-sm text-gray-600 dark:text-gray-400 ml-9">
                Currently processing: {currentFile}
              </div>
            )}
            <div className="space-y-2 ml-9">
              {FILES_TO_PROCESS.map((file) => (
                <div key={file} className="text-sm text-gray-500 dark:text-gray-500">
                  • {file}
                </div>
              ))}
            </div>
          </div>
        )}

        {!processing && error && (
          <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-6">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
              <AlertCircle className="h-5 w-5" />
              <span className="font-semibold">Error</span>
            </div>
            <p className="mt-2 text-red-600 dark:text-red-300">{error}</p>
          </div>
        )}

        {!processing && !error && (
          <div className="space-y-6">
            {/* Summary */}
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Processing Complete</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {successful}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Successfully processed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                    {failed}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Failed
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Results</h2>
              {results.map((result) => (
                <div
                  key={result.filename}
                  className={`p-4 rounded-lg border ${
                    result.success
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {result.success ? (
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                        )}
                        <span className="font-semibold">{result.filename}</span>
                      </div>
                      {result.success && result.stats && (
                        <div className="ml-7 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                          <div>
                            <div className="font-medium">{result.stats.blocks}</div>
                            <div className="text-gray-600 dark:text-gray-400">Blocks</div>
                          </div>
                          <div>
                            <div className="font-medium">{result.stats.themes}</div>
                            <div className="text-gray-600 dark:text-gray-400">Themes</div>
                          </div>
                          <div>
                            <div className="font-medium">
                              {result.stats.speakers.human + result.stats.speakers.ai + result.stats.speakers.unknown}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">Speakers</div>
                          </div>
                          <div>
                            <div className="font-medium">
                              {result.stats.vocabulary + result.stats.writers + result.stats.books + result.stats.artworks}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">Entities</div>
                          </div>
                        </div>
                      )}
                      {!result.success && result.error && (
                        <div className="ml-7 text-sm text-red-600 dark:text-red-400">
                          {result.error}
                        </div>
                      )}
                    </div>
                    {result.success && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          router.push(
                            `/research/born-into-the-machine/drafts/${encodeURIComponent(result.filename)}`
                          )
                        }
                      >
                        View
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Next Steps */}
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Review extracted entities in the Entities view for each file</li>
                <li>• Use the Read view to tag themes and mark content as processed</li>
                <li>• Use the Categorize view for bulk organization</li>
                <li>• Use the Organize view to build chapters from content blocks</li>
              </ul>
              <div className="mt-4">
                <Button
                  onClick={() => router.push('/research/born-into-the-machine/drafts')}
                  className="w-full"
                >
                  Back to Drafts List
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
