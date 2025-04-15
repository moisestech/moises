'use client'

import BaseSessionClient from './BaseSessionClient'
import { workshopContent } from '@/constants/workshop'

const WebsiteDay2Session2Client = () => {
  const session = workshopContent[1].sessions[1]

  return (
    <BaseSessionClient
      title={session.title}
      description={session.description}
      duration={session.duration}
      segments={session.segments}
    />
  )
}

export default WebsiteDay2Session2Client 