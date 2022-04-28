import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

interface FooterProps {
  phone: string
  email: string
  address: string
}

export const Footer: React.FC<FooterProps> = ({ phone, email, address }) => {
  return (
    <Flex justify='space-evenly'>
      <Box>
        <Heading>Let's keep in touch!</Heading>
        <Box>{phone}</Box>
        <Box>{email}</Box>
        <Box>{address}</Box>
      </Box>
      <Box>Social Medias</Box>
    </Flex>
  )
}
