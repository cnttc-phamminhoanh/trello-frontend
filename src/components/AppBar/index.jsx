import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import TrelloIcon from '~/assets/trello.svg?react'
import Typography from '@mui/material/Typography'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Profiles from './Menu/Profiles'
import Templates from './Menu/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

function AppBar() {
  return (
    <Box sx={{
      width: '100%', // chiều ngang 100%, nó ăn theo thằng cha (container)
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex', // các phần từ bên trong sẽ tự động căn chỉnh cho phù hợp
      alignItems: 'center', // cách phần bên trong Box sẽ nằm ở giữa theo chiều dọc
      justifyContent: 'space-between', // giữa các phần tử phía trong sẽ được cách nhau một khoảng, khoảng này sẽ tự động căn chỉnh, tuỳ theo số lượng phần tử
      gap: 2,
      paddingX: 2,
      overflowX: 'auto' // thanh scroll bar theo chiều ngang
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined" startIcon={<LibraryAddIcon />}>Create</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search ... hi" type="search" size='small' sx={{ minWidth: 120 }} />
        <ModeSelect />
        { /* component Tooltip có tác dụng khi hover vào sẽ hiện text trong prop title (Notifications) */}
        <Tooltip title="Notifications">
          { /* component Badge làm phần chuông thông báo, variant="dot" có dấu chấm đỏ */}
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
