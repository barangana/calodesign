import { NextPage } from 'next'
import React from 'react'
import { About, Layout, MainHero } from '../components'

export const AboutPage: NextPage = () => {
  return (
    <Layout>
      <MainHero title='Philosophy of Calodesign' />

      <About />
    </Layout>
  )
}

export default AboutPage
