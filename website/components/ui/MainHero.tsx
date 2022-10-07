import { Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

interface MainHeroProps {
  title: string
}

//TODO: Add animation

const MotionHeading = motion(Heading)

export const MainHero: React.FC<MainHeroProps> = ({ title }) => {
  return (
    <Flex h='95vh' position='relative' justify='center' bgImg={'/test.jpg'}>
      <Flex align='center'>
        <MotionHeading
          size='3xl'
          color='white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          direction='column'
        >
          {title}
        </MotionHeading>
      </Flex>
    </Flex>
  )
}
