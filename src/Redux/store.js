import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './product/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
