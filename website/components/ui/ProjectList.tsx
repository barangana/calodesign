import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Section } from '../../utils/types/enums'
import { Project } from '../../utils/types/sanity-typings'
import { Card } from './Card'
import info from '../../utils/info.json'
import Link from 'next/link'

interface ProjectsProps {
  projects: [Project]
}

//TODO: Add animated background for the last box

export const ProjectList: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Box mb={12}>
      <Flex justify='center'>
        <Heading pb={12}>Our Projects</Heading>
      </Flex>
      <SimpleGrid columns={[1, 2]} spacing={15}>
        {projects.map((project) => (
          <Card key={project._id} data={project} section={Section.Projects} />
        ))}
        <Link href='/projects'>
          <Flex
            bgImg={'/test.jpg'}
            justify='center'
            cursor='pointer'
            width='620'
            height={['300', '560']}
          >
            <Flex align='center'>
              <Heading size='md' color='white'>
                {info.view_more.toUpperCase()}
              </Heading>
            </Flex>
          </Flex>
        </Link>
      </SimpleGrid>
    </Box>
  )
}
