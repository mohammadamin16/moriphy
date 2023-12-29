import styles from "./SearchPage.module.css";
import { Header } from "../../components/header/Header";
import { SearchBar } from "../../components/searchbar/Searchbar";
import { FullProduct } from "../../components/fullProduct/FullProduct";
import { useProducts } from "../../api/useProducts";
export function SearchPage() {
  const { list } = useProducts();
  return (
    <div className={styles.container}>
      <Header showLogo />
      <SearchBar />
      <div className={styles.products_container}>
        {list.map((product) => (
          <FullProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
