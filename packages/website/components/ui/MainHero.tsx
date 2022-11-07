import { Box, chakra, Heading, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { imagesArray } from '../../utils/types/images'
import info from '../../utils/info.json'

//TODO: Change this so went they set things up in Sanity to take the values from there

export const MainHero: React.FC = () => {
  const MotionBox = motion(Box)

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((currentIndex) => currentIndex + 1)
    }, 5000)

    return () => clearInterval(timerId)
  }, [])

  const { src, name, href } = imagesArray[currentIndex % imagesArray.length]

  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) => ['layout', 'src', 'alt'].includes(prop),
  })

  return (
    <MotionBox
      position='relative'
      h='95vh'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <ChakraImage
        src={src}
        layout='fill'
        alt={name}
        filter='auto'
        brightness='55%'
      />
      <Box position='absolute' color='white' my='72' mx='44'>
        <Heading size='3xl' pb='12'>
          {name}
        </Heading>
        <Link href={`/projects/${href}`} _hover={{ textDecoration: 'none' }}>
          <Text as='b' fontSize='sm'>
            {info.discover_more.toUpperCase()}
          </Text>
        </Link>
      </Box>
    </MotionBox>
  )
}
