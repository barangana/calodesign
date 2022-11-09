import { NextPage } from 'next'
import React from 'react'
import { Contacts, Layout } from '../components'
import info from '../utils/info.json'

export const ContactPage: NextPage = () => {
  return (
    <Layout title={info.contact_us}>
      <Contacts />
    </Layout>
  )
}

export default ContactPage
