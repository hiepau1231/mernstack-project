import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
function App() {
  return (
    <>
      <div>Hiep Dev</div>
      <Button variant="outlined">text</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <br />
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
      <HomeIcon />
      <br />
      <br />
      <br />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="error" />
      <HomeIcon color="warning" />
      <HomeIcon color="info" />
      <HomeIcon color="success" />
    </>
  )
}

export default App
