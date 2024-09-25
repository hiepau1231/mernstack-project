import React from 'react'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import {useColorScheme} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  )
}

function App() {
  const theme = useTheme()
  console.log('Current theme mode:', theme.palette.mode)

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', padding: 2 }}>
      <Typography variant="h1" gutterBottom>Hiep Dev</Typography>
      <ModeToggle />
      <Typography variant="h2" color="text.secondary" gutterBottom>
        Hiep Dev (Secondary Color)
      </Typography>
      <Box sx={{ '& > button': { m: 1 } }}>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Box>
      <Box sx={{ '& > svg': { m: 1 } }}>
        <AccessAlarmIcon />
        <ThreeDRotation />
        <HomeIcon />
      </Box>
      <Box sx={{ '& > svg': { m: 1 } }}>
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
      <HomeIcon color="error" />
      <HomeIcon color="warning" />
      <HomeIcon color="info" />
      <HomeIcon color="success" />
      </Box>
    </Box>
  )
}

export default App
