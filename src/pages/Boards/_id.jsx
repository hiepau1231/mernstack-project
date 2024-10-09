import { Box } from '@mui/material'
import AppBar from '../../components/AppBar'

function Board() {
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <AppBar />
            <Box sx={(theme) => ({
                height: theme.trello.boardBarHeight,
                width: '100%',
                backgroundColor: 'primary.dark',
                display: 'flex',
                alignItems: 'center'
            })}>
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