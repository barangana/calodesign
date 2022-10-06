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
    shouldForwardProp: (prop) =>
      ['width', 'height', 'src', 'alt'].includes(prop),
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
        <ChakraImage
          src={imageUrl}
          alt={`${data.title}'s image`}
          width={620}
          height={560}
          filter='auto'
          transition='all 0.5s ease'
          _hover={{
            brightness: '50%',
          }}
        />
        {isShown ? (
          section !== Section.Projects ? (
            <>
              <HStack position='absolute' top='0px'></HStack>
              <Box position='absolute' bottom='8px'>
                <Heading size='lg' color='white'>
                  {data.title}
                </Heading>
              </Box>
            </>
          ) : (
            <>
              <HStack position='absolute' top='0px'>
                <Text size='sm' color='white'>
                  {data.type}
                </Text>
                <Text size='sm' color='white'>
                  {`${data.size} SQM`}
                </Text>
              </HStack>
              <Box position='absolute' bottom='8px'>
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
