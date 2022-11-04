import { NextPage } from 'next'
import React from 'react'
import { About, Hero, Layout, MainHero } from '../components'
import info from '../utils/info.json'

export const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Hero title={info.philosophy_of_calo} img={'/test.jpg'} />
      <About />
    </Layout>
  )
}

export default AboutPage
