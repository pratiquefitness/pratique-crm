import { configureStore } from '@reduxjs/toolkit'

import globalSlice from './slices/global'
import loginSlice from './slices/login'

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    login: loginSlice.reducer
  }
})

export default store
