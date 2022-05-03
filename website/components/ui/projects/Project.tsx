import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectProps {
  title: string
  type: string
  size: string
}

export const ProjectCard: React.FC<ProjectProps> = ({ title, type, size }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Box
      position='relative'
      onMouseEnter={() => {
        setIsShown(true)
      }}
      onMouseLeave={() => {
        setIsShown(false)
      }}
    >
      <Image src={'/test.jpg'} alt='test' width={620} height={560} />
      {isShown ? (
        <>
          <HStack position='absolute' top='0px'>
            <Text size='sm' color='white'>
              {type}
            </Text>
            <Text size='sm' color='white'>
              {size}
            </Text>
          </HStack>
          <Box position='absolute' bottom='8px'>
            <Heading size='lg' color='white'>
              {title}
            </Heading>
          </Box>
        </>
      ) : null}
    </Box>
  )
}
