import { HStack } from '@chakra-ui/react'
import React from 'react'
import { ProjectCard } from './Project'

export const ProjectList = () => {
  return (
    <HStack>
      <ProjectCard title={'test'} type={'test'} size={'test'} />
    </HStack>
  )
}
