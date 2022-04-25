import React from 'react'
import { Box } from '@chakra-ui/react'

interface FooterProps {
  phone: string
  email: string
  address: string
}

export const Footer: React.FC<FooterProps> = ({ phone, email, address }) => {
  return (
    <Box bg='red'>
      {phone}
      {email}
      {address}
    </Box>
  )
}
