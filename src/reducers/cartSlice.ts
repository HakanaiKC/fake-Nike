import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stores/cartStore";
import { ProductCartDetail } from "../type/cart-types";

interface CartState {
  value: ProductCartDetail[];
}

const initialState: CartState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    incrementQuantity: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.cartId === action.payload.cartId
      );
      state.value[index].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.cartId === action.payload.cartId
      );
      if (action.payload.quantity > 0) state.value[index].quantity -= 1;
    },
    deleteCartProduct: (state, action) => {
      state.value = state.value.filter(
        (product) => product.cartId !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteCartProduct,
} = counterSlice.actions;
export const getProductInCartDetails = (state: RootState) => state.carts.value;
export default counterSlice.reducer;
