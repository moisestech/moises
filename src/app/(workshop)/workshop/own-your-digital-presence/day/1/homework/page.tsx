import { Metadata } from 'next'
import Day1ChallengesClient from '@/components/workshop/Day1ChallengesClient'

export const metadata: Metadata = {
  title: 'Day 1 Homework | Digital Presence Workshop',
  description: 'Complete these challenges to prepare for building your digital presence.',
}

export default function HomeworkPage() {
  return <Day1ChallengesClient />
} 