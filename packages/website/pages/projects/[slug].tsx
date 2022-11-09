import { Box, chakra, Grid, GridItem } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { sanityClient, urlFor } from '../../clients/sanity'
import { Hero, Layout } from '../../components'
import {
  minimalInfoProjectsQuery,
  singleProjectsQuery,
} from '../../helpers/queries/projects'
import { Project } from '../../utils/types/sanity-typings'

//TODO: Add in sanity a rule that says to find appropriate resolution for images

interface ProjectProps {
  data: Project
}

const Project: NextPage<ProjectProps> = ({ data }) => {
  const imageUrl = data.mainImage
    ? urlFor(data.mainImage.asset).width(1080).height(1024).url()
    : ''

  const imageUrlForGallery = data.imagesGallery
    ? data.imagesGallery.map((single) =>
        urlFor(single.asset).width(1250).height(650).url()
      )
    : []

  const StyledChakraImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['width', 'height', 'src', 'alt', 'layout'].includes(prop),
  })

  return (
    <Layout title={`Calodeseign | ${data.title}`}>
      <Hero title={data.title} description={data.content} img={imageUrl} />
      <Box mt={96}>
        <Grid templateColumns='repeat(2, 1fr)' gap={[2, 4, 6]}>
          {imageUrlForGallery.map((singleUrl, i) => {
            if (i % 3 === 0) {
              return (
                <GridItem
                  key={data.imagesGallery ? data.imagesGallery[i]._key : null}
                  colSpan={2}
                >
                  <StyledChakraImage
                    src={singleUrl}
                    width={1250}
                    height={650}
                    alt='Other angle image'
                  />
                </GridItem>
              )
            }
            return (
              <GridItem
                key={data.imagesGallery ? data.imagesGallery[i]._key : null}
                position='relative'
              >
                <StyledChakraImage
                  src={singleUrl}
                  width={625}
                  height={950}
                  alt='Other angle image'
                  objectFit='cover'
                />
              </GridItem>
            )
          })}
        </Grid>
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
