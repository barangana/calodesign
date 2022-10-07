import { Flex, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { sanityClient } from '../../clients/sanity'
import { Layout, Lists } from '../../components'
import { multipleProjectsQuery } from '../../helpers/queries/projects'
import { Section } from '../../utils/types/enums'
import { Project } from '../../utils/types/sanity-typings'
import info from '../../utils/info.json'

interface ProjectsProps {
  data: [Project]
}

const Projects: NextPage<ProjectsProps> = ({ data }) => {
  return (
    <Layout>
      <Flex my={16} mx={16} justify='space-between'>
        <Heading pt={12}>{info.our_projects}</Heading>
        <Text w='96'>{info.lorem_ipsum}</Text>
      </Flex>
      <Lists data={data} section={Section.Projects} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await sanityClient.fetch(multipleProjectsQuery)

  return {
    props: {
      data: projects,
    },
  }
}

export default Projects
