import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { checkLogin } from '~/redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const { isLogin } = useSelector((state) => state.authReducer)

  // const isLogin = true

  // useEffect(() => {
  //   dispatch(checkLogin())

  //   navigate('/board')
  // }, [])

  // const isLogin = true

  return isLogin ? <>{children}</> : <Navigate to='/trello-frontend/signIn' />
}
