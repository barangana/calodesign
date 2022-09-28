import { Box } from '@chakra-ui/react'
import React from 'react'
import { Blogs, Project } from '../../utils/types/sanity-typings'

interface ListProps {
  data: [Project | Blogs]
}

export const Lists: React.FC<ListProps> = ({ data }) => {
  return (
    <Box>
      {data.map((single) => (
        <Box key={single._id}>{single.title}</Box>
      ))}
    </Box>
  )
}
