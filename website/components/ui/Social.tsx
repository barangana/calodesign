import React from 'react'
import { Flex, Heading, Text, Link, VStack } from '@chakra-ui/react'
import info from '../../utils/info.json'

//TODO: Add IG slider gallery

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
    //     <Box bg='red' h='100vh' mb='12' id='gallery'>
    //   <Flex justify='center' height='800px'>
    //     <Flex align='center'>
    //       <VStack>
    //         <Link href='https://www.instagram.com/calodesign.ph/'>
    //           <Heading size='2xl'>{info.instagram_handle}</Heading>
    //         </Link>
    //         <Text align='center' pt='4' pl='3' pr='3' w='64'>
    //           {info.socialtext}
    //         </Text>
    //       </VStack>
    //     </Flex>
    //   </Flex>
    //   <Box position='absolute' bg='coral' height='5%' w='10%' right='71%'>
    //     box 1
    //   </Box>
    //   <Box position='absolute' bg='papayawhip' height='5%' w='10%' right='58%'>
    //     box 2
    //   </Box>
    //   <Box position='absolute' bg='salmon' height='5%' w='10%' right='45%'>
    //     box 3
    //   </Box>
    //   <Box position='absolute' bg='pink' height='5%' w='10%' right='32%'>
    //     box 3
    //   </Box>
    //   <Box
    //     position='absolute'
    //     bg='paleturquoise'
    //     height='5%'
    //     w='10%'
    //     right='19%'
    //   >
    //     box 3
    //   </Box>
    // </Box>
  )
}
