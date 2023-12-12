import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PublicRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.authReducer)

  return !isLogin ? <>{children}</> : <Navigate to='/board' />
}
