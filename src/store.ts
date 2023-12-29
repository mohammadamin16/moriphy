import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./products/products.slice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
