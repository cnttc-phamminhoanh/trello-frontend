import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const checkLogin = createAsyncThunk('auth/checkLogin', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')

  return response.data
})

export const login = createAsyncThunk('auth/login', async (loginData) => {

  return loginData
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLogin: false,
    refreshToken: null,
    accessToken: null
  },
  reducers: {
    logout: (state) => {
      return {
        ...state,
        user: null,
        isLogin: false,
        refreshToken: null,
        accessToken: null
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkLogin.fulfilled, (state, action) => {
      // console.log('SUCCESS - checkLogin')
      if (action.payload?.length) {
        return {
          ...state,
          isLogin: true
        }
      }

      return state
    })

    builder.addCase(checkLogin.rejected, () => {
      // console.log('FAILURE - checkLogin')
      // console.log('state', state)
      // console.log('action', action)
    })

    builder.addCase(login.fulfilled, (state) => {
      // console.log('SUCCESS - login')
      // console.log('state', current(state))
      // console.log('action', action)

      return {
        ...state,
        isLogin: true
      }
    })

    builder.addCase(login.rejected, () => {
      // console.log('SUCCESS - login')
      // console.log('state', current(state))
      // console.log('action', action)
    })
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
