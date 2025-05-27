import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import  navbarReducer from "@/app/features/navbar/navbarSlide"
export const makeStore = () => {
  return configureStore({
    reducer: {
      navbar: navbarReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
