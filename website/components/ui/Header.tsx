import React from 'react'
import { Box, Flex, Heading, Button } from '@chakra-ui/react'
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
    <Flex bg='black' padding='6'>
      <Flex>
        <Heading size='lg'>{title}</Heading>
        {links.map((link, i) => (
          <NextLink key={i} href={link.href} passHref>
            <Box pl='12' pt='2'>
              <Button variant='link'>{link.label}</Button>
            </Box>
          </NextLink>
        ))}
      </Flex>
    </Flex>
  )
}
