import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { sanityClient } from '../../clients/sanity'
import {
  minimalInfoProjectsQuery,
  projectsQuery,
} from '../../helpers/queries/projects'
import { Project } from '../../typings'

interface ProjectProps {
  data: Project
}

const Project: NextPage<ProjectProps> = ({ data }) => {
  console.log(data.title)
  return <div>{data.title}</div>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await sanityClient.fetch(projectsQuery, {
    slug: params?.slug,
  })
  console.log(project)

  if (!project) {
    return { notFound: true }
  }

  return {
    props: {
      data: project,
    },
  }
}

/**
 * Provides the paths to Next, by providing each project.
 * i.e. "projects/another-test"
 * Where another-test is the params
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await sanityClient.fetch(minimalInfoProjectsQuery)
  return {
    paths: projects.map((project: Project) => ({
      params: { slug: project.slug.current },
    })),
    fallback: 'blocking',
  }
}

export default Project
