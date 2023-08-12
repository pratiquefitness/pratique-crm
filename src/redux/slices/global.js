import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  menuToggle: false,
  themeMode: 'light'
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsAuthenticated(state, action) {
      return {
        ...state,
        isAuthenticated: action.payload
      }
    },
    setMenuToggle(state, action) {
      return {
        ...state,
        menuToggle: action.payload
      }
    },
    setThemeMode(state, action) {
      return {
        ...state,
        themeMode: action.payload
      }
    }
  }
})

export const { setIsAuthenticated, setMenuToggle } = globalSlice.actions

export default globalSlice
