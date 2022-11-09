import React from 'react'
import { Header } from '../ui/Header'
import info from '../../utils/info.json'
import { Footer } from '../ui/Footer'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={info.about_us_paragraph} />
        <meta name='author' content={info.branding} />
      </Head>
      <Container maxW='container.xl'>
        <Header title={info.branding} />
        {children}
        <Footer />
      </Container>
    </>
  )
}
