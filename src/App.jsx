import React from 'react'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import {useColorScheme} from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Brightness4Icon from '@mui/icons-material/Brightness4'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="mode-select-label">Mode</InputLabel>
      <Select
        labelId="mode-select-label"
        id="mode-select"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'light'}>
        <Box sx={{display: 'flex', alignItems: 'center' , gap: '8px'}}>
          <LightModeOutlinedIcon fontSize='small' />
          Light
        </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
        <Box sx={{display: 'flex', alignItems: 'center' , gap: 1 }}>
          <DarkModeOutlinedIcon fontSize='small' />
          Dark
        </Box>
        </MenuItem>
        <MenuItem value={'system'}>
        <Box sx={{display: 'flex', alignItems: 'center' , gap: 2}}>
          <Brightness4Icon fontSize='small' />
          System
        </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  // console.log('prefersDarkMode', prefersDarkMode)
  // console.log('prefersLightMode', prefersLightMode)
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
      <ModeSelect />
      <hr />
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
        <AccessAlarmIcon color="primary" />
        <ThreeDRotation color="secondary" />
        <HomeIcon color="error" />
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
