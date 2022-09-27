import { Box, Heading, Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { sanityClient, urlFor } from '../../clients/sanity'
import { Hero, Layout } from '../../components'
import {
  minimalInfoProjectsQuery,
  singleProjectsQuery,
} from '../../helpers/queries/projects'
import { Project } from '../../utils/types/sanity-typings'

interface ProjectProps {
  data: Project
}

const Project: NextPage<ProjectProps> = ({ data }) => {
  const imageUrl = data.mainImage
    ? urlFor(data.mainImage.asset).width(1080).height(1024).url()
    : ''

  const imageUrlForGallery = data.imagesGallery
    ? data.imagesGallery.map((single) =>
        urlFor(single.asset).width(620).height(560).url()
      )
    : []

  return (
    <Layout>
      <Box>
        <Hero title={data.title} description={data.content} img={imageUrl} />
        <Box>{data.size}</Box>
        {imageUrlForGallery.map((singleUrl, i) => (
          <Image
            key={data.imagesGallery[i]._key}
            src={singleUrl}
            width={620}
            height={560}
            alt='Other angle image'
          />
        ))}
      </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await sanityClient.fetch(singleProjectsQuery, {
    slug: params?.slug,
  })

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
