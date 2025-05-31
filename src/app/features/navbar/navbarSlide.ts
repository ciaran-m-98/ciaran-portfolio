import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
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
    },
    toggleNavbar: (state, action: PayloadAction<boolean>) => {
      state.navbarIsOpen = action.payload
    }
  },
})

export const { openNavbar, closeNavbar, toggleNavbar } = navbarSlice.actions

export const selectNavbarIsOpen = (state: RootState) => state.navbar.navbarIsOpen


export default navbarSlice.reducer
