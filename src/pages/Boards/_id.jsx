import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'
import BoardBars from './BoardBars'
import BoardContent from './BoardContent'
import { Box } from '@mui/material'
function Board() {
    return (
      <Container disableGutters maxWidth={false} sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
            <AppBar />
            <BoardBars />
            <BoardContent />
        </Container>
    )
}

export default Board