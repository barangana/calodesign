import { Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import { sanityClient } from '../../clients/sanity'
import { Layout, ProjectList } from '../../components'
import { multipleProjectsQuery } from '../../helpers/queries/projects'
import { Project } from '../../utils/types/sanity-typings'

interface ProjectsProps {
  data: [Project]
}

const Projects: NextPage<ProjectsProps> = ({ data }) => {
  return (
    <Layout>
      <Heading>Our projects</Heading>
      <ProjectList projects={data} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const projects = await sanityClient.fetch(multipleProjectsQuery)

  return {
    props: {
      data: projects,
    },
  }
}

export default Projects
