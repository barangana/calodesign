import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import info from '../../utils/info.json'

interface AboutProps {
  height?: string
}

const MotionBox = motion(Box)

export const About: React.FC<AboutProps> = () => {
  return (
    <Box mt={40} mb={40}>
      <SimpleGrid columns={[1, 2]} spacing={[10, 36]} pl={[0, 12]}>
        <MotionBox
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Heading pb={4} textAlign={['center', 'left']}>
            {info.about_us_title}
          </Heading>
          <Text textAlign={['center', 'left']}>{info.about_us_paragraph}</Text>
        </MotionBox>
        <Box position='relative' display={['none', 'inline']}>
          <Image src='/test.jpg' alt='test' width='500' height='560' />
        </Box>
        <Box position='relative'>
          <Image src='/test.jpg' alt='test' width={300} height={300} />
          <Box position='relative' bottom={['12', '96']} left={[0, 52]}>
            <Image src='/test.jpg' alt='test' width={150} height={150} />
          </Box>
        </Box>
        <MotionBox
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          <Heading pb={4}>{info.about_us_title_2}</Heading>
          <Text>{info.about_us_paragraph_2}</Text>
        </MotionBox>
      </SimpleGrid>
    </Box>
  )
}
