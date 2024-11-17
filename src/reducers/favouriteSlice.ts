import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../type/product-types";

interface ProductsFavouriteState {
  value: Product[];
}

const initialState: ProductsFavouriteState = {
  value: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      if (state.value.length === 0) {
        state.value.push(action.payload);
        return;
      }

      if (state.value.some(item => item.id === action.payload.id)) {
        state.value = state.value.filter(item => item.id !== action.payload.id)
        console.log(state.value);
      } else {
        state.value.push(action.payload);
      }
    },
    checkIsFavourite: (state, action) => {
      if (state.value.length > 0) {
        const index = state.value.findIndex((item) => item.id === action.payload.productDetails.id)
        state.value[index].isFavourite = action.payload.isFavourite
      }
    }
  },
});

export const {
  addToFavourite,
  checkIsFavourite
} = favouriteSlice.actions;
export default favouriteSlice.reducer;
