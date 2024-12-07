import { createSlice } from '@reduxjs/toolkit'

const  getCart = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [] ;
}


export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    items: getCart()
  },
  reducers: {
    increment: (state,action) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    decrement: (state,action) => {
      const idToRemove = action.payload.id;
      state.items = state.items.filter((item) => item.id !== idToRemove); 
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement} = counterSlice.actions

export default counterSlice.reducer