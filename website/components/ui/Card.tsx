import { Box, chakra, Heading, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { urlFor } from '../../clients/sanity'
import { Section } from '../../utils/types/enums'
import { Blogs, Project } from '../../utils/types/sanity-typings'

interface CardProps {
  data: Project & Blogs
  section: string
}

const MotionBox = motion(Box)

export const Card: React.FC<CardProps> = ({ data, section }) => {
  const [isShown, setIsShown] = useState(false)

  const ChakraImage = chakra(Image, {
    shouldForwardProp: (prop) => ['layout', 'src', 'alt'].includes(prop),
  })

  const imageUrl = data.mainImage
    ? urlFor(data.mainImage.asset).width(620).height(560).url()
    : ''

  return (
    <Link href={`${section}/${data.slug.current}`}>
      <MotionBox
        cursor='pointer'
        position='relative'
        onMouseEnter={() => {
          setIsShown(true)
        }}
        onMouseLeave={() => {
          setIsShown(false)
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box width='620' height={['300', '560']}>
          <ChakraImage
            src={imageUrl}
            alt={`${data.title}'s image`}
            filter='auto'
            layout='fill'
            transition='all 0.5s ease'
            _hover={{
              brightness: '50%',
            }}
          />
        </Box>
        {isShown ? (
          section !== Section.Projects ? (
            <>
              <Box position='absolute' bottom='8px' pb='8' pl='8'>
                <Heading size='lg' color='white'>
                  {data.title}
                </Heading>
              </Box>
            </>
          ) : (
            <>
              <HStack position='absolute' top='0px' pt='8' pl='8'>
                <Text fontSize='md' color='white'>
                  {data.type}
                </Text>
                <Text fontSize='md' color='white'>
                  {`${data.size} SQM`}
                </Text>
              </HStack>
              <Box position='absolute' bottom='8px' pb='8' pl='8'>
                <Heading size='lg' color='white'>
                  {data.title}
                </Heading>
              </Box>
            </>
          )
        ) : null}
      </MotionBox>
    </Link>
  )
}
