import { createSlice } from "@reduxjs/toolkit"

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as any[]
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {      
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  }
});


export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;