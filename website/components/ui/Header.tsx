import React from 'react'
import { Box, Container, Flex, Heading, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

// TODO: Might have to change the title to logo : JSX.Element
interface HeaderProps {
  title?: string
  links: {
    label: string
    href: string
  }[]
}

export const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <Box bg='red'>
      <Flex>
        <Heading>{title}</Heading>
        {links.map((link, i) => (
          <NextLink key={i} href={link.href} passHref>
            <Button>{link.label}</Button>
          </NextLink>
        ))}
      </Flex>
    </Box>
  )
}
