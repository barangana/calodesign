import React, { useState } from 'react'
import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  IconButton,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import info from '../../utils/info.json'

// TODO: Might have to change the title to logo : JSX.Element. Come back and fix the IconButtons.
interface HeaderProps {
  title: string
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
  const [display, setDisplay] = useState('none')
  return (
    <Flex p={2} justify='space-between'>
      <Stack direction={['column', 'row']} align='center'>
        <NextLink href='/' passHref>
          <Link>
            <Heading size='lg'>{title.toUpperCase()}</Heading>
          </Link>
        </NextLink>
        {Links.map((link) => (
          <NextLink key={link.label} href={link.href} passHref>
            <Link p={4} display={['none', 'none', 'flex', 'flex']}>
              {link.label}
            </Link>
          </NextLink>
        ))}
      </Stack>
      <Flex align='center' display={['none', 'none', 'flex', 'flex']}>
        <Button variant='outline'>{info.request_button}</Button>
      </Flex>
      <IconButton
        aria-label='Open Menu'
        size='sm'
        icon={<HamburgerIcon />}
        display={['flex', 'flex', 'none', 'none']}
        onClick={() => setDisplay('flex')}
      />

      <Flex
        w='100vw'
        bg='white'
        zIndex={20}
        h='100vh'
        pos='fixed'
        top='0'
        left='0'
        overflowY='auto'
        direction='column'
        display={display}
        justify='center'
      >
        {/* <Flex justify='flex-end'>
          <IconButton
            mt={2}
            mr={6}
            aria-label='Close Menu'
            size='sm'
            icon={<CloseIcon />}
            onClick={() => setDisplay('none')}
          />
        </Flex> */}

        <Flex direction='column' align='center'>
          <Stack align='center'>
            <NextLink href='/' passHref>
              <Link>
                <Heading size='lg'>Home</Heading>
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
      </Flex>
    </Flex>
  )
}
