'use client'

import BaseSessionClient from './BaseSessionClient'
import { workshopContent } from '@/constants/workshop'

const WebsiteDay1Session1Client = () => {
  const session = workshopContent[0].sessions[0]

  return (
    <BaseSessionClient
      title={session.title}
      description={session.description}
      duration={session.duration}
      segments={session.segments}
    />
  )
}

export default WebsiteDay1Session1Client 