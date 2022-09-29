import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
    Button: {
      variants: {
        primary: {
          bg: 'black',
          color: 'white',
          fontWeight: 'normal',
          borderRadius: 0,
          borderColor: 'white',
          borderWidth: '1px',

          _hover: {
            bg: 'white',
            color: 'black',
          },
        },
      },
    },
  },
})

export default theme
