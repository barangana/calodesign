import { extendTheme } from '@chakra-ui/react'
import { Button } from './components'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
    button: 'Montserrat, sans-serif',
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
  components: {
    Button,
  },
})

export default theme
