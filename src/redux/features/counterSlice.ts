import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

/**
 * Slice del contador.
 */
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /**
     * Incrementa el valor del contador en 1.
     * @param state - El estado actual del contador.
     */
    increment: (state) => {
      state.value += 1;
    },
    /**
     * Decrementa el valor del contador en 1.
     * @param state - El estado actual del contador.
     */
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
