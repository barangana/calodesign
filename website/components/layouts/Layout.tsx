import React from 'react'
import { Header } from '../ui/Header'
import info from '../../utils/info.json'
import { Footer } from '../ui/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header title={info.branding} links={info.links} />
      {children}
      <Footer />
    </>
  )
}
