import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../stores/cartStore'
import { ProductCartDetail } from '../type/cart-types'

interface CartState {
  value: ProductCartDetail[]
}

const initialState: CartState = {
  value: []
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload)
    },
    incrementQuantity: (state, action) => {
      console.log(action.payload);
      const index = state.value.findIndex(item=> item.cartId === action.payload.cartId)
      state.value[index].quantity += 1
    },
    decrementQuantity: (state, action) => {
      console.log(action.payload);
      const index = state.value.findIndex(item=> item.cartId === action.payload.cartId)
      state.value[index].quantity -= 1
    }
  },
})

export const { addToCart, incrementQuantity, decrementQuantity } = counterSlice.actions
export const getProductInCartDetails = (state: RootState) => state.carts.value
export default counterSlice.reducer