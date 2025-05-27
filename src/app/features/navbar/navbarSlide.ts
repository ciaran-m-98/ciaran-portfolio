import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/service/store'


export interface NavbarState {
    navbarIsOpen: boolean
}

const initialState: NavbarState = {
    navbarIsOpen: false
}


export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openNavbar: state => {
      state.navbarIsOpen = true
    },
    closeNavbar: state => {
        state.navbarIsOpen = false
    }
  },
})

export const { openNavbar, closeNavbar } = navbarSlice.actions

export const selectNavbarIsOpen = (state: RootState) => state.navbar.navbarIsOpen


export default navbarSlice.reducer
