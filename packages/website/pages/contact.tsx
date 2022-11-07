import { NextPage } from 'next'
import React from 'react'
import { Contacts, Layout } from '../components'

export const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Contacts />
    </Layout>
  )
}

export default ContactPage
