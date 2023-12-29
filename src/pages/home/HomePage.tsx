import { Header } from "../../components/header/Header";
import { SearchBar } from "../../components/searchbar/Searchbar";
import { VitrinRow } from "../../components/vitrin/Vitrin";
import styles from "./HomePage.module.css";
import { useProducts } from "../../api/useProducts";
import { useMemo } from "react";

export function HomePage() {
  const products = useProducts();
  const productsPartOne = useMemo(() => products.list.slice(0, 10), [products]);
  const productsPartTwo = useMemo(() => products.list.slice(10, 20), [
    products,
  ]);
  return (
    <div>
      <Header />
      <p className={styles.title}>Moriphy!</p>
      <SearchBar />
      <VitrinRow direction="right" products={productsPartOne} />
      <VitrinRow direction="left" products={productsPartTwo} />
    </div>
  );
}
