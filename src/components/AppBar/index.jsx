//AppBar
import { Box } from '@mui/material';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Workspace from './Menus/Workspace';
import Recent from './Menus/Recent';
import Templates from './Menus/Templates';
import Starred from './Menus/Starred';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profile from './Menus/Profile';
import AddIcon from '@mui/icons-material/Add';

function AppBar() {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        height: theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
      })}
    >
      <Box display='flex' alignItems='center' gap={2}>
        <AppsIcon
          sx={{
            fontSize: 24,
            color: 'primary.main',
          }}
        />
        <Box display='flex' alignItems='center' gap={0.5}>
          <SvgIcon
            component={TrelloIcon}
            sx={{
              color: 'primary.main',
              fontSize: 20,
            }}
          />
          <Typography
            variant='span'
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              fontSize: '1.2rem',
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspace />
          <Recent />
          <Starred />
          <Templates />
        </Box>

        <Button
          variant='outlined'
          startIcon={<AddIcon />}
          sx={{
            minWidth: 'auto',
            padding: '3px 6px',
            '& .MuiButton-startIcon': {
              margin: 0,
            },
          }}
        >
          Create
        </Button>
      </Box>
      <Box display='flex' alignItems='center' gap={2}>
        <TextField
          id='outlined-search'
          label='Search...'
          type='search'
          size='small'
          sx={{ minWidth: 120 }}
        />
        <ModeSelect />
        <Tooltip title='Notifications'>
          <Badge color='secondary' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        <Tooltip title='Help' sx={{ cursor: 'pointer' }}>
          <HelpOutlineIcon sx={{ color: 'primary.main' }} />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
