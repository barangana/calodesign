import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Blogs, Project } from '../../utils/types/sanity-typings'
import { Card } from './Card'

interface ListProps {
  data: [Project | Blogs]
  section: string
}

export const Lists: React.FC<ListProps> = ({ data, section }) => {
  return (
    <SimpleGrid columns={2} spacingX={15}>
      {data.map((single) => (
        <Card key={single._id} data={single} section={section} />
      ))}
    </SimpleGrid>
  )
}
