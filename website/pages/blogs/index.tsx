import { Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import { sanityClient } from '../../clients/sanity'
import { Layout, Lists } from '../../components'
import { multipleBlogsQuery } from '../../helpers/queries/projects'
import { Blogs } from '../../utils/types/sanity-typings'

interface BlogsProps {
  data: [Blogs]
}

const Blogs: NextPage<BlogsProps> = ({ data }) => {
  return (
    <Layout>
      <Heading>Blogs</Heading>
      <Lists data={data} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const blogs = await sanityClient.fetch(multipleBlogsQuery)

  return {
    props: {
      data: blogs,
    },
  }
}

export default Blogs
