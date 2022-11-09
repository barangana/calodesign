import { NextPage } from 'next'
import React from 'react'
import { About, Layout, Hero } from '../components'
import info from '../utils/info.json'

export const AboutPage: NextPage = () => {
  return (
    <Layout title={info.about_us}>
      <Hero img={'/test.jpg'} title={info.philosophy_of_calo} />
      <About />
    </Layout>
  )
}

export default AboutPage
