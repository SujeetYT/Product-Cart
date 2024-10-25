import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// action
export const fetchProducts = createAsyncThunk("fetchProducts", async () =>{
  try {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
  } catch (error) {
    return error
  }
})



export const GetProducts = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    products: [],
    error: null as string | null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.pending, (state)=>{
      state.isLoading = true,
      state.error = null
    });

    builder.addCase(fetchProducts.rejected, (state, action)=>{
      state.isLoading = false;
      state.error = action.error.message ?? null
    })
  },
})

export default GetProducts.reducer;