import { Heading } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { sanityClient } from '../../clients/sanity'
import { Layout, Lists } from '../../components'
import { multipleProjectsQuery } from '../../helpers/queries/projects'
import { Section } from '../../utils/types/enums'
import { Project } from '../../utils/types/sanity-typings'

interface ProjectsProps {
  data: [Project]
}

const Projects: NextPage<ProjectsProps> = ({ data }) => {
  return (
    <Layout>
      <Heading>Our projects</Heading>
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
