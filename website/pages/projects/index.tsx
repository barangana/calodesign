import { Heading } from '@chakra-ui/react'
import React from 'react'
import { sanityClient } from '../../clients/sanity'
import { Layout, ProjectList } from '../../components'
import { projectsQuery } from '../../helpers/queries/projects'
import { Project } from '../../typings'

interface Projects {
  data: [Project]
}

const Projects = ({ data }: Projects) => {
  console.log(data)
  return (
    <>
      <Layout>
        <Heading>Our projects</Heading>
        <ProjectList />
        {data.map((d) => (
          <div key={d._id}>{d.title}</div>
        ))}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const projects = await sanityClient.fetch(projectsQuery)

  return {
    props: {
      data: projects,
    },
  }
}

export default Projects
