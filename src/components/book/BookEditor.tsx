'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from '@/contexts/ThemeContext';

// Dynamic import for Monaco Editor to avoid SSR issues
const Editor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => <div className="h-full flex items-center justify-center text-gray-500">Loading editor...</div>,
});

interface BookEditorProps {
  value: string;
  onChange: (value: string) => void;
  onSave?: () => void;
  onSelectionChange?: (text: string) => void;
  onMarkAsHuman?: () => void;
  onMarkAsHybrid?: () => void;
  onMarkAsAI?: () => void;
}

interface InlineSuggestion {
  id: string;
  range: any;
  originalText: string;
  suggestedText: string;
}

export function BookEditor({ value, onChange, onSave, onSelectionChange, onMarkAsHuman, onMarkAsHybrid, onMarkAsAI }: BookEditorProps) {
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);
  const suggestionsRef = useRef<InlineSuggestion[]>([]);
  const decorationsRef = useRef<string[]>([]);
  const acceptSuggestionRef = useRef<((id: string) => void) | null>(null);
  const rejectSuggestionRef = useRef<((id: string) => void) | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [suggestions, setSuggestions] = useState<InlineSuggestion[]>([]);
  const [decorations, setDecorations] = useState<string[]>([]);
  const [showHelp, setShowHelp] = useState(true);
  const { theme } = useTheme();
  const currentTheme = theme || (typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  
  const handleMarkAs = async (marker: '●' | '◐' | '○' | '•' | '@' | '§') => {
    console.log('[BookEditor] ===== handleMarkAs called =====');
    console.log('[BookEditor] Marker:', marker);
    console.log('[BookEditor] editorRef.current:', editorRef.current);
    console.log('[BookEditor] monacoRef.current:', monacoRef.current);
    
    if (!editorRef.current) {
      console.error('[BookEditor] ❌ Editor not mounted yet');
      alert('Editor not ready yet. Please wait a moment and try again.');
      return;
    }
    
    // Try to use existing insertAuthorshipMarker function first (simplest approach)
    if (editorRef.current?.insertAuthorshipMarker) {
      console.log('[BookEditor] Using existing insertAuthorshipMarker function');
      try {
        editorRef.current.insertAuthorshipMarker(marker);
        console.log('[BookEditor] ✅ Successfully called insertAuthorshipMarker');
        // Trigger onChange
        const model = editorRef.current.getModel();
        if (model) {
          onChange(model.getValue());
        }
        return;
      } catch (error: any) {
        console.error('[BookEditor] Error calling insertAuthorshipMarker:', error);
        // Fall through to manual implementation
      }
    }
    
    // Ensure monaco is loaded
    let monaco = monacoRef.current;
    if (!monaco) {
      console.log('[BookEditor] Loading Monaco...');
      monaco = await import('monaco-editor');
      monacoRef.current = monaco;
      console.log('[BookEditor] Monaco loaded:', monaco);
    }
    
    const editor = editorRef.current;
    
    try {
      const selection = editor.getSelection();
      console.log('[BookEditor] Selection:', selection);
      
      if (!selection) {
        console.error('[BookEditor] ❌ No selection available');
        return;
      }
      
      const model = editor.getModel();
      if (!model) {
        console.error('[BookEditor] ❌ No model available');
        return;
      }
      
      const position = selection.getPosition();
      console.log('[BookEditor] Cursor position:', position);
      
      const lineNumber = position.lineNumber;
      const line = model.getLineContent(lineNumber);
      console.log('[BookEditor] Current line:', line);
      console.log('[BookEditor] Line length:', line.length);
      
      const indent = line.match(/^\s*/)?.[0] || '';
      console.log('[BookEditor] Indent:', JSON.stringify(indent));
      
      // Check if line already has a marker
      const trimmedLine = line.trim();
      const firstChar = trimmedLine[0];
      const hasMarker = firstChar === '●' || firstChar === '◐' || firstChar === '○';
      console.log('[BookEditor] Has marker?', hasMarker, 'First char:', firstChar, 'charCode:', firstChar?.charCodeAt(0));
      
      // Access Range from monaco - check different possible locations
      let Range = (monaco as any).Range;
      console.log('[BookEditor] Range from monaco.Range:', Range);
      
      if (!Range) {
        // Try default export structure
        Range = (monaco as any).default?.Range;
        console.log('[BookEditor] Range from monaco.default.Range:', Range);
      }
      
      if (!Range) {
        // Try editor namespace
        Range = (monaco as any).editor?.Range;
        console.log('[BookEditor] Range from monaco.editor.Range:', Range);
      }
      
      if (!Range) {
        console.error('[BookEditor] ❌ Range class not found. Monaco object keys:', Object.keys(monaco));
        console.error('[BookEditor] Monaco type:', typeof monaco);
        console.error('[BookEditor] Monaco default keys:', monaco.default ? Object.keys(monaco.default) : 'no default');
        // Fallback: use the existing insertAuthorshipMarker if available
        if (editorRef.current?.insertAuthorshipMarker) {
          console.log('[BookEditor] Using existing insertAuthorshipMarker function');
          editorRef.current.insertAuthorshipMarker(marker);
          return;
        }
        alert('Monaco Range class not found. Please check console for details.');
        return;
      }
      
      console.log('[BookEditor] ✅ Using Range class:', Range);
      
      if (hasMarker) {
        // Replace existing marker
        const markerIndex = line.indexOf(firstChar);
        console.log('[BookEditor] Marker index:', markerIndex);
        const contentAfterMarker = trimmedLine.slice(1).trim();
        const newLine = line.substring(0, markerIndex) + marker + ' ' + contentAfterMarker;
        console.log('[BookEditor] New line:', newLine);
        
        editor.executeEdits('replace-marker', [
          {
            range: new Range(lineNumber, 1, lineNumber, line.length + 1),
            text: newLine,
          },
        ]);
        console.log('[BookEditor] ✅ Replaced existing marker');
      } else {
        // Insert marker at start of line (after indent, or at column 1 if no indent)
        const insertColumn = indent.length > 0 ? indent.length + 1 : 1;
        const newText = `${marker} `;
        console.log('[BookEditor] Inserting:', JSON.stringify(newText));
        console.log('[BookEditor] At position: line', lineNumber, 'column', insertColumn);
        console.log('[BookEditor] Range will be:', { startLine: lineNumber, startCol: insertColumn, endLine: lineNumber, endCol: insertColumn });
        
        try {
          editor.executeEdits('insert-marker', [
            {
              range: new Range(
                lineNumber,
                insertColumn,
                lineNumber,
                insertColumn
              ),
              text: newText,
            },
          ]);
          console.log('[BookEditor] ✅ Inserted new marker');
        } catch (rangeError: any) {
          console.error('[BookEditor] ❌ Error creating Range:', rangeError);
          // Fallback: try using the existing function
          if (editorRef.current?.insertAuthorshipMarker) {
            console.log('[BookEditor] Falling back to insertAuthorshipMarker');
            editorRef.current.insertAuthorshipMarker(marker);
            return;
          }
          throw rangeError;
        }
      }
      
      // Trigger onChange to update parent
      const newValue = model.getValue();
      onChange(newValue);
      console.log('[BookEditor] ✅ Updated editor value, new length:', newValue.length);
    } catch (error: any) {
      console.error('[BookEditor] ❌ Error in handleMarkAs:', error);
      console.error('[BookEditor] Error stack:', error.stack);
      console.error('[BookEditor] Error details:', JSON.stringify(error, null, 2));
      alert(`Error: ${error.message || 'Unknown error'}`);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    
    // Cleanup observer on unmount
    return () => {
      if (editorRef.current?.observer) {
        editorRef.current.observer.disconnect();
      }
      // Clear decorations on unmount
      if (editorRef.current && decorations.length > 0) {
        editorRef.current.deltaDecorations(decorations, []);
      }
    };
  }, []);

  // Clear suggestions when value changes externally
  useEffect(() => {
    if (suggestions.length > 0 && editorRef.current) {
      editorRef.current.deltaDecorations(decorations, []);
      setDecorations([]);
      setSuggestions([]);
    }
  }, [value]);

  const handleEditorDidMount = async (editor: any) => {
    console.log('[BookEditor] Editor mounted, setting up...');
    editorRef.current = editor;
    
    // Dynamically import monaco to avoid SSR issues
    const monaco = await import('monaco-editor');
    monacoRef.current = monaco;
    console.log('[BookEditor] Monaco loaded and stored in ref');

    // Configure markdown language with better authorship marker detection
    console.log('[BookEditor] Setting up Monaco tokenizer for authorship markers');
    
    monaco.languages.setMonarchTokensProvider('markdown', {
      tokenizer: {
        root: [
          // Authorship markers - human (●) - must be at start of line
          [/^●\s/, 'authorship-human'],
          // Authorship markers - hybrid (◐)
          [/^◐\s/, 'authorship-hybrid'],
          // Authorship markers - AI (○)
          [/^○\s/, 'authorship-ai'],
          // Notes marker (•)
          [/^•\s/, 'authorship-notes'],
          // Authors marker (@)
          [/^@\s/, 'authorship-authors'],
          // Vocabulary marker (§)
          [/^§\s/, 'authorship-vocabulary'],
          // Headers
          [/^#{1,6}\s/, 'header'],
          // Bold
          [/\*\*.*?\*\*/, 'strong'],
          // Italic
          [/\*.*?\*/, 'emphasis'],
          // Code blocks
          [/```[\s\S]*?```/, 'code-block'],
          // Inline code
          [/`[^`]+`/, 'code'],
          // Links
          [/\[.*?\]\(.*?\)/, 'link'],
        ],
      },
    });
    
    console.log('[BookEditor] Tokenizer configured. Testing marker detection...');
    
    // Test the tokenizer
    const testText = '● Test human marker';
    console.log('[BookEditor] Test text:', testText);
    console.log('[BookEditor] Pattern /^●\\s/ should match:', /^●\s/.test(testText));

    // Define theme colors for authorship markers with better visual distinction
    console.log('[BookEditor] Defining light theme with authorship marker colors');
    
    monaco.editor.defineTheme('book-editor', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'authorship-human', foreground: '2563eb', fontStyle: 'bold' },
        { token: 'authorship-hybrid', foreground: '9333ea', fontStyle: 'bold' },
        { token: 'authorship-ai', foreground: 'ea580c', fontStyle: 'bold' },
        { token: 'authorship-notes', foreground: '059669', fontStyle: 'bold' },
        { token: 'authorship-authors', foreground: 'dc2626', fontStyle: 'bold' },
        { token: 'authorship-vocabulary', foreground: '0891b2', fontStyle: 'bold' },
        { token: 'header', foreground: '000000', fontStyle: 'bold' },
        { token: 'strong', foreground: '000000', fontStyle: 'bold' },
        { token: 'emphasis', foreground: '666666', fontStyle: 'italic' },
        { token: 'code-block', foreground: '006600' },
        { token: 'code', foreground: '006600' },
        { token: 'link', foreground: '0066cc' },
      ],
      colors: {},
    });
    
    console.log('[BookEditor] Light theme defined');

    // Also define dark theme
    monaco.editor.defineTheme('book-editor-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'authorship-human', foreground: '60a5fa', fontStyle: 'bold' },
        { token: 'authorship-hybrid', foreground: 'c084fc', fontStyle: 'bold' },
        { token: 'authorship-ai', foreground: 'fb923c', fontStyle: 'bold' },
        { token: 'authorship-notes', foreground: '34d399', fontStyle: 'bold' },
        { token: 'authorship-authors', foreground: 'f87171', fontStyle: 'bold' },
        { token: 'authorship-vocabulary', foreground: '22d3ee', fontStyle: 'bold' },
        { token: 'header', foreground: 'ffffff', fontStyle: 'bold' },
        { token: 'strong', foreground: 'ffffff', fontStyle: 'bold' },
        { token: 'emphasis', foreground: 'd1d5db', fontStyle: 'italic' },
        { token: 'code-block', foreground: '86efac' },
        { token: 'code', foreground: '86efac' },
        { token: 'link', foreground: '60a5fa' },
      ],
      colors: {},
    });

    // Set initial theme based on current theme
    const isDark = document.documentElement.classList.contains('dark');
    const themeName = isDark ? 'book-editor-dark' : 'book-editor';
    console.log('[BookEditor] Setting theme:', themeName, 'isDark:', isDark);
    monaco.editor.setTheme(themeName);
    
    // Add line decorations for authorship markers to highlight entire lines
    const updateLineDecorations = () => {
      const model = editor.getModel();
      if (!model) return;
      
      const decorations: any[] = [];
      const lineCount = model.getLineCount();
      
      for (let i = 1; i <= lineCount; i++) {
        const line = model.getLineContent(i);
        const trimmed = line.trim();
        
        if (trimmed.startsWith('●')) {
          decorations.push({
            range: new monaco.Range(i, 1, i, model.getLineMaxColumn(i)),
            options: {
              isWholeLine: true,
              className: 'bg-blue-50 dark:bg-blue-900/20',
              glyphMarginClassName: 'bg-blue-200 dark:bg-blue-800',
            },
          });
          console.log(`[BookEditor] Decorated line ${i} as HUMAN (●)`);
        } else if (trimmed.startsWith('◐')) {
          decorations.push({
            range: new monaco.Range(i, 1, i, model.getLineMaxColumn(i)),
            options: {
              isWholeLine: true,
              className: 'bg-purple-50 dark:bg-purple-900/20',
              glyphMarginClassName: 'bg-purple-200 dark:bg-purple-800',
            },
          });
          console.log(`[BookEditor] Decorated line ${i} as HYBRID (◐)`);
        } else if (trimmed.startsWith('○')) {
          decorations.push({
            range: new monaco.Range(i, 1, i, model.getLineMaxColumn(i)),
            options: {
              isWholeLine: true,
              className: 'bg-orange-50 dark:bg-orange-900/20',
              glyphMarginClassName: 'bg-orange-200 dark:bg-orange-800',
            },
          });
          console.log(`[BookEditor] Decorated line ${i} as AI (○)`);
        }
      }
      
      const currentDecorations = decorationsRef.current;
      const newDecorations = editor.deltaDecorations(currentDecorations, decorations);
      decorationsRef.current = newDecorations;
      console.log(`[BookEditor] Applied ${decorations.length} line decorations`);
    };
    
    // Update decorations when content changes
    editor.onDidChangeModelContent(() => {
      console.log('[BookEditor] Content changed, updating line decorations');
      updateLineDecorations();
    });
    
    // Update decorations after a short delay and log for debugging
    setTimeout(() => {
      const model = editor.getModel();
      if (model) {
        console.log('[BookEditor] Model line count:', model.getLineCount());
        // Log first few lines to debug
        for (let i = 1; i <= Math.min(10, model.getLineCount()); i++) {
          const line = model.getLineContent(i);
          const trimmed = line.trim();
          console.log(`[BookEditor] Line ${i}:`, line.substring(0, 60));
          if (trimmed.startsWith('●') || trimmed.startsWith('◐') || trimmed.startsWith('○') || trimmed.startsWith('•') || trimmed.startsWith('@') || trimmed.startsWith('§')) {
            console.log(`[BookEditor] ✓ Found authorship marker on line ${i}:`, trimmed.substring(0, 1));
          }
        }
        updateLineDecorations();
      }
    }, 500);

    // Listen for theme changes via DOM class changes
    const observer = new MutationObserver(() => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      monaco.editor.setTheme(isCurrentlyDark ? 'book-editor-dark' : 'book-editor');
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Store observer for cleanup
    editorRef.current.observer = observer;

    // Track selection changes
    if (onSelectionChange) {
      editor.onDidChangeCursorSelection(() => {
        try {
          const selection = editor.getSelection();
          if (selection && !selection.isEmpty()) {
            const model = editor.getModel();
            if (model) {
              const selectedText = model.getValueInRange(selection);
              onSelectionChange(selectedText);
            }
          } else {
            onSelectionChange('');
          }
        } catch (error) {
          console.error('Error tracking selection:', error);
          // Silently fail - selection tracking is not critical
        }
      });
    }

    // Define inline suggestion functions
    const requestInlineSuggestion = async () => {
      const selection = editor.getSelection();
      if (!selection || selection.isEmpty()) {
        return;
      }

      const model = editor.getModel();
      if (!model) return;

      const selectedText = model.getValueInRange(selection);

      try {
        const response = await fetch('/api/book/ai-assist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: `Suggest an improved version of this text. Return only the improved text, not explanations:\n\n${selectedText}`,
            mode: 'line-surgeon',
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to get suggestion');
        }

        const data = await response.json();
        const suggestedText = data.response.trim();

        const suggestion: InlineSuggestion = {
          id: `suggestion-${Date.now()}`,
          range: selection,
          originalText: selectedText,
          suggestedText,
        };

        const newSuggestion = [suggestion];
        suggestionsRef.current = newSuggestion;
        setSuggestions(newSuggestion);

        // Add decoration to show suggestion
        const currentDecorations = decorationsRef.current;
        const newDecorations = editor.deltaDecorations(currentDecorations, [
          {
            range: selection,
            options: {
              className: 'bg-yellow-100 dark:bg-yellow-900/30',
              hoverMessage: { value: `Suggested: ${suggestedText}` },
              glyphMarginClassName: 'suggestion-glyph',
              glyphMarginHoverMessage: { value: 'AI Suggestion' },
            },
          },
        ]);

        setDecorations(newDecorations);
      } catch (error) {
        console.error('Failed to get inline suggestion:', error);
      }
    };

    const acceptSuggestion = (suggestionId: string) => {
      const suggestion = suggestionsRef.current.find((s) => s.id === suggestionId);
      if (!suggestion) return;

      const model = editor.getModel();
      if (!model) return;

      editor.executeEdits('accept-suggestion', [
        {
          range: suggestion.range,
          text: suggestion.suggestedText,
        },
      ]);

      // Clear decorations
      const currentDecorations = decorationsRef.current;
      editor.deltaDecorations(currentDecorations, []);
      decorationsRef.current = [];
      suggestionsRef.current = [];
      setDecorations([]);
      setSuggestions([]);
      onChange(model.getValue());
    };

    const rejectSuggestion = (suggestionId: string) => {
      const currentDecorations = decorationsRef.current;
      editor.deltaDecorations(currentDecorations, []);
      decorationsRef.current = [];
      const filtered = suggestionsRef.current.filter((s) => s.id !== suggestionId);
      suggestionsRef.current = filtered;
      setDecorations([]);
      setSuggestions(filtered);
    };

    // Store functions in refs for access (for UI buttons)
    if (acceptSuggestionRef) {
      acceptSuggestionRef.current = acceptSuggestion;
    }
    if (rejectSuggestionRef) {
      rejectSuggestionRef.current = rejectSuggestion;
    }

    // Add keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      if (onSave) {
        onSave();
      }
    });

    // Add authorship marker shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyH, () => {
      insertAuthorshipMarker('●');
      if (onMarkAsHuman) onMarkAsHuman();
    });

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyY, () => {
      insertAuthorshipMarker('◐');
      if (onMarkAsHybrid) onMarkAsHybrid();
    });

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyA, () => {
      insertAuthorshipMarker('○');
      if (onMarkAsAI) onMarkAsAI();
    });
    
    // Store insert function for external calls
    editorRef.current.insertAuthorshipMarker = insertAuthorshipMarker;

    // Add keyboard shortcut for inline suggestions (Cmd+Shift+S)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyS, () => {
      requestInlineSuggestion();
    });

    function insertAuthorshipMarker(marker: string) {
      const selection = editor.getSelection();
      const model = editor.getModel();
      if (!model || !selection) return;

      // If text is selected, wrap it with the marker
      if (!selection.isEmpty()) {
        const selectedText = model.getValueInRange(selection);
        const lines = selectedText.split('\n');
        
        // If it's a single line or starts at beginning of line, add marker at start
        if (lines.length === 1 || selection.startColumn === 1) {
          const position = selection.getStartPosition();
          const line = model.getLineContent(position.lineNumber);
          const indent = line.match(/^\s*/)?.[0] || '';
          const newText = `${indent}${marker} ${selectedText}`;
          editor.executeEdits('insert-marker', [
            {
              range: selection,
              text: newText,
            },
          ]);
        } else {
          // Multi-line: add marker to first line
          const startPos = selection.getStartPosition();
          const firstLine = model.getLineContent(startPos.lineNumber);
          const indent = firstLine.match(/^\s*/)?.[0] || '';
          const firstLineText = firstLine.substring(indent.length);
          const restOfText = model.getValueInRange(
            new monaco.Range(
              startPos.lineNumber + 1,
              1,
              selection.getEndPosition().lineNumber,
              selection.getEndPosition().column
            )
          );
          const newText = `${indent}${marker} ${firstLineText}\n${restOfText}`;
          editor.executeEdits('insert-marker', [
            {
              range: selection,
              text: newText,
            },
          ]);
        }
      } else {
        // No selection: insert marker at cursor position (beginning of line)
        const position = selection.getStartPosition();
        const line = model.getLineContent(position.lineNumber);
        const indent = line.match(/^\s*/)?.[0] || '';
        const newText = `${indent}${marker} `;
        editor.executeEdits('insert-marker', [
          {
            range: new monaco.Range(
              position.lineNumber,
              1,
              position.lineNumber,
              1
            ),
            text: newText,
          },
        ]);
      }
    }
  };

  if (!isMounted) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-gray-500">Loading editor...</div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col relative">
      {/* Quick Action Toolbar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-10 flex-wrap">
        <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Mark as:</span>
        <button
          onClick={() => handleMarkAs('●')}
          className="px-3 py-1.5 text-xs font-medium rounded border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          title="Mark as Human (Cmd+Shift+H)"
        >
          <span className="font-bold mr-1">●</span> Human
        </button>
        <button
          onClick={() => handleMarkAs('◐')}
          className="px-3 py-1.5 text-xs font-medium rounded border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          title="Mark as Hybrid (Cmd+Shift+Y)"
        >
          <span className="font-bold mr-1">◐</span> Hybrid
        </button>
        <button
          onClick={() => handleMarkAs('○')}
          className="px-3 py-1.5 text-xs font-medium rounded border border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
          title="Mark as AI (Cmd+Shift+A)"
        >
          <span className="font-bold mr-1">○</span> AI
        </button>
        <button
          onClick={() => handleMarkAs('•')}
          className="px-3 py-1.5 text-xs font-medium rounded border border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
          title="Mark as Notes"
        >
          <span className="font-bold mr-1">•</span> Notes
        </button>
        <button
          onClick={() => handleMarkAs('@')}
          className="px-3 py-1.5 text-xs font-medium rounded border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
          title="Mark as Authors"
        >
          <span className="font-bold mr-1">@</span> Authors
        </button>
        <button
          onClick={() => handleMarkAs('§')}
          className="px-3 py-1.5 text-xs font-medium rounded border border-cyan-300 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors"
          title="Mark as Vocabulary"
        >
          <span className="font-bold mr-1">§</span> Vocabulary
        </button>
        <div className="ml-auto">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            title="Toggle help panel"
          >
            {showHelp ? 'Hide Help' : 'Show Help'}
          </button>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <Editor
          height="100%"
          defaultLanguage="markdown"
        value={value}
        onChange={(val) => onChange(val || '')}
        onMount={handleEditorDidMount}
        theme={currentTheme === 'dark' ? 'book-editor-dark' : 'book-editor'}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            wordWrap: 'on',
            automaticLayout: true,
            scrollBeyondLastLine: false,
            tabSize: 2,
            insertSpaces: true,
            formatOnPaste: true,
            formatOnType: true,
          }}
        />
      </div>
      {/* Inline Suggestions UI */}
      {suggestions.length > 0 && (
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-md z-10">
          <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">
            AI Suggestion
          </div>
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="space-y-2">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Original:</div>
              <div className="text-xs p-2 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 line-through text-gray-500">
                {suggestion.originalText.substring(0, 100)}
                {suggestion.originalText.length > 100 ? '...' : ''}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Suggested:</div>
              <div className="text-xs p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800 text-gray-900 dark:text-gray-100">
                {suggestion.suggestedText.substring(0, 200)}
                {suggestion.suggestedText.length > 200 ? '...' : ''}
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => acceptSuggestionRef.current?.(suggestion.id)}
                  className="flex-1 px-3 py-1.5 text-xs bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
                >
                  Accept
                </button>
                <button
                  onClick={() => rejectSuggestionRef.current?.(suggestion.id)}
                  className="flex-1 px-3 py-1.5 text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded transition-colors"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showHelp && (
        <div className="absolute bottom-4 right-4 text-xs bg-white dark:bg-gray-800 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg max-w-sm z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-gray-900 dark:text-gray-100">How to Mark Authorship</div>
            <button
              onClick={() => setShowHelp(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              title="Hide help"
            >
              ×
            </button>
          </div>
        <div className="space-y-2 mb-3 text-gray-700 dark:text-gray-300">
          <div className="text-xs font-medium mb-1">Method 1: Use Toolbar Buttons</div>
          <div className="text-xs pl-2 mb-3">
            Click the buttons at the top to mark content. Select text first, or place cursor at line start.
          </div>
          <div className="text-xs font-medium mb-1">Method 2: Type Directly</div>
          <div className="text-xs pl-2 space-y-1">
            <div>Type <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">●</code> then space (Human - Blue)</div>
            <div>Type <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">◐</code> then space (Hybrid - Purple)</div>
            <div>Type <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">○</code> then space (AI - Orange)</div>
            <div>Type <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">•</code> then space (Notes - Green)</div>
            <div>Type <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">@</code> then space (Authors - Red)</div>
            <div>Type <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">§</code> then space (Vocabulary - Cyan)</div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
          <div className="font-medium mb-1">Examples:</div>
          <div className="pl-2 space-y-1 font-mono text-xs">
            <div className="bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">● This is human text</div>
            <div className="bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">◐ This is hybrid text</div>
            <div className="bg-orange-200 dark:bg-orange-900/40 px-2 py-1 rounded">○ This is AI text</div>
            <div className="bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">• This is a note</div>
            <div className="bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">@ Author reference</div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">§ Vocabulary term</div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
