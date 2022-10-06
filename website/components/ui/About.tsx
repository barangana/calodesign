import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import info from '../../utils/info.json'

// TODO: Have 1 text on the top left and bottom right (possibly with grid)
// TODO: Do styling
export const About = () => {
  return (
    <Box h='100vh'>
      <Heading>{info.about_us_title}</Heading>
      <Text>{info.about_us_paragraph}</Text>
      <Heading>{info.about_us_title_2}</Heading>
      <Text>{info.about_us_paragraph_2}</Text>
    </Box>
  )
}
