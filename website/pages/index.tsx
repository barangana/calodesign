import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import { Contacts, Hero, Layout, Social } from '../components'
import info from '../utils/info.json'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Box>Home page</Box>
      <Social />
      <Contacts contacts={info.contacts} height='2xl' />
    </Layout>
  )
}

export default Home
