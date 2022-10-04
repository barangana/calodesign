import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import { Contacts, Hero, Layout, MainHero, Social } from '../components'
import info from '../utils/info.json'

const Home: NextPage = () => {
  return (
    <Layout>
      <MainHero title={'Creating everyday spaces'} />
      <Box>Main Content</Box>
      <Contacts />
    </Layout>
  )
}

export default Home
