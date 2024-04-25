import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
    updateCount: (state, action) => {
      const [id, type] = action.payload;

      state.items = state.items.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            quantity: type === "minus" ? el.quantity - 1 : el.quantity + 1,
          };
        } else {
          return el;
        }
      });
    },
  },
});

export const { addToBasket, removeFromBasket, updateCount } =
  basketSlice.actions;

export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;
