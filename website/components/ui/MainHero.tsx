import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

interface MainHeroProps {
  title: string
}

//TODO: Add animation

export const MainHero: React.FC<MainHeroProps> = ({ title }) => {
  return (
    <Flex
      bg='red'
      h='95vh'
      position='relative'
      justify='center'
      bgImg={'/test.jpg'}
    >
      <Flex align='center'>
        <Heading color='white'>{title}</Heading>
      </Flex>
    </Flex>
  )
}
