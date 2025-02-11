import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.productId === action.payload.id
      );
      if (existingProduct) {
        alert("Product already added to cart");
      } else {
        const newCartItem = {
          pid: Date.now(), // Generate unique ID
          ...action.payload,
          productId: action.payload.id,
          quantity: 1,
        };

        console.log("New Item Added:", newCartItem); // Log the entire object
        console.log("Assigned ID:", newCartItem.id); // Log only the ID

        state.push(newCartItem);
      }
    },
    // increase quantity
    increaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        product.quantity++;
      }
    },
    // decrease quantity
    decreaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        product.quantity--;
      }
    },
    //remove from cart
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
