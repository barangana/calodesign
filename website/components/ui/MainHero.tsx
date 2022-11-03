import { Box, chakra, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { imagesArray } from '../../utils/types/images'
import info from '../../utils/info.json'

export const MainHero: React.FC = () => {
  const MotionBox = motion(Box)

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((currentIndex) => currentIndex + 1)
    }, 5000)

    return () => clearInterval(timerId)
  }, [])

  const { src, name } = imagesArray[currentIndex % imagesArray.length]

  return (
    <MotionBox
      position='relative'
      h='95vh'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Image src={src} layout='fill' alt={name} />
      <Box position='absolute' color='white' my='96' mx='44'>
        <Heading size='3xl' pb='12'>
          {name}
        </Heading>
        <Link href='/' pl='12'>
          <Text as='b' fontSize='sm'>
            {info.discover_more.toUpperCase()}
          </Text>
        </Link>
      </Box>
    </MotionBox>
  )
}
