// Board detail
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import AppBar from '../../components/AppBar'

function Board() {
    const theme = useTheme()
    return (
        <Box sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <AppBar />
          <Box sx={{
            height: theme.trello.boardBarHeight,
            width: '100%',
            backgroundColor: 'primary.dark',
            display: 'flex',
            alignItems: 'center'
          }}>
            Board bar
          </Box>
          <Box sx={{
            flexGrow: 1,
            width: '100%',
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center'
          }}>
            Board Content
          </Box>
        </Box>
    )
}

export default Board