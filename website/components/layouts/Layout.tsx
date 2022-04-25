import React from 'react'
import { Header } from '../ui/Header'
import { branding, links, contacts } from '../../utils/info.json'
import { Footer } from '../ui/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header title={branding} links={links} />
      {children}
      <Footer
        phone={contacts.phone}
        email={contacts.email}
        address={contacts.address}
      />
    </>
  )
}
