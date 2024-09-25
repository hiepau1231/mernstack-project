import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: red[500],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      secondary: red[500],
    },
  },
})
