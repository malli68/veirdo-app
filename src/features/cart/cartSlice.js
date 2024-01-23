import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[],
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
        const newItem = action.payload;
        state.items.push(newItem);
      },
    incrementCartCount: (state) => {
      state.count += 1;
    },
    updateQuantity: (state, action) => {
        const { productId, quantity } = action.payload;
        const item = state.items.find((item) => item.product.id === productId);
        if (item) {
          item.quantity = quantity;
        }
      },
  },
});

export const {addToCart, incrementCartCount, updateQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export default cartSlice.reducer;