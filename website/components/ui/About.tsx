import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import info from '../../utils/info.json'

interface AboutProps {
  height?: string
}

const MotionBox = motion(Box)

export const About: React.FC<AboutProps> = ({ height }) => {
  return (
    <Box h={height} mt={40} mb={40}>
      <SimpleGrid columns={2} spacing={36} pl={12}>
        <MotionBox
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading pb={4}>{info.about_us_title}</Heading>
          <Text>{info.about_us_paragraph}</Text>
        </MotionBox>
        <Box position='relative'>
          <Image src='/test.jpg' alt='test' width='500' height='560' />
        </Box>
        <Box>
          <Image src='/test.jpg' alt='test' width={300} height={300} />
          <Box position='relative' bottom='96' left='52'>
            <Image src='/test.jpg' alt='test' width={150} height={150} />
          </Box>
        </Box>
        <MotionBox
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading pb={4}>{info.about_us_title_2}</Heading>
          <Text>{info.about_us_paragraph_2}</Text>
        </MotionBox>
      </SimpleGrid>
    </Box>
  )
}
