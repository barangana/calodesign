import React from 'react'
import { Flex, Heading, Text, Link, VStack } from '@chakra-ui/react'
import info from '../../utils/info.json'

export const Social = () => {
  return (
    <Flex justify='center' height='800px'>
      <Flex align='center'>
        <VStack>
          <Link href='https://www.instagram.com/calodesign.ph/'>
            <Heading size='2xl'>{info.instagram_handle}</Heading>
          </Link>
          <Text align='center' pt='4' pl='3' pr='3' w='64'>
            {info.socialtext}
          </Text>
        </VStack>
      </Flex>
    </Flex>
  )
}
