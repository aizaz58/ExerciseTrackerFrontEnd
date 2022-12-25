import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './api/AuthApi'
import authSlice from './auth/authSlice'

export const store=configureStore({
    reducer:{
[apiSlice.reducerPath]:apiSlice.reducer,
auth:authSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})
setupListeners(store.dispatch)


