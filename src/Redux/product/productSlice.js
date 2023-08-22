import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  productData: [],
  isLoading: true,
  selectedData: null,
  selectedProductData: null,
};

const API_BASE_URL = 'https://api-test.innoloft.com';

export const fetchSingleProduct = createAsyncThunk(
  'coin/fetchSingleProduct',
  async (uuid, thunkAPI) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/product/${uuid}/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (thunkAPI) => {
    try {
      const response = await axios.request(`${API_BASE_URL}/product/6781/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  },
);

export const removeproductItem = createAsyncThunk(
  'product/removeproductItem', 
  async (uuid, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/product/${uuid}`);
      thunkAPI.dispatch(fetchProduct());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedData = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProductData = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(removeproductItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeproductItem.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeproductItem.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { reducer: productReducer } = productSlice;

export default productSlice.reducer;
