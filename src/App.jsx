import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import {useColorScheme} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Container from '@mui/material/Container'
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


function App() {
  const theme = useTheme()
  console.log('Current theme mode:', theme.palette.mode)

  return (
    <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
    <Box sx={{height: theme.trello.appBarHeight, width: '100%', backgroundColor: 'primary.light', display: 'flex', alignItems: 'center'}}>
      <ModeSelect />
    </Box>
    <Box sx={{height: theme.trello.boardBarHeight, width: '100%', backgroundColor: 'primary.dark', display: 'flex', alignItems: 'center'}}>
      Board board
    </Box>
    <Box sx={{height: theme.trello.boardContentHeight, width: '100%', backgroundColor: 'primary.main', display: 'flex', alignItems: 'center'}}>
      Board Content
    </Box>
    </Container>
  )
}

export default App  
