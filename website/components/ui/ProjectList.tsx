import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Section } from '../../utils/types/enums'
import { Project } from '../../utils/types/sanity-typings'
import { Card } from './Card'
import info from '../../utils/info.json'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { imagesArray } from '../../utils/types/images'

interface ProjectsProps {
  projects: [Project]
}

const MotionFlex = motion(Flex)

export const ProjectList: React.FC<ProjectsProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((currentIndex) => currentIndex + 1)
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  const image = imagesArray[currentIndex % imagesArray.length].src

  return (
    <Box mb={12}>
      <Flex justify='center'>
        <Heading pb={12}>{info.our_projects.toUpperCase()}</Heading>
      </Flex>
      <SimpleGrid columns={[1, 2]} spacing={15}>
        {projects.map((project) => (
          <Card key={project._id} data={project} section={Section.Projects} />
        ))}
        <Link href='/projects'>
          <MotionFlex
            bgImage={image}
            bgSize='cover'
            justify='center'
            cursor='pointer'
            width='620'
            height={['300', '560']}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <Flex align='center'>
              <Heading size='md' color='white'>
                {info.view_more.toUpperCase()}
              </Heading>
            </Flex>
          </MotionFlex>
        </Link>
      </SimpleGrid>
    </Box>
  )
}
