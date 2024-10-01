//AppBar
import React from 'react'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ModeSelect from '../ModeSelect'

function AppBar() {
    const theme = useTheme()
  return (
    <Box sx={{
      width: '100%',
      height: theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <ModeSelect />
    </Box>
  )
}

export default AppBar