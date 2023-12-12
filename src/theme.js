// import { cyan, teal, deepOrange, orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '56px',
    boardBarHeight: '60px'
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange
  //     }
  //   },
  //   dark: {
  //     palette: {
  //       primary: cyan,
  //       secondary: orange
  //     }
  //   }
  // },
  components: {
    // ghi đè scroll bar
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // ghi đè kích thước
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#00b894'
          }
        }
      }
    },
    // ghi đè các thuộc tính của button component
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' // mặc đính text của button sẽ được viết hoa, textTransform: 'none' ngăn việc viết hoa
        }
      }
    },
    // ghi đè các thuộc tính của InputLabel component
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem'
          }
        }
      }
    },
    // ghi đè component ModeSelect
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            // theo mặc định boder sẽ là màu đen, ghi đè lại màu xanh
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light
            },
            // theo mặc đinh khi hover vào khung cũng màu đen, ghi đè lại màu xanh
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main
              }
            },
            // ghi đè lại độ dày của border
            '& fieldset': {
              borderWidth: '1px !important'
            }
          }
        }
      }
    },
    // ghi đè lại các thuộc tính của Select component
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            '.MuiSelect-iconOutlined': {
              color: theme.palette.primary.main
            }
          }
        }
      }
    }
  }
  // ...other properties
})

export default theme
