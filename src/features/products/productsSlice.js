// redux/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {BLACk_IMAGE, SHIRT_IMAGE, TOM_IMAGE, T_IMAGE} from '../../utils/constants'
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      { id: 1, name: 'Product 1', image: TOM_IMAGE, offerPrice: 19.99, actualPrice: 29.99, discount: 33, rating: 4.5, colorAvailability: ['Red', 'Blue', 'Green'] },
      { id: 2, name: 'Product 2', image: SHIRT_IMAGE, offerPrice: 24.99, actualPrice: 39.99, discount: 38, rating: 4.2, colorAvailability: ['Black', 'White', 'Gray'] },
      { id: 3, name: 'Product 3', image: BLACk_IMAGE, offerPrice: 24.99, actualPrice: 39.99, discount: 38, rating: 4.2, colorAvailability: ['Black', 'White', 'Gray'] },  // Add more products as needed
      { id: 4, name: 'Product 4', image: T_IMAGE, offerPrice: 24.99, actualPrice: 39.99, discount: 38, rating: 4.2, colorAvailability: ['Black', 'White', 'Gray'] },
      { id: 5, name: 'Product 5', image: TOM_IMAGE, offerPrice: 19.99, actualPrice: 29.99, discount: 33, rating: 4.5, colorAvailability: ['Red', 'Blue', 'Green'] },
      { id: 6, name: 'Product 6', image: BLACk_IMAGE, offerPrice: 24.99, actualPrice: 39.99, discount: 38, rating: 4.2, colorAvailability: ['Black', 'White', 'Gray'] },
      { id: 7, name: 'Product 7', image: BLACk_IMAGE, offerPrice: 24.99, actualPrice: 39.99, discount: 38, rating: 4.2, colorAvailability: ['Black', 'White', 'Gray'] },  // Add more products as needed
      { id: 8, name: 'Product 8', image: T_IMAGE, offerPrice: 24.99, actualPrice: 39.99, discount: 38, rating: 4.2, colorAvailability: ['Black', 'White', 'Gray'] },
      { id: 9, name: 'Product 9', image: SHIRT_IMAGE, offerPrice: 24.99, actualPrice: 39.99, discount: 38, rating: 4.2, colorAvailability: ['Black', 'White', 'Gray'] },
      { id: 10, name: 'Product 10', image: BLACk_IMAGE, offerPrice: 24.99, actualPrice: 39.99, discount: 38, rating: 4.2, colorAvailability: ['Black', 'White', 'Gray'] },  // Add more products as needed
      { id: 11, name: 'Product 11', image: T_IMAGE, offerPrice: 24.99, actualPrice: 39.99, discount: 38, rating: 4.2, colorAvailability: ['Black', 'White', 'Gray'] },
    ],
    currentProduct: null,
    likeCount: 0,
    cart: [],
    likedProducts: [],
},
reducers: {
  setCurrentProduct: (state, action) => {
    state.currentProduct = action.payload;
  },
  toggleLike: (state, action) => {
    const product = state.products.find((p) => p.id === action.payload);
    if (product) {
      product.liked = !product.liked;
      state.likeCount += product.liked ? 1 : -1;
    }
  },
  addToLiked: (state, action) => {
    const productId = action.payload;
    if (!state.likedProducts.includes(productId)) {
      state.likedProducts.push(productId);
    }
  },
  removeFromLiked: (state, action) => {
    const productId = action.payload;
    state.likedProducts = state.likedProducts.filter(id => id !== productId);
  },
  addToCart: (state, action) => {
    state.cart.push(action.payload);
  },
},
});

export const { setCurrentProduct, toggleLike, addToCart, addToLiked, removeFromLiked } = productsSlice.actions;
export const selectLikedProducts = state => state.products.likedProducts;
export const selectLikeCount = state => state.products.likedProducts.length;
export const selectProducts = (state) => state.products.products;
// export const selectLikeCount = (state) => state.products.likeCount;
export const selectCartCount = (state) => state.products.cart.length;

export default productsSlice.reducer;