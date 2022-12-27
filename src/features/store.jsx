import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './api/AuthApi'
import authSlice from './auth/authSlice'
import featuresSlice from './featuresSlice'

export const store=configureStore({
    reducer:{
[apiSlice.reducerPath]:apiSlice.reducer,
auth:authSlice,
feature:featuresSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})
setupListeners(store.dispatch)


