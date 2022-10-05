import type { GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import { Contacts, Layout, MainHero, ProjectList } from '../components'
import info from '../utils/info.json'
import { sanityClient } from '../clients/sanity'
import { limitedProjectsQuery } from '../helpers/queries/projects'
import { Project } from '../utils/types/sanity-typings'

interface HomeProps {
  data: [Project]
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <Layout>
      <MainHero title={info.main_hero_title} />
      <Box>Main Content</Box>
      <ProjectList projects={data} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await sanityClient.fetch(limitedProjectsQuery)
  return {
    props: {
      data: projects,
    },
  }
}

export default Home
