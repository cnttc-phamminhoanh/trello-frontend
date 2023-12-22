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
              src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYR4j0-4oLB6J-HkvZ30Bddw2W6zYIvOC51eZG1ocs7MDZrAQex85iw4-6_ogGnghl-xwWjZoJXOz_5LO85_Uh-rNe7IPA=w900-h1470"
            />
          </Tooltip>
          <Tooltip title="Ai Hoai">
            <Avatar
              alt="AiHoai2"
              src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTwhuu2qXzUYWtQkhpIDTdiD49sjTlOteYAP5WT8GTqINNNHyJebIjAtKsnosn5_v-U683R1bdxrG1JoQRdAewqoE7sww=w1576-h1470"
            />
          </Tooltip>
          <Tooltip title="Ai Hoai">
            <Avatar
              alt="AiHoai3"
              src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTs5izWMbR5HAH0RmaxRleE24nz1Q-BYEBY8XGDcwccbDbLv11HuIOvZIwvR82ry3tsT_ViPErcKToZzRLg-5j2EDDBcw=w1576-h1470"
            />
          </Tooltip>
          <Tooltip title="Ai Hoai">
            <Avatar
              alt="AiHoai4"
              src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTaFt7lpwMd_MVCiWBPzl6uqSrLxvSVFk7wYfzq5Gt4CdYrHyZNlZDV4WqTu_K0txG9gpK_8hPHvdhCBBP08KE93TrV=w1576-h1470"
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
