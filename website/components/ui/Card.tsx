import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { urlFor } from '../../clients/sanity'
import { Blogs, Project } from '../../utils/types/sanity-typings'

// TODO: Fix hover state for projects and blogs
interface CardProps {
  data: Project | Blogs
  section: string
}

export const Card: React.FC<CardProps> = ({ data, section }) => {
  const [isShown, setIsShown] = useState(false)

  const imageUrl = data.mainImage
    ? urlFor(data.mainImage.asset).width(620).height(560).url()
    : ''

  return (
    <Link href={`${section}/${data.slug.current}`}>
      <Box
        position='relative'
        onMouseEnter={() => {
          setIsShown(true)
        }}
        onMouseLeave={() => {
          setIsShown(false)
        }}
      >
        <Image src={imageUrl} alt='test' width={620} height={560} />
        {isShown ? (
          <>
            <HStack position='absolute' top='0px'></HStack>
            <Box position='absolute' bottom='8px'>
              <Heading size='lg' color='white'>
                {data.title}
              </Heading>
            </Box>
          </>
        ) : null}
      </Box>
    </Link>
  )
}
