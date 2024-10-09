import Box from '@mui/material/Box'

function BoardBars() {
  return (
    <Box sx={(theme) => ({
        height: theme.trello.boardBarHeight,
        width: '100%',
        backgroundColor: 'primary.dark',
        display: 'flex',
        alignItems: 'center'
    })}>
        Board bar
    </Box>
  )
}

export default BoardBars