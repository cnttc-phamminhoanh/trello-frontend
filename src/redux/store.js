import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import authReducer from './slices/authSlice'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'

const rootPersistConfig = {
  key: 'root',
  storage
}

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['isLoggedIn']
}

const rootReducers = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer)
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware]
})

export const persistor = persistStore(store)

export default store
