import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Section } from '../../../utils/types/enums'
import { Project } from '../../../utils/types/sanity-typings'
import { Card } from '../Card'
import info from '../../../utils/info.json'
import Link from 'next/link'
import { ProjectCard } from './Project'

interface ProjectsProps {
  projects: [Project]
}

//TODO: Add animated background

export const ProjectList: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <SimpleGrid columns={2} spacing={15}>
      {projects.map((project) => (
        <Card key={project._id} data={project} section={Section.Projects} />
      ))}
      <Link href='/projects'>
        <Flex
          bgImg={'/test.jpg'}
          justify='center'
          cursor='pointer'
          width={620}
          height={557}
        >
          <Flex align='center'>
            <Heading size='md' color='white'>
              {info.view_more.toUpperCase()}
            </Heading>
          </Flex>
        </Flex>
      </Link>
    </SimpleGrid>
  )
}
