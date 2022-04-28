import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface ProjectProps {
  title: string
  type: string
  size: string
}

export const ProjectCard: React.FC<ProjectProps> = ({ title, type, size }) => {
  return (
    <Box>
      <Image src={'/test.jpg'} alt='test' width={300} height={300} />
      <Box>
        {title}
        {type}
        {size}
      </Box>
    </Box>
  )
}
