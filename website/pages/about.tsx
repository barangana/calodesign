import { NextPage } from 'next'
import React from 'react'
import { About, Layout, MainHero } from '../components'
import info from '../utils/info.json'

export const AboutPage: NextPage = () => {
  return (
    <Layout>
      <MainHero title={info.philosophy_of_calo} />
      <About />
    </Layout>
  )
}

export default AboutPage
