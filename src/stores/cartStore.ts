import { configureStore } from "@reduxjs/toolkit"
import cartReducer from '../reducers/cartSlice'

export const store = configureStore({
    reducer: {
      carts: cartReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch