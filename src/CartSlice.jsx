import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const recalculateTotals = (state) => {
  state.totalQuantity = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  state.totalAmount = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          price: Number(newItem.price),
          quantity: 1,
        });
      }

      recalculateTotals(state);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      recalculateTotals(state);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(
        (item) => item.id === id
      );

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            (i) => i.id !== id
          );
        } else {
          item.quantity = quantity;
        }

        recalculateTotals(state);
      }
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          price: Number(newItem.price),
          quantity: 1,
        });
      }

      recalculateTotals(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
        recalculateTotals(state);
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (i) => i.id !== action.payload
          );
        }

        recalculateTotals(state);
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      recalculateTotals(state);
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;