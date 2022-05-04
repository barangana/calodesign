import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  colors: {
    black: {
      50: '#080808',
    },
    gray: {
      50: '#3A3E4B',
      100: '#828282',
    },
  },
})

export default theme
