import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

interface ContactsProps {
  contacts: {
    phone: string
    email: string
    address: string
  }
  height?: string
}

export const Contacts: React.FC<ContactsProps> = ({ contacts, height }) => {
  return (
    <Flex justify='space-evenly' align='center' height={height} bg='black.50'>
      <Box>
        <Heading color='white'>Let's keep in touch!</Heading>
        <Box color='gray.100'>{contacts.phone}</Box>
        <Box color='gray.100'>{contacts.email}</Box>
        <Box color='gray.100'>{contacts.address}</Box>
      </Box>
    </Flex>
  )
}
