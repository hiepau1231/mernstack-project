//AppBar
import { Box } from '@mui/material'
import ModeSelect from '../ModeSelect'

function AppBar() {
 return (
    <Box sx={(theme) => ({
      backgroundColor: 'primary.light',
      width: '100%',
      height: theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
    })}>
      <ModeSelect />
    </Box>
  )
}

export default AppBar