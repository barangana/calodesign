import { Flex, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { sanityClient } from '../../clients/sanity'
import { Layout, Lists } from '../../components'
import { multipleProjectsQuery } from '../../helpers/queries/projects'
import { Section } from '../../utils/types/enums'
import { Project } from '../../utils/types/sanity-typings'
import info from '../../utils/info.json'
import { motion } from 'framer-motion'

interface ProjectsProps {
  data: [Project]
}

const MotionHeading = motion(Heading)

const Projects: NextPage<ProjectsProps> = ({ data }) => {
  return (
    <Layout>
      <Flex
        my={[12, 16]}
        mx={[4, 16]}
        justify='space-between'
        direction={['column', 'row']}
      >
        <MotionHeading
          pt={[0, 2, 12]}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          {info.our_projects}
        </MotionHeading>
        <Text w={['', 96]}>{info.lorem_ipsum}</Text>
      </Flex>
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
