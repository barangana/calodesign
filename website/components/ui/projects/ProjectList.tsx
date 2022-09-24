import { HStack } from '@chakra-ui/react'
import React from 'react'
import { ProjectCard } from './Project'
import { Project } from '../../../utils/types/sanity-typings'

interface ProjectsProps {
  projects: [Project]
}

export const ProjectList: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <HStack>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </HStack>
  )
}
