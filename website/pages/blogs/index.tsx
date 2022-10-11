import { Flex, Heading, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import { sanityClient } from '../../clients/sanity'
import { Layout, Lists } from '../../components'
import { multipleBlogsQuery } from '../../helpers/queries/projects'
import { Section } from '../../utils/types/enums'
import { Blogs } from '../../utils/types/sanity-typings'
import info from '../../utils/info.json'
import { motion } from 'framer-motion'

interface BlogsProps {
  data: [Blogs]
}

const MotionHeading = motion(Heading)

const Blogs: NextPage<BlogsProps> = ({ data }) => {
  return (
    <Layout>
      <Flex my={16} mx={16} justify='space-between'>
        <MotionHeading
          pt={12}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          {info.our_blogs}
        </MotionHeading>
        <Text w='96'>{info.lorem_ipsum}</Text>
      </Flex>
      <Lists data={data} section={Section.Blogs} />
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
