import React from 'react'
import { Button, Flex, Heading, Link, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import info from '../../utils/info.json'

// TODO: Might have to change the title to logo : JSX.Element
interface HeaderProps {
  title?: string
}

type LinksType = {
  label: string
  href: string
}

const Links: LinksType[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Flex p={4} justify='space-between'>
      <Stack direction={['column', 'row']} align='center'>
        <NextLink href='/' passHref>
          <Link>
            <Heading size='lg'>{title}</Heading>
          </Link>
        </NextLink>
        {Links.map((link) => (
          <NextLink key={link.label} href={link.href} passHref>
            <Link p={4}>{link.label}</Link>
          </NextLink>
        ))}
      </Stack>
      <Flex align='center'>
        <Button variant='outline'>{info.request_button}</Button>
      </Flex>
    </Flex>
  )
}
