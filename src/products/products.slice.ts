import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../api/products";

interface ProductsState {
  loading: boolean;
  list: Product[];
}

const initialState: ProductsState = {
  loading: false,
  list: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.loading = action.payload.loading;
    },
    setList: (state, action: PayloadAction<{ list: Product[] }>) => {
      state.list = action.payload.list;
    },
  },
});

export const ProductsAction = productSlice.actions;

export const ProductReducer = productSlice.reducer;
