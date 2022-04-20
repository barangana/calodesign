import React from 'react'
import { Box } from '@chakra-ui/react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Box bg='red'>{children}</Box>
}
