import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
};
const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.carts.findIndex(
        (cartItem) => cartItem.product.id === action.payload.product.id
      );
      if (item === -1) {
        state.carts.push(action.payload);
      } else {
        state.carts[item].quantity++;
      }
    },
    emptyCart: (state) => {
      state.carts.length = 0;
    },
    delItem: (state, action) => {
      const item = state.carts.findIndex(
        (cartItem) => cartItem.product.id === action.payload
      );
      state.carts.splice(item, 1);
    },
    incItemCount: (state, action) => {
      const item = state.carts.findIndex(
        (cartItem) => cartItem.product.id === action.payload
      );
      state.carts[item].quantity++;
    },
    decItemCount: (state, action) => {
      const item = state.carts.findIndex(
        (cartItem) => cartItem.product.id === action.payload
      );
      if(state.carts[item].quantity > 0){
      state.carts[item].quantity--;
      }
    },
  },
});

export const { addItem, emptyCart, delItem, decItemCount, incItemCount } =
  cartSlice.actions;
export default cartSlice.reducer;
