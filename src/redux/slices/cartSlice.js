import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
  cartAdded: 0,
};
const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      state.carts.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer
