import { Box } from '@mui/material';

function BoardContent() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Board Content
    </Box>
  );
}

export default BoardContent;
