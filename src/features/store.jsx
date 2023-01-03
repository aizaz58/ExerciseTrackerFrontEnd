import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import { apiSlice } from './api/AuthApi'
import authSlice from './auth/authSlice'
import featuresSlice from './featuresSlice'

const rootReducer=combineReducers({
    auth:authSlice,
    [apiSlice.reducerPath]:apiSlice.reducer,
    feature:featuresSlice
})

const persistConfig = {
    key: 'root',
    version:1,
    storage,
    blacklist:[apiSlice.reducerPath],
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store=configureStore({
    reducer:
persistedReducer,

    
    middleware: (getDefaultMiddleware) =>

        getDefaultMiddleware({serializableCheck:{ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]}}).concat(apiSlice.middleware),
    
        devTools:true
})
setupListeners(store.dispatch)


export const persistor = persistStore(store)