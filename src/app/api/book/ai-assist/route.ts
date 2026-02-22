import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { SYSTEM_PROMPT, getModeSpecificPrompt } from '@/lib/book/ai-assistant';
import { AIMode } from '@/lib/book/types';

function getOpenAIClient() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  return new OpenAI({ apiKey: key });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, mode = 'thinking-partner', context } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const openai = getOpenAIClient();
    if (!openai) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const modePrompt = getModeSpecificPrompt(mode as AIMode);
    const fullSystemPrompt = `${SYSTEM_PROMPT}\n\n${modePrompt}`;

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: fullSystemPrompt,
      },
    ];

    // Add context if provided
    if (context) {
      messages.push({
        role: 'user',
        content: `Context: ${context}`,
      });
    }

    // Add the user's prompt
    messages.push({
      role: 'user',
      content: prompt,
    });

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      temperature: 0.7,
      max_tokens: 2000,
    });

    const response = completion.choices[0]?.message?.content || '';

    return NextResponse.json({
      response,
      usage: completion.usage,
    });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      {
        error: error.message || 'Failed to get AI response',
      },
      { status: 500 }
    );
  }
}
