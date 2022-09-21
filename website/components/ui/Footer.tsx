import { Flex, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import info from '../../utils/info.json'
import NextLink from 'next/link'

export const Footer: React.FC = () => {
  return (
    <Flex direction='column' p={4}>
      <Text align='center'>
        {`${info.copyright} ${new Date().getFullYear()} — `}
        <NextLink href='https://github.com/barangana'>{info.branding}</NextLink>
      </Text>
    </Flex>
  )
}
