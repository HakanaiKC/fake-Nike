import { configureStore } from "@reduxjs/toolkit"
import cartReducer from '../reducers/cartSlice'
import favouritesReducer from '../reducers/favouriteSlice'

export const store = configureStore({
    reducer: {
      carts: cartReducer,
      favourites: favouritesReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch