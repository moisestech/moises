'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { MOONLIGHTER_SLUG } from '@/content/workshops/moonlighter-ai-3d-printing'

export default function SessionIndexRedirect() {
  const params = useParams()
  const router = useRouter()
  const code = String(params.code ?? '')

  useEffect(() => {
    router.replace(`/workshop/${MOONLIGHTER_SLUG}/session/${code}/m/0`)
  }, [code, router])

  return null
}
