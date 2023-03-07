import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const FindProduct = state.find((item) => action.payload.id === item.id);
      if (FindProduct) {
        FindProduct.quantity += 1;
      } else {
        const ProductClone = { ...action.payload, quantity: 1 };
        state.push(ProductClone);
      }
    },
    RemoveFromCart: (state, action) => {
      const RemoveProduct = state.find((item) => action.payload.id === item.id);
      if (RemoveProduct) {
        RemoveProduct.quantity -= 1;
      } else {
        const RemoveProductMinus = { ...action.payload, quantity: 1 };
        state.push(RemoveProductMinus);
      }
    },
    DeleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    Clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, DeleteFromCart, Clear, RemoveFromCart } =
  CartSlice.actions;

export default CartSlice.reducer;
