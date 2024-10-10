import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import FilterIcon from '@mui/icons-material/Filter';
import BoltIcon from '@mui/icons-material/Bolt';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const MENU_STYLE = {
  backgroundColor: 'white',
  color: 'primary.main',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main',
    fontSize: '1.2rem',
  },
  '&:hover': {
    backgroundColor: 'primary.main',
    color: 'white',
  },
};

function BoardBars() {
  return (
    <Box
      sx={(theme) => ({
        height: theme.trello.boardBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5',
        paddingX: 2,
      })}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label='Hiep MernStack Dashboard'
          onClick={() => {
            console.log('click');
          }}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
          onClick={() => {
            console.log('click');
          }}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label='Add to google drive'
          onClick={() => {
            console.log('click');
          }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label='Automation'
          onClick={() => {
            console.log('click');
          }}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterIcon />}
          label='Filter'
          onClick={() => {
            console.log('click');
          }}
        />
      </Box>
      <Box display='flex' alignItems='center' gap={1}>
        <Button variant='outlined' startIcon={<PersonAddIcon />}>
          Invite
        </Button>

        <AvatarGroup max={7} total={30} sx={{ '& .MuiAvatar-root': { width: 35, height: 35, fontSize: 16 } }}>
          <Tooltip title='Hiep'>
            <Avatar
              alt='Hiep'
              src='https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/289116607_7968651796508674_6802436880124408757_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFv-a9NbEE3h2YnQL1F-IHBL0YkG2vVcQcvRiQba9VxB3kH5J5tnlbqqU0JZCJzMRmX1UN1kQMOL8qYWsSjgKSb&_nc_ohc=OurE7TfA_2gQ7kNvgFzBj58&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AmFl3rBffBHhwCa6btLy1s_&oh=00_AYAZ-MR7Vh6ZxLunhXJtr8T2yMKMwslhjpeiZaIuinFQ0Q&oe=670C2882'
            />
          </Tooltip>
          <Tooltip title='Hiep'>
            <Avatar
              alt='Minju'
              src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/356223760_260689419990858_5016692973151080963_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGC1Ax8Q5zPwHzdQIsbtDQ0jwXCk2WdTcuPBcKTZZ1Ny-1WKVSWgASkPkISire0-xcElWTJVsgcpZ5bh9DrQ1zN&_nc_ohc=7bLgHRc0nUIQ7kNvgFnqS-l&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AAfYOoJaID_lDGce9OaBPQR&oh=00_AYCkg1Suunjiq8XRmPKG1VOFGoTZ9YHp9kNOHugeL03d8g&oe=670D503E'
            />
          </Tooltip>
          <Tooltip title='Hiep'>
            <Avatar
              alt='Minju'
              src='https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/462085055_392537117259865_4908797369520783233_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_cE3MxTN0B52Qe54zMqDY4eYfi-apsAfh5h-L5qmwB9QRT5iAmNdbGE4F_-zU0MIqRufaaJWTJZnBqD1mUXKz&_nc_ohc=GeGqF-CZ-cUQ7kNvgGyljyf&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=AZyuZdSKjayQp2JTET3MG-G&oh=00_AYD_jrzHF_HTcuELxEXLRQf2lenTFMPawZdNaUA2SK1mqw&oe=670D54C6'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBars;
