import { NextPage } from 'next'
import React from 'react'
import { Contacts, Layout } from '../components'
import info from '../utils/info.json'

export const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Contacts contacts={info.contacts} height='100vh' />
    </Layout>
  )
}

export default ContactPage
