import { Heading } from '@chakra-ui/react'
import React from 'react'
import { sanityClient } from '../../clients/sanity'
import { Layout, ProjectList } from '../../components'
import { multipleProjectsQuery } from '../../helpers/queries/projects'
import { Project } from '../../typings'

interface Projects {
  data: [Project]
}

const Projects = ({ data }: Projects) => {
  return (
    <>
      <Layout>
        <Heading>Our projects</Heading>
        <ProjectList projects={data} />
      </Layout>
    </>
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
