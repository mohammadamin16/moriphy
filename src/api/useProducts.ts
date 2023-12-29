import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { getProducts } from "./products";
import { ProductsAction } from "../products/products.slice";

export const useProducts = () => {
  const { list, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const loadProducts = async () => {
    const products = await getProducts();

    if (list) {
      dispatch(ProductsAction.setList({ list: products }));
    }
    console.log(products);
  };

  useEffect(() => {
    if (!loading && list.length === 0) loadProducts();
  }, [list, loading]); // eslint-disable-line react-hooks/exhaustive-deps

  return { list };
};
