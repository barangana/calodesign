import type { GetStaticProps, NextPage } from 'next'
import {
  Contacts,
  Layout,
  MainHero,
  ProjectList,
  About,
  Social,
} from '../components'
import { sanityClient } from '../clients/sanity'
import { limitedProjectsQuery } from '../helpers/queries/projects'
import { Project } from '../utils/types/sanity-typings'
import info from '../utils/info.json'

interface HomeProps {
  data: [Project]
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <Layout title={info.branding}>
      <MainHero />
      <About />
      <ProjectList projects={data} />
      <Social />
      <Contacts />
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
