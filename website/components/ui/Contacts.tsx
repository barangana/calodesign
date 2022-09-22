import React from 'react'
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import info from '../../utils/info.json'

export const Contacts: React.FC = () => {
  return (
    <Flex bg='black' color='white' justify='space-around'>
      <Stack py='20' direction='column' spacing='16'>
        <Box px='8'>
          <Heading size='lg'>{info.contacts_title}</Heading>
          <Text pt='2' w={['', 64]}>
            {info.contacts_small_title}
          </Text>
        </Box>
        <Box px='8' w='64'>
          <Heading size='sm' pb='4'>
            {info.contacts.country}
          </Heading>
          <Text fontSize='xs'>{info.contacts.phone}</Text>
          <Text fontSize='xs'>{info.contacts.address}</Text>
        </Box>
        <Flex px='8' display={['flex', 'flex', 'none', 'none']}>
          <Box>
            <Text fontSize='xs'>{info.contacts.email}</Text>
            <Box bg='white'>buttons here</Box>
          </Box>
        </Flex>
        <Box px='8'>
          <Button variant='outline'>{info.request_button}</Button>
        </Box>
      </Stack>
      <Flex
        direction='row'
        align='center'
        display={['none', 'none', 'flex', 'flex']}
      >
        <Box>
          <Text fontSize='xs'>{info.contacts.email}</Text>
          <Box bg='white'>buttons here</Box>
        </Box>
      </Flex>
    </Flex>
  )
}
