import React from 'react'
import { Box, Flex, Heading, Link } from '@chakra-ui/react'
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
    <Flex padding='6'>
      <Flex>
        <NextLink href='/' passHref>
          <Link>
            <Heading size='lg'>{title}</Heading>
          </Link>
        </NextLink>
        {links.map((link, i) => (
          <NextLink key={i} href={link.href} passHref>
            <Box pl='16' pt='2'>
              <Link>{link.label}</Link>
            </Box>
          </NextLink>
        ))}
      </Flex>
    </Flex>
  )
}
