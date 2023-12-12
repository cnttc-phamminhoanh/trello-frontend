import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

function BoardBar() {
  const MENU_STYLES = {
    color: 'primary.main',
    bgcolor: 'white',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
      color: 'primary.main'
    },
    '&:hover': {
      bgColor: 'primary.50'
    }
  }

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="MinhOanhDev Stack Board"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>

        {/*/ max = 4, sẽ hiển thị 3 avatar, cái còn lại hiển thị giá trị avatar còn lại trong AvatarGroup, trong trường hợp này sẽ hiện +2 */}
        <AvatarGroup
          max={6}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="Minh Oanh">
            <Avatar
              alt="MinhOanhDev"
              src="https://yt3.googleusercontent.com/ytc/APkrFKbManL7pMs6hleQWhWLrhRE4v5-ottI0b2D25f5oQ=s176-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
          <Tooltip title="Ai Hoai">
            <Avatar
              alt="AiHoai1"
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/182813747_1972914982875274_7016276539658401694_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=cHp11EsRw5MAX9CK1G3&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDUiwmpli1swrdwQaTo3GvrLUwTqcdIkxJA8t-IlVQD6A&oe=65813DE0"
            />
          </Tooltip>
          <Tooltip title="Ai Hoai">
            <Avatar
              alt="AiHoai2"
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/240533386_2085534481613323_4937301307249581325_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qbg0YDMCebcAX8ONCRd&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCMvQd7LyoeLcrk3jjRyy1Sibz3jakU-MzEnJranJ3s0w&oe=655FC42A"
            />
          </Tooltip>
          <Tooltip title="Ai Hoai">
            <Avatar
              alt="AiHoai3"
              src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/42953271_1134331483400299_8382358431742296064_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=HX2IMQWP2eMAX-HOETH&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDU2iozjXeJ6_H3BBhJjzJx29bKYUZquBK2SSh-B8c_KQ&oe=65813677"
            />
          </Tooltip>
          <Tooltip title="Ai Hoai">
            <Avatar
              alt="AiHoai4"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/105687944_1690594061107369_1970895468463617436_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=VIy8Ry5V7tQAX_Ph0ee&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDpKsiu4gfe_FI3Oi5B_jEQIGQHRQGcRt57_rfDUTp38A&oe=65813AF2"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="Alexander"
              src="#" />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="Bob"
              src="#" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
