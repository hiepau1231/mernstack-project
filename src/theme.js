import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red, teal, cyan, orange ,deepOrange } from '@mui/material/colors'

export const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px',
    boardContentHeight: 'calc(100vh - 106px)',
  },
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({theme}) => ({
          textTransform : 'none',
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({theme}) => ({
          fontSize: 14,
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({theme}) => ({
          color:theme.palette.primary.main,
          fontSize: 14,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&:hover': {
            ' .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
          },
        }),
      },
    },
  },
})

