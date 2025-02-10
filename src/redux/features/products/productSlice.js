import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Product 1",
    price: 150,
    category: "Gadgets",
    image:
      "https://images.unsplash.com/photo-1713470599173-df6d561f8500?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2021-10-01",
  },
  {
    id: 2,
    name: "Product 2",
    price: 160,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1713470599173-df6d561f8500?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2021-10-01",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: state.length > 0 ? state[state.length - 1].id : 1,
        ...action.payload,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
