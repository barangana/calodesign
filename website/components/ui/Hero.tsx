import { Box, chakra, Heading, shouldForwardProp, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface HeroProps {
  img: string
  title: string
  description?: string
}

export const Hero: React.FC<HeroProps> = ({ title, description, img }) => {
  const HeroImage = chakra(Image, {
    shouldForwardProp: (prop) => ['layout', 'src', 'alt'].includes(prop),
  })
  return (
    <Box position='relative' h='95vh'>
      <HeroImage
        src={img}
        alt={`${title}'s image`}
        layout='fill'
        filter='auto'
        brightness='55%'
      />
      <Box pl={[4, 4, 32]} pr={[4, 4, 32]} position='absolute' top='0px'>
        <Heading pt={[32, 32, 48]} color='white'>
          {title}
        </Heading>
        <Text pt={['4', '16']} w={['', '96']} color='white'>
          {description}
        </Text>
      </Box>
      <Box position='absolute'></Box>
    </Box>
  )
}
