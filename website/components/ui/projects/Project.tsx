import { Box, chakra, Heading, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { urlFor } from '../../../clients/sanity'
import { Project } from '../../../utils/types/sanity-typings'

interface ProjectsProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectsProps> = ({ project }) => {
  // Can remove useState, use display:none for text on hover of image to show details
  const [isShown, setIsShown] = useState(false)
  const imageUrl = project.mainImage
    ? urlFor(project.mainImage.asset).width(620).height(560).url()
    : ''

  const ProjectImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ['width', 'height', 'src', 'alt'].includes(prop),
  })

  return (
    <Link href={`/projects/${project.slug.current}`} passHref>
      <Box
        position='relative'
        onMouseEnter={() => {
          setIsShown(true)
        }}
        onMouseLeave={() => {
          setIsShown(false)
        }}
      >
        <ProjectImage
          src={imageUrl}
          alt='test'
          width={620}
          height={560}
          filter='auto'
          _hover={{
            brightness: '55%',
          }}
        />
        {isShown ? (
          <>
            <HStack position='absolute' top='0px'>
              <Text size='sm' color='white'>
                {project.type}
              </Text>
              <Text size='sm' color='white'>
                {`${project.size} SQM`}
              </Text>
            </HStack>
            <Box position='absolute' bottom='8px'>
              <Heading size='lg' color='white'>
                {project.title}
              </Heading>
            </Box>
          </>
        ) : null}
      </Box>
    </Link>
  )
}
