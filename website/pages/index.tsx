import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import { Hero, Layout } from '../components'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Box>Home page</Box>
    </Layout>
  )
}

export default Home
