import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { sanityClient, urlFor } from '../../clients/sanity'
import { Layout } from '../../components'
import {
  minimalInfoBlogsQuery,
  singleBlogsQuery,
} from '../../helpers/queries/projects'
import { Blogs } from '../../utils/types/sanity-typings'

interface BlogProps {
  data: Blogs
}

const Blog: NextPage<BlogProps> = ({ data }) => {
  const imageUrl = data.mainImage
    ? urlFor(data.mainImage.asset).width(670).height(420).url()
    : ''

  return (
    <Layout>
      <Flex justify='center' mt={12} mb={12}>
        <Image
          src={imageUrl}
          alt={`${data.title}'s image`}
          width={670}
          height={420}
        />
      </Flex>
      <Box mx={[6, 72]} pb={24}>
        <Heading pt={6} pb={6}>
          {data.title}
        </Heading>
        <Text>{data.content}</Text>
      </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await sanityClient.fetch(singleBlogsQuery, {
    slug: params?.slug,
  })

  if (!blog) {
    return { notFound: true }
  }

  return {
    props: {
      data: blog,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await sanityClient.fetch(minimalInfoBlogsQuery)
  return {
    paths: blogs.map((blog: Blogs) => ({
      params: { slug: blog.slug.current },
    })),
    fallback: 'blocking',
  }
}

export default Blog
