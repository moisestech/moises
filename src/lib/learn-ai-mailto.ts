import { LEARN_AI_EMAIL } from '@/constants/learn-ai-content'

export function mailtoLearnAi(subject: string, body?: string) {
  const q = new URLSearchParams({ subject })
  if (body) q.set('body', body)
  return `mailto:${LEARN_AI_EMAIL}?${q.toString()}`
}

export { LEARN_AI_EMAIL }
