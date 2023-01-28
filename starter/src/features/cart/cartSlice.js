import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;

      state.cartItems = cartItems.filter(item => {
        return item.id !== itemId;
      });
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
      if (cartItem.amount === 0) {
        return cartItem.amount = 0;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach(item => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    }
  }
});

// console.log(cartSlice);

export const { clearCart, removeItem, decrease, increase, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;