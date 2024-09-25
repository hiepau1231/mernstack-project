import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red, teal, cyan, orange ,deepOrange } from '@mui/material/colors'

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[500],
        },
        secondary: {
          main: deepOrange[500],
        },
        error: {
          main: red.A400,
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: cyan[500],
        },
        secondary: {
          main: orange[500],
        },
        error: {
          main: red.A400,
        },
      },
    },
  },
})
