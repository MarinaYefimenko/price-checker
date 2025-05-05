import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../api/axios'


interface Product {
  id: string
  name: string
  price: number
  unit: string
}

interface ProductsState {
  products: Product[],
  loading: boolean,
  error: string | null
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
}

// 🔹 Асинхронный thunk для получения продуктов
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
      const response = await api.get("/products");
      return response.data as Product[];
    }
  );

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  }
})

export default productsSlice.reducer
