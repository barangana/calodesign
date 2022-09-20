import React from 'react'
import { Header } from '../ui/Header'
import info from '../../utils/info.json'
import { Footer } from '../ui/Footer'
import { Container } from '@chakra-ui/react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW='container.xl'>
      <Header title={info.branding} />
      {children}
      <Footer />
    </Container>
  )
}
