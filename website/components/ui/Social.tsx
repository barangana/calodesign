import React from 'react'
import { Box, Flex, Heading, Text, Link, VStack } from '@chakra-ui/react'
import info from '../../utils/info.json'

export const Social = () => {
  return (
    <Box>
      <Flex justify='center' height='800px'>
        <Flex align='center'>
          <VStack>
            <Link href='https://www.instagram.com/calodesign.ph/'>
              <Heading>{info.instagram}</Heading>
            </Link>
            <Text align='center' mt='6' pl='3' pr='3'>
              {info.socialtext}
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  )
}
